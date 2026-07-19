import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
	const { toggleTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label="Toggle theme"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="size-4"
				aria-label="Toggle theme"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
				<path d="M12 3l0 18"></path>
				<path d="M12 9l4.65 -4.65"></path>
				<path d="M12 14.3l7.37 -7.37"></path>
				<path d="M12 19.6l8.85 -8.85"></path>
			</svg>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
