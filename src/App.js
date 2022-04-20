import React, { useState, useEffect } from 'react';

import { ChainId, DAppProvider, useEthers, useContractCall } from '@usedapp/core';

import { Header } from './components/header';

import { MintArea } from './components/MintArea';

import './fonts/CartoonOneFont.css';

import WeatherGif from "./images/Weathers-for-Website.gif";

import PersonalityGif from "./images/Personality-for-Website.gif";

import DesireGif from "./images/Desire-for-Website.gif";

import EmotionGif from "./images/Emotions-for-Website.gif";

import './main.css';

//Assets

import Airdrop from './images/Assets/AirDrop.png';

import Shirt from './images/Assets/BlueShirt.png';

import MegaPrize from './images/Assets/GlowMegaPrize.png';

import SandBox from './images/Assets/SandBox.png';

import Ticket from './images/Assets/Ticket.png';

import Unreveal from './images/PremintRevealOfficial.jpg';

import PFPDemo from './images/PhotographDemo.png';

import TwitterIcon from './images/twitter.png';

import DiscordIcon from './images/discord.png';

import OpenseaIcon from './images/opensea.png';

import DiscordWhitelistBanner from './images/DiscordAndWhitelistBanner.jpg';
import RoadMapV1 from './images/Roadmap V3.png';

import Abeee from './images/Mod Profiles/Abeee.jpg';
import TheWoman from './images/Mod Profiles/The Woman.jpg';
import JAARwei from './images/Mod Profiles/JAARwei.jpg';
import 泰来 from './images/Mod Profiles/泰来develop eth.jpg';
import Makiii from './images/Mod Profiles/Makiii.jpg';
import XCORTEZ701 from './images/Mod Profiles/XCORTEZ701.jpg';
import Momma from './images/Mod Profiles/Momma.jpg';

import { Helmet } from "react-helmet";

const config = {

  readOnlyChainId: ChainId.Mainnet,

  readOnlyUrls: {

    [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,

  },

  notifications: {

    expirationPeriod: 1000,

    checkInterval: 1000

  }

}

function App() {

  const [FAQPage1, setFAQPage1] = useState(false);

  function ToggleFAQ1() {

    if (FAQPage1 == true) {

      setFAQPage1(false);

    }

    else {

      setFAQPage1(true);

    }

  }

  const [FAQPage2, setFAQPage2] = useState(false);

  function ToggleFAQ2() {

    if (FAQPage2 == true) {

      setFAQPage2(false);

    }

    else {

      setFAQPage2(true);

    }

  }

  const [FAQPage3, setFAQPage3] = useState(false);

  function ToggleFAQ3() {

    if (FAQPage3 == true) {

      setFAQPage3(false);

    }

    else {

      setFAQPage3(true);

    }

  }

  const [FAQPage4, setFAQPage4] = useState(false);

  function ToggleFAQ4() {

    if (FAQPage4 == true) {

      setFAQPage4(false);

    }

    else {

      setFAQPage4(true);

    }

  }

  const [FAQPage5, setFAQPage5] = useState(false);

  function ToggleFAQ5() {

    if (FAQPage5 == true) {

      setFAQPage5(false);

    }

    else {

      setFAQPage5(true);

    }

  }

  const [FAQPage6, setFAQPage6] = useState(false);

  function ToggleFAQ6() {

    if (FAQPage6 == true) {

      setFAQPage6(false);

    }

    else {

      setFAQPage6(true);

    }

  }

  const [FAQPage7, setFAQPage7] = useState(false);

  function ToggleFAQ7() {

    if (FAQPage7 == true) {

      setFAQPage7(false);

    }

    else {

      setFAQPage7(true);

    }

  }

  return (

    <DAppProvider config={{

      config

    }}>

      <Helmet>

        <meta charSet="utf-8" />

        <title>Gradient Life NFT</title>

        <link rel="canonical" href="https://gradientlifenft.io" />

        <meta name="description" content="Gradient Life NFT" />

        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

      </Helmet>

      <div className='Primary'>

        <div className='mainHeader'>

          <div className='mainHeaderLabel'>

            <div style={{}}>Gradient Life NFT</div>

          </div>

          <Header />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>

            <a href="#Mint" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(187,42,42)' }}>MINT</div></a>

            <a href="#About" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(254,182,8)' }}>ABOUT</div></a>

            <a href="#Lore" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(23,177,37)' }}>LORE</div></a>

            <a href="#Roadmap" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(10,160,206)' }}>ROADMAP</div></a>

            <a href="#FAQ" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(46,54,152)' }}>FAQ</div></a>

            <a href="#Team" style={{ textDecoration: 'none' }}> <div className="NormalButton" style={{ width: '5vw', margin: '.3vw', backgroundColor: 'rgb(130,32,180)' }}>TEAM</div></a>

            <a href="https://twitter.com/GradientLifeNFT" style={{ marginLeft: '1vw', textDecoration: 'none' }} target="_blank"> <img className="NormalButton" src={TwitterIcon} style={{ height: '2vw', padding: '.5vw' }}></img></a>
            <a href="https://opensea.io/collection/gradient-life-nft-official" style={{ marginLeft: '1vw', textDecoration: 'none' }} target="_blank"> <img className="NormalButton" src={OpenseaIcon} style={{ height: '2vw', padding: '.5vw' }}></img></a>
            
          </div>

        </div>

        <div id='Mint' style={{ marginTop: '-10vw' }} className="SectionOneColor">

          <div className='Panel1'>

            <div style={{ padding: '8vw' }}></div>

            <MintArea />

            <div style={{ padding: '2vw' }}></div>

          </div>

        </div >

        <div className="SectionAbout" style={{ overflow: "auto" }}>

          <div id='About' style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw", marginBottom: '5vw' }}>

            <div style={{ color: 'black', marginTop: '2vw', fontSize: '3vw', textShadow: '0px 0px 0px #000000' }} className="TitleHeader">What is Gradient Life NFT?</div>

            <div className='FlexBoxes' style={{}}>

              <div style={{ width: '40vw', margin: '2vw' }}>

                <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

                  <div className="SmallerText" style={{ margin: "1vw" }}>Gradient Life NFT is a collection of 3333 hand drawn generative art with no hats no cloths no accessories that’s what makes it special. the true personality of them turned their appearance into various of faces and their inner desire and emotion wrapped their body up, so you might be a wimpy alien desired for fame or an adventurous explorer desired for beauty, with all these unique traits to form an extremely unique piece of art that is a depiction of your true self,</div>

                  <div className="SmallerText" style={{ margin: "1vw" }}>Words can’t describe much about what we plan to do with our project, actions are more important, we have the passion to explore and innovate in the NFT Space to maximize the possibility of this amazing NFT Tech with our community, our goals are to build an exceptional quality and value for Gradient Life, we hope to see Gradies shine through the whole world as we will soon release our GradiMerch for holders and supporters to show their love for Gradies.</div>

                </div>

              </div>

              <img src={PFPDemo} style={{ height: "30vw", borderRadius: '1vw', margin: '5vw 0vw 0vw 0vw' }}></img>

            </div>

          </div>

        </div>

        <div className="SectionTwoColor" style={{ overflow: "auto" }}>

          <div style={{ margin: "5vw 55vw 3vw 3vw", width: '25vw' }}>

            <div id='Lore' className="SmallerText" style={{ fontFamily: 'Kaushan Script, cursive', whiteSpace: 'nowrap', color: 'rgb(251, 86, 7)', fontSize: '4vw', margin: '5vw 0vw 0vw 5vw', textShadow: '2px 2px 4px #000000' }}> the <span style={{ color: "white", fontSize: "10vw" }}>Lore</span> of Gradient Life</div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: "0vw 3vw 5vw 27vw", position: 'absolute' }}>

              <div className="FlexBoxes" style={{

                width: "65vw", height: '30vw'

              }}>

                <div className="flip-box">

                  < div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={WeatherGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Weather</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Weathers” of each “Gradie” are the background of where they are currently in at the time.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 3: Raining(12.38%), Cloudy(12.5%), Sunny(12.64%), Night(11.24%), Snowy(10.1%), Windy(10.55%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 2: Thunder Storm(6.68%), Foggy(5.66%), Icy(4.87%), Tornado(4.3%), Sandstorm(4.52%), Hailing(4.07%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 1: Rainbow(0.55%).</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={PersonalityGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Personality</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>All “Gradie” has their own unique “Personality” which represents their character.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 3: Brave(4.74%), Caring(4.90%), Cautious(5.74%), Disorganized(7.24%), Fool(4.07%), Ego(4.55%), Pervert(3.49%), Slow(3.15%), Serious(3.24%), Stingy(6.91%), Wimpy(7.41%), Kind(5.74%), Tricky(4.82%), Flowery(6.41%), Playful(4.90%), Creative(3.82%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 2: Adventurous(2.74%), Decisive(2.15%), Elegant(1.32%), Fabulous(1.65%), Generous(1.57%), Imposter(1.32%), Loyal(2.23%), Mysterious(1.98%), Peaceful(1.82%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 1: Achiever(0.98%), Clever(0.82%), Dominant(0.48%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>*After Fully Minted, Golden will be reveal during the Golden Gradie Day*</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={DesireGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Desire</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Desires” of each “Gradie” consist of a unique body tattoo and items that represents their true desire.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Achievement(5.1%), Alcohol(2.73%), Beauty(3.57%), Belonging(5.84%), Creating(3.91%), Drugs(2.43%), Equality(5.40%), Eternity(0.95%), Fame(6.58%), Food(5.62%), Freedom(4.80%), Gamble(2.88%), Happiness(4.88%), Health(4.43%), Intimacy(1.02%), Knowledge(5.47%), Love(5.92%), Perfection(2.13%), Power(6.14%), Satisfaction(6.44%), Strength(6.36%), Tranquil(3.62%), Truth(3.40%), Nothing(0.50%).</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={EmotionGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Emotion</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Emotions” of each “Gradie” are an icon that represents their emotion.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ fontSize: '1vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 3: Joy(18.08%), Sad(18.28%), Annoy(18.48%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 2: Fear(14.77%), Surprise(11.60%), Interest(10.44%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Tier 1: Angry(4.79%), Trust(3.12%), NoEmotion(0.51%).</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Each emotion has 3 levels, from mildest to strongest, it represents the state of emotion of your Gradie.</div>

                      <div className="SmallerText" style={{ padding: ".5vw", fontSize: '.8vw' }}>Drop Rates: Level 1 Mild (60%), Level Moderate (25%), Level 3 Strong (15%)</div>

                    </div>

                  </div>

                </div>

              </div>

            </div >

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>

              <div className="SmallerText" style={{ fontSize: "1.2vw", fontWeight: 'lighter' }}>

                In the year of 2040, the never-ending cumulative stress,

                a disastrous epidemic outbreak spread across the world,

                and it caused millions of people formed into a peculiar aspect,

                their faces turned into a creature of their true personality,

                their body can't contain the overwhelming emotions and it oozes out of their head which can be seen with bare eyes.

              </div>

              <div className="SmallerText" style={{ fontSize: "1.2vw", fontWeight: 'lighter' }}>

                in order to ease the pain of the condition, Gradie needs to release their emotions to something that brings them joy,

                such as gambling with others, chatting, exploring dungeons and so on, the said condition are known as Gradient Life.

              </div>

            </div>

          </div>

          <div style={{ height: '5vw' }}></div>

        </div >

        <div className="SectionThreeColor" style={{ overflow: "auto" }}>

          <div id='Roadmap' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw", color: 'white', textShadow: '2px 2px 4px #000000' }}> Roadmap</div>

          <img src={RoadMapV1} style={{ width: "60vw", margin: '3vw auto 5vw auto', display: 'block' }}></img>

        </div>

        <div className='SectionFiveColor' style={{ overflow: 'auto' }}>

          <div style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>

            <div id='FAQ' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}>FAQ</div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage1 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>1 - WHAT IS THE TOTAL SUPPLY?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ1()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw', marginTop: '1vw' }}>A Total of 3333 unique Gradies will be created.</div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>1 - WHAT IS THE TOTAL SUPPLY?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ1()} >+</button></div>

                  </div>

                </div>)}

            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage2 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>2 - WHEN WILL GRADIENT LIFE LAUNCH?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ2()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Pre-Sale Mint Date: April 20th, 10am PST</div>

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Public Mint Date: April 21th, 10am PST.</div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>2 - WHEN WILL GRADIENT LIFE LAUNCH?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ2()} >+</button></div>

                  </div>

                </div>)}

            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage3 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>3 - HOW MUCH TO MINT?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ3()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Pre-Sale: 0.03 ETH</div>

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Public Sale: 0.04 ETH</div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>3 - HOW MUCH TO MINT?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ3()} >+</button></div>

                  </div>

                </div>)}

            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage4 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>4 - FUTURE OF GRADIENT LIFE NFT?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ4()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Building value and quality on our project is our main goal, we will explore and innovate in the NFT Space with the endless possibility of NFT Tech, for sure we will have a breeding system for our Gen 2 collection and utility token soon, make sure to join our discord so you will be up to date with our latest updates!</div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>4 - FUTURE OF GRADIENT LIFE NFT?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ4()} >+</button></div>

                  </div>

                </div>)}

            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage5 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>5 - ARE THERE ANY NFT GIVEAWAYS?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ5()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Yes, we have reserved 333 Gradies for community giveaway only.</div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>5 - ARE THERE ANY NFT GIVEAWAYS?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ5()} >+</button></div>

                  </div>

                </div>)}

            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>

              {FAQPage6 ?

                (

                  <div>

                    <div>

                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>6 - HOW TO BUY?</div>

                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ6()} >-</button></div>

                    </div >

                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>

                      <div style={{ paddingBottom: '.5vw' }}>Here are the steps on what you need to do to get your Gradient Life NFT.</div>

                      <div>1. Download the [metamask.io](http://metamask.io/) extension on your browser.</div>

                      <div>2. Purchase Ethereum from various exchanges, such as Coinbase or Binance.</div>

                      <div>3. Send Ethereum from this exchange to your MetaMask wallet.</div>

                      <div>4. On launch day, open the Gradient Life NFT website and select the number of NFTs you wish to mint.</div>

                      <div>5. Choose between 1 - 5 Gradies, Click “MINT” button, Metamask will popup asking for connection.</div>

                      <div>6. Confirm the transaction and any associated fees.</div>

                      <div>7. Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea.</div>

                    </div>

                  </div>

                )

                :

                (<div>

                  <div>

                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder', fontFamily: 'Kaushan Script, cursive' }}>6 - HOW TO BUY?</div>

                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ6()} >+</button></div>

                  </div>

                </div>)}

            </div>

          </div>

          <div style={{ padding: '1vw' }}></div>

        </div>

        <div className='SectionSixColor' style={{ overflow: 'auto' }}>

          <div style={{ fontSize: '2vw', color: 'white' }}>

            <div id='Team' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw", color: 'black', textShadow: '0px 0px 0px #000000' }}>Team</div>

            <div className='FlexBoxes'>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>Mr Rainbow</div>

                  <a href="https://twitter.com/MrRainbow95" target="_blank"><img src={Unreveal} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Founder - Project Manager</div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>TextGuy</div>

                  <a href="https://twitter.com/TextGuyOfficial" target="_blank"><img src={Unreveal} style={{ width: "100%", borderRadius: '1vw' }}></img> </a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Founder - Core Developer </div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>The Woman</div>

                  <a href="https://twitter.com/TheWoman97" target="_blank"><img src={TheWoman} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Discord Moderator - Team Member</div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>JAARwei</div>

                  <a href="https://twitter.com/JAARwei" target="_blank"><img src={JAARwei} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Discord Moderator - Team Member</div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>泰来develop eth</div>

                  <a href="https://twitter.com/yehaifei" target="_blank"><img src={泰来} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Discord Moderator - Team Member</div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>XCORTEZ701🆘</div>

                  <a href="https://twitter.com/xcortez701" target="_blank"><img src={XCORTEZ701} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Discord Moderator - Team Member</div>

                  </div>

                </div>

              </div>

              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '10vw', margin: '1vw' }}>

                <div style={{ margin: '.5vw' }}>

                  <div style={{ margin: "0vw 0vw 1vw 0vw", fontSize: '1vw', textAlign: 'center' }} className='BoldText'>Momma</div>

                  <a href="https://twitter.com/Official__Momma" target="_blank"><img src={Momma} style={{ width: "100%", borderRadius: '1vw' }}></img></a>

                  <div className="SlimText" style={{ margin: "1vw", fontSize: '1vw' }}>

                    <div>Discord Moderator - Team Member</div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div style={{ margin: '5vw' }}></div>

          <div className='mainHeader' style={{ height: '5vw' }}>

            <div style={{ height: '3vw' }}></div>

            <div style={{ height: '.1vw', backgroundColor: 'rgba(255,255,255,.7)', margin: '0vw 1vw 0vw 1vw' }}></div>

            <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(255,255,255,.7)', fontSize: "1vw" }}>© Gradient Life NFT</div>

          </div>

        </div>

      </div >

    </DAppProvider >

  );

}

export default App;