const Info = (props) => {
  //we get props in form of object
  console.log(props);
  return (
    <div>
      <p>name is {props.name}</p>
      <p>address is {props.address}</p>
      <p>country is {props.country}</p>
      <p>ward is {props.ward}</p>
      <p>phone is {props.phoneNumber}</p>
    </div>
  );
};

export default Info;
