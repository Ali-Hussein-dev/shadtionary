import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function NavigationMenuAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of navigation menu parts: NavigationMenu root wrapping NavigationMenuList with NavigationMenuItem entries — NavigationMenuTrigger plus NavigationMenuContent with NavigationMenuLink rows, a plain NavigationMenuLink item, NavigationMenuIndicator, and NavigationMenuPositioner for the shared popup viewport.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel
						name="NavigationMenu"
						className="absolute top-2 left-2.5"
					/>

					<div className="relative mt-2 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="NavigationMenuList"
							className="absolute top-2 left-2.5"
						/>

						<div className="mt-0.5 flex flex-wrap items-center gap-2">
							<div className="relative rounded-md border border-dashed border-primary/20 p-2 pt-7">
								<AnatomyLabel
									name="NavigationMenuItem"
									className="absolute top-2 left-2"
								/>
								<div className="flex items-center gap-2">
									<AnatomyLabel
										name="NavigationMenuTrigger"
										className="shrink-0"
									/>
									<div className="flex items-center gap-1.5 rounded-md border bg-card px-2 py-1.5">
										<ChromeBar className="h-2 w-10" />
										<HugeiconsIcon
											icon={ArrowDown01Icon}
											className="size-3 shrink-0 text-muted-foreground"
											strokeWidth={2}
										/>
									</div>
								</div>
							</div>

							<div className="relative rounded-md border border-dashed border-primary/20 p-2 pt-7">
								<AnatomyLabel
									name="NavigationMenuItem"
									className="absolute top-2 left-2"
								/>
								<div className="flex items-center gap-2">
									<AnatomyLabel
										name="NavigationMenuLink"
										className="shrink-0"
									/>
									<div className="rounded-md px-2 py-1.5">
										<ChromeBar tone="subtle" className="h-2 w-8" />
									</div>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<AnatomyLabel
									name="NavigationMenuIndicator"
									className="shrink-0"
								/>
								<div className="flex h-1.5 w-8 items-end justify-center overflow-hidden">
									<div className="size-2 rotate-45 rounded-tl-sm bg-border shadow-sm" />
								</div>
							</div>
						</div>
					</div>

					<div className="relative mt-2.5 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="NavigationMenuPositioner"
							className="absolute top-2 left-2.5"
						/>

						<div className="relative mt-0.5 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
							<AnatomyLabel
								name="NavigationMenuContent"
								className="absolute top-2 left-2.5"
							/>

							<div className="mt-0.5 space-y-2 rounded-lg border bg-card p-2.5 shadow-sm">
								<div className="flex items-center gap-2">
									<AnatomyLabel
										name="NavigationMenuLink"
										className="shrink-0"
									/>
									<div className="min-w-0 flex-1 rounded-md bg-muted/70 px-2 py-1.5">
										<ChromeBar className="h-2 w-16" />
										<ChromeBar tone="subtle" className="mt-1 h-1.5 w-full" />
									</div>
								</div>
								<div className="rounded-md px-2 py-1.5">
									<ChromeBar tone="subtle" className="h-2 w-14" />
									<ChromeBar tone="subtle" className="mt-1 h-1.5 w-4/5" />
								</div>
								<div className="rounded-md px-2 py-1.5">
									<ChromeBar tone="subtle" className="h-2 w-12" />
									<ChromeBar tone="subtle" className="mt-1 h-1.5 w-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { NavigationMenuAnatomy };
