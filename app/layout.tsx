import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wellspring Chaplaincy",
  description:
    "Holistic chaplaincy care integrating counseling psychology and Christian ministry. Marriage ministry, Gottman Method, crisis intervention.",
  metadataBase: new URL("https://wellspringchaplain.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
