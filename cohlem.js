

function shuffleArray() { 

    var array=[]
    var output = "" 
   	var paragraphs = document.getElementById("number").value
   	var newArray = []


//checks if the user wants cusses and populates var array with the contents of wordBank or cleanBank
    if(document.getElementById("dirty").checked) {
    	for (var i=0; i<wordArr.length; i++) {
		array[i] = wordArr[i]

		}
	} else {
		for (var i=0; i<cleanArr.length; i++) {
		array[i] = cleanArr[i]
		}
	}
    
//randomizes the array contents. i did not write this, i found it on stack overflow
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

//sets the number of paragraphs based on user input
    for (var l = 0; l < paragraphs; l++ ) {
    	//loops through the shuffled quote bank, breaking paragraphs after 3 quotes, or exceeding 300 characters
		    for (var k = 0; k < 3; k++) {
		    	if (newArray.length < 300) {
		    //inserts filler text at a 50/50 rate, and sets the dramatic environment
		    		if (Math.floor(Math.random() * 10) > 4) {
				    	newArray = newArray + array.shift([k]) + " Sip Lone Star. "
					} else {
						newArray = newArray + array.shift([k]) + " Drag on Camel. "
					}
				}
		    }
		    	output = output + newArray + "\n\n"
    }

    return output
}

//randomizes background image
$(document).on("ready", function() {

	var imagePick = "url('assets/cohle"+(Math.floor(Math.random() * 5))+".jpg')"

	$("body").css({"background-image":imagePick})

})


var wordArr = [
	"In philosophical terms I'm what's called a pessimist... I think human consciousness is a tragic misstep in evolution. We became too self-aware. Nature created an aspect of nature separate from itself - we are creatures that should not exist by natural law... We are things that labor under the illusion of having a self, that accretion of sensory experience and feelings, programmed with total assurance that we are each somebody, when in fact everbody's nobody... I think the honorable thing for our species to do is to deny our programming. Stop reproducing, walk hand in hand into extinction - one last midnight, brothers and sisters opting out of a raw deal.",
	"It's all one ghetto man, giant gutter in outer space.",
	 "This place is like somebody's memory of a town, and the memory is fading. It's like there was never anything here but jungle.",
	 "I contemplate the moment in the garden; the idea of allowing your own crucifixion.",
	 "World needs bad men. We keep the other bad men from the door.",
	 "Been that way since one monkey looked at the sun and told the other monkey, 'He said for you to give me your fucking share.' People... so god damn frail they'd rather put a coin in the wishing well than buy dinner.",
	 "If the common good's gotta make up fairy tales then it's not good for anybody.",
	 "If the only thing keeping a person decent is the expectation of divine reward, then brother that person is a piece of shit; and I'd like to get as many of them out in the open as possible.",
	 "What's it say about life, hmm? You gotta get together, tell yourself stories that violate every law of the universe just to get through the god damn day. Nah. What's that say about your reality?",
	 "You see we all got what I call a life trap, a gene deep certainty that things will be different... that you'll move to another city and meet the people that'll be the friends for the rest of your life... that you'll fall in love and be fulfilled... fucking fulfillment... and closure whatever the fuck those two fuckin' empty jars to hold this shit storm. Nothing's ever fulfilled, not until the very end. And closure. Nothing is ever over.",
	 "I have seen the finale of thousands of lives, man. Young, old, each one so sure of their realness. You know that their sensory experience constituted a unique individual with purpose and meaning. So certain that they were more than biological puppet. The truth wills out, and everybody sees. Once the strings are cut, all fall down.",
	 "They saw, in that last nanosecond, they saw... what they were. You, yourself, this whole big drama, it was never more than a jerry rig of presumption and dumb will, and you could just let go. To finally know that you didn't have to hold on so tight. To realize that all your life, all your love, all your hate, all your memories, all your pain, it was all the same thing. It was all the same dream, a dream that you had inside a locked room, a dream about being a person. And like a lot of dreams, there's a monster at the end of it.",
	 "The ontological fallacy of expecting a light at the end of the tunnel, well, that's what the preacher sells, same as a shrink. See, the preacher, he encourages your capacity for illusion. Then he tells you it's a fucking virtue. Always a buck to be had doing that, and it's such a desperate sense of entitlement, isn't it?",
	 "Think of the hubris it must take to yank a soul out of non existence into this... meat, to force a life into this... thresher.",
	 "Look, as sentient meat, however illusory our identities are, we craft those identities by making value judgments: everybody judges, all the time. Now, you got a problem with that... You're livin' wrong.",
	 "Life's barely long enough to get good at one thing. So be careful what you get good at.",
	 "In eternity, where there is no time, nothing can grow. Nothing can become. Nothing changes. So death created time to grow the things that it would kill... and you are reborn but into the same life that you've always been born into. I mean, how many times have we had this conversation? Well, who knows? When you can't remember your lives, you can't change your lives, and that is the terrible and the secret fate of all life. You're trapped... like a nightmare you keep waking up into.",
	 "Death created time to grow the things that it would kill.",
	 "This is a world where nothing is solved. Someone once told me, 'Time is a flat circle.' Everything we've ever done or will do, we're gonna do over and over and over again.",
	]

var cleanArr = [
	"In philosophical terms I'm what's called a pessimist... I think human consciousness is a tragic misstep in evolution. We became too self-aware. Nature created an aspect of nature separate from itself - we are creatures that should not exist by natural law... We are things that labor under the illusion of having a self, that accretion of sensory experience and feelings, programmed with total assurance that we are each somebody, when in fact everbody's nobody... I think the honorable thing for our species to do is to deny our programming. Stop reproducing, walk hand in hand into extinction - one last midnight, brothers and sisters opting out of a raw deal.",
	"It's all one ghetto man, giant gutter in outer space.",
	 "This place is like somebody's memory of a town, and the memory is fading. It's like there was never anything here but jungle.",
	 "I contemplate the moment in the garden; the idea of allowing your own crucifixion.",
	 "World needs bad men. We keep the other bad men from the door.",
	 "Been that way since one monkey looked at the sun and told the other monkey, 'He said for you to give me your #$*%ing share.' People... so g#$*%!n frail they'd rather put a coin in the wishing well than buy dinner. ",
	 "If the common good's gotta make up fairy tales then it's not good for anybody.",
	 "If the only thing keeping a person decent is the expectation of divine reward, then brother that person is a piece of #$*%; and I'd like to get as many of them out in the open as possible. ",
	 "What's it say about life, hmm? You gotta get together, tell yourself stories that violate every law of the universe just to get through the g#$*%!n day. Nah. What's that say about your reality? ",
	 "You see we all got what I call a life trap, a gene deep certainty that things will be different... that you'll move to another city and meet the people that'll be the friends for the rest of your life... that you'll fall in love and be fulfilled... #$*%ing fulfillment... and closure whatever the #$*% those two #$*%in' empty jars to hold this #$*% storm. Nothing's ever fulfilled, not until the very end. And closure. Nothing is ever over. ",
	 "I have seen the finale of thousands of lives, man. Young, old, each one so sure of their realness. You know that their sensory experience constituted a unique individual with purpose and meaning. So certain that they were more than biological puppet. The truth wills out, and everybody sees. Once the strings are cut, all fall down.",
	 "They saw, in that last nanosecond, they saw... what they were. You, yourself, this whole big drama, it was never more than a jerry rig of presumption and dumb will, and you could just let go. To finally know that you didn't have to hold on so tight. To realize that all your life, all your love, all your hate, all your memories, all your pain, it was all the same thing. It was all the same dream, a dream that you had inside a locked room, a dream about being a person. And like a lot of dreams, there's a monster at the end of it.",
	 "The ontological fallacy of expecting a light at the end of the tunnel, well, that's what the preacher sells, same as a shrink. See, the preacher, he encourages your capacity for illusion. Then he tells you it's a #$*%ing virtue. Always a buck to be had doing that, and it's such a desperate sense of entitlement, isn't it? ",
	 "Think of the hubris it must take to yank a soul out of non existence into this... meat, to force a life into this... thresher.",
	 "Look, as sentient meat, however illusory our identities are, we craft those identities by making value judgments: everybody judges, all the time. Now, you got a problem with that... You're livin' wrong.",
	 "Life's barely long enough to get good at one thing. So be careful what you get good at.",
	 "In eternity, where there is no time, nothing can grow. Nothing can become. Nothing changes. So death created time to grow the things that it would kill... and you are reborn but into the same life that you've always been born into. I mean, how many times have we had this conversation? Well, who knows? When you can't remember your lives, you can't change your lives, and that is the terrible and the secret fate of all life. You're trapped... like a nightmare you keep waking up into.",
	 "Death created time to grow the things that it would kill.",
	 "This is a world where nothing is solved. Someone once told me, 'Time is a flat circle.' Everything we've ever done or will do, we're gonna do over and over and over again.",
	]
