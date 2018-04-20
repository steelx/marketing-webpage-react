import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        "id": 1,
        "first_name": "Gaby",
        "imageUri": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "id": 2,
        "first_name": "Marcella",
        "imageUri": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "id": 3,
        "first_name": "Barclay",
        "imageUri": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "id": 4,
        "first_name": "Brent",
        "imageUri": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "id": 5,
        "first_name": "Lana",
        "imageUri": "http://dummyimage.com/100x100.png/dddddd/000000"
    }
];

const Person = (props) => (
    <li>
        <h3>Hello, {props.first_name}</h3>
        <img src={props.imageUri} />
        <button onClick={() => props.handleDelete(props.id)}>(Delete)</button>
    </li>
);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: data
        };
    }

    handleDelete(id) {
        const newPeople = [...this.state.people];
        const index = newPeople.findIndex(p => p.id === id);
        newPeople.splice(index, 1);

        this.setState({people: newPeople});
    }

    render() {

        return (
           <div>
               <h1>Hello React</h1>

               <ul>
                   {
                       this.state.people.map(p => {
                           return (
                               <Person key={p.id} {...p}
                                       handleDelete={this.handleDelete.bind(this)} />
                           )
                       })
                   }
               </ul>
           </div>
        );
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));