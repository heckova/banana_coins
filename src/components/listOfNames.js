import React from "react";

const ListOfNames = (props) => {

        const listOfCoins = (names, callback) => {

            if (names.length !== 0) { // console.log("Props: " + props);
                // console.log(names);

                return names.map((item) => {
                    return <div key={item} className="coinName" onClick={() => callback({item})}>{item}</div>;
                })
            }
        };


        return (
            <div className="listOfNames">{listOfCoins(props.names, props.onCoinClick)}</div>
        )
    }
;

export default ListOfNames;