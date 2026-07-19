import { ArrowLeft01Icon, LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import anatomy from "@/components/anatomy";
import { PreviewChrome } from "@/components/preview-chrome";
import { Button } from "@/components/ui/button";
import entries from "@/contstants/data.json";
import { urls } from "@/contstants/urls";
import { loadEntryBody } from "@/lib/content.functions";

const EntryBody = lazy(() =>
	import("@/components/entry-body").then((module) => ({
		default: module.EntryBody,
	})),
);

export const Route = createFileRoute("/content/$slug")({
	component: ContentPage,
	loader: async ({ params }) => {
		const entry = entries.find((item) => item.slug === params.slug);
		if (!entry) {
			throw notFound();
		}
		const body = await loadEntryBody({ data: { slug: params.slug } });
		return {
			entry,
			body,
		};
	},
	head: ({ loaderData }) => {
		const entry = loaderData?.entry;
		if (!entry) {
			return {};
		}

		const title = `${entry.title} · Shadtionary`;

		return {
			meta: [
				{ title },
				{ name: "description", content: entry.description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: entry.description },
				...(entry.alsoCalled.length > 0
					? [{ name: "keywords", content: entry.alsoCalled.join(", ") }]
					: []),
			],
		};
	},
});

function EntryHeader({ entry }: { entry: (typeof entries)[number] }) {
	return (
		<>
			<Link to="/">
				<Button variant="ghost" size="sm" className="mb-6 -ml-2">
					<HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
					Back
				</Button>
			</Link>
			<div className="mb-6 space-y-2">
				<h1 className="text-2xl lg:text-3xl font-bold lg:font-extrabold tracking-tight">
					{entry.title}
				</h1>
				{entry.tags.length > 0 ? (
					<div className="flex items-center gap-2">
						{entry.tags.map((tag) => (
							<div key={tag} className="text-sky-500">
								{`<${tag} />`}
							</div>
						))}
					</div>
				) : null}
			</div>
		</>
	);
}

function ContentPage() {
	const { body, entry } = Route.useLoaderData();
	const preview = anatomy[entry.slug as keyof typeof anatomy];

	return (
		<div className="mx-auto max-w-7xl px-6 py-12">
			<div className="lg:grid lg:grid-cols-[6fr_4fr] lg:items-start lg:gap-8">
				<div className="order-2 lg:order-1">
					<EntryHeader entry={entry} />
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
						<p className="text-sm text-muted-foreground">
							Content not found
						</p>
					)}
				</div>

				<div className="order-1 mb-8 lg:sticky lg:top-20 lg:order-2 lg:mb-0 lg:self-start lg:pl-6">
					<h2 className="font-semibold mb-2 text-secondary-foreground text-sm">
						Component Anatomy
					</h2>
					<PreviewChrome
						variant="entry"
						contentClassName="min-h-48 lg:min-h-56 px-0"
						className="border-0"
					>
						{preview}
					</PreviewChrome>
					<Button
						variant="secondary"
						className="mt-4 w-full"
						nativeButton={false}
						render={(props) => (
							<a
								{...props}
								href={urls.contentEdit(entry.slug)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Edit this page on GitHub
								<HugeiconsIcon icon={LinkSquare01Icon} className="size-3.5" />
							</a>
						)}
					/>
				</div>
			</div>
		</div>
	);
}
