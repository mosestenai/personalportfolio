import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { phoneNumbers, SITE_NAME } from "./defaults";
import CryptoJS from 'crypto-js';
import { Fetchassetsurl } from "./urls";
import { FirstPageOutlined, KeyboardArrowLeft, KeyboardArrowRight, LastPageOutlined } from "@mui/icons-material";


export function displaydate(timestamp) {
    const date = new Date(timestamp);

    // Format the date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    // Return the formatted time and date
    return `${day}-${month}-${year}`;
}

// Encrypt and store data in localStorage
export function setToStore(name, data, encrypt) {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }
    // Encrypt the data before storing
    const encryptedData = CryptoJS.AES.encrypt(data, process.env.REACT_APP_REDUX_SECRET_KEY).toString();
    localStorage.setItem(`${SITE_NAME}_PLATFORM_${name}`, encrypt ? encryptedData : data);
}

// Decrypt and retrieve data from localStorage
export function getFromStore(name, is_encrypted) {
    let encryptedData = localStorage.getItem(`${SITE_NAME}_PLATFORM_${name}`);
    if (!encryptedData) return null;

    try {
        // Decrypt the data
        const bytes = CryptoJS.AES.decrypt(encryptedData, process.env.REACT_APP_REDUX_SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        // Attempt to parse the decrypted data as JSON
        return JSON.parse(is_encrypted ? decryptedData : encryptedData);
    } catch (error) {
        // If parsing fails, return the raw decrypted data
        return null;
    }
}

// Remove data from localStorage
export function removeFromStore(name) {
    localStorage.removeItem(`${SITE_NAME}_PLATFORM_${name}`);
}

//Mui tabs scroll
export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3, pb: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export function imgCheck(img, alt) {
    return new Promise((resolve, reject) => {
        img = encodeURI(img);
        let image = new Image();
        image.src = img;
        image.onload = function (e) {
            resolve(img);
        };
        image.onerror = function (e) {
            resolve(alt);
        };
    });
}


export function convertdateTotime(timestamp) {
    const date = new Date(timestamp);

    // Format the date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    // Format the time components
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Return the formatted time and date
    return `${hours}:${minutes} ${ampm} ${day}-${month}-${year}`;
}


export function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

//currency seperator
export const currencyseperator = (amount) => {
    return amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0.00;
}


export function formatEventDate(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateString);

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day} ${month}`;
}

//copy text to clip board
export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {

    }).catch(err => {

    });
}

//shuffle an array
export const Shufflearray = (array) => {
    if (Array.isArray(array)) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    } else {
        return [];
    }

}


export function openurl(url, redirect) {
    if (redirect) {
        window.location.href = url
    } else {
        window.open(url, '_blank');
    }
}


export function capitalizeName(name) {
    if (!name) return ''; // Handle empty or undefined input
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}



//image
export const imageurl = (image_name) => {
    if (image_name) {
        return `${Fetchassetsurl}${image_name}`
    }
}



export function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageOutlined /> : <FirstPageOutlined />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageOutlined /> : <LastPageOutlined />}
            </IconButton>
        </Box>
    );
}

//close table menu
export const handleMenuItemClick = (popupState, action) => {
    action();
    popupState.close(); // Close the menu
};

//return last item 
export const lastItem = (array) => {
    if (Array.isArray(array)) {
        const arraylen = array.length
        if (arraylen > 1) {
            return array[arraylen - 1]
        } else {
            return array[0]
        }
    }
}

//check number
export const checknumber = (number) => {
    if (number % 2 === 0) {
        return false
    }
    else {
        return true
    }
}


//sort array
export const sortby = (array, fieldname, criteria, type) => {
    array.sort(function (a, b) {
        const valA = a[fieldname] ?? ''; // Use empty string if fieldname is null or undefined
        const valB = b[fieldname] ?? '';

        if (type === 'int') {
            const numA = parseInt(valA) || 0; // Convert to integer or fallback to 0
            const numB = parseInt(valB) || 0;

            if (criteria === 'asc') {
                return numA - numB;
            } else if (criteria === 'desc') {
                return numB - numA;
            }
        } else {
            if (criteria === 'asc') {
                return valA.localeCompare(valB);
            } else if (criteria === 'desc') {
                return valB.localeCompare(valA);
            }
        }
        return 0;
    });
    return array;
};


export const navigateto = (path) => {
    document.getElementById(path).scrollIntoView({ behavior: 'smooth' });
}


//open  whatsapp
export const gottowhatsapp = (tempmessage) => {
    const message = tempmessage ? tempmessage : "Software Development Inquiry";
    const encodedMessage = encodeURIComponent(message); 
    const url = `https://wa.me/${phoneNumbers[0]}?text=${encodedMessage}`;

    window.open(url, "_blank");
};


//telephone link
export const initiateCall = () => {
    document.location.href = "tel:" + phoneNumbers[0];
}

//initiate mail
export function initiateEmail(email) {
    const emailAddress = email;
    const subject = 'Software Development';
    const body = 'Hi Moses ';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-filled email draft
    window.location.href = mailtoLink;
}