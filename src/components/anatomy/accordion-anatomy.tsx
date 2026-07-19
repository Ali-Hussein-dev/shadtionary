import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyLabel } from "./anatomy-label";

function AccordionAnatomy({ className }: { className?: string }) {
	return (
		<figure className={cn("w-full", className)}>
			<div className="relative rounded-xl border-2 border-dashed border-primary/35 bg-card p-4 pt-9 select-none">
				<AnatomyLabel name="Accordion" className="absolute top-2.5 left-3" />

				<div className="space-y-3">
					<div className="rounded-lg border border-dashed border-primary/25 p-3">
						<AnatomyLabel name="AccordionItem" className="mb-3" />

						<div className="relative mb-3 flex items-center justify-between gap-2 border-b border-border/60 pb-2.5">
							<ChromeBar className="h-2.5 w-1/3" />
							<div className="flex items-center gap-2">
								<AnatomyLabel name="AccordionTrigger" />
								<div className="relative">
									<HugeiconsIcon
										icon={ArrowDown01Icon}
										className="size-3.5 text-muted-foreground"
										strokeWidth={2}
										aria-hidden
									/>
									
								</div>
							</div>
						</div>

						<div className="rounded-md border border-dashed border-primary/20 p-2.5">
							<AnatomyLabel name="AccordionContent" className="mb-2" />
							<div className="space-y-1.5">
								<ChromeBar className="h-1.5 w-full" />
								<ChromeBar tone="subtle" className="h-1.5 w-10/12" />
								<ChromeBar className="h-1.5 w-4/5" />
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-dashed border-primary/25 p-3">
						<div className="flex items-center justify-between gap-2">
							<ChromeBar className="h-2.5 w-1/3" />
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className="size-3.5 text-muted-foreground"
								strokeWidth={2}
								aria-hidden
							/>
						</div>
						<p className="mt-2 text-[10px] text-muted-foreground">
							AccordionItem — collapsed
						</p>
					</div>
				</div>
			</div>
			<figcaption className="sr-only">
				Labeled diagram of accordion parts: Accordion root, AccordionItem
				panels, AccordionTrigger headers with optional indicator icons, and
				AccordionContent regions for expanded body text.
			</figcaption>
		</figure>
	);
}

export { AccordionAnatomy };
