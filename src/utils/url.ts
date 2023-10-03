export const extractYoutubeId = (url: string): string => url.replace(/(.*v=|&.*)/g, '');
