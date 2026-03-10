"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function TransitionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AnimatePresence mode="sync" initial={false}>
            <motion.div>{children}</motion.div>
        </AnimatePresence>
    );
}
