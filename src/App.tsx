import {useState} from 'react';
import {Area, Container, Header} from './App.style';
import {Item} from './types/Item';
import { ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () =>{
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 1, name: 'Comprar um bolo na padaria', done: true },
  ]);
return(
  <Container>
   <Area>
   <Header>Lista de Tarefas</Header>

   <AddArea />
   
   {list.map((item, index)=>(
       <ListItem key={index} item={item}/>
     ))}
   </Area>
  </Container>
);
}

export default App;