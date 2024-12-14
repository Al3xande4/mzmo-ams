import { Input } from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { ConsultProps } from './Consult.props';
import styles from './Consult.module.css';
import { Modal } from '../../ui/Modal/Modal';
import { Heading } from '../../ui/Heading/Heading';
import { Textarea } from '../../ui/Textarea/Textarea';

export function Consult({ open, setOpen, className, ...props }: ConsultProps) {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [message, setMessage] = useState('');
	const [policy, setPolicy] = useState(false);
	const [policyError, setPolicyError] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		resetForm();
	}, []);

	const resetForm = () => {
		setName('');
		setPhone('');
		setEmail('');
		setMessage('');
		setPolicy(false);
		setPolicyError(false);
		setNameError(false);
		setNameError(false);
		setPhoneError(false);
		setEmailError(false);
		setMessageError(false);
		setSuccess(false);
	};

	const handleSubmit = () => {
		if (!name) {
			setNameError(true);
		}
		if (!email) {
			setEmailError(true);
		}
		if (!phone) {
			setPhoneError(true);
		}
		if (!message) {
			setMessageError(true);
		}
		if (!policy) {
			setPolicyError(true);
		}
		if (!name || !email || !policy || !phone || !message) {
			return;
		}
		sendEmail();
		resetForm();
		setSuccess(true);
	};

	const sendEmail = () => {};

	return (
		<Modal active={open} setModalActive={setOpen}>
			<div className={styles.offer}>
				<Heading type='h2'>Получить консультацию</Heading>
				{success && (
					<div
						className={cn(styles.success, {
							[styles.hidden]: !success,
						})}
					>
						Спасибо! Ваша заявка принята!
					</div>
				)}
				{!success && (
					<form
						{...props}
						id='consult-form'
						className={cn(styles.form, className)}
					>
						<div className={styles['inputs']}>
							<fieldset className={styles.fieldset}>
								<label
									className={cn(styles.label, {
										[styles.hidden]: !name,
									})}
									htmlFor='name'
								>
									ФИО
								</label>
								<div
									className={cn(styles.error, {
										[styles.hidden]: !nameError,
									})}
								>
									Поле имя не может быть пустым
								</div>
								<Input
									name='name'
									id='name'
									placeholder='ФИО'
									value={name}
									onChange={(e) => {
										setName(e.target.value);
										setNameError(false);
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
								<div
									className={cn(styles.error, {
										[styles.hidden]: !phoneError,
									})}
								>
									Поле номер телефона не может быть пустым
								</div>
								<Input
									name='phone'
									id='phone'
									placeholder='Номер телефона'
									required
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
										setPhoneError(false);
									}}
								/>
							</fieldset>

							<fieldset
								className={cn(styles.big, styles.fieldset)}
							>
								<label
									className={cn(styles.label, {
										[styles.hidden]: !email,
									})}
									htmlFor='email'
								>
									Email
								</label>
								<div
									className={cn(styles.error, {
										[styles.hidden]: !emailError,
									})}
								>
									Поле email не может быть пустым
								</div>
								<Input
									id='email'
									name='email'
									className={styles['input-big']}
									placeholder='Email'
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										setEmailError(false);
									}}
								/>
							</fieldset>

							<fieldset
								className={cn(styles.big, styles.fieldset)}
							>
								<label
									className={cn(styles.label, {
										[styles.hidden]: !message,
									})}
									htmlFor='message'
								>
									Сообщение
								</label>
								<div
									className={cn(styles.error, {
										[styles.hidden]: !messageError,
									})}
								>
									Поле сообщение не может быть пустым
								</div>
								<Textarea
									id='message'
									name='message'
									className={styles['input-big']}
									placeholder='Сообщение'
									required
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
										setMessageError(false);
									}}
								/>
							</fieldset>
						</div>
						<div>
							<input
								id='policy-consult'
								name='policy-consult'
								type='checkbox'
								checked={policy}
								onChange={() => {
									setPolicy((prev) => !prev);
									setPolicyError(false);
								}}
							></input>
							<div
								className={cn(styles.error, {
									[styles.hidden]: !policyError,
								})}
							>
								Вы не согласились с политикой конфиденциальности
							</div>
							<label htmlFor='policy-consult'>
								Согласен(а) с политикой конфиденциальности
							</label>
						</div>
						<Button
							onClick={(e) => {
								e.preventDefault();
								handleSubmit();
							}}
							className={styles['submit']}
							type='submit'
						>
							Отправить
						</Button>
					</form>
				)}
			</div>
		</Modal>
	);
}
