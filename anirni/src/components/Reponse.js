import React, { Component } from 'react';
import '/home/younes/my folder/anirni/src/stylesheets/App.css';
import ReactDOM from 'react-dom';

class Reponse extends Component {

    constructor(props){
        super(props);
        this.state={
            id_rep_pere:'rep de younes ',
            id:'',
            contenu:'sous rep 1 de la classe reponse.js',
            author:'cc',
            date:'',
            like:0,
            dislike:0,
        }
        this.handleContenuChange = this.handleContenuChange.bind(this);
        this.handlelikeChange=this.handlelikeChange.bind(this);
        this.handledislikeChange = this.handledislikeChange.bind(this);

    }

    handleContenuChange(event){
        this.setState({contenu:event.target.value})
    }
    handlelikeChange(event){
        let a=this.state.like
        a++
        this.setState({like:a})
    }
    handledislikeChange(event){
        let a=this.state.like
        a++
        this.setState({dislike:a})
    }


        render() {

            return (
                <div className="row" >
                    <div  className="col-sm-2">
                        <label> contenu sous rep : </label>
                        <span> {this.props.contenu}</span>
                        <span> {this.props.author}</span>
                </div>
            </div>
        //<h1>vdfgdfg</h1>

        );
    }
}
export default Reponse;
