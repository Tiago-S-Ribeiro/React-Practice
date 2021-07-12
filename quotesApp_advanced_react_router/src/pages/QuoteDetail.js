import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//     {id: "q1", author:"Albus Dumbledore", text:"It is the unknown we fear when we look upon death and darkness, nothing more."},
//     {id: "q2", author:"Sirius Black", text:"The ones that love us never really leave us."},
//     {id: "q3", author:"Remus Lupin", text:"What you fear most of all... is fear itself."},
//     {id: "q4", author:"Hermione Granger", text:"Fear of a name only increases fear of the thing itself."},
//     {id: "q5", author:"Ron Weasley", text:"Why spiders? Why couldn't it be \"Follow the butterflies\"?."},
//     {id: "q6", author:"Severus Snape", text:"I can teach you to bottle fame, brew glory, even put a stopper in death."},
//     {id: "q7", author:"Lord Voldemort", text:"There is no good and evil, there is only power and those to weak to seek it."},
//     {id: "q8", author:"Harry Potter", text:"I don't go looking for trouble... Trouble usually finds me."},
//     {id: "q9", author:"Rubeus Hagrid", text:"I shouldn't have said that. I should not have said that..."}
// ]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    //const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(status === 'pending'){
        return(
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if(error){
        return(
            <p className="centered">{error}</p>
        );
    }

    if(!loadedQuote.text){
        return(
            <p>No quote found!</p>
        );
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;