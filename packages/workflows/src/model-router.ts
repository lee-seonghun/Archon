import type { DagNode, WorkflowDefinition } from './schemas';
import type { WorkflowConfig } from './deps';

export type ModelStrategy = 'manual' | 'auto' | 'cost' | 'speed' | 'quality';

export interface RoutedModelSelection {
  provider: string;
  model?: string;
  reason: string;
}

interface ModelProfile {
  provider: string;
  model: string;
  quality: number;
  speed: number;
  cost: number;
}

const MODEL_PROFILES: Record<string, ModelProfile> = {
  codex: { provider: 'codex', model: 'gpt-5.3-codex', quality: 5, speed: 3, cost: 4 },
  reasoning: { provider: 'claude', model: 'gpt-5.5', quality: 5, speed: 3, cost: 4 },
  fast: { provider: 'claude', model: 'gpt-5.5-mini', quality: 3, speed: 5, cost: 2 },
};

const CODING_COMMAND_PATTERNS = [
  'implement',
  'fix',
  'self-fix',
  'simplify',
  'validate',
  'finalize-pr',
  'sync-pr',
  'resolve-conflicts',
  'refactor',
];

const REASONING_COMMAND_PATTERNS = [
  'plan',
  'classify',
  'synthesize',
  'summary',
  'report',
  'review-scope',
  'investigate',
  'research',
  'architect',
];

function getStrategy(workflow: WorkflowDefinition): ModelStrategy {
  const raw = (workflow as WorkflowDefinition & { model_strategy?: unknown }).model_strategy;
  if (raw === 'auto' || raw === 'cost' || raw === 'speed' || raw === 'quality') return raw;
  return 'manual';
}

function nodeText(node: DagNode): string {
  const parts = [node.id];
  if ('command' in node && node.command) parts.push(node.command);
  if ('prompt' in node && node.prompt) parts.push(node.prompt.slice(0, 500));
  return parts.join(' ').toLowerCase();
}

function isCodingNode(node: DagNode): boolean {
  if ('bash' in node || 'script' in node) return false;
  const text = nodeText(node);
  return CODING_COMMAND_PATTERNS.some(pattern => text.includes(pattern));
}

function isReasoningNode(node: DagNode): boolean {
  const text = nodeText(node);
  return REASONING_COMMAND_PATTERNS.some(pattern => text.includes(pattern));
}

function score(profile: ModelProfile, strategy: ModelStrategy): number {
  switch (strategy) {
    case 'cost':
      return profile.quality * 2 + profile.speed - profile.cost * 3;
    case 'speed':
      return profile.speed * 3 + profile.quality - profile.cost;
    case 'quality':
    case 'auto':
      return profile.quality * 3 + profile.speed - profile.cost;
    default:
      return 0;
  }
}

function best(candidates: ModelProfile[], strategy: ModelStrategy): ModelProfile {
  return [...candidates].sort((a, b) => score(b, strategy) - score(a, strategy))[0] ?? MODEL_PROFILES.reasoning;
}

export function resolveRoutedModel(
  workflow: WorkflowDefinition,
  node: DagNode,
  workflowProvider: string,
  workflowModel: string | undefined,
  config: WorkflowConfig
): RoutedModelSelection {
  if (node.provider || node.model) {
    const provider = node.provider ?? workflowProvider;
    const assistantConfig = config.assistants[provider] ?? {};
    return {
      provider,
      model: node.model ?? (provider === workflowProvider ? workflowModel : assistantConfig.model as string | undefined),
      reason: 'explicit node/provider model override',
    };
  }

  const strategy = getStrategy(workflow);
  if (strategy === 'manual') {
    const provider = workflowProvider;
    return { provider, model: workflowModel, reason: 'manual workflow defaults' };
  }

  if (isCodingNode(node)) {
    const selected = best([MODEL_PROFILES.codex], strategy);
    return { provider: selected.provider, model: selected.model, reason: `${strategy}: coding node` };
  }

  if (isReasoningNode(node)) {
    const selected = best([MODEL_PROFILES.reasoning, MODEL_PROFILES.fast], strategy);
    return { provider: selected.provider, model: selected.model, reason: `${strategy}: reasoning node` };
  }

  const selected = best([MODEL_PROFILES.reasoning, MODEL_PROFILES.fast], strategy);
  return { provider: selected.provider, model: selected.model, reason: `${strategy}: default reasoning` };
}
