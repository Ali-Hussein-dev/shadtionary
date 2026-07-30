const entryBodies = import.meta.glob("../content/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const comparisonBodies = import.meta.glob("../content/comparisons/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const bodiesBySlug = Object.fromEntries(
	Object.entries(entryBodies).map(([path, body]) => {
		const slug = path.match(/\/([^/]+)\.md$/)?.[1];
		if (!slug) {
			throw new Error(`Invalid entry body path: ${path}`);
		}
		return [slug, body];
	}),
);

const comparisonsBySlug = Object.fromEntries(
	Object.entries(comparisonBodies).map(([path, body]) => {
		const slug = path.match(/\/([^/]+)\.md$/)?.[1];
		if (!slug) {
			throw new Error(`Invalid comparison body path: ${path}`);
		}
		return [slug, body];
	}),
);

export function getEntryBody(slug: string): string | null {
	return bodiesBySlug[slug] ?? null;
}

export function getComparisonBody(slug: string): string | null {
	return comparisonsBySlug[slug] ?? null;
}
