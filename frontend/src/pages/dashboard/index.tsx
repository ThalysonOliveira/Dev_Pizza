import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "@/components/ui/Header";
import {
  Container,
  EmptyList,
  HeaderContainer,
  ListOrders,
  OrderItem,
  Tag,
} from "./styles";
import { FiRefreshCcw } from "react-icons/fi";
import { setupAPIClient } from "@/api/dev-pizza-api";
import { DETAIL_ORDER, FINISH_ORDER, LIST_ORDERS } from "@/api/querys";
import { useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
import { ModalOrder } from "@/components/ui/ModalOrder";

type ItemProps = {
  id: string;
  name: string;
  table: string;
  draft: boolean;
  status: boolean;
};

type OrderProps = {
  listOrders: ItemProps[];
};

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    banner: string;
  };
  order: {
    id: string;
    table: number;
    name: string;
    status: boolean;
  };
};

export default function Dashboard({ listOrders }: OrderProps) {
  const [orders, setOrders] = useState(listOrders || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [finishOrder] = useMutation(FINISH_ORDER);

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupAPIClient();
    const { data } = await apiClient.query({
      query: DETAIL_ORDER,
      variables: {
        input: {
          orderId: id,
        },
      },
    });

    setModalItem(data.detailOrder);
    setModalVisible(true);
  }

  async function handleFinishItem(id: string) {
    await finishOrder({
      variables: {
        input: {
          orderId: id,
        },
      },
    });

    const apiClient = setupAPIClient();
    const { data } = await apiClient.query({
      query: LIST_ORDERS,
    });

    setOrders(data.listOrders);
    setModalVisible(false);
  }

  async function handleRefreshOrders() {
    const apiClient = setupAPIClient();
    const { data } = await apiClient.query({
      query: LIST_ORDERS,
    });

    setOrders(data.listOrders);
  }

  Modal.setAppElement("#__next");

  return (
    <>
      <Head>Painel - Dev Pizza</Head>
      <Header />

      <Container>
        <HeaderContainer>
          <h1>Últimos pedidos</h1>
          <button onClick={handleRefreshOrders}>
            <FiRefreshCcw color="#3FFFA3" size={25} />
          </button>
        </HeaderContainer>

        <ListOrders>
          {!orders.length && (
            <EmptyList>Nenhum pedido aberto foi encontrado...</EmptyList>
          )}

          {orders.map((item) => (
            <OrderItem key={item.id}>
              <button onClick={() => handleOpenModalView(item.id)}>
                <Tag />
                <span>{item.table}</span>
              </button>
            </OrderItem>
          ))}
        </ListOrders>
      </Container>
      {modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          order={modalItem as any}
          handleFinishOrder={handleFinishItem}
        />
      )}
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const { data } = await apiClient.query({ query: LIST_ORDERS });

  return {
    props: {
      listOrders: data.listOrders,
    },
  };
});
