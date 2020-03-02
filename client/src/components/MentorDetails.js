import React, { Component } from "react";
import { connect } from "react-redux";
import { getMentorDetails } from "../actions/mentorAction";
import MentorDetailCard from "../components/MentorDetailCard";

class MentorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { isCreateMentor: false };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getMentorDetails(this.props.match.params.id);
    } else {
      this.setState({ isCreateMentor: true });
    }
  }

  render() {
    let { mentor } = this.props;
    if (mentor || this.state.isCreateMentor) {
      return (
        <MentorDetailCard
          isCreateMentor={this.state.isCreateMentor}
          mentor={mentor}
        />
      );
    }
    return null;
  }
}
let MapStateToProps = state => {
  let { mentor } = state;
  return { mentor };
};

export default connect(MapStateToProps, { getMentorDetails })(MentorDetails);
