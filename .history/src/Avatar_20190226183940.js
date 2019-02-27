import React from 'react';

function Avatar({hash}) {
  var url =`https://www.gravatar.com/avatar${hash}`
  return (<img src=`https://www.gravatar.com/avatar${hash}` className="avatar" alt="avatar" />);
}

export default Avatar;