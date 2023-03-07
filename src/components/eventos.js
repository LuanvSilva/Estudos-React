import Button from "./Buttom";

function Evento(){
    function meuEvento(){
        console.log(`Opa , fui ativado`)
    }
    function segundoEvento(){
        console.log('Segundo evento')
    }
    return(
        <div>
            <p>Clique para disparar um evento </p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
           
        </div>
    )
}

export default Evento

