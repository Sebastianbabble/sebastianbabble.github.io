const handleClick = () =>{
    console.log("hey")
    AOS.init();
}
const doSomething = () =>{
    // alert(did);
}
const htc = document.getElementById("htc");
const drop = document.getElementById("dropper");
const aboutimg = document.getElementById("aboutimg")
const hobbiesimg = document.getElementById("hobbiesimg")
const projectimg = document.getElementById("projectsimg")
const about = document.getElementById("aboutid");
const projects = document.getElementById("projectid")
const hobbies = document.getElementById("hobbieid")
const logo = document.getElementById("seLogo");
const navc = document.getElementById("navC");

const skate = document.getElementById("skate");
const hike = document.getElementById("hike");
const music = document.getElementById("music");
const nfts = document.getElementById("nfts");

const skateimg = document.getElementById("skateimg");
const hikingimg = document.getElementById("hikingimg");
const musicimg = document.getElementById("musicimg");
const nftimg = document.getElementById("nftimg");

const hikeInfo = document.getElementById("hikeInfo")
const skateInfo = document.getElementById("skateInfo")
const musicInfo = document.getElementById("musicInfo")
const nftsInfo = document.getElementById("nftsInfo")

const skateline = document.getElementById("skateline")
const hikeline = document.getElementById("hikeline")
const musicline = document.getElementById("musicline")
const nftline = document.getElementById("nftline");

const mywallet = document.getElementById("mywallet");
const mysounds = document.getElementById("mysounds");

mysounds.addEventListener("mouseenter", () =>{
    mysounds.style.backgroundColor = '#ff8e3c'
})

mysounds.addEventListener("mouseleave", () =>{
    mysounds.style.backgroundColor = "";
})

mywallet.addEventListener("mouseenter", () =>{
    mywallet.style.backgroundColor = '#ff8e3c'
})
mywallet.addEventListener("mouseleave", () =>{
    mywallet.style.backgroundColor = "";
})
skate.addEventListener("click",() =>{
    htc.style.opacity = 0;
    musicimg.style.opacity = 0;
    skateimg.style.opacity = 1;
    hikingimg.style.opacity = 0;
    nftimg.style.opacity = 0;

    hikeInfo.style.opacity = 0;
    skateInfo.style.opacity = 1;
    musicInfo.style.opacity = 0;
    nftsInfo.style.opacity = 0;
    
    // skateline.style.opacity =1;
    // hikeline.style.opacity = 0;
    // musicline.style.opacity = 0;
    // nftline.style.opacity = 0;
})
// skate.addEventListener("mouseleave", () =>{
//     skateimg.style.opacity ="0"
// })
hike.addEventListener("click",() =>{
    htc.style.opacity = 0;

    musicimg.style.opacity = 0;
    skateimg.style.opacity = 0;
    hikingimg.style.opacity = 1;
    nftimg.style.opacity = 0;

    hikeInfo.style.opacity = 1;
    skateInfo.style.opacity = 0;
    musicInfo.style.opacity = 0;
    nftsInfo.style.opacity = 0;

    // skateline.style.opacity =0 ;
    // hikeline.style.opacity = 1;
    // musicline.style.opacity = 0;
    // nftline.style.opacity = 0;
})
// hike.addEventListener("mouseleave", () =>{
//     hikeimg.style.opacity ="0"
// })
music.addEventListener("click",() =>{
    htc.style.opacity = 0;

    musicimg.style.opacity = 1;
    skateimg.style.opacity = 0;
    hikingimg.style.opacity = 0;
    nftimg.style.opacity = 0;

    hikeInfo.style.opacity = 0;
    skateInfo.style.opacity = 0;
    musicInfo.style.opacity = 1;
    nftsInfo.style.opacity = 0;
    
    // skateline.style.opacity = 0;
    // hikeline.style.opacity = 0;
    // musicline.style.opacity = 1;
    // nftline.style.opacity = 0;
})
// music.addEventListener("mouseleave", () =>{
//     musicimg.style.opacity ="0"
// })
nfts.addEventListener("click",() =>{
    htc.style.opacity = 0;

    musicimg.style.opacity = 0;
    skateimg.style.opacity = 0;
    hikingimg.style.opacity = 0;
    nftimg.style.opacity = 1;

    hikeInfo.style.opacity = 0;
    skateInfo.style.opacity = 0;
    musicInfo.style.opacity = 0;
    nftsInfo.style.opacity = 1;

    // skateline.style.opacity = 0;
    // hikeline.style.opacity = 0;
    // musicline.style.opacity = 0;
    // nftline.style.opacity = 1;
})
// nfts.addEventListener("mouseleave", () =>{
//     nftimg.style.opacity ="0"
// })

logo.addEventListener("click", () =>{
   document.documentElement.scrollTop = 0;
})

about.addEventListener("mouseenter", () =>{
    aboutimg.style.opacity = "1"
})
about.addEventListener("mouseleave", () =>{
    aboutimg.style.opacity ="0"
})

projects.addEventListener("mouseenter", () =>{
    projectimg.style.opacity = "1"

})
projects.addEventListener("mouseleave", () =>{
    projectimg.style.opacity ="0"

})
hobbies.addEventListener("mouseenter", () =>{
    hobbiesimg.style.opacity = "1"
})
hobbies.addEventListener("mouseleave", () =>{
    hobbiesimg.style.opacity = "0"

})
const handleDropDown =() =>{
    if(drop.style.height ==="100%"){
        drop.style.height = "0";
        // navc.style.display = "flex"
    }
    else{
        drop.style.height = "100%";
        // navc.styles.display = "none"

    }
        
}
document.getElementById("hammer").addEventListener("click", () => handleDropDown())

