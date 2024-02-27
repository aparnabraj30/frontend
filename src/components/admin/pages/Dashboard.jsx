// import React from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../components/Sidebar'
import './Dashboard.css'

const ADashboard = () => {

    const containerStyle = {
        display: 'flex',  // Use flexbox layout
    };

    const childStyle = {
        marginLeft : '-27px',
        marginRight: '10px', 
    };
    return (
        <div style={containerStyle}>
            <div style={childStyle}>
            <Sidebar/>
            </div>
            <div style={childStyle}>
                <h1 style={{color: '#1eb2a6', fontSize:'50px', paddingTop:'30px',marginBottom:'30px', fontFamily: "Times New Roman"}}>Dashboard</h1>
                <MediaCard/>
            </div>
        </div>
    );
};
export default ADashboard;

function MediaCard() {

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '200px',
        // backgroundColor: '#dcdcdc',
        paddingTop: '20px',
        margin: '30px',
        marginBottom: '50px',
        borderRadius: '30px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)', 
    };
    
    const cardContentStyle = {
        flex: 1, // Allow content to expand vertically
    };
    
    const buttonStyle = {
        borderRadius: '20px',
        minWidth: '130px',
        backgroundColor: '#1eb2a6',
        color: '#fff',
        height: '42px',
        marginBottom: '30px',
    };

    const titleStyle = {
        fontSize: '28px', 
        fontFamily: 'Times New Roman, Times, serif',
        fontWeight: 'bold'
    };
    const cardData = [
        { title: 'KKEM March CSA'},
        { title: 'KKEM March DSA'},
        { title: 'KKEM March MLAI'},
        { title: 'KKEM March FSD'},
        { title: 'KKEM March ST'},
    ];
    
    // function MediaCard() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cardData.map((data, index) => (
                    <Card key={index} style={cardContainerStyle}>
                        <CardContent style={cardContentStyle}>
                            <Typography gutterBottom variant="h5" component="div" style={titleStyle}>
                                {data.title}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ paddingLeft: '13px', gap: '90px' }}>
                            <Link to= '/students'>
                                <Button size="small" style={buttonStyle}>View Students</Button>
                            </Link>
                            <Link to='results'>
                                <Button size="small" style={buttonStyle}>Result</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }
    
    // export default MediaCard;