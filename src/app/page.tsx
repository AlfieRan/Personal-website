import {AboutSlide} from "@/app/components/slides/About";

export default function Home() {
  const Items: JSX.Element[] = Array(10).fill(AboutSlide)

  return (
    <div className={"flex flex-col space-y-8 w-full h-fit"}>
      {Items.map((Item, index) => (
        <Item index={index} key={`slide_${index}`} />
      ))}
    </div>
  );
}
