import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import strings from "../../../localisation";

export default class Issue extends Component {
  state = {
    issueId: '',
    description: '',
    address: '',
    reporter: '',
    status: 'New',
    image: '',
    submitted: false
  }
  componentDidMount() {
    if(this.props.match.params.issueId !== 'new') {
      fetch(`/api/issues/${this.props.match.params.issueId}`)
      .then(response => response.json())
      .then(issue => {
        this.setState({
          issueId: issue.id,
          description: issue.description,
          address: issue.address,
          reporter: issue.reporter,
          status: issue.status,
          image: issue.attachments
        });
      });
    }
  }
  handleChange = (e) => {
    let newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let csrftoken = document.head.querySelector("[name='csrf-token']").content;
    let payload = {
      description: this.state.description,
      address: this.state.address,
      reporter: this.state.reporter,
      status: this.state.status
    }
    fetch(`/api/issues/${this.state.issueId}`, {
      method: this.state.issueId ? 'put' : 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(issue => {
      console.log(issue);
      this.setState({
        submitted: true
      })
    });
  }
  render() {
    return this.state.submitted ? 
      (
        <Redirect to="/admin/issues" />
      ) : (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">{strings.issue}</label>
            <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleChange} placeholder={strings.enterIssueDescription} autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="address">{strings.address}</label>
            <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleChange} placeholder={strings.enterIssueAddress} />
          </div>
          <div className="form-group">
            <label htmlFor="reporter">{strings.reporter}</label>
            <input type="text" className="form-control" id="reporter" name="reporter" value={this.state.reporter} onChange={this.handleChange} placeholder={strings.enterIssueReporter} />
          </div>
          <div className="form-group">
            <label htmlFor="status">{strings.status}</label>
            <select name="status" id="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
              <option value="New">{strings.new}</option>
              <option value={strings.inProgress}>{strings.inProgress}</option>
            </select>
          </div>
          {this.state.issueId && (
            <div className="form-group">
              <label htmlFor="status">Attachment</label>
              <div>
                <a href={this.state.image}>
                  <img className="w-25" alt="Attachment" src={this.state.image} />
                </a>
              </div>
            </div>
          )}
          <button type="submit" className="btn btn-primary">{strings.submitIssue}</button>
        </form>
      );
  }
}