function Pessoa({nome, idade, profissão, foto}){
    return (
        <div>
            <img src={foto} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão; {profissão}</p>
        </div>
    )
}
export default Pessoa