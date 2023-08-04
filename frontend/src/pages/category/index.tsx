import { Header } from "@/components/ui/Header";
import Head from "next/head";
import { ButtonAdd, Container, FormCategory, InputCategory } from "./styles";
import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CATEGORY } from "@/api/querys";

export default function Category() {
  const [name, setName] = useState("");
  const [createCategory] = useMutation(CREATE_CATEGORY);

  async function handleAddCategory(event: FormEvent) {
    event.preventDefault();

    if (!name) return toast.warning("Nome da categoria não pode estar vazio.");

    const categoryDate = {
      input: {
        name,
      },
    };

    createCategory({
      variables: categoryDate,
    })
      .then(() => toast.success("Categoria criada com sucesso."))
      .catch((error) => toast.error(error.message));

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
