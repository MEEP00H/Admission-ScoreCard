import React from 'react';
import './roundOpenNow.css';




const roundOpenNow = (props) => {    

    function roundOpenNow(){
        window.addEventListener("load", function(event) {
            const idRound = document.getElementsByClassName('selectedRound')

            for(let i =0 ; i < idRound.length ; i++){
                const roundOpenNow = props.roundOpenNow;

                for(let r = 0 ;  r < roundOpenNow.length ; r++ ){

                    if(parseInt(idRound[i].id) === roundOpenNow[r]){
                        idRound[i].style.background = '#2ecc71';
                    }
                }
            }
        });
    }
    roundOpenNow();

    return <div className = 'roundOpenNow'>{Array.from(Array(props.rounds), (e, index) => {
        return <div key={index} className = 'selectedRound' id = {index+1} >
                    <div className = 'numberRound'>
                        {index+1}
                    </div>
                </div>
      })}</div>
}
export default roundOpenNow;