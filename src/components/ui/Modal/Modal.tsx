import { ModalProps } from './Modal.props';
import cn from 'classnames';
import styles from './Modal.module.css';
import { useEffect, useRef, useState } from 'react';

export function Modal({
	children,
	className,
	videoModal = false,
	active,
	setModalActive,
	...props
}: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		setModalActive(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			modalRef.current &&
			!modalRef.current.contains(event.target as Node)
		) {
			handleClose();
		}
	};

	const handleEscape = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleClose();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);
	return (
		<div
			className={cn(className, styles.modal, {
				[styles.hidden]: !active,
				[styles.video]: videoModal,
			})}
			{...props}
		>
			<div ref={modalRef} className={styles['modal-inner']}>
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
