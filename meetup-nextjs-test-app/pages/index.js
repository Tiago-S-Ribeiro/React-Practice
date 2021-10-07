import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
//import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     //send http request and fetch Data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])

    return(
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Check up meetings occuring all over your city and organize your own so you can meet new people!"/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    );
}

//this function will not during the build process, but instead, always on the server after deployment
//when to use getServerSideProps:
// -> when I need access to the concrete req object (because in getStaticProps I don't have access to req and res objects)
// -> if I have data that changes multiple times, every second
// export async function getServerSideProps(context)  {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://Tiago:.,mnbvcxz.,mdb.,@reacttestcluster.bcro9.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();
    
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        //revalidate, unlocks a feature called Incremental static generation
        revalidate: 10 //number of seconds Nextjs waits until it regenerates this page for an incoming request
        //this guarantees that the data is NEVER older than 10 seconds.
    };
};

export default HomePage;