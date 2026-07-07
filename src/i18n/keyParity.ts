/**
 * Flattens a translation object into dot-path keys, normalizing i18next
 * plural suffixes (_zero/_one/_two/_few/_many/_other) so locales with
 * different plural categories still compare equal.
 */
export function flattenTranslationKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const normalized = key.replace(/_(zero|one|two|few|many|other)$/, '');
    const path = prefix ? `${prefix}.${normalized}` : normalized;
    if (value !== null && typeof value === 'object') {
      keys.push(...flattenTranslationKeys(value as Record<string, unknown>, path));
    } else {
      keys.push(path);
    }
  }
  return [...new Set(keys)].sort();
}

/** Returns keys present in `reference` but missing in `candidate`, and vice versa. */
export function diffTranslationKeys(
  reference: Record<string, unknown>,
  candidate: Record<string, unknown>,
): { missing: string[]; extra: string[] } {
  const refKeys = new Set(flattenTranslationKeys(reference));
  const candKeys = new Set(flattenTranslationKeys(candidate));
  return {
    missing: [...refKeys].filter((k) => !candKeys.has(k)),
    extra: [...candKeys].filter((k) => !refKeys.has(k)),
  };
}
