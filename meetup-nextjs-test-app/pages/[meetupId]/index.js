import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from "../../components/meetups/MetupDetail";

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description}/>
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('MONGODB_URL');
    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

//A page is PRE generated during the build process. This means that nextjs needs to pre generate ALL versions of this dynamic page in advance,
//for all the supported id's. Because since this ({meetupId]) is dynamic, nextjs needs to know for which id's values it should pre generate the page.~
//because how would it pre generate this page otherwise?
export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect('MONGODB_URL');
    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    });
    client.close();

    return {
        props: { 
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;