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
		<div className="px-3 md:px-10 lg:px-16 min-h-[90vh]">
			<div className="border-x border-dashed py-10 min-h-[90vh]">
				<header className="border-b border-dashed mb-10">
					<div className="pb-6 md:max-w-4xl mx-auto">
						<h1 className="lg:text-3xl text-xl font-extrabold tracking-tight">
							Comparisons
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							Similar UI elements, explained side by side — so you know which
							pattern to reach for.
						</p>
					</div>
				</header>
				<section className="md:max-w-4xl mx-auto">
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
											<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-lg md:text-xl mb-2">
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
