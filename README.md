/* *{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
body{
    font-family: sans-serif;
    background: hsl(36, 100%, 99%);
}
.cover{
    width: 100%;
    height: 128vh;
    background: rgba(108, 108, 151, 0.347);
    position: absolute;
    top: 0;
    display: none;
}
nav{
    padding: 30px 7% 0 10%;
    height: 80px;
    width: 100%;
}
.logo{
    width: 40px;
    margin-top: 2%;
}
nav ul{
    float: right;
    margin-right: 20px;
}
nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 20px;
}
nav ul li a{
    color: hsl(236, 13%, 42%);
    font-size: 1rem;
    transition: .3s;
}
#menu-bar{
    float: right;
    margin-top: 4%;
    display: none;
    transition: .1s;
}
main{
    display: flex;
    padding: 30px 10%;
    justify-content: space-between;
    margin-top: 3%;
}
.middle-left{
    display: flex;
    flex-direction: column;


}
.image-container{
    display: flex;
    width: 52vw;
} 
.image{
    display: flex;
    object-fit: cover;
    object-position: center;
    min-width: 100%;
    height: auto;
}
.middleInfo{
    display: flex;
    padding-top: 5%;
    justify-content: space-between;
}
h1{
    line-height: 50px;
    font-size: 52px;
    width: 75%;
}
.middleInfoRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
}
.middleInfoRight p{
    display: block;
    height: auto;
    float: right;
    width: 85%;
    line-height: 25px;
    margin-bottom: 28px;
}
button{
    width: 12vw;
    height: auto;
    padding: 3% 0 3% 0;
    text-transform: uppercase;
    color: hsl(36, 100%, 99%);
    background-color: hsl(5, 85%, 63%);
    border: none;
    letter-spacing: 4px;
    cursor: pointer;
    transition-duration: 1s;
}
button:hover{
    background-color: hsl(240, 100%, 5%);
}
.middle-right{
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: hsl(240, 100%, 5%);
    justify-content: space-between;
    padding: 20px;
    width: 48vw;
}
.h2One{
    color: hsl(35, 77%, 62%);
    font-size: 2.3rem;
    font-weight: 600;
}
h3{
    color: hsl(36, 100%, 99%);
    margin-bottom: 10px;
    cursor: pointer;
    transition-duration: 1s;
}
h3:hover{
    color: hsl(35, 77%, 62%);
}
.middle-right p{
    color: hsl(233, 8%, 79%);
    margin-bottom: 30px;
    font-size: 16px;
}
.middle-right-one{
    border-bottom: 1px solid hsl(230, 4%, 68%);
}
footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 10%;
    gap: 30px;
}
.footerItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
.footerDetails{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.footerItem img{
    width: 7vw;
    height: 18vh;
}
.footerItem h2{
    font-size: 1.8rem;
    color: hsl(233, 8%, 79%);
}
.footerItem h5{
    color: hsl(240, 100%, 5%);
    font-size: 1.2rem;
    cursor: pointer;
    transition-duration: 1s;
}
.footerItem h5:hover{
    color: hsl(5, 85%, 63%);
}
.footerItem p{
    line-height: 30px;
}
.footerDetails-para1{
    width: 80%;
}
.footerDetails-para3{
    
}
.attribution{
    font-size: 15px;
}

@media (max-width:510px){
    #footertwo{
        margin-top: -5vh;
    }
    #footerthree{
        margin-bottom: 12vh;
    }
}
@media (max-width:530px){
    #footertwo{
        margin-top: -5vh;
    }
    #footerthree{
        margin-bottom: 12vh;
    }
}
@media (max-width:545px){
    #footertwo{
        margin-top: -5vh;
    }
    #footerthree{
        margin-bottom: 12vh;
    }
}
@media (max-width:552px){
    #footertwo{
        margin-top: -5vh;
    }
    #footerthree{
        margin-bottom: 8vh;
    }
}
@media (max-width:601px){
    #footerthree{
        margin-bottom: 7vh;
    }
}
@media (max-width:645px){
    #footertwo{
        margin-top: -5vh;
    }
    #footerthree{
        margin-bottom: 8vh;
    }
}

@media (max-width:714px){
    #footerone{
        margin-top: 4vh;
    }
}
@media (max-width:850px){
    #footerthree {
        margin-top: 4vh;
    }
}
@media (max-width:800px){
    #footerthree {
        margin-top: 4vh;
    }
}
@media (max-width:980px){
    #footerthree img{
        margin-top: -13vh;
    }
}

@media (max-width:1020px){
    #footerone{
        width: 52vw;
    }
    .footerItem{
        display: block;
    }
    .footerImgContainer img{
        width: 20vw;
    }
    #footerone,#footertwo,#footerthree{
        width: 42vw;
    }
    #footerthree img{
        margin-top: 3vh;
    }

}

@media (max-width:952px){
    nav ul li a{
        font-size: 16px;
    }
    #menu-bar{
        display: block;
        width: 5vw;
        height: auto;
        z-index: 100;
    }
    ul{
        display: none;
    }
    .checked{
        display: block;
    }
    .footerItem{
        display: block;
    }
    #footerthree img{
        margin-top: 0vh;
    }

}
@media (max-width:858px){
    .checkbtn{
        display: block;
    }
    ul{
        position: absolute;
        width: 40%;
        height: 180vh;
        background: hsl(36, 100%, 99%);
        top: 80px;
        right: -20px; 
        text-align: center;
        transition: all .5s;
    }
    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 1px;

    }
    nav ul li a{
        color: hsl(240, 100%, 5%);
    }
    .checked{
        display: block;
        transition-duration: 1s;
    }
    body{
        display: block;
    }
}
@media (max-width:375px){
    
}


 */