import { Input } from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useState } from 'react';
import { OfferProps } from './Offer.props';
import styles from './Offer.module.css';
import { Modal } from '../../ui/Modal/Modal';
import { Heading } from '../../ui/Heading/Heading';

export function Offer({ open, setOpen, className, ...props }: OfferProps) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const sendEmail = () => {};

	return (
		<Modal active={open} setModalActive={setOpen}>
			<div className={styles.offer}>
				<Heading type='h2'>Обратная связь</Heading>
				<form
					{...props}
					id='help-form'
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
