import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { FiMail, FiLock, FiAtSign, FiUser } from 'react-icons/fi';

import InputControllerComponent from '~/components/InputController';

import { signUpRequest } from '~/store/modules/auth/actions';

import {
  Container,
  MiddleCard,
  CardHeader,
  CardForm,
  InputController,
  SignInButton,
  LoginText,
} from './styles';

const schema = yup.object().shape({
  name: yup.string().required('O preenchimento do nome é obrigatório'),
  email: yup
    .string()
    .email('Você deve preencher com um e-mail válido')
    .required('Campo de e-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve conter pelo menos 6 caracteres')
    .required('Campo de senha obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirme sua senha antes de prosseguir')
    .when('password', (password, confirm) => {
      return password
        ? confirm
            .required()
            .oneOf([yup.ref('password')], 'As senhas não conferem')
        : confirm;
    }),
  token: yup
    .number('O Token deve ser igual ao fornecido pelo Bot')
    .min(6, 'O token deve ser o mesmo fornecido pelo Bot')
    .required('É obrigatório o preenchimento do token'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password, token }) => {
    dispatch(signUpRequest(name, email, password, token));
  };
  return (
    <Container>
      <MiddleCard>
        <CardHeader>
          <h1>God Bot Premium - Painel!</h1>
          <small>Seja bem vindo! Por favor, faça o login para continuar</small>
        </CardHeader>

        <CardForm schema={schema} onSubmit={handleSubmit}>
          <InputControllerComponent
            icon={FiUser}
            name="name"
            type="text"
            placeholder="Digite seu Nome"
          />

          <InputControllerComponent
            icon={FiMail}
            name="email"
            type="text"
            placeholder="Digite seu E-mail"
          />

          <InputControllerComponent
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite sua senha ultra-secreta"
          />

          <InputControllerComponent
            icon={FiLock}
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha ultra-secreta"
          />

          <InputControllerComponent
            icon={FiAtSign}
            name="token"
            type="number"
            placeholder="Seu token de acesso"
          />

          <InputController>
            <SignInButton type="submit">Cadastrar</SignInButton>
          </InputController>
        </CardForm>
      </MiddleCard>
      <LoginText>
        Já possui cadastro? <Link to="/">Acesse agora</Link>
      </LoginText>
    </Container>
  );
}
