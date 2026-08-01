import { Skeleton } from "@/components/ui/skeleton";

export function ArticleLoadingSkeleton() {
	return (
		<div className="flex flex-col gap-4">
			<Skeleton className="h-5 w-full" />
			<Skeleton className="h-5 w-[92%]" />
			<Skeleton className="h-5 w-[88%]" />
			<Skeleton className="h-5 w-[70%]" />
			<Skeleton className="mt-2 h-5 w-full" />
			<Skeleton className="h-5 w-[85%]" />
			<Skeleton className="mt-2 h-5 w-full" />
			<Skeleton className="h-5 w-[60%]" />
		</div>
	);
}
