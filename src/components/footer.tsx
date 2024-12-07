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
			<div className="container">
				<div className="flex flex-row gap-2">
					<Logo
						width={32}
						height={32}
					/>
					<div>
						<p>
							Dovedit
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
