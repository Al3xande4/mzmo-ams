import { Heading } from '../../ui/Heading/Heading';
import { FaqItemProps } from './FaqItem.props';
import styles from './FaqItem.module.css';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export function FaqItem({
	title,
	children,
	className,
	...props
}: FaqItemProps) {
	const [open, setOpen] = useState(false);
	const [clicked, setClicked] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [containerHeight, setContainerHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.offsetHeight);
		}
	}, [ref.current, ref]);

	useEffect(() => {
		if (containerRef.current) {
			setContainerHeight(containerRef.current.offsetHeight);
		}
	}, [containerRef.current]);

	useEffect(() => {
		if (!clicked) {
			setTimeout(() => {
				setOpen(false);
			}, 400);
			return;
		}
		setOpen(true);
	}, [clicked]);

	const handleClick = () => {
		setClicked((prev) => !prev);
	};

	return (
		<div
			ref={containerRef}
			className={cn(className, styles.container, {
				[styles.open]: clicked,
			})}
			style={open ? { height: `${containerHeight + height + 50}px` } : {}}
			{...props}
		>
			<div className={styles.heading}>
				<Heading className={styles.title} type='h2'>
					{title}
				</Heading>
				<img
					onClick={() => {
						handleClick();
					}}
					className={styles.arrow}
					src='/mzmo-ams/arrow_down.svg'
				></img>
			</div>
			<div
				ref={ref}
				style={clicked ? { top: `${containerHeight}px` } : {}}
				className={styles.answer}
			>
				{children}
			</div>
		</div>
	);
}
