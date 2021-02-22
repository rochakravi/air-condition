import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [commitHistory, setCommitHistory] = useState([]);
  //   const handler = () => {
  //     fetch("https://api.github.com/users/hacktivist123/repos")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data);
  //       });
  //   };
  useEffect(() => {
    fetch("https://api.github.com/users/hacktivist123/repos")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  });
  return (
    <>
      {products.map((person, index) => (
        <p>{person.name}</p>
      ))}
      {/* <button onClick={handler}>Show Data</button> */}
      <p>Home </p>
    </>
  );
};

export default Home;
