export const Unit = ({ image, name, city, position }) => {
  return (
    <div className="unit-container">
      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p>
        <span>{city}</span>
        <span>{position}</span>
      </p>
    </div>
  );
};
