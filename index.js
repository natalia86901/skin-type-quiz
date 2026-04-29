const image = document.querySelector("#image");
const header = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");

buttonOne.addEventListener("click", oilySkin);
buttonTwo.addEventListener("click", drySkin);
buttonThree.addEventListener("click",normalSkin);

function oilySkin() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1516220362602-dba5272034e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lseSUyMHNraW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
    header.innerHTML = "Do you have acne?";
    buttonOne.innerHTML = "Yes";
    buttonTwo.innerHTML = "No";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", oilyToner);
    buttonTwo.addEventListener("click", toner);

    function oilyToner() {
        image.setAttribute("src", "https://images.unsplash.com/photo-1616986953793-2e6159b78580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
        header.innerHTML = "This alcohol-free face-mist spray is ideal for those with acne-prone skin, since it gently exfoliates and soothes";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
    }

    function toner() {
        image.setAttribute("src", "https://images.unsplash.com/photo-1626897844971-aef92643f056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
        header.innerHTML = "This spray is a daily toner used to help balance oily skin and minimize the appearance of large pores";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
    }
}

function drySkin() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1575779977884-f1069c45cbf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJ5JTIwc2tpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    header.innerHTML = "Is your skin sensitive?";
    buttonOne.innerHTML = "Yes";
    buttonTwo.innerHTML = "No";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", dryToner);
    buttonTwo.addEventListener("click",dryToner1);

    function dryToner() {
        image.setAttribute("src", "https://target.scene7.com/is/image/Target/GUEST_fc7c965d-8f6c-41fd-8620-0f420ece991d?wid=1200&hei=1200&fit=constrain&qlt=80&fmt=webp");
        header.innerHTML = "What It Is: This hydrating milk is no ordinary toner. It does more than replenish skin—it restores skin’s natural pH balance, removes post-cleanse hard water residue, and lifts those last remaining traces of the day’s makeup";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        }
        
        function dryToner1() {
            image.setAttribute("src", "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12698962-5225014852858866.jpg");
            header.innerHTML = "EltaMD's Skin Recovery Toner restores skin barrier damage, calms the skin and thwarts the risk of irritation";
            buttonOne.style = "display: none";
            buttonTwo.style = "display: none";
            buttonThree.style = "display: none";
            }
}

function normalSkin() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1509384473936-2d36ab6e198d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    header.innerHTML = "Is your skin sensitive?";
    buttonOne.innerHTML = "Yes";
    buttonTwo.innerHTML = "No";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", normalToner);
    buttonTwo.addEventListener("click",normalToner1);

    function normalToner() {
        image.setAttribute("src", "https://www.byrdie.com/thmb/HxcJwxqCwwOvjJvEi2wf2BK66FA=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/paula-c4c477cdcf834e059630a3204afbffc4.jpg");
        header.innerHTML = "Paula's Choice Skin Recovery Enriched Calming Toner is great for sensitive skin";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        }
        
        function normalToner1() {
            image.setAttribute("src", "https://target.scene7.com/is/image/Target/GUEST_556ad8c8-d126-4ef4-a056-034604a4e74e?wid=1200&hei=1200&fit=constrain&qlt=80&fmt=webp");
            header.innerHTML = "Developed with dermatologists, CeraVe Hydrating Toner hydrates and smooths the skin while removing any remaining makeup and impurities";
            buttonOne.style = "display: none";
            buttonTwo.style = "display: none";
            buttonThree.style = "display: none";
            }
}
