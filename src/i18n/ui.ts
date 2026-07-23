/** 지원 언어와 UI 문자열 사전. 새 문자열은 두 로케일 모두에 추가한다. */
export const languages = {
  ko: '한국어',
  en: 'English',
} as const;

export const defaultLang = 'ko';

export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.projects': '프로젝트',
    'nav.tags': '태그',
    'nav.about': '소개',
    'home.greeting': '안녕하세요, Sean입니다 👋',
    'home.intro': '개발하며 배운 것들과 만든 것들을 기록하는 공간입니다.',
    'home.recent': '최근 글',
    'home.viewAll': '전체 보기 →',
    'blog.title': '블로그',
    'blog.empty': '아직 작성된 글이 없습니다.',
    'projects.title': '프로젝트',
    'projects.note': '만든 것들을 모아둡니다. 계속 채워나갈 예정입니다.',
    'projects.empty': '아직 등록된 프로젝트가 없습니다.',
    'projects.code': '코드',
    'projects.demo': '데모',
    'tags.title': '태그',
    'tags.all': '전체 태그',
    'tags.postsIn': '태그: ',
    'categories.title': '카테고리',
    'categories.all': '전체 카테고리',
    'categories.postsIn': '카테고리: ',
    'about.title': '소개',
    'post.back': '← 목록으로',
    'notFound.title': '페이지를 찾을 수 없습니다',
    'notFound.desc': '요청하신 페이지가 존재하지 않습니다.',
    'notFound.home': '홈으로 돌아가기',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.tags': 'Tags',
    'nav.about': 'About',
    'home.greeting': "Hi, I'm Sean 👋",
    'home.intro': 'A place where I write about what I build and what I learn.',
    'home.recent': 'Recent posts',
    'home.viewAll': 'View all →',
    'blog.title': 'Blog',
    'blog.empty': 'No posts yet.',
    'projects.title': 'Projects',
    'projects.note': 'Things I have built. More to come.',
    'projects.empty': 'No projects yet.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'tags.title': 'Tags',
    'tags.all': 'All tags',
    'tags.postsIn': 'Tag: ',
    'categories.title': 'Categories',
    'categories.all': 'All categories',
    'categories.postsIn': 'Category: ',
    'about.title': 'About',
    'post.back': '← Back to list',
    'notFound.title': 'Page not found',
    'notFound.desc': 'The page you requested does not exist.',
    'notFound.home': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['ko'];
