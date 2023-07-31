import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'xtayjuwp',
  dataset: 'production',
  useCdn: true, 
});

export default client;
