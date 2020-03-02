import React, { Component } from "react";
import { connect } from "react-redux";
import { getMentors, deleteMentor, flushMentor } from "../actions/mentorAction";

const MentorCard = ({ mentor, deleteMentor }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{mentor.name}</h5>
        <p class="card-text">
          Created on : {new Date(mentor.createdAt).toString()}
        </p>
        <p class="card-text">
          Modified on : {new Date(mentor.updatedAt).toString()}
        </p>
        <a href={`/mentor/${mentor._id}`} class="btn btn-primary">
          Update details
        </a>
        <button
          class="btn btn-danger float-right"
          onClick={() => {
            deleteMentor(mentor._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

class MentorListing extends Component {
  componentDidMount() {
    this.props.flushMentor();
    this.props.getMentors();
  }

  deleteMentor = id => {
    this.props.deleteMentor(id);
  };

  render() {
    let { mentors } = this.props;
    return (
      <div>
        {mentors.map((mentor, index) => {
          return (
            <MentorCard
              key={index}
              mentor={mentor}
              deleteMentor={this.deleteMentor}
            />
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = state => {
  let { error, mentors } = state;
  return { error, mentors };
};

export default connect(mapStateToProps, {
  getMentors,
  deleteMentor,
  flushMentor
})(MentorListing);
