const form = document.querySelector(".quiz-box");
const answers = Array.from(document.querySelectorAll(".answer"));
const allQuestion = document.querySelectorAll(".question");
const modal = document.querySelector(".modal");
const nextBtn = document.querySelector(".nextBTn");


const modalInfo = document.querySelector("P");
//console.log(answers);
const modalclose = document.querySelector(".close-modal");

const hanldeQuiz = e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answer => answer.checked);
   
    const isTrue = checkedAnswers.every(answer => answer.value === 'true');
    const allChecked = checkedAnswers.length === allQuestion.length;
    //console.log(isTrue);
    
    
    if(!allChecked) {
        modal.classList.add("modal-active");
        modalInfo.textContent = 'Wybierz szystkie  odpowiedzi!';
        
    };

    checkedAnswers.forEach(answer => {
        const checkifcorrect = answer.value === 'true';
        const answerBox = answer.closest(".answer-box");

        if (checkifcorrect) {
            answerBox.classList.add("correct");
            answerBox.classList.remove("incorrect");
            
            
        } 
        
        else {
            answerBox.classList.add("incorrect");
            answerBox.classList.remove("correct");
            
        };

        if (isTrue === allChecked) {
            modal.classList.add("modal-active");
            nextBtn.classList.add("nextBTnActive");
            
            modalInfo.textContent = 'Zaliczyłeś Quiz (kliknij przycisk)';
        } 
        if (answer.value === 'false') {
            modal.classList.add("modal-active");
            modalInfo.textContent = '🤦‍♂️ Nie udało ci się';
        }




       
        
    });
    
        

   
    

};


const closemodal = () => {
    modal.classList.remove("modal-active");
    nextBtn.classList.remove("nextBTnActive");
};


modalclose.addEventListener('click', closemodal)
form.addEventListener('submit', hanldeQuiz);