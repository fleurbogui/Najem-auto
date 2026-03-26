'use client';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SearchFilters } from '../../components/search-filters';
import { useLocale } from '../../components/locale-provider';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { vehicles } from '../../lib/vehicle-data';
import Link from 'next/link';
import { Calendar, Gauge, Fuel, Star, ChevronRight } from 'lucide-react';

// Filter vehicles suitable for rent (newer models with low mileage)
const rentalVehicles = vehicles.filter((v) => v.year >= 2023 && v.mileage < 30000);

export default function RentPage() {
  const { locale, t } = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : locale === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: locale === 'zh' ? 'CNY' : locale === 'fr' ? 'EUR' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {locale === 'en'
              ? 'Rent a Vehicle'
              : locale === 'fr'
                ? 'Louer un Véhicule'
                : '租赁车辆'}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {locale === 'en'
              ? 'Choose from our premium fleet of rental vehicles'
              : locale === 'fr'
                ? 'Choisissez parmi notre flotte premium de véhicules de location'
                : '从我们的优质租赁车队中选择'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <aside>
            <SearchFilters />
          </aside>

          {/* Main Content */}
          <div>
            <div className="mb-6 text-sm text-muted-foreground">
              {locale === 'en'
                ? `${rentalVehicles.length} vehicles available`
                : locale === 'fr'
                  ? `${rentalVehicles.length} véhicules disponibles`
                  : `${rentalVehicles.length} 辆车可用`}
            </div>

            {/* Rental Grid */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {rentalVehicles.map((vehicle) => {
                const pricePerDay = Math.round(vehicle.price * 0.003);
                return (
                  <Card key={vehicle.id} className="group overflow-hidden transition-all hover:shadow-lg">
                    <Link href={`/vehicle/${vehicle.id}`}>
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={vehicle.imageUrl || "/placeholder.svg"}
                          alt={`${vehicle.brand} ${vehicle.name}`}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <Badge className="absolute left-3 top-3 capitalize">
                          {vehicle.type}
                        </Badge>
                      </div>
                    </Link>

                    <CardContent className="p-4">
                      <Link href={`/vehicle/${vehicle.id}`}>
                        <div className="mb-2">
                          <div className="text-sm text-muted-foreground">{vehicle.brand}</div>
                          <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                            {vehicle.name}
                          </h3>
                        </div>

                        <div className="mb-3 flex items-baseline gap-1">
                          <span className="text-2xl font-bold">{formatPrice(pricePerDay)}</span>
                          <span className="text-sm text-muted-foreground">{t.common.perDay}</span>
                        </div>

                        <div className="mb-3 flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{(4.5 + Math.random() * 0.5).toFixed(1)}</span>
                          <span className="text-muted-foreground">
                            ({Math.floor(Math.random() * 200 + 50)} {locale === 'en' ? 'reviews' : locale === 'fr' ? 'avis' : '评论'})
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{vehicle.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Gauge className="h-4 w-4" />
                            <span>{vehicle.mileage.toLocaleString()} km</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Fuel className="h-4 w-4" />
                            <span className="capitalize">{vehicle.fuelType}</span>
                          </div>
                        </div>
                      </Link>
                    </CardContent>

                    <CardFooter className="border-t border-border p-4">
                      <Link href={`/vehicle/${vehicle.id}`} className="w-full">
                        <Button className="w-full gap-2">
                          {t.common.bookNow}
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
