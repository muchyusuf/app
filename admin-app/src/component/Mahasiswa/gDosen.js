import React, { Component } from "react";
import Aksi from './aksi'
import Modal from './modal'
import axios from 'axios'



export default class Content extends Component {
//get
 state = {
    myData :[]
 }
 componentDidMount(){
   axios.get('http://localhost:3005/getDosen')
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

      </section>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">Table Dosen</h3>
                <div class="col-xs-1">
                    <div class="box-body">
                      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-info">
                        create +                
                        
                      </button>
                      
                      <div class="modal fade" id="modal-info">
                      <Modal/>
                      </div>
                    </div>
                </div>
                <div align="right">
               
                </div>
              </div>
              <div class="box-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Kode Dosen</th>
                      <th>Nama Dosen</th>
                      <th>Jenis Kelamin</th>
                      <th>Alamat </th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {LOOPING BEGIN */}
                    {this.state.myData.map(item=>
                      <tr>
                        <td>{item.Kode_Dosen}</td>
                        <td>{item.Nama_Dosen}</td>
                        <td>{item.Jenis_Kelamin}</td>
                        <td>{item.Alamat}</td>
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
