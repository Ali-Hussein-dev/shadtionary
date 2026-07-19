import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PreviewChromeProps = {
	children: ReactNode;
	className?: string;
	contentClassName?: string;
	variant?: "card" | "entry";
};

function PreviewChrome({
	children,
	className,
	contentClassName,
	variant = "card",
}: PreviewChromeProps) {
	return (
		<div className={cn("rounded-xl border border-b-[3px] ", className)}>
			<div
				className={cn(
					"relative flex min-h-56 items-center justify-center bg-background px-4",
					contentClassName,
				)}
			>
				<div
					aria-hidden
					className="absolute inset-0 opacity-20"
					style={{
						backgroundImage:
							"repeating-linear-gradient(-45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 3px)",
					}}
				/>
				<div
					className={cn(
						"relative z-10 w-full",
						variant === "card" && "max-w-xs",
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export { PreviewChrome };
