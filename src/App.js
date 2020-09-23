import React, {useState, useEffect, useReducer} from 'react';
import { Api } from './Api'
import Team from './Components/Team'
import { Styles } from './Components/StyledComponents'

export const ACTIONS = {
    SETTEAM: 'set-team',
    CLEARTEAM: 'clear-team'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SETTEAM:
            return {
                team: action.payload.team, 
                id: action.payload.id, 
                founded:action.payload.founded, 
                address:action.payload.address, 
                country:action.payload.country,
                squad:action.payload.squad
            }
        case ACTIONS.CLEARTEAM:
            return {team: ''}
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {team: '', id:'', founded:'', address:'', country:'', squad:[]})
    const [teams, setTeams] = useState([]);
    const {TeamsContainer, Container, HeaderTitles, HeaderItem, List, Item, Span} = Styles.TeamList

    useEffect(() => {
        fetch(`https://soccer.sportmonks.com/api/v2.0/teams?api_token=${Api.key}&include=country,fifaranking,uefaranking,venue,visitorResults,squad`)
        .then(res => res.json())
        .then(json => setTeams(json.data))
        // .then(json=>console.log(json))
    },[])

    function viewTeam(teamName, id, founded, address, country, squad) {
        dispatch({
            type: ACTIONS.SETTEAM,
            payload: {
                team: teamName,
                id: id,
                founded: founded,
                address: address,
                country: country,
                squad:squad
                // site: site,
                
            }
        })
    }

    if (state.team) {
        return <Team 
                name={state.team} 
                id={state.id} 
                founded={state.founded} 
                address={state.address} 
                country={state.country}
                squad={state.squad}
                dispatch={dispatch}/>
    }

    return (
        <TeamsContainer>
            <Container>
                <HeaderTitles>
                    <HeaderItem>Name</HeaderItem>
                    <HeaderItem>Founded</HeaderItem>
                    <HeaderItem>Address</HeaderItem>
                </HeaderTitles>
                <List>
                    {teams.map((item, index)=>{
                        return(
                            <Item key={index} onClick={() => viewTeam(item.name, item.id, item.founded, item.venue.data.address, item.country.data.name, item.squad.data)}>
                                <Span>{item.name}</Span>
                                <Span>{item.founded}</Span>
                                {item.venue && item.venue.data.address ? 
                                <Span>{item.venue.data.address} - <strong>{item.country.data.name}</strong></Span> 
                                : <Span><span style={{color:'#de4463'}}>No Address Available</span></Span>}
                            </Item>
                        )
                    })}
                </List>
            </Container>
        </TeamsContainer>
    );
}

export default App;
