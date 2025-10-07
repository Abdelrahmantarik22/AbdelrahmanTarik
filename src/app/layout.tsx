import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_component/Nav";
import Footer from "./_component/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrahman Tarik | Front-End Developer",
  description:
    "Abdelrahman Tarik — Front-End Developer specializing in React and Next.js. I build modern, fast, and responsive web applications with clean UI and great user experience. Explore my projects and skills.",
  keywords: [
    "Abdelrahman Tarik",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "UI Developer",
  ],
  authors: [{ name: "Abdelrahman Tarik" }],
  metadataBase: new URL("https://abdelrahman-tarik-d1je.vercel.app/"), 
  openGraph: {
    title: "Abdelrahman Tarik | Front-End Developer",
    description:
      "React & Next.js developer creating fast, modern, and responsive web applications.",
    url: "https://abdelrahman-tarik-d1je.vercel.app/",
    siteName: "Abdelrahman Tarik Portfolio",
    images: [
      {
        url: "/preview.png", 
        width: 1200,
        height: 630,
        alt: "Abdelrahman Tarik Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Tarik | Front-End Developer",
    description:
      "React & Next.js developer creating modern, responsive web applications.",
    images: ["/preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
<meta name="google-site-verification" content="gnKx-6jipzYeiqCX2ZCSt76ltjzsJ_lvYxm4KcBa1kE" />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Nav />
        <main>
        {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
