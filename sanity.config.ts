import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
	projectId: '',
	dataset: 'production',
	title: 'sample-portfolio',
	apiVersion: '2023-04-11',
	basePath: process.env.SANITY_DEFAULT_ROUTE,
	plugins: [deskTool()],
});

export default config;
