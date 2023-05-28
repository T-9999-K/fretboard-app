import styled from "styled-components"
import { useState, useCallback } from 'react'
import FletStrings from '../fletstrings'

const StringsCount = 6;

// フレットボード
const FletBoard = () => {
    const fletStringsList = []
    for (let i = 1; i <= StringsCount; i++) {
        fletStringsList.push(<FletStrings stringsNo={i} key={i} />)
    }

    console.log("FletBoard display!!")
    return (
        <>
        {fletStringsList}
        </>
    )
}

export default FletBoard;