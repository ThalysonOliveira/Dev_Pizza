import { Header } from "@/components/ui/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import {
  ButtonAddCategory,
  Container,
  FormCategory,
  ImagePreview,
  InputCategory,
  LabelImage,
  TextAreaCategory,
} from "./styles";
import { ChangeEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FIND_ALL_CATEGORIES } from "@/api/querys";
import { setupAPIClient } from "@/api/dev-pizza-api";

type ItemProps = {
  id: string;
  name: string;
};

type CategoryProps = {
  categoryList: ItemProps[];
};

export default function Product({ categoryList }: CategoryProps) {
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null) as any;
  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const productImage = event.target.files[0];

    if (!productImage) return;

    if (
      productImage.type === "image/png" ||
      productImage.type === "image/jpeg"
    ) {
      setImgFile(productImage);
      setImgUrl(URL.createObjectURL(productImage));
    }
  }

  function handleChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
    setCategorySelected(Number(event.target.value));
  }

  return (
    <>
      <Head>Novo produto - Dev Pizza</Head>

      <div>
        <Header />

        <Container>
          <h1>Novo produto</h1>

          <FormCategory>
            <LabelImage>
              <span>
                <FiUpload size={30} color="#FFF" />
              </span>

              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />

              {imgUrl && <ImagePreview src={imgUrl} alt="Foto do produto" />}
            </LabelImage>

            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                );
              })}
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
  const apiClient = setupAPIClient(ctx as any);
  const { data } = await apiClient.query({ query: FIND_ALL_CATEGORIES });

  return {
    props: {
      categoryList: data.findAllCategory,
    },
  };
});
