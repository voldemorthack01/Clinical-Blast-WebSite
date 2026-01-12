'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-lg py-3'
                    : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-800">
                        Clinical <span className="text-orange-600">Blast</span>
                    </h1>
                </div>

                <a
                    href="tel:0420696157"
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    <Phone className="w-5 h-5" />
                    <span className="hidden sm:inline">Call</span>
                    <span className="font-display">0420 696 157</span>
                </a>
            </div>
        </motion.header>
    );
}
