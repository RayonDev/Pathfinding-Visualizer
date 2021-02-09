import React, {Component} from 'react';
import Node from './Node/Node';
import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nodes: []
        };
    }

    // Funzione che viene chiamata all'inizializzazione del component
    componentDidMount() {
      const nodes = [];
      for(let righe = 0; righe < 15; righe++) {
        const rigaCorrente = [];
        for(let colonne = 0; colonne < 50; colonne++) {
          // Creo una matrice
          rigaCorrente.push([]);
        }
        nodes.push(rigaCorrente);
      }
      this.setState({nodes});
    }

    render() {
      const {nodes} = this.state;

      return(
        <div className="griglia">
          {nodes.map((riga, rigaIndex) => {
            return <div>
              {riga.map((nodo, nodoIndice) => <Node></Node>)}
              </div>
          })}
        </div>
      )
        
    }
}