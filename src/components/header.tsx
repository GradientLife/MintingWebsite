import { useEthers } from "@usedapp/core";
import { Button, makeStyles } from "@material-ui/core"
import React from 'react';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: ".5vw",
        display: "flex",
        justifyContent: "flex-end",
        gap: '1vw',
    },
    root: {
        background: 'rgb(255, 0, 0);',
        border: 0,
        borderRadius: '.2vw',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '3vw',
        padding: '0 2vw',
        fontSize: '1vw',
        width: '10vw',
        fontFamily: 'Kaushan Script, cursive'
    }
}))

export const Header = () => {
    const classes = useStyles()
    const { account, activateBrowserWallet, deactivate, chainId } = useEthers()

    const isConnected = account !== undefined && chainId == 42
    return (
        <div className={classes.container}>
            {isConnected ?
                (
                    <Button className={classes.root} variant="contained" onClick={deactivate}> Disconnect </Button>
                ) : (
                    <Button className={classes.root} variant="contained" onClick={() => activateBrowserWallet()}> Connect </Button>
                )
            }
        </div>
    )
}