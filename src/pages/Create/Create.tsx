import CreateCard from "../../components/CreateCard/CreateCard";

const Create = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col laptop:flex-row items-center justify-center gap-10">
      <CreateCard type="note" />
      <CreateCard type="folder" />
    </div>
  )
}

export default Create;