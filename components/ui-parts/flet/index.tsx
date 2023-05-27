import { useContext, useEffect, useMemo } from 'react';
import styled from "styled-components"
import { useState, useCallback } from 'react'
import PressMark from '../pressMark'
import {PressFletMarksContext} from "../../context/PressFletMarksContext";

type FletProps = {
    fletNo: number
    stringsNo: number
}

const OpenFlet = 0
const FirstFlet = 1
const FourthStrings = 4
const labelMarked = [3,5,7,9,12,15,18,21,24]

const OpenFletBack = styled.div`
    background-color:gray;
    text-align:center;
    vertical-align:middle;
    padding:1rem 0.5rem;
    position:relative;
`
const FletBack = styled.div`
    background-color:black;
    text-align:center;
    width:4rem;
    height:2rem;
    vertical-align:middle;
    border-right: 0.2rem solid gray;
    position:relative;
`

const Strigs = styled.span`
    background:linear-gradient(#ffe298, #564101);
    width:4rem;
    height:0.3rem;
    display: inline-block;
`

const CircleLabel = styled.span`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-color:#d7d7d7;
    border-radius: 50%;
    position:absolute;
    top: -0.7rem;
    left:1.4rem;
    opacity:0.5;
`

// フレット
const Flet = (props:FletProps) => {
    const { fletNo, stringsNo } = props
    const [pressed, setPressed] = useState(false)
    const {pressFlets, setPressFlets} = useContext(PressFletMarksContext)
    const onClick = () => {
        setPressed(!pressed)
        console.log(`${fletNo}flet ${stringsNo}strings pressed!!`)

        if (!pressed){
            pressFlets.push({
                fletNo: fletNo,
                stringsNo: stringsNo
            })
        }else{
            let removeIdx : number | null = null
            for (let i = 0; i < pressFlets.length; i++){
                if (pressFlets[i].fletNo == fletNo && pressFlets[i].stringsNo == stringsNo){
                    removeIdx = i;
                    break
                }
            }

            if (removeIdx){
                pressFlets.splice(removeIdx, 1);
            }
        }
        setPressFlets(pressFlets)
    }

    console.log("Flet display!!")

    if (fletNo == OpenFlet) {
        return (
            <OpenFletBack onClick={onClick}>
            <PressMark pressed={pressed} fletNo={fletNo}/>
            </OpenFletBack>
        )
    }

    if (stringsNo == FourthStrings && labelMarked.indexOf(fletNo) > -1) {
        return (
            <FletBack onClick={onClick}>
            <Strigs />
            <CircleLabel />
            <PressMark pressed={pressed} fletNo={fletNo}/>
            </FletBack>
        )
    }

    return(
        <FletBack onClick={onClick}>
        <Strigs />
        <PressMark pressed={pressed} fletNo={fletNo}/>
        </FletBack>
    )
}

export default Flet