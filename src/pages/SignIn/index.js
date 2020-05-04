import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';

import { signInRequest } from '~/store/modules/auth/actions';

import InputControllerComponent from '~/components/InputController';

import {
  Container,
  MiddleCard,
  CardHeader,
  CardForm,
  ForgotPasswordLink,
  InputController,
  SignInButton,
  RegisterText,
} from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Você deve preencher com um e-mail válido')
    .required('Campo de e-mail obrigatório'),
  password: yup.string().required('Campo de senha obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
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
            icon={FiMail}
            name="email"
            type="text"
            placeholder="Digite seu E-mail"
          />

          <InputControllerComponent
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite sua senha Ultra secreta"
          />

          <ForgotPasswordLink href="#">Esqueceu sua senha ?</ForgotPasswordLink>

          <InputController>
            <SignInButton type="submit">
              {loading ? 'Carregando...' : 'Acessar painel'}
            </SignInButton>
          </InputController>
        </CardForm>
      </MiddleCard>
      <RegisterText>
        É novo no painel ? <Link to="/registro">Cadastre-se</Link>
      </RegisterText>
    </Container>
  );
}
