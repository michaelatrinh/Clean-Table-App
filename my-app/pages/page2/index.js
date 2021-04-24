import HeaderUI from '../comps/Header';
import StartTutorialButtonUI from '../comps/StartTutorialButton';
import styled from 'styled-components';

const Page2 =styled.div`

.MainPage2 {
    background-color: #E7F2F0,
    height: 812px,
    width: 375px,
  }
 
  .HeaderPage2 {
    position: absolute;
    width: 375px;
    height: 103px;
    left: 0px;
    top: 0px;
    align-items: center;
  }

  .Title{
    position: absolute;
    width: 270px;
    height: 33px;
    left: 47px;
    top: 164px;
    
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */
    
    text-align: center;
    
    color: #302B40;
  }

.Texts{
    position: absolute;
    width: 280px;
    height: 183px;
    left: 47px;
    top: 223px;
    
    font-family: Quicksand;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    
    color: #484848;
}

.StartButton{
    position: absolute;
    width: 234px;
    height: 55px;
    left: 73px;
    top: 716px;
}
 `;



export default function Page2(){
    return <div className="MainPage2">

        <div className="HeaderPage2"><HeaderUI></HeaderUI></div>

    <div className="Title"> 
    HOW TO GET STARTED 
    </div>


    <div className="Texts">
    People want to know the best method when it comes to managing perishability.

With this app you can now know how long food can actually last beyond best before date 
    </div>


    <div className="StartButton"><StartTutorialButtonUI></StartTutorialButtonUI></div>
</div>
} 