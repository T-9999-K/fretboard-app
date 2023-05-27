import styled from "styled-components"

const OpenFlet = 0
type PressMarkProps = {
    fletNo: number
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
    z-index:1
`

const OpenCircleOn = styled.span`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-color:#d7d7d7;
    border-radius: 50%;
    position:absolute;
    top: 0.2rem;
    left:0.2rem;
    z-index:1
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
    const { pressed, fletNo } = props
    if (fletNo == OpenFlet){
        return (
            <>
            {pressed ? <OpenCircleOn /> : <CircleOff />}
            </>
        )
    }

    return (
        <>
        {pressed ? <CircleOn /> : <CircleOff />}
        </>
    )
}

export default PressMark;