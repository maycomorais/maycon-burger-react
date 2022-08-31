import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/users";
import { User } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface UserModalProps {
  handleOpenModal: () => void;
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface UserData {
  number: number;
}

const userSchema = yup.object().shape({
  number: yup.number().required("Obrigatório informar numero da mesa"),
});

const UserModal = ({ handleOpenModal, user, setUser }: UserModalProps) => {
  const { handleGetUsers } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(userSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewUser = (data: UserData) => {
    api
      .post("/users", data, headers)
      .then(() => {
        toast.success("Mesa criada com sucesso");
        handleGetUsers();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de criar mesa");
      });
  };

  const handleUpdateUser = (data: UserData) => {
    api
      .patch(`/users/${user?.id}`, data, headers)
      .then(() => {
        toast.success("Mesa editada com sucesso");
        handleGetUsers();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de editar mesa");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(user ? handleUpdateUser : handleNewUser)}
      >
        <h2>{user ? "Editar mesa" : "Criar nova mesa"}</h2>
        <StyledInput
          placeholder="Número da mesa"
          {...register("number")}
          defaultValue={user ? user.number : ""}
          type="number"
          min="1"
        />
        <ErrorMessage>{errors.number?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancelar"
            variant="cancel"
            onClick={() => {
              setUser(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="Enviar" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;
