import { HtmlHTMLAttributes } from 'react';

export interface QuizProps extends HtmlHTMLAttributes<HTMLDivElement> {
	questions: QuizItem[];
	endQuiz: (answers: number[]) => void;
	prevAnswers: number[] | undefined;
}

export interface QuizItem {
	question: string;
	choices: string[];
}
