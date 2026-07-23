import type { Lang } from '../i18n/ui';
import { getPosts, type Post } from './content';

export type TaxonomyKind = 'tags' | 'categories';

/** 글 목록에서 용어별 개수를 집계한다. (tags: 다중, categories: 단일) */
export function collectTerms(posts: Post[], kind: TaxonomyKind): Map<string, number> {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const terms =
      kind === 'tags'
        ? post.data.tags
        : post.data.category
          ? [post.data.category]
          : [];
    for (const term of terms) {
      counts.set(term, (counts.get(term) ?? 0) + 1);
    }
  }
  return counts;
}

/** 용어 목록을 개수 내림차순 → 이름 오름차순으로 정렬해 반환. */
export function sortedTerms(counts: Map<string, number>): [string, number][] {
  return [...counts.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
}

function postHasTerm(post: Post, kind: TaxonomyKind, term: string): boolean {
  return kind === 'tags'
    ? post.data.tags.includes(term)
    : post.data.category === term;
}

/** getStaticPaths 헬퍼: 로케일·종류별 용어 페이지 경로를 생성. */
export async function termPaths(lang: Lang, kind: TaxonomyKind) {
  const posts = await getPosts(lang);
  const terms = [...collectTerms(posts, kind).keys()];
  return terms.map((term) => ({
    params: { term },
    props: { term, posts: posts.filter((p) => postHasTerm(p, kind, term)) },
  }));
}
