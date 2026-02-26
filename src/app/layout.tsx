import 'modern-normalize/modern-normalize.css';
import './globals.sass';

import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import TransitionProvider from '@/components/TransitionProvider';

const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600'],
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
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
