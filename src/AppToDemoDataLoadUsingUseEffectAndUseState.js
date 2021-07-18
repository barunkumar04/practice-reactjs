import {useState, useEffect} from "react";



function AppToDemoDataLoadUsingUseEffectAndUseState({login}){
    const [codeBaseData, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData);
    }, []);

    if(codeBaseData){
        return(
            <div>
                <h5>Code repo owner: {codeBaseData.name}</h5>
                <h5>Code repo location: {codeBaseData.company}</h5>
            </div>
        );
    }else{
        return <div>Invalid login info!</div>;
    }

}

export default AppToDemoDataLoadUsingUseEffectAndUseState