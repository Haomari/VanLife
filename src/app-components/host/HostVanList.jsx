import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function HostVanList() {
	const [vansData, setVansData] = useState(null);

  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios
      .get("/api/host/vans")
      .then((response) => {
        console.log("lol", response);
        setVansData(response.data.vans);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

	return (
		vansData ? (
			vansData.map((van, index) => {
				return (
					<Link to={van.id} key={index} className="vans-list__item">
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