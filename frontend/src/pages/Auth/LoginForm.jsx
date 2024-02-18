import { useTranslation } from "react-i18next";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col items-center gap-4">
      <CustomInput type="email" label={t('auth.form.emailLabel')} />
      <CustomInput type="password" label={t('auth.form.passwordLabel')} />
      <CustomButton className="w-52 mt-2">{t('auth.form.submitLabel.login')}</CustomButton>
    </form>
  )
}

export default LoginForm;