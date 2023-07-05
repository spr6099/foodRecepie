import React,{useState,useEffect} from "react";

export const MenuContext = React.createContext()

export const AllMenus = (props)=>{
    let [menu, setMenu] = useState([]);
    let [loading, setloading] = useState(true);

    async function getAllTheMenus() {
        const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API);
        let data = await response.json();
        setMenu(data.meals);
        setloading(false);
      }
      useEffect(() => {
        getAllTheMenus();
        
      }, []);
    return(
<MenuContext.Provider value={menu} >
{!loading ?  props.children : <h1>Loading</h1>} 
</MenuContext.Provider>   
    
     )

}

