/* eslint-disable react/jsx-no-comment-textnodes */
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { atom, useAtom } from 'jotai';
import { homeItems as homeItemsOrigin } from '$mock/index';
import { notificationsOutline } from 'ionicons/icons';
import FeedCard from '$components/FeedCard';
import Notifications from '$components/Notifications';
import React from 'react';

export const homeItemsAtom = atom(homeItemsOrigin);
export const showNotificationsAtom = atom(false);

export default function Feed(): JSX.Element {
	const [showNotifications, setShowNotifications] = useAtom(showNotificationsAtom);
	const [homeItems] = useAtom(homeItemsAtom);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Feed</IonTitle>
					<IonButtons slot='start'>
						<IonMenuButton />
					</IonButtons>
					<IonButtons slot='end'>
						<IonButton onClick={() => setShowNotifications(true)}>
							<IonIcon icon={notificationsOutline} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding' fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Feed</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
				{/* homeItems.map maps homeItems Atoms to custom FeedCards */}
				{homeItems.map((item) => (
					<FeedCard {...item} key={item.id} />
				))}
			</IonContent>
		</IonPage>
	);
}
