import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { useAppContext } from '../../../../context/appContext/appProvider';
import { loginFormInitialValues, loginSchema } from "../../Auth.constants";

const LoginForm = () => {
  const { loginUser } = useAppContext();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginSchema,
    onSubmit: values => {loginUser(values)}
  })

  return (
    <form
      data-testid="form-login"
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center justify-center gap-4 h-full my-auto"
    >
      <CustomInput
        className="mt-auto"
        id="username"
        name="username"
        type="username"
        label={t('auth.form.usernameLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        errorMessage={formik.touched?.username ? formik.errors?.username : undefined}
      />
      <CustomInput
        id="password"
        name="password"
        type="password"
        label={t('auth.form.passwordLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errorMessage={formik.touched?.password ? formik.errors?.password : undefined}
      />
      <CustomButton
        type="submit"
        className="w-52 mt-auto"
      >
        {t('auth.form.submitLabel.login')}
      </CustomButton>
    </form>
  )
}

export default LoginForm;