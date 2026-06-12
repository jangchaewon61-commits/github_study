import type { Metadata } from 'next';
import { Fredoka, Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin', 'korean'],
  variable: '--font-cute',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Chugumi.me | 내 추구미 찾기',
  description: '당신의 추구미(감성)을 찾고 스타일과 뷰티를 함께 큐레이션하세요',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${fredoka.variable} ${outfit.variable} ${playfair.variable} font-cute bg-light text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
