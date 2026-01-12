'use client';

import { motion } from 'framer-motion';
import { Droplets, Paintbrush, Wind, Wrench } from 'lucide-react';

const services = [
    {
        icon: Droplets,
        title: 'Brick Cleaning',
        description: 'Acid wash and pressure clean to remove mortar tags and grime.',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Wrench,
        title: 'Caulking',
        description: 'Precision sealing for windows, expansion joints, and bathrooms.',
        color: 'from-orange-500 to-red-500',
    },
    {
        icon: Paintbrush,
        title: 'Paint Removal',
        description: 'Restoring brickwork from vandalism or spills.',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: Wind,
        title: 'High Pressure Cleaning',
        description: 'Driveways, pathways, and pavers.',
        color: 'from-green-500 to-emerald-500',
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Professional brick restoration and cleaning services across Sydney
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-orange-300"
                            >
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
