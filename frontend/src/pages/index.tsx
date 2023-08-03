import Head from "next/head";
import LogoImg from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ContainerCenter, Form, LinkInfo, Login, Text } from "../../home";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { canSSRGuest } from "@/utils/canSSRGuest";

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let authData = {
      input: {
        email,
        password,
      },
    };

    await signIn(authData);
  }

  return (
    <>
      <Head>
        <title>DevPizza - Faça seu login</title>
      </Head>
      <ContainerCenter>
        <Image src={LogoImg} alt="Logo Dev Pizza" />

        <Login>
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button loading={false}>Acessar</Button>
          </Form>

          <LinkInfo href="/signup">
            <Text>Não possuiu uma conta? Cadastre-se</Text>
          </LinkInfo>
        </Login>
      </ContainerCenter>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (context) => {
  return {
    props: {},
  };
});
