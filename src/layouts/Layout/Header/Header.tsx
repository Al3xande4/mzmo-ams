import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';
import Button from '../../../components/ui/Button/Button';
import { HashLink } from 'react-router-hash-link';
import { customScroll } from '../../../helpers/scroll';
import { useState } from 'react';
import { Offer } from '../../../components/domain/Offer/Offer';

function Header({ className }: HeaderProps) {
	const [active, setActive] = useState(false);
	const [offerActive, setOfferActive] = useState(false);

	const handleLinkClick = () => {
		setActive(false);
	};

	return (
		<header className={cn(className, styles.header)}>
			<Offer setOpen={setOfferActive} open={offerActive}></Offer>
			<img
				className={styles.logo}
				alt='Логотип компании'
				src='/mzmo-ams/МЗМО.svg'
			/>
			<nav
				className={cn(styles.navigation, {
					[styles.active]: active,
				})}
			>
				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#uos-ams'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					УОС-АМС
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#usage'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Направления
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#description'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Описание системы
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#requirements'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Требования
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#ask-question'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Задать вопрос
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#about-us'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Преимущества
				</HashLink>

				<HashLink
					onClick={() => {
						handleLinkClick();
					}}
					smooth
					to='#our-projects'
					scroll={(el) => {
						customScroll(el);
					}}
					className={cn(styles.link)}
				>
					Наши проекты
				</HashLink>
			</nav>

			<div
				className={styles.connect}
				onClick={() => {
					setOfferActive(true);
				}}
			>
				<Button>Обратная связь</Button>
			</div>

			<div
				className={cn(styles.menu, {
					[styles.active]: active,
				})}
				onClick={() => {
					setActive((prev) => !prev);
				}}
			>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
		</header>
	);
}

export default Header;
