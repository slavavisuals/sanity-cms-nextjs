import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  useCdn: false,
  apiVersion: '2021-08-31',
});
