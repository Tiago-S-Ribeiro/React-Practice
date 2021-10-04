import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Parque da Cidade',
        image: 'https://lifecooler.com/files/registos/imagens/306117/266351.jpg',
        address: 'rua x',
        description: 'la la la'
    },
    {
        id: 'm2',
        title: 'Palácio de Cristal',
        image: 'https://s7a5n8m2.stackpathcdn.com/wp-content/uploads/2015/10/palacio-de-cristal-no-porto-2.jpg',
        address: 'rua y',
        description: 'lo lo lo'
    }
];

const HomePage = () => {
    return(
        <MeetupList meetups={DUMMY_MEETUPS}/>
    );
}

export default HomePage;