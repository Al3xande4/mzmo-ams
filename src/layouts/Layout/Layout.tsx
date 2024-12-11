import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';

export function Layout() {

	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer className={styles.footer} />
		</div>
	);
}
