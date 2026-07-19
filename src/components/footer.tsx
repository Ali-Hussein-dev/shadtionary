import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";

import { LogoFull } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { urls } from "@/contstants/urls";
import { cn } from "@/lib/utils";

type FooterProps = {
	className?: string;
};

export function Footer({ className }: FooterProps) {
	return (
		<footer
			className={cn("mt-auto border-t border-dashed bg-background px-3 md:px-10 lg:px-16", className)}
		>
			<div className="flex flex-col gap-6 border-x border-dashed px-6 pb-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-col">
					<Link
						to="/"
						className="w-fit outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm"
					>
						<LogoFull />
					</Link>
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} Shadtionary.
					</p>
				</div>

				<div className="flex items-center gap-1">
					<Button
						variant="ghost"
						size="icon"
						nativeButton={false}
						render={(props) => (
							<a
								{...props}
								href={urls.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
								<span className="sr-only">GitHub</span>
							</a>
						)}
					/>
					<Button
						variant="ghost"
						size="icon"
						nativeButton={false}
						render={(props) => (
							<a
								{...props}
								href={urls.x}
								target="_blank"
								rel="noopener noreferrer"
							>
								<HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} />
								<span className="sr-only">X</span>
							</a>
						)}
					/>
				</div>
			</div>
		</footer>
	);
}
