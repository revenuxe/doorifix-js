/*
 * Fallback for crawlers requesting chunk URLs from a previous deployment.
 * Existing Next.js chunks are served from the filesystem before this rewrite.
 */
self.__DOORIFIX_STALE_CHUNK_FALLBACK__ = true;
