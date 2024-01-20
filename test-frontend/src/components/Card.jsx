/* eslint-disable react/prop-types */
const Card = ({ name }) => {
  return (
    <div className="col-3">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
