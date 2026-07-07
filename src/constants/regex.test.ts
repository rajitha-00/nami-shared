import { describe, expect, it } from 'vitest';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from './regex';

describe('EMAIL_REGEX', () => {
  it.each(['user@example.com', 'a.b+c@sub.domain.co', 'x@y.lk'])('accepts %s', (v) => {
    expect(EMAIL_REGEX.test(v)).toBe(true);
  });
  it.each(['plain', 'missing@tld', '@nouser.com', 'two@@at.com', 'spa ce@x.com'])(
    'rejects %s',
    (v) => {
      expect(EMAIL_REGEX.test(v)).toBe(false);
    },
  );
});

describe('PHONE_REGEX', () => {
  it.each(['+94 71 234 5678', '0712345678', '(011) 234-5678', '+8613800138000'])(
    'accepts %s',
    (v) => {
      expect(PHONE_REGEX.test(v)).toBe(true);
    },
  );
  it.each(['12345', 'phone', '++94123456789x'])('rejects %s', (v) => {
    expect(PHONE_REGEX.test(v)).toBe(false);
  });
});

describe('PASSWORD_REGEX', () => {
  it.each(['Passw0rd', 'Str0ngerPass', 'Aa345678'])('accepts %s', (v) => {
    expect(PASSWORD_REGEX.test(v)).toBe(true);
  });
  it.each(['short1A', 'alllowercase1', 'ALLUPPERCASE1', 'NoDigitsHere'])('rejects %s', (v) => {
    expect(PASSWORD_REGEX.test(v)).toBe(false);
  });
});
