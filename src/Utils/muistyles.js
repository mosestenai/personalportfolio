import { TextField, styled } from "@mui/material";

const muistyles = {
    textinputstyles: {
        marginRight: 5,
        width: "100%",
        marginBottom: 5,
        fontSize: 14,
        fontFamily: "lightfont"
    },
    floatingmodal: {
        backgroundColor: "white",
        marginTop: 5,
        borderRadius: 2,
        padding: 1,
        position: "relative"
    },
    floatingcontainer: {
        backgroundColor: "white",
        marginTop: 5,
        borderRadius: 2,
        padding: 2,
        position: "relative",
    },
    tablecontainerstyle: {
        marginTop: 2,
        maxHeight: "70vh"
    },
    tablestyle: {
        minWidth: "60vw",
        boxShadow: "1px 2px silver"
    },
    tableheadstyle: {
        backgroundColor: 'var(--primarycolor)',
        color: "white"
    },
    tableheadrowstyle: {
        color: "gray",
        fontWeight: "bold",
        whiteSpace: "nowrap"
    },
    tableresultsrowstyle: {
        color: 'var(--primarycolor)',
        fontWeight: "bolder"
    },
    tablecelltyle: {
        fontSize: 13,
        whiteSpace: "nowrap"
    },
    ovalbutton: {
        borderRadius: 10,
        height: 40,
        fontFamily: "lightfont"
    },
    skillsbox: {
        border: '1px solid silver',
        borderRadius: 3,
        padding: 1,
        mt: 2
    },
    onboardingleft: {
        height: "100%",
        background: `linear-gradient(to left, ${'var(--primarycolor)'}, #57a2df)`,
        padding: 6,
        display: { xs: "none", lg: "block" }
    },
    onboardingright: {
        height: "100%",
        background: `linear-gradient(to right, ${'var(--primarycolor)'}, #57a2df)`,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        display: { xs: "none", lg: "flex", },
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    onboardingleft_box1: { xs: "100%", lg: "60%" },
    onboardingleft_box2: { xs: "98%", lg: "90%" },
    twolinetextlimit: {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    noscrollbar: {
        overflowY: "scroll",
        '&::-webkit-scrollbar': {
            display: 'none' // Hide the scroll bar in WebKit browsers
        },
        msOverflowStyle: 'none',  // Hide the scroll bar in Internet Explorer and Edge
        scrollbarWidth: 'none'
    },
    styledScrollbar: {
        overflowY: "scroll",
        '&::-webkit-scrollbar': {
            width: '6px', // Width of the scrollbar
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'silver', // Color of the scrollbar thumb
            borderRadius: '10px', // Round edges
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555', // Color on hover
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1', // Background of the scrollbar track
        },
    }
}


// mui text search bar input
export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        maxHeight: 45,
        borderRadius: 10,
        "& fieldset": {
            border: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        "&:hover fieldset": {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        "&.Mui-focused fieldset": {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
}));



export default muistyles