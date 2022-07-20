import {
  Layout,
  Typography,
  Form as FormAnt, 
  Input as InputAnt, 
  Button as ButtonAnt,
  Select as SelectAnt, 
} from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100rem);

  .ant-btn:hover, .ant-btn:focus, .ant-btn:active {
    color: ${({ theme }) => theme.colors.text_dark_2};
    border-color: ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.button};
  }
`;

export const Content  = styled.div`
  width: 112rem;
  margin: 0 auto;
`;

export const Title = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.text_light};
  padding: 4rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const Form = styled(FormAnt)`
  width: 100%;

  .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormItem = styled(FormAnt.Item)`
  label {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text_light};
  }
`;

export const Input = styled(InputAnt)`
  width: 100%;
  height: 5rem;
  border-radius: 1rem;

  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondary};

  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_light};

  &::placeholder {
    font-size: 1.4rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Button = styled(ButtonAnt)`
  width: 100%;
  height: 5rem;
  border-radius: 1rem;

  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.button};

  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_dark_2};
`;

export const Select = styled(SelectAnt)`
  width: 100%;

  .ant-select-selector {
    height: 5rem !important;
    border-radius: 1rem !important;
    border-color: ${({ theme }) => theme.colors.border} !important;
    background-color: ${({ theme }) => theme.colors.secondary} !important;
  }

  .ant-select-selection-item {
    padding-top: .9rem !important;
  }

  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text_light};

  .ant-select-selection-placeholder {
    font-size: 1.4rem;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-select-selection-placeholder::after {
    padding-top: .9rem;
  }
`;