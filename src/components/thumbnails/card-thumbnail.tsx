import { ChromeBar } from "@/components/chrome-bar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function CardThumbnail() {
	return (
		<div aria-hidden className="pointer-events-none w-full select-none">
			<Card className="w-full py-6">
				<CardHeader className="gap-2.5">
					<ChromeBar className="h-4 w-2/5" />
					<ChromeBar className="h-3 w-full" />
				</CardHeader>
				<CardContent>
					<ChromeBar className="h-3 w-3/4" />
				</CardContent>
			</Card>
		</div>
	);
}

export { CardThumbnail };
