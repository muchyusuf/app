import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Mahasiswa  from './component/Mahasiswa/gMahasiswa'
import Dosen  from './component/Mahasiswa/gDosen'
// import Modal from './component/modal'
import modalAdd from './component/modalAdd'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Sidebar/> 
      <Route path="/Mahasiswa" component={Mahasiswa}/>
      <Route path="/Dosen" component={Dosen}/>
      {/* <Route path="/Modal" component={Modal}/> */}
      <Route path="/modalAdd" component={modalAdd}/>
      </div>
    );
  }
}

export default App;
