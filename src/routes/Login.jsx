import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import MainTemplate from "../templates/MainTemplate";
import PageHeader from "../components/PageHeader";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Informe seu e-mail";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "E-mail inválido";

    if (!form.password) newErrors.password = "Informe sua senha";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // TODO: integrar com a API de autenticação
      // const res = await fetch("http://localhost:5000/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error();

      navigate("/");
    } catch {
      setErrors({ form: "Não foi possível entrar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainTemplate>
      <section className="w-full h-full bg-bg flex flex-col justify-center items-center py-10">
        <PageHeader title="Bem-vindo de volta">
          Entre com sua conta para continuar convertendo
        </PageHeader>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-100 bg-surface border border-borderc rounded-xl2 shadow-sm p-8 flex flex-col gap-5"
        >
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="voce@exemplo.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-text3 hover:text-text2"
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            }
          />

          {errors.form && (
            <p className="text-error text-[13px] font-mono text-center">
              {errors.form}
            </p>
          )}

          <Button type="submit" full disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>

          <p className="text-text2 text-[14px] font-mono text-center">
            Não tem uma conta?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-primaryHover font-semibold"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </section>
    </MainTemplate>
  );
}
