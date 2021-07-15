import clsx from 'clsx';
import type { Props } from '$util/types';

//* Card nimmt contents und gibt die vollständig formatierte Karte wieder  */
export default function Card({ children, className, ...props }: Props): JSX.Element {
	return (
		/* Main div section enthält props */
		<div {...props} className={clsx('max-w-xl', className)}>
			{/* Innere div section enthält children */}
			<div className='bg-white shadow-md rounded-b-xl dark:bg-black'>{children}</div>
		</div>
	);
}
