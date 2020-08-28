import Link from "next/link";
import LoginForm from "../components/LoginForm";
import AppLayout from "../components/AppLayout";
export default function Login() {
  return (
    <AppLayout>
      <h1>Login</h1>
      <LoginForm />
      <Link href="/">
        <a>Home page!</a>
      </Link>
    </AppLayout>
  );
}
