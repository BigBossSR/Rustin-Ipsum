//possible options
	// use document.write() to populate an html doc, but if it's linked to a button that will wipe all html from the page
	// use document.innerHTML()

	//textContent to grab a container and put content instide:
	//here, div.textContent could = ""
/*	<div id="textDiv"></div>
<script type="text/javascript">
    var div = document.getElementById("textDiv");
    div.textContent = "my text";
    var text = div.textContent;
</script>*/




function pickQuote (obj) {
//	var wordArr = []
//	for (var key in obj) {
//		wordArr.push(key)
//	}
	wordArr.sort()
//	wordArr.join()
//	return wordArr


}


function shuffleArray(array) { //can take a second paramater from the form, to pick how many quotes?
	//repopulate array if necessary
/*	console.log(output)
if (output > 1) {

    }*/
  

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // My code

  	var output = "" 

//checks if there are more than three quotes in the array
    //if (array.length > 3) {
   	var paragraphs = document.getElementById("number").value

    for (var l = 0; l < paragraphs; l++ ) {

		    	var newArray = []
    	//loop the wordbank up to four times, and populates the new array
		    for (var k = 0; k < 3; k++) {
		    	if (newArray.length < 300) {
		    		if (Math.floor(Math.random() * 10) > 4) {
				    	newArray = newArray + array.shift([k]) + " Sip Lone Star. "
					} else {
						newArray = newArray + array.shift([k]) + " Drag on Camel. "
					}
				}
		    }
	
		    	output = output + newArray + "\n\n"
    }
    	var repop = output.split("\n\n")
    	console.log(repop)
    	for (var m = 0; m < repop.length; m++) {
    		array.push(repop[m])
    		// array = array + repop.shift([m])

    	}

    return output
    //



   // return array;
}

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


var wordBank = {
	1: "In philosophical terms I'm what's called a pessimist... I think human consciousness is a tragic misstep in evolution. We became too self-aware. Nature created an aspect of nature separate from itself - we are creatures that should not exist by natural law... We are things that labor under the illusion of having a self, that accretion of sensory experience and feelings, programmed with total assurance that we are each somebody, when in fact everbody's nobody... I think the honorable thing for our species to do is to deny our programming. Stop reproducing, walk hand in hand into extinction - one last midnight, brothers and sisters opting out of a raw deal. &#8226 ",
	2: "It's all one ghetto man, giant gutter in outer space. &#8226 ",
	3: "This place is like somebody's memory of a town, and the memory is fading. It's like there was never anything here but jungle. &#8226 ",
	4: "I contemplate the moment in the garden; the idea of allowing your own crucifixion. &#8226 ",
	5: "World needs bad men. We keep the other bad men from the door. &#8226 ",
	6: "Been that way since one monkey looked at the sun and told the other monkey, 'He said for you to give me your fucking share.' People... so god damn frail they'd rather put a coin in the wishing well than buy dinner. &#8226 ",
	7: "If the common good's gotta make up fairy tales then it's not good for anybody. &#8226 ",
	8: "If the only thing keeping a person decent is the expectation of divine reward, then brother that person is a piece of shit; and I'd like to get as many of them out in the open as possible. &#8226 ",
	9: "What's it say about life, hmm? You gotta get together, tell yourself stories that violate every law of the universe just to get through the god damn day. Nah. What's that say about your reality? &#8226 ",
	10: "You see we all got what I call a life trap, a gene deep certainty that things will be different... that you'll move to another city and meet the people that'll be the friends for the rest of your life... that you'll fall in love and be fulfilled... fucking fulfillment... and closure whatever the fuck those two fuckin' empty jars to hold this shit storm. Nothing's ever fulfilled, not until the very end. And closure. Nothing is ever over. &#8226 ",
	11: "I have seen the finale of thousands of lives, man. Young, old, each one so sure of their realness. You know that their sensory experience constituted a unique individual with purpose and meaning. So certain that they were more than biological puppet. The truth wills out, and everybody sees. Once the strings are cut, all fall down. &#8226 ",
	12: "They saw, in that last nanosecond, they saw... what they were. You, yourself, this whole big drama, it was never more than a jerry rig of presumption and dumb will, and you could just let go. To finally know that you didn't have to hold on so tight. To realize that all your life, all your love, all your hate, all your memories, all your pain, it was all the same thing. It was all the same dream, a dream that you had inside a locked room, a dream about being a person. And like a lot of dreams, there's a monster at the end of it. &#8226 ",
	13: "The ontological fallacy of expecting a light at the end of the tunnel, well, that's what the preacher sells, same as a shrink. See, the preacher, he encourages your capacity for illusion. Then he tells you it's a fucking virtue. Always a buck to be had doing that, and it's such a desperate sense of entitlement, isn't it? &#8226 ",
	14: "Think of the hubris it must take to yank a soul out of non existence into this... meat, to force a life into this... thresher. &#8226 ",
	15: "Look, as sentient meat, however illusory our identities are, we craft those identities by making value judgments: everybody judges, all the time. Now, you got a problem with that... You're livin' wrong. &#8226 ",
	16: "Life's barely long enough to get good at one thing. So be careful what you get good at. &#8226 ",
	17: "In eternity, where there is no time, nothing can grow. Nothing can become. Nothing changes. So death created time to grow the things that it would kill... and you are reborn but into the same life that you've always been born into. I mean, how many times have we had this conversation? Well, who knows? When you can't remember your lives, you can't change your lives, and that is the terrible and the secret fate of all life. You're trapped... like a nightmare you keep waking up into. &#8226 ",
	18: "Death created time to grow the things that it would kill. &#8226 ",
	19: "This is a world where nothing is solved. Someone once told me, 'Time is a flat circle.' Everything we've ever done or will do, we're gonna do over and over and over again. &#8226 ",
}

