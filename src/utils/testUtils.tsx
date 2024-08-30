import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement, ReactNode } from "react";
import AppProvider from "../context/appContext/appProvider";
import EditorProvider from "../context/editorContext/editorProvider";

const AllTheProviders = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <AppProvider>
      <EditorProvider>
        {children}
      </EditorProvider>
    </AppProvider>
  )
}

let customRerender: (
  ui: React.ReactElement<
    any,
    | string
    | ((props: any) => React.ReactElement<any, any> | null)
    | (new (props: any) => React.Component<any, any, any>)
  >
) => void

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => {
  const r = render(ui, {
    wrapper: AllTheProviders,
    ...options
  });
  customRerender = r.rerender;
  return r;
}

export { AllTheProviders, customRerender, customRender as render };
