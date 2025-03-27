import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from "@mui/material"
import Draggable from "react-draggable";


function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const Popupdialog = ({ oncancel, onsuccess, toptext, question, successtext, canceltext, uncancellable }) => {

    return (
        <Dialog
            open={true}
            onClose={() => !uncancellable ? oncancel() : {}}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle fontFamily={"boldfont"} style={{ cursor: 'move' }} id="draggable-dialog-title">
                {toptext}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {question}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => oncancel()}>
                    {canceltext || 'Cancel'}
                </Button>
                <Button onClick={() => onsuccess()}>{successtext}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popupdialog