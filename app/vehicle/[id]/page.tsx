'use client';

import { useState } from 'react';
import { Header } from '../../../components/header';
import { useLocale } from '../../../components/locale-provider';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import {
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Car,
  Zap,
  Shield,
} from 'lucide-react';

// Mock vehicle data
const vehicleData = {
  id: '1',
  name: 'Camry XLE',
  brand: 'Toyota',
  price: 32000,
  year: 2024,
  mileage: 0,
  fuelType: 'Hybrid',
  transmission: 'Automatic',
  location: 'Los Angeles, CA',
  condition: 'new',
  vin: '4T1B11HK5MU123456',
  color: 'Pearl White',
  engineSize: '2.5L 4-Cylinder',
  horsepower: '215 hp',
  drivetrain: 'FWD',
  doors: 4,
  seats: 5,
  images: [
    'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop',
  ],
  features: [
    'Adaptive Cruise Control',
    'Blind Spot Monitoring',
    'Lane Departure Warning',
    'Apple CarPlay & Android Auto',
    'Leather Seats',
    'Sunroof',
    'Premium Sound System',
    'Heated & Ventilated Seats',
    'Wireless Charging',
    'Keyless Entry',
    'Push Button Start',
    'Backup Camera',
  ],
  description: 'This 2024 Toyota Camry XLE is in pristine condition and comes fully loaded with premium features. The hybrid powertrain provides excellent fuel economy while maintaining impressive performance. Perfect for both daily commuting and long road trips.',
  sellerInfo: {
    name: 'Premium Auto Dealers',
    rating: 4.9,
    reviews: 342,
    verified: true,
  },
};

export default function VehicleDetailPage() {
  const { locale, t } = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);

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
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6">
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                <img
                  src={vehicleData.images[selectedImage] || "/placeholder.svg"}
                  alt={`${vehicleData.brand} ${vehicleData.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-10 w-10">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {vehicleData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-video overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Information Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">
                  {locale === 'en' ? 'Overview' : locale === 'fr' ? 'Aperçu' : '概览'}
                </TabsTrigger>
                <TabsTrigger value="features">
                  {locale === 'en' ? 'Features' : locale === 'fr' ? 'Caractéristiques' : '特点'}
                </TabsTrigger>
                <TabsTrigger value="history">
                  {locale === 'en' ? 'History' : locale === 'fr' ? 'Historique' : '历史'}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {locale === 'en' ? 'Vehicle Details' : locale === 'fr' ? 'Détails du Véhicule' : '车辆详情'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-muted-foreground">{vehicleData.description}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Condition' : locale === 'fr' ? 'État' : '状态'}
                        </span>
                        <span className="font-medium capitalize">{vehicleData.condition}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">VIN</span>
                        <span className="font-medium">{vehicleData.vin}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Color' : locale === 'fr' ? 'Couleur' : '颜色'}
                        </span>
                        <span className="font-medium">{vehicleData.color}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Transmission' : locale === 'fr' ? 'Transmission' : '变速箱'}
                        </span>
                        <span className="font-medium">{vehicleData.transmission}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Engine' : locale === 'fr' ? 'Moteur' : '发动机'}
                        </span>
                        <span className="font-medium">{vehicleData.engineSize}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Horsepower' : locale === 'fr' ? 'Puissance' : '马力'}
                        </span>
                        <span className="font-medium">{vehicleData.horsepower}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Drivetrain' : locale === 'fr' ? 'Transmission' : '驱动方式'}
                        </span>
                        <span className="font-medium">{vehicleData.drivetrain}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Doors' : locale === 'fr' ? 'Portes' : '门'}
                        </span>
                        <span className="font-medium">{vehicleData.doors}</span>
                      </div>
                      <div className="flex justify-between border-b border-border py-2">
                        <span className="text-muted-foreground">
                          {locale === 'en' ? 'Seats' : locale === 'fr' ? 'Sièges' : '座位'}
                        </span>
                        <span className="font-medium">{vehicleData.seats}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {locale === 'en' ? 'Features & Options' : locale === 'fr' ? 'Caractéristiques et Options' : '特性与选项'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {vehicleData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {locale === 'en' ? 'Vehicle History' : locale === 'fr' ? 'Historique du Véhicule' : '车辆历史'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">
                            {locale === 'en' ? 'Clean Title' : locale === 'fr' ? 'Titre Propre' : '清洁所有权'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {locale === 'en' ? 'No accidents or damage reported' : locale === 'fr' ? 'Aucun accident ou dommage signalé' : '无事故或损坏报告'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">
                            {locale === 'en' ? 'Single Owner' : locale === 'fr' ? 'Propriétaire Unique' : '单一车主'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {locale === 'en' ? 'Original owner, well maintained' : locale === 'fr' ? 'Propriétaire original, bien entretenu' : '原车主，保养良好'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">
                            {locale === 'en' ? 'Service Records Available' : locale === 'fr' ? 'Registres de Service Disponibles' : '维修记录可用'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {locale === 'en' ? 'Complete maintenance history' : locale === 'fr' ? 'Historique de maintenance complet' : '完整的维护历史'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Pricing and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              {/* Price Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-2">
                      <h1 className="text-2xl font-bold">
                        {vehicleData.brand} {vehicleData.name}
                      </h1>
                      {vehicleData.condition === 'new' && (
                        <Badge>
                          {locale === 'en' ? 'New' : locale === 'fr' ? 'Neuf' : '新车'}
                        </Badge>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {formatPrice(vehicleData.price)}
                    </div>
                  </div>

                  <div className="mb-6 space-y-3 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{vehicleData.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gauge className="h-4 w-4" />
                      <span>{vehicleData.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Fuel className="h-4 w-4" />
                      <span>{vehicleData.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{vehicleData.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full gap-2" size="lg">
                      <Phone className="h-5 w-5" />
                      {locale === 'en' ? 'Call Seller' : locale === 'fr' ? 'Appeler le Vendeur' : '致电卖家'}
                    </Button>
                    <Button className="w-full gap-2 bg-transparent" variant="outline" size="lg">
                      <MessageCircle className="h-5 w-5" />
                      {locale === 'en' ? 'Send Message' : locale === 'fr' ? 'Envoyer un Message' : '发送消息'}
                    </Button>
                    <Button className="w-full gap-2 bg-transparent" variant="outline">
                      <Car className="h-5 w-5" />
                      {locale === 'en' ? 'Schedule Test Drive' : locale === 'fr' ? 'Planifier un Essai' : '预约试驾'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Seller Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    {locale === 'en' ? 'Seller Information' : locale === 'fr' ? 'Informations Vendeur' : '卖家信息'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {vehicleData.sellerInfo.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{vehicleData.sellerInfo.name}</span>
                        {vehicleData.sellerInfo.verified && (
                          <Shield className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ⭐ {vehicleData.sellerInfo.rating} ({vehicleData.sellerInfo.reviews} {locale === 'en' ? 'reviews' : locale === 'fr' ? 'avis' : '评论'})
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card>
                <CardContent className="space-y-3 p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>{locale === 'en' ? 'Verified Seller' : locale === 'fr' ? 'Vendeur Vérifié' : '认证卖家'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{locale === 'en' ? 'Inspected Vehicle' : locale === 'fr' ? 'Véhicule Inspecté' : '已检查车辆'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span>{locale === 'en' ? 'Fast Response' : locale === 'fr' ? 'Réponse Rapide' : '快速响应'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
