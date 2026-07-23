import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

/** 해당 로케일의 발행된 글을 최신순으로 반환. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => !data.draft && data.lang === lang
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 해당 로케일의 프로젝트를 order 오름차순으로 반환. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => data.lang === lang);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
