'use client';

import { motion } from 'framer-motion';
import { Star, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge - PROMINENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full mb-8 shadow-2xl"
                    >
                        <Award className="w-6 h-6" />
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-white" />
                            ))}
                        </div>
                        <span className="font-bold text-lg">5.0 Stars</span>
                        <span className="opacity-90">|</span>
                        <span className="font-semibold">178+ Google Reviews</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance leading-tight"
                    >
                        Sydney's <span className="text-orange-500">#1 Rated</span>
                        <br />
                        Brick Cleaning & Caulking Specialists
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto text-balance"
                    >
                        Restoring homes across Middle Dural and Sydney. Acid washing, pressure cleaning, and precision caulking.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Get a Free Quote & Test Patch
                            <CheckCircle className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </a>

                        <a
                            href="tel:0420696157"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
                        >
                            Call 0420 696 157
                        </a>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                    >
                        {[
                            { title: 'Free Test Patches', desc: 'See the quality before you commit' },
                            { title: 'Fully Insured', desc: 'Professional service you can trust' },
                            { title: 'Same-Day Quotes', desc: 'Fast response, competitive pricing' },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-display font-semibold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
