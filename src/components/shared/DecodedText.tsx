import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DecodedTextProps {
    text: string;
    className?: string;
    revealSpeed?: number; // ms per character
    delay?: number; // ms delay before starting
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

const DecodedText: React.FC<DecodedTextProps> = ({
    text,
    className = "",
    revealSpeed = 50,
    delay = 0
}) => {
    const [display, setDisplay] = useState(text);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        if (!trigger) return;

        let timer: NodeJS.Timeout;
        let startTimer: NodeJS.Timeout;

        const startAnimation = () => {
            // Immediately scrambled
            setDisplay(text.split('').map(() => characters[Math.floor(Math.random() * characters.length)]).join(''));

            let iteration = 0;


            const interval = 1000 / Math.max(1, text.length);

            timer = setInterval(() => {
                setDisplay(prev => {
                    return text.split('').map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    }).join('');
                });

                if (iteration >= text.length) {
                    clearInterval(timer);
                    setDisplay(text);
                }

                iteration += 1;
            }, interval);
        };

        startTimer = setTimeout(startAnimation, delay);

        return () => {
            clearInterval(timer);
            clearTimeout(startTimer);
        };
    }, [text, revealSpeed, delay, trigger]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setTrigger(true)}
        >
            {display}
        </motion.span>
    );
};

export default DecodedText;
