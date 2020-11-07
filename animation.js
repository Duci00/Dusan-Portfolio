// Page Aniamtions

const logoText = document.querySelector("#logotxt");
const logoBox = document.querySelector(".logo");
const mainText = document.querySelector(".maintext");
const subText = document.querySelector(".subtext");
const buttonBox = document.querySelector(".buttoncont");
const navLinks = document.querySelector(".nav-links");
const brownBox = document.querySelector(".brown");
const yellowBox = document.querySelector(".yellow");
const redBox = document.querySelector(".red");
const hederImage = document.querySelector(".bgimages img");
const burger = document.querySelector(".burger");

// time line
const timeL = new TimelineMax();
let sirina = window.innerWidth;
if (sirina > 425) {
  timeL
    .fromTo(
      redBox,
      0.4,
      { opacity: "0", right: "100px" },
      { opacity: ".4", right: "0px", ease: Power2.ease }
    )
    .fromTo(
      hederImage,
      0.5,
      { opacity: "0", right: "9%" },
      { opacity: "1", right: "5%", ease: Power2.ease },
      "-=.4"
    )
    .fromTo(
      brownBox,
      0.4,
      { opacity: "0", left: "-400px" },
      { opacity: "1", left: "0", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      yellowBox,
      0.3,
      { opacity: "0", right: "60px" },
      { opacity: ".3", right: "0", ease: Power2.ease },
      "-=.2"
    )
    .fromTo(
      mainText,
      0.7,
      { opacity: "0", marginLeft: "-60px" },
      { opacity: "1", marginLeft: "7", ease: Power2.ease },
      "-=.2"
    )
    .fromTo(
      subText,
      0.5,
      { opacity: "0", marginLeft: "-50px" },
      { opacity: "1", marginLeft: "15", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      buttonBox,
      0.5,
      { opacity: "0", paddingTop: "-30px" },
      { opacity: "1", paddingTop: "0px", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      logoBox,
      0.3,
      { opacity: "0", marginTop: "-20px" },
      {
        opacity: "1",
        marginTop: "0",
        ease: Power2.ease,
      },
      "-=.5"
    )
    .fromTo(
      logoText,
      0.4,
      { opacity: "0", marginLeft: "-100px" },
      {
        opacity: "1",
        marginLeft: "20px",
        ease: Power2.ease,
      },
      "-=.3"
    )
    .fromTo(
      navLinks,
      0.3,
      { opacity: "0", marginTop: "-30px" },
      {
        opacity: "1",
        marginTop: "0px",
        ease: Power2.ease,
      },
      "-=.4"
    )
    .fromTo(
      burger,
      0.3,
      { opacity: "0", marginTop: "-30px" },
      {
        opacity: "1",
        marginTop: "0px",
        ease: Power2.ease,
      }
    );
} else {
  timeL
    .fromTo(
      redBox,
      0.3,
      { opacity: "0", right: "60%" },
      { opacity: ".4", right: "20%", ease: Power2.ease }
    )
    .fromTo(
      hederImage,
      0.5,
      { opacity: "0", right: "8%" },
      { opacity: "1", right: "5%", ease: Power2.ease },
      "-=.4"
    )
    .fromTo(
      brownBox,
      0.4,
      { opacity: "0", left: "-400px" },
      { opacity: "1", left: "0", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      yellowBox,
      0.3,
      { opacity: "0", right: "60px" },
      { opacity: ".3", right: "0", ease: Power2.ease },
      "-=.2"
    )
    .fromTo(
      mainText,
      0.7,
      { opacity: "0", marginLeft: "-60px" },
      { opacity: "1", marginLeft: "7", ease: Power2.ease },
      "-=.2"
    )
    .fromTo(
      subText,
      0.5,
      { opacity: "0", marginLeft: "-50px" },
      { opacity: "1", marginLeft: "15", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      buttonBox,
      0.5,
      { opacity: "0", paddingTop: "-30px" },
      { opacity: "1", paddingTop: "0px", ease: Power2.ease },
      "-=.3"
    )
    .fromTo(
      logoBox,
      0.3,
      { opacity: "0", marginTop: "-20px" },
      {
        opacity: "1",
        marginTop: "0",
        ease: Power2.ease,
      },
      "-=.5"
    )
    .fromTo(
      logoText,
      0.4,
      { opacity: "0", marginLeft: "-100px" },
      {
        opacity: "1",
        marginLeft: "20px",
        ease: Power2.ease,
      },
      "-=.3"
    )
    .fromTo(
      burger,
      0.3,
      { opacity: "0", marginTop: "-30px" },
      {
        opacity: "1",
        marginTop: "0px",
        ease: Power2.ease,
      }
    );
}
