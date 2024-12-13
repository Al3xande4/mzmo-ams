import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
	hidden?: boolean;
	videoModal?: boolean;
	setModalActive: (active: boolean) => void;
	active: boolean;
}
