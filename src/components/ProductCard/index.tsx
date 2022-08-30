import toast from "react-hot-toast";
import { api } from "../../services";
import { Favorite, Product, User } from "../../types";
import Button from "../Button";
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductCard = ({
  product,
  isFavoritesList,
  handleGetFavorites,
}: ProductCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const user: User = JSON.parse(localStorage.getItem("user") || "");

  const handleSetFavorite = () => {
    const data = {
      userId: user.id,
      productName: product.name,
    };

    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto favoritado com sucesso!");
      })
      .catch(() => toast.error("Produto já favoritado"));
  };

  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favoriteId: string | undefined = res.data
      .filter((elem) => elem.productName === product.name)
      .find((elem) => elem.userId === user.id)?.id;

    api
      .delete(`/favorites/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Retirado dos Favoritos com sucesso!");
      })
      .catch(() => toast.error("Erro"));
  };

  return (
    <Styled.CardContainer>
      <img src={product.image} alt={product.name} />
      <div className="nome">{product.name}</div>
      <div className="descricao"> {product.description} </div>
      <div className="preco">
        <span>R$ </span>
        {product.price}
      </div>
      <div className="button">
      <Button
        onClick={isFavoritesList ? handleRemoveFavorite : handleSetFavorite}
        text={
          isFavoritesList ? "X" : "❤️"
        }
        size="ball"
      />
      </div>
    </Styled.CardContainer>
  );
};

export default ProductCard;
