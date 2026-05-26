"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LuCrown, LuTrendingUp, LuZap, LuPlus, LuArrowRight } from "react-icons/lu";

const PricingSection = () => {
    // মান্থলি বা ইয়ারলি প্ল্যান ট্র্যাক করার জন্য স্টেট
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            id: "starter",
            name: "Starter",
            price: 0,
            icon: <LuCrown className="text-fuchsia-400 h-5 w-5" />,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            buttonText: "Choose This Plan",
            isPopular: false
        },
        {
            id: "growth",
            name: "Growth",
            price: isYearly ? 12 : 17, // ইয়ারলি সিলেক্ট করলে ডিসকাউন্টেড প্রাইস (চাইলে টিউন করতে পারেন)
            icon: <LuTrendingUp className="text-violet-400 h-5 w-5" />,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            buttonText: "Choose This Plan",
            isPopular: true // মাঝখানের কার্ডটি একটু হাইলাইটেড ও হোয়াইট বাটনের
        },
        {
            id: "premium",
            name: "Premium",
            price: isYearly ? 79 : 99,
            icon: <LuZap className="text-violet-400 h-5 w-5" />,
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)"
            ],
            buttonText: "Choose This Plan",
            isPopular: false
        }
    ];

    return (
        <section className="bg-[#000000] text-white py-20 sm:py-28 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] w-[500px] rounded-full bg-violet-600/[0.02] blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="text-center space-y-3 mb-12">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-violet-500 uppercase">
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
                        Pricing
                        <span className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                        Pay for the leverage, <br /> not the listings
                    </h2>
                </div>

                {/* Monthly / Yearly Toggle Button */}
                <div className="flex justify-center mb-16 sm:mb-20">
                    <div className="bg-[#1E1E22] p-1.5 rounded-full flex items-center relative border border-white/[0.04]">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative z-10 ${
                                !isYearly ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 relative z-10 ${
                                isYearly ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            Yearly
                            <span className="bg-fuchsia-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                25%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-2xl border bg-[#1E1E22]/40 p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                                plan.isPopular 
                                ? "border-white/[0.12] bg-[#1E1E22]/80 shadow-2xl shadow-black/40 md:scale-[1.02]" 
                                : "border-white/[0.05] hover:border-white/[0.1]"
                            }`}
                        >
                            {/* ভেতরের মূল কন্টেন্ট */}
                            <div>
                                {/* কার্ড হেডার: আইকন এবং নাম */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-9 w-9 rounded-xl bg-[#1E1E22] border border-white/[0.05] flex items-center justify-center shadow-inner">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-zinc-200">
                                        {plan.name}
                                    </h3>
                                </div>

                                {/* প্রাইস সেকশন */}
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
                                        ${plan.price}
                                    </span>
                                    <span className="text-zinc-500 text-sm">
                                        /month
                                    </span>
                                </div>

                                {/* ফিচার লিস্টের টাইটেল */}
                                <p className="text-sm font-medium text-zinc-300 mb-5">
                                    Start building your insights hub:
                                </p>

                                {/* ফিচার বা বেনিফিটসমূহ */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[14px] text-zinc-400 leading-relaxed">
                                            <span className="p-0.5 rounded-md bg-[#1E1E22] border border-white/[0.04] text-zinc-500 shrink-0 mt-0.5">
                                                <LuPlus className="h-3 w-3" />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* অ্যাকশন বাটন */}
                            <button
                                className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                                    plan.isPopular
                                    ? "bg-white text-black hover:bg-zinc-200"
                                    : "bg-[#2A2A30] text-zinc-200 hover:bg-[#32323A] hover:text-white"
                                }`}
                            >
                                {plan.buttonText}
                                <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default PricingSection;