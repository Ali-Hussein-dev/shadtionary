import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function TextareaAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of textarea parts: Field wrapper with FieldLabel above Textarea, FieldDescription helper text below, and FieldError for validation.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel name="Field" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-2 space-y-2.5">
						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="FieldLabel"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2.5 w-24" />
						</div>

						<div className="relative rounded-md border bg-card px-3 py-2.5 pt-7">
							<AnatomyLabel
								name="Textarea"
								className="absolute top-2 left-2.5 whitespace-nowrap"
							/>
							<div className="space-y-1.5">
								<ChromeBar tone="subtle" className="h-2 w-full" />
								<ChromeBar tone="subtle" className="h-2 w-[90%]" />
								<ChromeBar tone="subtle" className="h-2 w-[75%]" />
							</div>
						</div>

						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="FieldDescription"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar tone="subtle" className="h-2 w-36" />
						</div>

						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="FieldError"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2 w-28 bg-destructive/30" />
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { TextareaAnatomy };
