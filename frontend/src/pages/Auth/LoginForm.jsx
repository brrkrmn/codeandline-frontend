import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { loginFormInitialValues, loginSchema } from "./Auth.constants";

const LoginForm = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginSchema,
    onSubmit: values => {
      alert(JSON.stringify(values))
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <CustomInput
        id="email"
        name="email"
        type="email"
        label={t('auth.form.emailLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errorMessage={formik.touched?.email && formik.errors?.email}
      />
      <CustomInput
        id="password"
        name="password"
        type="password"
        label={t('auth.form.passwordLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errorMessage={formik.touched?.password && formik.errors?.password}
      />
      <CustomButton
        type="submit"
        className="w-52 mt-2"
      >
        {t('auth.form.submitLabel.login')}
      </CustomButton>
    </form>
  )
}

export default LoginForm;