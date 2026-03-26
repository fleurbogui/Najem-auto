'use client';

import { useLocale } from '../components/locale-provider';
import { Users, Car, Award, Globe } from 'lucide-react';

export function StatsSection() {
  const { locale } = useLocale();

  const stats = [
    {
      icon: Car,
      value: '5,000+',
      label:
        locale === 'en'
          ? 'Vehicles Available'
          : locale === 'fr'
            ? 'Véhicules Disponibles'
            : '可用车辆',
      color: 'text-neon-cyan',
    },
    {
      icon: Users,
      value: '50,000+',
      label:
        locale === 'en'
          ? 'Happy Customers'
          : locale === 'fr'
            ? 'Clients Satisfaits'
            : '满意客户',
      color: 'text-neon-magenta',
    },
    {
      icon: Award,
      value: '15+',
      label:
        locale === 'en'
          ? 'Years Experience'
          : locale === 'fr'
            ? 'Années d\'Expérience'
            : '年经验',
      color: 'text-neon-lime',
    },
    {
      icon: Globe,
      value: '30+',
      label:
        locale === 'en'
          ? 'Countries Served'
          : locale === 'fr'
            ? 'Pays Desservis'
            : '服务国家',
      color: 'text-neon-yellow',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-24 border-t border-neon-cyan/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-black bg-gradient-to-r from-neon-cyan via-slate-100 to-neon-magenta bg-clip-text text-transparent">
            {locale === 'en' ? 'Dominating The Market' : locale === 'fr' ? 'Dominer Le Marché' : '市场领导者'}
          </h2>
          <p className="mt-4 text-slate-300">
            {locale === 'en' ? 'Trust by millions worldwide' : locale === 'fr' ? 'Confiance de millions de personnes' : '全球数百万人信任'}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 text-center hover:border-neon-cyan/50 transition-all hover:shadow-lg hover:shadow-neon-cyan/20"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${stat.color === 'text-neon-cyan' ? 'from-neon-cyan/20 to-neon-cyan/10' : stat.color === 'text-neon-magenta' ? 'from-neon-magenta/20 to-neon-magenta/10' : stat.color === 'text-neon-lime' ? 'from-neon-lime/20 to-neon-lime/10' : 'from-neon-yellow/20 to-neon-yellow/10'} group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}>
                    <Icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-5xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="mt-3 text-lg font-medium text-slate-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
