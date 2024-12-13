import { HtmlHTMLAttributes } from 'react';

export interface QuizProps extends HtmlHTMLAttributes<HTMLDivElement> {
	questions: QuizItem[];
}

export interface QuizItem {
	question: string;
	choices: string[];
}
