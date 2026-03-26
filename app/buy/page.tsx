'use client';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { SearchFilters } from '../../components/search-filters';
import { VehicleCard } from '../../components/vehicle-card';
import { useLocale } from '../../components/locale-provider';
import { vehicles } from '../../lib/vehicle-data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export default function BuyPage() {
  const { locale } = useLocale();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {locale === 'en'
              ? 'Buy a Vehicle'
              : locale === 'fr'
                ? 'Acheter un Véhicule'
                : '购买车辆'}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {locale === 'en'
              ? 'Find your perfect car from our extensive inventory'
              : locale === 'fr'
                ? 'Trouvez votre voiture parfaite dans notre vaste inventaire'
                : '从我们广泛的库存中找到您的完美汽车'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <aside>
            <SearchFilters />
          </aside>

          {/* Main Content */}
          <div>
            {/* Sort and View Options */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="text-sm text-muted-foreground">
                {locale === 'en'
                  ? `${vehicles.length} vehicles found`
                  : locale === 'fr'
                    ? `${vehicles.length} véhicules trouvés`
                    : `找到 ${vehicles.length} 辆车`}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {locale === 'en' ? 'Sort by:' : locale === 'fr' ? 'Trier par:' : '排序:'}
                </span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">
                      {locale === 'en' ? 'Featured' : locale === 'fr' ? 'En vedette' : '精选'}
                    </SelectItem>
                    <SelectItem value="price-low">
                      {locale === 'en' ? 'Price: Low to High' : locale === 'fr' ? 'Prix: Bas à Élevé' : '价格: 从低到高'}
                    </SelectItem>
                    <SelectItem value="price-high">
                      {locale === 'en' ? 'Price: High to Low' : locale === 'fr' ? 'Prix: Élevé à Bas' : '价格: 从高到低'}
                    </SelectItem>
                    <SelectItem value="year-new">
                      {locale === 'en' ? 'Year: Newest' : locale === 'fr' ? 'Année: Plus récent' : '年份: 最新'}
                    </SelectItem>
                    <SelectItem value="mileage">
                      {locale === 'en' ? 'Mileage: Lowest' : locale === 'fr' ? 'Kilométrage: Plus bas' : '里程: 最低'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
