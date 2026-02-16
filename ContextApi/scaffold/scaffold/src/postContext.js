// create post context here
import { createContext, useContext, useState } from "react";
import { posts } from "./data";

const postContext = createContext();

// Create custom hook that returns context value here
function useValue() {
    const value = useContext(postContext);
    return value;
}

// create a custom saved post provider here with add and reset functions
function CustomPostContext({ children }) {

    const [savedPosts, setSavedPosts] = useState([]);

    const [showSavedList, setShowSavedList] = useState(false);

    const handleAdd = (id) => {
    const post = posts.find((p) => p.id === id);
    
    if (!savedPosts.find((p) => p.id === id)) {
        setSavedPosts([...savedPosts, post]);
    }
}

    const handleRemove = () => {
        setSavedPosts([]);
    }

    return (
        <postContext.Provider
            value={{ savedPosts, setSavedPosts, handleAdd, handleRemove, showSavedList,  setShowSavedList}}
        >
            {children}
        </postContext.Provider>
    );
}

export { useValue };
export default CustomPostContext;