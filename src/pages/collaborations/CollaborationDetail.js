import React, {Component} from 'react';
import {connect} from 'react-redux';
import withAuthorization from '../../components/hoc/withAuthorization';
import {withRouter} from "react-router-dom";
import {subscribeToCollaboration, joinCollaboration, subscribeToProfile} from "../../actions";
import JoinedPeople from "../../components/collaboration/JoinedPeople";

class CollaborationDetail extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    const {user} = this.props.auth;
    joinCollaboration(id, user.uid);
    this.watchCollabChanges(id);
  }

  watchCollabChanges = id => {
    this.unsubscribeFromCollaboration = this.props.subscribeToCollaboration(id, ({joinedPeople}) => {
      this.watchJoinedPeopleChanges(joinedPeople.map(jp => jp.id));
    });
  }

  watchJoinedPeopleChanges = ids => {
    this.peopleWatchers = {}
    ids.forEach(id => {
      this.peopleWatchers[id] = this.props.subscribeToProfile(id);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromCollaboration();
    Object.keys(this.peopleWatchers).forEach(uid => this.peopleWatchers[uid]());
  }

  render() {
    const {collaboration, joinedPeople} = this.props;
    return (
      <div className="content-wrapper">
        <div className="root">
          <h1>{collaboration.title}</h1>
          <div className="body">
            <div className="viewListUser">
              <JoinedPeople users={joinedPeople}/>
            </div>
            <div className="viewBoard">
              <div className="viewChatBoard">
                <div className="headerChatBoard">
                  <img className="viewAvatarItem" src="https://i.imgur.com/cVDadwb.png" alt="icon avatar"/>
                  <span className="textHeaderChatBoard">Filip Jerga</span>
                </div>
                <div className="viewListContentChat">
                  <div className="viewWrapItemLeft">
                    <div className="viewWrapItemLeft3">
                      <img src="https://i.imgur.com/cVDadwb.png" alt="avatar" className="peerAvatarLeft"/>
                      <div className="viewItemLeft">
                        <span className="textContentItem">hey</span>
                      </div>
                    </div>
                    <span className="textTimeLeft">Oct 31, 2019</span>
                  </div>
                  <div className="viewItemRight">
                    <span className="textContentItem">hey</span>
                  </div>
                  <div style={{float: "left", clear: "both"}}/>
                </div>
                <div className="viewBottom">
                  <input
                    onChange={() => {
                    }}
                    className="viewInput"
                    placeholder="Type your message..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = () => ({subscribeToCollaboration, subscribeToProfile});
const mapStateToProps = ({collaboration}) => ({
  collaboration: collaboration.joined,
  joinedPeople: collaboration.joinedPeople
});

const Collaboration = withAuthorization(withRouter(CollaborationDetail));

export default connect(mapStateToProps, mapDispatchToProps())(Collaboration);
