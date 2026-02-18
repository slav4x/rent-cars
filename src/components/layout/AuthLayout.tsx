import Header from './Header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main style={{ minHeight: 'calc(100vh - 72px)' }}>{children}</main>
		</>
	);
}
