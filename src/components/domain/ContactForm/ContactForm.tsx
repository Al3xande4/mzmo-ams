import { ContactFormProps } from './ContactForm.props';
import styles from './ContactForm.module.css';
import { Input } from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useState } from 'react';

export function ContactForm({
	quizAnswers,
	className,
	...props
}: ContactFormProps) {
	const [firstName, setFirstName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);

	const sendEmail = () => {};

	return (
		<form
			{...props}
			id='contact-form'
			className={cn(styles.form, className)}
		>
			<div className={styles['inputs']}>
				<fieldset className={styles.fieldset}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !firstName,
						})}
						htmlFor='first-name'
					>
						Имя
					</label>
					<Input
						name='first name'
						id='first-name'
						placeholder='Имя'
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !phone,
						})}
						htmlFor='phone'
					>
						Номер телефона
					</label>
					<Input
						name='phone'
						id='phone'
						placeholder='Номер телефона'
						required
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
				</fieldset>

				<fieldset className={cn(styles.big, styles.fieldset)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !email,
						})}
						htmlFor='email'
					>
						Email
					</label>
					<Input
						id='email'
						name='email'
						className={styles['input-big']}
						placeholder='Email'
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</fieldset>
			</div>
			<Button
				onClick={(e) => {
					e.preventDefault();
					sendEmail();
				}}
				className={styles['submit']}
				type='submit'
			>
				Отправить
			</Button>
		</form>
	);
}
