import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'


class Modal extends Component {
    constructor() {
        super();
        this.state = {
          Kode_Dosen: '',
          Nama_Dosen: '',
          Jenis_Kelamin : '',
          Alamat : ''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    
    onChange(e){
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
    }

    onSubmit(e){
        //declare const on submit should same with database, 
        e.preventDefault(); //making enter is not funtioned
        const{ Kode_Dosen, Nama_Dosen, Jenis_Kelamin, Alamat } = this.state;

        axios.post('http://localhost:3005/postDosen', {Kode_Dosen, Nama_Dosen, Jenis_Kelamin, Alamat})
            .then(result=>{
                window.location.reload()
                // this.props.history.push("/")
            });
    }
    render(){
        const {A, B, C, D} = this.state;
        return (

                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span></button>
                                                <h4 class="modal-title">Default Modal</h4>
                                        </div>

                                        <div class="modal-body">
                                        <form onSubmit={this.onSubmit}>
                                                <div class="form-group">
                                                    <input type="number" class="form-control" name="Kode_Dosen" value={A} onChange={this.onChange} placeholder="Kode Dosen"></input>
                                                    <span class="glyphicon glyphicon-user form-control-feedback bg-aqua"></span>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="Nama_Dosen" value={B} onChange={this.onChange} placeholder="Nama Dosen"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="Jenis_Kelamin" value={C} onChange={this.onChange} placeholder="Jenis Kelamin"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="Alamat" value={D} onChange={this.onChange} placeholder="Alamat"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-primary">Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                    
        )
    }
}

export default Modal;