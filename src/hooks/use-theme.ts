import { useHotkey } from "@tanstack/react-hotkeys";
import { useRouteContext, useRouter } from "@tanstack/react-router";

import { setThemeServerFn, type Theme } from "@/lib/theme";

const themes: Theme[] = ["light", "dark"];

type UseThemeOptions = {
	hotkey?: boolean;
};

export function useTheme({ hotkey = false }: UseThemeOptions = {}) {
	const { theme: routeTheme } = useRouteContext({ from: "__root__" });
	const router = useRouter();
	const theme: Theme = routeTheme === "dark" ? "dark" : "light";

	function toggleTheme() {
		const next = themes[(themes.indexOf(theme) + 1) % themes.length];
		document.documentElement.classList.toggle("dark", next === "dark");
		void setThemeServerFn({ data: next }).then(() => router.invalidate());
	}

	useHotkey("D", toggleTheme, { enabled: hotkey });

	return { theme, toggleTheme };
}

export function ThemeHotkey() {
	useTheme({ hotkey: true });
	return null;
}
