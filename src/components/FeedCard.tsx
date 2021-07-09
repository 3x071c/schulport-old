import Card from '$components/Card';
import Image from 'next/image';

export default function FeedCard({
	title,
	type,
	text,
	author,
	authorAvatar,
	image,
}: {
	title: string;
	type: string;
	text: string;
	author: string;
	authorAvatar: string;
	image: string;
}): JSX.Element {
	return (
		<Card className='my-4 mx-auto'>
			<div className='h-32 w-full relative'>
				<Image
					className='rounded-t-xl'
					objectFit='cover'
					src={image}
					alt='Illustration zum Feed-Eintrag'
					layout='fill'
				/>
			</div>
			<div className='px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900'>
				<h4 className='font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase'>{type}</h4>
				<h2 className='font-bold text-2xl text-gray-800 dark:text-gray-100'>{title}</h2>
				<p className='sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400'>{text}</p>
				<div className='flex items-center space-x-4'>
					<div className='w-10 h-10 relative'>
						<Image
							layout='fill'
							src={authorAvatar}
							className='rounded-full'
							alt='Verfasser*in des Feed-Eintrags'
						/>
					</div>
					<h3 className='text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium'>{author}</h3>
				</div>
			</div>
		</Card>
	);
}
