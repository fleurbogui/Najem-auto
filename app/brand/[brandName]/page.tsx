'use client';

import { useParams } from 'next/navigation';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';
import { VehicleCard } from '../../../components/vehicle-card';
import { useLocale } from '../../../components/locale-provider';
import { brands, vehicles } from '../../../lib/vehicle-data';
import { Badge } from '../../../components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
function extractYouTubeId(url: string): string {
  if (!url) return '';
  
  // Pour les URLs embed
  const embedMatch = url.match(/youtube\.com\/embed\/([^&\?\/]+)/);
  if (embedMatch) return embedMatch[1];
  
  // Pour les URLs watch
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&\?\/]+)/);
  if (watchMatch) return watchMatch[1];
  
  // Pour les URLs youtu.be
  const shortMatch = url.match(/youtu\.be\/([^&\?\/]+)/);
  if (shortMatch) return shortMatch[1];
  
  return '';
}

function extractYouTubeEmbedUrl(url: string): string {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}
export default function BrandPage() {
  const params = useParams();
  const { locale } = useLocale();
  const brandName = decodeURIComponent(params.brandName as string);
  
  const brand = brands.find((b) => b.name === brandName);
  const brandVehicles = vehicles.filter((v) => v.brand === brandName);

  if (!brand) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              {locale === 'en'
                ? 'Brand Not Found'
                : locale === 'fr'
                  ? 'Marque Introuvable'
                  : '品牌未找到'}
            </h1>
            <Link href="/">
              <Button className="mt-6">
                {locale === 'en'
                  ? 'Return Home'
                  : locale === 'fr'
                    ? 'Retour à l\'accueil'
                    : '返回首页'}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {locale === 'en'
                ? 'Back to Home'
                : locale === 'fr'
                  ? 'Retour à l\'accueil'
                  : '返回首页'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Brand Header */}
      <div className="border-b border-border bg-gradient-to-b from-card/80 to-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <span className="text-4xl font-bold">{brand.name[0]}</span>
            </div>
            <div>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                {brand.name}
              </h1>
              <p className="mt-2 text-xl text-muted-foreground">
                {brand.description}
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {brandVehicles.length} {locale === 'en' ? 'Models' : locale === 'fr' ? 'Modèles' : '车型'}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {brandVehicles.filter((v) => v.condition === 'new').length} {locale === 'en' ? 'New' : locale === 'fr' ? 'Neuves' : '新车'}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
              {brandVehicles.filter((v) => v.fuelType === 'electric').length} {locale === 'en' ? 'Electric' : locale === 'fr' ? 'Électriques' : '电动'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Video Showcase - Autoplay */}
      {brand.videoUrl && (
        <section className="border-b border-border bg-card/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-balance text-2xl font-bold sm:text-3xl">
                {locale === 'en'
                  ? 'Brand Showcase'
                  : locale === 'fr'
                    ? 'Vitrine de la Marque'
                    : '品牌展示'}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {locale === 'en'
                  ? 'Experience the excellence and innovation'
                  : locale === 'fr'
                    ? 'Découvrez l\'excellence et l\'innovation'
                    : '体验卓越与创新'}
              </p>
            </div>
            
           <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        <iframe
          src={`${extractYouTubeEmbedUrl(brand.videoUrl)}?autoplay=1&mute=1&loop=1&playlist=${extractYouTubeId(brand.videoUrl)}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          title={`${brand.name} Brand Showcase`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
          className="absolute left-1/2 top-1/2 h-[120%] min-h-full w-[120%] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          style={{ pointerEvents: 'none' }}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
          </div>
        </section>
      )}

      {/* Available Models */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-balance text-2xl font-bold sm:text-3xl">
              {locale === 'en'
                ? 'Available Models'
                : locale === 'fr'
                  ? 'Modèles Disponibles'
                  : '可用车型'}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {locale === 'en'
                ? `Explore all ${brandVehicles.length} ${brand.name} vehicles in our collection`
                : locale === 'fr'
                  ? `Explorez les ${brandVehicles.length} véhicules ${brand.name} de notre collection`
                  : `探索我们收藏的所有 ${brandVehicles.length} 辆 ${brand.name} 车辆`}
            </p>
          </div>

          {brandVehicles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {brandVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-muted/30 p-12 text-center">
              <p className="text-lg text-muted-foreground">
                {locale === 'en'
                  ? 'No vehicles available for this brand at the moment.'
                  : locale === 'fr'
                    ? 'Aucun véhicule disponible pour cette marque pour le moment.'
                    : '此品牌暂无可用车辆。'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
