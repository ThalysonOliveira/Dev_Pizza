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
import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from "react";
import { FiUpload } from "react-icons/fi";
import {
  CREATE_PRODUCT,
  FIND_ALL_CATEGORIES,
  UPLOAD_IMAGE,
} from "@/api/querys";
import { setupAPIClient } from "@/api/dev-pizza-api";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

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
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

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
    setCategoryId(categories[Number(event.target.value)].id);
    setCategorySelected(Number(event.target.value));
  }

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleAddProduct(event: FormEvent) {
    event.preventDefault();

    if (!name || !description || !categoryId || !price || !imgUrl)
      return toast.warning("Todos os campos devem estar preenchidos");

    const base64 = await convertToBase64(imgFile);

    try {
      const { data } = await uploadImage({
        variables: {
          input: {
            file: base64,
            name: imgFile.name,
            type: imgFile.type,
          },
        },
      });

      createProduct({
        variables: {
          input: {
            name,
            price,
            description,
            banner: data.uploadImage || "",
            categoryId,
          },
        },
      })
        .then(() => toast.success("Produto cadastrado com sucesso."))
        .catch((error) => toast.error(error.message));
    } catch (error) {
      toast.error("Erro ao inserir a imagem.");
    }

    setName("");
    setPrice(0);
    setDescription("");
    setImgUrl("");
  }

  return (
    <>
      <Head>Novo produto - Dev Pizza</Head>

      <div>
        <Header />

        <Container>
          <h1>Novo produto</h1>

          <FormCategory onSubmit={handleAddProduct}>
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

            <InputCategory
              type="text"
              placeholder="Digite o nome do produto"
              value={name}
              onChange={(event: any) => setName(event.target.value)}
            />

            <InputCategory
              type="number"
              placeholder="Preço do produto"
              value={price}
              onChange={(event: any) => setPrice(event.target.value)}
            />

            <TextAreaCategory
              placeholder="Descreva o seu produto"
              value={description}
              onChange={(event: any) => setDescription(event.target.value)}
            />

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
