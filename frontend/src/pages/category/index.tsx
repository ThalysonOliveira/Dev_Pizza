import { Header } from "@/components/ui/Header";
import Head from "next/head";
import { ButtonAdd, Container, FormCategory, InputCategory } from "./styles";
import { FormEvent, useState } from "react";

export default function Category() {
  const [name, setName] = useState("");

  async function handleAddCategory(event: FormEvent) {
    event.preventDefault();

    alert(name);

    const categoryDate = {
      input: {
        name,
      },
    };

    //Todo: call register category

    setName("");
  }

  return (
    <>
      <Head>Nova Categoria - Dev Pizza</Head>
      <div>
        <Header />

        <Container>
          <h1>Cadastrar categorias</h1>

          <FormCategory onSubmit={handleAddCategory}>
            <InputCategory
              type="text"
              placeholder="Digite o nome da categoria"
              value={name}
              onChange={(event: any) => setName(event.target.value)}
            />

            <ButtonAdd type="submit">Cadastrar</ButtonAdd>
          </FormCategory>
        </Container>
      </div>
    </>
  );
}
