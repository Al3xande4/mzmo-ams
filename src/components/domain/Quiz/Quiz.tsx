import { useEffect, useRef, useState } from 'react';
import { QuizProps } from './Quiz.props';
import cn from 'classnames';
import styles from './Quiz.module.css';

export const Quiz = ({ questions, className, ...props }: QuizProps) => {
	const [curr, setCurr] = useState(0);
	const windowElRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(450);

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
		setCurr((prev) => Math.min(prev + 1, questions.length));
	};

	const prevQuestion = () => {
		setCurr((prev) => Math.max(0, prev - 1));
	};

	return (
		<div className={cn(className, styles.quiz)}>
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
							{el.choices.map((el, choiceIndex) => (
								<div className={styles['quiz-choice']}>
									<input
										className={styles['quiz-choice-input']}
										key={`${index}-${choiceIndex}`}
										type='radio'
										name={`question-${index}`}
										id={`qustion-${index}-choice-${choiceIndex}`}
									></input>
									<label
										className={styles['quiz-choice-label']}
										id={`qustion-${index}-choice-${choiceIndex}`}
									>
										{el}
									</label>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
