import { ScrollShadow } from "@nextui-org/react";
import CodeEditor from "../../components/CodeEditor/CodeEditor";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <div className="mr-auto w-full">
        <CodeEditor />
      </div>
      <ScrollShadow size={80} className="ml-auto px-2 w-full flex max-h-[600px] justify-center items-center">
        There will be notes here!
      </ScrollShadow>
    </div>
  )
}

export default Dashboard