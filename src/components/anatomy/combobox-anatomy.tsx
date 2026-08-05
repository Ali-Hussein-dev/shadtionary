import {
	Search01Icon,
	Tick02Icon,
	UnfoldMoreIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function ComboboxAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of combobox parts: Combobox root wrapping ComboboxInput with trigger, ComboboxContent panel with ComboboxList, ComboboxItem options, ComboboxEmpty, ComboboxGroup, ComboboxLabel, and ComboboxSeparator.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-3 pt-7">
					<AnatomyLabel name="Combobox" className="absolute top-2 left-2.5" />

					<div className="relative mt-2 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="ComboboxInput"
							className="absolute top-2 left-2.5"
						/>
						<div className="mt-0.5 flex items-center gap-2 rounded-md border bg-card px-2.5 py-2">
							<HugeiconsIcon
								icon={Search01Icon}
								className="size-3.5 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
							<ChromeBar className="h-2.5 w-16" />
							<div className="ml-auto flex items-center gap-1.5">
								<AnatomyLabel name="ComboboxClear" className="shrink-0" />
								<ChromeBar tone="subtle" className="size-3 rounded-full" />
								<AnatomyLabel name="ComboboxTrigger" className="shrink-0" />
								<HugeiconsIcon
									icon={UnfoldMoreIcon}
									className="size-4 shrink-0 text-muted-foreground"
									strokeWidth={2}
								/>
							</div>
						</div>
					</div>

					<div className="relative mt-2.5 rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="ComboboxContent"
							className="absolute top-2 left-2.5"
						/>

						<div className="relative mt-0.5 rounded-lg border bg-card p-2.5 shadow-sm">
							<AnatomyLabel name="ComboboxList" className="mb-1.5" />

							<div className="mb-2 flex items-center gap-2">
								<AnatomyLabel name="ComboboxEmpty" className="shrink-0" />
								<ChromeBar tone="subtle" className="h-1.5 w-20" />
							</div>

							<AnatomyLabel name="ComboboxGroup" className="mb-1.5" />

							<div className="mb-1.5 flex items-center gap-2">
								<AnatomyLabel name="ComboboxLabel" className="shrink-0" />
								<ChromeBar tone="subtle" className="h-1.5 w-10" />
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex items-center gap-2">
									<AnatomyLabel name="ComboboxItem" className="shrink-0" />
									<div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md bg-muted/70 px-2 py-1.5">
										<ChromeBar className="h-2 w-14" />
										<HugeiconsIcon
											icon={Tick02Icon}
											className="size-3.5 shrink-0 text-muted-foreground"
											strokeWidth={2.5}
										/>
									</div>
								</div>
								<div className="rounded-md px-2 py-1.5">
									<ChromeBar tone="subtle" className="h-2 w-12" />
								</div>
								<div className="rounded-md px-2 py-1.5">
									<ChromeBar tone="subtle" className="h-2 w-14" />
								</div>
							</div>

							<div className="my-2 flex items-center gap-2">
								<AnatomyLabel name="ComboboxSeparator" className="shrink-0" />
								<div className="h-px flex-1 bg-border" />
							</div>

							<div className="rounded-md px-2 py-1.5">
								<ChromeBar tone="subtle" className="h-2 w-14" />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { ComboboxAnatomy };
