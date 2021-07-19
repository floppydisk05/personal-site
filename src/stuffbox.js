//@Project: Nick Higgins' Web Site 
//@Author:  Nicholas Higgins
//@Contact: spybob888@aol.com
//@Created: 10:33 AM Sunday, January 31, 2016
//@Modified: 11:25 AM Thursday, April 09, 2020


function randInt(size) {
  return Math.ceil(Math.random()*size);
}
	function getJoke(jNum)
	{
		var mtJokes = new Array();
		mtJokes[1] = "What's the difference between a well-dressed person on a bicycle and a poorly dressed person on a tricycle?	Attire.";
		mtJokes[2] = "Wenn ist das Nunstuck git und Slotermeyer? Ja! Beiherhund das Oder die Flipperwaldt gersput!";
		mtJokes[3] = "Why did the chicken cross the road? The people on the other side weren't looking at this page.";
		mtJokes[4] = "Gone - A nice woody sounding word.";
		mtJokes[5] = "A horse walks into a bar. The bartender asks,\"Why the long face?\"";
		mtJokes[6] = "What, are you just going to sit there? Look through the rest of the site!";
		mtJokes[7] = "Brains can get messy.";
		mtJokes[8] = "Did you hear about the constipated mathematician? He worked it out with a pencil.";
		mtJokes[9] = "I once tried to catch fog. I mist.";
		mtJokes[10] = "When chemists die, they barium.";
		mtJokes[11] = "Two antennas met on a roof, fell in love and got married. The Ceremony wasn't much, but the reception was excellent.";
		mtJokes[12] = "There were 2 peanuts walking down the alley... One of them was assaulted... peanut";
		mtJokes[13] = "When chemists die, they barium.";
		mtJokes[14] = "Two cannibals are eating a clown. One says to the other: Does this taste funny to you?";
		mtJokes[15] = "Deja Moo: The feeling that you've heard this bull before.";
		mtJokes[16] = "How much did the pirate pay for his corn on the cob? A buck an ear.";
		mtJokes[17] = "Whoever invented knock knock jokes should get a no bell prize";
		mtJokes[18] = "Q: What is both brown and sticky? A: A stick.";
		mtJokes[19] = "A magic tractor drives down the road and turns into a field.";
		mtJokes[20] = "Q: What's white and can't climb trees? A: A fridge.";
		mtJokes[21] = "This book about anti-gravity is so good, I can't put it down!";
		mtJokes[22] = "Broken pencils are pointless.";
		mtJokes[23] = "How does Moses make his tea? Hebrews it.";
		mtJokes[24] = "PMS jokes aren't funny, period.";
		mtJokes[25] = "Jokes about German sausages are the wurst.";
		mtJokes[26] = "I know a guy who's addicted to brake fluid. He claims he can stop anytime.";
		mtJokes[27] = "I didn't like this beard at first, but it's starting to grow on me.";
		mtJokes[28] = "Energizer bunny arrested: Charged with battery.";
		mtJokes[29] = "When you get a bladder infection, urine trouble.";
		mtJokes[30] = "I once stayed up all night to see where the sun went... Then it dawned on me.";
		mtJokes[31] = "What does a clock do when it's hungry? It goes back four seconds.";
		mtJokes[32] = "A cab driver reaches the pearly gates. St. Peter looks him up in his Big Book and tells him to pick up a gold staff and a silk robe and proceed into Heaven. Next in line is a preacher. St. Peter looks him up in his Big Book, furrows his brow and says, \"OK, we'll let you in, but take that cloth robe and wooden staff.\" The preacher is shocked and replies, \"But I am a man of the cloth. You gave that cab driver a gold staff and a silk robe. Surely I rate higher than a cabbie!\" St. Peter responds matter-of-factly, \"This is Heaven and up here, we are interested in results. When you preached, people slept. When the cabbie drove his taxi, people prayed!\"";
		mtJokes[33] = "The joke previously in this slot has been deleted.";
		mtJokes[34] = "I was in the restaurant yesterday when I suddenly realized I desperately needed to pass gas. The music was really, really loud, so I timed my gas with the beat of the music. After a couple of songs, I started to feel better. I finished my coffee, and noticed that everybody was staring at me... Then I suddenly remembered that I was wearing headphones.";
		mtJokes[35] = "A woman is having a hard time getting her tomatoes to ripen so she goes to her neighbor with her problem. The neighbor says, \"All you have to do is go out at midnight and dance around in the garden naked for a few minutes, and the tomatoes will become so embarrassed, they will blush bright red.\" The woman goes out at midnight and dances around her garden naked for a few minutes. The next morning, the neighbor comes over to the woman's house and asks the woman if her tomatoes have turned red. The woman says \"No, they're still green, but I noticed the cucumbers grew four inches!\"";
		mtJokes[36] = "A young boy enters a barber shop and the barber whispers to his customer, “This is the dumbest kid in the world. Watch while I prove it to you.” The barber puts a dollar bill in one hand and two quarters in the other, then calls the boy over and asks, “Which do you want, son?” The boy takes the quarters and leaves. “What did I tell you?” said the barber. “That kid never learns!” Later, when the customer leaves, he sees the same young boy coming out of the ice cream store. “Hey, son! May I ask you a question? Why did you take the quarters instead of the dollar bill?” The boy licked his cone and replied, “Because the day I take the dollar, the game is over!”";
		mtJokes[37] = "The phone rings at FBI headquarters. “Hello? I’m calling to report my neighbor, Clifford. He is hiding marijuana inside his firewood!” “Thank you very much for the call, sir.” The next day, FBI agents descend on the neighbor’s house. They search the shed where the firewood is kept. Using axes, they bust open every piece of wood, but find no marijuana. They swear at the neighbors and leave. The phone rings at the neighbors house. Hey, Clifford, did the FBI come?” “Yep.” “Did they chop your firewood?” “Yep.” “Great, now it’s your turn to call. I need my garden plowed.”";
		mtJokes[38] = "The man approached the very beautiful woman in the large supermarket and asked, \"You know, Ive lost my wife here in the supermarket. Can you talk to me for a couple of minutes?\" \"Why?\" \"Because every time I talk to a beautiful woman my wife appears out of nowhere.\"";
		mtJokes[39] = "Three men were at a bar discussing coincidences. The first man said, \"My wife was reading A Tale of Two Cities and she gave birth to twins.\" \"That’s funny,\" the second man remarked, \"My wife was reading The Three Musketeers and she gave birth to triplets.\" The third man shouted, \"Oh my, I have to rush home!\" When asked what the problem was, he exclaimed, \"When I left the house, my wife was reading Ali Baba and the Forty Thieves!\"";
		mtJokes[40] = "Bill has worked in a pickle factory for several years. One day he confesses to his wife that he has a terrible urge to stick his penis into the pickle slicer. His wife suggests that he see a therapist to talk about it, but Bill vows to overcome this rash desire on his own. A few weeks later, Bill returns home absolutely ashen. His wife asks, \"What's wrong, Bill?\" \"Do you remember how I told you about my tremendous urge to put my penis into the pickle slicer?\" His wife gasps, \"My God, Bill, what happened?\" \"I got fired.\" \"No, Bill I mean, what happened with the pickle slicer?\" \"Oh, um, she got fired, too.\"";
		mtJokes[41] = "A Lawyer was briefing his client, who was about to testify in his own defense. \"You must swear to tell the complete truth. Do you understand?\" The client replied that he did. The lawyer then asked, \"Do you know what will happen if you don't tell the truth?\" The client looked back and said, \"I imagine that our side will win.\"";
		mtJokes[42] = "A little boy, at a wedding looks at his mom and says, “Mommy, why does the girl wear white?” His mom replies, “The bride is in white because she’s happy and this is the happiest day of her life.” The boy thinks about this, and then says, “Well then, why is the boy wearing black?”";
		mtJokes[43] = "Four surgeons are comparing the type of patients they consider the easiest to operate on. The first surgeon says, \"I like to operate on electricians, because when you open them up everything is color coded.\" The second surgeon says, \"I prefer to operate on accountants, because when you open them up everything is numbered.\" The third surgeon says, \"I think librarians are the easiest to operate on because everything inside them is in alphabetic order.\" The fourth surgeon says, \"I've got you all beat. I like to operate on politicians best. They are by far the easiest because they have no guts, no heart, no spine and their head and behind interchangeable.\"";
		mtJokes[44] = "Trump: \"Did you just say I need to be smarter? You couldn’t even remember the name of your college, you graduated near the bottom of your class. Don’t ever criticize how smart I am ever again.\"";
		mtJokes[45] = "How does every German joke start? By looking over your shoulder.";
		mtJokes[46] = "Niters and jams";
		mtJokes[47] = "I;m thinking about thos beans";
		mtJokes[48] = "you wouldn't piracy";
		mtJokes[49] = "You in the butter zone now, baby";
		mtJokes[50] = "succ is dead. no succ.";

				
		return mtJokes[jNum];
	}
	document.write(getJoke(randInt(50)));
