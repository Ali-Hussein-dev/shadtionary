import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function TabTriggerChrome({
	width,
	active = false,
}: {
	width: string;
	active?: boolean;
}) {
	return (
		<div className="relative pb-2">
			<ChromeBar
				className={`h-2 ${width}`}
				tone={active ? "default" : "subtle"}
			/>
			{active ? (
				<div className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-foreground/70" />
			) : null}
		</div>
	);
}

function TabsAnatomy() {
	return (
		<AnatomyContainer
			name="Tabs"
			caption="Labeled diagram of tabs parts: Tabs root container, TabsList trigger row with TabsTrigger items and an active underline indicator, and TabsContent panel showing the active section body."
		>
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 p-3 pt-8 bg-secondary">
					<AnatomyLabel name="TabsList" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-6 flex items-end gap-4 border-b border-border/60">
						<AnatomyLabel
							name="TabsTrigger"
							className="absolute -top-5 left-0 whitespace-nowrap"
						/>
						<TabTriggerChrome width="w-10" active />
						<TabTriggerChrome width="w-8" />
						<TabTriggerChrome width="w-9" />
					</div>
				</div>

				<div className="relative mt-4 rounded-md border border-dashed border-primary/20 p-3 pt-8 bg-secondary">
					<AnatomyLabel
						name="TabsContent"
						className="absolute top-2.5 left-2.5"
					/>
					<div className="space-y-1.5">
						<ChromeBar className="h-2 w-full" />
						<ChromeBar tone="subtle" className="h-2 w-11/12" />
						<ChromeBar className="h-2 w-4/5" />
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { TabsAnatomy };
