const data = [
    {
        id: 1,
        question: "Tỉnh nào nằm ở cực nam của Việt Nam ?",
        answers: [
            { answer: "Hải Phòng", isCorret: false },
            { answer: "Vũng Tàu", isCorret: false },
            { answer: "Cà Mau", isCorret: true },
            { answer: "Vĩnh Long", isCorret: false },            
        ],
    },
    {
        id: 2,
        question: "Nước ta có bao nhiêu tỉnh và thành phố ?",
        answes: [
            { answer: "60 tỉnh và 8 thành phố", isCorret: false },
            { answer: "58 tỉnh và 5 thành phố", isCorret: true },
            { answer: "50 tỉnh và 6 thành phố", isCorret: false },
            { answer: "55 tỉnh và 6 thành phố", isCorret: false },
        ],
    },
    {
        id: 3,
        question: "Hoàng Sa và Trường Sa là của nước nào ?",
        answers: [
            { answer: "Trung Quốc", isCorret: false },
            { answer: "Việt Nam", isCorret: true },
            { answer: "Nhật Bản", isCorret: false },
            { answer: "Philipin", isCorret: false },
        ],
    },
    {
        id: 4,
        question: "Nước ta thuộc kiểu khí hậu nào ?",
        answers: [
            { answer: "vùng khí hậu nhiệt đới ", isCorret: true },
            { answer: "Vùng khí hậu khô", isCorret: false },
            { answer: "Vùng khí hậu ôn đới", isCorret: false },
            { answer: "Vùng khí hậu lục địa", isCorret: false },
        ],
    },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const playButton = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer //Tạo biến true false

const showQuestion = (qNumber) =>{
    selectedAnswer = null; // ở mỗi câu hỏi khác nhau, Answer sẽ bị reset
    question.textContent = data[qNumber].question; //lệnh sẽ gọi số index của câu hỏi thứ qNumber
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `
        <div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorret} />
            <label for="1">${item.answer}</label> 
        </div>
        `
    )
    .join(""); 
    
    selectAnswer();
}; 

const selectAnswer = () => {
    answersContainer.querySelectorAll(".input").forEach((el) =>{ //el = element
        el.addEventListener("click",(e)=>{ //e = event
            selectedAnswer = e.target.value; //chọn đáp án true or false
        });//48:13
    });
};


const submitAnswer = () => {                   
    submit.addEventListener("click",() => {
        if(selectedAnswer !== null){ 
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        }else alert("Select an answer!");
    });        
};

showQuestion(qIndex);
submitAnswer();