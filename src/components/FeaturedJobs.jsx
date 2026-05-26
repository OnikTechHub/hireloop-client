"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { 
    Briefcase,      
    Display,       
    Gear,           
    Layers,         
    ShieldCheck,    
    Thunderbolt,   
    Compass,        
    ArrowUpRight    
} from "@gravity-ui/icons";

const FeaturedJobs = () => {
    
    const jobs = [
        {
            id: "frontend-dev-1",
            role: "Frontend Developer",
            description: "Showcase your commitment to diversity and inclusion by highlighting initiatives and crafting fluid user interfaces.",
            location: "New York, USA",
            type: "Hybrid",
            salary: "€25–€40/hour",
            icon: <Display className="h-5 w-5 text-violet-400" />
        },
        {
            id: "backend-eng-2",
            role: "Backend Engineer",
            description: "Design robust distributed pipelines, manage secure database operations, and construct scalable RESTful APIs.",
            location: "Berlin, Germany",
            type: "Remote",
            salary: "€35–€55/hour",
            icon: <Thunderbolt className="h-5 w-5 text-fuchsia-400" />
        },
        {
            id: "fullstack-dev-3",
            role: "Full-Stack Developer",
            description: "Bridge the gap between frontend fluid design and backend architectures with modern Next.js ecosystems.",
            location: "London, UK",
            type: "On-site",
            salary: "€40–€60/hour",
            icon: <Layers className="h-5 w-5 text-purple-400" />
        },
        {
            id: "devops-eng-4",
            role: "DevOps Engineer",
            description: "Automate secure cloud infrastructure, manage dynamic CI/CD workflows, and monitor microservices infrastructure.",
            location: "San Francisco, USA",
            type: "Remote",
            salary: "€45–€70/hour",
            icon: <Gear className="h-5 w-5 text-emerald-400" />
        },
        {
            id: "uiux-designer-5",
            role: "UI/UX Product Designer",
            description: "Shape high-fidelity components, build complex design systems, and ensure seamless user experiences.",
            location: "Amsterdam, Netherlands",
            type: "Hybrid",
            salary: "€30–€45/hour",
            icon: <Briefcase className="h-5 w-5 text-amber-400" />
        },
        {
            id: "cyber-security-6",
            role: "Cybersecurity Analyst",
            description: "Perform structural compliance tests, secure cloud computing environments, and mitigate real-time security risks.",
            location: "Toronto, Canada",
            type: "Remote",
            salary: "€50–€75/hour",
            icon: <ShieldCheck className="h-5 w-5 text-rose-400" />
        },
    ];

    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, 
                
            },
        },
    };

    
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        },
    };

    return (
        <section className="bg-[#000000] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-violet-600/[0.03] blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center space-y-3 mb-16 sm:mb-20">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-violet-500 uppercase">
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full animate-ping" />
                        Smart Job Discovery
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight sm:leading-none">
                        The roles you'd never <br className="sm:hidden" /> find by searching
                    </h2>
                </div>

                {/* Jobs Cards Grid - Fully Responsive */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.06] bg-[#0C0C10] p-6 sm:p-8 hover:border-violet-500/30 hover:bg-[#111116] transition-colors duration-300 shadow-xl shadow-black/50"
                        >
                            
                            <div className="space-y-5">
                                
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300">
                                    {job.icon}
                                </div>

                                {/* Title */}
                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-400 transition-colors duration-300">
                                        {job.role}
                                    </h3>
                                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                                        {job.description}
                                    </p>
                                </div>

                                {/* (Location, Type, Salary) */}
                                <div className="flex flex-wrap gap-2 pt-2 text-xs sm:text-sm text-zinc-300">
                                    <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
                                        <Compass className="h-3.5 w-3.5 text-zinc-400" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full">
                                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                        {job.type}
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full font-medium text-purple-300">
                                        {job.salary}
                                    </div>
                                </div>
                            </div>


                            <div className="pt-8 mt-auto border-t border-white/[0.04] flex items-center justify-between">
                                <Link 
                                    href={`/jobs/${job.id}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    Apply Now
                                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <div className="mt-16 sm:mt-20 text-center">
                    <Link
                        href="/jobs"
                        className="inline-block bg-white text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-lg shadow-white/5"
                    >
                        View all job open
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default FeaturedJobs;