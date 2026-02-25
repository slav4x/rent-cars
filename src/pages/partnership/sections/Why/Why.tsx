'use client';

import styles from './Why.module.sass';

const items = [
	{
		title: 'стабильный заработок',
		text: 'Дополнительный заработок составит от 150 000 до 500 000 рублей в месяц. Выплата дивидендов: раз в две недели или раз в месяц'
	},
	{
		title: 'все берем на себя',
		text: 'Берем на себя решение таких вопросов, как выплата штрафов и компенсация повреждений'
	},
	{
		title: 'выгодные условия',
		text: 'Переписать'
	},
	{
		title: 'быстрое оформление',
		text: 'Для оформления необходимы два документа — паспорт, свидетельство о регистрации автомобиля'
	},
	{
		title: 'полный контроль',
		text: 'Вы можете осуществлять GPS — мониторинг за своим автомобилем'
	},
	{
		title: 'никаких рисков',
		text: 'Каско + ОСАГО без ограничений. Объект инвестиций — автомобиль — находится в вашей собственности'
	}
];

export default function Why() {
	return (
		<section className={styles.why}>
			<div className="container">
				<h2 className="title">почему именно мы?</h2>
				<div className={styles.grid}>
					{items.map((item) => {
						return (
							<div className={styles.item} key={item.title}>
								<div className={styles.title}>{item.title}</div>
								<div className={styles.text}>{item.text}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
