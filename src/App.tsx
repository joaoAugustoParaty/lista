import {useState} from 'react';
import {Area, Container, Header} from './App.style';


const App = () =>{
  const [list, setList] = useState();
return(
  <Container>
   <Area>
   <Header>
     Lista de Tarefas
   </Header>
   </Area>
  </Container>
);
}

export default App;