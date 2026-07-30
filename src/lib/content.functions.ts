import { createServerFn } from "@tanstack/react-start";

import { getComparisonBody, getEntryBody } from "./content.server";

export const loadEntryBody = createServerFn({ method: "GET" })
	.validator((data: { slug: string }) => data)
	.handler(({ data }) => getEntryBody(data.slug));

export const loadComparisonBody = createServerFn({ method: "GET" })
	.validator((data: { slug: string }) => data)
	.handler(({ data }) => getComparisonBody(data.slug));
