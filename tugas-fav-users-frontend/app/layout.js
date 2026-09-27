import "./globals.css";
import Navbar from "@/components/Navbar";
import { FavoriteProvider } from "@/context/FavoriteContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">
        <FavoriteProvider>
          <Navbar />
          {children}
        </FavoriteProvider>
      </body>
    </html>
  );
}