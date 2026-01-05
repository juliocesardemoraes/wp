import LanguageToggle from "@/components/custom/language-toggle";
import { LoginForm } from "@/components/custom/login-form";
import { ThemeToggle } from "@/components/custom/theme-toggle";
// import { useTranslations } from "next-intl";

export default function Login() {
  // const t = useTranslations("Home");

  return (
    <main>
      <ThemeToggle></ThemeToggle>
      <LanguageToggle></LanguageToggle>
      <LoginForm></LoginForm>
      {/* <h1>{t("title")}</h1> */}
    </main>
  );
}
