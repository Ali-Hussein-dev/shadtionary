import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 500;

export function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		function onScroll() {
			setVisible(window.scrollY > SCROLL_THRESHOLD);
		}

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<Button
			variant="outline"
			size="icon-lg"
			onClick={scrollToTop}
			aria-label="Scroll to top"
			className={cn(
				"fixed right-6 md:right-3 bottom-6 z-40 transition-all duration-200 rounded-full",
				visible
					? "pointer-events-auto scale-100 opacity-100"
					: "pointer-events-none scale-95 opacity-0",
			)}
		>
			<HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} />
			<span className="sr-only">Scroll to top</span>
		</Button>
	);
}
