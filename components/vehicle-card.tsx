'use client';

import Link from 'next/link';
import { useLocale } from '../components/locale-provider';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  Heart,
  ChevronRight,
  Zap,
  Flame,
} from 'lucide-react';

type VehicleCardProps = {
  id: string;
  name: string;
  brand: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  location: string;
  imageUrl: string;
  condition: 'new' | 'used';
  featured?: boolean;
};

export function VehicleCard({
  id,
  name,
  brand,
  price,
  year,
  mileage,
  fuelType,
  location,
  imageUrl,
  condition,
  featured,
}: VehicleCardProps) {
  const { t, locale } = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : locale === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: locale === 'zh' ? 'CNY' : locale === 'fr' ? 'EUR' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const fuelTypeLabels: Record<string, { icon: React.ReactNode; label: string }> = {
    electric: { icon: <Zap className="h-3.5 w-3.5" />, label: 'Electric' },
    gasoline: { icon: <Fuel className="h-3.5 w-3.5" />, label: 'Gasoline' },
    diesel: { icon: <Fuel className="h-3.5 w-3.5" />, label: 'Diesel' },
    hybrid: { icon: <Zap className="h-3.5 w-3.5" />, label: 'Hybrid' },
    'plugin-hybrid': { icon: <Zap className="h-3.5 w-3.5" />, label: 'Plug-in' },
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      {/* Racing stripe accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />
      
      {/* Image Container */}
      <Link href={`/vehicle/${id}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${brand} ${name}`}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          
          {/* Featured badge */}
          {featured && (
            <Badge className="absolute left-3 top-3 gap-1 border-0 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              <Flame className="h-3 w-3" />
              Hot
            </Badge>
          )}
          
          {/* Favorite button */}
          <button
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/80 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
          
          {/* Condition badge */}
          <Badge
            variant={condition === 'new' ? 'default' : 'secondary'}
            className={`absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider ${
              condition === 'new' 
                ? 'border-0 bg-accent text-accent-foreground' 
                : 'border border-border bg-background/80 text-foreground backdrop-blur-sm'
            }`}
          >
            {condition === 'new'
              ? locale === 'en'
                ? 'New'
                : locale === 'fr'
                  ? 'Neuf'
                  : '新车'
              : locale === 'en'
                ? 'Used'
                : locale === 'fr'
                  ? 'Occasion'
                  : '二手车'}
          </Badge>
          
          {/* Price overlay */}
          <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-2 backdrop-blur-sm">
            <div className="text-lg font-black text-foreground">{formatPrice(price)}</div>
          </div>
        </div>
      </Link>

      <CardContent className="p-5">
        <Link href={`/vehicle/${id}`}>
          {/* Brand & Model */}
          <div className="mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{brand}</div>
            <h3 className="mt-1 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {name}
            </h3>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{year}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
              <Gauge className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
              {fuelTypeLabels[fuelType]?.icon || <Fuel className="h-4 w-4 text-muted-foreground" />}
              <span className="text-sm font-medium capitalize text-foreground">
                {fuelTypeLabels[fuelType]?.label || fuelType}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="truncate text-sm font-medium text-foreground">{location.split(',')[0]}</span>
            </div>
          </div>
        </Link>

        {/* CTA Button */}
        <Link href={`/vehicle/${id}`} className="mt-5 block">
          <Button className="w-full gap-2 bg-primary font-semibold uppercase tracking-wider transition-all hover:bg-primary/90 hover:box-glow">
            {t.common.viewDetails}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
