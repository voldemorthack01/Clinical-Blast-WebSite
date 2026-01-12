'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        text: "The Clinical blast team did a great job... Every thing from the quotation to the test patches... well organised.",
        author: "Michael Davis",
        rating: 5,
    },
    {
        text: "My bricks look brand new, and the service was completed in a timely manner.",
        author: "Satisfied Customer",
        rating: 5,
    },
    {
        text: "He offered to clean a small area to show quality of work.",
        author: "Happy Homeowner",
        rating: 5,
    },
    {
        text: "I came to realize for what they do its amazing I'm not calling another brick washer again.",
        author: "Iris Yu",
        rating: 5,
    },
    {
        text: "Elard and his team... Prompt response and very competitive price.",
        author: "Akalya Mahendran",
        rating: 5,
    },
    {
        text: "He's honest, Reliable and Trustworthy.",
        author: "Pramod Karki",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Wall of <span className="text-orange-500">Love</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
                        >
                            <Quote className="w-10 h-10 text-orange-500 mb-4 opacity-50" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                ))}
                            </div>

                            <p className="text-slate-200 mb-6 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            <div className="border-t border-white/10 pt-4">
                                <p className="font-semibold text-white">{review.author}</p>
                                <p className="text-sm text-slate-400">Google Review</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://maps.app.goo.gl/UN9WjypDSqbYzpEJA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                        Read All 178+ Reviews on Google
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
