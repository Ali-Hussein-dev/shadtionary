import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";

import { LogoFull } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { urls } from "@/contstants/urls";
import { cn } from "@/lib/utils";

type HeaderProps = {
	className?: string;
};

export function Header({ className }: HeaderProps) {
	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b border-dashed bg-background/80 backdrop-blur-sm px-3 md:px-10 lg:px-16",
				className,
			)}
		>
			<div className="flex h-14 items-center justify-between border-x border-dashed px-3">
				<Link
					to="/"
					className="outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm"
				>
					<span className="block h-8 [&_svg]:h-full [&_svg]:w-auto">
						<LogoFull />
					</span>
				</Link>

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
		</header>
	);
}
