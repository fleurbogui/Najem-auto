'use client';

import Link from 'next/link';
import { useLocale } from '../components/locale-provider';
import { Gauge, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Footer() {
  const { locale } = useLocale();

  const footerContent = {
    en: {
      tagline: 'Speed • Power • Passion',
      description: 'Your trusted partner for buying and renting premium performance vehicles worldwide.',
      newsletter: 'Stay in the Fast Lane',
      newsletterSub: 'Get exclusive offers and new arrivals first.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      quickLinks: 'Quick Links',
      categories: 'Categories',
      contact: 'Contact',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
    },
    fr: {
      tagline: 'Vitesse • Puissance • Passion',
      description: 'Votre partenaire de confiance pour acheter et louer des véhicules premium dans le monde entier.',
      newsletter: 'Restez dans la Course',
      newsletterSub: 'Recevez les offres exclusives et les nouveautés en premier.',
      emailPlaceholder: 'Entrez votre email',
      subscribe: 'S\'abonner',
      quickLinks: 'Liens Rapides',
      categories: 'Catégories',
      contact: 'Contact',
      copyright: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      cookies: 'Politique de Cookies',
    },
    zh: {
      tagline: '速度 • 力量 • 激情',
      description: '您购买和租赁全球优质性能车辆的值得信赖的合作伙伴。',
      newsletter: '保持领先',
      newsletterSub: '第一时间获取独家优惠和新车资讯。',
      emailPlaceholder: '输入您的邮箱',
      subscribe: '订阅',
      quickLinks: '快速链接',
      categories: '类别',
      contact: '联系方式',
      copyright: '版权所有。',
      privacy: '隐私政策',
      terms: '服务条款',
      cookies: 'Cookie政策',
    },
  };

  const content = footerContent[locale];

  const quickLinks = [
    { href: '/buy', label: locale === 'en' ? 'Buy a Vehicle' : locale === 'fr' ? 'Acheter un Véhicule' : '购买车辆' },
    { href: '/rent', label: locale === 'en' ? 'Rent a Vehicle' : locale === 'fr' ? 'Louer un Véhicule' : '租赁车辆' },
    { href: '/about', label: locale === 'en' ? 'About Us' : locale === 'fr' ? 'À Propos' : '关于我们' },
    { href: '/contact', label: locale === 'en' ? 'Contact' : locale === 'fr' ? 'Contact' : '联系' },
  ];

  const categories = [
    { href: '/buy?type=suv', label: 'SUV' },
    { href: '/buy?type=sedan', label: locale === 'en' ? 'Sedans' : locale === 'fr' ? 'Berlines' : '轿车' },
    { href: '/buy?type=electric', label: locale === 'en' ? 'Electric' : locale === 'fr' ? 'Électrique' : '电动车' },
    { href: '/buy?type=sports', label: locale === 'en' ? 'Sports Cars' : locale === 'fr' ? 'Voitures de Sport' : '跑车' },
    { href: '/buy?type=luxury', label: locale === 'en' ? 'Luxury' : locale === 'fr' ? 'Luxe' : '豪华车' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 gradient-racing" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="carbon-texture h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm lg:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground">
                {content.newsletter}
              </h3>
              <p className="text-muted-foreground">{content.newsletterSub}</p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <Input 
                type="email" 
                placeholder={content.emailPlaceholder}
                className="h-12 border-border bg-background px-4"
              />
              <Button className="h-12 gap-2 bg-primary px-6 font-semibold uppercase tracking-wider hover:bg-primary/90 hover:box-glow">
                {content.subscribe}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Gauge className="h-7 w-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-foreground">
                  NA<span className="text-primary">JEM</span> AUTO
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {content.tagline}
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              {content.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              {content.quickLinks}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ChevronRight className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              {content.categories}
            </h4>
            <ul className="space-y-4">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ChevronRight className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">
              {content.contact}
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <div>+225 07 18 29 20 57</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <div>najemautos@gmail.com</div>
                  <div>salesnajemautos@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  Abidjan, Côte d'Ivoire
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NAJEM. {content.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                {content.privacy}
              </Link>
              <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                {content.terms}
              </Link>
              <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-foreground hover:underline">
                {content.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
