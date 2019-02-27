import React from 'react';

function Avatar({hash}) {
  var url =`https://www.gravatar.com/avatar${hash}`;

  return (<img  className="avatar" alt="avatar" />);
}

export default Avatar;