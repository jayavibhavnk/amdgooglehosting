import React, { useState } from "react";
import Virabhadrasana from "../components/virabhadrasana";
import Trikonasana from "../components/trikonasana";
import { Link } from "react-router-dom";
import { Button, Select, MenuItem } from "@mui/material/";
import FormControl from "@mui/material/FormControl";

const styles = {
    back: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 1700,
        right: 0,
        top: 850,
    },
    selectBox: {
        position: "absolute",
        marginRight: "auto",
        marginLeft: "auto",
        left: 1000,
        right: 0,
        top: 200,
        textAlign: "center",
        width: 300,
        height: 30,
    },
};

const Yoga = () => {
    const [yoga, setYoga] = useState("virabhadrasana");

    function selectYoga() {
        if (yoga === "virabhadrasana") {
            return <Virabhadrasana />;
        } else if (yoga === "trikonasana") {
            return <Trikonasana />;
        }
        return null;
    }

    return (
        <div>
            <div style={styles.selectBox}>
                <FormControl variant="outlined" size="large" style={{ minWidth: 300 }}>
                    <Select
                        value={yoga}
                        onChange={(event) => {
                            const selectedYoga = event.target.value;
                            setYoga(selectedYoga);
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Yoga Pose
                        </MenuItem>
                        <MenuItem value="virabhadrasana">Virabhadrasana</MenuItem>
                        <MenuItem value="trikonasana">Trikonasana</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {selectYoga()}

            <div style={styles.back}>
                <Link to="/">
                    <Button size="large" variant="contained" color="primary">
                        Back
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Yoga;
