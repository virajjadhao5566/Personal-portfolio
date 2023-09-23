import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ldi3527d',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sktaNKJxRXsLcT5jGEXWDtqJqX1XxIdRVzpSot9wgYtX4U6duDinWsi5rdOyRBTMan9QgQmOIeuPkCzqDDZwJsCnS4P0LwJd9YuiMXAMnApmbusIdELuEy7llnEcnmxzun1kwkeoxTOWteB2b1b2WEfBDwjVpfS2z5jCoWrIRUdUwoT7t8Iv',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);