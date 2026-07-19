import { cn } from "@/lib/utils";

function AnatomyLabel({
	name,
	className,
}: {
	name: string;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-tight text-primary",
				className,
			)}
		>
			{name}
		</span>
	);
}

export { AnatomyLabel };
