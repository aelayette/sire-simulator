
import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import About from "../../assets/images/About.png";
import "./HomeLayout.css";

export default function HomeLayout({ children }) {
    const [loginBtn, carousel] = React.Children.toArray(children);

    return (
        <Grid container spacing={0} className="home-container">
            {/* <Grid item xs={12} sm={3}> */}
            <Grid size={{ xs: 12, sm: 3 }}>
                <div className="home-left">
                    <div className="left-content">
                        <img src={About} alt="About Slide" />
                        {loginBtn}

                        <div className="about-section">
                            <h2>About S.I.R.E.</h2>
                            <hr />
                            <p>
                                The Simulated Incident Response Simulator (S.I.R.E.) is a full stack JavaScript application designed to help Administrators guide Trainees through realistic emergency scenarios in an interactive environment.
                                As of now, these incidents include Fire Incident, Active Threat, Medical Emergency, and Structural Failure.
                                One Administrator will be able to create a session with up to 10 Trainees.
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Grid>

            {/* <Grid item xs={12} sm={9}> */}
            <Grid size={{ xs: 12, sm: 9 }}>
                <div className="home-right">
                    {carousel}
                </div>
            </Grid>
        </Grid>
    );
}