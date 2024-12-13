import { ModalProps } from './Modal.props';
import cn from 'classnames';
import styles from './Modal.module.css';
import { useEffect, useState } from 'react';

export function Modal({
	children,
	className,
	active,
	setModalActive,
	...props
}: ModalProps) {
	return (
		<div
			className={cn(className, styles.modal, {
				[styles.hidden]: !active,
			})}
			{...props}
		>
			<div className={styles['modal-inner']}>
				<img
					onClick={() => {
						setModalActive(false);
					}}
					src='/mzmo-ams/close.svg'
					className={styles['close-btn']}
				/>
				{children}
			</div>
		</div>
	);
}
