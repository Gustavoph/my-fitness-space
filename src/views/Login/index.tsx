import { Col, Row } from 'antd';
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
export function Login() {
  return (
    <div>
      <Row gutter={4}>
        <Col span={12}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={12}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </div>
  )
}