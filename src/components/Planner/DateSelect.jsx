import { useState, useContext } from "react";
import DateContext from "../../context/date";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import calendar from "../../assets/calendar.png";
import "./Panel.css";

const style_box = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    fontWeight: "bold",
    borderRadius: 4,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function DateSelect({ handleDate, updatedDate }) {
    const { date, setDate } = useContext(DateContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDateChange = (newDate) => {
        handleDate(newDate);
        setOpen(false);
    };

    // console.log(dayjs(date).format("dddd, MMMM D"));
    return (
        <div>
            <div className="font-[800] lg:text-3xl sm:text-2xl text-2xl w-full text-white flex flex-row gap-2 justify-center items-center">
                <div className="cursor-pointer mr-2">{dayjs(date).format("MMMM")}</div>
                <div data-type="date" className="interactable py-4 cursor-pointer justify-center items-center relative flex" onClick={handleOpen} style={{ width: "50px", height: "50px" }}>
                    <img className="absolute top-0 left-0 right-0 bottom-0 scale-[1.2]" alt="" src={calendar} style={{ width: "100%", height: "100%" }} />
                    <p className="absolute top-[6px] left-0 text-lg flex justify-center items-center w-full h-full">{dayjs(date).format("DD")}</p>
                </div>
                {/* <div className=" cursor-pointer sm:ml-auto">{dayjs(date).format("dddd")}.</div> */}
            </div>
            <Modal className="" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className="card-box overflow-y-hidden" sx={style_box}>
                    <Typography sx={{ fontWeight: "bold", fontFamily: "Rubik" }} color="black" id="modal-modal-title" variant="h4" component="h2">
                        Choose any day
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                            sx={{}}
                            defaultValue={date}
                            placeholder="MM/DD/YYYY"
                            format={"MM/DD/YYYY"}
                            value={date}
                            view="day"
                            onAccept={handleDateChange}
                            onChange={(newDate) => {
                                setDate(newDate);
                            }}
                            onClose={handleClose}
                            orientation="portrait"
                        />
                    </LocalizationProvider>
                </Box>
            </Modal>
        </div>
    );
}
export default DateSelect;
