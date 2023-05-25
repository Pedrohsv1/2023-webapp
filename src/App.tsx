const ListItem = (props: {titulo: string, indice: number}) => {
  return (
    <>
      <li>{props.titulo}</li>
    </>
  )
}

const Lista = () => {
  const tarefas = [
    "Baixar o prejto do GitHub",
    "Istalar bibliotecas do GitHub",
    "Executar aplicação web",
    "Programar em Js e React",
    "Guardar as modificações do repositorio",
    "Publicar as modificações no GitHub"
  ]
  return(
    <div className="card">
      <ul>
        <ListItem indice={0} titulo={tarefas[0]}/>
        <li key={1}>{tarefas[0]}</li>
        <li key={2}>{tarefas[1]}</li>
        <li key={3}>{tarefas[2]}</li>
        <li key={4}>{tarefas[3]}</li>
        <li key={5}>{tarefas[4]}</li>
        <li key={6}>{tarefas[5]}</li>
      </ul>
    </div>
    )
}

const ListaMap = () => {
  const tarefas = [
    "Baixar o prejto do GitHub",
    "Istalar bibliotecas do GitHub",
    "Executar aplicação web",
    "Programar em Js e React",
    "Guardar as modificações do repositorio",
    "Publicar as modificações no GitHub"
  ]
  return(
    <div className="card">
      <ul>
        {tarefas.map((tarefa, ind) => {
          return (
            <ListItem key={ind} titulo={tarefa}/>
          )
        })}
      </ul>
    </div>
    )
}

export default function App() {



  return (
    <>
    <Lista />
    <ListaMap />
    </>
  )
}

