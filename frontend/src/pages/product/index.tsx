import { Header } from "@/components/ui/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import {
  ButtonAddCategory,
  Container,
  FormCategory,
  InputCategory,
  TextAreaCategory,
} from "./styles";

export default function Product() {
  return (
    <>
      <Head>Novo produto - Dev Pizza</Head>

      <div>
        <Header />

        <Container>
          <h1>Novo produto</h1>

          <FormCategory>
            <select>
              <option>Bebidas</option>
              <option>Pizzas</option>
            </select>

            <InputCategory type="text" placeholder="Digite o nome do produto" />

            <InputCategory type="text" placeholder="Preço do produto" />

            <TextAreaCategory placeholder="Descreva o seu produto" />

            <ButtonAddCategory type="submit">Cadastrar</ButtonAddCategory>
          </FormCategory>
        </Container>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
