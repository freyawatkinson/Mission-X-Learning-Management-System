import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Tweet() {

    // Retreive and set data to be returned
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweet');
        const items = await data.json();
        setItems(items);
    };

    return(
        <div>
        <section>
           {
               items.map(item => (
                   <div>
                       <p>{item.name}</p>
                       <p>{item.msg}</p>
                       <p>{item.username}</p>
                   </div>
               ))
           }
        </section>
        </div>
    );
}

export default Tweet;