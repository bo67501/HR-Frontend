import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeCard from "@/components/WelcomeCard";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
        <Header />
        <div className="mt-6 space-y-6">
          <WelcomeCard />
          <StatsCard />
        </div>
      </div>
    </div>
  );
}
