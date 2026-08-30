export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const MAX_VIDEO_BYTES = 50 * 1024 * 1024;

const readHeader = async (file: File, length = 12): Promise<Uint8Array> =>
  new Uint8Array(await file.slice(0, length).arrayBuffer());

/** Client-side UX guard. The server remains authoritative. */
export const validateImageFile = async (
  file: File,
  maxBytes = MAX_IMAGE_BYTES,
): Promise<boolean> => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every(
    (value, index) => bytes[index] === value,
  );
  const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const webp =
    bytes.length >= 12 &&
    String.fromCharCode(...bytes.slice(0, 4)) === 'RIFF' &&
    String.fromCharCode(...bytes.slice(8, 12)) === 'WEBP';
  return png || jpeg || webp;
};

export const validateVideoFile = async (
  file: File,
  maxBytes = MAX_VIDEO_BYTES,
): Promise<boolean> => {
  if (file.size === 0 || file.size > maxBytes) return false;
  const bytes = await readHeader(file);
  const mp4 = bytes.length >= 8 && String.fromCharCode(...bytes.slice(4, 8)) === 'ftyp';
  const webm = bytes.length >= 4 && bytes[0] === 0x1a && bytes[1] === 0x45 && bytes[2] === 0xdf && bytes[3] === 0xa3;
  return mp4 || webm;
};
