const cricketQuestions = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Muttiah Muralitharan"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup in 1975?",
        options: ["Australia", "India", "West Indies", "England"],
        answer: "West Indies"
    },
    {
        question: "What is the maximum number of overs allowed in an ODI match per team?",
        options: ["20", "50", "100", "90"],
        answer: "50"
    },
    {
        question: "Who holds the record for the highest individual score in ODI cricket?",
        options: ["Virender Sehwag", "Chris Gayle", "Rohit Sharma", "Martin Guptill"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Shane Warne", "Anil Kumble", "Muttiah Muralitharan", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "In which year did India win their first Cricket World Cup?",
        options: ["1979", "1983", "1987", "1992"],
        answer: "1983"
    },
    {
        question: "What is the term used when a bowler takes three wickets in three consecutive deliveries?",
        options: ["Century", "Hat-trick", "Sixer", "Double-wicket"],
        answer: "Hat-trick"
    },
    {
        question: "Which Indian cricketer is also known as 'The Wall'?",
        options: ["Sachin Tendulkar", "Sourav Ganguly", "Rahul Dravid", "MS Dhoni"],
        answer: "Rahul Dravid"
    },
    {
        question: "Which cricket stadium is known as the 'Mecca of Cricket'?",
        options: ["Melbourne Cricket Ground", "Eden Gardens", "Lord's Cricket Ground", "Wankhede Stadium"],
        answer: "Lord's Cricket Ground"
    },
    {
        question: "Who was the first batsman to score 10,000 runs in Test cricket?",
        options: ["Sunil Gavaskar", "Don Bradman", "Allan Border", "Sachin Tendulkar"],
        answer: "Sunil Gavaskar"
    },
    {
        question: "Who has the fastest century in ODI cricket?",
        options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Chris Gayle"],
        answer: "AB de Villiers"
    },
    {
        question: "Who is the only player to score 100 international centuries?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Jacques Kallis", "Ricky Ponting"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["Australia", "India", "West Indies", "England"],
        answer: "Australia"
    },
    {
        question: "What is the highest possible individual score in a single over in cricket?",
        options: ["36", "42", "50", "48"],
        answer: "36"
    },
    {
        question: "Who was the first bowler to take 600 Test wickets?",
        options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Courtney Walsh"],
        answer: "Courtney Walsh"
    },
    {
        question: "Which cricketer is nicknamed 'Captain Cool'?",
        options: ["Virat Kohli", "MS Dhoni", "Steve Waugh", "Eoin Morgan"],
        answer: "MS Dhoni"
    },
    {
        question: "What is the name of the cricket ground in Sydney?",
        options: ["Melbourne Cricket Ground", "Sydney Cricket Ground", "Adelaide Oval", "WACA Ground"],
        answer: "Sydney Cricket Ground"
    },
    {
        question: "Which player hit 6 sixes in an over in a T20 international match?",
        options: ["Yuvraj Singh", "Chris Gayle", "Kieron Pollard", "Shahid Afridi"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Who is the first cricketer to score a double century in ODI cricket?",
        options: ["Rohit Sharma", "Virender Sehwag", "Sachin Tendulkar", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country hosts the IPL (Indian Premier League)?",
        options: ["India", "Australia", "South Africa", "England"],
        answer: "India"
    },
    {
        question: "Who is the fastest bowler in cricket history?",
        options: ["Brett Lee", "Shoaib Akhtar", "Jeff Thomson", "Mitchell Starc"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Who scored 175 runs in the inaugural IPL match?",
        options: ["Chris Gayle", "AB de Villiers", "Brendon McCullum", "MS Dhoni"],
        answer: "Brendon McCullum"
    },
    {
        question: "Who is the first cricketer to take 500 wickets in ODI cricket?",
        options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Shaun Pollock"],
        answer: "Wasim Akram"
    },
    {
        question: "Which country is referred to as the Proteas in cricket?",
        options: ["Australia", "South Africa", "New Zealand", "West Indies"],
        answer: "South Africa"
    },
    {
        question: "Which cricketer is known as the 'Universe Boss'?",
        options: ["AB de Villiers", "Chris Gayle", "Kieron Pollard", "Andre Russell"],
        answer: "Chris Gayle"
    },
    {
        question: "Which Indian cricketer holds the record for the fastest T20I fifty?",
        options: ["KL Rahul", "Yuvraj Singh", "Rishabh Pant", "Virat Kohli"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which cricket format lasts up to 5 days?",
        options: ["ODI", "T20", "Test", "The Hundred"],
        answer: "Test"
    },
    {
        question: "Who is the only cricketer to play in 6 ICC World Cup finals?",
        options: ["Steve Waugh", "Ricky Ponting", "MS Dhoni", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    // ... Add more questions up to 50
];

function RandomQuestion() {

    // const data=new Set();

    // while(data.size!=5) {
    //     const index=Math.floor(Math.random()*20);
    //     data.add(cricketQuestions[index]);
    // }
   
    // // Convert Set into Array
    // return [...data];

    // 2nd Method
    // Randomly Sort Karenge isko aaj hmm Log

    // nlogn()

//     cricketQuestions.sort(()=>0.5-Math.random());
//    return  cricketQuestions.slice(0,5);

const arr=[];
let len=cricketQuestions.length;

for(let i=0;i<5;i++) {
   let index= Math.floor(Math.random()*len);
   arr.push(cricketQuestions[index]);
   [cricketQuestions[index],cricketQuestions[len-1]]=[cricketQuestions[len-1],cricketQuestions[index]];
   len--;   
}
return arr;

}



// Select the form and insert all the element;
// obj= {
//     question: "Who is known as the 'God of Cricket'?",
//     options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Muttiah Muralitharan"],
//     answer: "Sachin Tendulkar"
// },



let timeLeft=30;
let timerElement=document.getElementById("timer");

const form=document.querySelector('form');
const problem=RandomQuestion();
let original_answer={};
problem.forEach((obj,index)=>{
    
    original_answer[`q${index+1}`]=obj['answer'];
    const div_element=document.createElement('div');
    div_element.className="question";
    
    const para=document.createElement('p');
    para.innerHTML=`${index+1}. ${obj['question']}`;
    div_element.appendChild(para);

    // Create 4 Options
    // options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Muttiah Muralitharan"],

    obj['options'].forEach((data)=>{

        const label=document.createElement('label');
        const input=document.createElement('input');
        input.type="radio";
        input.name=`q${index+1}`;
        input.value=data;

        label.appendChild(input);
        const text=document.createTextNode(data);
        label.appendChild(text);

        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));


    })

    form.appendChild(div_element);

})

// console.log(answer_list);

const button=document.createElement('button');
button.type="submit";
button.className="submit-btn";
button.innerHTML="Submit";
form.appendChild(button);

console.log(original_answer);

// find the Result 
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let result=0;
  const data=new FormData(form);

  for(let [key,value] of data.entries()) {
    if(original_answer[key]===value) {
        result++;
    }
  }
  const res=document.getElementById('result');
  res.innerHTML=`${result} out of 5 is Correct`;  
  form.reset();

})









