import { Col, Row } from 'antd';

import { 
  Form,
  Title,
  Input,
  Button,
  Select,
  Content,
  FormItem,
  Container, 
} from './styles';
export function TmbCalculator() {
  return (
    <Container>
      <Content>
        <Title>Calculadora TMB</Title>

        <Form 
          layout="vertical"
          autoComplete='off'
        >
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="Sexo">
                <Select placeholder="Selecione..."/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Idade">
                <Input placeholder=""/>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="Peso">
                <Input placeholder="Em kg"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Altura">
                <Input placeholder="Em cm"/>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <FormItem label="F.A">
                <Select placeholder="Selecione..."/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button>Gerar TMB</Button>
            </Col>
          </Row>
        </Form>
      </Content>
    </Container>
  )
}