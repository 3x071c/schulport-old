import {
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonToggle,
	IonToolbar,
} from '@ionic/react';
import { atom, useAtom } from 'jotai';

export const settingsAtom = atom({
	enableNotifications: true,
});

export default function Settings(): JSX.Element {
	const [settings, setSettings] = useAtom(settingsAtom);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Einstellungen</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonItem>
						<IonLabel>Benachrichtigungen aktivieren</IonLabel>
						<IonToggle
							checked={settings.enableNotifications}
							onIonChange={(e: any) => {
								setSettings((_settings) => ({
									..._settings,
									enableNotifications: e.target.checked,
								}));
							}}
						/>
					</IonItem>
				</IonList>
			</IonContent>
		</IonPage>
	);
}
