import { describe, expect, it } from 'vitest';
import { groupBy, sortBy, uniqueBy } from './array';
import { buildQueryString, clamp } from './misc';
import { assertNever, isDefined, omit, pick, safeJsonParse } from './object';
import { formatBytes, initialsFromName, truncate } from './string';
import { differenceInDays, todayIso } from './date';

describe('array utils', () => {
  const rows = [
    { id: 1, city: 'Colombo' },
    { id: 2, city: 'Kandy' },
    { id: 3, city: 'Colombo' },
  ];

  it('groupBy groups by key', () => {
    const grouped = groupBy(rows, (r) => r.city);
    expect(grouped.Colombo).toHaveLength(2);
    expect(grouped.Kandy).toHaveLength(1);
  });

  it('sortBy sorts asc and desc', () => {
    expect(sortBy(rows, (r) => r.id, 'desc').map((r) => r.id)).toEqual([3, 2, 1]);
    expect(sortBy(rows, (r) => r.city).map((r) => r.city)).toEqual([
      'Colombo',
      'Colombo',
      'Kandy',
    ]);
  });

  it('uniqueBy keeps first occurrence', () => {
    expect(uniqueBy(rows, (r) => r.city).map((r) => r.id)).toEqual([1, 2]);
  });
});

describe('string utils', () => {
  it('truncate shortens with ellipsis', () => {
    expect(truncate('Hotel Operating System', 12)).toBe('Hotel Opera…');
    expect(truncate('short', 12)).toBe('short');
  });

  it('initialsFromName', () => {
    expect(initialsFromName('Amaya Perera')).toBe('AP');
    expect(initialsFromName('Cinnamon Grand Colombo')).toBe('CC');
    expect(initialsFromName('Solo')).toBe('SO');
    expect(initialsFromName('')).toBe('');
  });

  it('formatBytes', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(512)).toBe('512 B');
    expect(formatBytes(2048)).toBe('2.0 KB');
    expect(formatBytes(5 * 1024 * 1024)).toBe('5.0 MB');
  });
});

describe('object utils', () => {
  it('safeJsonParse returns undefined on bad input', () => {
    expect(safeJsonParse<{ a: number }>('{"a":1}')).toEqual({ a: 1 });
    expect(safeJsonParse('not json')).toBeUndefined();
  });

  it('pick and omit', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  it('isDefined narrows', () => {
    expect([1, null, 2, undefined].filter(isDefined)).toEqual([1, 2]);
  });

  it('assertNever throws', () => {
    expect(() => {
      assertNever('boom' as never);
    }).toThrow();
  });
});

describe('misc utils', () => {
  it('clamp', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
  });

  it('buildQueryString serializes QueryParams', () => {
    expect(
      buildQueryString({
        page: 2,
        pageSize: 25,
        search: 'grand',
        sortBy: 'name',
        sortDir: 'asc',
        filters: { status: ['ACTIVE', 'PENDING'], plan: 'FREE' },
      }),
    ).toBe(
      '?page=2&pageSize=25&search=grand&sortBy=name&sortDir=asc&status=ACTIVE&status=PENDING&plan=FREE',
    );
    expect(buildQueryString({})).toBe('');
  });
});

describe('date utils', () => {
  it('calculates valid date ranges without using local time offsets', () => {
    expect(differenceInDays('2026-08-15', '2026-08-18')).toBe(3);
  });

  it('returns zero while a date field contains a partial or invalid value', () => {
    expect(differenceInDays('', '2026-08-18')).toBe(0);
    expect(differenceInDays('2026-08-', '2026-08-18')).toBe(0);
    expect(differenceInDays('not-a-date', '2026-08-18')).toBe(0);
  });

  it('uses the local calendar date for booking defaults', () => {
    expect(todayIso()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(todayIso()).toBe(
      `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(
        new Date().getDate(),
      ).padStart(2, '0')}`,
    );
  });
});
