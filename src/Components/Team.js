import React, {useState, useEffect} from 'react';
import { Api } from '../Api'
import { Styles } from './StyledComponents'
import { ACTIONS } from '../App'

export default function Team({name, id, founded, address, country, squad, logo, dispatch}){
    const [players, setPlayers] = useState([])
    const { Back, PlayersContainer, PlayersList, H2, HeaderContainer, HeaderTitle,  Player, Profile, Image, Name, Position, Jersey} = Styles.Team.PlayersList;
    const { TeamContainer, ImgWrapper, DetailsWrapper, H1, Year, Site, Span } = Styles.Team.Presentation;
    const { Team } = Styles.Team;

    useEffect(()=>{
        console.log(squad)
        squad.map(item=>{
            fetch(`https://soccer.sportmonks.com/api/v2.0/players/32?api_token=${Api.key}`)
                .then(res => res.json())
                .then(json=>setPlayers(json.data))
        })
    })
    return(
        <Team className="Team">
            <Back onClick={()=>dispatch({type:ACTIONS.CLEARTEAM})}>Back</Back>
            <TeamContainer>
                <ImgWrapper>
                    <img alt="logo-team" src={logo}></img>
                </ImgWrapper>
                <DetailsWrapper>
                    <H1>{name}</H1>
                    <Year>Founded in {founded}</Year>
                    {/* <Site href="http://www.test.com">www.test.com</Site> */}
                    <Span>{address} - {country}</Span>
                </DetailsWrapper>
            </TeamContainer>

            <PlayersContainer>
                <PlayersList>
                    <H2>Team Players</H2>
                    <HeaderContainer alt="profile-team" >
                        <HeaderTitle>Name</HeaderTitle>
                        <HeaderTitle>Position</HeaderTitle>
                        <HeaderTitle>Jersey</HeaderTitle>
                    </HeaderContainer>
                    {players.map((item,ind)=>{
                            return (
                                <Player key={ind}>
                                    <Profile>
                                        <Image src={item.image_path}></Image>
                                        <Name>{item.fullname}</Name>
                                    </Profile>
                                    <Position>{item.position.data.name}</Position>
                                    <Jersey>18</Jersey>
                                </Player>
                            )
                        })}

                </PlayersList>
            </PlayersContainer>
        </Team>
    )
} 