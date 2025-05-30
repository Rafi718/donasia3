"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { User } from '@supabase/supabase-js'; // Impor tipe User dari Supabase
import { useRouter } from 'next/navigation';

export default function Donasi() {
  const [user, setUser] = useState<User | null>(null); // Tentukan tipe sebagai User | null
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null); // Ini sekarang aman
      setLoading(false);

      if (session) {
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        router.push('/login');
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null); // Ini juga aman
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Harap login terlebih dahulu.</p>;
  }

  return (
    <div>
      <h1>Selamat Datang, {user.email}!</h1>
      <h1>No, {user.id}!</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </div>
  );
}