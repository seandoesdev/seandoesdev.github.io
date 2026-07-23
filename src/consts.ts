/** 사이트 전역 상수. 배포 도메인·SEO 기본값·수익화 ID를 한 곳에서 관리한다. */
export const SITE = {
  title: 'seandoesdev',
  description: '개발 기록과 포트폴리오 — seandoesdev의 개인 사이트',
  descriptionEn: 'Dev notes & portfolio — the personal site of seandoesdev',
  author: 'Sean',
  url: 'https://seandoesdev.github.io',
  defaultLocale: 'ko' as const,
  locales: ['ko', 'en'] as const,
  /** Google Analytics 4 측정 ID. 발급 후 입력 (예: 'G-XXXXXXXXXX'). 비어 있으면 비활성. */
  gaMeasurementId: '',
  /** Google AdSense 게시자 ID. 승인 후 입력 (예: 'ca-pub-XXXXXXXXXXXXXXXX'). 비어 있으면 비활성. */
  adsensePublisherId: '',
} as const;

/** 상단 내비게이션. */
export const NAV = [
  { href: '/', label: '홈' },
  { href: '/blog', label: '블로그' },
  { href: '/projects', label: '프로젝트' },
  { href: '/about', label: '소개' },
] as const;
