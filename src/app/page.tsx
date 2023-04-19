import {AboutSlide} from "@/app/components/slides/About";

interface ItemProps {
  index: number
}

export default function Home() {
  const Items: React.FC<ItemProps>[] = Array(10).fill(AboutSlide)

  return (
    <div className={"flex flex-col space-y-8 w-full h-fit"}>
      {Items.map((Item, index) => (
        <Item index={index} key={`slide_${index}`} />
      ))}
    </div>
  );
}
