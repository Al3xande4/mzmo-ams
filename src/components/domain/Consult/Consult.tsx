import { Input } from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useState } from 'react';
import { ConsultProps } from './Consult.props';
import styles from './Consult.module.css';
import { Modal } from '../../ui/Modal/Modal';
import { Heading } from '../../ui/Heading/Heading';

export function Consult({ open, setOpen, className, ...props }: ConsultProps) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = () => {};

	return (
		<Modal active={open} setModalActive={setOpen}>
			<div className={styles.offer}>
				<Heading type='h2'>Получить консультацию</Heading>
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
							<Input
								name='name'
								id='name'
								placeholder='ФИО'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
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

						<fieldset className={cn(styles.big, styles.fieldset)}>
							<label
								className={cn(styles.label, {
									[styles.hidden]: !message,
								})}
								htmlFor='message'
							>
								Сообщение
							</label>
							<Input
								id='message'
								name='message'
								className={styles['input-big']}
								placeholder='Сообщение'
								required
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
							/>
						</fieldset>
					</div>
					<div>
						<input
							id='policy'
							name='policy'
							type='checkbox'
						></input>
						<label htmlFor='policy'>
							Согласен(а) с политикой конфиденциальности
						</label>
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
			</div>
		</Modal>
	);
}
