import clsx from 'clsx';
import type { Props } from '$util/types';

export default function Card({ children, className, ...props }: Props): JSX.Element {
	return (
		<div {...props} className={clsx('max-w-xl', className)}>
			<div className='bg-white shadow-md rounded-b-xl dark:bg-black'>{children}</div>
		</div>
	);
}
