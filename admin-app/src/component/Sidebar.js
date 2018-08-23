import React,  {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class Sidebar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"></img>
                        </div>
                        <div className="pull-left info">
                            <p>Muchammad Yusuf</p>
                            <a href=""><i className="fa fa-circle text-success"></i>Online</a>
                        </div>
                    </div>
                    <form action="" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."></input>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a href="">
                                <i className="fa fa-table"></i>
                                <span>Table</span>
                                <span className="pull-right-container">
                                    <span className="label label-primary pull-right">4
                                    </span>
                                </span>
                            </a>
                            
                            <ul className="treeview-menu" text="text-aqua">
                                <div>                           
                                <li><Link to="/Mahasiswa"> <i className="fa fa-circle-o"></i> Mahasiswa</Link></li>
                                <li><Link to="/Dosen">  <i className="fa fa-circle-o"></i> Dosen</Link></li>
                                <li></li>
                                </div>    
                            </ul>                            
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}