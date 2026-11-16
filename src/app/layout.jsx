import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aurora-12 — Mission Mars",
  description: "Plus loin que la Terre. Ensemble.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav className="menu">
          <a href="/" className="brand">
            <img
              src="/img/ecusson.png"
              alt="Écusson de la mission Aurora-12"
              className="logo"
            />
            <span className="brand-name">Aurora-12</span>
          </a>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/mission">La Mission</a></li>
            <li><a href="/equipage">Équipage</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}