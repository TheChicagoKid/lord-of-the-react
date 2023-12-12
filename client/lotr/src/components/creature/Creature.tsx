const Creature = (props) => {
  return (
    <>
      <h3>{props.type}</h3>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
    </>
  );
};

export default Creature;
