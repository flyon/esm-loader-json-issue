import {loadData} from 'lincd-server/ontologies/lincd-server';
const start = async ():Promise<void> => {

		let data = await import('./data.json', {with: {type: 'json'}}).then((res) => {
			console.log(res);
			return res.default;
		});
		console.log('Data:', data);

	// let data = await loadData();
	// console.log('Data:', data);
	// return 'Hello World!';
	// let data;
	// if (typeof module !== 'undefined' && typeof exports !== 'undefined')
	// {
	// 	// CommonJS import
	// 	console.log('CJS import');
	// 	data = await import('./data.json').then((data) => {
	// 		return data.default;
	// 	});
	// } else
	// {
	// 	console.log('ESM import');
	// 	data = await import('./data.json', {with: {type: 'json'}}).then((res) => {
	// 		console.log(res);
	// 		return res.default;
	// 	});
	// }
	// console.log('Data:', data);
	//
	//
	// return 'Hello World!'
}
start();