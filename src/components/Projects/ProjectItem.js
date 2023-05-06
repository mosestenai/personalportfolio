import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector } from "react-redux";
import { Adb, BrowseGallery, Image, LanguageOutlined, PhoneAndroid, Web } from "@mui/icons-material";
import { Global } from "@emotion/react";
import { Button } from "@mui/material";

const ProjectItem = ({ project,onshowimages }) => {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    let description = project.description;
    if (description === '') {
        description = " project description";
    }
    if (description.length > 120) {
        description = description.substr(0, 120);
        description = description + " ... ";
    }

    return (
        <Card className={classes.projectItem}>
            <h2 style={{ color: uiColor }}>{project.projectTitle}</h2>
            <p className={classes.description}>{description} </p>

            <Button onClick={() => onshowimages(project.imagesarray, project.type)} variant="outlined" startIcon={<Image />}>Gallery</Button>
            <div className={classes.controls}>
                <div className={classes.projectLink}>
                    {project.sourceLink &&
                        <a target="_blank" rel="noreferrer" href={project.sourceLink} style={{ color: nonThemeColor }}>
                            {project.type === "w" ? <LanguageOutlined fontSize="large" /> : <PhoneAndroid />}
                            Link
                        </a>}
                </div>
                <p className={classes.dateUpdated} style={{ color: nonThemeColor }}>Last Updated On : {project.lastUpdated}</p>
            </div>

        </Card>
    )
};
export default ProjectItem;