/** 지원 언어와 UI 문자열 사전. 새 문자열은 두 로케일 모두에 추가한다. */
export const languages = {
  en: 'English',
  ko: '한국어',
} as const;

// 기본 언어 = 영어 (루트가 영어, 한국어는 /ko).
export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    'site.role': '개발자',
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.projects': '포트폴리오',
    'nav.tags': '태그',
    'nav.about': '소개',
    'home.recent': 'Writing',
    'home.viewAll': '전부 보기',
    'blog.title': '블로그',
    'blog.empty': '아직 쓴 글이 없어요.',
    'projects.title': '포트폴리오',
    'projects.note': '틈틈이 만든 것들이에요. 계속 채워나갈 예정이고요.',
    'projects.empty': '아직 올린 프로젝트가 없어요.',
    'projects.code': '코드',
    'projects.demo': '데모',
    'tags.title': '태그',
    'tags.all': '전체 태그',
    'tags.postsIn': '태그 · ',
    'categories.title': '카테고리',
    'categories.all': '전체 카테고리',
    'categories.postsIn': '카테고리 · ',
    'about.title': '소개',
    'post.back': '← 목록으로',
    'notFound.title': '길을 잃었어요',
    'notFound.desc': '이 주소에는 아무것도 없네요.',
    'notFound.home': '홈으로 돌아가기',
  },
  en: {
    'site.role': 'developer',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Portfolio',
    'nav.tags': 'Tags',
    'nav.about': 'About',
    'home.recent': 'Writing',
    'home.viewAll': 'See all',
    'blog.title': 'Blog',
    'blog.empty': "I haven't written anything yet.",
    'projects.title': 'Portfolio',
    'projects.note': 'Things I made in my spare time. More on the way.',
    'projects.empty': 'Nothing here yet.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'tags.title': 'Tags',
    'tags.all': 'All tags',
    'tags.postsIn': 'Tag · ',
    'categories.title': 'Categories',
    'categories.all': 'All categories',
    'categories.postsIn': 'Category · ',
    'about.title': 'About',
    'post.back': '← Back',
    'notFound.title': 'Lost your way?',
    'notFound.desc': "There's nothing at this address.",
    'notFound.home': 'Head back home',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
