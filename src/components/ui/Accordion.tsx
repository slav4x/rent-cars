'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.sass';
import { cn } from '@/lib/utils/cn';

export type AccordionItem = {
	id: string;
	title: string;
	text: string;
};

type Props = {
	items: AccordionItem[];
	allowMultiple?: boolean; // если false — открывается только один
	defaultOpenId?: string;
};

export default function Accordion({ items, allowMultiple = false, defaultOpenId }: Props) {
	const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(defaultOpenId ? [defaultOpenId] : []));

	function toggle(id: string) {
		setOpenIds((prev) => {
			const next = new Set(prev);

			const isOpen = next.has(id);

			if (!allowMultiple) {
				next.clear();
				if (!isOpen) next.add(id);
				return next;
			}

			if (isOpen) next.delete(id);
			else next.add(id);

			return next;
		});
	}

	return (
		<div className={styles.list}>
			{items.map((item) => (
				<AccordionRow key={item.id} item={item} isOpen={openIds.has(item.id)} onToggle={() => toggle(item.id)} />
			))}
		</div>
	);
}

function AccordionRow({ item, isOpen, onToggle }: { item: AccordionItem; isOpen: boolean; onToggle: () => void }) {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [maxHeight, setMaxHeight] = useState('0px');

	// пересчитываем высоту при открытии/закрытии + при смене текста (язык)
	useEffect(() => {
		const el = wrapperRef.current;
		if (!el) return;

		if (isOpen) {
			// ставим реальную высоту
			setMaxHeight(`${el.scrollHeight}px`);
		} else {
			// закрываем
			setMaxHeight('0px');
		}
	}, [isOpen, item.text]);

	// если контент может менять высоту после рендера (шрифты/картинки)
	useEffect(() => {
		if (!isOpen) return;
		const el = wrapperRef.current;
		if (!el) return;

		const ro = new ResizeObserver(() => {
			setMaxHeight(`${el.scrollHeight}px`);
		});

		ro.observe(el);
		return () => ro.disconnect();
	}, [isOpen]);

	return (
		<div className={styles.item}>
			<div className={styles.itemHead} onClick={onToggle}>
				<div className={styles.itemTitle}>{item.title}</div>
				<span className={cn(styles.itemIcon, isOpen && styles.itemIconOpen)} aria-hidden />
			</div>

			<div ref={wrapperRef} className={styles.itemWrapper} style={{ maxHeight }}>
				<div className={styles.itemText}>{item.text}</div>
			</div>
		</div>
	);
}
