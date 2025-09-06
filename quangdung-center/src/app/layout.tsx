import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";


export const metadata: Metadata = {
  title: "Quang Dũng Center",
  description: "Trung tâm đào tạo tiếng Nhật từ N5 đến N1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gradient-to-br from-blue-950 to-black text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
