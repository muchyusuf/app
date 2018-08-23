import React, { Component } from "react";
import Aksi from './aksi'
import axios from 'axios'



export default class Content extends Component {
//get
 state = {
    myData :[]
 }
 componentDidMount(){
   axios.get('http://localhost:3005/getMahasiswa')
   .then((getData)=>{
     console.log(getData)
     this.setState({
       myData : getData.data //data is default to getData
     })
   })
 }   


  render() {
    const {A, B, C} = this.state;
    return (
      <div className="content-wrapper">
      <section className="content-header">
          <div class="row">
       
      </div>
      <div class="modal modal-info fade" id="modal-info">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Info Modal</h4>
              </div>
              <div class="modal-body">
                                            {/* <p>One fine body&hellip;</p> */}
                                            <form onSubmit={this.onSubmit}>
                                                <div class="form-group">
                                                    <input type="number" class="form-control" name="ID" value={A} onChange={this.onChange} placeholder="Kode Mahasiswa"></input>
                                                    <span class="glyphicon glyphicon-user form-control-feedback bg-aqua"></span>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="KodeAliran" value={B} onChange={this.onChange} placeholder="Nama Mahasiswa"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="DeskripsiAliran" value={C} onChange={this.onChange} placeholder="Jenis Kelamin"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="DeskripsiAliran" value={C} onChange={this.onChange} placeholder="Alamat"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="DeskripsiAliran" value={C} onChange={this.onChange} placeholder="Kode Jurusan"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>                                        
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="DeskripsiAliran" value={C} onChange={this.onChange} placeholder="Status"></input>
                                                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                                </div>

                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                                    <button type="submit" class="btn btn-primary">Add to Mahasiswa</button>
                                                </div>
                                            </form>
                                        </div>
            </div>
          </div>
        </div>

          {/* <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li className="active">Data tables</li>
          </ol> */}
      </section>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Table Mahasiswa</h3>
                <div class="col-xs-1">
                    <div class="box-body">
                      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-info">
                        create +
                      </button>
                    </div>
                </div>
                <div align="right">
               
                </div>
              </div>
              <div class="box-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Kode Mahasiswa</th>
                      <th>Nama Mahasiswa</th>
                      <th>Jenis Kelamin</th>
                      <th>Alamat </th>
                      <th>Kode Jurusan</th>
                      <th>Status </th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {LOOPING BEGIN */}
                    {this.state.myData.map(item=>
                      <tr>
                        <td>{item.Kode_Mahasiswa}</td>
                        <td>{item.Nama_Mahasiswa}</td>
                        <td>{item.Jenis_Kelamin}</td>
                        <td>{item.Alamat}</td>
                        <td>{item.Kode_Jurusan}</td>
                        <td>{item.Status}</td>
                        <td>         
                          <Aksi />
                        </td>
                 
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>      
    );
  }
}
