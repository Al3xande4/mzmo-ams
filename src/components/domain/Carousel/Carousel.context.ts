import { createContext } from 'react';

export const CarouselContext = createContext({
	width: 450,
	pagesPerView: 1,
	spaceBetween: 0,
});
