import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function ChromeBar({
	className,
	tone = "default",
	children,
}: {
	className?: string;
	tone?: "default" | "subtle";
	children?: ReactNode;
}) {
	return (
		<div
			aria-hidden
			className={cn(
				"relative rounded-sm bg-muted overflow-hidden",
				tone === "subtle" && "bg-muted/70",
				className,
			)}
		>
			<div
				aria-hidden
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage:
						"repeating-linear-gradient(-45deg, var(--secondary-foreground) 0, var(--secondary-foreground) 1px, transparent 1px, transparent 2px)",
				}}
			/>
			{children}
		</div>
	);
}

export { ChromeBar };
