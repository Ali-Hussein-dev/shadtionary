import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

function CarouselThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<Carousel className="w-full">
				<CarouselContent className="-ml-2">
					{["slide-1", "slide-2", "slide-3"].map((slide) => (
						<CarouselItem key={slide} className="basis-[85%] pl-2">
							<div className="aspect-5/3 rounded-lg bg-muted" />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-1 size-7 bg-background/90 shadow-sm disabled:opacity-100" />
				<CarouselNext className="right-1 size-7 bg-background/90 shadow-sm disabled:opacity-100" />
			</Carousel>
		</div>
	);
}

export { CarouselThumbnail };
