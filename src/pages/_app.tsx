import { Providers } from "@/components/providers";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Inter } from "next/font/google";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Loading } from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

const DynamicNavbar = dynamic(() => import("../components/navbar"), {
	loading: () => <Loading />,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Head>
				<title>HackIllinois Schedule</title>
			</Head>
			<DynamicNavbar />
			<Component {...pageProps} className={inter.className} />
		</Providers>
	);
}
