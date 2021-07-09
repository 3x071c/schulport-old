import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';

/* TailwindCSS generated output */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

import '$theme/variables.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Schulport</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
			</Head>
			<Component {...pageProps} />
			<Script src='https://unpkg.com/ionicons@5.2.3/dist/ionicons.js' />
		</>
	);
}
