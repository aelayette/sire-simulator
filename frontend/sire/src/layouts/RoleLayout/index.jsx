import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import "./RoleLayout.css";

export default function RoleLayout({ children }) {
    const [adminBtn, traineeBtn] = React.Children.toArray(children);

    return (
        <div>
            <div>
                <h1>S.I.R.E.</h1>
                <h2>Select Your Role</h2>
            </div>
            <Grid container spacing={0} className="role-container">
                {/* <Grid item xs={12} sm={6}> */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <div className="role-left">
                        <div className="left-content">
                            {adminBtn}
                        </div>
                    </div>
                </Grid>

                {/* <Grid item xs={12} sm={6}> */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <div className="role-right">
                        <div className="left-content">
                            {traineeBtn}
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}