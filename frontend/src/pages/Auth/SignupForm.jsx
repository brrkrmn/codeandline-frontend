import { useTranslation } from "react-i18next";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const SignupForm = () => {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col items-center gap-4">
      <CustomInput type="email" label={t('auth.form.emailLabel')} />
      <div className="flex flex-col gap-4 justify-between mobile:flex-row mobile:gap-2 w-full">
        <CustomInput type="password" label={t('auth.form.passwordLabel')} />
        <CustomInput type="password" label={t('auth.form.confirmPasswordLabel')} />
      </div>
      <CustomButton className="w-52 mt-2">{t('auth.form.submitLabel.signup')}</CustomButton>
    </form>
  )
}

export default SignupForm;