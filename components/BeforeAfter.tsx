'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfter() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging && e.type !== 'click') return;

        // Prevent scrolling on mobile while dragging
        if ('touches' in e && e.cancelable) {
            e.preventDefault();
        }

        const container = e.currentTarget.getBoundingClientRect();
        let clientX: number;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }

        const x = clientX - container.left;
        const percentage = (x / container.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        See the <span className="text-orange-600">Difference</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Drag the slider to see the transformation
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div
                        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none touch-none"
                        onMouseMove={handleMove}
                        onTouchMove={handleMove}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onTouchStart={() => setIsDragging(true)}
                        onTouchEnd={() => setIsDragging(false)}
                        onClick={handleMove}
                    >
                        {/* Before Image (Right Side) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-white text-2xl font-display font-bold mb-2">BEFORE</p>
                                <p className="text-white/80">Dirty, stained brickwork</p>
                            </div>
                        </div>

                        {/* After Image (Left Side) */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <div className="text-center">
                                <p className="text-slate-900 text-2xl font-display font-bold mb-2">AFTER</p>
                                <p className="text-slate-700">Clean, restored brickwork</p>
                            </div>
                        </div>

                        {/* Slider Line */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            {/* Slider Handle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-orange-500">
                                <ChevronLeft className="w-4 h-4 text-orange-600 absolute left-1" />
                                <ChevronRight className="w-4 h-4 text-orange-600 absolute right-1" />
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-slate-500 mt-6 text-sm">
                        * Placeholder images - actual before/after photos showcase dramatic transformations
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
