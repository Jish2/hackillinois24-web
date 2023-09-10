import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="dark">
			<Head>
				<meta charSet="utf-8" />
				<meta name="author" content="jgoon" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
