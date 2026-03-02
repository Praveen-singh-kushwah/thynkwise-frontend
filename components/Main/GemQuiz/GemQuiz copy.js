'use client';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from "./GemQuizForm.module.css";
import GemQuizResult from './GemQuizResult';  // ⬅ import the new component

const questions = [
  {
    question: "SITUATION 1: You have received an item that needs to be assembled.",
    answers: [
      { option: 'A', text: "Throw instructions, only look at pictures." },
      { option: 'B', text: "Grumble, assemble fast, toss leftovers." },
      { option: 'C', text: "Do it alone, take more time." },
      { option: 'D', text: "Read all instructions and take inventory." },
    ],
  },
  {
    question: "SITUATION 2: When giving a gift...",
    answers: [
      { option: 'A', text: "Inside joke or gag gift." },
      { option: 'B', text: "Buy something great, keep it, buy another." },
      { option: 'C', text: "Make it yourself." },
      { option: 'D', text: "Buy practical gift, possibly a card." },
    ],
  },
  {
    question: "SITUATION 3: Hotel chains ask guests to reuse towels to save water. Your response is:",
    answers: [
      { option: 'A', text: "You probably didn’t notice the card and throw the towel on the floor, in a hurry." },
      { option: 'B', text: "You expect full service for the price paid and prefer fresh towels daily." },
      { option: 'C', text: "You follow instructions and hang towels to contribute to environmental conservation." },
      { option: 'D', text: "You analyze hotel sincerity but hang towels anyway because leaving them on the floor seems inappropriate." },
    ],
  },
  {
    question: "SITUATION 4: Ordering from a menu at a restaurant with others:",
    answers: [
      { option: 'A', text: "You wait to order something different to taste multiple unique items." },
      { option: 'B', text: "You gravitate toward the most expensive item, seeking the best quality." },
      { option: 'C', text: "You choose the least expensive and healthier option, especially if someone else might pay." },
      { option: 'D', text: "You consider cost to value, making the most sensible choice." },
    ],
  },
  {
    question: "SITUATION 5: Server delivers wrong dish during a busy dinner:",
    answers: [
      { option: 'A', text: "Eat it anyway; might be better. Mention casually without expectation." },
      { option: 'B', text: "Immediately point out the mistake, questioning server's competence." },
      { option: 'C', text: "Say nothing to avoid stressing the server further." },
      { option: 'D', text: "Politely request correction and possibly a discount." },
    ],
  },
  {
    question: "SITUATION 6: Attitude towards rules:",
    answers: [
      { option: 'A', text: "Rules are meant to be broken." },
      { option: 'B', text: "Your rules should be followed; others' rules are stupid." },
      { option: 'C', text: "You follow rules to avoid displeasing others." },
      { option: 'D', text: "Rules are meant to be strictly followed." },
    ],
  },
  {
    question: "SITUATION 7: Preferred occupation:",
    answers: [
      { option: 'A', text: "Working directly with people, relationships, and travel." },
      { option: 'B', text: "Challenging roles that offer the most money." },
      { option: 'C', text: "Helping, serving people, working toward a great cause." },
      { option: 'D', text: "Working with methods, systems, numbers, and routines." },
    ],
  },
  {
    question: "SITUATION 8: Attitude towards sports:",
    answers: [
      { option: 'A', text: "You love team sports and value participation over winning." },
      { option: 'B', text: "Winning is essential; losing is not an option." },
      { option: 'C', text: "Participation is fine, but you prefer not to compete." },
      { option: 'D', text: "Sports seem pointless compared to tasks and research you prefer." },
    ],
  },
  {
    question: "SITUATION 9: Choice of clothing:",
    answers: [
      { option: 'A', text: "Bright, trendy, fun clothing, even humorous." },
      { option: 'B', text: "High-end labels and expensive clothes; dress to impress." },
      { option: 'C', text: "Comfortable, breathable clothing; family heirlooms and earth tones." },
      { option: 'D', text: "Timeless clothing kept for long-term use due to practicality." },
    ],
  },
  {
    question: "SITUATION 10: Shoe preference:",
    answers: [
      { option: 'A', text: "Colorful, distinctive shoes; comfort isn't priority." },
      { option: 'B', text: "Top-of-the-line, brand-name shoes, several pairs in black." },
      { option: 'C', text: "Comfortable, easy slip-on shoes, practical for daily wear." },
      { option: 'D', text: "Quality shoes bought on discount, worn until completely worn out." },
    ],
  },
  {
    question: "SITUATION 11: Accessory preference:",
    answers: [
      { option: 'A', text: "Lots of inexpensive or fake accessories; possibly tattoos or piercings." },
      { option: 'B', text: "High-quality, expensive jewelry intended to impress." },
      { option: 'C', text: "Minimal, handmade or sentimental jewelry." },
      { option: 'D', text: "Simple and tasteful accessories, possibly just a watch or wedding band." },
    ],
  },
  {
    question: "SITUATION 12: During educational years:",
    answers: [
      { option: 'A', text: "Often got into trouble, loud and tardy." },
      { option: 'B', text: "Best at chosen important activities." },
      { option: 'C', text: "Quiet, compliant, diligent student." },
      { option: 'D', text: "Never in trouble, neat, organized, scored high in math/science." },
    ],
  },
  {
    question: "SITUATION 13: When it comes to your car:",
    answers: [
      { option: 'A', text: "A fun car with cool colors, expensive sound system, messy interior." },
      { option: 'B', text: "Clean, sparkling, attention-grabbing high-end brand." },
      { option: 'C', text: "Safe, environmentally friendly, equipped for family needs." },
      { option: 'D', text: "Cost-effective, reliable, well-maintained and organized." },
    ],
  },
  {
    question: "SITUATION 14: When driving:",
    answers: [
      { option: 'A', text: "Fast, distracted driving with loud music, ignoring pedestrians." },
      { option: 'B', text: "Aggressive, honking, tailgating, ignoring bike lanes." },
      { option: 'C', text: "Cautious, considerate, stopping for pedestrians and animals." },
      { option: 'D', text: "Strictly obeying traffic laws, careful adherence to speed limits." },
    ],
  },
  {
    question: "SITUATION 15: When packing to go out of town:",
    answers: [
      { option: 'A', text: "Unorganized, clothes and toiletries mixed together haphazardly." },
      { option: 'B', text: "Packing last minute, extra clothes, focused on appearance." },
      { option: 'C', text: "Minimalistic, considerate of others, prepared for emergencies." },
      { option: 'D', text: "Carefully organized, outfits planned, toiletries neatly separated." },
    ],
  },
  {
    question: "SITUATION 16: When it comes to dating:",
    answers: [
      { option: 'A', text: "Active, fun outings, likely late due to indecision on attire." },
      { option: 'B', text: "Prefer expensive restaurants." },
      { option: 'C', text: "Quiet, modest places with organic options." },
      { option: 'D', text: "Punctual, appropriately dressed for the occasion." },
    ],
  },
  {
    question: "SITUATION 17: When surrounded by children:",
    answers: [
      { option: 'A', text: "Actively engaging and playing for hours." },
      { option: 'B', text: "Multitasking, distracted with work and communication." },
      { option: 'C', text: "Encouraging quiet, calm activities." },
      { option: 'D', text: "Finds kids noisy, difficult to control." },
    ],
  },
  {
    question: "SITUATION 18: When it comes to money:",
    answers: [
      { option: 'A', text: "Impulsive, uncertain where money goes." },
      { option: 'B', text: "Splurging on expensive items." },
      { option: 'C', text: "Generous to friends and family, cautious spender." },
      { option: 'D', text: "Meticulous budgeting, no impulse buys." },
    ],
  },
  {
    question: "SITUATION 19: When setting goals:",
    answers: [
      { option: 'A', text: "Fun-oriented, enthusiastic starter, rarely completes." },
      { option: 'B', text: "Ambitious, sets lofty goals, avoids failure." },
      { option: 'C', text: "Supportive, volunteers to help others achieve their goals." },
      { option: 'D', text: "Practical, assesses and sets achievable goals." },
    ],
  },
  {
    question: "SITUATION 20: When solving problems:",
    answers: [
      { option: 'A', text: "Talks out problems verbally with others." },
      { option: 'B', text: "Quick, decisive, confident in solutions." },
      { option: 'C', text: "Feels overwhelmed, seeks help to avoid disappointment." },
      { option: 'D', text: "Methodically maps out and selects the most efficient solution." },
    ],
  },
  {
    question: "SITUATION 21: An argument breaks out, you are the one who:",
    answers: [
      { option: 'A', text: "Try to make light of it and attempt to change the subject." },
      { option: 'B', text: "Probably started it (but you would never admit that)." },
      { option: 'C', text: "Will quiet down and stay out of it." },
      { option: 'D', text: "Have a valid argument and lay it out, even if it’s harsh." },
    ],
  },
  {
    question: "SITUATION 22: If it’s a big decision:",
    answers: [
      { option: 'A', text: "Make quick decisions and often change them just as quickly." },
      { option: 'B', text: "Make quick decisions, not afraid of tough choices, disregarding obstacles." },
      { option: 'C', text: "Never like making decisions, quickly become stressed, worried about hurting feelings." },
      { option: 'D', text: "Consider all options and make the most logical choice." },
    ],
  },
  {
    question: "SITUATION 23: If there was a threat of a natural disaster in your area:",
    answers: [
      { option: 'A', text: "Run to the store and stock up on snacks and games at the last minute." },
      { option: 'B', text: "Too busy to think about it until it happens, then quickly buy supplies." },
      { option: 'C', text: "Prepared with excess supplies for yourself and others." },
      { option: 'D', text: "Always have a fully stocked emergency kit ready in advance." },
    ],
  },
  {
    question: "SITUATION 24: Spring cleaning the garage:",
    answers: [
      { option: 'A', text: "Everything is everywhere, disorganized but still able to find things." },
      { option: 'B', text: "Quick clean-up, discarding things carelessly to fit a car inside." },
      { option: 'C', text: "Struggles to discard old items, donates to those in need." },
      { option: 'D', text: "Organized perfectly with a color-coded labeling system." },
    ],
  },
  {
    question: "SITUATION 25: Opening your closet doors:",
    answers: [
      { option: 'A', text: "Mostly empty hangers, clothes scattered on the floor." },
      { option: 'B', text: "Not very organized, but clothes are hanging due to busy schedule." },
      { option: 'C', text: "Packed with hand-me-downs and comfortable, organic clothes." },
      { option: 'D', text: "Highly organized, clothes sorted from light to dark, everything neat." },
    ],
  },
  {
    question: "SITUATION 26: Loading the dishwasher:",
    answers: [
      { option: 'A', text: "Load dirty dishes carelessly, often damaging items." },
      { option: 'B', text: "Half-loaded dishwasher frequently run." },
      { option: 'C', text: "Waits until dishwasher is fully loaded to conserve resources." },
      { option: 'D', text: "Carefully pre-rinsed, orderly loaded dishes." },
    ],
  },
  {
    question: "SITUATION 27: Grocery shopping:",
    answers: [
      { option: 'A', text: "Spend too long, buying extras, forgetting initial items." },
      { option: 'B', text: "Quick grab-and-go shopping." },
      { option: 'C', text: "Immediately head to organic section." },
      { option: 'D', text: "Uses list, buys only what’s necessary, seeks discounts." },
    ],
  },
  {
    question: "SITUATION 28: Friendships:",
    answers: [
      { option: 'A', text: "Outgoing, constantly making and maintaining numerous friends." },
      { option: 'B', text: "Ambitious friends, ensures everyone knows you." },
      { option: 'C', text: "Kind-hearted, maintains deep long-term friendships." },
      { option: 'D', text: "Few close friends, cautious with trust." },
    ],
  },
  {
    question: "SITUATION 29: In a room full of people:",
    answers: [
      { option: 'A', text: "Talk comfortably to everyone in the room." },
      { option: 'B', text: "Identify competition immediately." },
      { option: 'C', text: "Engage deeply with one person." },
      { option: 'D', text: "Sit back and observe from a distance." },
    ],
  },
  {
    question: "SITUATION 30: When talking on the phone:",
    answers: [
      { option: 'A', text: "Extended casual conversations, even with strangers." },
      { option: 'B', text: "Purpose-driven conversations ending with clear actions." },
      { option: 'C', text: "Mostly listening, available for as long as needed." },
      { option: 'D', text: "Concise, questions upfront, no lingering." },
    ],
  },
  {
    question: "SITUATION 31: Public Speaking:",
    answers: [
      { option: 'A', text: "Very animated, enthusiastic, minimal notes, sometimes disorganized." },
      { option: 'B', text: "Confident, comfortable presenting first, direct speaker." },
      { option: 'C', text: "Avoids public speaking, keeps speeches short and soft-spoken." },
      { option: 'D', text: "Step-by-step organized presentation with detailed notes." },
    ],
  },
  {
    question: "SITUATION 32: One-on-one conversation style:",
    answers: [
      { option: 'A', text: "Loud, animated, expressive." },
      { option: 'B', text: "Dominant, direct, opinionated communicator." },
      { option: 'C', text: "Quiet, reserved, listens more than speaks." },
      { option: 'D', text: "Monotone, structured, clarifying through questions." },
    ],
  },
  {
    question: "SITUATION 33: Visiting the zoo:",
    answers: [
      { option: 'A', text: "Random visits, enjoys snacks and souvenirs." },
      { option: 'B', text: "Quick visit, targeted to favorite exhibits." },
      { option: 'C', text: "Stops at every exhibit, emotionally involved, charitable." },
      { option: 'D', text: "Planned route, systematic approach, avoids extra spending." },
    ],
  },
  {
    question: "SITUATION 34: Handshake style:",
    answers: [
      { option: 'A', text: "Enthusiastic, prolonged handshake or hug." },
      { option: 'B', text: "Firm, controlling grip." },
      { option: 'C', text: "Gentle, relaxed handshake, possibly using both hands." },
      { option: 'D', text: "Quick, firm, professional handshake." },
    ],
  },
  {
    question: "SITUATION 35: Keeping track of time:",
    answers: [
      { option: 'A', text: "Chronically late, uses tricks to try staying punctual." },
      { option: 'B', text: "Too busy, sacrifices personal time to accomplish tasks." },
      { option: 'C', text: "Attempts to be early, anxious about inconveniencing others." },
      { option: 'D', text: "Always punctual, meticulously manages time." },
    ],
  },
  {
    question: "SITUATION 36: When home alone:",
    answers: [
      { option: 'A', text: "Multitasking with entertainment and social calls simultaneously." },
      { option: 'B', text: "Continues working, highly productive." },
      { option: 'C', text: "Enjoys quiet, relaxing activities." },
      { option: 'D', text: "Completes chores systematically." },
    ],
  },
  {
    question: "SITUATION 37: View of people:",
    answers: [
      { option: 'A', text: "Optimistic, sees good in everyone." },
      { option: 'B', text: "Competitive, aims to outperform others." },
      { option: 'C', text: "Compassionate, forgiving, gives multiple chances." },
      { option: 'D', text: "Critical, often sees incompetence." },
    ],
  },
  {
    question: "SITUATION 38: At the doctor's office:",
    answers: [
      { option: 'A', text: "Arrives late, occupies self with phone." },
      { option: 'B', text: "Demands punctuality, confronts delays assertively." },
      { option: 'C', text: "Patiently waits, understanding of delays." },
      { option: 'D', text: "On-time, frustrated if kept waiting." },
    ],
  },
  {
    question: "SITUATION 39: Hair preference:",
    answers: [
      { option: 'A', text: "Experimental, trendy hairstyles." },
      { option: 'B', text: "Stylish, professional, expensive." },
      { option: 'C', text: "Natural, low-maintenance styles." },
      { option: 'D', text: "Consistent, easy-care, rarely changes style." },
    ],
  },
  {
    question: "SITUATION 40: Greatest motivation:",
    answers: [
      { option: 'A', text: "Fun and enjoyment." },
      { option: 'B', text: "Challenge and financial success." },
      { option: 'C', text: "Serving and helping others." },
      { option: 'D', text: "Facts, data, and logical outcomes." },
    ],
  },
];

const gemMap = {
  A: 'Sapphire (Fun-Loving, Outgoing)',
  B: 'Ruby (Driven, Competitive)',
  C: 'Pearl (Caring, Empathetic)',
  D: 'Emerald (Logical, Organized)',
};

export default function GemQuiz() {
  const [resultText, setResultText] = useState(null);

  const initialValues = questions.reduce((acc, _, index) => {
    acc[`q${index}`] = '';
    return acc;
  }, {});

  const validationSchema = Yup.object().shape({
    ...questions.reduce((acc, _, index) => {
      acc[`q${index}`] = Yup.string().nullable();
      return acc;
    }, {}),
  });

  const submitQuiz = async (values, { setSubmitting, resetForm }) => {
    try {
      const results = { A: 0, B: 0, C: 0, D: 0 };
      let total = 0;
  
      // Count total answers first
      for (let i = 0; i < questions.length; i++) {
        const answer = values[`q${i}`];
        if (answer) total++;
      }
  
      if (total === 0) {
        toast.error("You must answer at least one question.");
        setSubmitting(false);
        return;
      }
  
      if (total < questions.length) {
        toast.error("Please answer all questions before submitting.");
        setSubmitting(false);
        return;
      }
  
      // Now safe to continue processing and call API
      const quizData = questions.map((q, i) => {
        const selectedOption = values[`q${i}`];
        const selectedAnswer = selectedOption
          ? q.answers.find((a) => a.option === selectedOption)
          : null;
        if (selectedOption) {
          results[selectedOption]++;
        }
        return {
          question: q.question,
          answer: selectedAnswer
            ? { option: selectedAnswer.option, text: selectedAnswer.text }
            : null,
        };
      });
  
      const resultsData = {
        Sapphire: results.A,
        Ruby: results.B,
        Pearl: results.C,
        Emerald: results.D,
        totalAnswered: total,
      };
  
      const top = Object.entries(results).sort((a, b) => b[1] - a[1])[0];
      const dominantPersonality = gemMap[top[0]];
  
      const result = await getGemQuiz({
        questions: quizData,
        results: resultsData,
        title: `Your Dominant GEM Personality: ${dominantPersonality}`,
        ...data,
      });
  
      const resultHTML = `
        <h3 class="text-2xl font-bold mb-2">Your Dominant GEM Personality: <u>${dominantPersonality}</u></h3>
        <p class="font-semibold">Breakdown:</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Sapphire (A): ${results.A}</li>
          <li class="list-group-item">Ruby (B): ${results.B}</li>
          <li class="list-group-item">Pearl (C): ${results.C}</li>
          <li class="list-group-item">Emerald (D): ${results.D}</li>
        </ul>
        <p class="mt-2">You answered ${total} out of ${questions.length} questions.</p>
      `;
  
      setResultText(resultHTML);
    } catch (error) {
      console.error("An error occurred during quiz submission:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetake = () => {
    setResultText(null);
  };

  // 👇 Switch between quiz and result view
  if (resultText) {
    return <GemQuizResult resultText={resultText} onRetake={handleRetake} />;
  }

  return (
    <div className="card shadow p-4 py-5 rounded-2">
      <h2 className="card-title text-center fs-3 mb-4">GEM Personality Assessment</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount={false}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={submitQuiz}
      >
        {({ isSubmitting, values, submitCount }) => {
          const answeredCount = Object.values(values).filter(v => v !== '').length;
          return (
            <Form>
              <div className="card-body">
                {questions.map((q, index) => (
                  <div key={index} className="mb-4 border-bottom pb-3">
                    <strong className="d-block fs-5 mb-2">{q.question}</strong>
                    <div className="d-flex flex-column gap-2">
                      {q.answers.map((a) => (
                        <div key={a.option} className="form-check">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name={`q${index}`}
                            id={`q${index}-${a.option}`}
                            value={a.option}
                          />
                          <label className="form-check-label" htmlFor={`q${index}-${a.option}`}>
                            {`${a.option}: ${a.text}`}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={'text-end ' + style["header-button"]}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Submit Answers
                </button>
              </div>

              {submitCount > 0 && answeredCount < 5 && (
                <div className="text-danger text-center mt-3">
                  You must answer at least all questions to see the result.
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
