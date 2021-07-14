/* eslint-disable react/jsx-no-comment-textnodes */
import clsx from 'clsx';
import type { Props } from '$util/types';

//* Card takes in contents and returns the full Card */
export default function Card({ children, className, ...props }: Props): JSX.Element {
	return (
		/* Main div section containing props */
		<div {...props} className={clsx('max-w-xl', className)}>
			{/* Div section containing children */}
			<div className='bg-white shadow-md rounded-b-xl dark:bg-black'>{children}</div>
		</div>
	);
}
