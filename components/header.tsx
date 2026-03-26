'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '../components/locale-provider';
import { locales, localeNames, Locale } from '../lib/i18n';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Menu, X, Globe, Gauge, Shield } from 'lucide-react';

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-xl">
      {/* Racing stripe accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] gradient-racing" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:box-glow">
              <Gauge className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -inset-1 rounded-lg bg-primary/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wider text-foreground">
                NA<span className="text-primary">JEM</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Speed • Power • Passion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { href: '/buy', label: t.nav.buy },
              { href: '/rent', label: t.nav.rent },
              { href: '/about', label: t.nav.about },
              { href: '/contact', label: t.nav.contact },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-semibold uppercase tracking-wider text-foreground/70 transition-all hover:text-foreground"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Admin Link */}
            {/* <Link href="/admin">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <Shield className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">Admin</span>
              </Button>
            </Link> */}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 border border-border hover:border-primary/50 hover:bg-primary/10">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase text-xs tracking-wider">{locale}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="border-border bg-card">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setLocale(loc as Locale)}
                    className={`cursor-pointer ${locale === loc ? 'bg-primary/20 text-primary' : ''}`}
                  >
                    {localeNames[loc]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* CTA Button */}
            <Link href="/buy">
              <Button className="gap-2 bg-primary font-semibold uppercase tracking-wider hover:bg-primary/90 hover:box-glow">
                <Gauge className="h-4 w-4" />
                Explorer
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary/50 hover:bg-primary/10 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 p-6">
            {[
              { href: '/buy', label: t.nav.buy },
              { href: '/rent', label: t.nav.rent },
              { href: '/about', label: t.nav.about },
              { href: '/contact', label: t.nav.contact },
              { href: '/admin', label: 'Admin' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 rounded-lg border border-border bg-card/50 px-4 py-4 text-lg font-semibold uppercase tracking-wider transition-all hover:border-primary/50 hover:bg-primary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Language</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocale(loc as Locale);
                      setMobileMenuOpen(false);
                    }}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all ${
                      locale === loc
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border bg-card text-foreground hover:border-primary/50'
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>
            
            <Link href="/buy" className="mt-6" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full gap-2 bg-primary py-6 text-lg font-semibold uppercase tracking-wider hover:bg-primary/90">
                <Gauge className="h-5 w-5" />
                Découvrir les Véhicules
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
