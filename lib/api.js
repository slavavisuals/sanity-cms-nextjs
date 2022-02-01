import sanity from './sanity';

const postFields = `
  title,
  'slug' : slug.current,
  excerpt,
  'mainImage' : mainImage.asset -> url,
  publishedAt,
  author ->{name, 'image': image.asset->url },

`;

export async function getAllPosts() {
  const results = await sanity.fetch(`*[_type == "post"]{${postFields}}`);
  return results;
}

export async function getPostBySlug(slug) {
  const result = await sanity
    .fetch(
      `*[_type == "post" && slug.current == $slug]{
    ${postFields}
  }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return result;
}
