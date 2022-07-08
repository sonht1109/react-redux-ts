export type OS =
  | 'undetermined'
  | 'macos'
  | 'ios'
  | 'windows'
  | 'android'
  | 'linux';

const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;
const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i;
const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i;

export default function useOS(): OS {
  if (typeof window !== 'undefined') {
    const { userAgent } = window.navigator;
    if (macosPlatforms.test(userAgent)) {
      return 'macos';
    }
    if (iosPlatforms.test(userAgent)) {
      return 'ios';
    }
    if (windowsPlatforms.test(userAgent)) {
      return 'windows';
    }
    if (/Android/i.test(userAgent)) {
      return 'android';
    }
    if (/Linux/i.test(userAgent)) {
      return 'linux';
    }

    return 'undetermined';
  }

  return 'undetermined';
}
