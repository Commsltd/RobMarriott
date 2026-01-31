import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TransitionWrapperProps {
    children: ReactNode;
}

export const TransitionWrapper = ({ children }: TransitionWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out-quart
        >
            {children}
        </motion.div>
    );
};
