import createLoader from 'create-esm-loader'
const cssLoader = {
	resolve(specifier, opts)
	{
	},
	format(url, opts)
	{
	},
	transform(source, opts)
	{
	},
	fetch(url,opts) {
	}
};

//@ts-ignore
export const {
	resolve,
	getFormat,
	getSource,
	transformSource,
	load,
} = await createLoader(cssLoader);
