import { useState } from "react";
import { Card } from "./Card";

export default function Projects({lang}) {
  const projects = {
    en:[
      { 
        imgName: "theater.png",
        imgDesc: "Virtual Theater - Image",
        projectName: "Virtual Theater",
        projectDesc: "Connect on our virtual theater, either as a spectator or an actor, and enjoy a performance that includes 3D graphics and 3D sound experience.",
        tags:['#Javascript', '#WebAudioAPI', '#WebRTC', '#3D']
      },
      { 
        imgName: "project1.png",
        imgDesc: "Doubledoor's Quest - Image",
        projectName: "DoubleDoor's Quest",
        projectDesc: "You and a brave wizard explore and fight your way through a dungeon, in hopes of escaping the darkness.",
        tags:['#Unity', '#C-sharp', '#GameJam', '#2D']
      },
      { 
        imgName: "lostsignal.png",
        imgDesc: "Lost Signal - Image",
        projectName: "Lost Signal",
        projectDesc: "As a private investigator, you enter a restricted area to discover what happened to your friend.",
        tags:['#Unity', '#C-sharp', '#GameJam', '#3D']
      },
      { 
        imgName: "coffeeapp.jpg",
        imgDesc: "Coffeeshop Vouchers - Image",
        projectName: "Coffeeshop Vouchers App",
        projectDesc: "An online application where connected users can receive the latest discounts and receive vouchers, depending on their subscription.",
        tags:['#Javascript', '#SQL', '#AdobeXD']
      },
      { 
        imgName: "memorygame.jpg",
        imgDesc: "Memory Game - Image",
        projectName: "Memory Game",
        projectDesc: "The classic memory game - flip cards around and try to remember where their match is. Personal score is calculated so you can track your progress.",
        tags:['#Java', '#SQL', '#JavaFX']
      }
    ],
    el:[
      { 
        imgName: "theater.png",
        imgDesc: "Virtual Theater - Image",
        projectName: "Virtual Theater",
        projectDesc: "Συνδεθείτε στο εικονικό μας θέατρο, είτε ως θεατής είτε ως ηθοποιός, και απολαύστε μια παράσταση που περιλαμβάνει τρισδιάστατα γραφικά και τρισδιάστατο ήχο.",
        tags:['#Javascript', '#WebAudioAPI', '#WebRTC', '#3D']
      },
      { 
        imgName: "project1.png",
        imgDesc: "Doubledoor's Quest - Εικόνα",
        projectName: "DoubleDoor's Quest",
        projectDesc: "Εσύ και ένας γενναίος μάγος εξερευνάτε και πολεμάτε μέσα από ένα μπουντρούμι, με την ελπίδα να ξεφύγετε από το σκοτάδι.",
        tags:['#Unity', '#C-sharp', '#GameJam', '#2D']
      },
      { 
        imgName: "lostsignal.png",
        imgDesc: "Lost Signal - Εικόνα",
        projectName: "Lost Signal",
        projectDesc: "Ως ιδιωτικός ντετέκτιβ, μπαίνετε σε μια περιορισμένη περιοχή για να ανακαλύψετε τι συνέβη στον φίλο σας.",
        tags:['#Unity', '#C-sharp', '#GameJam', '#3D']
      },
      { 
        imgName: "coffeeapp.jpg",
        imgDesc: "Coffeeshop Vouchers - Image",
        projectName: "Coffeeshop Vouchers App",
        projectDesc: "Μια ηλεκτρονική εφαρμογή όπου οι συνδεδεμένοι χρήστες μπορούν να λαμβάνουν τις πιο πρόσφατες εκπτώσεις και κουπόνια, ανάλογα με τη συνδρομή τους.",
        tags:['#Javascript', '#SQL', '#AdobeXD']
      },
      { 
        imgName: "memorygame.jpg",
        imgDesc: "Memory Game - Image",
        projectName: "Memory Game",
        projectDesc: "Το κλασικό παιχνίδι μνήμης - γυρίστε τις κάρτες και προσπαθήστε να θυμηθείτε πού είναι το ταίρι σας. Η προσωπική βαθμολογία υπολογίζεται ώστε να μπορείτε να παρακολουθείτε την πρόοδό σας.",
        tags:['#Java', '#SQL', '#JavaFX']
      }
    ]
  };

  const list = projects[lang] ?? projects.en;
  const [index, setIndex] = useState(0);
  
  const prevPR = () => {
    setIndex((index) => (index === 0 ? list.length - 1 : index - 1));
  }
  const previousImage = (index - 1 + list.length) % list.length;

  const nextPR = () => {
    setIndex((index) => (index === list.length - 1 ? 0 : index + 1));
  }
  const nextImage = (index + 1) % list.length;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="relative flex items-center justify-center">
        
        {/* ghost card 1 */}
        <div onClick={prevPR} className="hidden md:block w-64 h-[420px] bg-sky-950/20 hover:bg-sky-950/50 transition rounded-xlscale-90 opacity-60"/>

        <div className="z-10 ">
          <Card project={list[index]}/>
        </div>

        {/* ghost card 2 */}
        <div onClick={nextPR} className="hidden md:block w-64 h-[420px] bg-sky-950/20 hover:bg-sky-950/50 transition rounded-xlscale-90 opacity-60"/>

        {/* buttons */}
        <div className="absolute inset-y-0 left-2 flex items-center md:left-[-3rem]">
          <button aria-label="previous project" onClick={prevPR}
          className="z-20 bg-sky-950/80 p-2 rounded-full hover:scale-110 transition md:bg-transparent">
            <img src="/icon/arrow-circle-left.svg" alt='' className="w-8 h-8 filter invert brightness-0"/>
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 flex items-center md:right-[-3rem]">
          <button aria-label="next project" onClick={nextPR}
          className="z-20 bg-sky-950/80 p-2 rounded-full hover:scale-110 transition md:bg-transparent">
            <img src="/icon/arrow-circle-right.svg" alt='' className="w-8 h-8 filter invert brightness-0"/>
          </button>
        </div>
        
      </div>
    </section>
  );
}
