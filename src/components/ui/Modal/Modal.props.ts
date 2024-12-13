import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
	hidden?: boolean;
	setModalActive: (active: boolean) => void;
	active: boolean;
}
