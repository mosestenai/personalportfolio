import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "./../asset/lulogo.jpg";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"
import { useSelector } from "react-redux";
import { workhistory } from "../../Data/workhistorydata";


function Degree(props) {

    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Work History
            </h1>
            {
                workhistory.map((val, key) => {

                    return (
                        <div className={classes.degreeCard} key={key}>
                            <div className={`${classes.degreeImage} centered`} >
                                <img src={val.logosrc} alt="degree" srcset="" />
                            </div>
                            <div className={classes.degreeWrapper}>
                                <div className={classes.degreeInfo}>
                                    <h3 style={{ color: nonThemeColor }}>{val.year}</h3>
                                    <h1 style={{ color: uiColor }}>{val.position}</h1>
                                    <h2 style={{ color: nonThemeColor }}>{val.companyname}</h2>
                                </div>
                                <ul className={classes.details}>
                                    <li >{val.description}</li>
                                    <li >{val.languagesused}</li>
                                </ul>

                                <ul className={classes.details}>
                                    <text>Projects Links</text>
                                    {val.links.map((item, index) =>
                                        <li key={index}><a href={val.item}>{item}</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            <h1 style={{ color: nonThemeColor }}>
                Degree Pursued
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{ borderColor: uiColor }}>
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Degree;