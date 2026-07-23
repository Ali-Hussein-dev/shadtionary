import { createCodePlugin } from "@streamdown/code";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { Streamdown } from "streamdown";
import { cn } from "@/lib/utils";

const code = createCodePlugin({});

function MarkdownLink({
	href,
	children,
	className,
	node: _node,
	...props
}: ComponentProps<"a"> & { node?: unknown }) {
	const classes = cn(
		"wrap-anywhere font-medium text-primary underline underline-offset-2",
		className,
	);

	if (href?.startsWith("/content/")) {
		const slug = href.slice("/content/".length);

		return (
			<Link to="/content/$slug" params={{ slug }} className={classes}>
				{children}
			</Link>
		);
	}

	if (href?.startsWith("/")) {
		return (
			<Link to={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<a
			href={href}
			className={classes}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</a>
	);
}

const streamdownComponents = {
	a: MarkdownLink,
};

export function EntryBody({ body }: { body: string }) {
	return (
		<Streamdown
			mode="static"
			plugins={{ code }}
			controls={false}
			components={streamdownComponents}
			linkSafety={{ enabled: false }}
		>
			{body}
		</Streamdown>
	);
}
