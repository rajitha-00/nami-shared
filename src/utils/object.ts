/** JSON.parse that returns undefined instead of throwing on invalid input. */
export function safeJsonParse<T>(raw: string): T | undefined {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
  const excluded = new Set<keyof T>(keys);
  const result = {} as Omit<T, K>;
  for (const key of Object.keys(obj) as (keyof T)[]) {
    if (!excluded.has(key)) {
      (result as T)[key] = obj[key];
    }
  }
  return result;
}

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/** Exhaustiveness guard for switch statements over union types. */
export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}
