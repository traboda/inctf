import React from 'react';
import { motion } from 'framer-motion';
import animations from '../../animation';

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = "", delay = 0 }) => {
    // Split text into characters
    const characters = text.split("");

    return (
        <motion.span
            className={className}
            initial="hiddenDecoding"
            whileInView="decoding"
            viewport={{ once: true }}
            variants={{
                ...animations,
                decoding: {
                    ...animations.decoding,
                    transition: {
                        ...animations.decoding.transition,
                        delayChildren: delay
                    }
                }
            }}
        >
            {characters.map((char, index) => (
                <motion.span key={index} variants={{
                    hiddenDecoding: animations.hiddenChar,
                    decoding: animations.charReveal
                }}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TypewriterText;
