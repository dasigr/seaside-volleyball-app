import Advertisement from '../components/advertisement/Advertisement';
import LatestNews from '../components/latest-news/LatestNews';
import UpcomingEvents from '../components/upcoming-events/UpcomingEvents';
import TeamStandings from '../components/team-standings/TeamStandings';

const Home = () => (
  <>
    <Advertisement></Advertisement>
    <LatestNews></LatestNews>
    <UpcomingEvents></UpcomingEvents>
    <TeamStandings></TeamStandings>
    <Advertisement></Advertisement>
  </>
);

export default Home;
