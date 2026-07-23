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
    'home.greeting': '반가워요, Sean이에요.',
    'home.intro':
      '웹을 만들고, 배우고, 가끔 글을 씁니다. 여기엔 그 과정에서 남긴 기록과 만든 것들을 모아둡니다.',
    'home.intro2': '완성된 생각보다, 만들어가는 과정을 더 좋아해요.',
    'home.recent': '최근에 쓴 글',
    'home.viewAll': '전부 보기',
    'blog.title': '블로그',
    'blog.empty': '아직 쓴 글이 없어요.',
    'projects.title': '프로젝트',
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
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.tags': 'Tags',
    'nav.about': 'About',
    'home.greeting': "Hey, I'm Sean.",
    'home.intro':
      'I build for the web, learn as I go, and write things down. This is where I keep those notes and the things I make.',
    'home.intro2': 'I care more about the process of making than the finished idea.',
    'home.recent': 'Recently written',
    'home.viewAll': 'See all',
    'blog.title': 'Blog',
    'blog.empty': "I haven't written anything yet.",
    'projects.title': 'Projects',
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

export type UIKey = keyof (typeof ui)['ko'];
