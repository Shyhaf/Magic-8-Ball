$(document).ready(function(){
    var magic8ball = {};
    magic8ball.listAnswers = ["As if", "Uhm, of course", "Dumb question.", "Forget about it.", "What are you? Clueless", "In your dreams!", "No", "Not a chance", "Obviously", "Sure", "That's ridiculous", "Well, maybe.", "What do you think?", "Whatever, who cares?", "Yeah, and I'm the Pope", "Yeah, right", "You wish", "You've got to be kidding", "Definitely!", "As sure as the sky is blue", "Yes!", "Of course", "Without a doubt", "Most definitely", "Absoluely", "100% yes", "No doubt about it", "I guarantee it" ];
    $("#answer").hide(); 
    magic8ball.askQuestion = function(question){
        $("#answer").fadeIn(3000);
        $("#8ball").effect("shake");
           var randomNumber = Math.random ();
           var randomNumberArray = randomNumber * magic8ball.listAnswers.length;
           var randomIndex = Math.floor (randomNumberArray);
           var randomAnswer = magic8ball.listAnswers [randomIndex];
        
           $("#answer").text(randomAnswer);
           $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
           $("#answer").fadeOut(2000);
       };
    
       var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        setTimeout(
            function() {
                var question = prompt("Ask a yes/no question. I have much knowledge.")
                magic8ball.askQuestion(question)
            }, 500);
        
       
           
       
           
       };
       
       $("#questionButton").click( onClick);

    });