import {makeStyles} from "@material-ui/core/styles"

const mainOrange = "#FF8B3D"
export const useStyles =  makeStyles({
    root : {
        width: 260,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        transition : "all 100ms linear",
        '&:hover' : {
            transform : "scale(1.03)",
        },
        boxShadow : "3px 3px 23px #000",
        borderRadius: 2,
    },
    price : {
        backgroundColor : "#FFF",
        color : mainOrange,
        fontFamily: 'roboto, sanSerif',
        fontSize : 16,
        fontWeight : "600",
        margin : 0,
        transition : "all 100ms linear",
    },
    actionArea : {
        "&:hover $focusHighlight": {
            opacity: "0"
          },
    },
    focusHighlight : {},
    title : {
        textAlign : "left",
        fontSize : 16,
        fontWeight : "500",
        fontFamily : 'kumbh sans, sansSerif',
        lineHeight : "20px",
        color : "#323232",
    },
    cardContent : {
        padding : "0px 8px",
    },
    contentHeader : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"
    },
    cardBtn : {
        fontFamily : 'kumbh sans, sansSerif',
        borderRadius : 0,
        border : "1px solid #333",
        fontWeight : "400",
        fontSize : "14px",
        marginBottom : "6px",
        width : "50%",
        paddingTop : "7px",
        "&  a" : {
            textDecoration : "none", 
            marginTop: 4,
        },
        "&:hover" : {
            backgroundColor : mainOrange,
            "&  a" : {
                textDecoration : "none", 
                color: "#FFF"
            },
        }
    },
    
})