import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { constants } from "./Auth.constants";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [selected, setSelected] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(() => {
    if (location.pathname === constants.loginPath) {
      setSelected(constants.login)
    } else {
      setSelected(constants.signup)
    }
  }, [])

  React.useEffect(() => {
    if (selected === constants.login) {
      navigate(constants.loginPath)
    } else {
      navigate(constants.signupPath)
    }
  }, [selected])

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
            tab: "data-[focus-visible=true]:outline-primary-dark",
            tabContent: "group-data-[selected=true]:text-primary-light",
            cursor: "dark:bg-primary-background border-border border-1"
          }}
        >
          <Tab onClick={() => setSelected(constants.login)} key={constants.login} title={t('auth.login')} />
          <Tab onClick={() => setSelected(constants.signup)} key={constants.signup} title={t('auth.signup')} />
        </Tabs>
      </CardHeader>
      <CardBody>
        {selected === constants.login ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
      </CardBody>
    </Card>
  );
};

export default Auth;