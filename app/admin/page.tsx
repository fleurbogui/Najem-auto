'use client';

import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Package, Flag } from 'lucide-react';

interface DashboardStats {
  totalVehicles: number;
  totalBrands: number;
  totalCategories: number;
  avgPrice: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalVehicles: 0,
    totalBrands: 0,
    totalCategories: 0,
    avgPrice: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [vehiclesRes, brandsRes, categoriesRes] = await Promise.all([
        fetch('/api/vehicles'),
        fetch('/api/brands'),
        fetch('/api/categories'),
      ]);

      const vehicles = await vehiclesRes.json();
      const brands = await brandsRes.json();
      const categories = await categoriesRes.json();

      const avgPrice =
        vehicles.length > 0
          ? (vehicles.reduce((sum: number, v: any) => sum + (v.price || 0), 0) /
              vehicles.length).toFixed(2)
          : '0';

      setStats({
        totalVehicles: vehicles.length,
        totalBrands: brands.length,
        totalCategories: categories.length,
        avgPrice: parseFloat(avgPrice),
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
  }: {
    icon: React.ComponentType<any>;
    label: string;
    value: string | number;
    color: string;
  }) => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan/50 transition-all group hover:shadow-lg hover:shadow-neon-cyan/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{label}</p>
          <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
        </div>
        <div className={`${color} opacity-20 p-4 rounded-lg bg-current`}>
          <Icon className="w-8 h-8 text-current" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black bg-gradient-to-r from-neon-cyan via-slate-100 to-neon-magenta bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-slate-400 mt-2">Welcome back to NAJEM Admin Panel</p>
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 animate-pulse h-32" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Activity}
            label="Total Vehicles"
            value={stats.totalVehicles}
            color="text-neon-cyan"
          />
          <StatCard
            icon={Flag}
            label="Total Brands"
            value={stats.totalBrands}
            color="text-neon-magenta"
          />
          <StatCard
            icon={Package}
            label="Categories"
            value={stats.totalCategories}
            color="text-neon-lime"
          />
          <StatCard
            icon={TrendingUp}
            label="Avg Price"
            value={`$${stats.avgPrice.toLocaleString()}`}
            color="text-neon-yellow"
          />
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickActionCard
          title="Add New Vehicle"
          description="Create a new vehicle listing"
          href="/admin/vehicles/new"
        />
        <QuickActionCard
          title="Manage Categories"
          description="Edit vehicle categories"
          href="/admin/categories"
        />
        <QuickActionCard
          title="Manage Brands"
          description="Edit brand information"
          href="/admin/brands"
        />
      </div>
    </div>
  );
}

function QuickActionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan/50 transition-all group cursor-pointer hover:shadow-lg hover:shadow-neon-cyan/20"
    >
      <h3 className="text-lg font-bold text-slate-100 group-hover:text-neon-cyan transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mt-2">{description}</p>
      <div className="mt-4 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
        <span>Go to</span>
        <span>→</span>
      </div>
    </a>
  );
}
