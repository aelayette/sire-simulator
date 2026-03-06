import Grid from "@mui/material/Grid";
import Footer from "../../components/Footer";
import "./FormLayout.css";

export default function FormLayout({ children }) {
    return (
        <Grid container spacing={0} className="form-container">
            {/* <Grid item xs={12} sm={4}> */}
            <Grid size={{ xs: 12, sm: 4 }}>
                <div className="form-left">
                    <div className="left-content">
                        <h1>S.I.R.E.</h1>
                        <p className="subtitle">Simulated Incident Response Environment</p>
                    </div>
                </div>
            </Grid>

            {/* <Grid item xs={12} sm={8}> */}
            <Grid size={{ xs: 12, sm: 8 }}>
                <div className="form-right">
                    <div className="form-content">
                        {children}
                    </div>
                </div>
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Footer />
            </Grid>
        </Grid>
    );
}