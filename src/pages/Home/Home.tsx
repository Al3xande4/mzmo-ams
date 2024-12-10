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

function HomePage() {
	const [pagesPerView, setPagesPerView] = useState(3);

	const handleResize = () => {
		if (window.innerWidth < 900) {
			setPagesPerView(1);
			return;
		}
		if (window.innerWidth < 1440) {
			setPagesPerView(2);
			return;
		}
		if (window.innerWidth > 1440) {
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
						<div className={styles['preview-actions']}>
							<HashLink
								scroll={customScroll}
								smooth
								to={'#description'}
							>
								<Button
									className={styles['preview-left-btn']}
									size='large'
								>
									Как это работает
								</Button>
							</HashLink>
							<HashLink
								scroll={customScroll}
								smooth
								to={'#ask-question'}
								className={styles['preview-text']}
							>
								получить КП
							</HashLink>
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
			<section id='usage' className={styles['usage-section']}>
				<Heading type='h2' hidden>
					Для кого разработана и целевая аудитория
				</Heading>

				<Heading className={styles['usage-title']} type='h3'>
					Направления применения
				</Heading>
				<ul className={styles['ways']}>
					<UsageItem
						img='/mzmo-ams/Рисунок8.svg'
						description='Диагностические, ПЦР, экспериментальные, зоолого-энтомологические лаборатории'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок15.svg'
						description='Лаборатории по производству иммунобиологических лекарств'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/vet.svg'
						description='Ветеринарные учреждения.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/hospital.svg'
						description='Инфекционные больницы и больничные отделения'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок9.svg'
						description='Пищевая промышленность'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/morgue.svg'
						description='Патологоанатомические учреждения по вскрытию трупов
людей и животных.'
					></UsageItem>
				</ul>
				<Heading className={styles['usage-title']} type='h3'>
					Целевая аудитория
				</Heading>
				<ul className={styles['ways']}>
					<UsageItem
						img='/mzmo-ams/Рисунок7.svg'
						description='Исследовательские центры и производства, занимающиеся
вирусологией, бактериологией, эпидемиологией, биотехнологией, генной инженерией, производством вакцин и сывороток.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок6.svg'
						description='Микробиологические лаборатории контроля качества продуктов'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок11.svg'
						description='Диагностические лаборатории, в которых исследуют объекты биотической и абиотической природы, где идентифицируют возбудителей заболеваний, антигены и антитела.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/lab-worker.svg'
						description='Лаборатории по производству иммунобиологических
лекарств с применением микроорганизмов и продуктов,
полученных в результате микробиологического синтеза.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок17.svg'
						description='Полностью автоматизированный процесс - условие максимальной уверенности, защиты персонала и окружающей
среды.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/flask.svg'
						description='Лаборатории с уровнем опасности BSL2-3-4'
					></UsageItem>
				</ul>
			</section>
			<section id='description' className={styles['how-it-works']}>
				<Wrapper>
					<div className={styles['how-it-works-container']}>
						<Image
							modal={true}
							className={styles['how-it-works-img']}
							src='/mzmo-ams/draft.png'
						/>
						<div className={styles['works-info']}>
							<Heading
								className={styles['works-title']}
								type='h2'
							>
								Что такое УОС-АМС и как это работает
							</Heading>
							<p className={styles['works-desc']}>
								УОС-АМС - это автоматизированная установка для
								непрерывного термического обеззараживания
								сточных вод, содержащих биологические агенты
								I-IV групп патогенности. Установка работает по
								принципу непрерывного протока, обеспечивая 100%
								уничтожение патогенных микроорганизмов и полное
								соответствие нормативным требованиям
							</p>
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
										предотвращая штрафы и санкции.
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
										пациентов и окружающую среду.
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
										мониторинга параметров.
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
										на 30% ниже зарубежных аналогов.
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
										Эксплуатационный срок службы 8 лет.
									</p>
								</li>
							</ul>
						</div>
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
							Обязательные требования к системам обеззараживания
							сточных вод
						</Heading>
						<ul className={styles['requirements-list']}>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									П 2.1.3678-20 «Санитарно-эпидемиологические
									требования к эксплуатации помещений...»
									'
								/>
							</li>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									п. 4.4.3 Очистка и обеззараживание сточных
									вод от медицинских организаций должна
									осуществляться на общегородских или других
									канализационных очистных сооружениях,
									гарантирующих эффективную очистку и
									обеззараживание сточных вод. При отсутствии
									очистных сооружений сточные воды медицинских
									организаций должны подвергаться полной
									биологической очистке и обеззараживанию на
									локальных сооружениях.
									'
								/>
							</li>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									СанПиН 3.3686-21
									«Санитарно-эпидемиологические требования по
									профилактике инфекционных болезней»
									'
								/>
							</li>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									п. 206. По окончании работы все объекты,
									содержащие ПБА, убирают в хранилища
									(холодильники, термостаты, шкафы и другие,
									которые опечатываются); проводят текущую
									дезинфекцию рабочих поверхностей и
									используемого оборудования. Не допускается
									слив необеззараженных жидкостей в
									канализационную сеть и вынос из «заразной»
									зоны необеззараженных отходов
									'
								/>
							</li>
						</ul>

						<ul className={styles['requirements-list']}>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									п. 342. К лабораториям, осуществляющим
									работы с ПБА II группы, предъявляются
									следующие санитарно-эпидемиологические
									требования.
									'
								/>
							</li>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									подпункт 17. Запрещается слив (сток)
									необеззараженных жидкостей в канализационную
									сеть. Во вновь строящихся и реконструируемых
									организациях или их подразделениях
									проектирование и функционирование системы
									специальной канализации, сбора и
									обеззараживания стоков из «заразной» зоны
									осуществляется в соответствии с
									'
								/>
							</li>
							<li className={styles['requirements-item']}>
								<UsageItem
									img={'/mzmo-ams/checklist.svg'}
									description='
									41. Систему обработки сточных вод составляет
									комплекс оборудования, обеспечивающий сбор,
									обезвреживание, охлаждение при термическом
									обеззараживании и сброс сточных вод в
									наружные сети канализации. По принципу
									работы системы тепловой обработки сточных
									вод подразделяются на циклические и
									непрерывной обработки.
									'
								/>
							</li>
						</ul>
						<Button className={styles['check-list-btn']}>
							Скачать чек лист
						</Button>
					</div>
				</Wrapper>
			</section>

			<section id='ask-question' className={styles['questions']}>
				<Wrapper>
					<div className={styles['questions-inner']}>
						<div className={styles['question-img-wrapper']}>
							<img
								className={styles['question-img']}
								src='/mzmo-ams/contact.jpg'
								alt='фотогарция'
							></img>
						</div>
						<div className={styles['question-desc']}>
							<Heading
								className={styles['question-title']}
								type='h2'
							>
								Подберите оптимальное решение онлайн и
								получистее коммерческое предложение в течении 3
								часов + скидку к договору 4%
							</Heading>

							<ContactForm />
						</div>
					</div>
				</Wrapper>
			</section>

			<section id='about-us' className={styles['about-us']}>
				<Wrapper>
					<div className={styles['about-us-inner']}>
						<Heading className={styles['about-us-title']} type='h2'>
							Кто мы?
						</Heading>
						<p className={styles['about-us-subtitle']}>
							И почему 9 из 10 клиентов выбирают прямого
							производителя
						</p>
						<p className={styles['about-us-info']}>
							АМС-МЗМО - Ваш партнер в создании чистой среды и
							ведущий российский разработчик, производитель
							комплексов чистых помещений и медицинского
							оборудования. Мы создаем контролируемую среду для
							здравоохранения и высокотехнологичных отраслей
							промышленности, обеспечивая чистоту воздуха и
							окружающей среды на уровне мировых стандартов
						</p>
						<ul className={styles['about-us-list']}>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									31+
								</span>
								ЛЕТ НА РЫНКЕ
							</li>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									450+
								</span>
								ПРОЕКТОВ
							</li>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									300+
								</span>
								ТЫС. КВ.М КЧП
							</li>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									18+
								</span>
								ТЫС. КВ.М ПРОИЗВОДСТВО
							</li>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									900+
								</span>
								НОМЕНКЛАТУРНЫЙ РЯД
							</li>
							<li className={styles['about-us-item']}>
								<span className={styles['about-us-item-title']}>
									650
								</span>
								НОМЕНКЛАТУРНЫЙ РЯД
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
									<Image src='/mzmo-ams/model (1).jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/model (2).jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/model (4).jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/model (6).jpg' />
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<Image src='/mzmo-ams/model (7).jpg' />
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
						</ul>
					</div>
				</Wrapper>
			</section>

			<section className={styles['additional-council']}>
				<Heading
					className={styles['additional-council-title']}
					type='h2'
				>
					Получите персональную консультацию + расчет сметы в 3-х
					вариантах + скидку к договору 4%
				</Heading>
				<Image
					modal={true}
					className={styles['additional-council-img']}
					src='/mzmo-ams/model (1).jpg'
				/>
				<Button className={styles['additional-council-btn']}>
					Получить!
				</Button>
			</section>
		</div>
	);
}

export default HomePage;
