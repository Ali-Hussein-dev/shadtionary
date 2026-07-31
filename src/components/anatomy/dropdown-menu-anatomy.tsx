import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function DropdownMenuAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of dropdown menu parts: DropdownMenu root wrapping DropdownMenuTrigger, DropdownMenuContent panel with DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem with DropdownMenuShortcut, DropdownMenuSeparator, and DropdownMenuSub with SubTrigger and SubContent.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel
						name="DropdownMenu"
						className="absolute top-2 left-2.5"
					/>

					<div className="relative mt-2 w-fit rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="DropdownMenuTrigger"
							className="absolute top-2 left-2.5"
						/>
						<div className="mt-0.5 flex items-center gap-2 rounded-md border bg-card px-2.5 py-2">
							<ChromeBar className="h-2.5 w-12" />
							<HugeiconsIcon
								icon={ArrowDown01Icon}
								className="size-3.5 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
						</div>
					</div>

					<div className="relative mt-2.5 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="DropdownMenuContent"
							className="absolute top-2 left-2.5"
						/>

						<div className="mt-0.5 space-y-3 rounded-lg border bg-card p-2.5 shadow-sm">
							<div className="relative rounded-md border border-dashed border-primary/20 p-2 pt-7">
								<AnatomyLabel
									name="DropdownMenuGroup"
									className="absolute top-2 left-2"
								/>

								<div className="mb-2 flex items-center gap-2">
									<AnatomyLabel name="DropdownMenuLabel" className="shrink-0" />
									<ChromeBar tone="subtle" className="h-1.5 w-10" />
								</div>

								<div className="flex flex-col gap-1.5">
									<div className="flex items-center gap-2">
										<AnatomyLabel
											name="DropdownMenuItem"
											className="shrink-0"
										/>
										<div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md bg-muted/70 px-2 py-1.5">
											<ChromeBar className="h-2 w-14" />
											<div className="flex items-center gap-1.5">
												<AnatomyLabel
													name="DropdownMenuShortcut"
													className="shrink-0"
												/>
												<ChromeBar tone="subtle" className="h-1.5 w-5" />
											</div>
										</div>
									</div>
									<div className="rounded-md px-2 py-1.5">
										<ChromeBar tone="subtle" className="h-2 w-12" />
									</div>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<AnatomyLabel
									name="DropdownMenuSeparator"
									className="shrink-0"
								/>
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="relative rounded-md border border-dashed border-primary/20 p-2 pt-7">
								<AnatomyLabel
									name="DropdownMenuSub"
									className="absolute top-2 left-2"
								/>

								<div className="mb-2 flex items-center gap-2">
									<AnatomyLabel
										name="DropdownMenuSubTrigger"
										className="shrink-0"
									/>
									<div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md bg-muted/50 px-2 py-1.5">
										<ChromeBar className="h-2 w-16" />
										<HugeiconsIcon
											icon={ArrowDown01Icon}
											className="size-3 shrink-0 -rotate-90 text-muted-foreground"
											strokeWidth={2}
										/>
									</div>
								</div>

								<div className="relative ml-3 rounded-md border border-dashed border-primary/20 p-2 pt-7">
									<AnatomyLabel
										name="DropdownMenuSubContent"
										className="absolute top-2 left-2"
									/>
									<div className="mt-0.5 space-y-1 rounded-md border bg-card p-1.5 shadow-sm">
										<div className="rounded-md px-2 py-1.5">
											<ChromeBar className="h-2 w-12" />
										</div>
										<div className="rounded-md px-2 py-1.5">
											<ChromeBar tone="subtle" className="h-2 w-14" />
										</div>
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

export { DropdownMenuAnatomy };
