import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";
import { useState } from "react";
import Mobileimages from "../../Utils/projectsimages";
import { Container, Modal } from "@mui/material";
import { Shuffle } from "../../Utils/functions";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;

    const [imagetype, setimagetype] = useState('');
    const [showimages, setshowimages] = useState(false);

    const [imagesarray, setimagesarray] = useState([]);

    const onshowimages = (images, type) => {
        setimagesarray(images)
        setimagetype(type)
        setshowimages(true)
    }
    return (
        <React.Fragment>
            <Modal
                open={showimages}
                onClose={() => setshowimages(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="lg" >
                    <Mobileimages imagesarray={imagesarray} type={imagetype} />
                </Container>
            </Modal>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1><span style={{ color: nonThemeColor }}>My Recent </span><span style={{ color: uiColor }}>Works</span></h1>
                    <div>My works makes use of vast variety of latest technology tools. My best experience is to create Mobile apps ,Web applications and Rest Api's</div>
                </section>
            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>Projects</h1>
            <div className={styles.projectList}>
                {Shuffle(projects).map((item, index) => {
                    return <ProjectItem key={index} onshowimages={onshowimages} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More Projects</Button>
                </a>
            </div>
        </React.Fragment>
    )
};

export default Projects;