'use client';

import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-display font-bold mb-4">
                            Clinical <span className="text-orange-500">Blast</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Sydney's premier brick cleaning and caulking specialists. Professional service with 178+ 5-star reviews.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <a href="tel:0420696157" className="flex items-start gap-3 text-slate-300 hover:text-orange-500 transition-colors">
                                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>0420 696 157</span>
                            </a>
                            <a href="mailto:info@clinicalblast.com.au" className="flex items-start gap-3 text-slate-300 hover:text-orange-500 transition-colors">
                                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>info@clinicalblast.com.au</span>
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-4">Location</h4>
                        <div className="flex items-start gap-3 text-slate-300">
                            <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <address className="not-italic">
                                1233 Old Northern Rd<br />
                                Middle Dural NSW 2158<br />
                                Australia
                            </address>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-4">Business Hours</h4>
                        <div className="flex items-start gap-3 text-slate-300">
                            <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <div className="space-y-1 text-sm">
                                <p>Monday - Wednesday: 7:00am - 6:30pm</p>
                                <p>Thursday: 7:00am - 9:30pm</p>
                                <p>Friday: 7:00am - 6:30pm</p>
                                <p className="text-slate-500">Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Links */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <h4 className="text-sm font-semibold text-slate-400 mb-4">Service Areas</h4>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Brick Cleaning Middle Dural</a>
                        <span className="text-slate-700">|</span>
                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Caulking Sydney</a>
                        <span className="text-slate-700">|</span>
                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Pressure Cleaning Sydney</a>
                        <span className="text-slate-700">|</span>
                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Brick Restoration NSW</a>
                        <span className="text-slate-700">|</span>
                        <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors">Paint Removal Sydney</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Clinical Blast. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
