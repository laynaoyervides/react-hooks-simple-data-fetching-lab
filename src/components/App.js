// create your App component here
import React, {useState, useEffect,} from "react";

function App () {
    const [image, setImage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

     useEffect (()=>{
     fetch("https://dog.ceo/api/breeds/image/random")
     .then((resp) => resp.json())
     .then ((json) => {
            setImage(json.message);
            setIsLoaded(true);
            console.log(json.message);

        })
    }, []);
     if (!isLoaded) return <p>Loading...</p>;

    return (
    <img alt='A Random Dog' src={image}></img>
)
};

export default App;
