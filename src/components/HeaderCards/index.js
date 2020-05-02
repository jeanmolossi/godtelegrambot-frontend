import React from 'react';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiBarChart,
} from 'react-icons/fi';

import {
  HeaderCards,
  CardsBox,
  SingleCard,
  CardContent,
  ContentLeftBox,
  ContentRightBox,
  IconBox,
  ContentHeader,
  Content,
  CardFooter,
} from './styles';

export default function HeaderCardsComponent() {
  return (
    <HeaderCards>
      <CardsBox>
        <SingleCard>
          <CardContent>
            <ContentLeftBox>
              <ContentHeader>Total traffic</ContentHeader>
              <Content>123,456</Content>
            </ContentLeftBox>
            <ContentRightBox>
              <IconBox>
                <FiTrendingUp />
              </IconBox>
            </ContentRightBox>
          </CardContent>
          <CardFooter>
            <span>+3.48%</span> desde o mês passado
          </CardFooter>
        </SingleCard>

        <SingleCard>
          <CardContent>
            <ContentLeftBox>
              <ContentHeader>Total traffic</ContentHeader>
              <Content>123,456</Content>
            </ContentLeftBox>
            <ContentRightBox>
              <IconBox red>
                <FiTrendingDown />
              </IconBox>
            </ContentRightBox>
          </CardContent>
          <CardFooter red>
            <span>-3.48%</span> desde o mês passado
          </CardFooter>
        </SingleCard>
        <SingleCard>
          <CardContent>
            <ContentLeftBox>
              <ContentHeader>Total traffic</ContentHeader>
              <Content>123,456</Content>
            </ContentLeftBox>
            <ContentRightBox>
              <IconBox budget>
                <FiDollarSign />
              </IconBox>
            </ContentRightBox>
          </CardContent>
          <CardFooter budget>
            <span>+3.48%</span> desde o mês passado
          </CardFooter>
        </SingleCard>
        <SingleCard>
          <CardContent>
            <ContentLeftBox>
              <ContentHeader>Total traffic</ContentHeader>
              <Content>123,456</Content>
            </ContentLeftBox>
            <ContentRightBox>
              <IconBox info>
                <FiBarChart />
              </IconBox>
            </ContentRightBox>
          </CardContent>
          <CardFooter info>
            <span>+3.48%</span> desde o mês passado
          </CardFooter>
        </SingleCard>
        <SingleCard>
          <CardContent>
            <ContentLeftBox>
              <ContentHeader>Total traffic</ContentHeader>
              <Content>123,456</Content>
            </ContentLeftBox>
            <ContentRightBox>
              <IconBox>
                <FiTrendingUp />
              </IconBox>
            </ContentRightBox>
          </CardContent>
          <CardFooter>
            <span>+3.48%</span> desde o mês passado
          </CardFooter>
        </SingleCard>
      </CardsBox>
    </HeaderCards>
  );
}
