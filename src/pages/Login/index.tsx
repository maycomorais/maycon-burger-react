import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import { toast } from "react-hot-toast";
import { api } from "../../services";
import { useAuth } from "../../contexts/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { StyledInput } from "../../assets/styles/globalStyles";
import { ErrorMessage } from "../../assets/styles/globalStyles";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválido");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <img alt="logo" src={logo} />
          <h1>Maycon Burguer</h1>
        </Styled.LoginLogoContainer>
        <StyledInput
          placeholder="Email"
          {...register("email")}
          inputSize="login"
        />
        <StyledInput
          type="password"
          placeholder="Senha"
          inputSize="login"
          {...register("password")}
        />
        <ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </ErrorMessage>
        <Button text="Entrar" size="large" type="submit" />
        <Styled.Paragraph>ou</Styled.Paragraph>
        <Styled.ButtonGoogle
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          <img
            src="https://aws1.discourse-cdn.com/auth0/optimized/3X/8/a/8a06490f525c8f65d4260204bc3bc7b0e1fb0ba7_2_500x500.png"
            alt="Login com Google"
          />
          <p>Login com Google</p>
        </Styled.ButtonGoogle>
        <Styled.ButtonFacebook
          onClick={() => toast.error("Sessão em desenvolvimento")}
        >
          <img
            src="https://icons-for-free.com/download-icon-facebook+logo+logo+website+icon-1320190502625926346_512.png"
            alt="Login com Facebook"
          />
          <p>Login com Facebook</p>
        </Styled.ButtonFacebook>
        <a href="#">
          <Styled.Paragraph
            onClick={() => toast.error("Sessão em desenvolvimento")}
          >
            Esqueceu a senha?
          </Styled.Paragraph>
        </a>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
