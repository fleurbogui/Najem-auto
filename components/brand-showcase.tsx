'use client';

import { useLocale } from '../components/locale-provider';
import { Card, CardContent } from '../components/ui/card';
import { brands } from '../lib/vehicle-data';
import Link from 'next/link';
import { ChevronRight, Crown, Sparkles } from 'lucide-react';

export function BrandShowcase() {
  const { locale } = useLocale();

  const sectionContent = {
    en: {
      tagline: 'LEGENDARY MARQUES',
      title: 'Premium Brands',
      subtitle: 'Partner with the world\'s most prestigious automotive manufacturers',
    },
    fr: {
      tagline: 'MARQUES LÉGENDAIRES',
      title: 'Marques Premium',
      subtitle: 'Partenaires des constructeurs automobiles les plus prestigieux au monde',
    },
    zh: {
      tagline: '传奇品牌',
      title: '高端品牌',
      subtitle: '与世界最负盛名的汽车制造商合作',
    },
  };

  const content = sectionContent[locale];

  // Brand icons/initials with their colors
  const brandStyles: Record<string, { color: string; accent: string }> = {
    'Tesla': { color: 'from-red-500 to-red-600', accent: 'text-red-500' },
    'BMW': { color: 'from-blue-500 to-blue-600', accent: 'text-blue-500' },
    'Mercedes-Benz': { color: 'from-gray-400 to-gray-500', accent: 'text-gray-400' },
    'Audi': { color: 'from-gray-500 to-gray-600', accent: 'text-gray-400' },
    'Porsche': { color: 'from-red-600 to-red-700', accent: 'text-red-500' },
    'Ford': { color: 'from-blue-600 to-blue-700', accent: 'text-blue-500' },
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="carbon-texture h-full w-full" />
      </div>
      
      {/* Floating accents */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Crown className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {content.tagline}
            </span>
            <Crown className="h-5 w-5 text-primary" />
          </div>
          
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
            {content.title}
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {brands.map((brand) => {
            const style = brandStyles[brand.name] || { color: 'from-primary to-accent', accent: 'text-primary' };
            
            return (
              <Link key={brand.name} href={`/brand/${encodeURIComponent(brand.name)}`}>
                <Card className="group relative h-full cursor-pointer overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105">
                  {/* Glow effect */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
                  
                  <CardContent className="relative flex aspect-square flex-col items-center justify-center gap-4 p-6">
                    {/* Brand initial circle */}
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${style.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                      <span className="text-3xl font-black text-white">
                        {brand.name[0]}
                      </span>
                    </div>
                    
                    {/* Brand name */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
                        {brand.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {brand.description}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all group-hover:opacity-100">
                      <Sparkles className="h-3 w-3" />
                      <span>{locale === 'en' ? 'View' : locale === 'fr' ? 'Voir' : '查看'}</span>
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
