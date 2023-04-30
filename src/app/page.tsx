import {AboutSlide} from "@/app/components/slides/About";
import {ProjectsSlide} from "@/app/components/slides/Projects";
import {Tools} from "@/app/components/slides/Tools";

interface ItemProps {
  index: number
}

export default function Home() {
  const Items: React.FC<ItemProps>[] = [AboutSlide, ProjectsSlide, Tools]

  return (
    <div className={"flex flex-col space-y-8 pb-36 w-full h-fit min-h-screen"}>
      {Items.map((Item, index) => (
        <Item index={index} key={`slide_${index}`} />
      ))}
    </div>
  );
}
