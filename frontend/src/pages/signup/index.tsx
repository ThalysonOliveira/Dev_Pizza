import Head from "next/head";
import LogoImg from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ContainerCenter, Form, LinkInfo, Login, Text } from "../../../home";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <ContainerCenter>
        <Image src={LogoImg} alt="Logo Dev Pizza" />

        <Login>
          <Form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="text" placeholder="Digite seu email" />
            <Input type="password" placeholder="Sua senha" />
            <Button loading={false}>Cadastrar</Button>
          </Form>

          <LinkInfo href={"/"}>
            <Text>Já possuiu uma conta? Faça login!</Text>
          </LinkInfo>
        </Login>
      </ContainerCenter>
    </>
  );
}
