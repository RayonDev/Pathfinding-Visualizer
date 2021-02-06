import React, {Component} from 'react';
import Node from './Node/Node';
import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: []
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
    }

    render() {
        return (
            <>
              <button onClick={() => this.visualizeDijkstra()}>
                Visualize Dijkstra's Algorithm
              </button>
              <div className="grid">
                {grid.map((row, rowIdx) => {
                  return (
                    <div key={rowIdx}>
                      {row.map((node, nodeIdx) => {
                        const {row, col, isFinish, isStart, isWall} = node;
                        return (
                          <Node
                            key={nodeIdx}
                            col={col}
                            row={row}></Node>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </>
          );   
    }
}

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
};

const createNode = (col, row) => {
    return {
        col,
        row,
        previousNode: null,
    };
};