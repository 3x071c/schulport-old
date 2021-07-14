import { IonCheckbox, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { atom, useAtom } from 'jotai';
import { lists as listsOrigin } from '$mock/index';
import React from 'react';

const ListEntry = ({ name }: { name: string }) => (
	<IonItem className='list-entry'>
		<IonHeader slot='start'>{name}</IonHeader>
		<IonCheckbox slot='start' />
	</IonItem>
);

export const listsAtom = atom(listsOrigin);
export default function Lists(): JSX.Element {
	const [lists] = useAtom(listsAtom);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Hausaufgaben</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Hausaufgaben</IonTitle>
					</IonToolbar>
				</IonHeader>
				{/* lists.map maps list Atoms to custom ListEntrys */}
				{lists.map(({ id, name }) => (
					<>
						<ListEntry name={name} key={id} />
					</>
				))}
			</IonContent>
		</IonPage>
	);
}
