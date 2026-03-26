import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { CategoriesSection } from '../components/categories-section';
import { BrandShowcase } from '../components/brand-showcase';
import { FeaturedVehicles } from '../components/featured-vehicles';
import { StatsSection } from '../components/stats-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'NAJEM Auto',
  description: 'Experience the ultimate luxury car marketplace. Buy, sell, and rent premium vehicles worldwide.',
  metadataBase: new URL('https://najem.vercel.app'),
  keywords: 'luxury cars, car sales, car rental, premium vehicles',
  openGraph: {
    title: 'NAJEM AUTO',
    description: 'Experience the ultimate luxury car marketplace',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 800,
      },
    ],
  },
};

export const viewport = {
  themeColor: '#00d9ff',
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <BrandShowcase />
      <FeaturedVehicles />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
