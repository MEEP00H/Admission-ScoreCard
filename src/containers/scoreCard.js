import React, { Component } from 'react';
import './scoreCard.css';

import logo from '../assets/engineer.png';
import hart from '../assets/hart.png';
import editBtn from '../assets/editBtn.png';
import achieveImage from '../assets/achievement.png';
import shareImage from '../assets/share.png';
import userImage from '../assets/user.png';

import Header from '../components/header/header';

import Body from '../components/body/body';

import Footer from '../components/footer/footer';


export default class scoreCard extends Component {

    state ={
        faculty : 'คณะวิศวกรรมศาสตร์',
        branch : 'สาขาวิศวกรรมทั่วไป',
        university : 'จุฬาลงกรณ์มหาวิทยาลัย',

        roundOpen : 5,
        roundOpenNow : [1,2,4],
        round : 4,
        roundType : 'Admission',
        score : {

            yourScore : '23,453',
            lowerSixty : '20,845',
            avgSixty : '23,345',
            overSixty : '23,415'
        },

        logoImage : logo,
        hart : hart,
        editBtn:editBtn,
        achieveImage : achieveImage,
        shareImage : shareImage,
        userImage : userImage,

        viewer : 10 ,
        like :'like'


    }

    

    render() {

        return (
            <div className = 'card'>
                <div className = 'scope'>
                    <Header  
                            faculty = {this.state.faculty}
                            branch = {this.state.branch}
                            university = {this.state.university}
                            logoImage = {this.state.logoImage}
                            hart = {this.state.hart}
                            like = {this.state.like}

                    />
                    <Body 
                        roundOpen = {this.state.roundOpen}
                        roundOpenNow = {this.state.roundOpenNow}
                        round = {this.state.round}
                        roundType = {this.state.roundType}
                        editBtn = {this.state.editBtn}
                        score = {this.state.score}
                        achieveImage = {this.state.achieveImage}
                        />
                    
                    <Footer 
                        viewer = {this.state.viewer}
                        shareImage = {this.state.shareImage}
                        userImage = {this.state.userImage}
                    />
               </div>
            </div>
        )
    }
}

