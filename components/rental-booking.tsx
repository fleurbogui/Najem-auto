'use client'

import { useState } from 'react'
import { Calendar } from '../components/ui/calendar'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { CalendarIcon, MapPin, User } from 'lucide-react'
import { format } from 'date-fns'
import { useLocale } from '../components/locale-provider'

interface RentalBookingProps {
  vehicleId: string
  dailyRate: number
  vehicleName: string
}

export function RentalBooking({ vehicleId, dailyRate, vehicleName }: RentalBookingProps) {
  const { t } = useLocale()
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [pickupLocation, setPickupLocation] = useState('')
  const [returnLocation, setReturnLocation] = useState('')
  const [driverAge, setDriverAge] = useState('')

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 0
    const diff = returnDate.getTime() - pickupDate.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  const days = calculateDays()
  const subtotal = days * dailyRate
  const insurance = days * 15
  const taxes = subtotal * 0.13
  const total = subtotal + insurance + taxes

  const handleBooking = () => {
    console.log(' Booking details:', {
      vehicleId,
      pickupDate,
      returnDate,
      pickupLocation,
      returnLocation,
      driverAge,
      total,
    })
    // alert(t('bookingConfirmed'))
  }

  const locations = [
    'Downtown - City Center',
    'Airport Terminal 1',
    'Airport Terminal 2',
    'North Station',
    'South Station',
    'West End Branch',
  ]

  return (
    <Card className="sticky top-24">
      <CardHeader>
        {/* <CardTitle className="text-2xl">{t('bookRental')}</CardTitle> */}
        <CardDescription>
          <span className="text-3xl font-bold text-foreground">
            ${dailyRate}
          </span>
          {/* <span className="text-muted-foreground"> /{t('day')}</span> */}
        </CardDescription>
      </CardHeader>
      {/* <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {t('pickupDate')}
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                {pickupDate ? format(pickupDate, 'PPP') : <span>{t('selectDate')}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={pickupDate}
                onSelect={setPickupDate}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {t('returnDate')}
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                {returnDate ? format(returnDate, 'PPP') : <span>{t('selectDate')}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                disabled={(date) => !pickupDate || date < pickupDate}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {t('pickupLocation')}
          </Label>
          <Select value={pickupLocation} onValueChange={setPickupLocation}>
            <SelectTrigger>
              <SelectValue placeholder={t('selectLocation')} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {t('returnLocation')}
          </Label>
          <Select value={returnLocation} onValueChange={setReturnLocation}>
            <SelectTrigger>
              <SelectValue placeholder={t('selectLocation')} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {t('driverAge')}
          </Label>
          <Input
            type="number"
            placeholder="25"
            value={driverAge}
            onChange={(e) => setDriverAge(e.target.value)}
            min="18"
          />
        </div>

        {days > 0 && (
          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{days} {t('days')} × ${dailyRate}</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t('insurance')}</span>
              <span className="font-medium">${insurance.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t('taxesFees')}</span>
              <span className="font-medium">${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>{t('total')}</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </CardContent> */}
      {/* <CardFooter>
        <Button
          className="w-full"
          size="lg"
          onClick={handleBooking}
          disabled={!pickupDate || !returnDate || !pickupLocation || !returnLocation || !driverAge}
        >
          {t('confirmBooking')}
        </Button>
      </CardFooter> */}
    </Card>
  )
}
