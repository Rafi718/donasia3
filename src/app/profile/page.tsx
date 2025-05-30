"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "../../lib/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Mail, CalendarDays, Edit3, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const mockUser = {
  name: "Pengguna Donasia",
  email: "pengguna@donasia.com",
  joinDate: "2024-01-15T10:00:00.000Z", // ISO string for consistent parsing
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGxhY2Vob2xkZXJ8ZW58MHx8fHwxNzM5NjY2MzIwfDA&fit=crop&w=100&h=100&q=80",
  avatarHint: "profile woman",
  bio: "Pengguna aktif Donasia.com yang bersemangat membantu sesama. Telah berpartisipasi dalam beberapa kampanye sosial dan pendidikan.",
};

export default function ProfilePage() {
  const router = useRouter();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
      console.log('Logout berhasil, redirecting...')

    } else {
      console.error("Gagal logout:", error.message);
    }
  }
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <Toaster />
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700 p-4 animate-fade-in">
            <div className="flex items-center">
              <div className="shrink-0">
                <svg
                  className="shrink-0 size-6 text-blue-500 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <div className="ms-3">
                <p className="text-sm text-gray-700 dark:text-neutral-400">
                  Sedang memuat data...
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!user) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
        role="alert"
        aria-live="assertive"
      >
        <div className="max-w-xs bg-red-100 border border-red-400 rounded-xl shadow-lg p-4 animate-fade-in">
          <div className="flex items-center">
            <div className="shrink-0">
              <svg
                className="shrink-0 size-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ms-3">
              <p className="text-sm text-red-700">
                Harap login terlebih dahulu.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formattedJoinDate = new Date(mockUser.joinDate).toLocaleDateString(
    "id-ID",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  // Ambil data dari user
  const { email, user_metadata } = user;
  const fullName = user_metadata?.name || "Nama Tidak Diketahui"; // Ambil nama dari metadata
  const phone = user_metadata?.confirmed_at || "Nomor Tidak Diketahui"; // Ambil nama dari metadata
  const avatarUrl = user_metadata?.avatar_url || ""; // Ambil URL avatar jika ada

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-160px)]">
      <Button variant="outline" size="sm" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Summary & Avatar */}
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary ring-offset-2">
                <AvatarImage
                  src={avatarUrl}
                  alt={fullName}
                  data-ai-hint={mockUser.avatarHint}
                />
                <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                  {fullName.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl text-primary">
                {fullName}
              </CardTitle>
              <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Edit3 className="mr-2 h-4 w-4" />
                Edit Profil (Segera Hadir)
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Bio Singkat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{mockUser.bio}</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Detailed Info & Activity */}
        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Informasi Akun
              </CardTitle>
              <CardDescription>
                Detail akun dan preferensi Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <User className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                  <p className="font-medium text-foreground">{fullName}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Alamat Email</p>
                  <p className="font-medium text-foreground">{email}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center">
                <CalendarDays className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Bergabung Sejak
                  </p>
                  <p className="font-medium text-foreground">{phone}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="link"
                className="text-destructive hover:text-destructive/80 px-0 p-5 bg-red-500 text-white"
                onClick={signOut}
              >
                Logout
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Riwayat Donasi
              </CardTitle>
              <CardDescription>
                Daftar donasi yang telah Anda lakukan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fitur riwayat donasi akan segera tersedia. Anda akan dapat
                melihat semua kontribusi Anda di sini.
              </p>
              {/* Placeholder for donation history list */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
