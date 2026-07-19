import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { AnatomyLabel } from "./anatomy-label";

function AnatomyContainer({
	name,
	caption,
	className,
	children,
}: {
	name: string;
	caption: string;
	className?: string;
	children: ReactNode;
}) {
	return (
		<figure className={cn("w-full", className)}>
			<div className="relative rounded-xl border-2 border-dashed p-4 pt-9 select-none">
				<AnatomyLabel name={name} className="absolute top-2.5 left-3" />
				{children}
			</div>
			<figcaption className="sr-only">{caption}</figcaption>
		</figure>
	);
}

function AnatomySection({
	className,
	children,
	variant = "default",
}: {
	className?: string;
	children: ReactNode;
	variant?: "default" | "optional";
}) {
	return (
		<div
			className={cn(
				"rounded-lg border border-dashed p-3",
				variant === "default" && "border-primary/25",
				variant === "optional" && "mt-4 border-primary/20",
				className,
			)}
		>
			{children}
		</div>
	);
}

export { AnatomyContainer, AnatomySection };
