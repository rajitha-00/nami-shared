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

// src/utils/file-security.ts
var MAX_IMAGE_BYTES = 5 * 1024 * 1024;
var MAX_VIDEO_BYTES = 50 * 1024 * 1024;
var readHeader = async (file, length = 12) => new Uint8Array(await file.slice(0, length).arrayBuffer());
var validateImageFile = async (file, maxBytes = MAX_IMAGE_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const png = [137, 80, 78, 71, 13, 10, 26, 10].every(
    (value, index) => bytes[index] === value
  );
  const jpeg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  const webp = bytes.length >= 12 && String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" && String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
  return png || jpeg || webp;
};
var validateVideoFile = async (file, maxBytes = MAX_VIDEO_BYTES) => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const mp4 = bytes.length >= 8 && String.fromCharCode(...bytes.slice(4, 8)) === "ftyp";
  const webm = bytes.length >= 4 && bytes[0] === 26 && bytes[1] === 69 && bytes[2] === 223 && bytes[3] === 163;
  return mp4 || webm;
};

export { MAX_IMAGE_BYTES, MAX_VIDEO_BYTES, buildQueryString, clamp, groupBy, sleep, sortBy, uniqueBy, validateImageFile, validateVideoFile };
//# sourceMappingURL=chunk-2KDT3RFT.js.map
//# sourceMappingURL=chunk-2KDT3RFT.js.map