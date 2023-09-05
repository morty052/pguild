import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xsrr81v8',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  token: 'skXO9AJC5CIKeXlazeGsrn2Z6ODv0GA8aqMUF5oZBeV5dnFQmem67pAlxc5XPsiul334wxufyLpuFCpzLwapsGy19Ovee12Sj0XditaudY0bi1eI14jsAh4U6oX0SKK8hyZdOdcT0jy8tzIbMza5kHS8p9pirGG2Z2q0sTUuE3AoO6aO3OB7'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => builder.image(source);