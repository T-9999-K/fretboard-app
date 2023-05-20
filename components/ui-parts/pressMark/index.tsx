import styled from "styled-components"

type PressMarkProps = {
    pressed: boolean
}

const CircleOn = styled.span`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-color:#d7d7d7;
    border-radius: 50%;
    position:absolute;
    top: 0.2rem;
    left:1.4rem;
`

const CircleOff = styled.span`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-color:#d7d7d7;
    border-radius: 50%;
    position:absolute;
    top: 0.2rem;
    left:1.4rem;
    visibility:hidden;
`

// 押弦したマーク
const PressMark = (props: PressMarkProps) => {
    const { pressed } = props
    console.log("PressMark display!!")
    return (
        <>
        { pressed ? <CircleOn /> : <CircleOff />}
        </>
    )
}

export default PressMark;