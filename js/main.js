// Main JS 

$(document).ready(function () {

     // Select active color grid
     $(".equel-grid").click(function () {
        // Select all list items
        var listItems = $(".equel-grid");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-grid");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-grid");
    });

    // Select active color color button
    $(".color-btn").click(function () {
        // Select all list items
        var listItems = $(".color-btn");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-color");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-color");
    });

    // Select active color size button
    $(".size-btn").click(function () {
        // Select all list items
        var listItems = $(".size-btn");
        // Remove 'active' tag for all list items
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active-color");
        }
        // Add 'active' tag for currently selected item
        this.classList.add("active-color");
    });
    
    // AR close button 
    $('#close-model').click(function () {
        $('#imgSize').hide("fast");
        $('.ar-visible').addClass("d-none")
        document.getElementById("imgSize").removeAttribute("src");
         // When click proceed button show loading
         document.getElementsByClassName("loader-new")[0].style.display = "block";;
         document.getElementById("overlayer").style.display = "block";
        // Hide loading setimeout
        setTimeout(function() { 
         document.getElementsByClassName("loader-new")[0].style.display = "none";;  
         document.getElementById("overlayer").style.display = "none";
         }, 4000);
        // once close AR button asign this pages
        window.location.assign("https://pkarthip91.github.io/AR_Popup/");
        location.reload(true);
      });
      //Toggle fullscree
      $(".chat-bot-icon").click(function (e) {
        $(this).children('.animate-img').toggleClass('hide');
        $(this).children('span').toggleClass('hide');
        $(this).children('svg').toggleClass('animate');
        $('.chat-screen').toggleClass('show-chat');
      });

         //model show
      $("#vectorGlb").click(function () {
        $('#modelPopup').modal('show')
      });

       //AR Proceed button click event triggered
      $("#ar-button").click(function (e) {
        document.getElementById("imgSize").setAttribute("src", "./img/glb/613500_Thule_Vector_Alpine_HP_V1_Pos0.glb");
        $("#hide-btn-main").css("display", "block");
        $("#hide-btn-main").css("opacity", "1");
        $("#imgSize").css("opacity", "1");
        $(".rounded-circle-btn").css("display", "block");
        $('.ar-visible').removeClass("d-none")
        document.getElementById("imgSize").style.height = "42px"
      });
        if (window.location.pathname == "./vector.html") {
          $("#hide-btn-main").css("display", "block");
          $("#imgSize").css("opactiy", "0");
          document.getElementById("imgSize").removeAttribute("src");
          window.location.reload(true)
        } else {
          $("#hide-btn-main").css("display", "none");
          $("#imgSize").css("height", "42px");
          document.getElementById("imgSize").removeAttribute("src");
        }
});

/**
 * Toogle section AR Inside button
 */
$('#toggle').click(function (event) {
    event.stopPropagation();
    $(this).toggleClass('on');
    $('#menu').slideToggle().addClass('open');
});
$('#menu').removeClass('open');

$(document).on("click", function () {
    $("#menu").slideUp();
});


const modelViewerImage = document.querySelector("model-viewer#imgSize");
var animationListValues = "pos45";
var ios = false;
function checkIos() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    if (iosPlatforms.indexOf(platform) !== -1) {
        ios = true;
    }
}
checkIos()

var animationListValues = "pos45";
if (ios == true) {
    animationListValues = "pos45";
}

// Sedan car Animation
function sedanAnimation() {
    animationListValues = "pos45"
    if (ios == true) {
        animationListValues = "pos45"
        modelViewerImage.animationName = animationListValues
    }
}

function hatchback() {
    animationListValues = "pos45"
    if (ios == true) {
        animationListValues = "pos45"
        modelViewerImage.animationName = animationListValues
    }
}

function estateAnimation() {
    animationListValues = "pos50"
    if (ios == true) {
        animationListValues = "pos50"
        modelViewerImage.animationName = animationListValues
    }
}

function fullSuvAnimation() {
    animationListValues = "pos65"
    if (ios == true) {
        animationListValues = "pos65"
        modelViewerImage.animationName = animationListValues
    }
}

function midSizeSuvAnimation() {
    animationListValues = "pos60"
    if (ios == true) {
        animationListValues = "pos60"
        modelViewerImage.animationName = animationListValues
        // modelViewerImage.setAttribute("camera-orbit", "0deg 0deg 3m")
    }
}

function withoutcarAnimation() {
    animationListValues = "pos1"
    if (ios == true) {
        modelViewerImage.animationName = animationListValues
    }
}




// window.onload = () => {
//     alert(modelViewerImage.animationName)
// };

// // Lock Button animation 
// function lockBtn() {

//    // alert(modelViewerImage.animationName)
// }

// Animation List 
var animationList =
    [
        "pos40",
        "pos45",
        "pos50",
        "pos60",
        "pos65",
        "pos70",
        "pos75",
        "pos80",
        "pos85",
        "pos90",
        "pos95",
        "pos100",
    ]
// var index = 0;
// var item = animationList[index];
var previous = document.getElementById('previousAnimationn');
var next = document.getElementById('nextAnimation');

// Click Next Animation Item 
next.addEventListener('click', function () {
    if (next.disabled == false) {
        displayItem(modelViewer.animationName = animationList[animationList.indexOf(animationListValues) + 1]);
        console.log(modelViewer.animationName)
        animationListValues = animationList[animationList.indexOf(animationListValues) + 1];
        displayItem(); // Animation List Displayed
    }
});
// Click previous Animation Item
previous.addEventListener('click', function () {
    if (previous.disabled == false) {
        displayItem(modelViewer.animationName = animationList[animationList.indexOf(animationListValues) - 1]);
        console.log(modelViewer.animationName)
        animationListValues = animationList[animationList.indexOf(animationListValues) - 1];
        displayItem(); // Animation List Displayed
    }
});
// Disbled last Previous Item
function displayItem() {
    if (ios == false) {
        previous.disabled = animationList.indexOf(animationListValues) <= 1;
    }
    next.disabled = animationList.indexOf(animationListValues) >= animationList.length - 1;
}

// Proceed Button detect
$("#ar-button").click(function () {
    if (ios == false) {
        modelViewerImage.animationName = animationListValues
        $('body').removeClass("modal-open").addClass('overflow-auto');
        $('.modal').removeClass('show')
        $('.modal-backdrop').remove()
    }
    if (ios == true) {
        $('#exampleModal').modal('hide')
    }
    displayItem();
    // Call animation up and down 

    // When click proceed button show loading
    document.getElementsByClassName("loader-new")[0].style.display = "block";;
    document.getElementById("overlayer").style.display = "block";
    // Hide loading setimeout
    setTimeout(function () {
        document.getElementsByClassName("loader-new")[0].style.display = "none";;
        document.getElementById("overlayer").style.display = "none";
    }, 4000);
});

// AR Status updated the session-started change the animation POS 0
document.querySelector("#imgSize").addEventListener('ar-status', (event) => {
    if (event.detail.status === 'session-started') {
        modelViewerImage.animationName = "None"
        //alert(modelViewerImage.animationName)
    }

    // AR Status updated the not-presenting change the Model

    // if(event.detail.status === 'not-presenting'){
    //     // document.getElementById("imgSize").setAttribute("src", "./img/glb/613500_Thule_Vector_Alpine_HP_V1.glb");
    //     modelViewerImage.animationName = "pos0"
    //     alert(modelViewerImage.animationName)
    //  }

    // AR Status updated the object placed change the model
    if (event.detail.status === 'object-placed') {
        //document.getElementById("imgSize").setAttribute("src", "./img/glb/613500_Thule_Vector_Alpine_HP_V1.glb");
        modelViewerImage.animationName = animationListValues
        // alert(modelViewerImage.animationName)
    }
});

const modelViewer = document.getElementById("imgSize");
var animationName = modelViewer.animationName;


// Change GLB
const modelChangeGlb = document.querySelector("model-viewer#imgSize");
function sizeAlpine() {
    modelChangeGlb.src = "img/glb/613500_Thule_Vector_Alpine_HP_V1.glb";
    console.log(modelChangeGlb.src)
}

// function sizeXXL() {
//     modelChangeGlb.src = "img/glb/613500_Thule_Vector_Alpine_hp_V1.glb";
//     console.log(modelChangeGlb.src)
// }

// function sizeM() {
//     modelChangeGlb.src = "img/glb/613500_Thule_Vector_Alpine_hp_V1.glb";
//     console.log(modelChangeGlb.src)
// }

// function sizeXL() {
//     modelChangeGlb.src = "img/glb/629800_Thule_Motion-XT_XL_Low-V1.glb";
// }

// function sizeSportsXXL() {
//     modelViewer.src = "img/glb/629800_Thule_Motion-XT_XL_Low-V1.glb";
// }
// function sizeSportL() {
//     modelViewer.src = "img/glb/629800_Thule_Motion-XT_XL_Low-V1.glb";
// }

// function alpineXXL() {
//     modelChangeGlb.src = "img/glb/613500_Thule_Vector_Alpine_hp_V1.glb";
// }

// function onCarGlb() {
//     modelViewer.src = "img/glb/629500_Thule_Motion_XT_Alpine_Low_v20.glb";
// }
// function onTableGlb() {
//     modelViewer.src = "img/glb/629500_Thule_Motion_XT_Alpine_Low_v20.glb";
// }

// Scale fixed and lock & unlock 
function dyanmicChangeAttr() {
    var arScale = document.querySelector("#imgSize");
    if ($('#imgSize').attr('ar-scale') == 'fixed') {
        arScale.setAttribute("ar-scale", "auto");
        $("#dynamicChange").attr("value", "UnLock Scale")
        // do this
    } else {
        arScale.setAttribute("ar-scale", "fixed");
        $("#dynamicChange").attr("value", "Lock Scale")
        // do that
    }
    // console.log(arScale)
}
// Zoom  disable 
function disableCamera() {
    var camera = document.querySelector("#animationSclae");
    camera.setAttribute("disable-zoom", "auto");
    $("#enableZoom").addClass("btn-success")
    $("#disableZoom").removeClass("btn-success")
}

// Zoom  enable 
function enableCamera() {
    var cameratwo = document.querySelector("#animationSclae");
    cameratwo.removeAttribute("disable-zoom");
    $("#disableZoom").addClass("btn-success")
    $("#enableZoom").removeClass("btn-success")
}

//Defalut Fixed 
//this way you do not need to do a javascript query every time you access the value of the checkbox
// var arScale = document.querySelector("#sceneViewer");
// document.getElementById("checkbox1").addEventListener("change", function () {
//     if ($('#sceneViewer').attr('ar-scale') == 'fixed') {
//         arScale.setAttribute("ar-scale", "auto");
//         // $("#dynamicChange").attr("value", "UnLock Scale")
//     } else {
//         arScale.setAttribute("ar-scale", "fixed");
//         // $("#dynamicChange").attr("value", "Lock Scale")
//     }
// });
//transgro value change x,y,z
function inceressValue() {
    const modelViewerTransform = document.querySelector("model-viewer#transform");
    const x = document.querySelector('#x');
    const y = document.querySelector('#y');
    const z = document.querySelector('#z');
    var amount = 2;
    modelViewerTransform.scale.x = modelViewerTransform.scale.x * amount;
    modelViewerTransform.scale.y = modelViewerTransform.scale.y * amount;
    modelViewerTransform.scale.z = modelViewerTransform.scale.y * amount;
    console.log(modelViewerTransform.scale.x * amount)
    console.log(modelViewerTransform.scale.y * amount)
    console.log(modelViewerTransform.scale.z * amount)
}
// AR Scale LockButton
function onChangeScaleLock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "auto") {
        arScale.setAttribute("ar-scale", "fixed");
        $('#arButton1').addClass('btn-success')
        $('#arButton').removeClass('btn-success')
    }
}
// AR Scale Unlock Button
function onChangeScaleUnlock() {
    var arScale = document.querySelector("#sceneViewer");
    if (arScale == "ar-scale", "fixed") {
        arScale.setAttribute("ar-scale", "auto");
        $('#arButton').addClass('btn-success')
        $('#arButton1').removeClass('btn-success')
    }
}

// Mobile button show toggle menu
$('#show-toggle').click(function () {
    $('.hide-mobile').slideToggle("slow");
});

 // Color Change texture
 const modelViewerTexture = document.querySelector("model-viewer#imgSize");
 modelViewerTexture.addEventListener("load", (ev) => {
   let material = modelViewerTexture.model.materials[0];
   let applyPBRTexture = (channel, event) => {
     material.pbrMetallicRoughness[channel].texture.source.setURI(event.target.value);
   }
   document.querySelector('#colorChangeVariant').addEventListener('click', (event) => {
     applyPBRTexture('baseColorTexture', event);
   });
 })
 // // Default Change orientation Change 
 const modelViewerTransform = document.querySelector("model-viewer#imgSize");
 const roll = document.querySelector('#roll');
 const pitch = document.querySelector('#pitch');
 const yaw = document.querySelector('#yaw');
 const frame = document.querySelector('#frame');

 frame.addEventListener('click', function () {
   modelViewerTransform.updateFraming();
 });

 const updateOrientation = () => {
   modelViewerTransform.orientation = `${roll.value = "0"}deg ${pitch.value = "0"}deg ${yaw.value = "90"}deg `;
 };

 roll.addEventListener('input', () => {
   updateOrientation();
 });
 pitch.addEventListener('input', () => {
   updateOrientation();
 });
 yaw.addEventListener('input', () => {
   updateOrientation();
 });

 $("#ar-button").click(function (e) {
   updateOrientation();
 });
