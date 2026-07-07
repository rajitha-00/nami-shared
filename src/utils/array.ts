export function groupBy<T, K extends PropertyKey>(
  items: readonly T[],
  getKey: (item: T) => K,
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const key = getKey(item);
    (result[key] ??= []).push(item);
  }
  return result;
}

export function sortBy<T>(
  items: readonly T[],
  getValue: (item: T) => string | number,
  dir: 'asc' | 'desc' = 'asc',
): T[] {
  const sorted = [...items].sort((a, b) => {
    const va = getValue(a);
    const vb = getValue(b);
    if (typeof va === 'string' && typeof vb === 'string') {
      return va.localeCompare(vb);
    }
    return Number(va) - Number(vb);
  });
  return dir === 'desc' ? sorted.reverse() : sorted;
}

export function uniqueBy<T, K>(items: readonly T[], getKey: (item: T) => K): T[] {
  const seen = new Set<K>();
  const result: T[] = [];
  for (const item of items) {
    const key = getKey(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}
