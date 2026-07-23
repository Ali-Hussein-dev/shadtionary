import { cn } from "@/lib/utils";

import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyLabel } from "./anatomy-label";

function CardAnatomy({ className }: { className?: string }) {
	return (
		<figure className={cn("w-full select-none", className)}>
			<div className="space-y-3">
					<div className="relative rounded-lg border border-dashed border-primary/25 p-3 pt-8">
						<AnatomyLabel
							name="CardHeader"
							className="absolute top-2.5 left-2.5"
						/>

						<div className="flex items-start justify-between gap-3">
							<div className="min-w-0 flex-1 space-y-3">
								<div className="relative w-fit pt-6">
									<AnatomyLabel
										name="CardTitle"
										className="absolute top-0 left-0"
									/>
									<ChromeBar className="h-2.5 w-20" />
								</div>
								<div className="relative w-fit pt-6">
									<AnatomyLabel
										name="CardDescription"
										className="absolute top-0 left-0"
									/>
									<ChromeBar tone="subtle" className="h-2 w-28" />
								</div>
							</div>
							<div className="relative shrink-0 pt-6">
								<AnatomyLabel
									name="CardAction"
									className="absolute top-0 right-0 whitespace-nowrap"
								/>
								<ChromeBar className="size-5 rounded-md" />
							</div>
						</div>
					</div>

					<div className="rounded-lg border border-dashed border-primary/25 p-3">
						<AnatomyLabel name="CardContent" className="mb-2.5" />
						<div className="space-y-1.5">
							<ChromeBar className="h-2 w-full" />
							<ChromeBar tone="subtle" className="h-2 w-11/12" />
							<ChromeBar className="h-2 w-4/5" />
						</div>
					</div>

					<div className="rounded-lg border border-dashed border-primary/25 bg-muted/30 p-3">
						<AnatomyLabel name="CardFooter" className="mb-2.5" />
						<div className="flex justify-end gap-2">
							<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
							<ChromeBar className="h-5 w-12 rounded-md" />
						</div>
					</div>
			</div>
			<figcaption className="sr-only">
				Labeled diagram of card parts: Card root, optional CardHeader with
				CardTitle, CardDescription, and CardAction, CardContent body, and
				optional CardFooter.
			</figcaption>
		</figure>
	);
}

export { CardAnatomy };
