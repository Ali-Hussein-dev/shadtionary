import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ComparisonTitle } from "@/components/comparison-title";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import comparisons from "@/contstants/comparisons.json";

export const Route = createFileRoute("/comparison/")({
	component: ComparisonIndex,
	head: () => ({
		meta: [
			{ title: "Comparisons · Shadtionary" },
			{
				name: "description",
				content:
					"Side-by-side guides for similar UI elements — when to use a drawer vs a sheet, and more.",
			},
			{ property: "og:title", content: "Comparisons · Shadtionary" },
			{
				property: "og:description",
				content:
					"Side-by-side guides for similar UI elements — when to use a drawer vs a sheet, and more.",
			},
		],
	}),
});

function ComparisonIndex() {
	return (
		<div className="flex min-h-full flex-1 flex-col px-3 md:px-10 lg:px-16">
			<div className="flex min-h-full flex-1 flex-col xl:border-x border-dashed">
				<header>
					<div className="py-10 md:py-12 md:max-w-5xl px-4 md:px-8 border-x mx-auto border-dashed">
						<h1 className="lg:text-4xl text-xl font-extrabold tracking-tight">
							Comparisons
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							Similar UI elements, explained side by side — so you know which
							pattern to reach for.
						</p>
					</div>
					<div className="border-t border-dashed" />
				</header>
				<section className="flex w-full flex-1 flex-col md:max-w-5xl mx-auto py-10 border-x border-dashed px-4 md:px-8">
					<ul className="grid gap-4 sm:grid-cols-2 lg:gap-8 md:gap-6">
						{comparisons.map((comparison) => (
							<li key={comparison.slug}>
								<Link
									to="/comparison/$slug"
									params={{ slug: comparison.slug }}
									className="block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
								>
									<Card className="h-full rounded-2xl bg-secondary/70 p-[2.5px] ring-0 transition-colors hover:bg-secondary dark:bg-secondary/40 hover:dark:bg-secondary/70">
										<CardContent className="p-5">
											<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm mb-2">
												<ComparisonTitle title={comparison.title} />
												<HugeiconsIcon
													icon={ArrowRight01Icon}
													className="size-4"
												/>
											</CardTitle>
											<CardDescription className="whitespace-pre-line line-clamp-3">
												{comparison.description}
											</CardDescription>
										</CardContent>
									</Card>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}
