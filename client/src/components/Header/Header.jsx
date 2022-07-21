import React from 'react';
import {makeQuery} from "../../api/cryptoAPI";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const [searchResult, setSearchResult] = useState('')
    const [search, setSearch] = useState('')

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
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="find any coin..."
                />
                {
                    searchResult.length > 0 && searchResult !== ''
                    && searchResult.map((item, index) => {
                            if (index < 5)
                                return(
                                    <Link to={"/coin/" + item.id} style={{
                                        position: "absolute",
                                        backgroundColor: "white",
                                        color: "black",
                                        top: index * 25 + 100,
                                        }} key={item.id}>
                                        {item.name}
                                    </Link>
                                )
                        }
                    )
                }
            </div>
        </header>
    );
};

export default Header;