'use client';
import React from 'react';
// import { useLenisScroll } from '@/hooks/useLenisScroll';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  // useLenisScroll();
  return <>{children}</>;
}
