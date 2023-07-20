import './App.css';
import Preguntas from './Preguntas';
import './App.css';

const preguntasYRespuestas = [
  {
      id:1,
      pregunta: "Is this a good product?",
      respuesta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
      id:2,
      pregunta: "How much does it cost?",
      respuesta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
      id:3,
      pregunta: "When can I get it?",
      respuesta: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
      id:4,
      pregunta: "adadafsdisosfadofsa?",
      respuesta: "dasdassdadasasasdaasdasdasasdasdasaDadaD"
  }
]

function App() {
  
  return (
    <div className="App">
      <h1>PREGUNTAS FRECUENTES</h1>
      {preguntasYRespuestas.map(preguntas=> <Preguntas pregunta={preguntas.pregunta} respuesta={preguntas.respuesta} id={preguntas.id}/>)}
    </div>
  );
}

export default App;
