import styled from 'styled-components'

export const Styles = {
    TeamList:{
        TeamsContainer: styled.div``,
        Container: styled.div`
            width:100%;
        `,
        HeaderTitles: styled.div`
            display:flex;
            justify-content:space-around;
            width:100%;
            color:#ffb844;
            font-family:Geomanist;
            font-weight:400;
            letter-spacing:1;
        `,
        HeaderItem:styled.div`
            width:20%;
        `,
        List:styled.ul`
            padding: 0;
        `,
        Item:styled.li`
            list-style:none;
            display:flex;
            justify-content:space-around;
            width:100%;
            padding:10px 0;
            border-bottom:1px solid #393939;
            cursor:pointer;
            color:#FAFAFA;
        `,
        Span:styled.span`
            width:20%;
        `

    },
    Team:{
        Team:styled.div``,
        Presentation:{
            TeamContainer: styled.div`
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 400px;
            `,
            ImgWrapper : styled.div`
                position:relative;
            `,
            DetailsWrapper : styled.div`
                position:relative;
                font-family:Geomanist;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            `,
            H1 : styled.h1`
                font-size:70px;
                font-weight:700;
                letter-spacing:1px;
                color:#fafafa;
                margin:3% 0;
            `,
            Year : styled.span`
                color: rgb(255, 184, 68);
                font-size: 22px;
                font-weight: 400;
            `,
            Site : styled.a`
                color: rgb(133 133 133);
                font-size: 16px;
            `,
            Span : styled.span`
                color: rgb(133 133 133);
                font-size: 16px;
            `
        },
        PlayersList:{
            Back: styled.button``,
            PlayersContainer: styled.div`
                font-family: Geomanist;
            `,
            PlayersList: styled.ul`
                padding: 10px 10%;
            `,
            H2: styled.h2`
                display: grid;
                grid-template-columns: 0.5fr 1fr 1fr;
                text-align: center;
                color: #fff;
            `,
            HeaderContainer: styled.div`
                color: #de4463;
                font-weight: 500;
                display: grid;
                grid-template-columns: 0.5fr 1fr 1fr;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-bottom: 25px;
            `,
            HeaderTitle: styled.span``,
            Player: styled.li`
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                justify-items: center;
                align-items: center;
                color: #fff;
                list-style: none;
                background: rgb(28 28 28);
                padding: 10px;
                margin-bottom:20px;
                border-radius: 10px;
                border-bottom: 1px solid rgb(57,57,57);
            `,
            Profile: styled.div`
                display: grid;
                grid-template-columns: 15% 100%;
                width: 70%;
                align-items: center;
                justify-content: center;
            `,
            Image: styled.img`
                width: 100%;
            `,
            Name: styled.span`
                margin-left: 15px;
            `,
            Position: styled.div`
            `,
            Jersey: styled.div`
            `,
        }
    }
}