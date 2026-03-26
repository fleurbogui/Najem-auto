'use client';

import Link from 'next/link';
import { useLocale } from '../components/locale-provider';
import { Card, CardContent } from '../components/ui/card';
import { Car, Zap, Fuel, Truck, Crown, Sparkles, Gauge, ChevronRight } from 'lucide-react';

export function CategoriesSection() {
  const { locale } = useLocale();

  const categories = [
    {
      icon: Car,
      name: locale === 'en' ? 'Sedans' : locale === 'fr' ? 'Berlines' : '轿车',
      count: '2,450',
      href: '/buy?category=sedan',
      description: locale === 'en' ? 'Elegant & Refined' : locale === 'fr' ? 'Élégant & Raffiné' : '优雅精致',
    },
    {
      icon: Truck,
      name: locale === 'en' ? 'SUVs' : locale === 'fr' ? 'SUV' : 'SUV',
      count: '1,820',
      href: '/buy?category=suv',
      description: locale === 'en' ? 'Power & Presence' : locale === 'fr' ? 'Puissance & Présence' : '力量与存在',
    },
    {
      icon: Zap,
      name: locale === 'en' ? 'Electric' : locale === 'fr' ? 'Électrique' : '电动车',
      count: '980',
      href: '/buy?category=electric',
      description: locale === 'en' ? 'Future is Now' : locale === 'fr' ? 'Le Futur est Là' : '未来已来',
    },
    {
      icon: Crown,
      name: locale === 'en' ? 'Luxury' : locale === 'fr' ? 'Luxe' : '豪华车',
      count: '650',
      href: '/buy?category=luxury',
      description: locale === 'en' ? 'Ultimate Prestige' : locale === 'fr' ? 'Prestige Ultime' : '极致尊贵',
    },
    {
      icon: Gauge,
      name: locale === 'en' ? 'Sports' : locale === 'fr' ? 'Sport' : '跑车',
      count: '1,540',
      href: '/buy?category=sports',
      description: locale === 'en' ? 'Pure Adrenaline' : locale === 'fr' ? 'Adrénaline Pure' : '纯粹肾上腺素',
    },
    {
      icon: Sparkles,
      name: locale === 'en' ? 'Hybrid' : locale === 'fr' ? 'Hybride' : '混合动力',
      count: '720',
      href: '/buy?category=hybrid',
      description: locale === 'en' ? 'Best of Both' : locale === 'fr' ? 'Le Meilleur des Deux' : '两全其美',
    },
  ];

  const sectionContent = {
    en: {
      tagline: 'FIND YOUR STYLE',
      title: 'Browse by Category',
      subtitle: 'Every driver has a story. Find the vehicle that tells yours.',
    },
    fr: {
      tagline: 'TROUVEZ VOTRE STYLE',
      title: 'Parcourir par Catégorie',
      subtitle: 'Chaque conducteur a une histoire. Trouvez le véhicule qui raconte la vôtre.',
    },
    zh: {
      tagline: '找到您的风格',
      title: '按类别浏览',
      subtitle: '每位车主都有一个故事。找到讲述您故事的座驾。',
    },
  };

  const content = sectionContent[locale];

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="carbon-texture h-full w-full" />
      </div>
      
      {/* Side accent */}
      <div className="absolute left-0 top-1/2 h-64 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {content.tagline}
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
            {content.title}
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href}>
              <Card className="group relative h-full cursor-pointer overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  {/* Icon container */}
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <category.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-2 rounded-xl bg-primary/20 blur-xl opacity-0 transition-opacity group-hover:opacity-50" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="mt-2 text-sm font-semibold text-primary">
                      {category.count}
                    </div>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-all group-hover:opacity-100">
                    <span>{locale === 'en' ? 'Explore' : locale === 'fr' ? 'Explorer' : '探索'}</span>
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
