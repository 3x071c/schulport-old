import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { tabsAtom } from '$components/Menu';
import { useAtom } from 'jotai';

export default function Tabs({ mount }: { mount: string }): JSX.Element {
	const [tabs] = useAtom(tabsAtom);

	return (
		<IonTabs>
			{/* this tabs.map maps the tabs from Menu to their corresponding links */}
			<IonRouterOutlet>
				{tabs.map(({ component, url, id }) => (
					<Route path={mount + url} component={component} exact key={id} />
				))}
				<Route path={mount} exact>
					<Redirect to={mount + tabs[0].url} />
				</Route>
			</IonRouterOutlet>
			{/* this tabs.map maps the tabs from Menu to their corresponding spots in the bottom TabBar */}
			<IonTabBar slot='bottom'>
				{tabs.map(({ url, icon, title, id }) => (
					<IonTabButton tab={title.toLowerCase() + id.substring(0, 3)} href={mount + url} key={id}>
						<IonIcon icon={icon} />
						<IonLabel>{title}</IonLabel>
					</IonTabButton>
				))}
			</IonTabBar>
		</IonTabs>
	);
}
