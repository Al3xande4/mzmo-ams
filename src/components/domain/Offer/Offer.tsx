import { Input } from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { OfferProps } from './Offer.props';
import styles from './Offer.module.css';
import { Modal } from '../../ui/Modal/Modal';
import { Heading } from '../../ui/Heading/Heading';
import { init, send } from '@emailjs/browser';
import { sendEmail } from '../../../helpers/sendEmail';

export function Offer({ id, open, setOpen, className, ...props }: OfferProps) {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [select, setSelect] = useState(false);
	const [selectError, setSelectError] = useState(false);

	useEffect(() => {
		setNameError(false);
		setPhoneError(false);
		setEmailError(false);
		setSelectError(false);
		setName('');
		setPhone('');
		setEmail('');
	}, []);

	const handleSubmit = () => {
		if (!name) {
			setNameError(true);
		}
		if (!phone) {
			setPhoneError(true);
		}
		if (!email) {
			setEmailError(true);
		}
		if (!select) {
			setSelectError(true);
		}
		if (!name || !phone || !email || !select) {
			return;
		}

		sendEmail({ name: name, phone: phone, email: email });
	};

	const sendEmailJ = () => {
		init({ publicKey: '_hm22IqZ9qAQZM1XS' });
		send('service_h334iaa', 'template_0sdlf1e', {
			name: name,
			phone: phone,
			email: email,
		}).then(
			(response) => {
				console.log(response);
			},
			(error) => {
				console.error(error);
			}
		);
	};

	return (
		<Modal active={open} setModalActive={setOpen}>
			<div className={styles.offer}>
				<Heading type='h2'>Обратная связь</Heading>
				<form
					{...props}
					id={`help-form${id}`}
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
								Поле нормер телефона не может быть пустым
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

						<fieldset className={cn(styles.big, styles.fieldset)}>
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
					</div>
					<div>
						<input
							id={`policy${id}`}
							name={`policy${id}`}
							type='checkbox'
							onChange={(e) => {
								setSelect((prev) => !prev);
								setSelectError(false);
							}}
						></input>
						<div
							className={cn(styles.error, {
								[styles.hidden]: !selectError,
							})}
						>
							Согласитесь с политикой конфиденциальности
						</div>
						<label htmlFor={`policy${id}`}>
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
			</div>
		</Modal>
	);
}
