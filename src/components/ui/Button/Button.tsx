import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({
	className,
	size = 'medium',
	theme = 'dark',
	children,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.light]: theme == 'light',
				[styles.small]: size == 'small',
				[styles.large]: size == 'large',
			})}
		>
			{children}
		</button>
	);
}

export default Button;
