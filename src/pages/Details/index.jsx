import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Details(){
  
  return(
    <Container>
       <h1>Hello world</h1>
       <span>Fernanda Sesnick</span>
       <Button title= "Voltar" loading/>
       <Button title= "Cadastrar"/>
    </Container>
   
  )
}