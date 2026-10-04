import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/context/FavoritesContext"; // <-- 1. Impor FavoritesProvider

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MyWebsite — Build something meaningful",
  description:
    "We help individuals and businesses build modern, simple, and useful digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        {/* 2. Bungkus semua komponen di dalam body menggunakan FavoritesProvider */}
        <FavoritesProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}