import FoodButtonTemplateStyle from '../styles/FoodButtonTemplate.module.css';

function FoodButtonTemplate(){
    return <div className={FoodButtonTemplateStyle.container}>
        <div className={FoodButtonTemplateStyle.background}>
            <div className={FoodButtonTemplateStyle.part1}>
                <img className={FoodButtonTemplateStyle.image1} src='chicken_drumstick.png'></img>
            </div>
            <div className={FoodButtonTemplateStyle.part2}>
                <p className={FoodButtonTemplateStyle.p1}>CHICKEN</p>
                <div className={FoodButtonTemplateStyle.greenBottom}></div>
            </div>
        </div>
    </div>
}

export default FoodButtonTemplate;