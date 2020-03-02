import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMentor } from "../actions/mentorAction";
import { createMentor } from "../actions/mentorAction";

class MentorDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:
        this.props.mentor && this.props.mentor.tasks
          ? this.props.mentor.tasks
          : [],
      name:
        this.props.mentor && this.props.mentor.name
          ? this.props.mentor.name
          : ""
    };
  }

  onSaveClick = () => {
    if (this.props.isCreateMentor) {
      let mentor = this.state;
      this.props.createMentor(mentor);
    } else {
      let mentorClone = {
        ...this.props.mentor,
        ...this.state
      };
      this.props.updateMentor(mentorClone);
    }
  };

  render() {
    let { mentor } = this.props;
    mentor = mentor || { name: "", task: [] };
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            Name
            <input
              type="text"
              class="form-control mt-2"
              value={this.state.name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </h5>
          <p class="card-title mt-3">
            <u>
              <i>Tasks assigned</i>
            </u>
          </p>
          {this.state.tasks.map((task, index) => {
            return (
              <div class="mt-3 mb-3" key={index}>
                <span class="card-text">{task}</span>
                <button
                  class="close mr-5"
                  aria-label="Close"
                  onClick={() => {
                    this.setState({
                      tasks: this.state.tasks.filter((_, i) => index !== i)
                    });
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            );
          })}
          <div class="input-group mb-3">
            <input
              type="text"
              id="task"
              class="form-control"
              placeholder="Enter a new task..."
            />
          </div>
          <button
            class="btn btn-primary"
            onClick={() => {
              let task = document.getElementById("task");
              this.setState({ tasks: [...this.state.tasks, task.value] });
              task.value = "";
            }}
          >
            {" "}
            Add task
          </button>
          <button
            class="btn btn-success float-right"
            onClick={this.onSaveClick}
          >
            Submit data
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateMentor, createMentor })(MentorDetailCard);
