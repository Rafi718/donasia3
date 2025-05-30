
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function NavigationLoadingToast() {
  const pathname = usePathname();
  const { toast } = useToast();
  const isInitialLoad = useRef(true);
  const previousPathname = useRef(pathname); // Store the initial pathname for comparison

  useEffect(() => {
    // Skip toast on initial page load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      previousPathname.current = pathname; // Set the initial path
      return;
    }

    // Show toast only if the pathname has actually changed to a new page
    if (pathname !== previousPathname.current) {
      toast({
        title: '⏳ Memuat Halaman...',
        description: `Navigasi ke ${pathname}`,
        duration: 2000, // Duration of the toast in milliseconds
      });
      previousPathname.current = pathname; // Update the ref to the new current pathname
    }
  }, [pathname, toast]);

  return null; // This component does not render any UI itself
}
