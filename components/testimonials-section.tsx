'use client';

import { useLocale } from '../components/locale-provider';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { locale } = useLocale();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role:
        locale === 'en'
          ? 'Verified Buyer'
          : locale === 'fr'
            ? 'Acheteur Vérifié'
            : '认证买家',
      content:
        locale === 'en'
          ? 'The entire process was seamless. Found my dream Tesla in just 2 days! The multilingual support made everything so easy.'
          : locale === 'fr'
            ? 'Le processus était parfait. J\'ai trouvé ma Tesla de rêve en seulement 2 jours ! Le support multilingue a tout simplifié.'
            : '整个过程非常顺利。我在短短2天内就找到了我梦想中的特斯拉！多语言支持让一切变得如此简单。',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      role:
        locale === 'en'
          ? 'Rental Customer'
          : locale === 'fr'
            ? 'Client Location'
            : '租赁客户',
      content:
        locale === 'en'
          ? 'Rented a BMW X5 for a week. The booking was instant and the vehicle was in pristine condition. Will definitely use again!'
          : locale === 'fr'
            ? 'J\'ai loué un BMW X5 pendant une semaine. La réservation était instantanée et le véhicule était impeccable. Je recommencerai certainement !'
            : '租了一周的宝马X5。预订立即完成，车辆状况完美。一定会再次使用！',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Emma Dubois',
      role:
        locale === 'en'
          ? 'Verified Seller'
          : locale === 'fr'
            ? 'Vendeur Vérifié'
            : '认证卖家',
      content:
        locale === 'en'
          ? 'Bought my Mercedes within a week at a great price. The platform is professional and the support team was incredibly helpful.'
          : locale === 'fr'
            ? 'J\'ai acheté ma Mercedes en une semaine à un excellent prix. La plateforme est professionnelle et l\'équipe d\'assistance était incroyablement serviable.'
            : '我一周之内就以非常优惠的价格买到了奔驰。这个平台非常专业，客服团队也非常乐于助人。',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 py-24 border-t border-neon-cyan/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-black bg-gradient-to-r from-neon-cyan via-slate-100 to-neon-magenta bg-clip-text text-transparent">
            {locale === 'en'
              ? 'Loved By Racers Worldwide'
              : locale === 'fr'
                ? 'Aimé Par Les Coureurs Du Monde'
                : '全球赛手喜爱'}
          </h2>
          <p className="mt-4 text-slate-300">
            {locale === 'en'
              ? 'Join thousands of satisfied customers worldwide'
              : locale === 'fr'
                ? 'Rejoignez des milliers de clients satisfaits dans le monde entier'
                : '加入全球数千名满意的客户'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-neon-cyan/50 transition-all hover:shadow-lg hover:shadow-neon-cyan/20"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-neon-yellow text-neon-yellow" />
                ))}
              </div>
              <p className="mb-6 text-pretty leading-relaxed text-slate-300">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || '/placeholder.svg'}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-neon-cyan/50"
                />
                <div>
                  <div className="font-bold text-slate-100">{testimonial.name}</div>
                  <div className="text-sm text-neon-cyan">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
