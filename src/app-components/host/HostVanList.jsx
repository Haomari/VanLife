import { Link } from 'react-router-dom'

export default function HostVanList(props) {
	const vansData  = props.data;

	return (
		vansData ? (
			vansData.map((van, index) => {
				return (
					<Link to={`/host/vans/${van.id}`} key={index} className="vans-list__item">
						<div className="vans-list__image-body">
							<img src={van.imageUrl} alt="Van"></img>
						</div>
						<div className="vans-list__info">
							<h4 className="vans-list__title">{van.name}</h4>
							<div className="vans-list__price">
								<p>${van.price}/day</p>
							</div>
						</div>
						<div className="vans-list__edit">
							<p>Edit</p>
						</div>
					</Link>
				);
			})
		) : (
			<h2 className="vans-list__loading loading">Loading</h2>
		)
	)
}