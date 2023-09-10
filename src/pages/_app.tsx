import { Providers } from "@/components/providers";
import { CustomNavbar } from "@/components/navbar";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<CustomNavbar />
			<Component {...pageProps} className={inter.className} />
		</Providers>
	);
}
