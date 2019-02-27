import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'react'
import './index.css';
import Avatar from './Avatar';

function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time)
}(
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
);

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet({ tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>

  );
}

ReactDOM.render(<Tweet />, document.getElementById('root'));


