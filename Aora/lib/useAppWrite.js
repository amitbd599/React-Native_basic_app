import { useEffect, useState } from "react";

const useAppWrite = (fn) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let fetchData = async () => {
        setLoading(true);
        try {
            let response = await fn();
            setData(response);
        } catch (err) {
            Alert.alert("Error", err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);


    const refetch = async () => {
        await fetchData();
    }

    return { data, loading, refetch }
}

export default useAppWrite;