import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function SliderAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of slider parts: Root wrapping a Track with a Range fill segment and a Thumb handle at the selected position.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel name="Root" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-4 space-y-2.5">
						<div className="relative w-fit pt-6">
							<AnatomyLabel
								name="FieldLabel"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2.5 w-24" />
						</div>

						<div className="relative pt-7">
							<AnatomyLabel
								name="Track"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<div className="relative h-2 w-full max-w-xs rounded-full bg-muted">
								<div className="absolute inset-y-0 left-0 w-3/5 rounded-full bg-primary/70">
									<AnatomyLabel
										name="Range"
										className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
									/>
								</div>
								<div className="absolute top-1/2 left-3/5 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-background shadow-sm">
									<AnatomyLabel
										name="Thumb"
										className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { SliderAnatomy };
