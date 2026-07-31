import {
	ArrowRight01Icon,
	Cancel01Icon,
	LinkSquare01Icon,
	Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PreviewChrome } from "@/components/preview-chrome";
import thumbnails from "@/components/thumbnails";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import entries from "@/contstants/data.json";
import { urls } from "@/contstants/urls";

export const Route = createFileRoute("/")({ component: Home });

function matchesQuery(entry: (typeof entries)[number], query: string): boolean {
	const haystack = [
		entry.title,
		entry.slug,
		entry.description,
		...entry.alsoCalled,
	]
		.join(" ")
		.toLowerCase();

	return haystack.includes(query);
}

function Home() {
	const [query, setQuery] = useState("");
	const normalizedQuery = query.trim().toLowerCase();

	const filteredEntries = normalizedQuery
		? entries.filter((entry) => matchesQuery(entry, normalizedQuery))
		: entries;

	return (
		<div className="px-3 md:px-10 lg:px-16">
			<div className="xl:border-x border-dashed">
				<header>
					<div className="py-10 md:py-12 md:max-w-5xl px-4 md:px-8 border-x mx-auto border-dashed">
						<h1 className="lg:text-4xl text-xl font-extrabold tracking-tight">
							Visual Dictionary for UI Elements
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							Great resource for vibe coders and designers to better steer AI
							agents in the right direction.
						</p>
					</div>
					<div className="border-y border-dashed">
						<InputGroup className="h-12 px-1 md:max-w-5xl mx-auto rounded-none border-y-0 md:px-6 border-dashed border-border focus-within:bg-input/40 duration-75 has-[[data-slot=input-group-control]:focus-visible]:border-border has-[[data-slot=input-group-control]:focus-visible]:ring-0 dark:bg-transparent dark:focus-within:bg-input/40">
							<InputGroupInput
								type="text"
								placeholder="Search for UI elements..."
								className="h-full ml-1.5"
								value={query}
								onChange={(event) => setQuery(event.target.value)}
								autoComplete="off"
							/>
							<InputGroupAddon className="">
								<HugeiconsIcon icon={Search01Icon} className="size-4" />
							</InputGroupAddon>
							<InputGroupAddon align="inline-end" className="pr-1">
								<InputGroupText className="tabular-nums">
									{filteredEntries.length}{" "}
									{filteredEntries.length === 1 ? "element" : "elements"}
								</InputGroupText>
								{query ? (
									<InputGroupButton
										size="icon-sm"
										aria-label="Clear search"
										onClick={() => setQuery("")}
									>
										<HugeiconsIcon icon={Cancel01Icon} className="size-4" />
									</InputGroupButton>
								) : null}
							</InputGroupAddon>
						</InputGroup>
					</div>
				</header>
				<section className=" md:max-w-5xl mx-auto py-10 border-x border-dashed px-4 md:px-8">
					{filteredEntries.length === 0 ? (
						<div className="flex flex-col items-center gap-4">
							<p className="text-center text-muted-foreground">
								No UI elements match &ldquo;{query}&rdquo;.
							</p>
							<Button
								variant="default"
								nativeButton={false}
								size="lg"
								render={(props) => (
									<a
										{...props}
										href={urls.githubNewIssue}
										target="_blank"
										rel="noopener noreferrer"
									>
										Request UI element
										<HugeiconsIcon
											icon={LinkSquare01Icon}
											className="size-3.5"
										/>
									</a>
								)}
							/>
						</div>
					) : (
						<ul className="grid gap-4 sm:grid-cols-2 lg:gap-8 md:gap-6">
							{filteredEntries.map((entry) => {
								const thumbnail =
									thumbnails[entry.slug as keyof typeof thumbnails];

								return (
									<li key={entry.slug}>
										<Link
											to="/content/$slug"
											params={{ slug: entry.slug }}
											className="block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
										>
											<Card className="h-full rounded-2xl bg-secondary/70 p-[2.5px] ring-0 transition-colors hover:bg-secondary dark:bg-secondary/40 hover:dark:bg-secondary/70">
												<PreviewChrome
													className="overflow-hidden"
													contentClassName="py-3 min-h-48 lg:min-h-56"
												>
													{thumbnail}
												</PreviewChrome>
												<CardContent className="pb-4">
													<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm mb-2">
														{entry.title}
														<HugeiconsIcon
															icon={ArrowRight01Icon}
															className="size-4"
														/>
													</CardTitle>
													<CardDescription className="line-clamp-2">
														{entry.description}
													</CardDescription>
												</CardContent>
												{/* <CardFooter className="justify-end bg-transparent border-t-0 pt-0">
											<Button variant="secondary">
												Deep dive{" "}
												<HugeiconsIcon
													icon={ArrowRight01Icon}
													className="size-4"
												/>
											</Button>
										</CardFooter> */}
											</Card>
										</Link>
									</li>
								);
							})}
						</ul>
					)}
				</section>
			</div>
		</div>
	);
}
