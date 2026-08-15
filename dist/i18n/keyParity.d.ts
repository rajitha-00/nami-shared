/**
 * Flattens a translation object into dot-path keys, normalizing i18next
 * plural suffixes (_zero/_one/_two/_few/_many/_other) so locales with
 * different plural categories still compare equal.
 */
export declare function flattenTranslationKeys(obj: Record<string, unknown>, prefix?: string): string[];
/** Returns keys present in `reference` but missing in `candidate`, and vice versa. */
export declare function diffTranslationKeys(reference: Record<string, unknown>, candidate: Record<string, unknown>): {
    missing: string[];
    extra: string[];
};
