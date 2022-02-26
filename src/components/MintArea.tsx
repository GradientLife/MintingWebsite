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

const contractInterface = new ethers.utils.Interface(ContractABI);
const contractAddress = '0xd411c8A986866d55f7E4F521eCe501B386dF88e2';
const contractContract = new Contract(contractAddress, contractInterface);

console.log("ContractAddress = ", contractAddress);

function AlertPrice(price: string) {
    alert("require " + `${price}` + " ETH to mint");
}

function GetSupply() {
    const { account } = useEthers()
    const [count] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "totalSupply",
        args: [],
    }) ?? [];

    return count ? count.toString() + '/10000' : '';
}

function GetPrice() {
    const { account } = useEthers()
    const [price] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "getPrice",
        args: [account],
    }) ?? [];

    return price ? price.toString() : '';
}

function GetMaxMintAmount() {
    const { account } = useEthers()

    const [mintedAmount] = useContractCall({
        abi: contractInterface,
        address: contractAddress,
        method: "addressMintedBalance",
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

export const MintArea = () => {
    const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined && chainId == 1
    const etherBalance = Number(useEtherBalance(account))
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

    const { state, send } = useContractFunction(contractContract, 'MintCollectible', { transactionName: 'Mint' })
    function MintNFT(mintAmount: string) {
        if (etherBalance < parseFloat(mintAmount) * parseFloat(price)) {
            AlertPrice((parseFloat(mintAmount) * parseFloat(price) / 1000000000000000000).toString())
        }
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

                    <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Poppins, sans-serif', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }} >
                        NFT Reveal
                    </div >
                    <img src={RevealImage} style={{ height: '25vw', margin: '-5vw' }}></img>
                    <div>
                        < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}>(after sold out)</button>
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                    {
                        isConnected ?
                            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Poppins, sans-serif', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }
                            } >
                                Mint Now
                            </div >
                            :
                            <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Poppins, sans-serif', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }}>
                                Mint Now
                            </div>
                    }
                    <img src={UnrevealImage} style={{ height: '25vw', margin: '-5vw' }}></img>

                    <div>
                        {isConnected ?
                            (
                                <div>
                                    {mintPage ?
                                        (
                                            <div>
                                                < button className="NormalButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }} onClick={() => ToggleMintPage()} > Close</button>
                                                <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', margin: '1vw', borderRadius: '1vw', padding: '1vw', boxShadow: "0px 0px 1vw rgba(24,  22 ,33,.5)" }}>
                                                    <div style={{ color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '1vw' }}>{price / 1000000000000000000} eth per GRADIE, maximum {maxMintAmount} </div>
                                                    <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => MintNFT("1")}>1</button>
                                                    <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => MintNFT("2")}>2</button>
                                                    <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => MintNFT("3")}>3</button>
                                                    <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => MintNFT("4")}>4</button>
                                                    <button className="NormalButton" style={{ margin: '.5vw' }} onClick={() => MintNFT("5")}>5</button>
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
                                    < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}> Connect Wallet </button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ margin: '1vw' }}>
                    <div style={{ backgroundColor: 'rgba(38, 37, 37, .9)', borderRadius: '1vw', fontFamily: 'Poppins, sans-serif', fontSize: '2vw', color: 'white', textShadow: '1px 1px 1px #000000', marginBottom: '5vw' }} >
                        Golden Reveal
                    </div >
                    <img src={GoldenImage} style={{ height: '25vw', margin: '-5vw' }}></img>
                    <div>
                        < button className="DisabledButton" style={{ width: '25vw', height: '5vw', fontSize: '1.5vw', padding: '1vw 5vw', alignSelf: 'right' }}>(after sold out)</button>
                    </div>
                </div>
            </div>
        </div >

    )
}