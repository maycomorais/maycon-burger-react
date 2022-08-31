import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import UserModal from "../../components/UserModal";
import DeleteUserModal from "../../components/DeleteUserModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useUsers } from "../../contexts/users";
import { User } from "../../types";
import * as Styled from "./styles";

const SettingsUsers = () => {
  const { users } = useUsers();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (user: User) => {
    setUser(user);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="users" />
      <Styled.EntitiesEditContainer>
        <h2>Gerenciar Usuários</h2>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar Usuário</p>
          </Styled.AddEntityCard>
          {users.map((element) => {
            return (
              <Styled.EntityCard key={element.id}>
                <p>{element.name}</p>
                <div>
                  <Styled.SettingsUserDeleteButton
                    onClick={() => {
                      setUser(element);
                      handleOpenDeleteModal();
                    }}
                  >
                    <TrashIcon /> Remover
                  </Styled.SettingsUserDeleteButton>
                  <Styled.SettingsUserEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> Editar
                  </Styled.SettingsUserEditButton>
                </div>
              </Styled.EntityCard>
            );
          })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <UserModal
          setUser={setUser}
          user={user}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteUserModal
          userId={user?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setUser={setUser}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsUsers;
