import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import cn from "cnfast";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeHotkey } from "@/hooks/use-theme";
import { getThemeServerFn } from "@/lib/theme";
import appCss from "../styles.css?url";

const siteDescription =
	"A visual dictionary of UI components. Learn the names of UI elements and their parts, so you can steer AI agents with precise vocabulary.";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Shadtionary",
			},
			{
				name: "description",
				content: siteDescription,
			},
			{
				property: "og:title",
				content: "Shadtionary",
			},
			{
				property: "og:description",
				content: siteDescription,
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	beforeLoad: async () => ({ theme: await getThemeServerFn() }),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { theme } = Route.useRouteContext();

	return (
		<html
			lang="en"
			className={cn(theme === "dark" && "dark", "scroll-smooth antialiased")}
			suppressHydrationWarning
		>
			<head>
				<HeadContent />
			</head>
			<body className="flex min-h-screen flex-col font-sans antialiased">
				<ThemeHotkey />
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
