import {
	ArrowLeft01Icon,
	ArrowRight01Icon,
	LinkSquare01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ComparisonTitle } from "@/components/comparison-title";
import { PreviewChrome } from "@/components/preview-chrome";
import thumbnails from "@/components/thumbnails";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import comparisons from "@/contstants/comparisons.json";
import entries from "@/contstants/data.json";
import { urls } from "@/contstants/urls";
import { loadComparisonBody } from "@/lib/content.functions";

const EntryBody = lazy(() =>
	import("@/components/entry-body").then((module) => ({
		default: module.EntryBody,
	})),
);

export const Route = createFileRoute("/comparison/$slug")({
	component: ComparisonPage,
	loader: async ({ params }) => {
		const comparison = comparisons.find((item) => item.slug === params.slug);
		if (!comparison) {
			throw notFound();
		}
		const body = await loadComparisonBody({ data: { slug: params.slug } });
		const relatedEntries = comparison.entries
			.map((slug) => entries.find((entry) => entry.slug === slug))
			.filter((entry): entry is (typeof entries)[number] => entry != null);

		return {
			comparison,
			body,
			relatedEntries,
		};
	},
	head: ({ loaderData }) => {
		const comparison = loaderData?.comparison;
		if (!comparison) {
			return {};
		}

		const title = `${comparison.title} · Shadtionary`;

		return {
			meta: [
				{ title },
				{ name: "description", content: comparison.description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: comparison.description },
			],
		};
	},
});

function RelatedEntryCard({ entry }: { entry: (typeof entries)[number] }) {
	const thumbnail = thumbnails[entry.slug as keyof typeof thumbnails];

	return (
		<Link
			to="/content/$slug"
			params={{ slug: entry.slug }}
			className="block rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
		>
			<Card className="rounded-2xl bg-secondary/70 p-[2.5px] ring-0 transition-colors hover:bg-secondary dark:bg-secondary/40 hover:dark:bg-secondary/70">
				<PreviewChrome className="overflow-hidden" contentClassName="min-h-52">
					{thumbnail}
				</PreviewChrome>
				<CardContent className="pb-4">
					<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm mb-2">
						{entry.title}
						<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
					</CardTitle>
					<CardDescription className="line-clamp-2">
						{entry.description}
					</CardDescription>
				</CardContent>
			</Card>
		</Link>
	);
}

function ComparisonPage() {
	const { body, comparison, relatedEntries } = Route.useLoaderData();

	return (
		<div className="mx-auto max-w-7xl px-6 py-12">
			<div className="lg:grid lg:grid-cols-[6fr_4fr] lg:items-start lg:gap-8">
				<div className="order-2 lg:order-1">
					<Link to="/comparison">
						<Button variant="ghost" size="sm" className="mb-6 -ml-2">
							<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
							Back to comparisons
						</Button>
					</Link>
					<div className="mb-6 space-y-2">
						<h1 className="text-2xl lg:text-3xl font-bold lg:font-extrabold tracking-tight">
							<ComparisonTitle title={comparison.title} />
						</h1>
					</div>

					{body ? (
						<Suspense
							fallback={
								<p className="text-sm text-muted-foreground">
									Loading article…
								</p>
							}
						>
							<EntryBody body={body} />
						</Suspense>
					) : (
						<p className="text-sm text-muted-foreground">Content not found</p>
					)}

					<Button
						variant="secondary"
						className="mt-8"
						nativeButton={false}
						render={(props) => (
							<a
								{...props}
								href={urls.comparisonEdit(comparison.slug)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Edit on GitHub
								<HugeiconsIcon icon={LinkSquare01Icon} className="size-3.5" />
							</a>
						)}
					/>
				</div>

				{relatedEntries.length > 0 ? (
					<aside className="order-1 mb-8 space-y-4 lg:sticky lg:top-20 lg:order-2 lg:mb-0 lg:self-start lg:pl-6">
						<h2 className="font-semibold text-secondary-foreground text-sm">
							Full entries
						</h2>
						<ul className="space-y-4">
							{relatedEntries.map((entry) => (
								<li key={entry.slug}>
									<RelatedEntryCard entry={entry} />
								</li>
							))}
						</ul>
					</aside>
				) : null}
			</div>
		</div>
	);
}
