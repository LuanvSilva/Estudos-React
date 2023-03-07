import { useState } from 'react'

function Form() {
   function cadastrarUsuario(e){
    e.preventDefault()
   
    console.log(`Usuario ${name} foi cadastrado com a asenha : ${password}`)
   }
   
   const [name,setName ] = useState()
   const [password, setPassaword] = useState()

    return(
      
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" 
                    placeholder="Digite o seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}>Nome</input>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password"
                     placeholder="Digite a sua senha "
                     onChange={(e) => setPassaword(e.target.value)}
                     >Senha</input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>


        </div>
      
    )
}  
export default Form