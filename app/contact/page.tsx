'use client';

import { Header } from '../../components/header';
import { useLocale } from '../../components/locale-provider';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const { locale } = useLocale();

  const contactInfo = [
    {
      icon: Phone,
      title:
        locale === 'en'
          ? 'Phone'
          : locale === 'fr'
            ? 'Téléphone'
            : '电话',
      details: ['+225 XXX XXX-XXXX', '+225 XXX XXX-XXXX', '+225 XXX XXX-XXXX'],
    },
    {
      icon: Mail,
      title: locale === 'en' ? 'Email' : locale === 'fr' ? 'Email' : '电子邮件',
      details: ['support../..najemautosupport.com', 'sales../..najemautosales.com'],
    },
    {
      icon: MapPin,
      title:
        locale === 'en'
          ? 'Address'
          : locale === 'fr'
            ? 'Adresse'
            : '地址',
      details: [
        locale === 'en'
          ? '123 Auto Boulevard, San Francisco, CA 94102'
          : locale === 'fr'
            ? '123 Boulevard Auto, San Francisco, CA 94102'
            : '美国加州旧金山汽车大道123号 94102',
      ],
    },
    {
      icon: Clock,
      title:
        locale === 'en'
          ? 'Business Hours'
          : locale === 'fr'
            ? 'Heures d\'Ouverture'
            : '营业时间',
      details: [
        locale === 'en'
          ? 'Mon-Fri: 9:00 AM - 6:00 PM'
          : locale === 'fr'
            ? 'Lun-Ven: 9h00 - 18h00'
            : '周一至周五：上午9:00 - 下午6:00',
        locale === 'en'
          ? 'Sat-Sun: 10:00 AM - 4:00 PM'
          : locale === 'fr'
            ? 'Sam-Dim: 10h00 - 16h00'
            : '周六至周日：上午10:00 - 下午4:00',
      ],
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
                ? 'Contact Us'
                : locale === 'fr'
                  ? 'Contactez-Nous'
                  : '联系我们'}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {locale === 'en'
                ? 'Have questions? We\'re here to help. Reach out to our multilingual support team anytime.'
                : locale === 'fr'
                  ? 'Des questions ? Nous sommes là pour vous aider. Contactez notre équipe de support multilingue à tout moment.'
                  : '有疑问？我们随时为您提供帮助。随时联系我们的多语言支持团队。'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-balance text-2xl font-bold">
                  {locale === 'en'
                    ? 'Get in Touch'
                    : locale === 'fr'
                      ? 'Prenez Contact'
                      : '取得联系'}
                </h2>
                <p className="mt-2 text-pretty text-muted-foreground">
                  {locale === 'en'
                    ? 'We\'re available in English, French, and Mandarin'
                    : locale === 'fr'
                      ? 'Nous sommes disponibles en anglais, français et mandarin'
                      : '我们提供英语、法语和中文服务'}
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-2 font-semibold">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Live Chat */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">
                        {locale === 'en'
                          ? 'Live Chat'
                          : locale === 'fr'
                            ? 'Chat en Direct'
                            : '在线聊天'}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {locale === 'en'
                          ? 'Chat with our support team in real-time'
                          : locale === 'fr'
                            ? 'Chattez avec notre équipe d\'assistance en temps réel'
                            : '与我们的支持团队实时聊天'}
                      </p>
                      <Button size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        {locale === 'en'
                          ? 'Start Chat'
                          : locale === 'fr'
                            ? 'Démarrer le Chat'
                            : '开始聊天'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {locale === 'en'
                      ? 'Send us a Message'
                      : locale === 'fr'
                        ? 'Envoyez-nous un Message'
                        : '给我们留言'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {locale === 'en'
                          ? 'First Name'
                          : locale === 'fr'
                            ? 'Prénom'
                            : '名'}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={
                          locale === 'en'
                            ? 'John'
                            : locale === 'fr'
                              ? 'Jean'
                              : '明'
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {locale === 'en'
                          ? 'Last Name'
                          : locale === 'fr'
                            ? 'Nom'
                            : '姓'}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={
                          locale === 'en'
                            ? 'Doe'
                            : locale === 'fr'
                              ? 'Dupont'
                              : '小'
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {locale === 'en' ? 'Email' : locale === 'fr' ? 'Email' : '电子邮件'}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={
                        locale === 'en'
                          ? 'john.doe../..example.com'
                          : locale === 'fr'
                            ? 'jean.dupont../..exemple.fr'
                            : 'xiaoming../..example.com'
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {locale === 'en'
                        ? 'Phone Number'
                        : locale === 'fr'
                          ? 'Numéro de Téléphone'
                          : '电话号码'}
                    </Label>
                    <Input id="phone" type="tel" placeholder="+225 XXX XXX-XXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {locale === 'en' ? 'Subject' : locale === 'fr' ? 'Sujet' : '主题'}
                    </Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue
                          placeholder={
                            locale === 'en'
                              ? 'Select a subject'
                              : locale === 'fr'
                                ? 'Sélectionner un sujet'
                                : '选择主题'
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">
                          {locale === 'en'
                            ? 'Buying a Vehicle'
                            : locale === 'fr'
                              ? 'Acheter un Véhicule'
                              : '购买车辆'}
                        </SelectItem>
                        <SelectItem value="renting">
                          {locale === 'en'
                            ? 'Renting a Vehicle'
                            : locale === 'fr'
                              ? 'Louer un Véhicule'
                              : '租赁车辆'}
                        </SelectItem>
                        <SelectItem value="support">
                          {locale === 'en'
                            ? 'Technical Support'
                            : locale === 'fr'
                              ? 'Support Technique'
                              : '技术支持'}
                        </SelectItem>
                        <SelectItem value="other">
                          {locale === 'en' ? 'Other' : locale === 'fr' ? 'Autre' : '其他'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {locale === 'en' ? 'Message' : locale === 'fr' ? 'Message' : '消息'}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={
                        locale === 'en'
                          ? 'Tell us how we can help you...'
                          : locale === 'fr'
                            ? 'Dites-nous comment nous pouvons vous aider...'
                            : '告诉我们如何帮助您...'
                      }
                      rows={6}
                    />
                  </div>

                  <Button className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    {locale === 'en'
                      ? 'Send Message'
                      : locale === 'fr'
                        ? 'Envoyer le Message'
                        : '发送消息'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197805389307!2d-122.41941968468208!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="NAJEM AUTO Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
