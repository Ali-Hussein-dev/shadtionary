const githubRepo = "https://github.com/ali-hussein-dev/shadtionary";
const githubBranch = "main";

export const urls = {
	github: githubRepo,
	githubNewIssue: `${githubRepo}/issues/new`,
	x: "https://x.com/alibey_10",
	shoogle: "https://shoogle.dev?utm_source=shadtionary&utm_medium=referral",
	contentEdit: (slug: string) =>
		`${githubRepo}/edit/${githubBranch}/src/content/${slug}.md`,
	comparisonEdit: (slug: string) =>
		`${githubRepo}/edit/${githubBranch}/src/content/comparisons/${slug}.md`,
};