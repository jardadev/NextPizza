import '../styles/globals.css';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<SessionProvider session={session}>
				<Layout>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</Layout>
			</SessionProvider>
		</>
	);
}
