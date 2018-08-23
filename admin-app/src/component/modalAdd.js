import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3005/getAliran'+this.props.match.params.ID)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  delete(ID){
    console.log(ID);
    axios.delete('http://localhost:3005/Aliran'+ID)
      .then((result) => {
        this.props.history.push("/Aliran")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.book.text}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.book.ID}</dd>
              <dt>Author:</dt>
              <dd>{this.state.book.KodeAliran}</dd>
              <dt>Description:</dt>
              <dd>{this.state.book.DeskripsiAliran}</dd>
            </dl>
            <Link to={`/edit/${this.state.book.ID}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;