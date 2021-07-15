import {
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { atom, useAtom } from 'jotai';
import { cog, flash, list } from 'ionicons/icons';
import { v4 as uuid } from 'uuid';
import Home from '$components/Feed';
import Lists from '$components/Lists';
import Settings from '$components/Settings';

export const tabsAtom = atom(
	[
		{
			component: Home,
			icon: flash,
			title: 'Updates',
			url: '/feed',
		},
		{
			component: Lists,
			icon: list,
			title: 'Hausaufgaben',
			url: '/lists',
		},
		{
			component: Settings,
			icon: cog,
			title: 'Einstellungen',
			url: '/settings',
		},
	].map((tab) => ({ id: uuid(), ...tab }))
);

export default function Menu({ mount }: { mount: string }): JSX.Element {
	const [tabs] = useAtom(tabsAtom);

	return (
		<IonMenu side='start' contentId='main' className='max-w-xs'>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Schnellzugriff</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{/* Nutzung von IonMenuToggle um das Menü konstant geöffnet zu lassen */}
					{tabs.map(({ url, icon, title, id }) => (
						<IonMenuToggle autoHide={false} key={id}>
							<IonItem routerLink={mount + url} routerDirection='none' detail={false} lines='none'>
								<IonIcon icon={icon} slot='start' />
								<IonLabel>{title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					))}
					{/* Inhalte aus tabs werden auf IonItems gemapped */}
				</IonList>
			</IonContent>
		</IonMenu>
	);
}
