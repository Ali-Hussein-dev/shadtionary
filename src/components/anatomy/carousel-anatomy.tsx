import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import { AnatomyLabel } from "./anatomy-label";

function ChromeSlide({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("aspect-5/3 rounded-md bg-muted", className)}
		/>
	);
}

function NavButton({
	direction,
	label,
	className,
}: {
	direction: "previous" | "next";
	label: string;
	className?: string;
}) {
	const icon = direction === "previous" ? ArrowLeft01Icon : ArrowRight01Icon;

	return (
		<div className={cn("absolute top-1/2 z-10 -translate-y-1/2", className)}>
			<div
				aria-hidden
				className="flex size-7 items-center justify-center rounded-full border bg-background shadow-sm"
			>
				<HugeiconsIcon icon={icon} className="size-3.5" strokeWidth={2} />
			</div>
			<AnatomyLabel
				name={label}
				className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 whitespace-nowrap"
			/>
		</div>
	);
}

function CarouselAnatomy({ className }: { className?: string }) {
	return (
		<figure className={cn("w-full", className)}>
			<div className="relative rounded-xl border-2 border-dashed border-primary/35 bg-card p-4 pt-9 select-none">
				<AnatomyLabel name="Carousel" className="absolute top-2.5 left-3" />

				<div className="relative px-7">
					<NavButton
						direction="previous"
						label="CarouselPrevious"
						className="left-0"
					/>
					<NavButton direction="next" label="CarouselNext" className="right-0" />

					<div className="overflow-hidden rounded-lg border border-dashed border-primary/25 p-2.5">
						<AnatomyLabel name="CarouselContent" className="mb-2" />

						<div className="flex gap-2">
							<div className="relative min-w-0 shrink-0 basis-[68%]">
								<ChromeSlide />
								<AnatomyLabel
									name="CarouselItem"
									className="absolute bottom-2 left-2"
								/>
							</div>
							<ChromeSlide className="min-w-0 shrink-0 basis-[52%] opacity-55" />
							<ChromeSlide className="min-w-0 shrink-0 basis-[36%] opacity-30" />
						</div>

						<p className="mt-2 text-[10px] text-muted-foreground">
							Track — flex row inside content that slides
						</p>
					</div>
				</div>

				<div className="mt-8 flex flex-col items-center gap-1.5">
					<div aria-hidden className="flex gap-1.5">
						<span className="size-2 rounded-full bg-primary" />
						<span className="size-2 rounded-full bg-muted" />
						<span className="size-2 rounded-full bg-muted" />
					</div>
					<AnatomyLabel name="Indicators" />
				</div>
			</div>
			<figcaption className="sr-only">
				Labeled diagram of carousel parts: Carousel root container,
				CarouselContent viewport, CarouselItem slides, optional
				CarouselPrevious and CarouselNext controls, and optional dot
				indicators.
			</figcaption>
		</figure>
	);
}

export { CarouselAnatomy };
