"use strict";
// Elements Selecting DOM Elements
const playerRating = document.querySelector(".player-rating");
const playerName = document.querySelector(".player-name");
const playerPosition = document.querySelector(".player-position");
const playerStatPac = document.querySelector(".player-stat-pac");
const playerStatSho = document.querySelector(".player-stat-sho");
const playerStatPas = document.querySelector(".player-stat-pas");
const playerStatDri = document.querySelector(".player-stat-dri");
const playerStatDef = document.querySelector(".player-stat-def");
const playerStatPhy = document.querySelector(".player-stat-phy");
const inputPlayerName = document.querySelector(".fut-player-name");
const inputPlayerRating = document.querySelector(".fut-player-rating");
const inputPlayerPosition = document.querySelector(".fut-player-position");
const inputPac = document.querySelector(".input-pac");
const inputSho = document.querySelector(".input-sho");
const inputPas = document.querySelector(".input-pas");
const inputDri = document.querySelector(".input-dri");
const inputDef = document.querySelector(".input-def");
const inputPhy = document.querySelector(".input-phy");
const btnSubmit = document.querySelector(".submit");

// Update UI while typing in input TOP
inputPlayerName.addEventListener("keyup", function (e) {
  playerName.innerHTML = e.target.value;
});
inputPlayerRating.addEventListener("keyup", function (e) {
  playerRating.innerHTML = e.target.value;
});
inputPlayerPosition.addEventListener("keyup", function (e) {
  playerPosition.innerHTML = e.target.value;
});

// Update UI while typing in input BOTTOM
inputPac.addEventListener("keyup", function (e) {
  playerStatPac.innerHTML = e.target.value;
});
inputSho.addEventListener("keyup", function (e) {
  playerStatSho.innerHTML = e.target.value;
});
inputPas.addEventListener("keyup", function (e) {
  playerStatPas.innerHTML = e.target.value;
});
inputDri.addEventListener("keyup", function (e) {
  playerStatDri.innerHTML = e.target.value;
});
inputDef.addEventListener("keyup", function (e) {
  playerStatDef.innerHTML = e.target.value;
});
inputPhy.addEventListener("keyup", function (e) {
  playerStatPhy.innerHTML = e.target.value;
});

// Adding flag to fut card dynamic
(function () {
  const selFlags = document.getElementById("flags");
  const displayFlags = document.getElementById("display-flag");

  function getSelectedOption(selFlags) {
    let opt;
    for (let i = 0, len = selFlags.options.length; i < len; i++) {
      opt = selFlags.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    return opt.value;
  }

  const removeExistingClass = function (selFlags) {
    let opt;
    for (let i = 0, len = selFlags.options.length; i < len; i++) {
      opt = selFlags.options[i].value;
      if (displayFlags.classList.contains(`${opt}`)) {
        displayFlags.classList.remove(`${opt}`);
      }
    }
  };

  document.getElementById("flags").onchange = function () {
    const opt = getSelectedOption(selFlags);
    removeExistingClass(selFlags);
    displayFlags.classList.add(`${opt}`);
  };
})();

// Logo selection functionality
(function () {
  const selLogos = document.getElementById("logos");
  const displayLogos = document.getElementById("club-logo");

  function getSelectedOption(selLogos) {
    let opt;
    for (let i = 0, len = selLogos.options.length; i < len; i++) {
      opt = selLogos.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    return opt.value;
  }

  selLogos.onchange = function () {
    const opt = getSelectedOption(selLogos);
    displayLogos.src = `${opt}`;
  };
})();

// Add fut card funtionality
(function () {
  const selCardList = document.getElementById("fut-card");
  const displayFutCard = document.getElementById("display-fut-card");

  function getSelectedOption(selCardList) {
    let opt;
    for (let i = 0, len = selCardList.options.length; i < len; i++) {
      opt = selCardList.options[i];
      if (opt.selected === true) {
        break;
      }
    }
    return opt.value;
  }

  selCardList.onchange = function () {
    const opt = getSelectedOption(selCardList);
    displayFutCard.style.backgroundImage = `url('${opt}')`;
  };
})();
// // Add Upload image funtionality
// const imgPreview = document.getElementById("img-preview");
// const fileUpload = document.getElementById("file-upload");

// fileUpload.addEventListener("click", (event) => {
//   const file = event.target.files[0];
//   console.log(file);
// });

// const cloudinary = require("cloudinary");
// // import { v2 as cloudinary } from "cloudinary";

// // const app = express();
// cloudinary.config({
//   cloud_name: "dielco-vof",
//   api_key: "384464333461684",
//   api_secret: "rDT-wamBX1JkcZ8uJhozaHmoNQU",
// });

// // const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dielco-vof/upload";
// // const CLOUDINARY_UPLOAD_PRESET = "sv8uykh5";
// const imgPreview = document.getElementById("img-preview");
// const fileUpload = document.getElementById("file-upload");

// fileUpload.addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   // const formData = new FormData();
//   // formData.append("file", file);
//   // formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

//   // axios({
//   //   url: CLOUDINARY_URL,
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/x-www-form-urlencoded",
//   //   },
//   //   data: formData,
//   //   background_removal: "cloudinary_ai",
//   // })

//   app.get("/", (res) => {
//     uploader
//       .upload(`${file}`, {
//         background_removal: "cloudinary_ai",
//       })
//       .then((res) => {
//         console.log(res);
//         imgPreview.src = res.data.secure_url;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
//   // .then((res) => {
//   //   console.log(res);
//   //   imgPreview.src = res.data.secure_url;
//   // })
//   // .catch((err) => {
//   //   console.log(err);
//   // });
// });
