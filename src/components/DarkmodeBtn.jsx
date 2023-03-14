import React, { useContext } from 'react'
import themeContext from '../ThemeContext'


function DarkmodeBtn() {
    const {isThemeDark, setIsThemeDark} = useContext(themeContext);

    const handleclick = () => {
        if(isThemeDark === false) 
            setIsThemeDark(true);
        else 
            setIsThemeDark(false);
    }
    
    return (
        <button onClick={handleclick}><img src={isThemeDark ? "../../public/icons/sun-svgrepo-com.svg" : "../../public/icons/moon-svgrepo-com.svg" } alt='moon icon' className={'w-[40px] border-2 rounded-lg p-2 stroke-white absolute right-2 top-2'}/></button>
    )
}

export default DarkmodeBtn