export const images = [
	'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=50',
	'https://images.unsplash.com/photo-1528357136257-0c25517acfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=50',
	'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=50',
];

export const homeItems = [
	{
		author: 'Herr Ulshöfer',
		authorAvatar: '/img/uls.jpg',
		id: 1,
		image: images[0],
		text: 'Hier ein Link zum Stundenplan, der ab nächster Woche für alle Schüler*innen der Q11...',
		title: 'Stundenplanänderung Q11',
		type: 'Update',
	},
	{
		author: 'Herr Sauer',
		authorAvatar: '/img/ref.jpg',
		id: 2,
		image: images[1],
		text: 'Liebe Schülerinnen und Schüler des Religionskurses,...',
		title: 'Vertretung 1ev1',
		type: 'Update',
	},
	{
		author: 'Frau Nagele',
		authorAvatar: '/img/nag.jpg',
		id: 3,
		image: images[2],
		text: 'Liebe KursteilnehmerInnen! Leider hat Sie Frau Wurzel nicht vor Ort angetroffen! Wenn im Vertretungsplan steht "Vertretung" und nicht Entfall haben Sie zu erscheinen!...',
		title: 'Anwesenheitspflicht',
		type: 'Update',
	},
];

export const notifications = [
	{ title: 'Sportkurswahl Q12', when: '1 Tag 20 Stunden' },
	{ title: 'Badmintonprüfung Terminfestlegung', when: '5 Tage 14 Stunden' },
	{ title: 'Berufsabend Q11', when: '2 Monate' },
	{ title: 'Willkommen bei Schulport!', when: '5 Monate' },
];

// Some fake lists
export const lists = [
	{
		id: 1,
		name: '1g2 Arbeitsauftrag',
	},
	{
		id: 2,
		name: '1wr1 Hausaufgabe',
	},
	{
		id: 3,
		name: '1w-Ph1 Seminararbeit',
	},
	{
		id: 4,
		name: '1p-M1 RPG Maker installieren',
	},
];
