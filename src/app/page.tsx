import {AboutSlide, ContactSlide, EducationSlide, ProjectsSlide, Tools, Youtube} from "@/app/components/slides";

interface ItemProps {
  index: number
}

export default function Home() {
  const Items: React.FC<ItemProps>[] = [AboutSlide, ProjectsSlide, Tools, Youtube, EducationSlide, ContactSlide]

  return (
    <div className={"flex flex-col space-y-8 pb-12 w-full h-fit min-h-screen"}>
      {Items.map((Item, index) => (
        <Item index={index} key={`slide_${index}`} />
      ))}
    </div>
  );
}
