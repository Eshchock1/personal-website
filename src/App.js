import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles/App.css";
import Home from "./pages/home";
import About from "./pages/about";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./pages/portfolio";
import "./styles/home.scss";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import HamburgerMenu from "react-hamburger-menu";
import ReactPageScroller from 'react-page-scroller';

const App = () => {
  const handleClick = () => {
    setOpen(!open)
    if (menuClassList === "menu") {
      setMenuClassList("menu menuActive")
    } else {
      setMenuClassList("menu")
    }
  }

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    AOS.init({
      duration: 2000,
    });
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    }
  }, [])

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth)
  }

  const handlePageChange = (num) => {
    document.getElementById("strike0").classList.remove("activeStrike");
    document.getElementById("strike1").classList.remove("activeStrike");
    document.getElementById("strike2").classList.remove("activeStrike");
    document.getElementById("strike" + num).classList.add("activeStrike");
  }

  const handleScrollUnavailable = () => {
    // the end
    if (currentpage.current > 0) {
      setContactContainerClassList("ContactContainer ContactContainerActive")
    }
  }

    const currentpage = useRef(0);
    const [width, setWidth] = useState(0)
    const [open, setOpen] = useState(false)
    const [menuClassList, setMenuClassList] = useState("menu")
    const [currentSocial, setCurrentSocial] = useState("")
    const [contactContainerClassList, setContactContainerClassList] = useState("ContactContainer")
    const [activepage, setActivepage] = useState(0)
  

    const scroller = useMemo(() => {
      return (
      <ReactPageScroller
        onBeforePageScroll={handlePageChange}
        pageOnChange={(num)=>currentpage.current = num}
        animationTimer={900}
        animationTimerBuffer={0}
        renderAllPagesOnFirstRender
        transitionTimingFunction="ease-in-out"
        customPageNumber={activepage}
        handleScrollUnavailable={handleScrollUnavailable}
      >
        <div className="section">
          <Home />
        </div>
        <div className="section aboutPage">
          <About />
        </div>
        <div className="section">
          <Portfolio />
        </div>
      </ReactPageScroller>)
      }, [activepage])

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className={contactContainerClassList}>
          <div className="contactInner">
            <div className="contactMenu">
              <HamburgerMenu
                isOpen={true}
                menuClicked={() => {
                  setContactContainerClassList("ContactContainer ContactContainerUnloading")
                  setTimeout(() => {
                    if (contactContainerClassList === "ContactContainer ContactContainerUnloading") {
                      setContactContainerClassList("ContactContainer")
                    }
                  }, 800);
                }}
                width={
                  width <= 768
                    ? 0.075 * width
                    : width <= 991
                    ? 0.05 * width
                    : width <= 1366
                    ? 0.05 * width
                    : 0.02 * width
                }
                height={
                  width <= 991
                    ? 0.04 * width
                    : width <= 1366
                    ? 0.04 * width
                    : 0.02 * width
                }
                strokeWidth={
                  width <= 768
                    ? 0.006 * width
                    : width <= 991
                    ? 0.004 * width
                    : width <= 1366
                    ? 0.005 * width
                    : 0.0015 * width
                }
                rotate={0}
                color="white"
                borderRadius={5}
                animationDuration={0.5}
              />
            </div>
            <div className="diagonalBackground"></div>
            <h3>Contact me</h3>
            <h1>
              <a href="mailto:eshchock1@gmail.com">
                eshchock
                <span
                  className="noFont"
                  style={{ marginLeft: "-0.7vw", marginRight: "0.3vw" }}
                >
                  1@
                </span>
                gmail
                <span className="noFont" style={{ marginRight: "0.2vw" }}>
                  .
                </span>
                com
              </a>
            </h1>
            <div className="contactSocials">
              <h2
                id="social1"
                onMouseEnter={() =>
                  setCurrentSocial("Linkedin")
                }
              >
                <a href="https://www.linkedin.com/in/eshwara-chock/">
                  <FaLinkedinIn />
                </a>
              </h2>
              <h2
                id="social2"
                onMouseEnter={() => setCurrentSocial("Github")}
              >
                {" "}
                <a href="http://github.com/Eshchock1">
                  <FaGithub />
                </a>
              </h2>
              <h2
                id="social3"
                onMouseEnter={() =>
                  setCurrentSocial("Instagram")
                }
              >
                <a href="https://www.instagram.com/eshwara_chock/">
                  <FaInstagram />
                </a>
              </h2>
              <div className="break"></div>
              <h3 id="currentSocial">{currentSocial}</h3>
            </div>
          </div>
        </div>

        <span id="cursor"></span>
        <div
          className="links"
          data-aos-anchor="#name"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <button onClick={() => setActivepage(0)}>
            <span className="strike activeStrike" id="strike0">
              Intro
            </span>
          </button>
          <button onClick={() => setActivepage(1)}>
            <span className="strike" id="strike1">
              About
            </span>
          </button>
          <button onClick={() => setActivepage(2)}>
            <span className="strike" id="strike2">
              Portfolio
            </span>
          </button>
          <button
            onClick={() =>
              setContactContainerClassList("ContactContainer ContactContainerActive")
            }
          >
            CONTACT
          </button>
        </div>
        <div
          className="mobileMenu"
          data-aos-anchor="#name"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={
              width <= 768
                ? 0.075 * width
                : width <= 991
                ? 0.05 * width
                : width <= 1366
                ? 0.05 * width
                : 0
            }
            height={
              width <= 991
                ? 0.04 * width
                : width <= 1366
                ? 0.04 * width
                : 0
            }
            strokeWidth={
              width <= 768
                ? 0.006 * width
                : width <= 991
                ? 0.004 * width
                : width <= 1366
                ? 0.005 * width
                : 0
            }
            rotate={0}
            color="#607878"
            borderRadius={5}
            animationDuration={0.5}
          />
        </div>
        <div className={menuClassList}>
          <ul>
            <li>
              <button
                onClick={() => {
                  setActivepage(0)
                  setMenuClassList("menu")
                  setOpen(!open)
                }}
              >
                Intro
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActivepage(1)
                    setMenuClassList("menu")
                  setOpen(!open)
                }}
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setActivepage(2)
                  setMenuClassList("menu")
                  setOpen(!open)
                }}
              >
                Portfolio
              </button>{" "}
            </li>
            <li>
              <a href="mailto:eshchock1@gmail.com" className="mobileContact">CONTACT</a>
            </li>
            <li>
              <div className="mobileSocials">
                <h2>
                  <a href="https://www.linkedin.com/in/eshwara-chock/">
                    <FaLinkedinIn />
                  </a>
                </h2>
                <h2>
                  {" "}
                  <a href="http://github.com/Eshchock1">
                    <FaGithub />
                  </a>
                </h2>
                <h2>
                  <a href="https://www.instagram.com/eshwara_chock/">
                    <FaInstagram />
                  </a>
                </h2>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="socials"
          data-aos-anchor="#name"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/eshwara-chock/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="http://github.com/Eshchock1">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eshwara_chock/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        {scroller}
      </div>
    );
  }

export default App;
