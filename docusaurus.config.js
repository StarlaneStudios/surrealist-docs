// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Surrealist',
	tagline: 'SurrealDB Query Explorer',
	url: 'https://surrealist.starlane.studio/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				blog: false,
				docs: {
					sidebarPath: require.resolve('./sidebars.js')
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				logo: {
					alt: 'Surrealist',
					src: 'img/logo-wide.svg',
				},
				items: [
					{
						to: 'docs/guide',
						label: 'Guide',
						position: 'left'
					},
					{
						href: 'https://github.com/StarlaneStudios/Surrealist/blob/main/CHANGELOG.md',
						label: 'Changelog',
						position: 'right',
					},
					{
						href: 'https://github.com/StarlaneStudios/Surrealist',
						label: 'GitHub',
						position: 'right',
					},
					{
						href: 'https://discord.gg/exaQDX2',
						label: 'Discord',
						position: 'right'
					}
				],
			},
			footer: {
				style: 'light',
				copyright: `Copyright © ${new Date().getFullYear()} Starlane Studios`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
