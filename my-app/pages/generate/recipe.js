import React, {useState, useEffect} from 'react';

import ChickenRiceBroccoli from '../recipe/recipe-pagec2';
import ChickenRiceOnion from '../recipe/recipe-pagec1';
import ChickenRiceCarrot from '../recipe/recipe-pagec3';
import ChickenPastaBroccoli from '../recipe/recipe-pagec4';
import ChickenPastaOnion from '../recipe/recipe-pagec5';
import ChickenPastaCarrot from '../recipe/recipe-pagec6';
import ChickenPotatoBroccoli from '../recipe/recipe-pagec7';
import ChickenPotatoOnion from '../recipe/recipe-pagec8';
import ChickenPotatoCarrot from '../recipe/recipe-pagec9';

import BeefRiceBroccoli from '../recipe/recipe-page-b1';
import BeefRiceOnion from '../recipe/recipe-page-b2';
import BeefRiceCarrot from '../recipe/recipe-page-b3';
import BeefPastaBroccoli from '../recipe/recipe-page-b4';
import BeefPastaOnion from '../recipe/recipe-page-b5';
import BeefPastaCarrot from '../recipe/recipe-page-b6';
import BeefPotatoBroccoli from '../recipe/recipe-page-b7';
import BeefPotatoOnion from '../recipe/recipe-page-b8';
import BeefPotatoCarrot from '../recipe/recipe-page-b9';

import TofuRiceBroccoli from '../recipe/recipe-page-t1';
import TofuRiceOnion from '../recipe/recipe-page-t2';
import TofuRiceCarrot from '../recipe/recipe-page-t3';
import TofuPastaBroccoli from '../recipe/recipe-page-t4';
import TofuPastaOnion from '../recipe/recipe-page-t5';
import TofuPastaCarrot from '../recipe/recipe-page-t6';
import TofuPotatoBroccoli from '../recipe/recipe-page-t7';
import TofuPotatoOnion from '../recipe/recipe-page-t8';
import TofuPotatoCarrot from '../recipe/recipe-page-t9';

const data = {
    //chicken results
    ChickenRiceBroccoli:<ChickenRiceBroccoli/>,
    ChickenRiceOnion: <ChickenRiceOnion/>,
    ChickenRiceCarrot: <ChickenRiceCarrot />,
    ChickenPastaBroccoli: <ChickenPastaBroccoli />, 
    ChickenPastaOnion: <ChickenPastaOnion />,
    ChickenPastaCarrot: <ChickenPastaCarrot />,
    ChickenPotatoesBroccoli: <ChickenPotatoBroccoli />, 
    ChickenPotatoesOnion: <ChickenPotatoOnion />,
    ChickenPotatoesCarrot: <ChickenPotatoCarrot />,

    //beef results
    BeefRiceBroccoli: <BeefRiceBroccoli/>, 
    BeefRiceOnion: <BeefRiceOnion/>,
    BeefRiceCarrot: <BeefRiceCarrot/>,
    BeefPastaBroccoli: <BeefPastaBroccoli/>, 
    BeefPastaOnion: <BeefPastaOnion/>,
    BeefPastaCarrot: <BeefPastaCarrot/>,
    BeefPotatoesBroccoli: <BeefPotatoBroccoli/>, 
    BeefPotatoesOnion: <BeefPotatoOnion/>,
    BeefPotatoesCarrot: <BeefPotatoCarrot/>,

    //tofu results
    TofuRiceBroccoli: <TofuRiceBroccoli/>, 
    TofuRiceOnion: <TofuRiceOnion/>,
    TofuRiceCarrot: <TofuRiceCarrot/>,
    TofuPastaBroccoli: <TofuPastaBroccoli/>, 
    TofuPastaOnion: <TofuPastaOnion/>,
    TofuPastaCarrot: <TofuPastaCarrot/>,
    TofuPotatoesBroccoli: <TofuPotatoBroccoli/>, 
    TofuPotatoesOnion: <TofuPotatoOnion/>,
    TofuPotatoesCarrot: <TofuPotatoCarrot/>,

}

export default function RecipePage() {
    const [recipe, setRecipe] = useState({
        protein:null,
        carb:null,
        vege:null
    });

    useEffect(()=>{
        if(process.browser){
            const results = sessionStorage.getItem("Options");
            var obj = JSON.parse(results);
            var key = obj.protein+obj.carb+obj.vege;
            setRecipe(key);
        }
    }, []);

    return <div>
        {recipe !== null && data[recipe]}
    </div>
}