import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default function Vans() {
  const [vansData, setVansData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios
      .get("/api/vans")
      .then((response) => {
        console.log("lol", response);
        setVansData(response.data.vans);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const setFilterListFunction = (value) => {
    if (filterList.length < 1) {
      setFilterList([value]);
      console.log(value);
    } else if(value === "false") {
			setFilterList([])
		}else {
      setFilterList((prevFilterList) => {
        const newFilterList = [...prevFilterList];
        if (prevFilterList.includes(value)) {
          return newFilterList.filter((e) => e !== value);
        } else {
          newFilterList.push(value);

          return newFilterList;
        }
      });
    }
  };

  console.log(filterList);

  const vansElement = vansData.map((vanData) => {
    if (filterList.includes(vanData.type) || filterList.length < 1) {
      return (
        <Link key={vanData.id} to={`/vans/${vanData.id}`} className="list-vans__item">
          <div className="list-vans__image-body">
            <img src={vanData.imageUrl} alt="Van"></img>
          </div>
          <div className="list-vans__information">
            <h4 className="list-vans__title">{vanData.name}</h4>
            <div className="list-vans__price">
              <p className="list-vans__price_amount">${vanData.price}</p>
              <p className="list-vans__price_period">/day</p>
            </div>
          </div>
          <div className={`list-vans__type list-vans__type_${vanData.type}`}>
            <p>
              {vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1)}
            </p>
          </div>
        </Link>
      );
    }
  });

  return (
    <main className="vans">
      <section className="vans__main">
        <div className="vans__container">
          <div className="header-vans">
            <h2 className="header-vans__title">Explore our van options</h2>
            <ul className="header-vans__filters">
              <li>
                <button
                  onClick={(e) =>
                    setFilterListFunction(e.target.value.toLowerCase())
                  }
                  className={`header-vans__filter-default ${
                    filterList.includes("simple") && "_select-simple"
                  }`}
                  value={"simple"}
                >
                  Simple
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    setFilterListFunction(e.target.value.toLowerCase())
                  }
                  className={`header-vans__filter-default ${
                    filterList.includes("luxury") && "_select-luxury"
                  }`}
                  value={"luxury"}
                >
                  Luxury
                </button>
              </li>
              <li>
                <button
                  onClick={(e) =>
                    setFilterListFunction(e.target.value.toLowerCase())
                  }
                  className={`header-vans__filter-default ${
                    filterList.includes("rugged") && "_select-rugged"
                  }`}
                  value={"rugged"}
                >
                  Rugged
                </button>
              </li>
              {filterList.length >= 1 &&(<li>
                <button
                  onClick={(e) => setFilterListFunction(e.target.value)}
									value={"false"}
                  className={`header-vans__filter-clear`}
                >
                  Clear filters
                </button>
              </li>)}
            </ul>
          </div>
          <div className="list-vans">{vansElement}</div>
        </div>
      </section>
    </main>
  );
}
