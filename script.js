document.addEventListener('DOMContentLoaded', function() {

    let x, y;
    let score = 0;

    const generateQuestion = () => {
        x = Math.ceil(Math.random() * 10);
        y = Math.ceil(Math.random() * 10);

        document.getElementById('question').innerHTML = `${x} + ${y}`;

    }

    generateQuestion();
    

    document.getElementById('btn').addEventListener('click', () => {


        let res = document.getElementById('answerField').value;

        if (res == "") {
            alert("Answer field cannot be empty");
        }
        else {

            if (res == x + y) {
                score++;
            }

            else {

                score--;  
            
            }

            document.getElementById('score').innerHTML = ` Score: ${score}`;
            document.getElementById('answerField').value = "";
            generateQuestion();

        }



    });

    //footer 

    document.getElementById('year').textContent = new Date().getFullYear();

});