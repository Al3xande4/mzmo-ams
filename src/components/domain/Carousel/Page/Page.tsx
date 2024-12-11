import styles from './Page.module.css';
import cn from 'classnames';
import { PageProps } from './Page.props';
import { useContext, useEffect } from 'react';
import { CarouselContext } from '../Carousel.context';

export function Page({ children, className }: PageProps) {
	const { width, pagesPerView, spaceBetween } = useContext(CarouselContext);
	useEffect(() => {
		console.log(width);
	}, [width]);
	return (
		<div
			className={cn(className, styles['page__main-container'])}
			style={{
				minWidth: `${
					Math.ceil(width / pagesPerView) -
					spaceBetween * Math.min(1, pagesPerView - 1)
				}px`,
				marginRight: `${
					spaceBetween * Math.min(1, pagesPerView - 1)
				}px`,
				maxWidth: `${
					Math.ceil(width / pagesPerView) -
					spaceBetween * Math.min(1, pagesPerView - 1)
				}px`,
			}}
		>
			{children}
		</div>
	);
}
