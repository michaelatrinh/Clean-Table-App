import {useRouter} from 'next/router';
import styled from 'styled-components';
import React, {useEffect, useState} from 'react';

import Button from '../../comps/GenerateRecipeButton';

var options = {
    protiens:null,
    carbohydrates:null,
    vegetables:null,
};

var buttonimages = {
    option1:"",
    option2:"",
    option3:"",
}

const Cont = styled.div`
    &>div{
        margin:10px;
    }
`;

export default function Options(){

const router = useRouter();
const {type} = router.query;

const [end, setEnd] = useState(false);
const [chosen, setChosen] = useState(0);

if (type === "protiens"){
    buttonimages.option1 =  "Beef"; //how to import comps??
    buttonimages.option2 =  "Chicken";
    buttonimages.option3 =  "Tofu";
}

if (type === "carbohydrates"){
    buttonimages.option1 =  "Pasta";
    buttonimages.option2 =  "Rice";
    buttonimages.option3 =  "Potato";
}

if (type === "vegetables"){
    buttonimages.option1 =  "Onion";
    buttonimages.option2 =  "Broccoli";
    buttonimages.option3 =  "Carrot";
}

useEffect(()=>{
    if(options[type]){
        if(options[type] === buttonimages.option1){
            setChosen(1);
        }
        if(options[type] === buttonimages.option2){
            setChosen(2);
        }
        if(options[type] === buttonimages.option3){
            setChosen(3);
        }
    } else {
        setChosen(0);
    }
}, [router.query]);

const HandleClick = (text) =>{
    //alert(text);
    if(buttonimages.option1 === text){
        setChosen(1);
    }

    if(buttonimages.option2 === text){
        setChosen(2);
    }

    if(buttonimages.option3 === text){
        setChosen(3                            );
    }

    if(type === "protiens"){       
        options.protiens = text;
    }

    if(type === "carbohydrates"){
        options.carbohydrates = text;
    }

    if(type === "vegetables"){
        options.vegetables = text;
    }

    if(
        options.protiens !== null
        && options.carbohydrates !== null
        && options.vegetables !== null
    ) {
        setEnd(true);
    }

}

const HandleEnd = () => {
    console.log(options);
  
    sessionStorage.setItem("options", JSON.stringify(options));


}
    //return <Cont>
    //    <div>
    //        <Button bgcolor="#FAD" text="go to fruits" onClick={()=>router.push("/options/fruits")} />
    //       <Button bgcolor="#DAD" text="go to coins" onClick={()=>router.push("/options/coins")} />
    //        <Button bgcolor="#ADD" text="go to colors" onClick={()=>router.push("/options/colors")} />
    //    </div>
    //    <div>
    //        <Button bgcolor={chosen === 1 ? "aqua" : "teal"} text={buttontexts.option1} onClick={()=>HandleClick(buttontexts.option1)} />
    //       <Button bgcolor={chosen === 2 ? "aqua" : "teal"} text={buttontexts.option2} onClick={()=>HandleClick(buttontexts.option2)}/>
    //        <Button bgcolor={chosen === 3 ? "aqua" : "teal"} text={buttontexts.option3} onClick={()=>HandleClick(buttontexts.option3)}/>
    //    </div>
    //   <div>
    //       {end === true && <Button bgcolor="blue" text="End" onClick={HandleEnd}/>}
    //    </div>
    //</Cont>
}