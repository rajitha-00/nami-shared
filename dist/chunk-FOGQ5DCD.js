// src/utils/object.ts
function safeJsonParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) result[key] = obj[key];
  }
  return result;
}
function omit(obj, keys) {
  const excluded = new Set(keys);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!excluded.has(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function assertNever(x) {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

export { assertNever, isDefined, omit, pick, safeJsonParse };
//# sourceMappingURL=chunk-FOGQ5DCD.js.map
//# sourceMappingURL=chunk-FOGQ5DCD.js.map