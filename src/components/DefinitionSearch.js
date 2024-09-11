import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch() {
    const [word, setWord] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("state updated " + word);
        return () => {
            console.log("cleanup function")
        }
    }, [word]);



    return (
        <form className="flex space-between space-x-2 max-w-[300px]" 
        onSubmit={(e) => {
            e.preventDefault();
            navigate(`/dictionary/${word}`)
        }}>
            <input style={{border: "1px solid black"}} placeholder="hello" type="text" className="px-2 py-1 rounded shrink min-w-0" onChange={(e) => {
                setWord(e.target.value)
            }}
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">Search</button>
        </form>
    )
}