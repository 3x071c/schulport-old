import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import Menu from '$components/Menu';
import Tabs from '$components/Tabs';

export const mountAtom = atom('/app');

export default function App(): JSX.Element {
	const [mount] = useAtom(mountAtom);
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId='main'>
					<Menu mount={mount} />
					<IonRouterOutlet id='main'>
						<Route path={mount}>
							<Tabs mount={mount} />
						</Route>
						<Route exact path='/'>
							<Redirect to={mount} />
						</Route>
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
}
