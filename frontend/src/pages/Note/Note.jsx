import { BreadcrumbItem, Breadcrumbs, ScrollShadow } from "@nextui-org/react";
import icons from "../../assets/icons";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import CustomButton from "../../components/CustomButton";
import { P } from "../../components/Typography/Typography";

const Note = () => {
  return (
    <div className="w-full flex flex-col laptop:flex-row justify-center items-center gap-4">
      <Breadcrumbs
        underline="hover"
        size="lg"
        className="absolute top-[128px] tablet:top-[100px] left-4 tablet:left-16 wide:left-40"
        itemClasses={{
          item: "data-[current=true]:text-primary-light"
        }}
      >
        <BreadcrumbItem>Notes</BreadcrumbItem>
        <BreadcrumbItem>Data Structures</BreadcrumbItem>
      </Breadcrumbs>
      <div className="mr-auto w-full">
        <CodeEditor />
      </div>
      <div className="ml-auto px-4 w-full flex flex-col h-[600px] justify-between items-center gap-4">
        <CustomButton className="max-h-10">
          {icons.arrowUp}
        </CustomButton>
        <ScrollShadow size={80} >
          <P variant="big" className="max-h-[600px] text-lg tablet:text-2xl">
          There will be notes m ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefatextce without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
          </P>
        </ScrollShadow>
        <CustomButton className="max-h-10">
          {icons.arrowDown}
        </CustomButton>
      </div>
    </div>
  )
}

export default Note;