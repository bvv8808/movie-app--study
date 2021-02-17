import React, { useEffect, useRef, useState } from "react";
import "./FetchBox.css";

export default ({ loading, setPage }) => {
  const ref__fetchBox = useRef(null);

  const fetchObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    console.log("Intersecting!");
    // isIntersecting && setPage((page) => page + 1);
  });

  useEffect(() => {
    fetchObserver.observe(ref__fetchBox.current);
    return () => {
      fetchObserver.unobserve(ref__fetchBox.current);
    };
  }, []);

  return (
    <div ref={ref__fetchBox} id="fetchBox">
      {/* {loading ? "Loading..." : ""} */}
      Loading...
    </div>
  );
};
