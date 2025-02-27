import React, { useEffect, useState } from 'react';
import './cursor.scss';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <motion.div
            className="cursor"
            animate={{ x: position.x, y: position.y }}
        ></motion.div>
    );
};

export default Cursor;
