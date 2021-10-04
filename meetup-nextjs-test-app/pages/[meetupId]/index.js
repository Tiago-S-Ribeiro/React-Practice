import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail 
            image="https://lifecooler.com/files/registos/imagens/306117/266351.jpg"
            title="first meetup"
            address="whatever"
            description="description"
        />
    );
}

export default MeetupDetails;