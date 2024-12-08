import { GlobeIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface CarbonResponse {
	green: boolean;
	cleanerThan: number;
	rating: string;
}

// Only fetch carbon results in production
const result = import.meta.env.DEV ?
	{ green: true, cleanerThan: 1, rating: "N/A" } :
	await fetch("https://api.websitecarbon.com/site?url=https://dovedit.ro")
		.then(res => res.json() as Promise<CarbonResponse>)
		.catch(() => ({ green: false, cleanerThan: 0, rating: "N/A" }));

export function CarbonBadges() {
	return (
		<div className="flex flex-col">
			<a href="https://www.websitecarbon.com/website/dovedit-ro/" target="_blank">
				<Badge variant="outline" className="w-fit">
					<GlobeIcon className="w-4 h-4 mr-2" />
					Cleaner than {result.cleanerThan * 100}% of websites
				</Badge>
			</a>

			<a href="https://www.websitecarbon.com/website/dovedit-ro/" target="_blank">
				<Badge variant="outline" className="w-fit">
					<span className="font-black mr-2">{result.rating}</span>
					Website Carbon Rating
				</Badge>
			</a>
		</div>
	)
}
