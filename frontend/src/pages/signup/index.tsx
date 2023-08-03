import Head from "next/head";
import LogoImg from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ContainerCenter, Form, LinkInfo, Login, Text } from "../../../home";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "@/contexts/AuthContext";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !password)
      return toast.warning("Todos os campos devem estar preenchidos");

    const signUpData = {
      input: {
        name,
        email,
        password,
      },
    };

    setLoading(true);

    await signUp(signUpData);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <ContainerCenter>
        <Image src={LogoImg} alt="Logo Dev Pizza" />

        <Login>
          <Form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button loading={loading}>Cadastrar</Button>
          </Form>

          <LinkInfo href={"/"}>
            <Text>Já possuiu uma conta? Faça login!</Text>
          </LinkInfo>
        </Login>
      </ContainerCenter>
    </>
  );
}
