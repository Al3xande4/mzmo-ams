import { HeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/ui/Button/Button';
import { HashLink } from 'react-router-hash-link';
import { customScroll } from '../../../helpers/scroll';

function Header({ className }: HeaderProps) {
	return (
		<header className={cn(className, styles.header)}>
			<img
				className={styles.logo}
				alt='Логотип компании'
				src='/mzmo-ams/МЗМО.svg'
			/>
			<div className={styles.menu}>
				<img></img>
			</div>
			<nav className={styles.navigation}>
				<HashLink
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

			<HashLink scroll={customScroll} smooth to={'#ask-question'}>
				<Button className={styles.connect}>Обратная связь</Button>
			</HashLink>
		</header>
	);
}

export default Header;
