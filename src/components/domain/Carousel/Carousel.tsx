import {
	Children,
	cloneElement,
	DetailedReactHTMLElement,
	useEffect,
	useRef,
	useState,
} from 'react';
import styles from './Carousel.module.css';
import { CarouselProps } from './Carousel.props';
import cn from 'classnames';
import { Page } from './Page/Page';
import { CarouselContext } from './Carousel.context';

const TRANSITION_DURITION = 300;

export function Carousel({
	children,
	className,
	pagesPerView = 1,
	spaceBetween = 0,
}: CarouselProps) {
	const [pages, setPages] = useState<
		DetailedReactHTMLElement<any, HTMLElement>[] | null
	>();

	const windowElRef = useRef<HTMLDivElement>(null);

	const [offset, setOffset] = useState(-450);
	const [width, setWidth] = useState(450);
	const [transitionDuration, setTransitionDuration] =
		useState(TRANSITION_DURITION);
	const [clonesCount, setClonesCount] = useState({
		head: pagesPerView,
		tail: pagesPerView,
	});

	useEffect(() => {
		const _children = children as DetailedReactHTMLElement<
			any,
			HTMLElement
		>[];
		setPages(() => {
			const newPages = [];
			for (let i = 0; i < pagesPerView; i++) {
				newPages.push(
					cloneElement(
						_children[
							Children.count(_children) - (pagesPerView - i)
						]
					)
				);
			}
			newPages.push(..._children);
			for (let i = 0; i < pagesPerView; i++) {
				newPages.push(cloneElement(_children[i]));
			}
			return newPages;
		});
		setClonesCount({ head: pagesPerView, tail: pagesPerView });
	}, [children, pagesPerView]);

	useEffect(() => {
		const resizeHandler = () => {
			setWidth(() => {
				if (
					!windowElRef.current ||
					windowElRef.current.offsetWidth == 0
				) {
					return 450;
				}
				return windowElRef.current.offsetWidth;
			});
			setOffset(-(clonesCount.head * width) / pagesPerView);
		};
		resizeHandler();

		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, [pagesPerView, clonesCount, width, windowElRef]);

	useEffect(() => {
		if (transitionDuration == 0) {
			setTimeout(() => {
				setTransitionDuration(TRANSITION_DURITION);
			}, TRANSITION_DURITION + 100);
		}
	}, [transitionDuration]);

	useEffect(() => {
		if (!pages) {
			return;
		}

		if (offset == 0) {
			setTransitionDuration(0);
			setTimeout(() => {
				setOffset(
					-(
						width *
						(pages.length - pagesPerView - clonesCount.tail)
					) / pagesPerView
				);
			}, TRANSITION_DURITION);
			return;
		}
		if (
			offset ==
			-Math.ceil((width * (pages.length - pagesPerView)) / pagesPerView)
		) {
			setTransitionDuration(0);
			setTimeout(() => {
				setOffset(-(clonesCount.head * width) / pagesPerView);
			}, TRANSITION_DURITION);
		}
	}, [offset, pages, width, clonesCount, pagesPerView]);

	const handleNext = () => {
		setOffset((prev) => {
			if (!pages) {
				return 0;
			}
			return Math.max(
				prev - Math.ceil(width / pagesPerView),
				-Math.ceil(
					(width * (pages.length - pagesPerView)) / pagesPerView
				)
			);
		});
	};

	const handlePrev = () => {
		setOffset((prev) => {
			return Math.min(Math.ceil(prev + width / pagesPerView), 0);
		});
	};

	return (
		<CarouselContext.Provider
			value={{ width: width, pagesPerView: pagesPerView, spaceBetween }}
		>
			<div className={cn(className, styles.carousel)}>
				<div className={styles.nav}>
					<svg
						className={styles.arrow}
						onClick={() => {
							handlePrev();
						}}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 33 33'
					>
						<path d='M19.7 17.2l-3.5 3.5c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.5-3.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zm0 0c-.4.4-1 .4-1.4 0l-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.5 3.5c.4.4.4 1 0 1.4zM16.5 2C8.5 2 2 8.5 2 16.5S8.5 31 16.5 31 31 24.5 31 16.5 24.5 2 16.5 2zm.5 31h-1C7.2 33 0 25.8 0 17v-1C0 7.2 7.2 0 16 0h1c8.8 0 16 7.2 16 16v1c0 8.8-7.2 16-16 16z' />
					</svg>
					<svg
						className={styles.arrow}
						onClick={() => {
							handleNext();
						}}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 33 33'
					>
						<path d='M19.7 17.2l-3.5 3.5c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3.5-3.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zm0 0c-.4.4-1 .4-1.4 0l-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.5 3.5c.4.4.4 1 0 1.4zM16.5 2C8.5 2 2 8.5 2 16.5S8.5 31 16.5 31 31 24.5 31 16.5 24.5 2 16.5 2zm.5 31h-1C7.2 33 0 25.8 0 17v-1C0 7.2 7.2 0 16 0h1c8.8 0 16 7.2 16 16v1c0 8.8-7.2 16-16 16z' />
					</svg>
				</div>
				<div className={styles.window} ref={windowElRef}>
					<div
						className={styles['pages-container']}
						style={{
							transform: `translateX(${offset}px)`,
							transitionDuration: `${transitionDuration}ms`,
						}}
					>
						{pages}
					</div>
				</div>
			</div>
		</CarouselContext.Provider>
	);
}

Carousel.Page = Page;
