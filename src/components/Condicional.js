import {useState} from 'react'
function Condicional(){
const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()


function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
}
return(
    <div>
        <h2>Cadastre o seu E-Mail:</h2>
        <form>
            <input type="email" placeholder='Digite o seu e-mail..'
            onChange={(e) => setEmail(e.target.value)}></input>
            <button type="submit" onClick={enviarEmail} >Enviar Email</button>
        {userEmail &&(
            <div>
                <p>O email do usuario e {userEmail}</p>
            </div>
        )}
        </form>
    </div>
)
}

export default Condicional