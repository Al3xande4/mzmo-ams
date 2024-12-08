import { Heading } from '../../ui/Heading/Heading';
import { FaqItemProps } from './FaqItem.props';
import styles from './FaqItem.module.css';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

export function FaqItem({ title, text }: FaqItemProps) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [containerHeight, setContainerHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.offsetHeight);
		}
	}, [ref.current]);

	useEffect(() => {
		if (containerRef.current) {
			setContainerHeight(containerRef.current.offsetHeight);
		}
	}, [containerRef.current]);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div
			ref={containerRef}
			className={cn(styles.container, {
				[styles.open]: open,
			})}
			style={open ? { height: `${containerHeight + height + 50}px` } : {}}
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
				style={open ? { top: `${height}px` } : {}}
				className={styles.answer}
			>
				{text}
			</div>
		</div>
	);
}
