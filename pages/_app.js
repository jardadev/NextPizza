import '../styles/globals.css';
import AppLayout from '../components/AppLayout';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	if (Component.getLayout) {
		return Component.getLayout(
			<>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</>
		);
	}

	return (
		<>
			<SessionProvider session={session}>
				<AppLayout>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</AppLayout>
			</SessionProvider>
		</>
	);
}
