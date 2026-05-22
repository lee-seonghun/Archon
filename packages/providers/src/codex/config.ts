/**
 * Typed config parsing for Codex provider defaults.
 * Enhanced to support env-based latest model defaults.
 */
import type { CodexProviderDefaults } from '../types';

export type { CodexProviderDefaults } from '../types';

export function parseCodexConfig(raw: Record<string, unknown>): CodexProviderDefaults {
  const result: CodexProviderDefaults = {};

  // ✅ Priority: explicit config > env var > undefined
  if (typeof raw.model === 'string') {
    result.model = raw.model;
  } else if (process.env.OPENAI_MODEL) {
    result.model = process.env.OPENAI_MODEL;
  } else if (process.env.CODEX_MODEL) {
    result.model = process.env.CODEX_MODEL;
  } else {
    // Safe rolling default (not hard-binding to deprecated models)
    result.model = 'gpt-5.2-codex';
  }

  const validEfforts = ['minimal', 'low', 'medium', 'high', 'xhigh'];
  if (
    typeof raw.modelReasoningEffort === 'string' &&
    validEfforts.includes(raw.modelReasoningEffort)
  ) {
    result.modelReasoningEffort = raw.modelReasoningEffort as CodexProviderDefaults['modelReasoningEffort'];
  } else if (process.env.OPENAI_REASONING_EFFORT) {
    const envEffort = process.env.OPENAI_REASONING_EFFORT;
    if (validEfforts.includes(envEffort)) {
      result.modelReasoningEffort = envEffort as CodexProviderDefaults['modelReasoningEffort'];
    }
  }

  const validSearchModes = ['disabled', 'cached', 'live'];
  if (typeof raw.webSearchMode === 'string' && validSearchModes.includes(raw.webSearchMode)) {
    result.webSearchMode = raw.webSearchMode as CodexProviderDefaults['webSearchMode'];
  } else if (process.env.OPENAI_WEB_SEARCH_MODE) {
    const envMode = process.env.OPENAI_WEB_SEARCH_MODE;
    if (validSearchModes.includes(envMode)) {
      result.webSearchMode = envMode as CodexProviderDefaults['webSearchMode'];
    }
  }

  if (Array.isArray(raw.additionalDirectories)) {
    result.additionalDirectories = raw.additionalDirectories.filter(
      (d): d is string => typeof d === 'string'
    );
  }

  if (typeof raw.codexBinaryPath === 'string') {
    result.codexBinaryPath = raw.codexBinaryPath;
  }

  return result;
}
