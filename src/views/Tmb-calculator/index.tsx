import { Col, Row } from 'antd';

import { calcTmbMan } from '../../utils/calc-tmb-man';
import { calcTmbWoman } from '../../utils/calc-tbm-woman';

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
import { TmbModal } from '../../components/Modals/TmbModal';

const { useForm } =  Form;
const { Option } = Select;

const fas = [
  { key: 1.3, value: "1.3 - sedentário" },
  { key: 1.4, value: "1.4 - levemente ativo"},
  { key: 1.5, value: "1.5 - treino e cardio iniciante a intermediário quase todos os dias, com rotina de pouca atividade"},
  { key: 1.6, value: "1.6 - treino e cardio avançado ou extremamente avançado com rotina de pouca atividade"},
  { key: 1.7, value: "1.7 - treino de cardio avançado ou extremamente avançado com rotina de muita atividade ou hormonizado*."},
]

const rules = [
  {
    required: true,
    message: 'Campo Obrigatório!',
  },
];

export function TmbCalculator() {
  const [form] = useForm();

  function calcTMB(data: any) {
    const tmb = data.gender === 'f' 
      ? calcTmbWoman(data) 
      : calcTmbMan(data)

    console.log(tmb+ 'kcal');
  }

  return (
    <Container>
      <Content>
        <Title>Calculadora TMB</Title>

        <Form
          form={form}
          layout="vertical"
          autoComplete='off'
          onFinish={calcTMB}
        >
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="Sexo" name="gender" rules={rules}>
                <Select placeholder="Selecione...">
                  <Option key="m">Masculino</Option>
                  <Option key="f">Feminino</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Idade" name="age" rules={rules}>
                <Input placeholder="Ex: 18" type="number" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <FormItem label="Peso"  name="weight" rules={rules}>
                <Input placeholder="Ex: 80kg" type="number"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Altura" name="height" rules={rules}>
                <Input placeholder="Ex: 180" type="number"/>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <FormItem label="F.A" name="fa" rules={rules}>
                <Select placeholder="Selecione...">
                  { fas.map(fa => (
                    <Option key={fa.key}>{fa.value}</Option>
                  )) }
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button htmlType="submit">
                Gerar TMB
              </Button>
            </Col>
          </Row>
        </Form>
      </Content>

      <TmbModal />
    </Container>
  )
}