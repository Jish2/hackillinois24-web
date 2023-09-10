import { DateFilterProvider } from "@/hooks/useDateFilter";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<DateFilterProvider>{children}</DateFilterProvider>
		</NextUIProvider>
	);
}
