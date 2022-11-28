function User(prop) {

  if (!prop) return null;

  return (
    <div className="user text-sm p-3 mb-3">
      <div>
        {/* {prop.username && <p className="text-md font-bold inline">{prop.username}</p>}
        {prop.email && <p className="text-sm italic inline ml-1">({prop.email})</p>} */}
        <p className="text-md font-bold inline">{prop.username}</p>
        <p className="text-sm italic inline ml-1">({prop.email})</p>
      </div>

      <div className="ml-3">
        {/*
        {prop.name && <p>Name: {prop.name}</p>}
        {prop.website && <p>Site: {prop.website}</p>}
        */}
        <p>Name: {prop.name}</p>
        <p>Site: {prop.website}</p>
        {/* <p>Company: {prop.company.name}</p> */}
        {prop.company && <p>Company: {prop.company.name}</p>}
      </div>
    </div>
  );
}

export default User;
