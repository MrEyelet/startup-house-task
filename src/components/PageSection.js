import styled from "styled-components";

export const BulletedList = styled.ul`
  padding: 0 0 0 1.5rem;
  margin: 1.5rem auto 0;

  li {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.light};
    color: ${({ theme }) => theme.color.shuttleGray};
    line-height: 1.8;

    & span {
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  li + li {
    margin-top: 0.75rem;
  }
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const Title = styled.h2`
  font-family: TTCommons-light, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xxxxl};
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;
  margin: 0 0 2rem;
`;

export const Description = styled.p`
  font-family: TTCommons-regular, sans-serif;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.color.shuttleGray};
  margin: 0 0 0.5rem;
  line-height: 1.7;

  ${Title} + & {
    margin-top: 2rem;
  }

  & span {
    color: ${({ theme }) => theme.color.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  & a {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    text-decoration: none;
  }
`;

export const Header = styled.div`
  max-width: 42rem;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.linkWater};
  }
`;
