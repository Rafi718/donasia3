"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function MasukPage() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:9002/profile", // Ganti dengan URL setelah login berhasil
      },
    });

    if (error) {
      console.error("Error login:", error.message);
    }
  };
  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:9002/profile", // Ganti dengan URL setelah login berhasil
      },
    });

    if (error) {
      console.error("Error login:", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "http://localhost:9002/profile", // Ganti dengan URL setelah login berhasil
      },
    });

    if (error) {
      console.error("Error login:", error.message);
    }
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            Masuk Akun Donasia.com
          </CardTitle>
          <CardDescription>
            Selamat datang kembali! Silakan masuk ke akun Donasia Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@contoh.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link href="#" className="text-primary hover:underline">
              Lupa kata sandi?
            </Link>
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {/* <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Login
          </Button> */}
          {/* <p className="text-sm text-muted-foreground text-center">
            Belum punya akun?{" "}
            <Link
              href="/daftar"
              className="text-primary hover:underline font-medium"
            >
              Daftar di sini
            </Link>
          </p> */}

          <Button
            variant="outline"
            className="w-full hover:bg-slate-200 hover:text-black"
            onClick={handleGoogleLogin}
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-17.4-1.6-34-4.6-50.2H272v95h146.9c-6.4 34.5-25.4 63.7-54.1 83.2v68h87.4c51-47 81.3-116.1 81.3-196z"
                fill="#4285F4"
              />
              <path
                d="M272 544.3c73.5 0 135.1-24.4 180.2-66.5l-87.4-68c-24.3 16.3-55.3 26-92.8 26-71 0-131.1-47.9-152.5-112.1H30v70.5c45 89.4 137.4 150.1 242 150.1z"
                fill="#34A853"
              />
              <path
                d="M119.5 323.7c-10.5-31.4-10.5-65.6 0-97L30 156.1c-39.3 77.6-39.3 170.5 0 248.1l89.5-70.5z"
                fill="#FBBC05"
              />
              <path
                d="M272 107.7c39.9 0 75.7 13.7 104 40.6l78-78C407.1 24.5 345.5 0 272 0 167.4 0 75 60.6 30 156.1l89.5 70.5c21.4-64.1 81.5-112 152.5-112z"
                fill="#EA4335"
              />
            </svg>
            Masuk dengan Google
          </Button>

          <Button
            variant="outline"
            className="w-full hover:bg-slate-200 hover:text-black mt-[-5px]"
            onClick={handleGithubLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            Masuk dengan Github
          </Button>

          {/* <Button
            variant="outline"
            className="w-full hover:bg-slate-200 hover:text-black mt-[-5px]"
            onClick={handleFacebookLogin}
          >
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook icon</title>
              <path
                fill="#039be5"
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
              />
            </svg>
            Masuk dengan Facebook
          </Button> */}
        </CardFooter>
        <div className="text-center ">
          <p className="text-[10px] mx-[70px] mb-5 p-1.5 bg-yellow-500 rounded-md text-white">Untuk sementara waktu hanya bisa login menggunakan akun diatas!</p>
        </div>
      </Card>
    </div>
  );
}
