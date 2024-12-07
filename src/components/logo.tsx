import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

interface Props {
	width?: number;
	height?: number;
}

export function Logo(props: Props) {
	return (
		<picture
			className="block"
			style={{
				width: props.width ? `${props.width}px` : "100%",
				height: props.height ? `${props.height}px` : "100%",
			}}
		>
			<source srcSet={logoDark.src} media="(prefers-color-scheme: dark)" />
			<source srcSet={logoLight.src} media="(prefers-color-scheme: light)" />
			<img src={logoLight.src} alt="Logo Dovedit" />
		</picture>
	);
}
