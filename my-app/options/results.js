import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/Router';

//button
import Button from 'my-app/comps/GenerateRecipeButton';

//recipes
import ChickenRiceBroccoli from 'my-app/pages/recipe-pagec1.js';
import ChickenRiceOnion from 'my-app/pages/recipe-pagec2.js';
import ChickenRiceCarrot from 'my-app/pages/recipe-pagec3.js';
import ChickenPastaBroccoli from 'my-app/pages/recipe-pagec4.js';
import ChickenPastaOnion from 'my-app/pages/recipe-pagec5.js';
import ChickenPastaCarrot from 'my-app/pages/recipe-pagec6.js';
import ChickenPotatoBroccoli from 'my-app/pages/recipe-pagec7.js';
import ChickenPotatoOnion from 'my-app/pages/recipe-pagec8.js';
import ChickenPotatoCarrot from 'my-app/pages/recipe-pagec9.js';

import BeefRiceBroccoli from 'my-app/pages/recipe-page-b1.js';
import BeefRiceOnion from 'my-app/pages/recipe-page-b2.js';
import BeefRiceCarrot from 'my-app/pages/recipe-page-b3.js';
import BeefPastaBroccoli from 'my-app/pages/recipe-page-b4.js';
import BeefPastaOnion from 'my-app/pages/recipe-page-b5.js';
import BeefPastaCarrot from 'my-app/pages/recipe-page-b6.js';
import BeefPotatoBroccoli from 'my-app/pages/recipe-page-b7.js';
import BeefPotatoOnion from 'my-app/pages/recipe-page-b8.js';
import BeefPotatoCarrot from 'my-app/pages/recipe-page-b9.js';

import TofuRiceBroccoli from 'my-app/pages/recipe-page-t1.js';
import TofuRiceOnion from 'my-app/pages/recipe-page-t2.js';
import TofuRiceCarrot from 'my-app/pages/recipe-page-t3.js';
import TofuPastaBroccoli from 'my-app/pages/recipe-page-t4.js';
import TofuPastaOnion from 'my-app/pages/recipe-page-t5.js';
import TofuPastaCarrot from 'my-app/pages/recipe-page-t6.js';
import TofuPotatoBroccoli from 'my-app/pages/recipe-page-t7.js';
import TofuPotatoOnion from 'my-app/pages/recipe-page-t8.js';
import TofuPotatoCarrot from 'my-app/pages/recipe-page-t9.js';

const results = {
    //chicken results
    ChickenRiceBroccoli: <ChickenRiceBroccoli />, //how to link this to the specific recipe page
    ChickenRiceOnion: <ChickenRiceOnion />,
    ChickenRiceCarrot: <ChickenRiceCarrot />,
    ChickenPastaBroccoli: <ChickenPastaBroccoli />, 
    ChickenPastaOnion: <ChickenPastaOnion />,
    ChickenPastaCarrot: <ChickenPastaCarrot />,
    ChickenPotatoBroccoli: <ChickenPotatoBroccoli />, 
    ChickenPotatoOnion: <ChickenPotatoOnion />,
    ChickenPotatoCarrot: <ChickenPotatoCarrot />,

    //beef results
    BeefRiceBroccoli: <BeefRiceBroccoli/>, 
    BeefRiceOnion: <BeefRiceOnion/>,
    BeefRiceCarrot: <BeefRiceCarrot/>,
    BeefPastaBroccoli: <BeefPastaBroccoli/>, 
    BeefPastaOnion: <BeefPastaOnion/>,
    BeefPastaCarrot: <BeefPastaCarrot/>,
    BeefPotatoBroccoli: <BeefPotatoBroccoli/>, 
    BeefPotatoOnion: <BeefPotatoOnion/>,
    BeefPotatoCarrot: <BeefPotatoCarrot/>,

    //tofu results
    TofuRiceBroccoli: <TofuRiceBroccoli/>, 
    TofuRiceOnion: <TofuRiceOnion/>,
    TofuRiceCarrot: <TofuRiceCarrot/>,
    TofuPastaBroccoli: <TofuPastaBroccoli/>, 
    TofuPastaOnion: <TofuPastaOnion/>,
    TofuPastaCarrot: <TofuPastaCarrot/>,
    TofuPotatoBroccoli: <TofuPotatoBroccoli/>, 
    TofuPotatoOnion: <TofuPotatoOnion/>,
    TofuPotatoCarrot: <TofuPotatoCarrot/>,

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