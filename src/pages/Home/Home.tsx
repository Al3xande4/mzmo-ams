import Button from '../../components/ui/Button/Button';
import { Heading } from '../../components/ui/Heading/Heading';
import styles from './Home.module.css';
import classNames from 'classnames';
import { Wrapper } from '../../components/ui/Wrapper/Wrapper';
import { UsageItem } from '../../components/domain/UsageItem/UsageItem';
import { Carousel } from '../../components/domain/Carousel/Carousel';
import { HashLink } from 'react-router-hash-link';
import { customScroll } from '../../helpers/scroll';
import { FaqItem } from '../../components/domain/FaqItem/FaqItem';
import { useEffect, useState } from 'react';
import { ContactForm } from '../../components/domain/ContactForm/ContactForm';
import { Image } from '../../components/ui/Image/Image';
import { Quiz } from '../../components/domain/Quiz/Quiz';
import { Offer } from '../../components/domain/Offer/Offer';
import { QuizItem } from '../../components/domain/Quiz/Quiz.props';
import { Consult } from '../../components/domain/Consult/Consult';
import { Modal } from '../../components/ui/Modal/Modal';

const questions: QuizItem[] = [
	{
		question: 'Какой примерный объем сточных вод нужно обрабатывать?',
		choices: ['30', '50', '100'],
	},
	{
		question: 'Нужна ли автоматизация процесса?',
		choices: ['Да', 'Нет'],
	},
	{
		question: 'Есть ли подвальное помещение в вашем строении?',
		choices: ['Да', 'Нет'],
	},
	{
		question: 'Укажите примерные сроки в которые нужно реализовать проект',
		choices: ['Месяц', 'Полгода', 'Год'],
	},
	{
		question:
			'Требуется модернизация действующий системы или установка с чистого листа?',
		choices: ['Требуется модернизация', 'Установка с читого листа'],
	},
];

function HomePage() {
	const [pagesPerView, setPagesPerView] = useState(3);
	const [pagesPerViewSmall, setPagesPerViewSmall] = useState(3);
	const [offerActive, setOfferActive] = useState(false);
	const [consultActive, setConsultActive] = useState(false);
	const [quizActive, setQuizActive] = useState(true);
	const [quizAnswers, setQuizAnswers] = useState<number[]>();
	const [quizTextAnswers, setQuizTextAnswers] = useState<string[]>();
	const [videoActive, setVideoActive] = useState(false);

	useEffect(() => {
		if (!quizAnswers) {
			return;
		}
		const textAnswers = new Array(quizAnswers.length);
		for (let i = 0; i < quizAnswers.length; i++) {
			textAnswers[i] = questions[i].choices[quizAnswers[i]];
		}
		setQuizTextAnswers(textAnswers);
	}, [quizAnswers]);

	const handleResize = () => {
		if (window.innerWidth < 900) {
			setPagesPerViewSmall(1);
			setPagesPerView(1);
			return;
		}
		if (window.innerWidth < 1250) {
			setPagesPerViewSmall(1);
			setPagesPerView(2);
			return;
		}
		if (window.innerWidth < 1440) {
			setPagesPerViewSmall(2);
			setPagesPerView(2);
			return;
		}
		if (window.innerWidth > 1440) {
			setPagesPerViewSmall(3);
			setPagesPerView(3);
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.page}>
			<Offer
				id='offer-home'
				setOpen={setOfferActive}
				open={offerActive}
			></Offer>
			<Consult setOpen={setConsultActive} open={consultActive} />
			<Modal
				videoModal={true}
				setModalActive={setVideoActive}
				active={videoActive}
			>
				<video className={styles['video']} controls>
					<source src='/mzmo-ams/video.mp4' type='video/mp4'></source>
				</video>
			</Modal>
			<Wrapper>
				<section className={styles.preview}>
					<div className={styles['preview-info']}>
						<Heading
							id='uos-ams'
							className={styles.title}
							type='h1'
						>
							Установка для обеззараживания сточных вод УОС-АМС
						</Heading>
						<p className={styles['subtitle']}>
							100% безопастность для персонала и окружающей среды
						</p>
						<ul className={styles['preview-list']}>
							<li className={styles['preview-item']}>
								Под ключ: от проектирования до ввода в
								эксплуатацию
							</li>
							<li className={styles['preview-item']}>
								Простота в управлении: полностью
								автоматизированный процесс
							</li>
							<li className={styles['preview-item']}>
								Поддержка 24/7: обучение, гарантия, сервис +
								удаленный мониторинг
							</li>
						</ul>
						<p className={styles['subtitle']}>
							Система УОС-АМС обеспечивает абсолютную защиту от
							инфекций и полное соответствие СанПиН и СП.
						</p>
						<div className={styles['preview-actions']}>
							<HashLink
								scroll={customScroll}
								smooth
								to={'#description'}
							>
								<Button
									className={styles['preview-middle-btn']}
									size='large'
								>
									Как это работает
								</Button>
							</HashLink>
							<div
								className={styles['preview-text']}
								onClick={() => {
									setOfferActive(true);
								}}
							>
								Получить коммерческое предложение
							</div>
						</div>
					</div>
					<div className={styles['preview-images']}>
						<div className={styles['preview-images-col-1']}>
							<Image
								modal={true}
								className={styles['preview-image']}
								src={'/mzmo-ams/model (2).jpg'}
							/>
							<Image
								modal={true}
								className={styles['preview-image']}
								src={'/mzmo-ams/model (4).jpg'}
							/>
						</div>
						<div className={styles['preview-images-col-2']}>
							<Image
								modal={true}
								className={styles['preview-image']}
								src={'/mzmo-ams/model (3).jpg'}
							/>
						</div>
					</div>
				</section>
			</Wrapper>
			<section className={styles['video-section']}>
				<Wrapper>
					<div className={styles['video-section-inner']}>
						<Heading className={styles['video-title']} type='h2'>
							Как работает
							<span className={styles['video-subtitle']}>
								УОС-АМС
							</span>
						</Heading>
						<div
							onClick={() => {
								setVideoActive(true);
							}}
							className={styles['btn-play']}
						>
							<img
								className={styles['btn-play-img']}
								src='/mzmo-ams/play-button.svg'
							/>
						</div>
					</div>
				</Wrapper>
			</section>
			<section id='usage' className={styles['usage-section']}>
				<Heading type='h2' hidden>
					Для кого разработана и целевая аудитория
				</Heading>

				<Heading className={styles['usage-title']} type='h3'>
					Направления применения
				</Heading>
				<ul className={styles['ways']}>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок8.svg'
							description='Диагностические, ПЦР, экспериментальные, зоолого-энтомологические лаборатории'
						></UsageItem>
						Лаборатории
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок15.svg'
							description='Лаборатории по производству иммунобиологических лекарств'
						></UsageItem>
						Биотехнологии
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/vet.svg'
							description='Ветеринарные учреждения.'
						></UsageItem>
						Ветеринария
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/hospital.svg'
							description='Инфекционные больницы и больничные отделения'
						></UsageItem>
						Здравоохранение
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок9.svg'
							description='Пищевая промышленность'
						></UsageItem>
						Пищевая промышленность
					</li>

					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/morgue.svg'
							description='Патологоанатомические учреждения по вскрытию трупов
людей и животных.'
						></UsageItem>
						Патология
					</li>
				</ul>
				<Heading className={styles['usage-title']} type='h3'>
					Для кого разработана технология
				</Heading>

				<ul className={styles['ways']}>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок7.svg'
							description='Исследовательские центры и производства, занимающиеся
вирусологией, бактериологией, эпидемиологией, биотехнологией, генной инженерией, производством вакцин и сывороток.'
						></UsageItem>
						Исследовательские институты
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок6.svg'
							description='Микробиологические лаборатории контроля качества продуктов'
						></UsageItem>
						Точная механика
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок11.svg'
							description='Диагностические лаборатории, в которых исследуют объекты биотической и абиотической природы, где идентифицируют возбудителей заболеваний, антигены и антитела.'
						></UsageItem>
						Микроэлектроника
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/lab-worker.svg'
							description='Лаборатории по производству иммунобиологических
лекарств с применением микроорганизмов и продуктов,
полученных в результате микробиологического синтеза.'
						></UsageItem>
						Фармацевтика
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/Рисунок17.svg'
							description='Полностью автоматизированный процесс - условие максимальной уверенности, защиты персонала и окружающей
среды.'
						></UsageItem>
						Приборостроение
					</li>
					<li className={styles['usage-item']}>
						<UsageItem
							img='/mzmo-ams/flask.svg'
							description='Лаборатории с уровнем опасности BSL2-3-4'
						></UsageItem>
						Лаборатории BSL2-3-4
					</li>
				</ul>
			</section>
			<section id='description' className={styles['how-it-works']}>
				<Wrapper>
					<Heading className={styles['works-title']} type='h2'>
						Что такое УОС-АМС и как это работает
					</Heading>
					<div className={styles['works-description']}>
						УОС-АМС - это автоматизированная установка для
						непрерывного термического обеззараживания сточных вод,
						содержащих биологические агенты I-IV групп патогенности.
						Установка работает по принципу непрерывного протока,
						обеспечивая 100% уничтожение патогенных микроорганизмов
						и полное соответствие нормативным требованиям.
					</div>
					<div className={styles['how-it-works-container']}>
						<div className={styles['works-info']}>
							<Heading
								className={styles['advantages-title']}
								type='h3'
							>
								Принцип работы
							</Heading>
							<ol className={styles['works-list']}>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Установка подключается к системе
										канализации, собирающей сточные воды из
										"заразной" зоны
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Сточные воды накапливаются в баке,
										проходят фильтрацию и подаются в систему
										термической обработки
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										После достижения заданной температуры и
										времени выдержки, обработанные стоки
										охлаждаются и сбрасываются в общую
										систему канализации.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Процесс полностью автоматизирован и
										контролируется с помощью удаленной
										системы управления.
									</p>
								</li>
							</ol>
						</div>
						<div className={styles['works-info']}>
							<Heading
								className={styles['advantages-title']}
								type='h3'
							>
								Наша установка УОС-АМС:
							</Heading>
							<ul className={styles.advantages}>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Обеспечивает соответствие нормативным
										требованиям: Гарантирует соблюдение
										СанПиН 3.3686-21 и СП 2.1.3678-20,
										предотвращая штрафы и санкции
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Обеспечивает безопасность: Исключает
										риск распространения инфекций через
										сточные воды, защищая персонал,
										пациентов и окружающую среду
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Полностью автоматизирует процесс:
										Минимизирует человеческий фактор,
										упрощает обслуживание и предоставляет
										возможность удаленного управления и
										мониторинга параметров
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Оптимизирует бюджет: Стоимость УОС-АМС
										на 30% ниже зарубежных аналогов
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Обеспечивает надежность и долговечность:
										Эксплуатационный срок службы 8 лет
									</p>
								</li>
							</ul>
						</div>
						<div className={styles['works-info']}>
							<Heading
								className={styles['consists-title']}
								type='h3'
							>
								Комплектация:
							</Heading>
							<ol className={styles['works-list']}>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Накопительный бак для сточных вод.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Система фильтров предварительной
										очистки.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Парогенераторы для термической
										обработки.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Система контроля температуры и времени
										выдержки
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Система охлаждения обработанных стоков.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Насосы для подачи и слива сточных вод
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Автоматизированная система управления и
										контроля.
									</p>
								</li>
								<li className={styles['works-item']}>
									<p className={styles['works-text']}>
										Резервные узлы для обеспечения
										бесперебойной работы.
									</p>
								</li>
							</ol>
						</div>
						<img
							src='/mzmo-ams/draft.jpg'
							className={styles['works-img']}
						/>
					</div>
				</Wrapper>
			</section>

			<section id='requirements' className={styles['requirements']}>
				<Wrapper>
					<div className={styles['requirements-container']}>
						<Heading
							className={styles['requirements-title']}
							type='h2'
						>
							7 обязательных требований к системам обеззараживания
							сточных вод + нормативные документы СанПиН и СП
						</Heading>

						<ol className={styles['requirements-list']}>
							<li className={styles['requirements-item']}>
								П 2.1.3678-20 «Санитарно-эпидемиологические
								требования к эксплуатации помещений...»
							</li>
							<li className={styles['requirements-item']}>
								п. 4.4.3 Очистка и обеззараживание сточных вод
								от медицинских организаций должна осуществляться
								на общегородских или других канализационных
								очистных сооружениях, гарантирующих эффективную
								очистку и обеззараживание сточных вод. При
								отсутствии очистных сооружений сточные воды
								медицинских организаций должны подвергаться
								полной биологической очистке и обеззараживанию
								на локальных сооружениях. '
							</li>
							<li className={styles['requirements-item']}>
								СанПиН 3.3686-21 «Санитарно-эпидемиологические
								требования по профилактике инфекционных
								болезней»
							</li>
							<li className={styles['requirements-item']}>
								п. 206. По окончании работы все объекты,
								содержащие ПБА, убирают в хранилища
								(холодильники, термостаты, шкафы и другие,
								которые опечатываются); проводят текущую
								дезинфекцию рабочих поверхностей и используемого
								оборудования. Не допускается слив
								необеззараженных жидкостей в канализационную
								сеть и вынос из «заразной» зоны необеззараженных
								отходов
							</li>
							<li className={styles['requirements-item']}>
								п. 342. К лабораториям, осуществляющим работы с
								ПБА II группы, предъявляются следующие
								санитарно-эпидемиологические требования.
							</li>
							<li className={styles['requirements-item']}>
								подпункт 17. Запрещается слив (сток)
								необеззараженных жидкостей в канализационную
								сеть. Во вновь строящихся и реконструируемых
								организациях или их подразделениях
								проектирование и функционирование системы
								специальной канализации, сбора и обеззараживания
								стоков из «заразной» зоны осуществляется в
								соответствии с
							</li>
							<li className={styles['requirements-item']}>
								41. Систему обработки сточных вод составляет
								комплекс оборудования, обеспечивающий сбор,
								обезвреживание, охлаждение при термическом
								обеззараживании и сброс сточных вод в наружные
								сети канализации. По принципу работы системы
								тепловой обработки сточных вод подразделяются на
								циклические и непрерывной обработки.
							</li>
						</ol>

						<div className={styles['checklist-container']}>
							<div className={styles['checklist-info']}>
								<Heading
									className={styles['checklist-title']}
									type='h3'
								>
									Скачайте бесплатно наш чек-лист, чтобы:
								</Heading>
								<ul className={styles['checklist-list']}>
									<li className={styles['checklist-item']}>
										Узнать о ключевых требованиях: 7
										обязательных норм для систем
										обеззараживания сточных вод.
									</li>
									<li className={styles['checklist-item']}>
										Доступ к нормативам: Ссылки на
										актуальные СанПиН и СП.
									</li>
									<li className={styles['checklist-item']}>
										Проведите самоаудит: оцените
										соответствие вашей системы требованиям и
										выявите недостатки.
									</li>
									<li className={styles['checklist-item']}>
										Повысить безопасность: Обеспечьте
										соблюдение норм и защиту окружающей
										среды.
									</li>
								</ul>
								<a
									href='/mzmo-ams/ДС ЕАЭС N RU Д-RU.РА10.В.65068_23 УОС-1.pdf'
									download={'Чек лист'}
								>
									<Button
										className={styles['check-list-btn']}
									>
										Скачать чек лист
									</Button>
								</a>
							</div>
							<Image
								src='/mzmo-ams/mockup.webp'
								className={styles['checklist-preview']}
							></Image>
						</div>
					</div>
				</Wrapper>
			</section>

			<section id='ask-question' className={styles['questions']}>
				<Wrapper>
					<Heading className={styles['question-title']} type='h2'>
						Подберите оптимальное решение онлайн и получите
						коммерческое предложение в течении 3 часов + скидку к
						договору 4%
					</Heading>
					<Quiz
						endQuiz={(answers) => {
							setQuizAnswers(answers);
							setQuizActive(false);
						}}
						prevAnswers={quizAnswers}
						className={classNames({ [styles.hidden]: !quizActive })}
						questions={questions}
					/>
					<div
						className={classNames(styles['questions-inner'], {
							[styles.hidden]: quizActive,
						})}
					>
						<div className={styles['question-img-wrapper']}>
							<img
								className={styles['question-img']}
								src='/mzmo-ams/contact.jpg'
								alt='фотогарция'
							></img>
						</div>
						<div className={styles['question-desc']}>
							<div
								onClick={() => {
									setQuizActive(true);
								}}
								className={styles['question-back']}
							>
								<img
									src='/mzmo-ams/arrow-forward-simple.svg'
									className={styles['question-back-icon']}
								></img>
								Вернуться к вопросам
							</div>
							<Heading
								className={styles['questions-desc-title']}
								type='h3'
							>
								Введите свои контакные данные и мы пришлем вам
								наше предложение
							</Heading>
							<ContactForm quizAnswers={quizTextAnswers} />
						</div>
					</div>
				</Wrapper>
			</section>

			<section id='about-us' className={styles['about-us']}>
				<Wrapper>
					<div className={styles['about-us-inner']}>
						<Heading className={styles['about-us-title']} type='h2'>
							Кто мы?
							<br /> И почему 9 из 10 клиентов выбирают прямого
							производителя
						</Heading>
						<p className={styles['about-us-subtitle']}></p>
						<p className={styles['about-us-info']}>
							АМС-МЗМО - Ваш партнер в создании чистой среды и
							ведущий российский разработчик, производитель
							комплексов чистых помещений и медицинского
							оборудования. Мы создаем контролируемую среду для
							здравоохранения и высокотехнологичных отраслей
							промышленности, обеспечивая чистоту воздуха и
							окружающей среды на уровне мировых стандартов
						</p>
						<div className={styles['about-us-digits']}>
							<ul className={styles['about-us-list']}>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										31+
									</span>
									ЛЕТ НА РЫНКЕ
								</li>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										450+
									</span>
									ПРОЕКТОВ
								</li>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										300+
									</span>
									ТЫС. КВ.М КЧП
								</li>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										18+
									</span>
									ТЫС. КВ.М ПРОИЗВОДСТВО
								</li>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										900+
									</span>
									НОМЕНКЛАТУРНЫЙ РЯД
								</li>
								<li className={styles['about-us-item']}>
									<span
										className={
											styles['about-us-item-title']
										}
									>
										650
									</span>
									СПЕЦИАЛИСТОВ
								</li>
							</ul>
							<Carousel
								className={styles['gallery']}
								pagesPerView={pagesPerViewSmall}
							>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/gallery-1.jpg' />
									</div>
								</Carousel.Page>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/gallery-2.jpg' />
									</div>
								</Carousel.Page>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/gallery-4.png' />
									</div>
								</Carousel.Page>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/priborostr-zavod2.jpg' />
									</div>
								</Carousel.Page>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/vivar2.jpg' />
									</div>
								</Carousel.Page>
								<Carousel.Page>
									<div className={styles['gallery-page']}>
										<Image src='/mzmo-ams/19-4.jpg' />
									</div>
								</Carousel.Page>
							</Carousel>
						</div>
						<Heading className={styles['reasons-title']} type='h2'>
							Вот почему выбор производителя, а не посредника,
							имеет огромное значение
						</Heading>
						<ul className={styles['reasons-list']}>
							<li className={styles['reasons-item']}>
								<img
									className={styles['reason-img']}
									src='/mzmo-ams/kontrol_nad_blablabla.jpg'
								></img>
								<Heading
									className={styles['reason-title']}
									type='h3'
								>
									КОНТРОЛЬ НАД КАЖДЫМ ЭТАПОМ ПРОИЗВОДСТВА
								</Heading>
								<p className={styles['reason-info']}>
									контролируем весь процесс от разработки и
									проектирования до производства, монтажа и
									ввода в эксплуатаци
								</p>
							</li>
							<li className={styles['reasons-item']}>
								<img
									className={styles['reason-img']}
									src='/mzmo-ams/individuality.jpg'
								></img>
								<Heading
									className={styles['reason-title']}
									type='h3'
								>
									ГИБКОСТЬ И ИНДИВИДУАЛЬНЫЙ ПОДХОД
								</Heading>
								<p className={styles['reason-info']}>
									можем адаптировать наши решения под
									специфические потребности каждого клиента,
									тогда как посредники часто ограничены в
									возможностях изменения стандартных решений
								</p>
							</li>
							<li className={styles['reasons-item']}>
								<img
									className={styles['reason-img']}
									src='/mzmo-ams/price.jpg'
								></img>
								<Heading
									className={styles['reason-title']}
									type='h3'
								>
									ОПТИМИЗАЦИЯ ЗАТРАТ
								</Heading>
								<p className={styles['reason-info']}>
									работая напрямую с производителем, вы
									избегаете дополнительных наценок и получаете
									лучшее соотношение цены и качества.
								</p>
							</li>
							<li className={styles['reasons-item']}>
								<img
									className={styles['reason-img']}
									src='/mzmo-ams/podderzhka.jpg'
								></img>
								<Heading
									className={styles['reason-title']}
									type='h3'
								>
									ПОДДЕРЖКА И ПОСТПРОЕКТНОЕ ОБСЛУЖИВАНИ
								</Heading>
								<p className={styles['reason-info']}>
									мы предоставляем полную техническую
									поддержку на всех этапах проекта и после его
									завершения. Наши клиенты всегда могут
									рассчитывать на оперативное решение любых
									возникающих вопросов
								</p>
							</li>
						</ul>
					</div>
				</Wrapper>
			</section>

			<section id='our-projects' className={styles['our-projects']}>
				<Wrapper>
					<div className={styles['projects-inner']}>
						<Heading className={styles['projects-title']} type='h2'>
							Реализованые проекты
						</Heading>
						<Carousel
							className={styles.carousel}
							spaceBetween={40}
							pagesPerView={pagesPerView}
						>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/6-4.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/7-4.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/8-5.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/13-4.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/priborostr-zavod2.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/vivar2.jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/19-4.jpg' />
								</div>
							</Carousel.Page>
						</Carousel>
					</div>
				</Wrapper>
			</section>

			<section id='faq' className={styles.faq}>
				<Wrapper>
					<div className={styles['faq-inner']}>
						<Heading type='h2'>Часто задаваемые вопросы:</Heading>
						<ul className={styles['faq-list']}>
							<FaqItem title='Как определяется стоимость проекта?'>
								Создание (устройство) чистого помещения,
								технически достаточно сложный процесс, поэтому
								прайсовая стоимость отсутствует. Цена 1 кв. м.
								примерно начинается от 80 000 руб. и зависит от:
								Типа строительства: новое; капремонт;
								реконструкция. Наличие проекта и его стадии:
								проект или рабочая документация. Необходимости
								прохождения государственной экспертизы (проекта
								и инженерных изысканий, сметной стоимости,
								публичный технологический и ценовой аудит).
								Наполнения инженерными системами. От класса
								чистоты: чем выше класс, тем более сложные
								системы применяются. От группы патогенности:
								проектируются микробиологические комплексы.
								Наличия и сложности технологического
								оборудования Материалов, применяемых в составе
								КЧП. При недостаточных исходных данных
								закладывается максимальная стоимость.
							</FaqItem>

							<FaqItem title='Сроки выполнения работ по проектированию чистых помещений?'>
								Сроки выполнения стандартного проекта комплекса
								чистого помещения стадии «проект» или «рабочая
								документация» 500 м.кв. составляет
								ориентировочно 1 календарный месяц.
							</FaqItem>

							<FaqItem title='Что входит в состав проекта'>
								В состав проекта входят все разделы проектной
								документации и инженерных изысканий согласно 87
								ПП РФ.
							</FaqItem>

							<FaqItem title='Осуществляете ли вы авторский надзор над строительством?'>
								Да, мы осуществляем авторский надзор. Он
								позволяет избежать ошибок при строительстве:
								выявление отклонений от проекта, принятие
								решений по внесению необходимых изменений в
								проект, а также для контроля возможных проектных
								изменений. По условиям договора или по вызову
								Заказчика для проведения авторского надзора на
								строительную площадку выезжают специалисты для
								промежуточной приемки конструкций. В "Журнале
								авторского надзора" фиксируется соответствия и
								отклонения от проектной документации.
							</FaqItem>

							<FaqItem title='Как можно сэкономить?'>
								Существенно сэкономить позволяют доставерные,
								полные и неменяющиеся исходные данные, а также
								дальнейшее последовательное выполние работы по
								проектированию: разработка документации (сначало
								графическая часть, потом спецификация), далее
								разработка сметной документации, далее
								согласование проектно-сметной документации
								Заказчиком.
							</FaqItem>
						</ul>
					</div>
				</Wrapper>
			</section>

			<div className={styles['additional-council-wrapper']}>
				<Wrapper>
					<section className={styles['additional-council']}>
						<div className={styles['additional-council-text']}>
							<Heading
								className={styles['additional-council-title']}
								type='h2'
							>
								Получите персональную консультацию + расчет
								сметы в 3-х вариантах + скидку к договору 4%
							</Heading>
							<Button
								onClick={() => {
									setConsultActive(true);
								}}
								className={styles['additional-council-btn']}
							>
								Получить!
							</Button>
						</div>
						<Image
							modal={true}
							className={styles['additional-council-img']}
							src='/mzmo-ams/model (1).jpg'
						/>
					</section>
				</Wrapper>
			</div>
		</div>
	);
}

export default HomePage;
