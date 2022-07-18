import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout.Header)`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Content  = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
`;

export const Logout  = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const User  = styled.div`
  margin-right: 1.4rem;
`;

export const Greetings = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-align: right;
`;

export const UserName  = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: bold;
  text-align: right;
`;
