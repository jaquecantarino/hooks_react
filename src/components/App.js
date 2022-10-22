import Accordion from "./Accordion"
const itens = [
  {
    titulo: "Java",
    descricao: "Linguagem compilada e interpretada"
  },
  {
    titulo: "Python",
    descricao: "Linguagem interpretada e dinamicamente tipada"
  },
  {
    titulo: "Javascript"
    descricao: "Interpretada. Executada do lado do cliente e do lado servidor também"
  }
]
const App = () => {
  return (
    <div>
      <Accordion itens={itens} />
    </div>
  )
}

export default App