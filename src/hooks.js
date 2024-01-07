import axios from "axios";
import React, {useState}from "react";
import {v1 as uuid} from 'uuid';

function useFlip(initial=true){

    const [isFacingUp, setIsFacingUp] = useState(initial)
    const flipCard = () =>{
        setIsFacingUp(isUp => !isUp)
    }

    return [isFacingUp, flipCard]

};

function useAxios(baseURL){
    const [data, setData] = useState([])
    const addData = async (urlExtension) =>{
        let url;
        if(typeof urlExtension === 'string' || urlExtension instanceof String){
            url = `${baseURL}${urlExtension}`;
        }else{
            url = baseURL;
        }
        const resp = await axios.get(url)
        setData(data => [...data, {...resp.data, id: uuid()}])
    }
    return [data, addData]
}

export {useFlip, useAxios}