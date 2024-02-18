import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomInput from "../components/CustomInput/CustomInput";

const Auth = () => {
  const [selected, setSelected] = React.useState("login");

  return (
    <Card
      isBlurred
      className={`rounded-2xl py-6 px-4 md:px-7 shadow-small bg-gradient-to-br from-background via-transparent to-background border-1 border-border max-w-[500px] w-full`}
    >
      <CardHeader className="flex justify-center">
        <Tabs
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
          radius="full"
          size="lg"
          classNames={{
            tabList: "border-border",
            tabContent: "group-data-[selected=true]:text-primary-light",
            cursor: "dark:bg-primary-background border-border border-1"
          }}
        >
          <Tab onClick={() => setSelected("login")} key="login" title="Login" />
          <Tab onClick={() => setSelected("signup")} key="signup" title="Sign Up"/>
        </Tabs>
      </CardHeader>
      <CardBody>
        {selected === "login" ?
          (
            <form className="flex flex-col items-center gap-4">
              <CustomInput type="email" label="Email" />
              <CustomInput type="password" label="Password" />
              <CustomButton className="w-52 mt-2">Log In</CustomButton>
            </form>
        ) : (
            <form className="flex flex-col items-center gap-4">
              <CustomInput type="email" label="Email" />
              <div className="flex flex-col gap-4 justify-between mobile:flex-row mobile:gap-2 w-full">
                <CustomInput type="password" label="Password" />
                <CustomInput type="password" label="Confirm Password" />
              </div>
              <CustomButton className="w-52 mt-2">Sign Up</CustomButton>
            </form>
        )}
      </CardBody>
    </Card>
  );
};

export default Auth;