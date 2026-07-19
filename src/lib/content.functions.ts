import { createServerFn } from "@tanstack/react-start";

import { getEntryBody } from "./content.server";

export const loadEntryBody = createServerFn({ method: "GET" })
	.validator((data: { slug: string }) => data)
	.handler(({ data }) => getEntryBody(data.slug));
