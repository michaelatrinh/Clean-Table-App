import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/Router';

import Button from '../../comps/GenerateRecipeButton';

const results = {
    //chicken results
    ChickenRiceBroccoli:"", //how to link this to the specific receipe page
    ChickenRiceOnion:"",
    ChickenRiceCarrot:"",
    ChickenPastaBroccoli:"", 
    ChickenPastaOnion:"",
    ChickenPastaCarrot:"",
    ChickenPotatoBroccoli:"", 
    ChickenPotatoOnion:"",
    ChickenPotatoCarrot:"",

    //beef results
    BeefRiceBroccoli:"", 
    BeefRiceOnion:"",
    BeefRiceCarrot:"",
    BeefPastaBroccoli:"", 
    BeefPastaOnion:"",
    BeefPastaCarrot:"",
    BeefPotatoBroccoli:"", 
    BeefPotatoOnion:"",
    BeefPotatoCarrot:"",

    //tofu results
    TofuRiceBroccoli:"", 
    TofuRiceOnion:"",
    TofuRiceCarrot:"",
    TofuPastaBroccoli:"", 
    TofuPastaOnion:"",
    TofuPastaCarrot:"",
    TofuPotatoBroccoli:"", 
    TofuPotatoOnion:"",
    TofuPotatoCarrot:"",

}

export default function Results(){

    const router = useRouter();
    const [options, setOptions] = useState({
        protiens:null,
        carbohydrates:null,
        vegetables:null,
    });

    const [text, setText] = useState(null);

    useEffect(()=>{
        if(process.browser){
           var o = sessionStorage.getItem("options");

           var obj = JSON.parse(o);

           var key = obj.protiens+obj.carbohydrates+obj.vegetables;
           console.log(key);
           if(results[key]){
            setText(results[key]);
           } else{
               setText(results.wrong);
           }
        }
    }, []);

    return <div>
        <Button text="Generate Recipe" onClick={()=>router.push("/options/all")} />
    </div>
}