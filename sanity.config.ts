import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
	projectId: 'famc5mr1',
	dataset: 'production',
	title: 'sample-portfolio',
	apiVersion: '2023-04-11',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
