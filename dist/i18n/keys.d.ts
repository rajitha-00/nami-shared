import type commonEn from './locales/en/common.json';
/**
 * Recursively derives "a.b.c" dot paths from a translation JSON shape.
 * Apps reuse this to type their own namespaces:
 * `type ClientsKey = \`clients:\${DotPaths<typeof clientsEn>}\``
 */
export type DotPaths<T> = T extends string ? never : {
    [K in keyof T & string]: T[K] extends string ? K : `${K}.${DotPaths<T[K]>}`;
}[keyof T & string];
/** Every valid key of the shared common namespace, prefixed. */
export type CommonTranslationKey = `common:${DotPaths<typeof commonEn>}`;
/** Compile-time-checked helper for keys of the common namespace. */
export declare const commonKey: (key: CommonTranslationKey) => CommonTranslationKey;
