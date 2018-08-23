import React, { Component } from "react";

export default class aksi extends Component {
  render() {
    return (
        <div className="box-tools">
          <button type="button" className="btn btn-box-tool">
            <i className="fa fa-eye" />
          </button>
          <button type="button" className="btn btn-box-tool">
            <i className="fa fa-wrench" />
          </button>
          <button type="button" className="btn btn-box-tool">
            <i className="fa fa-times" />
          </button>
        </div>
    );
  }
}