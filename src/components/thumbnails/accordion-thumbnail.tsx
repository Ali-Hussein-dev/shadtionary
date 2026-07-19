import { ChromeBar } from "@/components/chrome-bar";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
	{
		value: "item-1",
		trigger: "w-1/3",
		content: ["w-8/12", "w-10/12", "w-6/12"],
	},
	{
		value: "item-2",
		trigger: "w-1/3",
		content: ["w-full", "w-3/4"],
	},
	{
		value: "item-3",
		trigger: "w-1/3",
		content: ["w-5/6"],
	},
] as const;

function AccordionThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<Accordion defaultValue={["item-1"]} className="w-full bg-secondary p-4 rounded-lg">
				{items.map((item) => (
					<AccordionItem key={item.value} value={item.value}>
						<AccordionTrigger className="py-2 hover:no-underline">
							<ChromeBar className={cn("h-3", item.trigger)} />
						</AccordionTrigger>
						<AccordionContent>
							<div className="space-y-1.5">
								{item.content.map((width, index) => (
									<ChromeBar
										key={width}
										tone={index % 2 === 0 ? "default" : "subtle"}
										className={cn("h-2", width)}
									/>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

export { AccordionThumbnail };
