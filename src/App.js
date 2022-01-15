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
            <a href="https://discord.gg/6jwUPvsfKW" target="_blank"> <button className="NormalButton" type="button">Discord</button></a>
            <a href="" target="_blank"> <button className="NormalButton" type="button">Opensea</button></a>
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
            <a href="https://discord.gg/6jwUPvsfKW" target="_blank" style={{ display: "block", textAlign: 'center' }}><img src={DiscordWhitelistBanner} style={{ width: "30vw" }}></img></a>
            <div style={{ padding: '1vw' }}></div>
          </div>

        </div >

        <div className="SectionTwoColor" style={{ overflow: "auto" }}>
          <div id='Roadmap' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}> Lore</div>
          <div style={{ color: 'white' }} className="TitleHeader">(Coming in 4 days)</div>
          <div style={{ margin: "5vw 55vw 0vw 3vw", width: '25vw' }}>

          </div>

        </div >


        <div className="SectionThreeColor" style={{ overflow: "auto" }}>
          <div id='Roadmap' className="TitleHeader" style={{ padding: "5vw 0vw 0vw 0vw" }}> Roadmap</div>
          <div style={{ color: 'white' }} className="TitleHeader">(Coming in 2 days)</div>
          <div style={{ margin: "5vw 10vw 5vw 10vw" }}>

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

                    <a href="https://twitter.com/TextGuyYT" className='BoldText'>twitter</a>
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
