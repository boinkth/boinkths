import './App.css';
import Navbar from './components/Navbar'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import christmas from "./images/christmas_market.jpg";



function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
      </Routes>
    </Router>
    <br></br>
    <Timeline />
    </div>
  );
}

function Timeline() {
  return (
    <div className="App">
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 24, 2023"
        >
          <h3 className="vertical-timeline-element-title">Graduation!</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            I am so proud of everything that you've achieved and continue to achieve! Today marks the official end of your undergrad, and marks
            a new beginning as a Masters student! I never had any doubts that you would make it into your new program, because of all the reasons in 
            your birthday post. I cant wait to see how you navigate through this new stage of your life, and I'm happiest to be by your side and supporting
            you to success!
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 21, 2023"
        >
          <h3 className="vertical-timeline-element-title">Your Birthday!</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
          Happiest birthday to the love of my life!!!!! Im so happy I get to celebrate your birthday together with you! It's been close to 8 months since we decided we'd stop
          (I would stop) being a rat and ask you out, and it's genuinely one of the best decisions I've ever made. You make me so insanely happy, and I hope that I can make you just as happy
          But, today is about you. I am so incredibly proud of everything you're achieving this year, between graduation and grad school applications!! Your hard work is paying off and I'm so
           happy to see you succeeding. I'm sure that no matter what life has in store for you, you'll be able to overcome and make it turn out in your favour. You're smart, intelligent, hardworking,
           persevering, and beautiful. I just hope that with any luck, I'll be by your side to share in your achievements and support you in your moments of hardship. 
           I love you forever and always, my K dawg, my soupmate, my baby grill, my cutie kat, my everything! Not to sound like a broken record, but I feel so lucky to be the one you choose to spend your birthday with! We couldn't celebrate you on time,
            but we went to the Keg with the tacos and had a great time looking for ghosts and eating nachos! These are the moments that I'll always rememeber when we're
            80 and crippled of Alzheimers. 
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 25, 2023"
        >
          <h3 className="vertical-timeline-element-title">Spring Cherry Blossoms!</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            A very fun day! We met up with the tacos and went to visit the cherry blossoms on UofT campus and Queen's Park! I remember some guy kept bothering
            us about his lost umbrella, and you put a blossom in my hair that lasted until later in the day LOL. We took some very cute photos together and got a lot 
            of steps in! How time flies when you're with your soupmate!!
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 23, 2023"
        >
          <h3 className="vertical-timeline-element-title">First Birthday Together</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            I am the luckiest guy alive to get to celebrate my birthday together with you!! You got me these really cute cakes, one in the shape
            of a ramen bowl, and one in the shape of kitty swimming in coffee! We shared the cakes sitting in our usual spot by the library entrance, 
            then spent some time cuddling before Caroline ran into us LOL. It was the best birthday ever :)).
          </p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 13, 2023"
        >
          <h3 className="vertical-timeline-element-title">Our First Valentine's Day</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Our very first Valentine's day together! Albeit a day early, this was definitely one of my favorite moments I got to spend with you.
            I remember picking you up after class and taking you to this hole-in-the-wall tiramisu place where we got to share one of our favorite desserts!
            I also got you a rose (very tasty btw) which you couldn't keep, so I took it home with me. I still have it to remind me of spending the best time with
            the love of my life.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 18, 2022"
        >
          <h3 className="vertical-timeline-element-title">Distillery Christmas Market</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            The day started when we met up at union - we looked up the fastest way to get to distillery district
            and found that the 121 bus would take us pretty close. OH NOO the bus just pulled into the stop as we
            got to the intersection and we ZOOOMED to make it.. for no reason. The bus was waiting. One bus ride and 
            some frozen walking later, we made it! We then spent 2 hours roaming through various art galleries and
            making inapropriate comments (me), or commenting how we could make that art (I still think I could make
            those concrete robots). After getting slammed with some alcoholic hot chocolate, we continue around every little
            store, just enjoying each others' company. The night ends off with pho (accidental banh mi) and coffee jelly after 
            we video call with Sabrina about Rick and Morty. If only every day could be this much fun.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 16, 2022"
        >
          <h3 className="vertical-timeline-element-title">Secret Santa w/ the VeggieTas</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            A day in two parts. We first got korean food with the VeggieTas... being Caroline and Gozel since everyone else
            was busy. We shared some takoyaki and a (giant) pancake. Then we went on an adventure to get Caroline's cursed
            Jason Derulo pics printed LMAO. Once the other two had gone, we went shopping around eaton and the bay (black face santa).
            Then we headed up to yorkville and ran into a sculpture made by an alum of your high school. We walked around the park lights
            for a while (I'll never forget your reaction when I picked you up LOL), followed by dinner at this Italian place where
            we almost tricked the waiter that I spoke Italian.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 14, 2022"
        >
          <h3 className="vertical-timeline-element-title">First Minecraft World</h3>
          <h4 className="vertical-timeline-element-subtitle">Scarborough ft. Ajax</h4>
          <p>
            After fighting with lil bro laptop, we managed to get onto the custom Minecraft pack that I prepared for us to play!
            It was a lot of fun setting up our house in the village, with our cats Stand Mixer and Microwave. We had some issues
            with home intruders but that was quickly solved by an iron door ;). I look forward to many more gaming sessions with you :)).
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 27, 2022"
        >
          <h3 className="vertical-timeline-element-title">Allan Gardens</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            A little impromptu trip after our usual coffee run! We had to walk around to two different entrances since they were under
            construction. I remember you teaching me that lilies and poinsettias aren't the best plants to have around our pets. We also
            found cool looking cacti and dragon fruit!. The trip ended with a kiss by the giant orange tree :).
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 23, 2022"
        >
          <h3 className="vertical-timeline-element-title">Fashionista Photoshoot</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            I remember not wanting to go at first, but then I realized it would be fun to spend some time together doing something a little
            out of our usual comfort zone, and a good opportunity to meet some of your friends! It was fun getting dressed up and messing around.
            The car rides there and back were peak crackhead hours as we all engaged in banter LMAO. We ended the day eating at Katsuya and
            holding hands under the table (no inapropriate intentions here).
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 02, 2022"
        >
          <h3 className="vertical-timeline-element-title">Our First Date</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            It all started with me wanting to ask you out the same day you happened to get traumatized by that guy in your program, so we just
            spent a friday as usual and got cat boba! The next week i decided to shoot my shot (we have been spending an absurd amount of time together
            by this point and I was still nervous that you'd hit me with a no). We went about our usual cat boba routine, then went by shitty hall
            and sat around for a bit to complain about the architecture LOL. I meant to ask you out then and there but I got caught up in the moment. Then
            when we went to take the train from union, I remembered and wanted to ask you again but you took my hand and my brain went numb and again it slipped
            my mind. Finally, that night I TEXTED you (my last resort, I couldnt wait). You said YES!! We went out the following wednesday to a Persian 
            restaurant that I chose for the cool decor (we didnt fit the chairs), but we still managed to have fun because we were together :)). This is the start
            of something beautiful.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Countless times"
        >
          <h3 className="vertical-timeline-element-title">Cat Boba Fridays</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Every friday since you mentioned it, and truthfully I dont remember what posessed us to go in the first place, we've been
            going to a cat-themed boba restaurant. One day we'll try all the flavours!! A1 for the win!!
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 11, 2022"
        >
          <h3 className="vertical-timeline-element-title">ROM Trip</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            This is when we should've started dating. I remember you mentioned that you'd been wanting to go to the ROM and had nobody to go
            with, so I offered to go with you. In retrospect, I should have just asked you on a date that day or asked you during the trip. At One
            point we were talking about our parents and you said that your mom just wants you to find a nice boy, and I was going to say something cringe
            like "I'm a nice boy :)" LOL. we grabbed food after and headed home together on the train!
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 11, 2022"
        >
          <h3 className="vertical-timeline-element-title">All the Other Times We Hung Out</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Starting with Frosh, then all the times we just talked in the kerr hall quad, then you bringing sabrina around. I look
            back on all these times with such a fondness because they were the moments when we really got to knowing each other properly
            after years of knowing each other in passing. I really think how different things would be if we'd done this earlier. But at the
            same time, everything happens for a reason and I'm just happy that I have the rest of my life to spend with you :).
          </p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default App;
