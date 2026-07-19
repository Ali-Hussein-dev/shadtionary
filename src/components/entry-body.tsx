
import { createCodePlugin } from '@streamdown/code';
import { Streamdown } from "streamdown";

const code = createCodePlugin({

});
export function EntryBody({ body }: { body: string }) {
	return (
		<Streamdown
			mode="static"
			plugins={{ code }}
			controls={false}
		>
			{body}
		</Streamdown>
	);
}
