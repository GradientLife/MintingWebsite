import { useEthers, useContractCall, useContractFunction, useEtherBalance } from "@usedapp/core";
import ContractABI from '../ContractABI.json';
import { utils, ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts'
import React, { useState } from 'react';
import '../main.css';
import { margin } from "@mui/system";
import UnrevealImage from '../images/Premint-Official-TransparentBackground.png';
import RevealImage from '../images/PersonalityRevealGif.gif';
import GoldenImage from '../images/All-Personality-Gold-Unreveal.gif';
import { debug } from "console";

import { GetProof, GetWhitelist } from '../scripts/merkletree'

const contractInterface = new ethers.utils.Interface(ContractABI);
const contractAddress = '0x8C540C71AD94dE2a754b5E5526Fa28F284fDb0Bc';
const contractContract = new Contract(contractAddress, contractInterface);

console.log("ContractAddress = ", contractAddress);

function AlertPrice(price: string) {
    alert("require " + `${price}` + " ETH to mint");
}

function AlertWhitelist() {
    alert("you're not whitelisted");
}

function GetSupply() {
    const { account } = useEthers()
    const [count] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "totalSupply",
        args: [],
    }) ?? [];

    return count ? count.toString() + '/3333' : '';
}

function GetMaxMintAmount() {
    const { account } = useEthers()

    const [mintedAmount] = useContractCall({
        abi: contractInterface, 
        address: contractAddress,
        method: "numberMinted",
        args: [account],
    }) ?? [];

    const [maxAmount] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "mintPerAddressLimit",
        args: [],
    }) ?? [];

    return (mintedAmount && maxAmount) ? mintedAmount.toString() + "/" + maxAmount.toString() : '';
}

function GetMinted() {
    const { account } = useEthers()

    const [mintedAmount] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "numberMinted",
        args: [account],
    }) ?? [];

    return mintedAmount;
}

export const MintArea = () => {
    const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined && chainId == 1
    const etherBalance = Number(useEtherBalance(account))
    const supply = GetSupply();
    const [mintPage, setmintPage] = useState(false);
    const [mintWLPage, setmintWLPage] = useState(false);
    function ToggleMintPage() {
        setmintPage(!mintPage);
    }
    function ToggleWLMintPage() {
        setmintWLPage(!mintWLPage);
    }

    const maxMintAmount = GetMaxMintAmount();
    const minted = GetMinted();
    const proof = GetProof(account);
    const verify = GetWhitelist(account);

    const { state: stateWL, send: sendWL } = useContractFunction(contractContract, 'WhitelistMint', { transactionName: 'WhitelistMint' })
    function WhitelistMint(mintAmount: string) {
        if(!verify)
        {
            AlertWhitelist();
            return;
        }

        if (etherBalance < parseFloat(mintAmount) * 30000000000000000) {
            AlertPrice((parseFloat(mintAmount) * 30000000000000000 / 1000000000000000000).toString())
        }
        sendWL(mintAmount, proof, {
            value: (parseFloat(mintAmount) * 30000000000000000).toString(),
        });
    }

    const { state, send } = useContractFunction(contractContract, 'GeneralMint', { transactionName: 'Mint' })
    function GeneralMint(mintAmount: string) {
        if (etherBalance < parseFloat(mintAmount) * 40000000000000000) {
            AlertPrice((parseFloat(mintAmount) * 40000000000000000 / 1000000000000000000).toString())
        }
        send(mintAmount, {
            value: (parseFloat(mintAmount) * 40000000000000000).toString(),
        });
    }

    return (
        <div style={{
            padding: '1vw', verticalAlign: 'middle', textAlign: 'center'
        }}>
            <div className="FlexBoxes">
            <div style={{ margin: '1vw' }}>
                            <div style={{  backgroundColor: 'rgba(243, 235, 235, .9)', borderRadius: '1vw', fontFamily: 'Kaushan Script, cursive', fontSize: '2vw', color: 'black',  marginBottom: '5vw' }} >
                                Whitelist Mint
                            </div >
                    <img src={UnrevealImage} style={{ height: '25vw', margin: '-5vw 0vw -1vw 0vw' }}></img>

                    <div>
                        {isConnected ?
                            (
                                <div>
                                    {mintWLPage ?
                                        (
                                            <div>
                                                < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none' }} onClick={() => ToggleWLMintPage()} > Close</button>
                                                <div style={{ margin: '1vw 0vw 0vw 0vw', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)", backgroundColor: 'rgba(243, 235, 235,.9)', color:'black', textShadow:'none'  }}>
                                                    <div style={{ fontSize: '1vw', color:'black', fontWeight:'900' }}>0.03 eth per GRADIE, maximum {maxMintAmount} </div>


                                                    {Number(minted) < 5 ? <button className="RainbowButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("1")}>1</button> : <button className="NormalButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("1")}>1</button>}
                                                    {Number(minted) < 4 ? <button className="RainbowButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("2")}>2</button> : <button className="NormalButton" style={{ margin: '.5vw' , backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none' }} onClick={() => WhitelistMint("2")}>2</button>}
                                                    {Number(minted) < 3 ? <button className="RainbowButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("3")}>3</button> : <button className="NormalButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("3")}>3</button>}
                                                    {Number(minted) < 2 ? <button className="RainbowButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("4")}>4</button> : <button className="NormalButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("4")}>4</button>}
                                                    {Number(minted) < 1 ? <button className="RainbowButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("5")}>5</button> : <button className="NormalButton" style={{ margin: '.5vw', backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none'  }} onClick={() => WhitelistMint("5")}>5</button>}
                                                </div>
                                                <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '1vw', fontWeight:'900' }}> *for whitelisted address only* </div>
                                            </div>
                                        )
                                        :
                                        (<div>
                                            < button className="RainbowButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right',backgroundColor: 'rgb(243, 235, 235)', color:'black', textShadow:'none' }} onClick={() => ToggleWLMintPage()} > Mint</button>
                                            <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '1vw', fontWeight:'900' }}> *for whitelisted address only* </div>
                                        </div>)
                                    }
                                </div>
                            ) : (
                                <div>
                                    < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}> Connect Your Wallet </button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Kaushan Script, cursive', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }} >
                                General Mint
                            </div >
                    <img src={RevealImage} style={{ height: '25vw', margin: '-5vw 0vw -1vw 0vw' }}></img>

                    <div>
                        {isConnected ?
                            (
                                <div>
                                    {mintPage ?
                                        (
                                            <div>
                                                < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right', backgroundColor: 'rgb(38, 37, 37)', textShadow:'none' }} onClick={() => ToggleMintPage()} > Close</button>
                                                <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', margin: '1vw 0vw 0vw 0vw', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
                                                    <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '1vw' }}>0.04 eth per GRADIE, maximum {maxMintAmount} </div>


                                                    {Number(minted) < 5 ? <button className="RainbowButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("1")}>1</button> : <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("1")}>1</button>}
                                                    {Number(minted) < 4 ? <button className="RainbowButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("2")}>2</button> : <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("2")}>2</button>}
                                                    {Number(minted) < 3 ? <button className="RainbowButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("3")}>3</button> : <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("3")}>3</button>}
                                                    {Number(minted) < 2 ? <button className="RainbowButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("4")}>4</button> : <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("4")}>4</button>}
                                                    {Number(minted) < 1 ? <button className="RainbowButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("5")}>5</button> : <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => GeneralMint("5")}>5</button>}
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div>
                                            {false ?
                                                (
                                                    <div>
                                                        < button className="RainbowButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right', backgroundColor: 'rgb(38, 37, 37)', textShadow:'none' }} onClick={() => ToggleMintPage()} > Mint</button>
                                                    </div>
                                                )
                                                :
                                                (
                                                    < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }}> April 30th</button>
                                                )
                                            }
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (
                                <div>
                                    < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}> Connect Your Wallet </button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                    <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Kaushan Script, cursive', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }} >
                        NFT Reveal
                    </div >
                    <img src={GoldenImage} style={{ height: '25vw', margin: '-5vw 0vw -1vw 0vw' }}></img>
                    <div>
                        < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '2.5vw', alignSelf: 'right' }}> April 30th</button>
                    </div>
                </div>
            </div>
        </div >

    )
}