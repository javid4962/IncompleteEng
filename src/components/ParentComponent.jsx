import React from 'react';
import { useState } from 'react'
import DataDisplay from './DataDisplay';
import jsonData from './DataComponent';

function filterData(searchText, colleges) {
    const filterData = colleges.filter((college) =>

        // college?.name?.toLowerCase().includes(searchText.toLowerCase())
        college?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.university?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.address?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.principalName?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.principalNumber?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.tpoName?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.tpoNumber?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.mailId?.toLowerCase().includes(searchText.toLowerCase()) ||
        college?.officeNumber?.toLowerCase().includes(searchText.toLowerCase())

    );
    return filterData;
}

const ParentComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [colleges, setColleges] = useState(jsonData);
    const [filterColleges, setFilterColleges] = useState(jsonData);

    return (
        <div className='container'>
            <div className="search-container">
                <h1 className='header'>Incomplete Engineering Colleges List</h1>

                <input
                    type="search"
                    value={searchText}
                    placeholder="Search here"
                    autofocus='true'
                    name="searchbar" id="searchBar" onChange={(e) => {
                        const value = e.target.value; // Get the current input value
                        setSearchText(value); // Set the search text

                        // Filter the colleges based on the current value
                        const filteredData = filterData(value, colleges);
                        setFilterColleges(filteredData);
                    }}
                />
            </div >

            <div id='component-container'>
                {filterColleges.map((i) => {
                    return <DataDisplay data={i} key={i.id} />
                    console.log(i)
                })}
            </div>
        </div>
    );
};

export default ParentComponent;
