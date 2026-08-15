// src/utils/array.ts
function groupBy(items, getKey) {
  const result = {};
  for (const item of items) {
    const key = getKey(item);
    (result[key] ?? (result[key] = [])).push(item);
  }
  return result;
}
function sortBy(items, getValue, dir = "asc") {
  const sorted = [...items].sort((a, b) => {
    const va = getValue(a);
    const vb = getValue(b);
    if (typeof va === "string" && typeof vb === "string") {
      return va.localeCompare(vb);
    }
    return Number(va) - Number(vb);
  });
  return dir === "desc" ? sorted.reverse() : sorted;
}
function uniqueBy(items, getKey) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const item of items) {
    const key = getKey(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

// src/utils/string.ts
function truncate(value, maxLength, suffix = "\u2026") {
  if (value.length <= maxLength) return value;
  return value.slice(0, Math.max(0, maxLength - suffix.length)).trimEnd() + suffix;
}
function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const only = parts[0] ?? "";
    return only.slice(0, 2).toUpperCase();
  }
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts[parts.length - 1]?.charAt(0) ?? "";
  return (first + last).toUpperCase();
}
var BYTE_UNITS = ["B", "KB", "MB", "GB", "TB"];
function formatBytes(bytes, decimals = 1) {
  if (bytes <= 0) return "0 B";
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), BYTE_UNITS.length - 1);
  const value = bytes / 1024 ** exponent;
  const unit = BYTE_UNITS[exponent] ?? "B";
  return `${value.toFixed(exponent === 0 ? 0 : decimals)} ${unit}`;
}

// src/utils/misc.ts
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function buildQueryString(params) {
  const search = new URLSearchParams();
  if (params.page !== void 0) search.set("page", String(params.page));
  if (params.pageSize !== void 0) search.set("pageSize", String(params.pageSize));
  if (params.search) search.set("search", params.search);
  if (params.sortBy) search.set("sortBy", params.sortBy);
  if (params.sortDir) search.set("sortDir", params.sortDir);
  if (params.filters) {
    for (const [key, value] of Object.entries(params.filters)) {
      const values = Array.isArray(value) ? value : [value];
      for (const v of values) {
        search.append(key, v);
      }
    }
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

export { buildQueryString, clamp, formatBytes, groupBy, initialsFromName, sleep, sortBy, truncate, uniqueBy };
//# sourceMappingURL=chunk-S6GKHEHA.js.map
//# sourceMappingURL=chunk-S6GKHEHA.js.map