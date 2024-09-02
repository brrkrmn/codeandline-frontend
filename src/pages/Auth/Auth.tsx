import { Card, CardBody, CardFooter, CardHeader, Link, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { P } from "../../components/Typography/Typography";
import { constants } from "./Auth.constants";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm";

const Auth = () => {
  const [selected, setSelected] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(() => {
    if (location.pathname === constants.loginPath) {
      setSelected(constants.login)
    } else if (location.pathname === constants.signupPath) {
      setSelected(constants.signup)
    }
  }, [location.pathname])

  React.useEffect(() => {
    if (selected === constants.login) {
      navigate(constants.loginPath)
    } else if (selected === constants.signup) {
      navigate(constants.signupPath)
    }
  }, [selected])

  return (
    <Card
      isBlurred
      className={`my-auto rounded-2xl py-6 px-4 md:px-7 shadow-small bg-gradient-to-br from-background via-transparent to-background border-1 border-border max-w-[500px] w-full min-h-[466px] h-fit`}
    >
      <CardHeader className="flex justify-center">
        <Tabs
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={(key: string | number) => {
            setSelected(String(key));
          }}
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
      <CardFooter className="flex justify-center items-center">
        {selected === constants.login ? (
          <P variant="tiny">
            {t('auth.links.signup1')}
            <Link
              href="/signup"
              className="text-primary-light ml-2 font-normal">
              {t('auth.links.signup2')}
            </Link>
          </P>
        ) : (
          <P variant="tiny">
            {t('auth.links.login1')}
              <Link
                href="/login"
                className="text-primary-light ml-2 font-normal">
              {t('auth.links.login2')}
            </Link>
          </P>
        )}
      </CardFooter>
    </Card>
  );
};

export default Auth;