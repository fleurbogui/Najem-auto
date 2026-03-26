'use client';

import Link from 'next/link';
import { useLocale } from '../components/locale-provider';
import { VehicleCard } from '../components/vehicle-card';
import { Button } from '../components/ui/button';
import { vehicles } from '../lib/vehicle-data';
import { ChevronRight, Flame, Gauge } from 'lucide-react';

export function FeaturedVehicles() {
  const { locale } = useLocale();
  const featuredVehicles = vehicles.filter((v) => v.featured);

  const sectionContent = {
    en: {
      tagline: 'HANDPICKED FOR YOU',
      title: 'Featured Vehicles',
      subtitle: 'Premium machines selected for discerning drivers who demand excellence.',
      cta: 'View All Vehicles',
    },
    fr: {
      tagline: 'SÉLECTIONNÉS POUR VOUS',
      title: 'Véhicules en Vedette',
      subtitle: 'Machines premium sélectionnées pour les conducteurs exigeants qui recherchent l\'excellence.',
      cta: 'Voir Tous les Véhicules',
    },
    zh: {
      tagline: '为您精选',
      title: '精选车辆',
      subtitle: '为追求卓越的挑剔驾驶者精选的顶级座驾。',
      cta: '查看所有车辆',
    },
  };

  const content = sectionContent[locale];

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      
      {/* Side accent */}
      <div className="absolute right-0 top-1/2 hidden h-64 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Flame className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {content.tagline}
              </span>
            </div>
            
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
              {content.title}
            </h2>
            
            <p className="max-w-xl text-lg text-muted-foreground">
              {content.subtitle}
            </p>
          </div>
          
          <Link href="/buy">
            <Button 
              variant="outline" 
              className="group hidden gap-2 border-2 border-foreground/20 bg-transparent px-6 py-6 font-semibold uppercase tracking-wider hover:border-primary hover:bg-primary/10 md:flex"
            >
              <Gauge className="h-5 w-5" />
              {content.cta}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Vehicles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredVehicles.slice(0, 8).map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/buy">
            <Button className="gap-2 bg-primary px-8 py-6 font-semibold uppercase tracking-wider hover:bg-primary/90 hover:box-glow">
              <Gauge className="h-5 w-5" />
              {content.cta}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
