import Grid from "@mui/material/Grid";
import "./HomeLayout.css";

export default function HomeLayout({ children }) {
    const [loginBtn, signupBtn, carousel] = children;

    return (
        <Grid container spacing={0} className="home-container">
            {/* <Grid item xs={12} sm={3}> */}
            <Grid size={{ xs: 12, sm: 3 }}>
                <div className="home-left">
                    <h1>S.I.R.E.</h1>
                    {loginBtn}
                    {signupBtn}
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