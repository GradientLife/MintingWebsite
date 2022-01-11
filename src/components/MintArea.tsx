import { useEthers, useContractCall, useContractFunction } from "@usedapp/core";
import CoolCatABI from '../CoolCatABI.json';
import { utils, ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts'
import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import '../main.css';
import { margin } from "@mui/system";
import UnrevealImage from '../images/Premint-Official-TransparentBackground.png';
import RevealImage from '../images/PersonalityRevealGif.gif';
import GoldenImage from '../images/All-Personality-Gold-Unreveal.gif';

const coolcatInterface = new ethers.utils.Interface(CoolCatABI);
const coolcatAddress = '0x235bB261718BcD06C0BB21C6F2542d62CF032eB0';
const coolcatContract = new Contract(coolcatAddress, coolcatInterface);

console.log("ContractAddress = ", coolcatAddress);
console.log("ABI = ", coolcatInterface);
function GetSupply() {

    const [count] = useContractCall({
        abi: coolcatInterface,
        address: coolcatAddress,
        method: "totalSupply",
        args: [],
    }) ?? [];

    return count ? count.toString() + '/10000' : '';
}

function GetPrice() {
    const [price] = useContractCall({
        abi: coolcatInterface,
        address: coolcatAddress,
        method: "generalCost",
        args: [],
    }) ?? [];

    return price ? price.toString() : '';
}

function GetMaxMintAmount() {
    const { account } = useEthers()
    const [mintedAmount] = useContractCall({
        abi: coolcatInterface,
        address: coolcatAddress,
        method: "addressMintedBalance",
        args: [account],
    }) ?? [];

    const [maxAmount] = useContractCall({
        abi: coolcatInterface,
        address: coolcatAddress,
        method: "maxMintAmount",
        args: [],
    }) ?? [];

    return (mintedAmount && maxAmount) ? mintedAmount.toString() + "/" + maxAmount.toString() : '';
}

export const MintArea = () => {
    const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined && chainId == 42
    const supply = GetSupply();
    const [mintPage, setmintPage] = useState(false);
    function ToggleMintPage() {
        if (mintPage == true) {
            setmintPage(false);
        }
        else {
            setmintPage(true);
        }
    }
    const price = GetPrice();
    const maxMintAmount = GetMaxMintAmount();

    const { state, send } = useContractFunction(coolcatContract, 'MintCollectible', { transactionName: 'Mint' })
    function MintNFT(mintAmount: string) {
        send(mintAmount, {
            value: (parseFloat(mintAmount) * parseFloat(price)).toString(),
        });
    }

    return (
        <div style={{
            padding: '1vw', verticalAlign: 'middle', textAlign: 'center'
        }}>
            <div className="FlexBoxes">

                <div style={{ margin: '1vw' }}>
                    <img src={UnrevealImage} style={{ height: '25vw', margin: '-5vw' }}></img>
                    {
                        isConnected ?
                            <div style={{ fontFamily: 'Raleway', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000' }
                            } >
                                {supply}
                            </div >
                            :
                            <div style={{ fontFamily: 'Raleway', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000' }}>
                                minting state
                            </div>
                    }

                    <div>
                        {isConnected ?
                            (
                                <div>
                                    {mintPage ?
                                        (
                                            <div>
                                                < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }} onClick={() => ToggleMintPage()} > Close</button>
                                                <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', margin: '1vw', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
                                                    <div style={{ color: 'white', textShadow: '1px 1px 1px #000000' }}>choose mint amount, maximum {maxMintAmount} </div>
                                                    <button className="NormalButton" style={{ margin: '10px' }} onClick={() => MintNFT("1")}>1</button>
                                                    <button className="NormalButton" style={{ margin: '10px' }} onClick={() => MintNFT("2")}>2</button>
                                                    <button className="NormalButton" style={{ margin: '10px' }} onClick={() => MintNFT("3")}>3</button>
                                                    <button className="NormalButton" style={{ margin: '10px' }} onClick={() => MintNFT("4")}>4</button>
                                                    <button className="NormalButton" style={{ margin: '10px' }} onClick={() => MintNFT("5")}>5</button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (<div>
                                            < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }} onClick={() => ToggleMintPage()} > Mint</button>
                                        </div>)
                                    }
                                </div>
                            ) : (
                                <div>
                                    <button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}> Connect Wallet</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                    <img src={RevealImage} style={{ height: '25vw', margin: '-5vw' }}></img>
                    <div>
                        <div style={{ fontFamily: 'Raleway', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000' }
                        } >
                            NFT reveal
                        </div >
                        < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}>(after sold out)</button>
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                    <img src={GoldenImage} style={{ height: '25vw', margin: '-5vw' }}></img>
                    <div>
                        <div style={{ fontFamily: 'Raleway', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000' }
                        } >
                            golden reveal
                        </div >
                        < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}>(coming soon)</button>
                    </div>
                </div>
            </div>
        </div >

    )
}