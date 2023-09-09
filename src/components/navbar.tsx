import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { HackIllinoisLogo } from "@/assets/icons";
import Link from "next/link";

import { NAVBAR_ITEMS } from "@/constants";
import { NewsletterInput } from "./newsletter-input";

export function CustomNavbar() {
	return (
		<Navbar isBordered>
			<NavbarBrand>
				<Link href="/">
					<HackIllinoisLogo width={120} height={40} />
				</Link>
				{/* <p className="font-bold text-inherit"></p> */}
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
