import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** URL 경로의 첫 세그먼트로 현재 로케일을 판별한다. (`/ko/...` → ko, 그 외 → 기본 en) */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'ko' ? 'ko' : defaultLang;
}

/** 해당 로케일의 번역 함수를 돌려준다. 누락 키는 기본 로케일로 폴백. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** 콘텐츠 id 앞의 로케일 폴더(`ko/`, `en/`)를 제거해 URL slug를 만든다. */
export function stripLangPrefix(id: string): string {
  return id.replace(/^(ko|en)\//, '');
}

/** 로케일에 맞는 경로 접두어를 붙인다. (기본 로케일 en은 접두어 없음, ko는 /ko) */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'ko' ? `/ko${clean}` : clean;
}

/** 블로그 글의 최종 URL. */
export function postHref(id: string, lang: Lang): string {
  return localizePath(`/blog/${stripLangPrefix(id)}/`, lang);
}

/** 현재 경로의 반대편 로케일 경로 쌍을 계산한다. (언어 토글·hreflang용) */
export function alternatePaths(url: URL): { ko: string; en: string } {
  const enPath = url.pathname.replace(/^\/ko(\/|$)/, '/') || '/';
  const koPath = enPath === '/' ? '/ko/' : `/ko${enPath}`;
  return { ko: koPath, en: enPath };
}
