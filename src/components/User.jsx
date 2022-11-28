function User(prop) {

  if (!prop) return null;

  return (
    <div className="user text-sm p-3 mb-3">
      <div>
        <p className="text-md font-bold inline">{prop.username}</p>
        <p className="text-sm italic inline ml-1">({prop.email})</p>
      </div>

      <div className="ml-3">
        <p>Name: {prop.name}</p>
        <p>Site: {prop.website}</p>
        {prop.company && <p>Company: {prop.company.name}</p>}
      </div>
    </div>
  );
}

export default User;
