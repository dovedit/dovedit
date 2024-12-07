import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import { Button } from "./ui/button";

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
					<picture
						className="w-8 h-8"
					>
						<source srcSet={logoDark.src} media="(prefers-color-scheme: dark)"/>
						<source srcSet={logoLight.src} media="(prefers-color-scheme: light)"/>
						<img src={logoLight.src} alt="Logo Dovedit" />
					</picture>
				</Button>
			</a>
		</nav>
	)
}
