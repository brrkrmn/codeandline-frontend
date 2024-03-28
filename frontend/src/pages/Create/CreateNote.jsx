import { Divider } from '@nextui-org/react';
import CodeEditor from '../../components/CodeEditor';
import FoldersSelect from '../../components/FoldersSelect/FoldersSelect';
import TextInput from '../../components/TextInput/TextInput';
import { textInputTypes } from '../../components/TextInput/constants';

const CreateNote = () => {
  return (
    <div className="w-full">
      <TextInput type={textInputTypes.title} />
      <TextInput type={textInputTypes.description} className="line-clamp-2" />
      <div className='mt-4'>
        <FoldersSelect />
      </div>
      <Divider className="my-6" />
      <div className="flex flex-col laptop:flex-row items-start justify-center gap-10 px-2">
        <div className=" w-full overflow-hidden basis-1/2">
          <CodeEditor
            editable={true}
            size='screen'
          />
        </div>
        <div className="basis-1/2">
        </div>
      </div>
    </div>
  )
}

export default CreateNote;