import FeaturedJobs from "@/components/FeaturedJobs";
import StatsSection from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <StatsSection />
      <FeaturedJobs />
    </div>
  );
}
