import styled from "styled-components"
import Flet from '../flet'

const FletCout = 24

type FletStringsProp = {
    stringsNo: number
}

const FletStringsStyle = styled.div`
    display: flex
`

// 1弦あたりのフレット
const FletStrings = (props:FletStringsProp) => {
    const { stringsNo } = props
    const flets = []
    for (let i = 0; i <= FletCout; i++) {
        flets.push(<Flet stringsNo={stringsNo} fletNo={i} />)
    }

    console.log("FletStrings display!!")
    return (
        <FletStringsStyle>
        {flets}
        </FletStringsStyle>
    )
}

export default FletStrings;