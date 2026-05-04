/**
 * Zod schemas for workflow definition types, plus result types for
 * workflow loading and execution (non-schema hand-written discriminated unions).
 */
import { z } from '@hono/zod-openapi';
import {
  dagNodeSchema,
  effortLevelSchema,
  thinkingConfigSchema,
  sandboxSettingsSchema,
} from './dag-node';

export const modelReasoningEffortSchema = z.enum(['minimal', 'low', 'medium', 'high', 'xhigh']);
export type ModelReasoningEffort = z.infer<typeof modelReasoningEffortSchema>;

export const webSearchModeSchema = z.enum(['disabled', 'cached', 'live']);
export type WebSearchMode = z.infer<typeof webSearchModeSchema>;

export const modelStrategySchema = z.enum(['manual', 'auto', 'cost', 'speed', 'quality']);
export type ModelStrategy = z.infer<typeof modelStrategySchema>;

export const workflowWorktreePolicySchema = z.object({
  enabled: z.boolean().optional(),
});

export type WorkflowWorktreePolicy = z.infer<typeof workflowWorktreePolicySchema>;

export const workflowBaseSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  provider: z.string().trim().min(1).optional(),
  model: z.string().optional(),
  model_strategy: modelStrategySchema.optional(),
  modelReasoningEffort: modelReasoningEffortSchema.optional(),
  webSearchMode: webSearchModeSchema.optional(),
  additionalDirectories: z.array(z.string()).optional(),
  interactive: z.boolean().optional(),
  effort: effortLevelSchema.optional(),
  thinking: thinkingConfigSchema.optional(),
  fallbackModel: z.string().min(1).optional(),
  betas: z.array(z.string().min(1)).nonempty("'betas' must be a non-empty array").optional(),
  sandbox: sandboxSettingsSchema.optional(),
  worktree: workflowWorktreePolicySchema.optional(),
  mutates_checkout: z.boolean().optional(),
  tags: z.array(z.string().min(1)).optional(),
});

export type WorkflowBase = z.infer<typeof workflowBaseSchema>;

export const workflowDefinitionSchema = workflowBaseSchema.extend({
  nodes: z.array(dagNodeSchema),
});

export type WorkflowDefinition = z.infer<typeof workflowDefinitionSchema> & { prompt?: never };

export type LoadCommandResult =
  | { success: true; content: string }
  | {
      success: false;
      reason: 'invalid_name' | 'empty_file' | 'not_found' | 'permission_denied' | 'read_error';
      message: string;
    };

export type WorkflowExecutionResult =
  | { success: true; workflowRunId: string; summary?: string }
  | { success: false; workflowRunId?: string; error: string }
  | { success: true; paused: true; workflowRunId: string };

export type WorkflowSource = 'bundled' | 'global' | 'project';

export interface WorkflowWithSource {
  readonly workflow: WorkflowDefinition;
  readonly source: WorkflowSource;
}

export interface WorkflowLoadError {
  readonly filename: string;
  readonly error: string;
  readonly errorType: 'read_error' | 'parse_error' | 'validation_error';
}

export interface WorkflowLoadResult {
  readonly workflows: readonly WorkflowWithSource[];
  readonly errors: readonly WorkflowLoadError[];
}
