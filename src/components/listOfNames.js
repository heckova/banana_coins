import React from "react";

const ListOfNames = (props) => {


        const listOfCoins = (names) => {
            if (names.length !== 0) {
                console.log(names);
                return names.map((item) => {
                    return <div key={item} className="coinName">{item}</div>;
                })
            }
        };


        return (
            <div className="listOfNames">{listOfCoins(props.names)}</div>
        )
    }
;

export default ListOfNames;