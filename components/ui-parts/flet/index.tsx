import styled from "styled-components"
import { useState, useCallback } from 'react'
import PressMark from '../pressMark'

type FletProps = {
    fletNo: number
    stringsNo: number
}

const FirstFlet = 1
const FourthStrings = 4
const labelMarked = [3,5,7,9,12,15,18,21,24]
const FletFirstBack = styled.div`
    background-color:black;
    text-align:center;
    width:4rem;
    height:2rem;
    vertical-align:middle;
    border-left: 0.2rem solid gray;
    border-right: 0.2rem solid gray;
    position:relative;
    afterContent:'aaaaa'
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
    background-color:gray;
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
    opacity:0.7
`

// フレット
const Flet = (props:FletProps) => {
    const { fletNo, stringsNo } = props
    const [pressed, setPressed] = useState(false)
    const onClick = () => {
        setPressed(!pressed)
        console.log(`${fletNo}flet ${stringsNo}strings pressed!!`)
    }

    console.log("Flet display!!")

    if (fletNo == FirstFlet) {
        return (
            <FletFirstBack onClick={onClick}>
            <Strigs />
            <PressMark pressed={pressed}/>
            </FletFirstBack>
        )
    }

    if (stringsNo == FourthStrings && labelMarked.indexOf(fletNo) > -1) {
        return (
            <FletBack onClick={onClick}>
            <Strigs />
            <CircleLabel />
            <PressMark pressed={pressed}/>
            </FletBack>
        )
    }

    return(
        <FletBack onClick={onClick}>
        <Strigs />
        <PressMark pressed={pressed}/>
        </FletBack>
    )
}

export default Flet