import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

export const Container = styled(Layout.Header)`
  width: 100%;
  height: 10rem;
  border-bottom: .1rem solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content  = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 112rem;

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
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
`;

export const User  = styled.div`
  margin-right: 1.4rem;
`;

export const Greetings = styled(Paragraph)`
  padding: 0;
  font-weight: bold;
  text-align: right;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const UserName  = styled(Paragraph)`
  padding: 0;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: right;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.tertiary};
`;
