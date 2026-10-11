import { slugOf } from '@/content/routes';

/** Which page of its kind this is, from the address: "/docs/reading/" gives "reading". */
export const slug = () => slugOf(location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`);
