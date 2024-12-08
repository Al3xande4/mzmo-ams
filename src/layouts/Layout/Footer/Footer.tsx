import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';

export function Footer({ className, ...props }: FooterProps) {
	return <footer className={cn(className, styles.footer)}>footer</footer>;
}
