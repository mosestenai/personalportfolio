import React from "react"
import { ArrowBack } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"


//back button
export const Backbutton = ({ onClick, text }) => {
    return (
        <IconButton color="primary" onClick={onClick} ><ArrowBack /></IconButton>
    )
}



