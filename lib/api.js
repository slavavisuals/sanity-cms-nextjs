import sanity from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const postFields = `
  title,
  'slug' : slug.current,
  excerpt,
  'mainImage' : mainImage.asset -> url,
  publishedAt,
  author ->{name, 'image': image.asset->url },
  body ->,
  relatedPosts[] ->{_id, title, excerpt, slug{current},'mainImage' : mainImage.asset -> url}
`;

const builder = imageUrlBuilder(sanity);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts() {
  const results = await sanity.fetch(`*[_type == "post"]{${postFields}}`);
  return results;
}

export async function getCarouselSlides() {
  const results = await sanity.fetch(`
  *[_type == "carousel"] {
    imageSlides[] {caption, _key, asset->{path,url}}
  }`);
  return results;
}

export async function getPostBySlug(slug) {
  const result = await sanity
    .fetch(
      `*[_type == "post" && slug.current == $slug]{
    ${postFields},
    content[]{..., "asset": asset->url}
  }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
