import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { Heading } from '../../../components/ui/Heading/Heading';
import Button from '../../../components/ui/Button/Button';
import { Wrapper } from '../../../components/ui/Wrapper/Wrapper';

export function Footer({ className, ...props }: FooterProps) {
	return (
		<footer className={cn(className, styles.footer)}>
			<Wrapper>
				<div className={styles['footer-inner']}>
					<div className={styles['info']}>
						<img
							className={styles['logo']}
							alt='Логотип компании'
							src='/mzmo-ams/МЗМО.svg'
						></img>
						<p className={styles['info-additional']}>
							© ООО «МЗМО», 2002-2022
							<br />
							<a
								className={styles['info-link']}
								href='https://www.laminar.ru/#'
								target='_blank'
							>
								Политика конфидециальности
							</a>
						</p>
					</div>
					<div className={styles['contacts']}>
						<Heading className={styles['footer-title']} type='h3'>
							Наши контакты
						</Heading>
						<p className={styles['contact-info']}>
							Номер телефона:{' '}
							<span className={styles['contact-info-bold']}>
								+88002018204
							</span>
						</p>
						<p className={styles['contact-info']}>
							Email:{' '}
							<span className={styles['contact-info-bold']}>
								laminar@laminar.ru
							</span>
						</p>
					</div>

					<div className={styles['socials-block']}>
						<ul className={styles.socials}>
							<a href=''>
								<Button size='small'>
									<img src='/mzmo-ams/vk.svg'></img>
								</Button>
							</a>

							<a href=''>
								<Button size='small'>
									<img src='https://static.rutube.ru/static/img/favicon-icons/v3/favicon.ico'></img>
								</Button>
							</a>
						</ul>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
}