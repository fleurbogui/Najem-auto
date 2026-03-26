'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  LayoutDashboard,
  Car,
  Package,
  Flag,
  LogOut,
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/vehicles', label: 'Vehicles', icon: Car },
    { href: '/admin/categories', label: 'Categories', icon: Package },
    { href: '/admin/brands', label: 'Brands', icon: Flag },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-neon-cyan/20 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-neon-cyan/20 flex items-center justify-between">
          <div className={`font-black text-2xl ${sidebarOpen ? 'block' : 'hidden'}`}>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              ADMIN
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-neon-cyan/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-neon-cyan" />
            ) : (
              <Menu className="w-5 h-5 text-neon-cyan" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-slate-900 font-bold'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-neon-cyan'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-neon-cyan/20">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700/50 hover:text-neon-cyan transition-all w-full">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-neon-cyan/20 px-8 py-4 flex items-center justify-between z-10">
          <h1 className="text-xl font-bold text-slate-100">NAJEM Admin</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta flex items-center justify-center font-bold text-slate-900">
              A
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
