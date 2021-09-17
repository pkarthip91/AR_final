// Main JS 

$(document).ready(function () {
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

/**
 * Determine the mobile operating system
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        const modelViewer = document.getElementById("imgSize");
        modelViewer.animationName = "pos0_s100"
        // /** IOS Devices*/
        var indexIos = 0;
        var images = [
            './img/slide1.usdz',
            './img/slide1.usdz',
        ];
        var previousIndex = function (indexIos, length) {
            if (indexIos <= 0) {
                return length - 1; // cycle backwards to the last image
            } else {
                return indexIos - 1;
            }
        }
        var nextindexIos = function (indexIos, length) {
            return ((indexAndroid + 1) % length)
        };
        $('.buttonAction').click(function () {
            indexIos = nextindexIos(indexIos, images.length);
            $('#imageswap').attr('ios-src', images[indexIos]);
        });
        /** initialize the image on load to the first one */
        $('#imageswap').attr('ios-src', images[indexIos])

        return "iOS";
    }

    return "unknown";
}
/** Andriod Devices*/
var indexAndroid = 0;
var images = [
    './img/Thule_Box_1_1.glb',
    './img/Thule_Box_1_2.glb',
];
var nextindexAndroid = function (indexAndroid, length) {
    return ((indexAndroid + 1) % length)
};
$('.buttonAction').click(function () {
    indexAndroid = nextindexAndroid(indexAndroid, images.length);
    $('#imageswap').attr('src', images[indexAndroid]);
});
/** initialize the image on load to the first one */
$('#imageswap').attr('src', images[indexAndroid])
// Model change onclick button
var images = [
    './img/Thule_Box_1_1.glb',
    './img/Thule_Box_1_2.glb',
];
// Next  Animation button
function nextAnimation() {
    // modelViewer.animationName = "Step4"
    images.src = "./img/Thule_Box_1_2.glb";
}


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


