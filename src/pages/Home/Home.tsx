import { NavLink } from 'react-router-dom';
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

const images = [
	'/mzmo-ams/model (1).jpg',
	'/mzmo-ams/model (2).jpg',
	'/mzmo-ams/model (4).jpg',
];

function HomePage() {
	const [pagesPerView, setPagesPerView] = useState(3);

	const handleResize = () => {
		if (window.innerWidth < 1440) {
			setPagesPerView(2);
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
				<Heading id='uos-ams' className={styles.title} type='h1'>
					Установка для обеззараживания сточных вод УОС-АМС
				</Heading>
				<p className={styles['subtitle']}>
					100% безопастность для персонала и окружающей среды
				</p>
				<section className={styles.preview}>
					<ul className={styles['preview-images']}>
						{images.map((el) => (
							<img
								className={styles['preview-image']}
								src={el}
							></img>
						))}
					</ul>
					<div className={styles['preview-card']}>
						<HashLink
							scroll={customScroll}
							smooth
							to={'#description'}
						>
							<Button size='large'>Как это работает</Button>
						</HashLink>
						<div className={styles['preview-text']}>
							получить КП
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
						img='/mzmo-ams/Рисунок1.svg'
						description='Диагностические лаборатории, в которых исследуют объекты биотической и абиотической природы, где идентифицируют возбудителей заболеваний, антигены и антитела'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок2.svg'
						description='ПЦР-лаборатории'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок3.svg'
						description='Экспериментальные лаборатории, в которых изучают микроорганизмы, гельминты, токсины и биологические яды.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок4.svg'
						description='Ветеринарные учреждения, виварии.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок9.svg'
						description='Инфекционные больницы и отделения.'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок6.svg'
						description='Исследовательские центры и производства, занимающиеся
вирусологией, бактериологией, эпидемиологией, биотехнологией, генной инженерией, производством вакцин и сывороток.'
					></UsageItem>
				</ul>
				<Heading className={styles['usage-title']} type='h3'>
					Целевая аудитория
				</Heading>
				<ul className={styles['ways']}>
					<UsageItem
						img='/mzmo-ams/Рисунок7.svg'
						description='Описание направления'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок8.svg'
						description='Описание направления'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок11.svg'
						description='Описание направления'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок15.svg'
						description='Описание направления'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок17.svg'
						description='Описание направления'
					></UsageItem>
					<UsageItem
						img='/mzmo-ams/Рисунок12.svg'
						description='Описание направления очень много текста что-то должно быть, прям много вот'
					></UsageItem>
				</ul>
			</section>
			<section id='description' className={styles['how-it-works']}>
				<Wrapper>
					<div className={styles['how-it-works-container']}>
						<img src='/mzmo-ams/draft.png'></img>
						<div className={styles['works-info']}>
							<Heading
								className={styles['works-title']}
								type='h2'
							>
								Что такое УОС-АМС и как это работает
							</Heading>
							<p className={styles['works-desc']}>
								Краткое описание системы
							</p>
							<Heading
								className={styles['advantages-title']}
								type='h3'
							>
								Преимущества
							</Heading>
							<ul className={styles.advantages}>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Очень крутое преимущество
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Очень крутое преимущество
									</p>
								</li>
								<li className={styles['advantages-item']}>
									<img
										className={styles['advantage-icon']}
										alt='Иконка плюса'
										src='/mzmo-ams/plus-green.svg'
									></img>
									<p className={styles['advantage-text']}>
										Очень крутое преимущество
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
								<img
									className={styles['requirements-icon']}
									src='/mzmo-ams/checklist.svg'
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
									П 2.1.3678-20 «Санитарно-эпидемиологические
									требования к эксплуатации помещений...»
								</p>
							</li>
							<li className={styles['requirements-item']}>
								<img
									className={styles['requirements-icon']}
									src='/mzmo-ams/checklist.svg'
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
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
								</p>
							</li>
							<li className={styles['requirements-item']}>
								<img
									className={styles['requirements-icon']}
									src='/mzmo-ams/checklist.svg'
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
									СанПиН 3.3686-21
									«Санитарно-эпидемиологические требования по
									профилактике инфекционных болезней»
								</p>
							</li>
							<li className={styles['requirements-item']}>
								<img
									className={styles['requirements-icon']}
									src='/mzmo-ams/checklist.svg'
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
									п. 206. По окончании работы все объекты,
									содержащие ПБА, убирают в хранилища
									(холодильники, термостаты, шкафы и другие,
									которые опечатываются); проводят текущую
									дезинфекцию рабочих поверхностей и
									используемого оборудования. Не допускается
									слив необеззараженных жидкостей в
									канализационную сеть и вынос из «заразной»
									зоны необеззараженных отходов
								</p>
							</li>
						</ul>

						<ul className={styles['requirements-list']}>
							<li className={styles['requirements-item']}>
								<img
									src='/mzmo-ams/checklist.svg'
									alt='Иконка '
									className={styles['requirements-icon']}
								></img>
								<p className={styles['requirements-text']}>
									п. 342. К лабораториям, осуществляющим
									работы с ПБА II группы, предъявляются
									следующие санитарно-эпидемиологические
									требования.
								</p>
							</li>
							<li className={styles['requirements-item']}>
								<img
									src='/mzmo-ams/checklist.svg'
									className={styles['requirements-icon']}
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
									подпункт 17. Запрещается слив (сток)
									необеззараженных жидкостей в канализационную
									сеть. Во вновь строящихся и реконструируемых
									организациях или их подразделениях
									проектирование и функционирование системы
									специальной канализации, сбора и
									обеззараживания стоков из «заразной» зоны
									осуществляется в соответствии с
								</p>
							</li>
							<li className={styles['requirements-item']}>
								<img
									src='/mzmo-ams/checklist.svg'
									className={styles['requirements-icon']}
									alt='Иконка '
								></img>
								<p className={styles['requirements-text']}>
									41. Систему обработки сточных вод составляет
									комплекс оборудования, обеспечивающий сбор,
									обезвреживание, охлаждение при термическом
									обеззараживании и сброс сточных вод в
									наружные сети канализации. По принципу
									работы системы тепловой обработки сточных
									вод подразделяются на циклические и
									непрерывной обработки.
								</p>
							</li>
						</ul>
					</div>
				</Wrapper>
			</section>

			<section id='ask-queastion' className={styles['questions']}>
				<Heading></Heading>
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
						<ul className={styles['about-us-list']}>
							<li className={styles['about-us-item']}>
								преимущество 1
							</li>
							<li className={styles['about-us-item']}>
								преимущество 2
							</li>
							<li className={styles['about-us-item']}>
								преимущество 3
							</li>
							<li className={styles['about-us-item']}>
								преимущество 4
							</li>
							<li className={styles['about-us-item']}>
								преимущество 5
							</li>
							<li className={styles['about-us-item']}>
								преимущество 6
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
									<img src='/mzmo-ams/model (1).jpg'></img>
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<img src='/mzmo-ams/model (2).jpg'></img>
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<img src='/mzmo-ams/model (4).jpg'></img>
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<img src='/mzmo-ams/model (6).jpg'></img>
								</div>
							</Carousel.Page>
							<Carousel.Page>
								<div className={styles['carousel-page']}>
									<img src='/mzmo-ams/model (7).jpg'></img>
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
							<FaqItem
								title='Как то то то то?'
								text='А вот так вот'
							/>
							<FaqItem
								title='Как то то то то?'
								text='А вот так вот'
							/>
						</ul>
					</div>
				</Wrapper>
			</section>

			<section className={styles['in-touch']}>
				<div className={styles['in-touch-text']}>
					<Heading type='h2'>Stay in touch with us</Heading>
					<p
						className={classNames(
							styles['in-touch-info'],
							styles['place-info']
						)}
					>
						Vesterborg, Denmark
					</p>
					<p className={styles['in-touch-info']}>+123 456 789 000</p>
					<p className={styles['in-touch-info']}>
						info@theglasshuts.com
					</p>

					<ul className={styles.socials}>
						<a href=''>
							<Button size='small'>
								<img src='/glass-huts/instagram.svg'></img>
							</Button>
						</a>

						<a href=''>
							<Button size='small'>
								<img src='/glass-huts/Facebook.svg'></img>
							</Button>
						</a>

						<a href=''>
							<Button size='small'>
								<img src='/glass-huts/X.svg'></img>
							</Button>
						</a>
					</ul>
				</div>
				<div className={styles['in-touch-card']}>
					<img src='/glass-huts/observer.jpg'></img>
					<div className={styles['preview-card']}>
						<NavLink to={'/booking'}>
							<Button size='large'>Book Now</Button>
						</NavLink>
						<div className={styles['preview-prize']}>
							<span className={styles['preview-prize-left']}>
								from
							</span>
							Є3.200
							<span className={styles['preview-prize-right']}>
								per night
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
