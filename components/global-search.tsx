'use client';

import React from "react"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '../components/locale-provider';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search } from 'lucide-react';

export function GlobalSearch() {
  const { t } = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buy?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <Input
        type="text"
        placeholder={t.hero.searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-12 pr-12 text-base"
      />
      <Button
        type="submit"
        size="icon"
        className="absolute right-1 top-1 h-10 w-10"
      >
        <Search className="h-5 w-5" />
      </Button>
    </form>
  );
}
