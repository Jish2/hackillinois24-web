interface Icon {
	width?: number | string;
	height?: number | string;
	fill?: string;
	stroke?: string;
	strokeWidth?: string;
}

export const MegaphoneIcon = ({ width, height, fill, stroke, strokeWidth }: Icon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width ?? "24"}
		height={height ?? "24"}
		viewBox="0 0 24 24"
		fill={fill ?? "none"}
		stroke={stroke ?? "currentColor"}
		strokeWidth={strokeWidth ?? "2"}
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="m3 11 18-5v12L3 14v-3z" />
		<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
	</svg>
);

export const SunIcon = ({ width, height, fill, stroke, strokeWidth }: Icon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width ?? "24"}
		height={height ?? "24"}
		viewBox="0 0 24 24"
		fill={fill ?? "none"}
		stroke={stroke ?? "currentColor"}
		strokeWidth={strokeWidth ?? "2"}
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="m4.93 4.93 1.41 1.41" />
		<path d="m17.66 17.66 1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="m6.34 17.66-1.41 1.41" />
		<path d="m19.07 4.93-1.41 1.41" />
	</svg>
);

export const MoonIcon = ({ width, height, fill, stroke, strokeWidth }: Icon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width ?? "24"}
		height={height ?? "24"}
		viewBox="0 0 24 24"
		fill={fill ?? "none"}
		stroke={stroke ?? "currentColor"}
		strokeWidth={strokeWidth ?? "2"}
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
);
