import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { atom, useAtom } from 'jotai';
import React, { useEffect } from 'react';

export const isAuthenticatedAtom = atom(false);
export default function Login(): JSX.Element {
	const [isAuthenticated, authenticate] = useAtom(isAuthenticatedAtom);
	const router = useIonRouter();
	useEffect(() => {
		if (isAuthenticated) {
			router.push('/tabs/tab1', 'none', 'replace');
		}
	}, [isAuthenticated, router]);

	const handleLogin = () => {
		authenticate(true);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton expand='block' onClick={handleLogin}>
					Login
				</IonButton>
			</IonContent>
		</IonPage>
	);
}
