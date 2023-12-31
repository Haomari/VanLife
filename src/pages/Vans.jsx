import React, { useState, useEffect, Suspense } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getVans } from "../app-components/api";
import { LoadingFullScreen } from "../app-components/Loading";

// Loader function for fetching data
export function loader() {
  return defer({ vans: getVans() });
}

// Main component for displaying van options
export default function Vans() {
  const dataPromise = useLoaderData();
  const [filterList, setFilterList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Update filterList based on searchParams on initial render
  useEffect(() => {
    const typeFilter = searchParams.get("type");
    if (typeFilter) {
      setFilterList(typeFilter.split("-"));
    }
  }, []);

  // Handle changes to searchParams based on filter selection
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // Handle changes to filterList and searchParams
  const handleFilterListChange = (value) => {
    if (filterList.length < 1) {
      setFilterList([value]);
      handleFilterChange("type", value);
    } else if (value === "false") {
      setFilterList([]);
      handleFilterChange("type", null);
    } else if (filterList.includes(value)) {
      const filteredArray = [...filterList].filter((e) => e !== value);

      searchParams.get("type").split("-").length === 1
        ? handleFilterChange("type", null)
        : handleFilterChange("type", filteredArray.join("-"));
      setFilterList(filteredArray);
    } else {
      const filteredArray = [...filterList];

      filteredArray.push(value);

      handleFilterChange("type", filteredArray.join("-"));
      setFilterList(filteredArray);
    }
  };

  // Render the list of vans
  const vansElement = (
    <Suspense fallback={<LoadingFullScreen />}>
      <Await resolve={dataPromise.vans}>
        {(loadedVans) => {
          return (
            <div className="list-vans">
              {loadedVans.map((vanData) => {
                if (
                  filterList.includes(vanData.type) ||
                  filterList.length < 1
                ) {
                  return (
                    <Link
                      key={vanData.id}
                      state={{
                        search: searchParams.toString(),
                        buttonText: searchParams.get("type"),
                      }}
                      to={vanData.id}
                      className="list-vans__item"
                    >
                      <div className="list-vans__image-body">
                        <img src={vanData.imageUrl} alt="Van"></img>
                      </div>
                      <div className="list-vans__information">
                        <h4 className="list-vans__title">{vanData.name}</h4>
                        <div className="list-vans__price">
                          <p className="list-vans__price_amount">
                            ${vanData.price}
                          </p>
                          <p className="list-vans__price_period">/day</p>
                        </div>
                      </div>
                      <div
                        className={`list-vans__type list-vans__type_${vanData.type}`}
                      >
                        <p>
                          {vanData.type.charAt(0).toUpperCase() +
                            vanData.type.slice(1)}
                        </p>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );

  return (
    <main className="vans">
      <section className="vans__main">
        <div className="vans__container">
          <div className="header-vans">
            {/* Filter buttons */}
            <h2 className="header-vans__title">Explore our van options</h2>
            <ul className="header-vans__filters">
              {/* Simple filter button */}
              <li>
                <button
                  onClick={(e) =>
                    handleFilterListChange(e.target.value.toLowerCase())
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
                    handleFilterListChange(e.target.value.toLowerCase())
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
                    handleFilterListChange(e.target.value.toLowerCase())
                  }
                  className={`header-vans__filter-default ${
                    filterList.includes("rugged") && "_select-rugged"
                  }`}
                  value={"rugged"}
                >
                  Rugged
                </button>
              </li>
              {/* Clear filters button */}
              {filterList.length >= 1 && (
                <li>
                  <button
                    onClick={(e) => handleFilterListChange(e.target.value)}
                    value={"false"}
                    className={`header-vans__filter-clear`}
                  >
                    Clear filters
                  </button>
                </li>
              )}
            </ul>
          </div>
          {/* Render the list of vans */}
          {vansElement}
        </div>
      </section>
    </main>
  );
}
