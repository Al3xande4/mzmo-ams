import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export function Input({ ...props }: InputProps) {
	return (
		<input {...props} className={cn(styles.input, props.className)}>
			{}
		</input>
	);
}
