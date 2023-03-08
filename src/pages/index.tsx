import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<img src="/img/logo.svg" alt="Logo" className={styles.logo} />
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary button--lg"
						to="/docs/guide"
					>
						Get started
					</Link>
				</div>
				<div className={styles.card}>
					Surrealist is a simple to use Browser and Desktop based query playground and database explorer for <a href="https://surrealdb.com" target="_blank">SurrealDB</a>. 
					You can connect to any SurrealDB server and execute queries in a graphical interface, including table & variable auto completion, syntax highlighting, 
					and much more. Switch to the explorer view to browse database tables, edit record contents, and traverse graph relationships. Use the designer view to 
					create or modify your database schema, and manage logins and scopes with the authentication view.
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout
			title="SurrealDB Query Explorer"
			description="Surrealist is a simple to use Browser and Desktop based query playground and database explorer for SurrealDB."
		>
			<HomepageHeader />
		</Layout>
	);
}
