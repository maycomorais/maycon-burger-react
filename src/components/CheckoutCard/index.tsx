import { Product } from "../../types";
import * as Styled from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";
import Input from "../Input";


interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <img alt={product.name} src={product.image} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}|Unidade</p>
          <span>R${(quantity * product.price).toFixed(2)}| Total</span>
        </div>
        <Styled.ProductQuantityInput
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Observações"
        />
        <Styled.RemoveProductButton
          onClick={() => toast.error("Sessão em desenvolvimento!")}
        >
          <TrashIcon />
        </Styled.RemoveProductButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
