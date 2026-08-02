import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

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
				className="flex size-6 items-center justify-center rounded-full border border-background/40 bg-background/15"
			>
				<HugeiconsIcon icon={icon} className="size-3" strokeWidth={2.5} />
			</div>
			<AnatomyLabel
				name={label}
				className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 whitespace-nowrap"
			/>
		</div>
	);
}

function LightboxAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of lightbox parts: Overlay backdrop, Content viewport, Media, Close, Previous and Next navigation, Caption, and Counter.">
			<AnatomySection className="relative bg-foreground/80 pb-6 pt-4">
				<AnatomyLabel name="Overlay" className="mb-4 text-background" />

				<div className="relative mx-auto max-w-[84%] pt-8">
					<AnatomyLabel
						name="Content"
						className="absolute top-0 left-0 text-background"
					/>

					<NavButton
						direction="previous"
						label="Previous"
						className="-left-3"
					/>
					<NavButton direction="next" label="Next" className="-right-3" />

					<div className="relative rounded-md border border-dashed border-background/40 p-3 pt-8">
						<div className="absolute top-2 right-2">
							<ChromeBar className="size-4 rounded-md bg-background/30" />
							<AnatomyLabel
								name="Close"
								className="absolute top-0 right-6 whitespace-nowrap text-background"
							/>
						</div>

						<div className="relative aspect-4/3 rounded-md bg-background/20">
							<AnatomyLabel
								name="Media"
								className="absolute bottom-2 left-2 text-background"
							/>
						</div>

						<div className="relative mt-3 space-y-1.5 pt-6">
							<AnatomyLabel
								name="Caption"
								className="absolute top-0 left-0 text-background"
							/>
							<ChromeBar className="h-2 w-2/5 bg-background/35" />
							<ChromeBar
								tone="subtle"
								className="h-1.5 w-1/4 bg-background/20"
							/>
						</div>
					</div>
				</div>

				<div className="relative mx-auto mt-4 w-fit pt-6">
					<ChromeBar className="h-2 w-10 bg-background/30" />
					<AnatomyLabel
						name="Counter"
						className="absolute top-0 left-0 text-background"
					/>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional" className="mt-6">
				<AnatomyLabel name="Trigger" className="mb-4" />
				<div className="aspect-5/3 w-16 rounded-md bg-muted" />
				<p className="mt-2 text-[10px] text-muted-foreground">
					Opens the lightbox — usually a thumbnail or gallery tile
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { LightboxAnatomy };
