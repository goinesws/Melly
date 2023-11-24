'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import {db} from "../../firebaseConfig"
import {onValue, ref, set, push} from "firebase/database"
import moment from "moment"

export default function Home() {
    const [poopTally, setPoopTally] = useState(0);
    const day = moment().format("YY[/]MM[/]DD"); 
    const hari = moment().format('LL'); 

    useEffect(() => {
        console.log(day);
        const tally = ref(db, '/23/11/25');
        console.log("he")
        onValue(tally, (snapshot) => {
            console.log("ho");
            const data = snapshot.val();
            console.log(data+"DATA");
            setPoopTally(data)
        })
    }, [])

    function addTally() {
        setPoopTally(poopTally+1);
        set(ref(db, '/'+day), poopTally);
        console.log("masuk firebase"+poopTally)
    }
    function remTally() {
        setPoopTally(poopTally-1);
        set(ref(db, '/'+day), poopTally);
        console.log("masuk firebase"+poopTally)
    }

  return (
    <center style={{transform:"translate(50%, -50%)", top: "50%", right: "50%", position: "absolute", padding:"10px"}}>
        <div className='text-white font-bold text-3xl'>Number of Poops Today</div>
        <div className='text-white font-bold text-3xl'>{hari}</div>

        <div className='text-white font-bold text-6xl mt-5'>{poopTally}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10" onClick={addTally}>I Just Pooped!</button>
        <br/>
        <button className="text-white mt-2" onClick={remTally}>Oops! Kepencet hehe</button>
    </center>
    // <main className="text-white">
    //   number of poop today : {poopTally}
    //   <button onClick={addTally}>hey</button>
    // </main>
  )
}