import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function OtpSlotChrome({ active }: { active?: boolean }) {
	return (
		<div
			className={cn(
				"flex size-8 items-center justify-center rounded-md border bg-card shadow-sm",
				active ? "border-foreground ring-1 ring-ring" : "border-input",
			)}
		>
			{active ? <ChromeBar className="h-2 w-2" /> : null}
		</div>
	);
}

function InputOtpAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of input OTP parts: InputOTP root wrapping InputOTPGroup clusters of InputOTPSlot cells, with an optional InputOTPSeparator between groups.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel name="InputOTP" className="absolute top-2.5 left-2.5" />

					<div className="relative mt-2 flex flex-wrap items-center justify-center gap-3">
						<div className="relative rounded-md border border-dashed border-primary/15 bg-card/50 p-3 pt-8">
							<AnatomyLabel
								name="InputOTPGroup"
								className="absolute top-2 left-2.5 whitespace-nowrap"
							/>
							<div className="flex items-center gap-1.5">
								<div className="relative pt-7">
									<AnatomyLabel
										name="InputOTPSlot"
										className="absolute top-0 left-0 whitespace-nowrap"
									/>
									<OtpSlotChrome active />
								</div>
								<OtpSlotChrome />
								<OtpSlotChrome />
							</div>
						</div>

						<div className="relative pt-7">
							<AnatomyLabel
								name="InputOTPSeparator"
								className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
							/>
							<div className="flex size-8 items-center justify-center">
								<ChromeBar tone="subtle" className="h-0.5 w-3" />
							</div>
						</div>

						<div className="relative rounded-md border border-dashed border-primary/15 bg-card/50 p-3 pt-8">
							<AnatomyLabel
								name="InputOTPGroup"
								className="absolute top-2 left-2.5 whitespace-nowrap"
							/>
							<div className="flex items-center gap-1.5">
								<OtpSlotChrome />
								<OtpSlotChrome />
								<OtpSlotChrome />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { InputOtpAnatomy };
