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
				"flex size-6 items-center justify-center rounded-full border-2",
				state === "completed" && "border-primary/50 bg-primary/40",
				state === "active" && "border-primary/50 bg-background",
				state === "upcoming" && "border-primary/20 bg-background",
			)}
		>
			{state === "completed" ? (
				<div className="size-1.5 rounded-full bg-background" />
			) : state === "active" ? (
				<div className="size-1.5 rounded-full bg-primary/60" />
			) : (
				<div className="size-1 rounded-full bg-primary/20" />
			)}
		</div>
	);
}

function StepperAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of stepper parts: StepperNav list of StepperItems, each with StepperTrigger, StepperIndicator, StepperTitle, StepperDescription, and StepperSeparator connectors, plus StepperContent for the active step panel.">
			<AnatomySection className="relative p-4 pt-10">
				<AnatomyLabel name="StepperNav" className="absolute top-3 left-3" />

				<div className="relative mt-2 flex items-start pt-6">
					<div className="absolute top-[2.125rem] right-8 left-8 h-px bg-border" />
					<div className="absolute top-[2.125rem] left-8 h-px w-[calc(50%-2rem)] bg-primary/35" />

					<div className="relative flex min-w-0 flex-1 flex-col items-center gap-2">
						<AnatomyLabel
							name="StepperItem"
							className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
						/>
						<div className="relative pt-5">
							<AnatomyLabel
								name="StepperIndicator"
								className="absolute -top-0.5 left-1/2 -translate-x-1/2 whitespace-nowrap"
							/>
							<StepIndicator state="completed" />
						</div>
						<div className="flex flex-col items-center gap-1.5 pt-1">
							<div className="relative pt-4">
								<AnatomyLabel
									name="StepperTitle"
									className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
								/>
								<ChromeBar className="h-2 w-10" />
							</div>
							<div className="relative pt-4">
								<AnatomyLabel
									name="StepperDescription"
									className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
								/>
								<ChromeBar tone="subtle" className="h-1.5 w-12" />
							</div>
						</div>
					</div>

					<div className="relative flex min-w-0 flex-1 flex-col items-center gap-2">
						<div className="absolute top-7 -left-2 z-10">
							<AnatomyLabel
								name="StepperSeparator"
								className="whitespace-nowrap"
							/>
						</div>
						<div className="relative pt-5">
							<AnatomyLabel
								name="StepperTrigger"
								className="absolute -top-0.5 left-1/2 -translate-x-1/2 whitespace-nowrap"
							/>
							<StepIndicator state="active" />
						</div>
						<div className="flex flex-col items-center gap-1.5 pt-1">
							<ChromeBar className="h-2 w-12" />
							<ChromeBar tone="subtle" className="h-1.5 w-14" />
						</div>
					</div>

					<div className="relative flex min-w-0 flex-1 flex-col items-center gap-2 pt-5">
						<StepIndicator state="upcoming" />
						<div className="flex flex-col items-center gap-1.5 pt-1">
							<ChromeBar tone="subtle" className="h-2 w-9" />
							<ChromeBar tone="subtle" className="h-1.5 w-10" />
						</div>
					</div>
				</div>
			</AnatomySection>

			<AnatomySection className="relative mt-4 p-4 pt-10">
				<AnatomyLabel name="StepperContent" className="absolute top-3 left-3" />
				<div className="space-y-2">
					<ChromeBar className="h-2 w-2/5" />
					<ChromeBar tone="subtle" className="h-1.5 w-full" />
					<ChromeBar tone="subtle" className="h-1.5 w-5/6" />
					<div className="flex justify-between gap-3 pt-2">
						<ChromeBar className="h-5 w-14 rounded-md" />
						<ChromeBar className="h-5 w-14 rounded-md" />
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { StepperAnatomy };
