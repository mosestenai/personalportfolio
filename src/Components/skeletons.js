import { Box, Skeleton } from "@mui/material"


export const Normalrectangleskeleton = () => {

    return (
        <div style={{ marginLeft: 2.5, marginRight: 2.5 }}>
            <Skeleton variant="rectangular" sx={{ height: 50, width: "100%", marginBottom: 1 }} />
            <Skeleton variant="rectangular" sx={{ height: 20, width: "100%", marginBottom: 1 }} />
            <Skeleton variant="rectangular" sx={{ height: 10, width: 80, marginBottom: 1 }} />
            <Skeleton variant="rectangular" sx={{ height: 10, width: 100, borderRadius: 1, marginBottom: 2 }} />
        </div>
    )
}


//basic table skeletons
export const Basictableskeleton = () => {
    return (
        <div style={{ display: "flex", marginTop: 10, marginBottom: 10, justifyContent: "space-between", padding: 5 }}>
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
            <Skeleton style={{ height: 20, width: 100 }} />
        </div>
    )
}

export const Eventskeleton = () => {

    return (
        <Box height={340} maxHeight={340} sx={{ backgroundColor: "white", padding: 2, cursor: "pointer" }} margin={"1%"} width={{
            lg: "23%",
            xs: "98%"
        }} >
            <Skeleton sx={{ height: "80%", width: "100%" }} />
            <Skeleton sx={{ height: "18%", width: "100%" }} />
        </Box>
    )
}

export const Votingskeleton = () => {

    return (
        <Box sx={{ backgroundColor: "white", padding: 2, cursor: "pointer" }} margin={"1%"} width={{
            lg: "23%",
            xs: "98%"
        }} >
            <Skeleton style={{ height: 20, width: "100%" }} />
            <Skeleton style={{ height: 200, width: "100%" }} />
        </Box>
    )
}


