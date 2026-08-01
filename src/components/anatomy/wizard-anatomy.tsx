import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function StepIndicator({
	state,
}: {
	state: "completed" | "active" | "upcoming";
}) {
	return (
		<div
			className={cn(
				"flex size-5 items-center justify-center rounded-full border-2",
				state === "completed" && "border-primary/50 bg-primary/40",
				state === "active" && "border-primary/50 bg-background",
				state === "upcoming" && "border-primary/20 bg-background",
			)}
		>
			{state === "completed" ? (
				<div className="size-1.5 rounded-full bg-background" />
			) : state === "active" ? (
				<div className="size-1 rounded-full bg-primary/60" />
			) : (
				<div className="size-1 rounded-full bg-primary/20" />
			)}
		</div>
	);
}

function WizardAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of wizard parts: Wizard root with WizardHeader title, WizardStepper progress track, WizardStep and WizardContent for the active panel, WizardFooter actions, and optional WizardReview summary step.">
			<AnatomySection className="relative p-4 pt-10">
				<AnatomyLabel name="Wizard" className="absolute top-3 left-3" />

				<div className="relative mt-2 space-y-4 rounded-md border border-dashed border-primary/20 p-3 pt-8">
					<div className="relative space-y-2 pt-6">
						<AnatomyLabel
							name="WizardHeader"
							className="absolute top-0 left-0"
						/>
						<ChromeBar className="h-2.5 w-24" />
						<ChromeBar tone="subtle" className="h-2 w-32" />
					</div>

					<div className="relative rounded-md border border-dashed border-primary/15 bg-muted/20 p-3 pt-8">
						<AnatomyLabel
							name="WizardStepper"
							className="absolute top-2.5 left-2.5"
						/>
						<div className="flex items-center justify-between gap-2 px-2">
							<StepIndicator state="completed" />
							<div className="h-px flex-1 bg-primary/30" />
							<StepIndicator state="active" />
							<div className="h-px flex-1 bg-border" />
							<StepIndicator state="upcoming" />
						</div>
					</div>

					<div className="relative rounded-md border border-dashed border-primary/15 p-3 pt-8">
						<AnatomyLabel
							name="WizardStep"
							className="absolute top-2.5 left-2.5"
						/>
						<div className="relative space-y-2 pt-6">
							<AnatomyLabel
								name="WizardContent"
								className="absolute top-0 left-0"
							/>
							<ChromeBar className="h-2 w-1/3" />
							<ChromeBar tone="subtle" className="h-2 w-full" />
							<ChromeBar tone="subtle" className="h-6 w-full rounded-md" />
						</div>
					</div>

					<div className="relative rounded-md border border-dashed border-primary/15 bg-muted/20 p-3 pt-8">
						<AnatomyLabel
							name="WizardFooter"
							className="absolute top-2.5 left-2.5"
						/>
						<div className="flex justify-between gap-3">
							<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
							<div className="flex gap-2">
								<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
								<ChromeBar className="h-5 w-12 rounded-md" />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional" className="relative mt-4 p-4 pt-10">
				<AnatomyLabel name="WizardReview" className="absolute top-3 left-3" />
				<div className="space-y-2">
					<ChromeBar className="h-2 w-1/4" />
					<ChromeBar tone="subtle" className="h-2 w-full" />
					<ChromeBar tone="subtle" className="h-2 w-11/12" />
					<ChromeBar tone="subtle" className="h-2 w-4/5" />
				</div>
				<p className="mt-2 text-[10px] text-muted-foreground">
					Optional summary step before final submit
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { WizardAnatomy };
