import { Button } from "./ui/button";
import { Logo } from "./logo";

export interface NavbarProps {
	hide?: boolean
}

export function Navbar(props: NavbarProps) {
	const {
		hide = false
	} = props;

	if (hide) return null;

	return (
		<nav
			className="flex flex-row h-16 p-2 container"
		>
			<a href="/">
				<Button
					variant="outline"
					size="icon"
				>
					<Logo
						width={32}
						height={32}
					/>
				</Button>
			</a>
		</nav>
	)
}
