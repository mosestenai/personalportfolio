import { BugReportOutlined, Clear, DriveFileRenameOutline, SendOutlined, StarBorder } from "@mui/icons-material"
import { useState } from "react";
import { Box, Button, Modal, Container, Typography, Stack, IconButton } from "@mui/material"

const Feedbackbutton = () => {
    const [showmodal, setshowmodal] = useState(false);

    const [feedback, setfeedback] = useState('');


    return (
        <Box>
            <Modal
                open={showmodal}
                onClose={() => setshowmodal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth={"sm"} sx={{ backgroundColor: 'white', mt: 10, borderRadius: 4 }}>
                    <Stack mt={5} flexDirection={"row"} justifyContent={"right"} alignItems={'flex-end'}>
                        <IconButton onClick={() => setshowmodal(false)}><Clear /></IconButton>
                    </Stack>
                    <Typography fontSize={30} textAlign={"center"} fontFamily={"boldfont"}>Send us your</Typography>
                    <Typography fontSize={30} color={"primary"} textAlign={"center"}>feedback</Typography>
                    <Box mt={2}>
                        <Stack padding={2} width={'90%'} sx={{ cursor: "pointer", borderRadius: 2, border: feedback === 'bug' && "1px solid blue" }} onClick={() => setfeedback('bug')} flexDirection={"row"} alignItems={"center"}>
                            <IconButton><BugReportOutlined color="primary" /></IconButton>
                            <Box ml={2}>
                                <Typography fontFamily={"boldfont"}>Report a Bug</Typography>
                                <Typography>Let us know What’s broken</Typography>
                            </Box>
                        </Stack>
                        <Stack mt={2} padding={2} width={'90%'} sx={{ cursor: "pointer", borderRadius: 2, border: feedback === 'improve' && "1px solid blue" }} onClick={() => setfeedback('improve')} flexDirection={"row"} alignItems={"center"}>
                            <IconButton><StarBorder color="primary" /></IconButton>
                            <Box ml={2}>
                                <Typography fontFamily={"boldfont"}>Feature request</Typography>
                                <Typography>Tell us how we can improve</Typography>
                            </Box>
                        </Stack>
                        <Stack mt={2} padding={2} width={'90%'} sx={{ cursor: "pointer", borderRadius: 2, border: feedback === 'general' && "1px solid blue" }} onClick={() => setfeedback('general')} flexDirection={"row"} alignItems={"center"}>
                            <IconButton><DriveFileRenameOutline color="primary" /></IconButton>
                            <Box ml={2}>
                                <Typography fontFamily={"boldfont"}>General feedback</Typography>
                                <Typography>Give general feedback abou this page</Typography>
                            </Box>
                        </Stack>
                        <br /><br />
                        <Button fullWidth variant="contained" disabled={!feedback}>Continue</Button>
                        <br /><br />
                    </Box>
                </Container>
            </Modal>
            <Button onClick={() => setshowmodal(true)} color="primary" endIcon={<SendOutlined />} sx={{ color: "white", borderRadius: 10, height: 50, width: 120 }} variant="contained">Feedback</Button>
        </Box>
    )
}
export default Feedbackbutton