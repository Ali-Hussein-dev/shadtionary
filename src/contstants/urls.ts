const githubRepo = "https://github.com/ali-hussein-dev/shadtionary";
const githubBranch = "main";

export const urls = {
	github: githubRepo,
	githubPullRequests: `${githubRepo}/pulls`,
	x: "https://x.com/alibey_10",
	contentEdit: (slug: string) =>
		`${githubRepo}/edit/${githubBranch}/src/content/${slug}.md`,
};