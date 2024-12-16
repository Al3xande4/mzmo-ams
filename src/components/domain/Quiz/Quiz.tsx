import { useEffect, useRef, useState } from 'react';
import { QuizProps } from './Quiz.props';
import cn from 'classnames';
import styles from './Quiz.module.css';

export const Quiz = ({
	endQuiz,
	questions,
	className,
	prevAnswers = undefined,
	...props
}: QuizProps) => {
	const [curr, setCurr] = useState(0);
	const windowElRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(450);
	const [answers, setAnswers] = useState<number[]>([]);
	const [selected, setSelected] = useState(-1);
	const [error, setError] = useState(-1);

	useEffect(() => {
		if (!prevAnswers) {
			setAnswers(() => new Array(questions.length).fill(-1));
			return;
		}
		setAnswers(prevAnswers);
	}, [prevAnswers]);

	useEffect(() => {
		const resizeHandler = () => {
			setWidth(() => {
				if (
					!windowElRef.current ||
					windowElRef.current.offsetWidth == 0
				) {
					return 450;
				}
				return windowElRef.current.offsetWidth;
			});
		};
		resizeHandler();

		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, [width, windowElRef]);

	const nextQuestion = () => {
		setSelected(-1);
		if (answers[curr] == -1) {
			setError(curr);
			return;
		}
		setCurr((prev) => Math.min(prev + 1, questions.length - 1));
		setError(-1);
		if (curr == questions.length - 1) {
			handleEnd();
		}
	};

	const prevQuestion = () => {
		setCurr((prev) => Math.max(0, prev - 1));
		setSelected(-1);
		setError(-1);
	};

	const handleEnd = () => {
		for (let i = 0; i < questions.length; i++) {
			if (answers[i] == -1) {
				setError(i);
				setCurr(i);
				setSelected(-1);
				return;
			}
		}
		endQuiz(answers);
	};

	return (
		<div className={cn(className, styles.quiz)}>
			<div
				className={cn(styles['error-message'], {
					[styles.active]: error == curr,
				})}
			>
				Вы не ответили на вопрос {curr + 1}
			</div>
			<div ref={windowElRef} className={styles.window}>
				<div
					style={{
						transform: `translateX(-${width * curr}px)`,
					}}
					className={styles['questions-container']}
				>
					{questions.map((el, index) => (
						<div
							style={{
								minWidth: `${width}px`,
								maxWidth: `${width}px`,
							}}
							className={styles['quiz-item']}
							key={index}
						>
							<div className={styles['quiz-item-title']}>
								Вопрос {index + 1}
							</div>
							<div className={styles['quiz-item-question']}>
								{el.question}
							</div>
							<hr></hr>
							<ul className={styles['quiz-choices-list']}>
								{el.choices.map((el, choiceIndex) => (
									<div
										key={`${index}-${choiceIndex}`}
										className={cn(styles['quiz-choice'], {
											[styles.selected]:
												selected == choiceIndex ||
												answers[index] == choiceIndex,
										})}
										onClick={() => {
											setAnswers((prev) => {
												const newAnswers = prev;
												newAnswers[index] = choiceIndex;
												return newAnswers;
											});
											setSelected(choiceIndex);
											setError(-1);
										}}
									>
										<input
											className={
												styles['quiz-choice-input']
											}
											type='radio'
											name={`question-${index}`}
											id={`qustion-${index}-choice-${choiceIndex}`}
										></input>
										<label
											className={
												styles['quiz-choice-label']
											}
											id={`qustion-${index}-choice-${choiceIndex}`}
										>
											{el}
										</label>
										<div className={styles.icon}>
											<div
												className={styles['icon-inner']}
											></div>
										</div>
									</div>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className={styles.actions}>
				<div className={styles.nav}>
					<div
						onClick={() => {
							prevQuestion();
						}}
						className={cn(styles.previous, styles.action, {
							[styles.inactive]: curr == 0,
						})}
					>
						<img
							src='/mzmo-ams/arrow-forward-simple.svg'
							className={cn(
								styles['action-arrow'],
								styles['arrow-back']
							)}
						></img>
						<span className={styles['action-text']}>
							Предыдуший
						</span>
					</div>
					<div
						onClick={() => {
							nextQuestion();
						}}
						className={cn(styles.next, styles.action, {})}
					>
						<span className={styles['action-text']}>Следующий</span>
						<img
							src='/mzmo-ams/arrow-forward-simple.svg'
							className={styles['action-arrow']}
						></img>
					</div>
				</div>
				<div
					style={{ display: 'none' }}
					onClick={() => {
						handleEnd();
					}}
					className={cn(styles.end, styles.action, {})}
				>
					Узнать стоимость
				</div>
			</div>
		</div>
	);
};
