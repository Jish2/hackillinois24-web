import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { HackIllinoisLogo } from "@/assets/icons";
import { NewsletterInput } from "@/components/newsletter-input";
import Link from "next/link";

import { NAVBAR_ITEMS } from "@/constants";

export function CustomNavbar() {
	return (
		<Navbar isBordered className="bg-[var(--background)]">
			<NavbarBrand>
				<Link href="/">
					<HackIllinoisLogo width={120} height={40} />
				</Link>
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				{NAVBAR_ITEMS.map((item, index) => (
					<NavbarItem key={index}>
						<Link color="foreground" href={item.href}>
							{item.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent as="div" justify="end">
				<NewsletterInput />
			</NavbarContent>
		</Navbar>
	);
}
