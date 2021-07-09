export type PartialOnly<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type PartialExcept<T, K extends keyof T> = Pick<T, K> & Omit<Partial<T>, K>;

export interface Props {
	children: React.ReactNode;
	className: string | undefined;
}
