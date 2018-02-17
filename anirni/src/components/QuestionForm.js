import React, { Component } from 'react';
import '../App.css';
import Reponse from "./Reponse";
import axios from 'axios';

    export  default class Questions extends Component {


        constructor(props) {
    super(props);
    this.state={
        id:'',
        question:'je qsd aze az aze aez',
        list_R:[
            {
             email:"zaeaz",
                contenu:"azeaze",

            },
            {

                email:"qqqqqq",
                contenu:"qq",
            }
        ],
        contenu:'',
        email:''

    };
    this.handleContenuChange = this.handleContenuChange.bind(this);
    this.handleMailChange=this.handleMailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
        componentDidMount(){
            let self=this;
            axios.get('http://localhost:5000/questions')
                .then(function (response) {
                    //   console.log(response.data[1].mail);
                    //  self.setState({email:response.data[1].mail});
                    console.log(response);
           /*         let i=0;
                    for(i=0;i<response.data.length;i++) {
                        let question = {
                            contenu: response.data[i].contenu,
                            email: response.data[i].mail
                        };

                        self.state.list_R.push(question);
                        self.setState(
                            self.state
                        );
                    }//  console.log(response.data[1].mail);

             */   })
                .catch(function (error) {
                    console.log(error);
                });

        }


        generateReponsesArray() {
        // Don't forget to return the array that .map creates!

            return this.state.list_R.map((item, index) =>
            <Reponse email={item.email} contenu={item.contenu}key={item.toString() + index}/>
                        );

        }
        handleMailChange(event) {
            this.setState({email: event.target.value});
        }

        handleContenuChange(event) {
            this.setState({contenu: event.target.value});
        }


        handleSubmit(event) {
            event.preventDefault();
            let question={
                contenu:this.state.contenu,
                email:this.state.email
            };
            console.log(" la question " + question );
            console.log("List q " +this.state.list_R );
            this.state.list_R.push(question);
            this.setState(
                this.state
            );
            axios.post('http://localhost:5000/questions', {
                mail: this.state.email,
                contenu:this.state.contenu
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("List q " +this.state.list_Q );
            alert('A name was submitted: ' + this.state.value);
        }

        render() {

        return (
            <div>
                <div>
                    <h2>{this.state.question}</h2>
<h2> {this.state.email}</h2>
                </div>


                <div>
                <h2> {this.props.email}</h2>
            </div>
                <div>
                    <p>  {this.props.contenu}</p>
                </div>
                <div>
                    {this.generateReponsesArray()}</div>
            <div>
                <form onKeyDown={
                    (e) => {
                        if (e.key === 'Enter') {
                            this.handleSubmit(e);
                        }
                    }
                } className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email"
                                   value={this.state.email} onChange={this.handleMailChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="control-label col-sm-2"
                                htmlFor="comment">Comment:</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" rows="5" id="comment"
                                  value={this.state.contenu}
                                  onChange={this.handleContenuChange}
                        />
                        </div>

                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default"  >Submit</button>
                        </div>
                    </div>
                </form>

            </div>

            </div>

        );
    }

    }