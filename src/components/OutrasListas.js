function OutrasListas({itens}){
    return(
<>
<h3>Listas de coisas boas:</h3>
{  itens.length > 0 ?(
itens.map((item) => (<p>{item}</p>)
)):(<p>Nao a itens na Listas</p>)
}
</>

    )
}

export default OutrasListas