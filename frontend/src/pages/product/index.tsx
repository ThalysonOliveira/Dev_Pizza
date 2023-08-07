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

export default function Product() {
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null) as any;

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
