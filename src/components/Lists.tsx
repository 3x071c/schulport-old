import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { atom, useAtom } from 'jotai';
import { lists as listsOrigin } from '$mock/index';

const ListEntry = ({ name }: { name: string }) => (
	<IonItem className='list-entry'>
		<IonLabel>{name}</IonLabel>
		<IonCheckbox slot='end' />
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
				{lists.map(({ id, name }) => (
					<ListEntry name={name} key={id} />
				))}
			</IonContent>
		</IonPage>
	);
}
