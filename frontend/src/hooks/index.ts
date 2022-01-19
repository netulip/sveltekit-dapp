import fs from 'fs';
import path from 'path';

const base = path.resolve('src/assets/libraries');
const symbols = fs
	.readdirSync(base)
	.map(file => fs.readFileSync(path.resolve(base, file), 'utf-8'))
	.join('\n');

export async function handle({ request, resolve }) {
	const response = await resolve(request);
	return {
		...response,
		body: response.body?.replace('%symbols%', symbols) ?? response.body
	};
}
