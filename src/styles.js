import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

    red: {
        backgroundColor: '#ff2040',
        color: '#ffffff',
    },
    navy: {
        backgroundColor: '#003080'
    },

    card: { margin: 10 },
    space:{
        padding: 10,
    },

    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        color: '#ffffff',
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    green: {
        backgroundColor: 'green',
    },

    largelogo: {
        height: 100,
    },

    media: {width: 200},
}));