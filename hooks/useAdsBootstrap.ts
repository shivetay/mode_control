import { initializeAds } from '@/lib/ads/initAds';
import { useEffect } from 'react';

export function useAdsBootstrap() {
  useEffect(() => {
    void initializeAds();
  }, []);
}
