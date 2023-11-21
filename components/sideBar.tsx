import { Button } from "@nextui-org/react";

export default function SideBar() {
  return (
    <div className="flex flex-col self-stretch h-full gap-2 p-2 bg-foreground/10">
      <Button isIconOnly></Button>
      <Button isIconOnly></Button>
      <Button isIconOnly></Button>
      <Button isIconOnly></Button>
      <Button className="mt-auto mb-0" isIconOnly></Button>
    </div>
  );
}
