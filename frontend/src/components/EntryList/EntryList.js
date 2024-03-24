import { Code, Divider } from '@nextui-org/react';
import React from 'react';
import { H2, P } from '../Typography';

const EntryList = ({ entries, code }) => {
  console.log(entries)
  return (
    <div>
      <H2 className="font-thin mb-6 text-primary-light">Notes</H2>
      <div>
        {entries.map((entry, index) => (
          <div>
            <div className="flex items-center justify-center gap-6 px-4">
              <div className="basis-1/2 flex overflow-hidden gap-8">
                <P>{index + 1}.</P>
                <div className="flex flex-col gap-2 overflow-hidden">
                  {entry.lineNumbers.map(lineNumber => (
                    <Code className="overflow-hidden text-ellipsis">{code.split('\n')[lineNumber]}</Code>
                  ))}
                </div>
              </div>
              <P className="basis-1/2 overflow-hidden text-ellipsis">{entry.content}</P>
            </div>
            <Divider className="my-6" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EntryList;
