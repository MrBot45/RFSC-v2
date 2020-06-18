import { AppCore } from './src/Core';

try {
	const AppMain = new AppCore.App();
	AppMain.init();
} catch(e) {
	console.log(e);
}