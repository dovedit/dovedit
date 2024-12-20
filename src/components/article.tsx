import { mdClassName } from "@/lib/markdown";
import { Card, CardContent, CardHeader, CardDescription } from "./ui/card";
import { Separator } from "./ui/separator";


interface ArticleProps {
	title: string;
	htmlContent: string;
	publishedAtTimestamp?: number;
	summary?: string;
	sources?: string[];
}

export function Article(props: ArticleProps) {
	const textOnlyHtmlContent = props.htmlContent.replace(/<[^>]*>?/gm, "");
	const readTimeMins = Math.round(textOnlyHtmlContent.length / 1000);
	const dateStr = props.publishedAtTimestamp ? new Date(props.publishedAtTimestamp)
		.toLocaleDateString("ro-RO", {
			year: "numeric",
			month: "short",
			day: "numeric",
			timeZone: "Europe/Bucharest",
		}) : ""

	return (
		<article className="container">
			<h1
				className="text-5xl md:text-7xl font-bold"
			>
				{props.title}
			</h1>
			<p className="text-muted-foreground">
				{dateStr ?
					<>
						<span>
							{dateStr}
						</span>
						{" "}&middot;{" "}
					</>
				: null}
				<span>
					{readTimeMins === 1 ? "1 minut" : `${readTimeMins} minute`} de citit
				</span>
			</p>
			{props.summary ?
				<Card className="mb-4">
					<CardHeader>
						<CardDescription>
							Generat de AI
						</CardDescription>
					</CardHeader>
					<CardContent>
						{props.summary}
					</CardContent>
				</Card>
			: null}
			<div className={mdClassName}>
				<div
					dangerouslySetInnerHTML={{
						__html: props.htmlContent,
					}}
				></div>
			</div>
			{props.sources?.length ?
				<Card className="mt-4">
					<CardHeader>
						<CardDescription>
							Surse
						</CardDescription>
					</CardHeader>
					<CardContent>
						{props.sources.map((source, idx, list) => (
							<>
								<a
									href={source}
									target="_blank"
									className="block pb-5 pt-4"
								>
									{new URL(source).hostname}
								</a>
								{list.length-1 !== idx ?
									<Separator/>
								: null}
							</>
						))}
					</CardContent>
				</Card>
			: null}
		</article>
	)
}
