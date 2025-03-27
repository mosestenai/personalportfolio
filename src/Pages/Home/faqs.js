import { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { site_faqs } from "../../Utils/arrays";
import { lightprimaryColor, secondaryColor } from "../../Utils/colors";
import { Add, Remove } from "@mui/icons-material";

const FaqsSection = () => {
    const [idinplay, setidinplay] = useState(null);

    const handleToggle = (id) => {
        setidinplay((prev) => (prev === id ? null : id));
    };

    return (
        <Box>
            {site_faqs.map((faq) => {
                const is_active = idinplay === faq.id;

                return (
                    <Box
                        key={faq.id}
                        sx={{ cursor: "pointer" }}
                        mt={2}
                        mb={2}
                        borderRadius={5}
                        bgcolor={is_active ? secondaryColor : lightprimaryColor}
                        padding={2}
                        onClick={() => handleToggle(faq.id)}
                    >
                        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                            <Typography
                                fontFamily="boldfont"
                                fontSize={{ lg: 20, xs: 15 }}
                                width="70%"
                                color={is_active ? "black" : "white"}
                            >
                                {faq.question}
                            </Typography>
                            <IconButton>
                                {is_active ? <Remove /> : <Add sx={{ color: "white" }} />}
                            </IconButton>
                        </Stack>
                        {is_active && <Typography mt={1} mb={2}>{faq.answer}</Typography>}
                    </Box>
                );
            })}
        </Box>
    );
};

export default FaqsSection;
