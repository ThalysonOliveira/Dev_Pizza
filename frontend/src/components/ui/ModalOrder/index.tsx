import { OrderItemProps } from "@/pages/dashboard";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import {
  Container,
  ContainerItem,
  ItemDescription,
  OrderButton,
  Table,
} from "./styles";

interface ModelOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
}

export function ModalOrder({
  isOpen,
  onRequestClose,
  order,
  handleFinishOrder,
}: ModelOrderProps) {
  const customStyles = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1D1D2E",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: "transparent", border: 0 }}
      >
        <FiX size={45} color="#F34748" />
      </button>

      <Container>
        <h2>Detalhes do pedido</h2>
        <Table>
          Mesa: <strong>{order[0].order.table}</strong>
        </Table>

        {order.map((item) => (
          <ContainerItem key={item.id}>
            <span>
              {item.amount} - <strong>{item.product.name}</strong>
            </span>
            <ItemDescription>{item.product.description}</ItemDescription>
          </ContainerItem>
        ))}

        <OrderButton onClick={() => handleFinishOrder(order[0].order.id)}>
          Concluir pedido
        </OrderButton>
      </Container>
    </Modal>
  );
}
