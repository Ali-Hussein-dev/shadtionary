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

function DrawerAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of drawer parts: Drawer root, DrawerTrigger, DrawerOverlay backdrop, DrawerContent bottom panel with drag handle, DrawerHeader, DrawerTitle, DrawerDescription, body content, DrawerFooter actions, and DrawerClose control.">
			<AnatomySection className="bg-muted/20 pb-4">
				<AnatomyLabel name="DrawerOverlay" className="mb-6" />

				<div className="relative mx-auto max-w-[88%] pt-8">
					<AnatomyLabel
						name="DrawerContent"
						className="absolute top-0 left-0"
					/>

					<div className="relative rounded-t-lg border border-dashed border-primary/25 bg-popover p-4 pt-10 shadow-sm">
						<ChromeBar
							tone="subtle"
							className="absolute top-2 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full"
						/>

						<div className="space-y-6 pt-4">
							<div className="relative rounded-md border border-dashed border-primary/20 p-3 pt-8">
								<AnatomyLabel
									name="DrawerHeader"
									className="absolute top-2.5 left-2.5"
								/>
								<LabeledBar label="DrawerTitle" width="w-20" />
							</div>

							<LabeledBar
								label="DrawerDescription"
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
									name="DrawerFooter"
									className="absolute top-2.5 left-2.5"
								/>
								<div className="flex justify-end gap-2">
									<div className="relative">
										<AnatomyLabel
											name="DrawerClose"
											className="absolute bottom-full right-0 mb-1 whitespace-nowrap"
										/>
										<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
									</div>
									<ChromeBar className="h-5 w-12 rounded-md" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional" className="mt-6">
				<AnatomyLabel name="DrawerTrigger" className="mb-4" />
				<ChromeBar className="h-6 w-16 rounded-md" />
				<p className="mt-2 text-[10px] text-muted-foreground">
					Opens the drawer — usually a button or link
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { DrawerAnatomy };
