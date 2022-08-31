import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useUsers } from "../../contexts/users";
import { api } from "../../services";
import { User } from "../../types";
import { DeleteModalContainer } from "./styles";
import Button from "../Button";

interface DeleteUserModalProps {
  userId?: string;
  handleOpenDeleteModal: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const DeleteUserModal = ({
  userId,
  handleOpenDeleteModal,
  setUser,
}: DeleteUserModalProps) => {
  const { handleGetUsers } = useUsers();

  const handleDeleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/users/${userId}`, headers).then(() => {
      toast.success("Mesa excluida com sucesso!");
      handleGetUsers();
      setUser(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Excluir mesa</h2>
        <div>
          <Button
            onClick={() => {
              setUser(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Excluir" onClick={handleDeleteUser} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteUserModal;
