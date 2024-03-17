const encode = (str: string) => btoa(str);
const decode = (str: string) => atob(str);

/**
 * base64 방식으로 암호화
 * @returns
 */
export const encodeHASH = (text: string) => encode(text);

/**
 * base64 방식으로 복호화
 * @returns
 */
export const decodeHASH = (text: string) => decode(text);
