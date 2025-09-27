import React from 'react'

function Profile() {
  const user = { name: "Chathuri", age: 25 };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Profile