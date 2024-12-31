import { Fragment, useState } from "react";
import "./App.css";
import { Unit } from "./Components/Unit";
import Header from "./Components/Header";
const App = () => {
  const [myData, setMyData] = useState([]);

  const [inputData, setInputData] = useState({
    imageUrl: "",
    name: "",
    city: "",
    position: "",
  });

  console.log(myData);
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Header />
      <div className="main-container">
        <div className="main-left">
          <input
            placeholder="ImageUrl"
            type="text"
            value={inputData.imageUrl}
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                imageUrl: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="Name"
            value={inputData.name}
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                name: e.target.value,
              }));
            }}
          />

          <input
            type="text"
            placeholder="city"
            value={inputData.city}
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                city: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="position"
            value={inputData.position}
            onChange={(e) => {
              e.preventDefault();
              setInputData((preInputData) => ({
                ...preInputData,
                position: e.target.value,
              }));
            }}
          />
          <button
            onClick={() => {
              setMyData((pre) => {
                return [
                  ...pre,
                  {
                    image: inputData.imageUrl,
                    name: inputData.name,
                    city: inputData.city,
                    position: inputData.position,
                  },
                ];
              });

              setInputData((pre) => {
                if (pre.imageUrl.length > 0) {
                  return {
                    ...pre,
                    imageUrl: "",
                  };
                } else {
                  return pre;
                }
              });

              setInputData((pre) => {
                if (pre.name.length > 0) {
                  return {
                    ...pre,
                    name: "",
                  };
                } else {
                  return pre;
                }
              });

              setInputData((pre) =>
                pre.city.length > 0
                  ? {
                      ...pre,
                      city: "",
                    }
                  : pre
              );
              setInputData((pre) =>
                pre.position.length > 0
                  ? {
                      ...pre,
                      position: "",
                    }
                  : pre
              );
            }}
          >
            Submit
          </button>
        </div>
        <div className="main-right">
          {myData?.map(({ image, name, city, position }, index) => (
            <Unit
              image={image}
              name={name}
              city={city}
              position={position}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
