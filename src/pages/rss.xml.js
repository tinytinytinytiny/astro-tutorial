import rss from '@astrojs/rss';

export const get = () => rss({
	title: 'Astro Learner | Blog',
	description: 'My journey learning Astro',
	site: 'https://dashing-salamander-460eb1.netlify.app/',
	items: import.meta.glob('./**/*.md'),
	customData: `<language>en-us</language>`,
});