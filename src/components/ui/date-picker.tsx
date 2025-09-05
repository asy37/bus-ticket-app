'use client';

import * as React from 'react';

import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
}

export function DatePicker({ value, onChange, className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!value}
          className={twMerge(
            'data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal',
            className
          )}
        >
          <CalendarIcon />
          {value ? format(value, 'dd.MM.yyyy') : <span>Tarih Seçiniz</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar locale={tr} mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
