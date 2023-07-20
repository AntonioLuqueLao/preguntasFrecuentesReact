import React from "react";

class Preguntas extends React.Component {
    constructor() {
        super() 
        this.state= {
            toggle: false
        }
        this.AbrirYRetraer=this.AbrirYRetraer.bind(this);
    }
    AbrirYRetraer () {
        this.setState(state=> ({
            toggle: !state.toggle
        })
        )
    }

    render() {
        return (
            <div className="contenedor">
                <div className="pregunta">
                    <h2>{this.props.pregunta}</h2>
                    <button className="boton" onClick={this.AbrirYRetraer}>{this.state.toggle ? "x" : "+"}</button>
                    </div>
                <div/>
                <div className="respuesta">
                {this.state.toggle===true && <h2>{this.props.respuesta}</h2>}
                </div>
            </div>
        )
    }

}

export default Preguntas;