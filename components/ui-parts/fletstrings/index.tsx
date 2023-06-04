import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { STRING_COUNT, FIRST_FLET } from 'components/const/const'
import { QuizContext } from 'components/context/QuizContext'
import { AnswerResult } from 'components/models/AnswerResult'
import { StringsFlets } from 'components/models/StringsFlets'
import Flet from '../flet'
import { FLET_COUNT } from 'components/const/const'

type FletStringsProp = {
    stringsNo: number
}

const FletStringsStyle = styled.div`
    display: flex;
`

// 1弦あたりのフレット
const FletStrings = (props: FletStringsProp) => {
    const { answerResult, setAnswerResult } = useContext(QuizContext)
    const { stringsNo } = props
    const flets: JSX.Element[] = []
    if (answerResult.Quiz[answerResult.Now]) {
        return <FletStringsStyle>{flets}</FletStringsStyle>
    }

    console.log(answerResult.Quiz)
    for (
        let i = GetMinFlet(answerResult.Quiz[answerResult.Now]);
        i <= GetMaxFlet(answerResult.Quiz[answerResult.Now]) + 2;
        i++
    ) {
        flets.push(<Flet stringsNo={stringsNo} fletNo={i} key={i} />)
    }

    console.log('FletStrings display!!')
    return <FletStringsStyle>{flets}</FletStringsStyle>
}

const GetMaxFlet = (stringsFlets: StringsFlets) => {
    let max = 0
    console.log(stringsFlets)
    /*    for (const key of Object.keys(stringsFlets)) {
        if (max < stringsFlets[key]) {
            max = stringsFlets[key]
        }
    }
*/
    return max
}

const GetMinFlet = (stringsFlets: StringsFlets) => {
    let min = 0
    console.log(stringsFlets)
    /*
    for (const key of Object.keys(stringsFlets)) {
        if (Number(key) == FIRST_FLET) {
            min = stringsFlets[key]
            continue
        }
        if (min > stringsFlets[key]) {
            min = stringsFlets[key]
        }
    }*/
    return min
}

export default FletStrings
