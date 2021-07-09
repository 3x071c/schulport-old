/* eslint-disable import/no-extraneous-dependencies */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.schulsolutions.schulport',
	appName: 'Schulport',
	bundledWebRuntime: false,
	cordova: {},
	plugins: {
		SplashScreen: {
			launchShowDuration: 0,
		},
	},
	webDir: 'out',
};

export default config;
