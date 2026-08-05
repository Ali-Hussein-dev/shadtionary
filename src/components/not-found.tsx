import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
	const location = useLocation();

	return (
		<div className="flex min-h-full flex-1 flex-col px-3 md:px-10 lg:px-16">
			<div className="flex min-h-full flex-1 flex-col xl:border-x border-dashed items-center justify-center">
				<header className="w-full">
					<div className="mx-auto px-4 py-10 md:max-w-5xl md:px-8 md:py-20 text-center space-y-3">
						<p className="font-bold text-muted-foreground uppercase tracking-tight">
							404
						</p>
						<h1 className="font-extrabold text-xl tracking-tight lg:text-5xl">
							Page not found
						</h1>
						<p className="text-lg text-muted-foreground text-pretty text-center">
							We couldn&apos;t find{" "}
							<code className="rounded bg-muted px-1.5 py-0.5 text-foreground text-sm">
								{location.pathname}
							</code>
							. It may have been moved or doesn&apos;t exist yet.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 pt-4">
							<Link to="/">
								<Button size="lg">
									<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
									Back to home
								</Button>
							</Link>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
