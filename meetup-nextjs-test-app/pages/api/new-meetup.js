import { MongoClient } from 'mongodb';
//POST /api/new-meetup

const handler = async (req, res) => {
    if (req.method === 'POST'){
        const data = req.body; 
        
        const client = await MongoClient.connect('MONGODB_URL');
        const db = client.db()

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup Inserted'});
    }
}

export default handler;