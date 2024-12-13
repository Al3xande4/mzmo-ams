import { HtmlHTMLAttributes } from 'react';

export interface ConsultProps extends HtmlHTMLAttributes<HTMLFormElement> {
	setOpen: (open: boolean) => void;
	open: boolean;
}
