export const customScroll = (el: HTMLElement) => {
	const header = document.querySelector('header') as HTMLElement;
	const headerHeight = header ? header.offsetHeight : 0;
	const offset = el.offsetTop - headerHeight;

	window.scrollTo({
		top: offset,
		behavior: 'smooth',
	});
};
