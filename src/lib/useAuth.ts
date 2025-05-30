// src/lib/useAuth.ts
"use client";

import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { useRouter } from 'next/navigation';

export function useAuth(redirectIfNotAuthenticated = true) {
  const [user, setUser] = useState<any | null>(null); // any sekarang dikenali oleh TypeScript
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);

      if (redirectIfNotAuthenticated && !session) {
        router.push('/login');
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, redirectIfNotAuthenticated]);

  return { user, loading };
}