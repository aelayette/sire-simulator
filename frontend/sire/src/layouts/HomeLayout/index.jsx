
import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import "./HomeLayout.css";

export default function HomeLayout({ children }) {
    const [loginBtn, signupBtn, carousel] = React.Children.toArray(children);

    return (
        <Grid container spacing={0} className="home-container">
            {/* <Grid item xs={12} sm={3}> */}
            <Grid size={{ xs: 12, sm: 3 }}>
                <div className="home-left">
                    <div className="left-content">
                        <h1>S.I.R.E.</h1>
                        {loginBtn}
                        {signupBtn}

                        <div className="about-section">
                            <h2>About S.I.R.E.</h2>
                            <p>
                                The Simulated Incident Response Simulator (S.I.R.E.) is a full-stack JavaScript 
                                application dedicated to enabling Administrators to go through specific incident scenarios with their Trainees.
                                As of now, one Administrator will be able to create a session with up to 10 Trainees.
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