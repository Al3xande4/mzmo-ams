import { TextareaHTMLAttributes } from 'react';

export interface UsageItemProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	description: string;
	img: string;
}
