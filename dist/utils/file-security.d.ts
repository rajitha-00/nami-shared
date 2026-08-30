export declare const MAX_IMAGE_BYTES: number;
export declare const MAX_VIDEO_BYTES: number;
/** Client-side UX guard. The server remains authoritative. */
export declare const validateImageFile: (file: File, maxBytes?: number) => Promise<boolean>;
export declare const validateVideoFile: (file: File, maxBytes?: number) => Promise<boolean>;
