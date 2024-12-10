import { ContactFormProps } from './ContactForm.props';
import styles from './ContactForm.module.css';
import { Input } from '../../ui/Input/Input';
import { Textarea } from '../../ui/Textarea/Textarea';
import Button from '../../ui/Button/Button';
import cn from 'classnames';
import { useState } from 'react';

export function ContactForm({ className, ...props }: ContactFormProps) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [question1, setQuestion1] = useState('');
	const [question2, setQuestion2] = useState('');
	const [question3, setQuestion3] = useState('');
	const [question4, setQuestion4] = useState('');
	const [question5, setQuestion5] = useState('');

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
							[styles.hidden]: !lastName,
						})}
						htmlFor='last-name'
					>
						Номер телефона
					</label>
					<Input
						name='last name'
						id='last-name'
						placeholder='Номер телефона'
						required
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
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

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !question1,
						})}
						htmlFor='question-1'
					>
						Какой примерный объем сточных вод нужно обрабатывать?
					</label>
					<Input
						required
						id='question-1'
						name='question-1'
						className={styles['input-big']}
						placeholder='Какой примерный объем сточных вод нужно обрабатывать?'
						value={question1}
						onChange={(e) => {
							setQuestion1(e.target.value);
						}}
					></Input>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !question2,
						})}
						htmlFor='question-2'
					>
						Нужна ли автоматизация процесса?
					</label>
					<Input
						id='question-2'
						required
						name='question-2'
						className={styles['input-big']}
						placeholder='Нужна ли автоматизация процесса?'
						value={question2}
						onChange={(e) => {
							setQuestion2(e.target.value);
						}}
					></Input>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !question3,
						})}
						htmlFor='question-3'
					>
						Есть ли подвальное помещение в вашем строении?
					</label>
					<Input
						required
						id='question-3'
						name='question-3'
						className={styles['input-big']}
						placeholder='Есть ли подвальное помещение в вашем строении?'
						value={question3}
						onChange={(e) => {
							setQuestion3(e.target.value);
						}}
					></Input>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !question4,
						})}
						htmlFor='question-4'
					>
						Укажите примерные сроки в которые нужно реализовать
						проект
					</label>
					<Input
						required
						id='question-4'
						name='question-4'
						className={styles['input-big']}
						placeholder='Укажите примерные сроки в которые нужно реализовать проект'
						value={question4}
						onChange={(e) => {
							setQuestion4(e.target.value);
						}}
					></Input>
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.big)}>
					<label
						className={cn(styles.label, {
							[styles.hidden]: !question5,
						})}
						htmlFor='question-5'
					>
						Требуется модернизация действующий системы или установка
						с чистого листа
					</label>
					<Input
						required
						id='question-5'
						name='question-5'
						className={styles['input-big']}
						placeholder='Требуется модернизация действующий системы или установка с чистого листа'
						value={question5}
						onChange={(e) => {
							setQuestion5(e.target.value);
						}}
					></Input>
				</fieldset>
			</div>
			<Button className={styles['submit']} type='submit'>
				Отправить
			</Button>
		</form>
	);
}
