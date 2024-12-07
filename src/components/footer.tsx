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
		<footer className="bg-background border border-t-muted w-full p-16">
			<div className="container flex flex-row gap-16">
				<div className="flex flex-row gap-4">
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

				<div className="flex flex-col">
					<h2 className="text-muted-foreground">SOCIAL</h2>
					<a href="https://opencollective.com/dovedit">OpenCollective</a>
					<a href="https://github.com/dovedit">GitHub</a>
					<a href="https://instagram.com/doveditro">Instagram</a>
				</div>
			</div>
		</footer>
	)
}
