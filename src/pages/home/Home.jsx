import CountryCard from "../../components/CountryCard";
import axios from "axios";
import { DotLoader } from "react-spinners";
import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Pagination, Select, TextField } from "@mui/material";
import {paginate, filterByRegion} from "../../common/utils"; //searching
let all_countries;

const Home = ({ darkMode }) => {
  const [countries, setCountries] = useState([]);
  const [pageSize] = useState(12);   //setPageSize
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] =  useState(" ");

  useEffect(() => {
    async function fetchRestCountries() {
      let { data } = await axios("https://restcountries.com/v2/all");
      setCountries(data);
      all_countries = data;
    }
    fetchRestCountries();
  }, []);
  console.log(countries);

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };

  const searching = (arr, searchBy, keyword) => {
    return arr.filter((item) => item[searchBy].toLowerCase().includes(keyword.toLowerCase()))
  }
  console.log(searching);
  
  const handleSearch = (e) => {
    setCurrentPage(1);
    let keyword = e.target.value;
    let searchBy = "name";
    let result = countries && searching(all_countries, searchBy, keyword);
    setCountries(result);
  }

  const handleFilterChange = (e) => {
    setCurrentPage(1)
    setRegion(e.target.value);
    let keyword = e.target.value;
    let result = countries && filterByRegion(all_countries, keyword);
    setCountries(result);
  }
  
  const paginatedResult =
    countries && paginate(countries, currentPage - 1, pageSize);
  return (
    <>
     {/* Search field select from mui@.com */}
     <div style = {{display: "flex" , justifyContent: "space-between", marginTop:"15px" }}>
      <div style={{ textAlign: "left", marginLeft: "70px" , width:"60vw"}}>
        <TextField
          label="Search"
          fullWidth
          margin="dense"
          autoComplete="off"
          // sx={{maxWidth: "100%"}}
          onChange={handleSearch}
        />
      </div>
       {/* filter select from mui@.com */}
      <div style ={{marginTop: "8px", width: "15rem"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"  value={region}
          label="Region"
          sx = {{maxWidth: "100%", marginRight: "70px"}}
          onChange= {handleFilterChange}
        >
          <MenuItem value={" "}>All</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Asia"}> Asia </MenuItem>
          <MenuItem value={"Americas"}>America</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
        </Select>
      </FormControl>
      </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBlock: 20,
        }}
      >
        {!countries.length && (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DotLoader color="#148f8b" size={100} />
          </div>
        )}
        {paginatedResult &&
          paginatedResult?.map((country) => (
            <CountryCard country={country} key={country?.name} />
          ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100px",
          marginBlock: "1rem",
        }}
      >
        <Pagination
          count={countries ? Math.ceil(countries.length / pageSize) : 10}
          color="primary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
