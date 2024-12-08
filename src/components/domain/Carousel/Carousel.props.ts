import { HtmlHTMLAttributes } from 'react';

export interface CarouselProps extends HtmlHTMLAttributes<HTMLDivElement> {
	pagesPerView?: number;
	spaceBetween?: number;
}
