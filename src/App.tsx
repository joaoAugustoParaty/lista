import {useState} from 'react';
import {Area, Container, Header} from './App.style';
import {Item} from './types/Item';


const App = () =>{
  const [list, setList] = useState<Item[]>();
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