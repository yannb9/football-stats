export const Style = {
    Teams:{
        wrapper:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        H1:{
            fontFamily:'Geomanist',
            letterSpacing: 1,
            color:'#FAFAFA'     
        },
        teamsList:{
            list:{
                width:'100%'
            },
            titles:{
                display:'flex',
                justifyContent:'space-around',
                color:'#ffb844',
                width:'100%',
                fontFamily:'Geomanist',
                letterSpacing: 1,
                fontWeight:400
            },
            ul:{
                padding:0
            },
            li:{
                display:'flex',
                justifyContent:'space-around',
                listStyle:'none',
                width:'100%',
                padding:'10px 0',
                borderBottom:'1px solid #393939',
                cursor:'pointer',
                color:'#FAFAFA'
            },
            liHover:{
                backgroundColor:'#393939'
            },
            a:{
                textDecoration:'none',
                color:'#FAFAFA',
                display:'flex',
                justifyContent:'space-around'
            },
            span:{
                width:'20%'
            }
        }
    }
}