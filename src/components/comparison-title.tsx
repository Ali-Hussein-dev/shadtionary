const VS_SPLIT = /\s+vs\s+/i;

type ComparisonTitleProps = {
	title: string;
};

export function ComparisonTitle({ title }: ComparisonTitleProps) {
	const parts = title.split(VS_SPLIT);

	if (parts.length !== 2) {
		return <span>{title}</span>;
	}

	return (
		<span>
			{parts[0]}
			<span className="text-primary lowercase px-1">
				vs.
			</span>
			{parts[1]}
		</span>
	);
}
