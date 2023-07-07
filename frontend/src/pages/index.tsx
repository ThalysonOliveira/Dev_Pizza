import Head from "next/head";
import LogoImg from "../../public/logo.svg";
import Image from "next/image";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ContainerCenter, Form, Login, Text } from "../../home";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevPizza - Faça seu login</title>
      </Head>
      <ContainerCenter>
        <Image src={LogoImg} alt="Logo Dev Pizza" />

        <Login>
          <Form>
            <Input type="text" placeholder="Seu email" />
            <Input type="password" placeholder="Sua senha" />
            <Button loading={false}>Acessar</Button>
          </Form>

          <Text>Não possuiu uma conta? Cadastre-se</Text>
        </Login>
      </ContainerCenter>
    </>
  );
}
