import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function PopoverAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of popover parts: Popover root wrapping PopoverTrigger and PopoverContent panel with header, form field, and action buttons.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel name="Popover" className="absolute top-2 left-2.5" />

					<div className="relative mt-2 space-y-3">
						<div className="relative w-fit pt-7">
							<AnatomyLabel
								name="PopoverTrigger"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<div className="rounded-md border bg-card px-3 py-1.5 shadow-sm">
								<ChromeBar className="h-2 w-12" />
							</div>
						</div>

						<div className="relative rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
							<AnatomyLabel
								name="PopoverContent"
								className="absolute top-2 left-2.5"
							/>

							<div className="space-y-2.5 rounded-md border bg-card p-2.5 shadow-sm">
								<div className="relative rounded-md border border-dashed border-primary/20 p-2 pt-6">
									<AnatomyLabel
										name="PopoverHeader"
										className="absolute top-1.5 left-2"
									/>
									<div className="space-y-1.5">
										<div className="relative w-fit pt-6">
											<AnatomyLabel
												name="PopoverTitle"
												className="absolute top-0 left-0 whitespace-nowrap"
											/>
											<ChromeBar className="h-2 w-16" />
										</div>
										<div className="relative w-fit pt-6">
											<AnatomyLabel
												name="PopoverDescription"
												className="absolute top-0 left-0 whitespace-nowrap"
											/>
											<ChromeBar tone="subtle" className="h-1.5 w-28" />
										</div>
									</div>
								</div>

								<div className="space-y-1.5">
									<ChromeBar tone="subtle" className="h-1.5 w-1/4" />
									<div className="rounded-md border bg-muted/40 px-2 py-1.5">
										<ChromeBar className="h-2 w-full" />
									</div>
								</div>

								<div className="flex justify-end gap-1.5">
									<ChromeBar tone="subtle" className="h-4 w-8 rounded-md" />
									<div className="relative w-fit pt-6">
										<AnatomyLabel
											name="PopoverClose"
											className="absolute top-0 right-0 whitespace-nowrap"
										/>
										<ChromeBar className="h-4 w-10 rounded-md" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { PopoverAnatomy };
