import styles from './UsageItem.module.css';
import cn from 'classnames';
import { UsageItemProps } from './UsageItem.props';
import { useState } from 'react';

export function UsageItem({ className, description, img }: UsageItemProps) {
	const [visible, setVisible] = useState(false);
	return (
		<div
			onMouseLeave={() => setVisible(false)}
			className={cn(styles.container, className)}
		>
			<img
				className={styles.img}
				onMouseOver={() => setVisible(true)}
				src={img}
				alt='иконка направления'
			></img>
			<p
				className={cn(styles.description, {
					[styles.visible]: visible,
				})}
			>
				{description}
			</p>
		</div>
	);
}
