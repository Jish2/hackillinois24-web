import { Providers } from "@/components/providers";
import { CustomNavbar } from "@/components/navbar";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Head>
				<title>HackIllinois Schedule</title>
			</Head>
			<CustomNavbar />
			<Component {...pageProps} className={inter.className} />
		</Providers>
	);
}
