import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FiUser,
  FiMail,
  FiAtSign,
  FiLock,
  FiUnlock,
  FiSettings,
} from 'react-icons/fi';
import * as yup from 'yup';

import CardLayout from '~/pages/_layouts/CardLayout';
import InputController from '~/components/InputController';
import InputControllerButton from '~/components/InputControllerButton';

import {
  updateProfileRequest,
  deactivateAccountRequest,
} from '~/store/modules/user/actions';
import { saveConfigRequest } from '~/store/modules/config/actions';

import {
  Container,
  Profilebox,
  Headerbox,
  MiddleBox,
  ProfileImage,
  ProfileName,
  CardForm,
  DeactivateAccount,
  BlackFilter,
  ConfirmPopUp,
  MiddleText,
  ConfirmForm,
  ButtonsBox,
  ConfirmButton,
  CancelButton,
  ApiConfirForm,
} from './styles';

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Você deve fornecer um e-mail válido'),
  oldPassword: yup.string(),
  password: yup
    .string()
    .when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .required('Você deve fornecer sua senha atual por segurança')
            .min(6, 'Sua nova senha deve possuir pelo menos 6 caracteres')
        : field
    ),
  confirmPassword: yup
    .string()
    .when('password', (password, field) =>
      password
        ? field
            .required(
              'Sua nova senha deve ser corretamente confirmada por segurança'
            )
            .oneOf([yup.ref('password')])
        : field
    ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const consumerKey = {
    consumerKey: useSelector(state => state.config.config),
  };
  const [openedPopUp, setOpenedPopUp] = useState(false);

  const handleSubmit = useCallback(
    ({ name, email, oldPassword, password, confirmPassword }) => {
      dispatch(
        updateProfileRequest(
          name,
          email,
          oldPassword,
          password,
          confirmPassword
        )
      );
    },
    [dispatch]
  );

  const handleDeactivateAccount = useCallback(
    ({ deactivatePassword }) => {
      dispatch(deactivateAccountRequest(deactivatePassword));
    },
    [dispatch]
  );

  const handleSendConsumerKey = useCallback(
    ({ consumerKey: consumerKeyData }) => {
      dispatch(saveConfigRequest(consumerKeyData));
    },
    [dispatch]
  );

  return (
    <Container>
      <CardLayout>
        <Profilebox>
          <Headerbox bg="https://source.unsplash.com/featured/?nature" />
          <MiddleBox>
            <ProfileImage
              src={`https://api.adorable.io/avatars/150/${profile.name}.png`}
            />
            <ProfileName>{profile.name}</ProfileName>
          </MiddleBox>
          <DeactivateAccount onClick={() => setOpenedPopUp(true)}>
            Desativar conta
          </DeactivateAccount>
        </Profilebox>
      </CardLayout>
      {/*  */}
      <CardLayout>
        <h1>
          Configurações de Perfil <small>Editar</small>
        </h1>

        <CardForm initialData={profile} schema={schema} onSubmit={handleSubmit}>
          <InputController
            icon={FiUser}
            name="name"
            type="text"
            placeholder="Digite seu nome"
          />

          <InputController
            icon={FiMail}
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
          />

          <InputController
            icon={FiAtSign}
            name="tgId"
            type="number"
            disabled
            placeholder="Digite seu e-mail"
          />

          <InputController
            icon={FiUnlock}
            name="oldPassword"
            type="password"
            placeholder="Digite seu senha atual"
          />
          <InputController
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite a senha nova"
          />

          <InputController
            icon={FiLock}
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua nova senha"
          />

          <InputControllerButton color="#7764E4" type="submit">
            Editar
          </InputControllerButton>
        </CardForm>
      </CardLayout>

      <CardLayout>
        <h1>
          Adicionar configurações <small>Configurações de Api</small>
        </h1>
        <ApiConfirForm
          initialData={consumerKey}
          onSubmit={handleSendConsumerKey}
        >
          <InputController
            icon={FiSettings}
            name="consumerKey"
            type="text"
            placeholder="Insira a consumer Key fornecida pela Monetizze"
          />

          <ButtonsBox>
            <InputControllerButton type="submit">Salvar</InputControllerButton>
            <a
              href="https://app.monetizze.com.br/ferramentas/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pegar key
            </a>
          </ButtonsBox>
        </ApiConfirForm>
      </CardLayout>

      <BlackFilter opened={openedPopUp}>
        <ConfirmPopUp opened={openedPopUp}>
          <MiddleText>
            Você tem certeza que deseja fazer isso ? Essa é uma ação que não
            poderá ser desfeita!
          </MiddleText>

          <ConfirmForm onSubmit={handleDeactivateAccount}>
            <InputController
              icon={FiUnlock}
              name="deactivatePassword"
              type="password"
              placeholder="Para confirmar preencha sua senha"
            />
            <ButtonsBox>
              <ConfirmButton type="submit">Confirmar</ConfirmButton>
              <CancelButton onClick={() => setOpenedPopUp(false)}>
                Cancelar
              </CancelButton>
            </ButtonsBox>
          </ConfirmForm>
        </ConfirmPopUp>
      </BlackFilter>
    </Container>
  );
}
