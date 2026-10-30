/**
 * Prefix a site-root-relative path with the configured Astro `base`.
 *
 * `base: '/demo-repo/'` makes Astro emit every page under /demo-repo/, but it
 * does not rewrite hand-written hrefs such as "/blog". Those have to be
 * prefixed explicitly; `import.meta.env.BASE_URL` holds the base at build time.
 *
 *   withBase('/')             -> '/demo-repo/'
 *   withBase('/blog')         -> '/demo-repo/blog'
 *   withBase('/blog/post-1/') -> '/demo-repo/blog/post-1/'
 */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	return `${base}/${path.replace(/^\/+/, '')}`;
}
