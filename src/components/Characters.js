import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";

const Characters = () => {
  const [character, setcharacter] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.info.next);
        setPrevPageUrl(res.data.info.prev);
        setcharacter(res.data.results);
        console.log(res.data.results);
      });
    return () => cancel();
  }, [currentPageUrl]);

  function goToNextPage() {
    setcurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setcurrentPageUrl(prevPageUrl);
  }

  return (
    <div>
      <div className="characters">
        {loading && "Loading..."}
        <ul className="characters_list">
          {character.map((characters) => (
            <Card characters={characters} key={characters.id} />
          ))}
        </ul>
      </div>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
};

export default Characters;
