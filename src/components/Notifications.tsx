import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonModal,
	IonNote,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { atom, useAtom } from 'jotai';
import { notifications as notificationsOrigin } from '$mock/index';

import { close } from 'ionicons/icons';

const NotificationItem = ({ title, when }: { title: string; when: string }) => (
	<IonItem>
		<IonLabel>{title}</IonLabel>
		<IonNote slot='end'>{when}</IonNote>
		<IonButton slot='end' fill='clear' color='dark'>
			<IonIcon icon={close} />
		</IonButton>
	</IonItem>
);

export const notificationsAtom = atom(notificationsOrigin);

const Notifications = ({ open, onDidDismiss }: { open: boolean; onDidDismiss: any }): JSX.Element => {
	const [notifications] = useAtom(notificationsAtom);

	return (
		<IonModal isOpen={open} onDidDismiss={onDidDismiss}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Benachrichtigungen</IonTitle>
					<IonButton slot='end' fill='clear' color='dark' onClick={onDidDismiss}>
						<IonIcon icon={close} />
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Benachrichtigungen</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonList>
					{notifications.map(({ title, when }, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<NotificationItem title={title} when={when} key={index} />
					))}
					{/* Inhalte aus Notifications werden auf custom NotificationItems gemapped */}
				</IonList>
			</IonContent>
		</IonModal>
	);
};

export default Notifications;
