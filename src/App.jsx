import { useEffect, useState } from "react";
import { fetchData } from "./api";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            if (result) {
                setData(result);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Datos desde el Backend</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
