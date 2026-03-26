'use client';

import { Header } from '../../components/header';
import { useLocale } from '../../components/locale-provider';
import { Card, CardContent } from '../../components/ui/card';
import { Shield, Zap, Users, Globe, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const { locale } = useLocale();

  const values = [
    {
      icon: Shield,
      title:
        locale === 'en'
          ? 'Trust & Transparency'
          : locale === 'fr'
            ? 'Confiance & Transparence'
            : '信任与透明',
      description:
        locale === 'en'
          ? 'Every vehicle is verified and comes with a complete history report'
          : locale === 'fr'
            ? 'Chaque véhicule est vérifié et livré avec un rapport d\'historique complet'
            : '每辆车都经过验证并附带完整的历史报告',
    },
    {
      icon: Zap,
      title:
        locale === 'en'
          ? 'Fast & Efficient'
          : locale === 'fr'
            ? 'Rapide & Efficace'
            : '快速高效',
      description:
        locale === 'en'
          ? 'Streamlined processes to get you in your dream car faster'
          : locale === 'fr'
            ? 'Des processus simplifiés pour vous mettre plus rapidement dans votre voiture de rêve'
            : '简化的流程让您更快拥有梦想之车',
    },
    {
      icon: Users,
      title:
        locale === 'en'
          ? 'Customer First'
          : locale === 'fr'
            ? 'Client d\'Abord'
            : '客户至上',
      description:
        locale === 'en'
          ? 'Dedicated support team available 24/7 in multiple languages'
          : locale === 'fr'
            ? 'Équipe d\'assistance dédiée disponible 24h/24 et 7j/7 en plusieurs langues'
            : '专门的支持团队提供24/7多语言服务',
    },
    {
      icon: Globe,
      title:
        locale === 'en'
          ? 'Global Reach'
          : locale === 'fr'
            ? 'Portée Mondiale'
            : '全球覆盖',
      description:
        locale === 'en'
          ? 'Serving customers in over 30 countries with local expertise'
          : locale === 'fr'
            ? 'Au service de clients dans plus de 30 pays avec une expertise locale'
            : '在30多个国家为客户提供本地专业服务',
    },
    {
      icon: Award,
      title:
        locale === 'en'
          ? 'Quality Assured'
          : locale === 'fr'
            ? 'Qualité Assurée'
            : '质量保证',
      description:
        locale === 'en'
          ? 'Rigorous inspection process ensures only the best vehicles'
          : locale === 'fr'
            ? 'Un processus d\'inspection rigoureux garantit uniquement les meilleurs véhicules'
            : '严格的检查流程确保只有最好的车辆',
    },
    {
      icon: TrendingUp,
      title:
        locale === 'en'
          ? 'Best Value'
          : locale === 'fr'
            ? 'Meilleur Rapport Qualité-Prix'
            : '最佳价值',
      description:
        locale === 'en'
          ? 'Competitive pricing with flexible financing options'
          : locale === 'fr'
            ? 'Prix compétitifs avec des options de financement flexibles'
            : '具有竞争力的定价和灵活的融资选择',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {locale === 'en'
                ? 'About NAJEM AUTO'
                : locale === 'fr'
                  ? 'À Propos de NAJEM AUTO'
                  : '关于NAJEM AUTO'}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {locale === 'en'
                ? 'Revolutionizing the automotive marketplace with cutting-edge technology, transparent pricing, and exceptional customer service since 2026.'
                : locale === 'fr'
                  ? 'Révolutionner le marché automobile avec une technologie de pointe, des prix transparents et un service client exceptionnel depuis 2026.'
                  : '自2026年以来，以尖端技术、透明定价和卓越的客户服务革新汽车市场。'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                {locale === 'en'
                  ? 'Our Mission'
                  : locale === 'fr'
                    ? 'Notre Mission'
                    : '我们的使命'}
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                {locale === 'en'
                  ? 'At NAJEM AUTO, we believe that buying, selling, or renting a vehicle should be a seamless and enjoyable experience. Our mission is to connect people with their perfect vehicles through innovative technology, transparent processes, and personalized service.'
                  : locale === 'fr'
                    ? 'Chez NAJEM AUTO, nous croyons que l\'achat, la vente ou la location d\'un véhicule devrait être une expérience fluide et agréable. Notre mission est de connecter les gens avec leurs véhicules parfaits grâce à une technologie innovante, des processus transparents et un service personnalisé.'
                    : '在NAJEM AUTO，我们相信购买、出售或租赁车辆应该是一种无缝且愉快的体验。我们的使命是通过创新技术、透明流程和个性化服务将人们与他们的完美车辆联系起来。'}
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {locale === 'en'
                  ? 'With support for English, French, and Mandarin, we serve a global community of automotive enthusiasts, ensuring that language is never a barrier to finding your dream vehicle.'
                  : locale === 'fr'
                    ? 'Avec le support de l\'anglais, du français et du mandarin, nous servons une communauté mondiale de passionnés d\'automobiles, garantissant que la langue n\'est jamais un obstacle pour trouver votre véhicule de rêve.'
                    : '通过支持英语、法语和中文，我们为全球汽车爱好者社区提供服务，确保语言永远不会成为找到梦想车辆的障碍。'}
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&h=600&fit=crop"
                alt="Modern car showroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {locale === 'en'
                ? 'Our Core Values'
                : locale === 'fr'
                  ? 'Nos Valeurs Fondamentales'
                  : '我们的核心价值观'}
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {locale === 'en'
                ? 'The principles that guide everything we do'
                : locale === 'fr'
                  ? 'Les principes qui guident tout ce que nous faisons'
                  : '指导我们所做一切的原则'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="mt-2 text-lg text-muted-foreground">
                {locale === 'en'
                  ? 'Years in Business'
                  : locale === 'fr'
                    ? 'Années d\'Activité'
                    : '年业务经验'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50,000+</div>
              <div className="mt-2 text-lg text-muted-foreground">
                {locale === 'en'
                  ? 'Satisfied Customers'
                  : locale === 'fr'
                    ? 'Clients Satisfaits'
                    : '满意客户'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">5,000+</div>
              <div className="mt-2 text-lg text-muted-foreground">
                {locale === 'en'
                  ? 'Vehicles Listed'
                  : locale === 'fr'
                    ? 'Véhicules Listés'
                    : '车辆列表'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">30+</div>
              <div className="mt-2 text-lg text-muted-foreground">
                {locale === 'en'
                  ? 'Countries Served'
                  : locale === 'fr'
                    ? 'Pays Desservis'
                    : '服务国家'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
