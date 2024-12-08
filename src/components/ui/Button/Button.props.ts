import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	theme?: 'dark' | 'light';
	size?: 'small' | 'medium' | 'large';
}
