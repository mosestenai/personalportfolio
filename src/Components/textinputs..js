import { Autocomplete, Box, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import Select from 'react-select';
import muistyles from "../Utils/muistyles";
import { CheckBox, CheckBoxOutlineBlank, RadioButtonChecked, RadioButtonUnchecked, Search } from "@mui/icons-material";
import { useState } from "react";

export const Customsectiontextinput = ({
    autoFocus, handleKeyDown, marginBottom, rows, fieldname,
    onChange, onEnter, value, placeholder, type, hint, required,
    disabled, inputProps, multiline, autoComplete, width, hintcolor,
    helperText, inputRef, bgColor,borderRadius
}) => {

    // Default KeyDown handler if none is provided
    const defaultHandleKeyDown = (e) => { };

    return (
        <Box sx={{ width: width || '100%' }}>
            {fieldname && (
                <div style={{ fontFamily: "boldfont", marginBottom: marginBottom || 8, fontSize: 13 }}>
                    {fieldname}: <i style={{ fontSize: 12, color: hintcolor || 'gray' }}>{hint}</i>
                </div>
            )}
            <TextField
                required={required}
                id="outlined-basic"
                sx={[
                    {
                        ...muistyles.textinputstyles,
                        backgroundColor: bgColor || "transparent", // Apply background color
                        borderRadius:borderRadius || "4px",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: borderRadius || "4px" // Ensure it affects the outer border
                        }
                    },
                    {
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "#000000",
                        },
                    }
                ]}
                autoFocus={autoFocus}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                InputProps={inputProps}
                inputRef={inputRef}
                multiline={multiline}
                autoComplete={autoComplete}
                variant="outlined"
                size="small"
                value={value}
                rows={rows}
                onKeyDown={handleKeyDown || defaultHandleKeyDown}
                helperText={helperText}
                onChange={(e) => onChange(e.target.value)}
                FormHelperTextProps={{
                    style: { color: 'red' }
                }}
            />
        </Box>
    );
};




export const Customselectinput = ({ fieldname, options, value, onChange, required, disabled, hint, width, name, marginBottom, bgColor }) => {

    return (
        <Box sx={{ width: width || '100%' }}>
            {fieldname && <div style={{ fontFamily: "boldfont", marginBottom: 8, fontSize: 13 }}>{fieldname}: <i style={{ fontSize: 12 }}>{hint}</i></div>}
            <TextField name={name} disabled={disabled} select required={required} id="outlined-basic" sx={{ ...muistyles.textinputstyles, marginBottom: marginBottom, backgroundColor: bgColor || "transparent" }} variant="outlined" size="small" value={value} onChange={(e) => onChange(e.target.value)} >
                {options.map((option, key) => (
                    <MenuItem key={key} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    )
}

export const Customreactselectinput = ({ fieldname, options, value, onChange, required, menuPlacement, isMulti, disabled, hint, width }) => {

    return (
        <Box sx={{ width: width || '100%' }}>
            {fieldname && <div style={{ fontFamily: "boldfont", marginBottom: 8, fontSize: 13 }}>{fieldname}: <i style={{ fontSize: 12 }}>{hint}</i></div>}
            <div style={muistyles.textinputstyles}>
                <Select isDisabled={disabled} value={value} required={required} menuPlacement={menuPlacement} isMulti={isMulti} options={options} onChange={onChange}  ></Select>
            </div>
        </Box>
    )
}

//mui  autocomplete
export const Custommuiautocomplete = ({ fieldname, options, value, onChange, required, isMulti, disabled, hint, width, InputProps }) => {
    const [inputValue, setInputValue] = useState('');

    // Custom filter to only show options after typing
    const filterOptions = (opts, { inputValue }) => {
        if (!inputValue.trim()) return []; // Don't show options if the input is empty
        return opts.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
    };

    return (
        <Box sx={{ width: width || '100%' }}>
            <Autocomplete
                disablePortal={true}
                freeSolo // Allows typing without forcing an immediate selection
                options={options}
                filterOptions={filterOptions}
                fullWidth
                size="small"
                inputValue={inputValue}
                value={value}
                onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
                onChange={(e, newValue) => onChange(newValue)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        sx={[
                            { borderRadius: 10 },
                            {
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor: "#000000",
                                },
                            },
                        ]}
                        required={required}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                }
            />
        </Box>
    );
};

//custom checkbos
export const Customcheckbox = ({ value, onChange, type, size }) => {
    let iconsize = size || "medium"

    let checkedicon = <CheckBox color="primary" fontSize={iconsize} />
    let uncheckedicon = <CheckBoxOutlineBlank fontSize={iconsize} />


    if (type === 'radio') { checkedicon = <RadioButtonChecked fontSize={iconsize} color="primary" /> }
    if (type === 'radio') { uncheckedicon = <RadioButtonUnchecked fontSize={iconsize} /> }

    return (
        <Box onClick={onChange} sx={{ cursor: "pointer" }} display={'flex'} alignItems={"center"}>
            {value ? checkedicon : uncheckedicon}
        </Box>
    )
}




export const CustomUniversalautocomplete = ({ onInputChange, fieldname, options, value, onChange, required, disabled, hint, width, name, marginBottom, isMulti }) => {

    return (
        <Box sx={{ width: width || '100%' }}>
            {fieldname && (
                <div style={{ fontFamily: "boldfont", marginBottom: 8, fontSize: 13 }}>
                    {fieldname}: <i style={{ fontSize: 12 }}>{hint}</i>
                </div>
            )}
            <Autocomplete
                disabled={disabled}
                multiple={isMulti}
                id="autocomplete-select"
                size="small"
                sx={{ fontSize: 13 }}
                // sx={{ ...muistyles.textinputstyles, marginBottom: marginBottom }}
                value={value}
                options={options}
                onInputChange={(e, newInputValue) => onInputChange(newInputValue)}
                onChange={(event, newValue) => onChange(newValue)}
                getOptionLabel={(option) => option?.label || option}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={[
                            { borderRadius: 10 },
                            {
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor: "#000000",
                                },
                            },
                        ]}
                        name={name}
                        required={required}
                        variant="outlined"
                        label={fieldname}
                    />
                )}
                renderOption={(props, option) => (
                    <Typography {...props} fontSize={14}>
                        {option.label}
                    </Typography>
                )}
                isOptionEqualToValue={(option, value) => option === value}
            />
        </Box>
    );
};


