function User(prop) {

  return (
    <div className="user text-sm">
      <p>{prop.username} ({prop.email})</p>
      <p>{prop.name}</p>
      <p>{prop.website}</p>
      <p>{prop.company.name}</p>
    </div>
  );
}

export default User;
