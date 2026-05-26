"use client";

import { motion } from "framer-motion";
import { 
    LuSearch,            // Smart Search
    LuTrendingUp,        // Salary Insights
    LuBuilding2,         // Top Companies
    LuBookmark,          // Saved Jobs
    LuMousePointerClick, // One-Click Apply
    LuFileText,          // Resume Builder
    LuCpu,               // Skill-Based Matching
    LuArrowUpRight       // Career Growth Resources
} from "react-icons/lu";

const FeaturesSection = () => {
    
    const features = [
        {
            id: 1,
            title: "Smart Search",
            description: "Find your ideal job with advanced filters.",
            icon: <LuSearch className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 2,
            title: "Salary Insights",
            description: "Get real salary data to negotiate confidently.",
            icon: <LuTrendingUp className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 3,
            title: "Top Companies",
            description: "Apply to vetted companies that are hiring.",
            icon: <LuBuilding2 className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 4,
            title: "Saved Jobs",
            description: "Manage apps & favorites on your dashboard.",
            icon: <LuBookmark className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 5,
            title: "One-Click Apply",
            description: "Simplify your job applications for an easier process!",
            icon: <LuMousePointerClick className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 6,
            title: "Resume Builder",
            description: "Create professional resumes with modern templates.",
            icon: <LuFileText className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 7,
            title: "Skill-Based Matching",
            description: "Discover jobs that match your skills and experience.",
            icon: <LuCpu className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        },
        {
            id: 8,
            title: "Career Growth Resources",
            description: "Boost your career with quick interview tips.",
            icon: <LuArrowUpRight className="h-5 w-5 text-zinc-300 group-hover:text-violet-400 transition-colors duration-300" />
        }
    ];

    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        /* w-full এবং block দিয়ে ব্যাকগ্রাউন্ড কালারটি স্ক্রিনের বাম ও ডান পাশের শেষ বর্ডার পর্যন্ত পাঠিয়ে দেওয়া হলো */
        <section className="w-full bg-[#141416] text-white py-20 sm:py-28 px-6 sm:px-12 lg:px-16 relative overflow-hidden block">
            
            {/* সফট ব্যাকগ্রাউন্ড পার্পল গ্লো */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-violet-600/[0.02] blur-[140px] pointer-events-none" />

            {/* max-w-6xl ব্যবহার করে কন্টেন্টগুলোকে একদম মাঝখানে এলাইন করা হয়েছে */}
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                
                {/* Header Section */}
                <div className="text-center space-y-3 mb-16 sm:mb-24">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-violet-500 uppercase">
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
                        Features Job
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                        Everything you need <br className="hidden sm:inline" /> to succeed
                    </h2>
                </div>

                {/* Features Grid Layout */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 sm:gap-y-16 w-full"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className="group flex gap-4 items-start p-2 rounded-2xl hover:bg-white/[0.01] transition-all duration-300"
                        >
                            {/* আইকন বক্স */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.04] bg-[#1E1E22] group-hover:bg-violet-950/20 group-hover:border-violet-500/30 transition-all duration-300 shadow-xl shadow-black/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300" />
                                {feature.icon}
                            </div>

                            {/* টাইটেল ও ডেসক্রিপশন */}
                            <div className="space-y-1.5 pt-0.5">
                                <h3 className="text-[17px] font-medium tracking-tight text-zinc-100 group-hover:text-violet-400 transition-colors duration-200">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 text-[14px] leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

export default FeaturesSection;