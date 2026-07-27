import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function LabeledBar({
	label,
	width,
	tone = "default",
	height = "h-2.5",
}: {
	label: string;
	width: string;
	tone?: "default" | "subtle";
	height?: string;
}) {
	return (
		<div className="relative w-fit pt-6">
			<AnatomyLabel name={label} className="absolute top-0 left-0" />
			<ChromeBar tone={tone} className={`${height} ${width}`} />
		</div>
	);
}

function SheetAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of sheet parts: Sheet root, SheetTrigger, SheetOverlay backdrop, SheetContent side panel with SheetHeader, SheetTitle, SheetDescription, body content, optional SheetFooter actions, and SheetClose control.">
			<AnatomySection className="bg-muted/20 pb-4">
				<AnatomyLabel name="SheetOverlay" className="mb-6" />

				<div className="relative ml-auto max-w-[72%] pt-8">
					<AnatomyLabel name="SheetContent" className="absolute top-0 left-0" />

					<div className="relative rounded-lg border border-dashed border-primary/25 bg-background p-4 pt-10 shadow-sm">
						<div className="absolute top-3 right-3 pb-1">
							<ChromeBar className="size-4 rounded-md" />
							<AnatomyLabel
								name="SheetClose"
								className="absolute top-0 right-7 whitespace-nowrap"
							/>
						</div>

						<div className="space-y-6 pr-8">
							<div className="relative rounded-md border border-dashed border-primary/20 p-3 pt-8">
								<AnatomyLabel
									name="SheetHeader"
									className="absolute top-2.5 left-2.5"
								/>
								<LabeledBar label="SheetTitle" width="w-20" />
							</div>

							<LabeledBar
								label="SheetDescription"
								width="w-28"
								tone="subtle"
								height="h-2"
							/>

							<div className="space-y-1.5">
								<ChromeBar className="h-2 w-full" />
								<ChromeBar tone="subtle" className="h-2 w-11/12" />
								<ChromeBar className="h-2 w-4/5" />
							</div>

							<div className="relative rounded-md border border-dashed border-primary/20 bg-muted/30 p-3 pt-8">
								<AnatomyLabel
									name="SheetFooter"
									className="absolute top-2.5 left-2.5"
								/>
								<div className="flex justify-end gap-2">
									<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
									<ChromeBar className="h-5 w-12 rounded-md" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional" className="mt-6">
				<AnatomyLabel name="SheetTrigger" className="mb-4" />
				<ChromeBar className="h-6 w-16 rounded-md" />
				<p className="mt-2 text-[10px] text-muted-foreground">
					Opens the sheet — usually a button or link
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { SheetAnatomy };
