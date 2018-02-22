import React , { Component} from 'react';
import '../stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import index from "../reducers";
import Reponse from "./Reponse";
import Questions from "./Questions";


export default class ReponseList extends Component{

    constructor(props){
        super(props);
        this.state={

            id_qst:'chocho',
            id:'',
            contenu:'reponse principale',
            author:'younes',
            list_R:[{
                contenu:'fdgfgfg',
                author:'fcgfgfdfgf'
            }],
            date:'',
            like:0,
            dislike:0,
        }



        this.handleContenuChange = this.handleContenuChange.bind(this);
        this.handlelikeChange=this.handlelikeChange.bind(this);
        this.handledislikeChange = this.handledislikeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    generateReponseArray(){
        return this.state.list_R.map((item,index)=>

            <div>
                <Reponse
                    contenu={item.contenu}
                    author={item.author}
                    date={item.date}
                    key={item.toString() + index}
                />

            </div>


        );
    }
    handleContenuChange(event){
      this.setState({contenu:event.target.value})
    }
    handlelikeChange(event){
        let a=this.state.like
        a++;
        this.setState({like:a})
    }
    handledislikeChange(event){
        let a=this.state.dislike
        a++;
        this.setState({dislike:a})
    }
    handleSubmit(event){
        event.preventDefault();
        let reponse={
            id_qst:this.state.id_qst,
            id:this.state.id,
            contenu:this.state.contenu,
            author:this.state.author,
            date:this.state.date,
        }
        Questions.state.list_R.push(reponse);

    }



    render()
{
    return (
        <div>
            <h1>reponse</h1>
            <div>
                <div>reponse d'une question</div>
                author : <span>{this.state.author} <br/></span>
                qui a poser la qst  : <span>{this.state.id_qst} <br/></span>
                contenu : <span>{this.state.contenu} <br/></span>
            </div>
            <div>
                {this.generateReponseArray()}
            </div>
        </div>

    );
}
}