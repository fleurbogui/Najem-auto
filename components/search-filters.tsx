'use client';

import { useState } from 'react';
import { useLocale } from '../components/locale-provider';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Filter, X } from 'lucide-react';

export function SearchFilters() {
  const { t } = useLocale();
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <Button
        variant="outline"
        className="mb-4 w-full gap-2 md:hidden bg-transparent"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter className="h-4 w-4" />
        {t.search.filters}
      </Button>

      {/* Filters Panel */}
      <Card
        className={`${showFilters ? 'block' : 'hidden'} md:sticky md:top-20 md:block`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold">
            {t.search.filters}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setShowFilters(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Brand */}
          <div className="space-y-2">
            <Label>{t.search.brand}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.search.brand} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="tesla">Tesla</SelectItem>
                <SelectItem value="ford">Ford</SelectItem>
                <SelectItem value="chevrolet">Chevrolet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Model */}
          <div className="space-y-2">
            <Label>{t.search.model}</Label>
            <Input placeholder={t.search.model} />
          </div>

          {/* Price Range */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>{t.search.priceRange}</Label>
              <span className="text-sm text-muted-foreground">
                ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </span>
            </div>
            <Slider
              min={0}
              max={200000}
              step={5000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-full"
            />
          </div>

          {/* Year */}
          <div className="space-y-2">
            <Label>{t.search.year}</Label>
            <div className="grid grid-cols-2 gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 30 }, (_, i) => 2025 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 30 }, (_, i) => 2025 - i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <Label>{t.search.fuelType}</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.search.fuelType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gasoline">Gasoline</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="plugin-hybrid">Plug-in Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label>{t.search.location}</Label>
            <Input placeholder={t.search.location} />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-4">
            <Button className="w-full">{t.search.search}</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
