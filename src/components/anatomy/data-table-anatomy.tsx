import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function DataTableAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of data table parts: Table root with TableHeader and TableHead column labels, TableBody with TableRow and TableCell data cells, optional TableFooter, plus ColumnDef configuration, Toolbar filters, and Pagination controls.">
			<AnatomySection className="relative p-4 pt-10">
				<AnatomyLabel name="Table" className="absolute top-3 left-3" />

				<div className="space-y-4">
					<div className="relative overflow-hidden rounded-md border border-dashed border-primary/25">
						<div className="relative border-b border-dashed border-primary/20 bg-muted/30 px-3 py-6 pt-8">
							<AnatomyLabel
								name="TableHeader"
								className="absolute top-2 left-2"
							/>
							<div className="flex gap-3">
								<div className="relative pt-6">
									<AnatomyLabel
										name="TableHead"
										className="absolute top-0 left-0"
									/>
									<ChromeBar className="h-2 w-10" />
								</div>
								<div className="relative pt-6">
									<AnatomyLabel
										name="TableHead"
										className="absolute top-0 left-0"
									/>
									<ChromeBar className="h-2 w-12" />
								</div>
								<div className="relative pt-6">
									<AnatomyLabel
										name="TableHead"
										className="absolute top-0 left-0"
									/>
									<ChromeBar className="h-2 w-8" />
								</div>
							</div>
						</div>

						<div className="relative px-3 py-4 pt-8">
							<AnatomyLabel
								name="TableBody"
								className="absolute top-2 left-2"
							/>

							<div className="space-y-3">
								<div className="relative rounded-md border border-dashed border-primary/20 p-3 pt-8">
									<AnatomyLabel
										name="TableRow"
										className="absolute top-2 left-2"
									/>
									<div className="flex gap-3">
										<div className="relative pt-6">
											<AnatomyLabel
												name="TableCell"
												className="absolute top-0 left-0"
											/>
											<ChromeBar className="h-2 w-10" />
										</div>
										<div className="relative pt-6">
											<AnatomyLabel
												name="TableCell"
												className="absolute top-0 left-0"
											/>
											<ChromeBar tone="subtle" className="h-2 w-12" />
										</div>
										<div className="relative pt-6">
											<AnatomyLabel
												name="TableCell"
												className="absolute top-0 left-0"
											/>
											<ChromeBar className="h-2 w-8" />
										</div>
									</div>
								</div>

								<div className="flex gap-3 px-3">
									<ChromeBar tone="subtle" className="h-2 w-9" />
									<ChromeBar tone="subtle" className="h-2 w-11" />
									<ChromeBar tone="subtle" className="h-2 w-7" />
								</div>
							</div>
						</div>

						<div className="relative border-t border-dashed border-primary/20 bg-muted/20 px-3 py-4 pt-8">
							<AnatomyLabel
								name="TableFooter"
								className="absolute top-2 left-2"
							/>
							<div className="flex gap-3">
								<ChromeBar className="h-2 w-10" />
								<ChromeBar tone="subtle" className="h-2 w-14" />
							</div>
						</div>
					</div>

					<AnatomySection variant="optional">
						<AnatomyLabel name="Toolbar" className="mb-3" />
						<div className="flex gap-2">
							<ChromeBar tone="subtle" className="h-5 w-24 rounded-md" />
							<ChromeBar className="h-5 w-14 rounded-md" />
						</div>
					</AnatomySection>

					<AnatomySection variant="optional">
						<AnatomyLabel name="Pagination" className="mb-3" />
						<div className="flex justify-end gap-2">
							<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
							<ChromeBar tone="subtle" className="h-5 w-12 rounded-md" />
						</div>
					</AnatomySection>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional" className="mt-4">
				<AnatomyLabel name="ColumnDef" className="mb-3" />
				<div className="space-y-1.5">
					<ChromeBar className="h-2 w-3/5" />
					<ChromeBar tone="subtle" className="h-2 w-4/5" />
				</div>
				<p className="mt-2 text-[10px] text-muted-foreground">
					TanStack Table column config — accessor, header, cell renderer, and
					sort rules
				</p>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { DataTableAnatomy };
