import { ReactNode } from 'react';

export interface ModalProps {
	children?: ReactNode;
	className?: string;
	hidden?: boolean;
	setModalActive: (active: boolean) => void;
	active: boolean;
}
