import { FormHTMLAttributes } from 'react';

export interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
	quizAnswers: string[] | undefined;
}
