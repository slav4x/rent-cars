import 'modern-normalize/modern-normalize.css';
import './globals.sass';

import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import Script from 'next/script';
import type { Viewport, Metadata } from 'next';

export const metadata: Metadata = {
	other: {
		language: 'Russian',
		'format-detection': 'telephone=no'
	}
};

import TransitionProvider from '@/components/TransitionProvider';
import LenisProvider from '@/components/LenisProvider';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false
};

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-manrope'
});

const roadRadio = localFont({
	src: [
		{
			path: '../fonts/RoadRadio-Light.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../fonts/RoadRadio-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../fonts/RoadRadio-Bold.woff2',
			weight: '700',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--font-roadradio'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={`${manrope.variable} ${roadRadio.variable}`}>
			<body>
				<LenisProvider>
					<TransitionProvider>{children}</TransitionProvider>
				</LenisProvider>

				<Script id="viewport-fix" strategy="beforeInteractive">
					{`
						const meta = document.querySelector('meta[name="viewport"]');
						if (meta) {
							meta.setAttribute(
								'content',
								'user-scalable=no, width=' +
								(screen.width <= 390 ? 390 : 'device-width')
							);
						}
					`}
				</Script>
			</body>
		</html>
	);
}
