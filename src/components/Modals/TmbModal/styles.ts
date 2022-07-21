import { Modal } from 'antd';
import styled from 'styled-components';

export const Container = styled(Modal)`
  width: 700px;
  height: 333px;

  .ant-modal-footer {
    width: 700px;
  }
`;

export const Rate = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  background: linear-gradient(90deg, #E2433D 0%, #F2CB0F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Deficit = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Surplus = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Keep = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Highlight = styled.span`
  color: #E2433D;
`;

export const Button = styled.button`
  width: 700px;
`;