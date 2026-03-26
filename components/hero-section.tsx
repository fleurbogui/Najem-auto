'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '../components/locale-provider';
import { Button } from '../components/ui/button';
import { Gauge, Flame, Zap, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const { locale } = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = {
    en: {
      tagline: 'SPEED • POWER • PASSION',
      title: 'UNLEASH THE',
      titleHighlight: 'BEAST',
      subtitle: 'Experience extraordinary vehicles that push the limits. Premium cars, unmatched performance, unforgettable driving experiences.',
      cta1: 'EXPLORE COLLECTION',
      cta2: 'WATCH VIDEO',
      stats: [
        { value: '500+', label: 'PREMIUM VEHICLES' },
        { value: '50+', label: 'ELITE BRANDS' },
        { value: '24/7', label: 'SUPPORT' },
        { value: '100%', label: 'SATISFACTION' },
      ]
    },
    fr: {
      tagline: 'VITESSE • PUISSANCE • PASSION',
      title: 'LIBÉREZ LA',
      titleHighlight: 'BÊTE',
      subtitle: 'Découvrez des véhicules extraordinaires qui repoussent les limites. Voitures premium, performance inégalée, expériences de conduite inoubliables.',
      cta1: 'EXPLORER LA COLLECTION',
      cta2: 'VOIR LA VIDÉO',
      stats: [
        { value: '500+', label: 'VÉHICULES PREMIUM' },
        { value: '50+', label: 'MARQUES ÉLITE' },
        { value: '24/7', label: 'ASSISTANCE' },
        { value: '100%', label: 'SATISFACTION' },
      ]
    },
    zh: {
      tagline: '速度 • 力量 • 激情',
      title: '释放',
      titleHighlight: '野兽',
      subtitle: '体验突破极限的非凡座驾。顶级豪车，无与伦比的性能，难忘的驾驶体验。',
      cta1: '探索收藏',
      cta2: '观看视频',
      stats: [
        { value: '500+', label: '豪华车辆' },
        { value: '50+', label: '精英品牌' },
        { value: '24/7', label: '全天服务' },
        { value: '100%', label: '满意保证' },
      ]
    },
  };

  const content = heroContent[locale];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/mN0aJgWeyGI?autoplay=1&mute=1&loop=1&playlist=mN0aJgWeyGI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Car showcase video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={`absolute left-1/2 top-1/2 h-[150%] min-h-full w-[200%] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ pointerEvents: 'none' }}
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setVideoLoaded(true)}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated racing lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
          <div className="absolute h-1 w-48 animate-speed-line bg-gradient-to-r from-transparent via-primary to-transparent" style={{ top: '20%', animationDelay: '0s' }} />
          <div className="absolute h-1 w-64 animate-speed-line bg-gradient-to-r from-transparent via-accent to-transparent" style={{ top: '50%', animationDelay: '0.5s' }} />
          <div className="absolute h-0.5 w-32 animate-speed-line bg-gradient-to-r from-transparent via-primary to-transparent" style={{ top: '80%', animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-bold tracking-[0.3em] text-primary">
              {content.tagline}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tight text-foreground sm:text-6xl lg:text-8xl">
            {content.title}
            <br />
            <span className="relative inline-block text-primary">
              {content.titleHighlight}
              <Flame className="absolute -right-8 -top-4 h-12 w-12 animate-pulse text-accent sm:-right-12 sm:h-16 sm:w-16" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/buy">
              <Button 
                size="lg" 
                className="group gap-3 bg-primary px-8 py-7 text-lg font-bold uppercase tracking-wider hover:bg-primary/90 hover:box-glow"
              >
                <Gauge className="h-5 w-5 transition-transform group-hover:rotate-45" />
                {content.cta1}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="group gap-3 border-2 border-foreground/20 bg-transparent px-8 py-7 text-lg font-bold uppercase tracking-wider hover:border-primary hover:bg-primary/10"
            >
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
              {content.cta2}
            </Button> */}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-24 sm:grid-cols-4 lg:gap-8">
          {content.stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background/80"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="text-3xl font-black text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Side accent */}
      <div className="absolute right-0 top-1/2 hidden h-64 w-1 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary to-transparent lg:block" />
    </section>
  );
}
