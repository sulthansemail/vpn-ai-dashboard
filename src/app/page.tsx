"use client";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { RecentAlerts } from "@/components/dashboard/RecentAlerts";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { TopCountries } from "@/components/dashboard/TopCountries";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { executiveMetrics, revenueTrend, userGrowth } from "@/mock/dashboard";

export default function Home() {
  return (
    <AppShell activeItem="Dashboard">
          <DashboardHeader />

          <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5">
            {executiveMetrics.map((metric) => <div key={metric.title} className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300"><StatCard {...metric} /></div>)}
          </section>

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <TrendChart title="Revenue trend" value="$36.7k" change="+11.2% this week" data={revenueTrend} color="blue" valueFormatter={(value) => `$${(value / 1000).toFixed(1)}k`} />
            <TrendChart title="User growth" value="19,240" change="+7.4% this week" data={userGrowth} color="violet" valueFormatter={(value) => `${Math.round(value / 1000)}k`} />
          </section>

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2"><AIRecommendations /><RecentAlerts /></section>
          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2"><TopCountries /><ActivityTimeline /></section>
    </AppShell>
  );
}
