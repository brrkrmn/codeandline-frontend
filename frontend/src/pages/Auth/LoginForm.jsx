import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { loginUser } from "../../reducers/userReducer";
import { loginFormInitialValues, loginSchema } from "./Auth.constants";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginSchema,
    onSubmit: values => {dispatch(loginUser(values))}
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center gap-4"
    >
      <CustomInput
        id="username"
        name="username"
        type="username"
        label={t('auth.form.usernameLabel')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        errorMessage={formik.touched?.username && formik.errors?.username}
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