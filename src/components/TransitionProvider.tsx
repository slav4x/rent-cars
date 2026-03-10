'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence mode="sync" initial={false}>
			<motion.div>{children}</motion.div>
		</AnimatePresence>
	);
}
