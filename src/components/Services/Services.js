import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ItemStack from "./ItemStack/ItemStack";

import "./Services.scss";

import computerImage from "../../assets/images/services/computer.png";
import androidImage from "../../assets/images/services/android.png";
import iosImage from "../../assets/images/services/ios.png";
import androidIosImage from "../../assets/images/services/android-ios.png";

import kotlinLogo from "../../assets/images/services/logos/kotlin.png";
import javaLogo from "../../assets/images/services/logos/java.png";
import swiftLogo from "../../assets/images/services/logos/swift.png";
import objcLogo from "../../assets/images/services/logos/objc.png";
import flutterLogo from "../../assets/images/services/logos/flutter.png";

import reactLogo from "../../assets/images/services/logos/react.png";
import angularLogo from "../../assets/images/services/logos/angular.png";
import vueLogo from "../../assets/images/services/logos/vue.png";

import dotnetLogo from "../../assets/images/services/logos/dotnet.png";
import nodeLogo from "../../assets/images/services/logos/node.png";
import phpLogo from "../../assets/images/services/logos/php.png";

// const mobileColor = "#e76f51";
// const mobileColor2 = "#e9c46a";
const mobileColor = "#e86e4f";
const mobileColor2 = "#f2c861";
//toColor="#41B883"
//toColor="#eacda3"
//toColor="#ed2939"
//toColor="#e16e79"

// const webColor = "#f4a261";
// const webColor2 = "#2a9d8f";
const webColor = "#f4a261";
const webColor2 = "#41B883";

// const backendColor = "#2a9d8f";
// const backendColor2 = "#264653";
const backendColor = "#2a9d8f";
const backendColor2 = "#0c5675";

const timeBetweenAnimations = 10000;

function Services() {
  const [changedColors, setChangedColors] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setChangedColors(!changedColors), timeBetweenAnimations);
  }, [changedColors]);

  return (
    <>
      <div className="Header">
        {/* <h4 className="Header__Title">Services</h4> */}
      </div>
      <div id="services" className="Services">
        <div className="Mobile">
          <div className="Mobile__Cover">
            <h3 className="Mobile__Cover__Title">
              {t("Home.Services.Mobile.BigTitle")}
            </h3>
          </div>
          <div className="Mobile__Content">
            <div className="Mobile__Content__Wrapper">
              <h3 className="Mobile__Content__Wrapper__Title">
                {t("Home.Services.Mobile.Title")}
              </h3>
              <p className="Mobile__Content__Wrapper__Text">
                {t("Home.Services.Mobile.Text")}
              </p>
            </div>

            {/* <div className="ServiceGrid">
              <ItemStack
                imageUrl={androidImage}
                imageHeightMult={0.9}
                title="Kotlin"
                subtitle="Android"
                logo={kotlinLogo}
                logoMult={0.7}
                toColor={mobileColor}
                toHoverColor={mobileColor2}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={androidImage}
                imageHeightMult={0.9}
                title="Java"
                subtitle="Android"
                logo={javaLogo}
                logoMult={1.3}
                toColor={mobileColor2}
                toHoverColor={mobileColor}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={iosImage}
                imageHeightMult={0.85}
                title="Swift"
                subtitle="IOS"
                logo={swiftLogo}
                logoMult={0.9}
                toColor={mobileColor}
                toHoverColor={mobileColor2}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={iosImage}
                imageHeightMult={0.85}
                title="Objective C"
                subtitle="IOS"
                logo={objcLogo}
                logoMult={0.9}
                toColor={mobileColor2}
                toHoverColor={mobileColor}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={androidIosImage}
                imageHeightMult={0.87}
                title="React Native"
                subtitle="Android / IOS"
                logo={reactLogo}
                toColor={mobileColor}
                toHoverColor={mobileColor2}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={androidIosImage}
                imageHeightMult={0.85}
                title="Flutter"
                subtitle="Android / IOS"
                logo={flutterLogo}
                logoMult={0.9}
                toColor={mobileColor2}
                toHoverColor={mobileColor}
                changedColors={changedColors}
              />
            </div> */}
          </div>
        </div>

        <div className="Web">
          <div className="Web__Cover">
            <h3 className="Web__Cover__Title">
              {t("Home.Services.Web.BigTitle")}
            </h3>
          </div>
          <div className="Web__Content">
            <div className="Web__Content__Wrapper">
              <h3 className="Web__Content__Wrapper__Title">
                {t("Home.Services.Web.Title")}
              </h3>
              <p className="Web__Content__Wrapper__Text">
                {t("Home.Services.Web.Text")}
              </p>
            </div>

            {/* <div className="ServiceGrid">
              <ItemStack
                imageUrl={computerImage}
                title="React"
                subtitle="Web"
                logo={reactLogo}
                toColor={webColor}
                toHoverColor={webColor2}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={computerImage}
                title="Angular"
                subtitle="Web"
                logo={angularLogo}
                logoMult={0.9}
                toColor={webColor2}
                toHoverColor={webColor}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={computerImage}
                title="Vue.js"
                subtitle="Web"
                logo={vueLogo}
                logoMult={0.8}
                toColor={webColor}
                toHoverColor={webColor2}
                changedColors={changedColors}
              />
            </div> */}
          </div>
        </div>

        <div className="Backend">
          <div className="Backend__Cover">
            <h3 className="Backend__Cover__Title">
              {t("Home.Services.Back.BigTitle")}
            </h3>
          </div>
          <div className="Backend__Content">
            <div className="Backend__Content__Wrapper">
              <h3 className="Backend__Content__Wrapper__Title">
                {t("Home.Services.Back.Title")}
              </h3>
              <p className="Backend__Content__Wrapper__Text">
                {t("Home.Services.Back.Text")}
              </p>
            </div>

            {/* <div className="ServiceGrid">
              <ItemStack
                imageUrl={computerImage}
                title=".NET Core 3 (C#)"
                subtitle="Backend"
                logo={dotnetLogo}
                toColor={backendColor}
                toHoverColor={backendColor2}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={computerImage}
                title="Node.js"
                subtitle="Backend"
                logo={nodeLogo}
                logoMult={1.5}
                toColor={backendColor2}
                toHoverColor={backendColor}
                changedColors={changedColors}
              />
              <ItemStack
                imageUrl={computerImage}
                title="Laravel (PHP)"
                subtitle="Backend"
                logo={phpLogo}
                logoMult={1.4}
                toColor={backendColor}
                toHoverColor={backendColor2}
                changedColors={changedColors}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
