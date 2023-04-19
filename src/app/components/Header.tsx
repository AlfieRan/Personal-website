import Socials from "@/app/components/Socials";

export const Header = () => {
	return (
		<div className="flex w-full items-center justify-between text-sm lg:flex">
			<span className={"font-semibold text-2xl"}>Alfie Ranstead</span>
			<div>
				<Socials />
			</div>
		</div>
	);
}