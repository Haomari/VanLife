import { Link } from 'react-router-dom';

export default function HostVanList(props) {
  // Extract data from props
  const vansData = props.data;

  return (
    // Conditional rendering: Check if vansData exists
    vansData ? (
      // If vansData exists, map through the data and render van items
      vansData.map((van, index) => {
        return (
          <Link to={`/host/vans/${van.id}`} key={index} className="vans-list__item">
            {/* Display van image */}
            <div className="vans-list__image-body">
              <img src={van.imageUrl} alt="Van"></img>
            </div>
            {/* Display van information */}
            <div className="vans-list__info">
              <h4 className="vans-list__title">{van.name}</h4>
              <div className="vans-list__price">
                <p>${van.price}/day</p>
              </div>
            </div>
            {/* Display edit option */}
            <div className="vans-list__edit">
              <p>Edit</p>
            </div>
          </Link>
        );
      })
    ) : (
      // If vansData is null, display loading message
      <h2 className="vans-list__loading loading">Loading</h2>
    )
  );
}
