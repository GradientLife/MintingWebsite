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
import DiscordWhitelistBanner from './images/DiscordAndWhitelistBanner.jpg';


/*
        <div className='maskZigZag'>
          <div style={{ height: "inherit" }} className="SectionOneColor"></div>
        </div>
        */

const config = {
  readOnlyChainId: ChainId.Kovan,
  readOnlyUrls: {
    [ChainId.Kovan]: `https://kovan.infura.io/v3/${process.env.INFURA_ID}`,
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

      <div className='Primary'>
        <div className='mainHeader'>

          <div className='mainHeaderLabel'>
            <div style={{ fontSize: '1vw' }}> Gradient Life</div>
            <div style={{ fontSize: '.8vw' }}>NFT</div>
          </div>
          <Header />

          <div style={{ position: 'absolute', margin: '0px' }}>
            <a href="#Mint"> <button className="NormalButton" type="button">Mint</button></a>
            <a href="#About"> <button className="NormalButton" type="button">About</button></a>
            <a href="#Lore"> <button className="NormalButton" type="button">Lore</button></a>
            <a href="#Roadmap"> <button className="NormalButton" type="button">Roadmap</button></a>
            <a href="#FAQ"> <button className="NormalButton" type="button">FAQ</button></a>
            <a href="#Team"> <button className="NormalButton" type="button">Team</button></a>
          </div>

          <div style={{ position: 'absolute', right: '0px' }}>
            <a href="https://twitter.com/GradientLifeNFT" target="_blank"> <button className="NormalButton" type="button">Twitter</button></a>
            <a href="https://discord.gg/7pR9PY9V7q" target="_blank"> <button className="NormalButton" type="button">Discord</button></a>
          </div>
        </div>
        <div id='Mint' style={{ marginTop: '-120px' }} className="SectionOneColor">
          <div style={{ marginTop: '120px' }}></div>
          <div className='Panel1'>
            <div style={{ padding: '5vw' }}></div>
            <MintArea />

            <div id='About' style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>
              <div style={{ padding: '1vw' }}></div>
              <div style={{ color: 'white' }} className="TitleHeader">What is Gradient Life NFT?</div>
              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
                <div className="SmallerText" style={{ margin: "1vw" }}>Gradient Life NFT is a collection of 10,000 hand drawn generative art with no hats no cloths no accessories that’s what makes it special. the true personality of them turned their appearance into various of faces and their inner desire and emotion wrapped their body up, so you might be a wimpy alien desired for fame or an adventurous explorer desired for beauty, with all these unique traits to form an extremely unique piece of art that is a depiction of your true self,</div>
                <div className="SmallerText" style={{ margin: "1vw" }}>Words can’t describe much about what we plan to do with our project, actions are more important, we have the passion to explore and innovate in the NFT Space to maximize the possibility of this amazing NFT Tech with our community, our goals are to build an exceptional quality and value for Gradient Life, we hope to see Gradies shine through the whole world as we will soon release our GradiMerch for holders and supporters to show their love for Gradies.</div>
              </div>
            </div>

            <div style={{ padding: '1vw' }}></div>
            <a href="https://discord.gg/7pR9PY9V7q" target="_blank" style={{ display: "block", textAlign: 'center' }}><img src={DiscordWhitelistBanner} style={{ width: "30vw" }}></img></a>
            <div style={{ padding: '1vw' }}></div>
          </div>

        </div >

        <div className="SectionTwoColor" style={{ overflow: "auto" }}>
          <div style={{ margin: "5vw 55vw 0vw 3vw", width: '25vw' }}>
            <div id='Lore' className="SmallerText" style={{ fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap', color: 'rgb(251, 86, 7)', fontSize: '4vw', margin: '5vw 0vw 0vw 5vw', textShadow: '2px 2px 4px #000000' }}> the <span style={{ color: "white", fontSize: "10vw" }}>Lore</span> of Gradient Life</div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: "0vw 3vw 5vw 27vw", position: 'absolute' }}>

              <div className="FlexBoxes" style={{

                boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5) inset", backgroundColor: 'rgb(255, 191, 105)', width: "65vw", height: "30vw", borderRadius: "1vw"

              }}>

                <div className="flip-box">

                  < div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={WeatherGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Weather</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Weathers” of each “Gradie” are the background of where they are currently in at the time.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 3: Raining(12.38%), Cloudy(12.5%), Sunny(12.64%), Night(11.24%), Snowy(10.1%), Windy(10.55%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 2: Thunder Storm(6.68%), Foggy(5.66%), Icy(4.87%), Tornado(4.3%), Sandstorm(4.52%), Hailing(4.07%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 1: Rainbow(0.55%).</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={PersonalityGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Personality</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>All “Gradie” has their own unique “Personality” which represents their character.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 3: Brave(4.74%), Caring(4.90%), Cautious(5.74%), Disorganized(7.24%), Fool(4.07%), Ego(4.55%), Pervert(3.49%), Slow(3.15%), Serious(3.24%), Stingy(6.91%), Wimpy(7.41%), Kind(5.74%), Tricky(4.82%), Flowery(6.41%), Playful(4.90%), Creative(3.82%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 2: Adventurous(2.74%), Decisive(2.15%), Elegant(1.32%), Fabulous(1.65%), Generous(1.57%), Imposter(1.32%), Loyal(2.23%), Mysterious(1.98%), Peaceful(1.82%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 1: Achiever(0.98%), Clever(0.82%), Dominant(0.48%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>*After Fully Minted, Golden will be reveal during the Golden Gradie Day*</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={DesireGif} style={{ width: "100%" }}></img>

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Desire</div>

                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Desires” of each “Gradie” consist of a unique body tattoo and items that represents their true desire.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Rarity</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 2: Achievement(5.07%), Alcohol(2.71%), Beauty(3.45%), Belonging(5.80%), Creating(3.89%), Drugs(2.42%), Equality(5.36%), Eternity(0.94%), Fame(6.54%), Food(5.58%), Freedom(4.85%), Gamble(2.86%), Happiness(6.78%), Health(4.41%), Intimacy(1.02%), Knowledge(5.43%), Love(5.88%), Perfection(2.12%), Power(6.10%), Satisfaction(6.39%), Strength(6.32%), Tranquil(3.59%), Truth(3.37%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 1: Nothing(0.50%), NFT(0.65%).</div>

                    </div>

                  </div>

                </div>

                <div className="flip-box">

                  <div className="FadeInner">

                    <div className="FadeTrigger" style={{ overflow: 'hidden' }}>

                      <img src={EmotionGif} style={{ width: "100%" }}></img>
                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Emotion</div>
                      <div className="SmallerText" style={{ fontSize: '1vw', margin: '0.5vw', backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)" }}>The “Emotions” of each “Gradie” are an icon that represents their emotion.</div>

                    </div>

                    <div className="FadeContent">

                      <div className="BoldText" style={{ margin: "5%", fontSize: '1.5vw' }}>Rarity</div>
                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 3: Joy(18.08%), Sad(18.28%), Annoy(18.48%).</div>
                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 2: Fear(14.77%), Surprise(11.60%), Interest(10.44%).</div>
                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Tier 1: Angry(4.79%), Trust(3.12%), NoEmotion(0.51%).</div>

                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Each emotion has 3 levels, from mildest to strongest, it represents the state of emotion of your Gradie.</div>
                      <div className="SmallerText" style={{ padding: "2%", fontSize: '.8vw' }}>Drop Rates: Level 1 Mild (60%), Level Moderate (25%), Level 3 Strong (15%)</div>

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
          <div id='Roadmap' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}> Roadmap</div>
          <div style={{ margin: "5vw 10vw 5vw 10vw" }}>
            <div className="FlexBoxes" style={{

              boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5) inset", backgroundImage: 'linear-gradient(rgb(255, 191, 105), rgb(255, 159, 28))', borderRadius: "5px"

            }}>

              <div className='RoadMapHover' style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <img src={Airdrop} className='RoadMapImageLeft'></img>

                <img src={Airdrop} className='RoadMapImageRight'></img>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Free Airdrop (25%)</div>

                <div className="SmallerText RoadmapDes">

                  When 25% of the Gradies sell out, 25 lucky holders will be airdropped one free Gradie each.

                </div>

              </div>

              <div className='RoadMapHover' style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <img src={Ticket} className='RoadMapImageLeft'></img>

                <img src={Ticket} className='RoadMapImageRight'></img>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Exclusive Raffle (50%)</div>

                <div className="SmallerText RoadmapDes">

                  When 50% of the Gradies sell out, we’ll be doing a community exclusive raffle to win some Ethereum!

                </div>

              </div>

              <div className='RoadMapHover' style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <img src={SandBox} className='RoadMapImageLeft'></img>

                <img src={SandBox} className='RoadMapImageRight'></img>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Sandbox Land Acquisition (60%)</div>

                <div className="SmallerText RoadmapDes">

                  When 60% of the Gradies sell out, we’ll be acquiring Sandbox land for our community, will be hosting events in Sandbox with our community!

                </div>

              </div>

              <div className='RoadMapHover' style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <img src={Shirt} className='RoadMapImageLeft'></img>

                <img src={Shirt} className='RoadMapImageRight'></img>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Merchandise Giveaway (75%)</div>

                <div className="SmallerText RoadmapDes">

                  When 75% of the Gradies sell out, we'll be sending 500 members exclusive merchandises out, including custom T-Shirt with your Unique Gradient Life NFT, your wallet address QR and some other surprises!

                </div>

              </div>

              <div className='RoadMapHover' style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <img src={MegaPrize} className='RoadMapImageLeft'></img>

                <img src={MegaPrize} className='RoadMapImageRight'></img>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Exclusive Mega Raffle (100%)</div>

                <div className="SmallerText RoadmapDes">

                  When 100% of the Gradies sell out, we’ll be doing a community exclusive lucky draw with 300,000 USD in prize.

                </div>

              </div>

              <div style={{ margin: '1vw', backgroundImage: 'linear-gradient(rgb(255, 191, 105),rgb(255, 159, 28))', boxShadow: "0px 0px 1vw rgba(24, 22 ,33,.5)", width: '100%' }}>

                <div className="BoldText" style={{ margin: "2%", fontSize: '2vw', color: 'rgb(251, 86, 7)', textAlign: 'center' }}>Future Updates</div>

                <div>

                  <div className="SmallerText RoadmapDes RoadMapHover">

                    Rarity Tools - We will list The Gradies on Rarity Tools.

                  </div>

                  <div className="SmallerText RoadmapDes RoadMapHover">

                    Gradient DAO establishment - To benefit our community for long term.

                  </div>

                  <div className="SmallerText RoadmapDes">

                    Game Development - Official Gradient Life Roadmap to be announced on early 2022.

                  </div>

                  <div className="SmallerText RoadmapDes">

                    Loading...

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        <div className='SectionFiveColor' style={{ overflow: 'auto' }}>

          <div style={{ textAlign: 'left', verticalAlign: 'middle', color: 'white', margin: 'auto', width: "90vw" }}>
            <div id='FAQ' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}>FAQ</div>
            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage1 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>1 - WHAT IS THE TOTAL SUPPLY?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ1()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw', marginTop: '1vw' }}>A Total of 10,000 unique Gradies will be created.</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>1 - WHAT IS THE TOTAL SUPPLY?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ1()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage2 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>2 - WHEN WILL GRADIENT LIFE LAUNCH?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ2()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>The Pre-Sale private mint will launch on January, 20th at 8AM PST and our Public Sale general mint on January, 21st at 8AM PST.</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>2 - WHEN WILL GRADIENT LIFE LAUNCH?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ2()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage3 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>3 - HOW MUCH TO MINT?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ3()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Pre-Sale: 0.05E</div>
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Public Sale: 0.07E</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>3 - HOW MUCH TO MINT?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ3()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage4 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>4 - WHAT DOES MY GRADIE GET ME?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ4()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Minting a Gradie gets you an awesome PFP that depicts your true self, and a ticket to all of our events, early access to our merchandises and a pass to all big and small updates in every coming events.</div>
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Our road map is community based, with new and innovative goals and roadmap from our community and combining it with our ideas to make it more exciting for our beloved Gradie holders and our community, stay tuned for Roadmap 2.0 and Website 2.0.</div>
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Come join the Gradies in the Gradiverse!</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>4 - WHAT DOES MY GRADIE GET ME?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ4()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage5 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>5 - FUTURE OF GRADIENT LIFE NFT?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ5()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Building value and quality on our project is our main goal, we will explore and innovate in the NFT Space with the endless possibility of NFT Tech, for sure we will have a breeding system for our Gen 2 collection and utility token soon, make sure to join our discord so you will be up to date with our latest updates!</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>5 - FUTURE OF GRADIENT LIFE NFT?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ5()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage6 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.2vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>6 - ARE THERE ANY NFT GIVEAWAYS?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ6()} >-</button></div>
                    </div >
                    <div style={{ padding: '.5vw', fontSize: '1.2vw' }}>Yes, we have reserved 300 Gradies for community giveaway only.</div>
                  </div>
                )
                :
                (<div>
                  <div>
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>6 - ARE THERE ANY NFT GIVEAWAYS?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ6()} >+</button></div>
                  </div>
                </div>)}
            </div>

            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', margin: '1vw', padding: '.5vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
              {FAQPage7 ?
                (
                  <div>
                    <div>
                      <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>7 - HOW TO BUY?</div>
                      <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ7()} >-</button></div>
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
                    <div style={{ position: 'absolute', fontSize: '1.5vw', padding: '.25vw 0vw .25vw 1vw', fontWeight: 'bolder' }}>7 - HOW TO BUY?</div>
                    <div style={{ justifyContent: 'flex-end', display: 'flex' }}>< button className="NormalButton" onClick={() => ToggleFAQ7()} >+</button></div>
                  </div>
                </div>)}
            </div>


          </div>
          <div style={{ padding: '1vw' }}></div>
        </div>


        <div className='SectionSixColor' style={{ overflow: 'auto' }}>

          <div style={{ fontSize: '2vw', color: 'white' }}>
            <div id='Team' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}>Team</div>
            <div className='FlexBoxes'>
              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '30vw', margin: '1vw' }}>
                <div style={{ margin: '3vw' }}>
                  <div style={{ margin: "0vw 0vw 1vw 0vw" }} className='BoldText'>OpenSystem</div>
                  <img src={Unreveal} style={{ width: "100%", borderRadius: '1vw' }}></img>
                  <div className="SlimText" style={{ margin: "1vw" }}>
                    <div>Design - Art - Project Management - Marketing</div>

                    <a href="https://twitter.com/OpenSystem777" className='BoldText'>twitter</a>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", width: '30vw', margin: '1vw' }}>
                <div style={{ margin: '3vw' }}>
                  <div style={{ margin: "0vw 0vw 1vw 0vw" }} className='BoldText'>TextGuy</div>
                  <img src={Unreveal} style={{ width: "100%", borderRadius: '1vw' }}></img>
                  <div className="SlimText" style={{ margin: "1vw" }}>
                    <div>Design - Art - Website - Smart Contract - Development</div>

                    <a href="https://twitter.com/TextGuyYT" className='BoldText'>twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: '5vw' }}></div>
        </div>


        <div className='mainHeader' style={{ height: '100px' }}>
          <div style={{ height: '20px' }}></div>
          <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,.7)', margin: '0vw 2vw 0vw 2vw' }}></div>
          <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(0,0,0,.7)' }}>© Gradient Life NFT</div>
        </div>
      </div >

    </DAppProvider >
  );
}

export default App;
