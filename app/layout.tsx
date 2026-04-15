import type {Metadata} from 'next';
import { Noto_Serif, Manrope } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Robson Móveis Planejados | Marcenaria de Luxo',
  description: 'Móveis planejados e projetos sob medida com acabamento artesanal.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning className="font-body antialiased">{children}</body>
    </html>
  );
}
