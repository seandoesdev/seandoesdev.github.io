# seandoesdev.github.io — 블로그/포트폴리오 기획서

> 작성일: 2026-07-23 · 상태: 기획 확정본(v1) · 스택: Astro

---

## 1. 개요 & 목표

`seandoesdev.github.io`를 **포트폴리오 + 기술 블로그** 형태의 개인 사이트로 구축한다.

- **1차 목표:** 자기 브랜딩 + 글쓰기 공간. 방문자가 "누구인지 / 무엇을 만들었는지"를 3초 안에 파악.
- **2차 목표:** 검색 유입(SEO) → 애드센스 수익화 기반 마련.
- **원칙:** 미니멀·텍스트 중심, 빠른 로딩, 유지보수 쉬운 마크다운 글쓰기.

### 성공 기준
- 마크다운 파일 하나 추가 → push → 자동 배포로 글 발행 완료.
- Lighthouse Performance/SEO 90+ 목표.
- 한/영 글을 하나의 구조에서 관리.

---

## 2. 기술 스택

| 영역 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | **Astro 5** | 정적 사이트에 최적, 기본 JS 0KB, 콘텐츠 컬렉션·i18n·RSS·sitemap 공식 지원 |
| 콘텐츠 | **Markdown / MDX** + Content Collections | 타입 안전한 프론트매터, 태그/카테고리 스키마 검증 |
| 스타일 | **Tailwind CSS** (또는 순수 CSS 변수) | 미니멀 디자인·다크모드 토큰 관리 용이 |
| 배포 | **GitHub Pages + GitHub Actions** (`withastro/action`) | push 시 자동 빌드·배포 |
| 패키지 매니저 | pnpm (권장) 또는 npm | — |

> 참고: `seandoesdev.github.io`는 **User/Org 페이지**라 `base` 경로가 `/` 라 별도 서브패스 설정이 불필요하다. (프로젝트 페이지였다면 `base` 지정 필요)

---

## 3. 사이트 구조 (IA)

```
/                    홈 (Hero + 최근 글 + 대표 프로젝트)
/about               About / 이력 소개
/blog                글 목록 (페이지네이션)
/blog/[slug]         글 상세
/projects            포트폴리오 목록 (초기: 구조/플레이스홀더)
/projects/[slug]     프로젝트 상세
/tags                태그 인덱스
/tags/[tag]          태그별 글 목록
/rss.xml             RSS 피드
/sitemap-index.xml   사이트맵 (자동 생성)
404                  Not Found
```

한/영 병행 라우팅(3절 → 4절 전략 참고):
```
/            (기본: 한국어)
/en/         (영어)
/en/blog/... 등 미러 구조
```

---

## 4. 다국어(한/영) 전략

Astro 내장 **i18n 라우팅** 사용.

- 기본 로케일 `ko`, 보조 로케일 `en`.
- `astro.config`에 `i18n: { defaultLocale: 'ko', locales: ['ko','en'] }` 설정.
- 콘텐츠 파일에 `lang` 프론트매터 필드 + 파일 경로로 구분 (`src/content/blog/ko/`, `src/content/blog/en/`).
- UI 문자열(메뉴, 버튼)은 `src/i18n/ui.ts` 사전으로 관리.
- 헤더에 **언어 전환 토글** 배치.
- **글마다 번역 강제 없음** — 한 언어만 있어도 되고, 대응 글이 있으면 상호 링크(hreflang) 제공.

---

## 5. 콘텐츠 모델 (Content Collections)

### blog 컬렉션 프론트매터
```yaml
title: string
description: string          # SEO/OG 요약
pubDate: date
updatedDate: date?          # 선택
lang: 'ko' | 'en'
tags: string[]
category: string            # 단일 대분류
draft: boolean              # true면 빌드 제외
heroImage: string?          # OG/썸네일
```

### projects 컬렉션 프론트매터 (초기엔 구조만)
```yaml
title: string
description: string
lang: 'ko' | 'en'
tech: string[]              # 사용 기술 스택
repo: string?               # GitHub 링크
demo: string?               # 라이브 링크
featured: boolean           # 홈 노출 여부
order: number               # 정렬
```

> 태그(다중, 세부) vs 카테고리(단일, 대분류)를 구분해 운영.

---

## 6. 부가 기능

### 6.1 태그 / 카테고리 분류 ✅
- `/tags` 전체 태그 클라우드, `/tags/[tag]` 필터 목록.
- 카테고리는 상단 네비 또는 사이드 필터로.

### 6.2 RSS + 사이트맵 + SEO ✅
- `@astrojs/rss` → `/rss.xml`.
- `@astrojs/sitemap` → 자동 사이트맵 (검색엔진 제출용).
- 공통 `<SEO>` 컴포넌트: `<title>`, meta description, **Open Graph / Twitter Card**, canonical, hreflang(한/영).
- `robots.txt` 작성, Google Search Console 등록.
- (선택) 글별 OG 이미지 자동 생성(satori) — 2차 과제로.

### 6.3 방문자 통계 ✅
- **Google Analytics 4** 연동 (기본안), 또는 프라이버시 친화적 대안(Umami/Cloudflare Web Analytics)도 검토 가능.
- 스크립트는 `partytown`으로 메인 스레드 부담 최소화 검토.
- 쿠키/개인정보 안내 문구 필요 여부 확인.

### 6.4 구글 애드센스 ✅ (⚠️ 주의 필요)
- `ads.txt` 배치, 광고 슬롯 컴포넌트화(글 하단/사이드).
- **리스크:** AdSense 승인은 (1) 충분한 오리지널 콘텐츠, (2) 도메인 신뢰도를 요구한다. `*.github.io` 서브도메인은 승인이 거절되거나 지연되는 사례가 있음.
- **권장 로드맵:** 먼저 글 10~15편 확보 → 승인 신청. 승인이 막히면 **커스텀 도메인 구매**(예: `seandoes.dev`)로 전환 후 재신청.
- 즉, 애드센스는 **인프라만 미리 준비하고 활성화는 콘텐츠 확보 후**로 단계화.

### 6.5 (제외) 댓글
- 이번 범위에서 giscus 등 댓글은 제외. 추후 필요 시 giscus(무료, GitHub Discussions 기반)로 손쉽게 추가 가능.

---

## 7. 디자인 방향

- **미니멀·텍스트 중심**: 넉넉한 여백, 1개 강조색 + 무채색 팔레트, 가독성 높은 타이포(본문 65~75자 폭).
- **다크/라이트 모드** 토글 (CSS 변수 + `prefers-color-scheme`, localStorage 기억).
- 한글·영문 모두 예쁜 폰트 조합 (예: Pretendard + Inter, 또는 시스템 폰트 스택으로 경량화).
- 코드 블록 하이라이팅(Shiki, Astro 내장), 복사 버튼.
- 반응형(모바일 우선), 접근성(대비/포커스/시맨틱 마크업) 준수.

---

## 8. 배포 파이프라인

1. `astro.config.mjs`에 `site: 'https://seandoesdev.github.io'` 설정.
2. `.github/workflows/deploy.yml`에서 `withastro/action` → GitHub Pages 배포.
3. 저장소 Settings → Pages → Source: **GitHub Actions**.
4. `main` 브랜치 push 시 자동 빌드·배포.

---

## 9. 구현 로드맵 (단계별)

| 단계 | 내용 | 산출물 |
|------|------|--------|
| **P0. 스캐폴딩** | Astro 프로젝트 초기화, Tailwind, 기본 레이아웃, 배포 파이프라인 | push→배포 성공, 빈 사이트 라이브 |
| **P1. 콘텐츠 코어** | blog/projects 컬렉션 스키마, 목록/상세 페이지, 마크다운 렌더 | 샘플 글 1~2편으로 목록·상세 동작 |
| **P2. 다국어** | i18n 라우팅, 언어 토글, UI 사전 | /와 /en/ 병행 동작 |
| **P3. 분류·피드** | 태그/카테고리 페이지, RSS, sitemap, SEO 컴포넌트, robots.txt | /tags, /rss.xml, OG 태그 |
| **P4. 디자인 마감** | 다크모드, 타이포·간격 튜닝, 코드블록, 반응형·접근성 점검 | Lighthouse 90+ |
| **P5. 수익화 인프라** | GA4 연동, ads.txt·광고 슬롯(비활성 상태로 준비) | 통계 수집 시작 |
| **P6. 콘텐츠 & 승인** | 글 10~15편 작성 → AdSense 신청 (필요 시 커스텀 도메인) | 애드센스 활성화 |

---

## 10. 확정된 결정 사항 (2026-07-23)

1. **패키지 매니저**: ✅ **pnpm**
2. **스타일링**: ✅ **Tailwind CSS** (v4, `@tailwindcss/vite` 방식)
3. **애널리틱스**: ✅ **Google Analytics 4** (측정 ID는 발급 후 주입)
4. **폰트**: ✅ **Pretendard** (한글) + 영문 fallback
5. **커스텀 도메인**: ✅ **`seandoesdev.github.io` 유지.** 애드센스 승인 이슈 시 도메인 구매 재검토.

---

## 11. 예상 폴더 구조

```
seandoesdev.github.io/
├─ .github/workflows/deploy.yml
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/
│  ├─ robots.txt
│  ├─ ads.txt              # AdSense 준비
│  └─ favicon.svg
├─ src/
│  ├─ content/
│  │  ├─ config.ts         # 컬렉션 스키마
│  │  ├─ blog/{ko,en}/*.md
│  │  └─ projects/{ko,en}/*.md
│  ├─ components/          # SEO, Header, Footer, ThemeToggle, LangToggle, Card...
│  ├─ layouts/             # BaseLayout, PostLayout
│  ├─ pages/               # index, about, blog/, projects/, tags/, en/...
│  ├─ i18n/ui.ts           # UI 문자열 사전
│  └─ styles/global.css
└─ PLANNING.md
```
