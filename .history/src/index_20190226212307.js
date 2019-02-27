import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import Avatar from './Avatar';

function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
}
  


const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
  <i className="fa fa-retweet retweet-button" />
  {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart like-button" />
    {count > 0 && <span className="like-count">   {count}
    </span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);


let listTweets = [
    {
        message: "Something about dogs.",
        gravatar: "xyz",
        author: {
          handle: "dogperson",
          name: "IMA Dogperson"
        },
        likes: 5,
        retweets: 1,
        timestamp: "2019-01-25 21:24:37" 
      },
      {
        message: "Second Tweet",
        gravatar: "abc",
        author: {
          handle: "secontweet",
          name: "I am cool"
        },
        likes: 3,
        retweets: 2,
        timestamp: "2018-01-25 21:24:37" 
      },
      {
        message: "hey Twii",
        gravatar: "dfg",
        author: {
          handle: "thirthtweet",
          name: "You are awesome"
        },
        likes: 2,
        retweets: 3,
        timestamp: "2017-01-25 21:24:37" 
      },

]

function Tweet({ tweet }) {
  return (

    <div>
    {listTweets.map( tweet => 
        // eslint-disable-next-line no-unused-expressions
        <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author} />
          <Time time={tweet.timestamp} />
          <Message text={tweet.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    ) }
    </div>
  
   

  );
}

ReactDOM.render(<Tweet tweet={listTweets} />, document.getElementById('root'));
