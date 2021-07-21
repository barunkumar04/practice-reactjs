import {useState, useEffect} from "react";



function AppToDemoDataLoadUsingUseEffectAndUseState(props){
    const [codeBaseData, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!props.login)
            return;
        setLoading(true);

        fetch(`https://api.github.com/users/${props.login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [props.login]);

    if(loading) return <h1>Loading...</h1>
    if(error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    if(props.isAdmin && codeBaseData){
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