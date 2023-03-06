import Item from "./Item"

function List() {
    return(
   <>
   <h1>Minha List</h1>
   <ul>
   <Item marca="Ferrari" lancamento={2023}/>
   <Item marca="Fiat" lancamento={2020}/>
   <Item/>
   
   </ul>
   </>
   ) 
}
export default List