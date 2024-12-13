import { HtmlHTMLAttributes } from 'react';

export interface OfferProps extends HtmlHTMLAttributes<HTMLFormElement> {
	setOpen: (open: boolean) => void;
	open: boolean;
}
