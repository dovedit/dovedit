import { CarbonBadges } from "./carbon-badges";
import { Logo } from "./logo";

export interface FooterProps {
	hide?: boolean;
}

export function Footer(props: FooterProps) {
	const {
		hide = false
	} = props;

	if (hide) return null;

	return (
		<footer className="bg-background border-t w-full py-16">
			<div className="container flex flex-col md:flex-row gap-y-8 gap-x-16">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center gap-4">
						<Logo
							width={32}
							height={32}
						/>
						<div>
							<p>
								Dovedit
							</p>
							<a href="/licenta">
								FSL, Version 1.1, ALv2 Future License
							</a>
						</div>
					</div>
					<CarbonBadges/>
				</div>

				<div className="flex flex-col">
					<h2 className="text-muted-foreground">SOCIAL</h2>
					<a href="https://opencollective.com/dovedit">OpenCollective</a>
					<a href="https://github.com/dovedit">GitHub</a>
				</div>

				<div className="flex flex-col">
					<h2 className="text-muted-foreground">LEGAL</h2>
					<a href="/licenta">Licenta</a>
				</div>

				<div className="flex flex-col">
					<h2 className="text-muted-foreground">DESPRE</h2>
					<a href="/whitepaper">Whitepaper</a>
					<a href="https://github.com/orgs/dovedit/projects/2" target="_blank">Roadmap</a>
				</div>
			</div>
		</footer>
	)
}
