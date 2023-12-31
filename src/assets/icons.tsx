interface Icon {
	width?: number | string;
	height?: number | string;
	fill?: string;
	stroke?: string;
	strokeWidth?: string;
	className?: string;
}

export const MegaphoneIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Megaphone icon"
	>
		<path d="m3 11 18-5v12L3 14v-3z" />
		<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
	</svg>
);

export const SunIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Sun icon"
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

export const MoonIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Moon icon"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
);

export const LocationIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Location icon"
	>
		<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
		<circle cx="12" cy="10" r="3" />
	</svg>
);

export const LockIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Lock icon"
	>
		<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
		<path d="M7 11V7a5 5 0 0 1 10 0v4" />
	</svg>
);

export const ReloadIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Reload icon"
	>
		<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
		<path d="M21 3v5h-5" />
	</svg>
);

export const EmailIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Email icon"
	>
		<rect width="16" height="13" x="6" y="4" rx="2" />
		<path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
		<path d="M2 8v11c0 1.1.9 2 2 2h14" />
	</svg>
);

export const SendIcon = ({ width, height, fill, stroke, strokeWidth, className }: Icon) => (
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
		className={className}
		aria-label="Send icon"
	>
		<path d="m22 2-7 20-4-9-9-4Z" />
		<path d="M22 2 11 13" />
	</svg>
);

export const HackIllinoisLogo = ({ width, height }: Icon) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width ?? "149"}
		height={height ?? "49"}
		viewBox="0 0 149 49"
		fill="none"
		aria-label="HackIllinois logo"
	>
		<path
			d="M44.6587 0.959839H49.0762V7.86632H55.9087V0.959839H60.3262V17.8923H55.9087V11.3983H49.0762V17.8923H44.6587V0.959839V0.959839Z"
			fill="white"
		/>
		<path
			d="M76.0615 17.8923L74.899 14.9003H67.579L66.3939 17.8923H61.8564L69.124 0.959839H73.669L80.7715 17.8923H76.0615ZM68.914 11.5108H73.6015L71.2839 5.47417L68.914 11.5108Z"
			fill="white"
		/>
		<path
			d="M92.1264 5.05422C91.3689 4.64178 90.6188 4.43931 89.8838 4.43931C89.0288 4.43931 88.2563 4.64928 87.5513 5.07672C86.8538 5.50415 86.2989 6.08907 85.8939 6.83896C85.4889 7.58885 85.2864 8.42122 85.2864 9.33609C85.2864 10.251 85.4889 11.0833 85.8939 11.8332C86.2989 12.5831 86.8463 13.168 87.5513 13.5955C88.2488 14.0229 89.0288 14.2329 89.8838 14.2329C90.5738 14.2329 91.3014 14.0529 92.0589 13.7004C92.8164 13.348 93.4913 12.8606 94.0913 12.2532L96.6788 15.0277C95.7638 15.9951 94.6688 16.76 93.4088 17.3374C92.1413 17.9073 90.8964 18.1923 89.6514 18.1923C87.9788 18.1923 86.4639 17.8098 85.1064 17.03C83.7564 16.2576 82.6914 15.2002 81.9189 13.8654C81.1464 12.5306 80.7563 11.0308 80.7563 9.37358C80.7563 7.73133 81.1538 6.24655 81.9413 4.92674C82.7288 3.60694 83.8164 2.56459 85.1889 1.8147C86.5689 1.05731 88.1064 0.682373 89.8164 0.682373C91.0689 0.682373 92.3139 0.944831 93.5364 1.46975C94.7589 1.99468 95.8014 2.70707 96.6489 3.60694L94.0913 6.69648C93.5363 6.01408 92.8839 5.46666 92.1264 5.05422Z"
			fill="white"
		/>
		<path
			d="M114.829 17.8923H109.541L105.094 11.3233L102.971 13.693V17.8923H98.5537V0.959839H102.971V8.30125L109.324 0.959839H114.446L108.169 7.9413L114.829 17.8923Z"
			fill="white"
		/>
		<path d="M44.5913 30.783H49.0088V47.7155H44.5913V30.783Z" fill="white" />
		<path d="M52.3013 30.783H56.7188V43.9435H63.8963V47.708H52.3013V30.783V30.783Z" fill="white" />
		<path d="M67.249 30.783H71.6665V43.9435H78.844V47.708H67.249V30.783V30.783Z" fill="white" />
		<path d="M81.3115 30.783H85.729V47.7155H81.3115V30.783Z" fill="white" />
		<path
			d="M101.044 30.783H105.146V47.7155H101.284L93.6037 37.5995V47.7155H89.4712V30.783H93.3637L101.066 40.974L101.044 30.783Z"
			fill="white"
		/>
		<path
			d="M121.661 31.6528C123.056 32.4102 124.151 33.4451 124.946 34.7649C125.741 36.0847 126.139 37.5695 126.139 39.2117C126.139 40.869 125.741 42.3687 124.946 43.7035C124.151 45.0383 123.056 46.0957 121.661 46.8681C120.266 47.6405 118.714 48.0304 116.989 48.0304C115.264 48.0304 113.704 47.648 112.316 46.8831C110.921 46.1182 109.826 45.0608 109.031 43.7185C108.236 42.3762 107.839 40.8765 107.839 39.2117C107.839 37.5695 108.236 36.0847 109.031 34.7649C109.826 33.4451 110.921 32.4027 112.316 31.6528C113.711 30.8954 115.264 30.5205 116.989 30.5205C118.714 30.513 120.266 30.8954 121.661 31.6528ZM114.709 34.9148C113.989 35.3498 113.426 35.9497 113.006 36.7146C112.586 37.4795 112.376 38.3193 112.376 39.2342C112.376 40.1716 112.586 41.0189 113.014 41.7838C113.441 42.5487 114.011 43.1486 114.716 43.5986C115.421 44.041 116.201 44.266 117.034 44.266C117.874 44.266 118.639 44.0485 119.344 43.5986C120.041 43.1561 120.596 42.5487 121.001 41.7838C121.406 41.0189 121.609 40.1716 121.609 39.2342C121.609 38.3193 121.406 37.472 121.001 36.7146C120.596 35.9497 120.049 35.3498 119.344 34.9148C118.646 34.4799 117.874 34.2624 117.034 34.2624C116.201 34.2624 115.421 34.4799 114.709 34.9148Z"
			fill="white"
		/>
		<path d="M128.126 30.783H132.544V47.7155H128.126V30.783Z" fill="white" />
		<path
			d="M144.394 34.5699C143.374 34.2324 142.512 34.06 141.822 34.06C141.274 34.06 140.847 34.1575 140.532 34.3599C140.217 34.5624 140.059 34.8549 140.059 35.2448C140.059 35.6122 140.194 35.9272 140.472 36.1747C140.742 36.4221 141.087 36.6246 141.484 36.7821C141.889 36.9395 142.482 37.1345 143.269 37.3745C144.447 37.7119 145.414 38.0494 146.179 38.3868C146.944 38.7243 147.604 39.2417 148.144 39.9466C148.692 40.644 148.969 41.5589 148.969 42.6837C148.969 43.8085 148.669 44.7759 148.077 45.5708C147.484 46.3657 146.667 46.9656 145.624 47.3705C144.582 47.7754 143.427 47.9779 142.159 47.9779C140.757 47.9779 139.362 47.7305 137.967 47.243C136.572 46.7556 135.372 46.0807 134.359 45.2258L136.077 41.7688C136.932 42.5262 137.944 43.1411 139.107 43.6286C140.277 44.1085 141.312 44.3559 142.212 44.3559C142.872 44.3559 143.389 44.236 143.772 43.996C144.147 43.756 144.342 43.4036 144.342 42.9312C144.342 42.5412 144.199 42.2263 143.922 41.9638C143.637 41.7088 143.284 41.4989 142.857 41.3489C142.429 41.1989 141.829 41.0189 141.057 40.809C139.894 40.4865 138.942 40.1641 138.184 39.8341C137.427 39.5042 136.782 39.0017 136.242 38.3343C135.702 37.6669 135.432 36.7746 135.432 35.6647C135.432 34.6224 135.709 33.7 136.264 32.9126C136.819 32.1253 137.607 31.5178 138.634 31.0904C139.654 30.663 140.847 30.453 142.197 30.453C143.419 30.453 144.627 30.6255 145.819 30.9704C147.012 31.3154 148.054 31.7803 148.962 32.3577L147.297 35.8822C146.374 35.3498 145.414 34.9148 144.394 34.5699Z"
			fill="white"
		/>
		<path d="M9.24519 19.2646H23.0377V10.5434H32.1577V0H6.1252L0.0126953 10.5434H9.24519V19.2646Z" fill="#F15C4B" />
		<path d="M23.0364 28.4733H9.24391V37.1945H0.00390625V47.738H26.2764L32.1564 37.1945H23.0364V28.4733Z" fill="#F15C4B" />
	</svg>
);
