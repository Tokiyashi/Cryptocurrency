import React from 'react';
import {makeQuery} from "../../api/cryptoAPI";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Dropdown from "../UI/Dropdown/Dropdown";

const Header = () => {

    const [searchResult, setSearchResult] = useState('')
    const [search, setSearch] = useState('')
    const [displayResult, setDisplayResult] = useState(false)

    useEffect(()=>{
        makeSearch(search)
    }, [search])

    const makeSearch = async (input) => {
        if (input !== ""){
            const result = await makeQuery(input);
            setSearchResult(result.coins);
        }
        else{
            setSearchResult("");
        }
        console.log(searchResult)
    }


    return (
        <header>
            <h2> Cryptocurrency App </h2>
            <div>
                <input
                    onFocus={() => setDisplayResult(true)}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="find any coin..."
                />
                {
                    searchResult.length > 0 && searchResult !== '' && displayResult
                    &&
                    <Dropdown >
                        {
                            searchResult.map((item, index) => {
                            if (index < 5)
                            return(
                            <Link to={"/coin/" + item.id}
                                  className="searchItem"
                                  onClick={()=> setSearch("")} key={item.id}>
                                {item.name}
                            </Link>
                            )})
                        }
                    </Dropdown>

                }
            </div>
        </header>
    );
};

export default Header;