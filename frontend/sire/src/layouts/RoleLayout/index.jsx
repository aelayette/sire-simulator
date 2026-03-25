/** 
 * Author: Leon Wasiliew 
 * Last Update: 2026-03-21
 * Description: Layout component used for the Role screen, allowing users to choose
 * between Administrator and Trainee roles. Displays two selectable sections
 * in a responsive split layout with a header and footer.
 */

import React from "react";
import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import About from "../../assets/images/About.png";
import "./RoleLayout.css";

/** Function that returns the RoleLayout component for selecting user roles. */
export default function RoleLayout({ children }) {
    const [adminBtn, traineeBtn] = React.Children.toArray(children);

    return (
        <div>
            {/** Role selection layout. */}
            <Grid container spacing={0} className="role-container">

                {/** Left section (). */}
                <Grid size={{ xs: 12, sm: 3 }}>
                    {/** Header section. */}
                    <div className="role-left">
                        <div className="left-content">
                            <img src={About} alt="S.I.R.E. Logo" />
                            <h2>Select Your Role</h2>
                        </div>
                    </div>
                </Grid>

                {/** Right section (Administrator & Trainee cards). */}
                <Grid size={{ xs: 12, sm: 9 }}>
                    <div className="role-right">
                        <div className="right-content">
                            <div className="admin-container">
                                <div key={1} className="admin-card" onClick={() => to="/admin-dashboard"}></div>
                                <h2>Admin</h2>
                                <p>Be the one to create and manage the scenarios...</p>
                                <hr />
                                {adminBtn}
                            </div>
                            <div className="trainee-card">
                                <h2>Trainee</h2>
                                <p>Be the one to participate in the scenarios...</p>
                                <hr />
                                {traineeBtn}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/** Footer component. */}
            <Footer />
        </div>
    );
}