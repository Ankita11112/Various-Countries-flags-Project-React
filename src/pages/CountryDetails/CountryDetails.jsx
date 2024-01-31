import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import "./countrydetails.css";
const CountryDetails = () => {
  const { name } = useParams();
  const [singleCountry, setSingleCountry] = useState([]);
  useEffect(() => {
    async function fetchOneData() {
      let { data } = await axios(
        `https://restcountries.com/v2/name/${name}?fullText=true`
      );
      setSingleCountry(data);
    }
    fetchOneData();
  }, [name]);
  console.log(singleCountry);

  return (
    <>
      <div style={{padding : "50px 50px 0 50px"}}>
        <Link to={"/"} className="btn">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ width: "50%", textAlign : "center" }}>
          <img
            src={singleCountry[0]?.flags.svg}
            alt=""
            width="80%"
            height="550vh"
          />
        </div>
        <div
          style={{
            width: "50%",
            padding : "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div  style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "space-between"
          }}>
            <div style={{alignSelf : "flex-start", fontSize: "1rem", lineHeight: "30px" }}>
              <h2
                style={{
                  fontSize: "2.6rem",
                  fontWeight: "600",
                  letterSpacing: "3px",
                  lineHeight: "4rem",
                }}
              >
                {singleCountry[0]?.name}
              </h2>
              <p>
                <span style={{ fontWeight: "bolder" }}>Native Name:</span>{" "}
                {singleCountry[0]?.nativeName}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Numeric Code:</span>{" "}
                {singleCountry[0]?.numericCode}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Population:</span>{" "}
                {singleCountry[0]?.population}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Region:</span>{" "}
                {singleCountry[0]?.region}
              </p>
              {/* <p><span style={{fontWeight:"bolder"}}>Sub-Region:</span>{singleCountry[0]?.subRegion}</p> */}
              <p>
                <span style={{ fontWeight: "bolder" }}>Capital:</span>{" "}
                {singleCountry[0]?.capital}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Timezone:</span>{" "}
                {singleCountry[0]?.timezones}
              </p>
            </div>
            <div style={{ alignSelf : "flex-start",marginTop : "67px", lineHeight: "30px" }}>
              <p>
                <span style={{ fontWeight: "bolder" }}>Top Level Domain:</span>{" "}
                {singleCountry[0]?.topLevelDomain[0]}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Currencies:</span>{" "}
                {singleCountry[0]?.currencies[0].name}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Languages:</span>{" "}
                {singleCountry[0]?.languages[0].nativeName}
              </p>
            </div>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <h4 style={{display : "flex", flexWrap : "wrap",alignItems : "center", rowGap : "15px"}}>
              <span style={{ fontWeight: "bolder" , }}>Border Countries:</span>{" "}
              {singleCountry.length &&
                Object.keys(singleCountry[0]).includes("borders") &&
                singleCountry[0]?.borders.map((border) => (
                  <span
                    style={{
                      marginInline: "10px",
                      border: "1px solid black",
                      padding: "5px 10px",
                    }}
                  >
                    {border}
                  </span>
                ))}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
