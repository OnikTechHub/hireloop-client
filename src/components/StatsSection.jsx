"use client";

import {
    Briefcase,
    Factory,
    Magnifier,
    Star,
} from "@gravity-ui/icons";
import { motion } from "motion/react";

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6" />,
            value: "50K",
            label: "Active Jobs",
        },
        {
            id: 2,
            icon: <Factory className="h-5 w-5 md:h-6 md:w-6" />,
            value: "12K",
            label: "Companies",
        },
        {
            id: 3,
            icon: <Magnifier className="h-5 w-5 md:h-6 md:w-6" />,
            value: "2M",
            label: "Job Seekers",
        },
        {
            id: 4,
            icon: <Star className="h-5 w-5 md:h-6 md:w-6" />,
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];

    // ফ্রেমার মোশনের জন্য কার্ড অ্যানিমেশন ভ্যারিয়েন্ট
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // একটি কার্ডের পর আরেকটি কার্ড চমৎকার সিরিয়ালে আসবে
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-28 text-white">
            {/* Background Globe - জুম-ইন অ্যানিমেশনসহ */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

            {/* Glowing Aura Effect */}
            <div className="absolute left-1/2 top-[20%] sm:top-[25%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[90px] sm:blur-[140px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Heading & Tags Section */}
                <div className="mx-auto max-w-3xl text-center space-y-5">
                    {/* হেডিং অ্যানিমেশন */}
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug sm:leading-relaxed text-white/95"
                    >
                        Assisting over 15,000 job seekers
                        <br className="hidden sm:block" /> find their dream positions.
                    </motion.h2>
                    
                    {/* Tags Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-4 text-xs sm:text-sm font-medium pt-1"
                    >
                        <motion.p 
                            animate={{ rotate: -4 }}
                            whileHover={{ scale: 1.08, rotate: -2, transition: { duration: 0.2 } }}
                            className="cursor-default select-none bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-violet-400 shadow-sm shadow-violet-500/5"
                        >
                            Remote Jobs
                        </motion.p>
                        <motion.p 
                            animate={{ rotate: 4 }}
                            whileHover={{ scale: 1.08, rotate: 2, transition: { duration: 0.2 } }}
                            className="cursor-default select-none bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-fuchsia-400 shadow-sm shadow-fuchsia-500/5"
                        >
                            On-site Jobs
                        </motion.p>
                    </motion.div>
                </div>

                {/* Stats Cards Grid - Staggered Children Animation */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-14 sm:mt-18 lg:mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -8, 
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-colors duration-300 hover:border-violet-500/40 hover:bg-white/[0.04]"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute bottom-0 right-0 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-white/5 blur-2xl transition duration-300 group-hover:bg-violet-500/15" />

                            {/* Icon Box - হোভার করলে মৃদু রোটেশন হবে */}
                            <motion.div 
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-violet-400 transition-colors duration-300 group-hover:text-fuchsia-400 group-hover:border-violet-500/30"
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Value / Number */}
                            <h3 className="relative z-10 mt-6 sm:mt-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-violet-200 transition-all duration-300">
                                {stat.value}
                            </h3>

                            {/* Label */}
                            <p className="relative z-10 mt-2 sm:mt-4 text-sm sm:text-base text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}