import React from 'react';

import {
  Rate,
  Keep,
  Title,
  Button,
  Surplus,
  Deficit,
  Container,
  Highlight,
} from './styles';

export function TmbModal() {
  return (
    <Container 
      centered 
      visible={true} 
      bodyStyle={{
        width: "700px", 
        height: "333px",
        background: "#0C0B0B", 
      }}
      footer={[
        <Button>
          OK
        </Button>
      ]}
    >
      <Title>Suas Calorias</Title>

      <Rate>Sua metabolismo basal é de 
        <Highlight> 1606 calorias</Highlight>  
      </Rate>
      <Deficit>Para <Highlight>perder</Highlight> peso você deve consumir
        <Highlight> 1638 calorias</Highlight> 
      </Deficit>
      <Surplus>Para <Highlight>ganhar</Highlight> peso você deve consumir 
      <Highlight> 2217 calorias</Highlight>
      </Surplus>
      <Keep>Para <Highlight>manter</Highlight> o seu peso você deve consumir 
        <Highlight> 1928 calorias</Highlight>
      </Keep>
    </Container>
  )
}