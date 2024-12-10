import { ImageProps } from './Image.props';
import cn from 'classnames';
import styles from './Image.module.css';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const Image = ({ className, modal = false, ...props }: ImageProps) => {
	const [modalActive, setModalActive] = useState(false);

	return (
		<>
			<img
				onClick={() => {
					setModalActive(true);
				}}
				className={cn(className, styles.img)}
				{...props}
			></img>

			{modal && (
				<Modal active={modalActive} setModalActive={setModalActive}>
					<img
						className={cn(styles['modal-img'], className)}
						{...props}
					></img>
				</Modal>
			)}
		</>
	);
};
