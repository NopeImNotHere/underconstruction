import autoprefixer from 'autoprefixer';
import tailwind from '@tailwindcss/postcss';

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [tailwind, autoprefixer],
};

export default config;
