import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyLabel } from "./anatomy-label";

function BreadcrumbSegment({
	label,
	width,
	isPage = false,
}: {
	label: string;
	width: string;
	isPage?: boolean;
}) {
	return (
		<div className="relative flex items-center">
			<AnatomyLabel name={label} className="absolute -top-5 left-0" />
			<ChromeBar
				className={cn("h-2.5", width, isPage && "bg-muted/50")}
				tone={isPage ? "subtle" : "default"}
			/>
		</div>
	);
}

function BreadcrumbAnatomy({ className }: { className?: string }) {
	return (
		<AnatomyContainer
			name="Breadcrumb"
			className={className}
			caption="Labeled diagram of breadcrumb parts: Breadcrumb navigation root, BreadcrumbList, BreadcrumbItem segments with BreadcrumbLink ancestors, BreadcrumbSeparator dividers, BreadcrumbPage for the current location, and optional BreadcrumbEllipsis for collapsed paths."
		>
			<AnatomySection>
				<AnatomyLabel name="BreadcrumbList" className="mb-6" />

				<div className="flex flex-wrap items-center gap-1.5">
					<div className="relative">
						<AnatomyLabel
							name="BreadcrumbItem"
							className="absolute -top-5 left-0"
						/>
						<BreadcrumbSegment label="BreadcrumbLink" width="w-10" />
					</div>

					<div className="relative flex items-center">
						<AnatomyLabel
							name="BreadcrumbSeparator"
							className="absolute -top-5 left-1/2 -translate-x-1/2"
						/>
						<HugeiconsIcon
							icon={ArrowRight01Icon}
							className="size-3 text-muted-foreground"
							strokeWidth={2}
							aria-hidden
						/>
					</div>

					<BreadcrumbSegment label="BreadcrumbLink" width="w-16" />

					<HugeiconsIcon
						icon={ArrowRight01Icon}
						className="size-3 text-muted-foreground"
						strokeWidth={2}
						aria-hidden
					/>

					<BreadcrumbSegment label="BreadcrumbLink" width="w-14" />

					<HugeiconsIcon
						icon={ArrowRight01Icon}
						className="size-3 text-muted-foreground"
						strokeWidth={2}
						aria-hidden
					/>

					<BreadcrumbSegment label="BreadcrumbPage" width="w-16" isPage />
				</div>
			</AnatomySection>

			<AnatomySection variant="optional">
				<AnatomyLabel name="BreadcrumbEllipsis" className="mb-5" />
				<div className="flex flex-wrap items-center gap-1.5">
					<ChromeBar className="h-2.5 w-10" />
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						className="size-3 text-muted-foreground"
						strokeWidth={2}
						aria-hidden
					/>
					<ChromeBar tone="subtle" className="h-2.5 w-4" />
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						className="size-3 text-muted-foreground"
						strokeWidth={2}
						aria-hidden
					/>
					<ChromeBar className="h-2.5 w-12" />
					<HugeiconsIcon
						icon={ArrowRight01Icon}
						className="size-3 text-muted-foreground"
						strokeWidth={2}
						aria-hidden
					/>
					<ChromeBar tone="subtle" className="h-2.5 w-16" />
				</div>
				<p className="mt-2 text-[10px] text-muted-foreground">
					Collapsed trail — middle segments hidden behind ellipsis
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { BreadcrumbAnatomy };
