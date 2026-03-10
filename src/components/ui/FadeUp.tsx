"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "motion/react";

type FadeUpProps = HTMLMotionProps<"div"> & {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
};

const FadeUp = forwardRef<HTMLDivElement, FadeUpProps>(function FadeUp(
    { children, delay = 0, duration = 0.6, y = 32, ...props },
    ref,
) {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, delay, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
});

export default FadeUp;
