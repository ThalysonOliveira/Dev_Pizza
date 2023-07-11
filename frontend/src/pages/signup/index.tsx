import Head from "next/head";
import LogoImg from "../../../public/logo.svg";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ContainerCenter, Form, Login, Text } from "../../../home";

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

          <Link href={"/"}>
            <Text>Já possuiu uma conta? Faça login!</Text>
          </Link>
        </Login>
      </ContainerCenter>
    </>
  );
}
