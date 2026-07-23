import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';
import { postHref } from '../i18n/utils';
import { SITE } from '../consts';

// 기본 로케일(영어) 글 피드.
export async function GET(context) {
  const posts = await getPosts('en');

  return rss({
    title: SITE.title,
    description: SITE.descriptionEn,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postHref(post.id, 'en'),
    })),
  });
}
