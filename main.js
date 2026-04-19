//=========================================================================

//  ==          ==        ==        ========    ========
//   ==        ==        ====       ==     ==  ==
//    ==      ==        ==  ==      ==     ==  ==
//     ==    ==        ==    ==     ========    ========
//      ==  ==        ==========    == ==              ==
//       ====        ==        ==   ==   ==            ==
//        ==        ==          ==  ==     ==   ========

//=========================================================================
var normalTickers = [
  "THE ENTITY IS WATCHING",
  "What even is a Quinquagintic?",
  "Distance, velocity, acceleration, jerk... what's the fourth derivative?",
  "Are you a male, female, trans, non-binary, Walmart shopping cart, attack helicopter, 1x2 Lego tile, second derivative of a rational function, an omega ordinal, a cube of paper, a tetrahedron made of metal, a lump of tungsten, a computer with Quinquagintic, or something else?",
  "Me? Oh, no, I'm in the third domain: Ordinals.",
  "99% of people can’t get to pink level!1!!1!11!",
  "HAHA RANDOMLY HARDCAP NUMBER GAIN",
  "What does ineffable mean again?",
  "Wait, what do you mean I can go below 1e-33?!",
  "One guy sat on a math graph—HEY! WHO MESSED UP THE QUADRATIC?!",
  "HARDSTYLE OVERLOAD!!!! WATCH OUT!!!!",
  "You've seen this message at least once.",
  "This message exists.",
  "What's not a color, but is associated with a few? I... don't know. I don't experience it, so I can't tell.",
  "i speak in lowercase.",
  "I SPEAK IN UPPERCASE.",
  "128√e980",
  "I wonder if I can drink liquid astatine...",
  "WHAT THE HELL IS UNOBTAINIUM??? WHAT IS ITS ELEMENT NUMBER???",
  "This is the 31st- wait, no, 32nd ticker added to the game. I forgot I split that one in two.",
  "The current year is 2097. If it's not, then I must be in the wrong timeline. If it is, congrats! You exist!",
  "I am Justcubing97. Why am I called Justcubing97? I don’t actually know! Here’s what I do know: 97 is a prime number, and the largest one below 100. For me, it represents being just almost complete, but needing something more. Just one more thing to hit that 100% completion.",
  "1 1 2 3 5 8 13 21 34 55 89",
  "THERE ARE MORE HYDROGEN ATOMS IN A MOLECULE OF WATER THAN STARS IN THE SOLAR SYSTEM???",
  "when undecillionth reset",
  "googol",
  "This news ticker, famously made public by the creator of Quinquagintic, Justcubing97, has been proudly presented at the top of your screen using the internet and the luck required to hit this specific news ticker, and for what purpose? To waste time so that other news tickers can’t appear. This is why! And now introducing: the News Ticker Upgraded! It can now display two news tickers at once, along with a curtain to block out the annoying ones!",
  "A, B, and C from the Pythagorean Theorem, Delta is technically D, and Delta from infinitesimal amounts as in f(x+Δx), e from Euler’s Number, f, g, and h from function notation, i, j, and k from the quaternion system, L for length, M for 1000, N for the natural numbers, zero (0) for O, pi technically evolved into P, Q for the rationals, and likewise, R for real numbers. You can turn 5 into S, + into T, the union symbol into U, and flip the exponentiation symbol (^) to get V. W for the whole numbers, and famously, x, y, and z as the three most common variables.",
  "OH MY GOD WHY ARE THERE 27 DELTAMATH PROBLEMS THIS TIME?????",
  "1797693134862315907729305190789024733617976978942306572734300- ERROR: INFINITY",
  "t̷̝̑͛ḧ̷̺̈́ę̸͍̄͌ ̵̹̈́̃e̶̻͌n̵̳͂t̷̞͘i̷̡̦̐̑ṫ̵̠͋y̸̯̋ ̷̛̮̙i̵͇̗̔ṡ̷̛̠ ̷̨͔́̀ẅ̸͓̰́̽a̸̪͊̑t̵̩̩̑c̵͈̀̃h̷̭͎̚i̵̢̅̆n̵̻͂̚g̴̹͉͐̓.̷̨̋ ̸̡͗̾î̶̗͖̋ ̵̧̝̎ḫ̴͐o̷̹̝̒̇p̵̖͂̓ẹ̷̖̚ ̵͈̎y̷̢̺̏͐ő̸͉̪ư̷̦̏r̴̛̤ẻ̶̠̲̏ ̷̥̥́̚ŏ̴̘̲̈́ṅ̶͚̭̍ ̸̦̥̉t̸̥͗ḩ̷͇͠ê̴̡̦ ̴̹̝͊̐t̵̤̰͊r̸̙͆̉į̷̖̈́́l̶̩̫̔̌l̸̘̀ĩ̷̟̟̕o̸̙̯̒̽n̵͈̊t̶͇̋h̸͈̾̚s̵̪̑̾.̷̦͂ ̸̫̉͘i̸̖̎͘͜f̷̳̂ ̴̨̣́̋y̶̘̌o̷̞̣͆͝ủ̵͎͝r̸̼͎͂͂ȩ̷̿ ̷̳͒n̸͎̎͐o̶͎̳͗̽t̶̳̝͑,̸̱̯͠ ̷̢̒̈́w̴̰̱͘e̷͇͛́l̸̺̟̑l̶͔̍̽.̶̛̼̂.̶̹̈́͝.̶̫̦̈́̕ ̸̓ͅu̶̯͌͠h̴̪͚̀ḣ̵̬͔.̶͚͕͛.̸̱̓ͅ.̶̗͗̍ ̸̫͍̀͠c̸̬̗͑r̷̰͌ä̵͇́p̵̱͎͑.̴̣̀ ̵̜͙̈́͌ỉ̴͇͘ ̸̼̰͗d̵̡̩͑ò̸͚́ͅn̵͕̐̊t̴͈̬̿̂ ̷͋͜͠ḳ̷͖͛n̵̗̹̂o̴̺̯̅͘w̷̱͛ ̵̠̽w̵͍͑̑ḧ̶̯̪̌ä̴̫́͝t̴̙͌̾ ̸̹̌͂ţ̶̌o̴̡̊̓ ̴̠̈́͑d̸̙̉õ̷͈͘ ̵̧͎̀̓h̸̳͘e̶̲͂r̸͇̟̐̂e̶̥̮͗̕.̷̢͕̄",
  "This was a triumph...",
  "2000 BPM GO!",
  "Now introducing: Undecillionth Reset: Reset all progress after this, and gain +1 UDP! Also, unlock Compound Challenges! (none of this exists).",
  "I fell asleep in class.",
  "If you're wondering why the news ticker changes speed... cool, you're hallucinating.",
  "Why are the layers in reverse order?",
  "e^iπ + 1 = 0",
  "My friend told me to quinquagintillionth root a quinquagintic function... she wanted me to mentally implode.",
  "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15- wait is the sequence of natural numbers copyrighted?",
  "df/dx = f",
  "The hell is tree(3)? What does it mean?",
  "if you're reading this get back to grinding",
  "asdfasf",
  "The next update will be in a few days to a few months.",
  "TRANSCENDENT CAP IS TRANSCENDENT",
  "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679... (these are all my digits) 100 DIGITS!!!",
  "Is the answer to this question 'no'?",
  "THIS SENTENCE IS FALSE.",
  "Does a set of all sets contain itself?",
  "If you travel back in time to kill your grandfather, are you alive or dead?",
  "Check out my 2026 Math Clock. It's in Dr. Zye's VERY Hard clock stream, maybe around the middle (I was middle of the spreadsheet when he posted).",
  "Find the integral of cos(x^2).",
  "What's the difference between C, C+, C++, and C#?",
  "If you have 0.999 repeating of a cookie, do you have a whole cookie?",
  "WHY ARE ALL OF THE RESET LAYERS BASED ON A SINGLE CURRENCY???",
  "If you've seen the message where my friend quinquagintillionth rooted a quinquagintic... yeah, I don't know if she cares about my emotional state. Maybe she does. I don't know. I never will.",
  "If you SOMEHOW survive the final reset layer... good luck in the second Domain. You’ll need it. Especially for the 4th and 6th layers. And 7th while I'm at it. I'm insane. And no one cares.",
  "[PART 1] Two people are trapped in a bedroom. There are no doors, no windows, only a standard household air conditioning vent and the basic bedroom amenities like a bed, bathroom, and bookshelf. The boy is an insane math prodigy, and the other is a psychopathic girl. The math prodigy attempts to calm her down using stunning fractal art, but she doesn't approve of it and attempts to harm the prodigy. He manages to slip away, performing some calculated movement around her and- IS THAT AN INTEGRAL AS A SWORD??? -uses an integral weapon to threaten her. The girl picks him up and throws him against the bed, stealing his integral in the process. She threatens her again, but then he says, \"STOP! I can use that integral to get us out of here!\" ...she doesn't care, so she decides to throw his integral away, and gets a 700-page AP World History: Modern textbook from the bookshelf in an attempt to hit him. The prodigy, however, calculates the time based on her perceived strength and manages to pull out a derivative- IS THAT A DERIVATIVE SHIELD??? -which blocks the book attack. Stay tuned for part 2!",
  "Wait... if you're stuck in a bedroom with a computer or laptop running Quinquagintic... does this imply the existence of other bedrooms with other events or people or games or activities? Do these imply clones of you, where they could be in relationships or be living a happier life?",
  "If there are 11 people and the teacher asks to pair up into twos... yeah, no, I'm being the odd one out.",
  "what the hell copilot DID YOU JUST TRY TO MAKE 102 MILESTONES IN ONE LAYER??? yeah no moving on to chatgpt!",
  "[PART 2] Eventually the girl calms down and sulks in the opposite corner while the prodigy tries to recover what is left of his sanity and weapons. The integral is fractured, and the derivatives are separated into the different letters of Lagrange notation. The prodigy goes to sleep. However, in a turn of events, the girl decides to sleep as well next to him in the same bed, deciding that he's had enough trauma for one day. Or was it 20 minutes? Anyway, he wakes up at like 3 AM, only to see the girl peacefully sleeping like a delicate work of art. He just doesn't move, afraid that one single misplaced atom would disrupt her snooze. The next morning comes, and he's slept again while she wakes up. There's nothing to do other than human needs in the bathroom and read, so she decides to get the crumpled textbook and start reading about the Industrial Revolution from the APWH: Modern textbook. The prodigy (ok let's give them names I'm tired of this, how about Phi and Ava) is still sleeping when Ava gets to read about the various revolutions in 1750-1900. But Phi eventually wakes up and they lock eye contact again. Stay tuned for part 3!",
  "did i really make that one specific news message say top instead of bottom",
  "-THE SINGULARITY- - Justcubing97 vs. SUPiFiNiTY vs. 3435Phi",
  "I don't know who SUPiFiNiTY is nor 3435Phi. They're copycats of me, as far as I know.",
  "6th added news ticker in 0.4.2...",
  "HOLY HYPERCAP, IT'S A NUMBER!",
  "Hey, psst, it's a hint for the Integer Domain! I... forgor",
  "pneumonoultramicroscopicsilicovolcanoconiosis YES I GOT IT",
  "hippoppotomonstrosesquippedaliophobia YES I GOT IT",
  "supercalifragilisticexpialidocious YES I GOT IT",
  "antidisestablishmentarianism YES I GOT IT",
  "hexakosioihexekontahexaphobia YES I GOT IT",
  "floccinaucinihilipilification YES I GOT IT",
  "\"\"'Need more quotes!' -Hevipelle\" -AD news ticker\" -AP news ticker",
  "BREAKING NEWS: Justcubing97 has suffered an unknown effect. Only his best friend knows about it, and no one knows his best friend. Investigations are ongoing to find out what has happened to Justcubing97. A friend of his suggested that \"Quinquagintification\" may have been a probable cause of his condition. Experts are currently researching this theory, but they have also suffered from this \"Quinquagtintification.\" We are working to solve this mysterious problem.",
  "BREAKING NEWS: \"Quinquagintification\" has now been processed and observed by enough people to form a reasonable conclusion. We suspect that it is a condition that rises from the victim playing a game called Quinquagintic for multiple hours without breaks. The experts have been dedicated at this game due to the unusual means of the game not being mainstream. Justcubing97, the first reported case of \"Quinquagtintification,\" most likely contracted this condition from developing the game for unhealthy periods of time. We are working to provide a cure.",
  "BREAKING NEWS: After extensive research, we have found a potential cure for \"Quinquagintification.\" We are currently testing it on volunteers, and we will provide updates on the progress of the cure. In the meantime, we suggest that people take breaks while playing Quinquagintic, and if you start to feel symptoms of \"Quinquagintification,\" such as excessive attachment to the game, emotional instability, or a desire to play the game for long periods of time without breaks, please seek help immediately. However, we have noticed that \"Quinquagtintification\" has spread outside of the suburbs that Justcubing97 resides in, as the game gets more and more popular. Please be careful.",
  "BREAKING NEWS: TH3R3 4R3 N0 N3W5. QU1NQUAG1NT1F1C4T10N 15 P3RM4N3NT. Y0U W1LL SUFF3R 1F Y0U PL4Y QU1NQUAG1NT1C. TH3 CURE W1LL N3V3R B3 F0UND. TH3 0NLY W4Y T0 4V01D QU1NQUAG1NT1F1C4T10N 15 TO N0T PL4Y QU1NQUAG1NT1C. TH3 S1NGULARITY 15 N3AR. N0 FUTUR3 UPD4T35 T0 TH15 51TU4T10N 0R TH3 G4M3 W1LL B3 M4D3. G00DBY3.",
  "BREAKING NEWS: The corrupted messsage supposedly brought by a so-called \"entity\" in the Quinquagintic community. Some theories suggest that this entity may be the one causing Quinquagintification in the first place. However, the cure we develop seems to have succeeded in human trials and with live subjects, so Quinquagintification may or may not subside within the upcoming months.",
  "BREAKING NEWS: Quinquagintification now has less than 50 infected cases in the areas surrounding Justcubing97's home. Our cure, therapy sessions, seem to be working. However, an unrelated flu outbreak has also started in the area. We reckon that was caused by sickness being brought in from the outside. This flu is intense from observation, so if no updates come to the story or the game, the flu has taken over. In the meantime, stay safe, wear a mask, and enjoy Quinquagintic responsibly.",
  "BREAKING NEWS: There are no more instances of Quinquagintification in the surrounding areas. The flu outbreak has also subsided. We are currently working to make the cure more widely available, and we are also researching the cause of Quinquagintification. We will provide updates on our research as we find out more information. In the meantime, we suggest that people take breaks while playing Quinquagintic, and if you start to feel symptoms of \"Quinquagintification,\" such as excessive attachment to the game, emotional instability, or a desire to play the game for long periods of time without breaks, please seek help immediately as this condition seems to be perpetual.",
  "WHAT DO YOU MEAN INSANITYCAP???",
  "derivative impresses integral by learning and speaking lagrange notation fluently",
  "Fun fact: the softcaps used to affect multiple currencies, but after learning that it wasn't the right choice, all of the softcaps now affect only Number. This means that the last five softcaps, from ABSOLUTE to TRANSCENDENT, will work in the Integer Domain and still affect Number only. The other softcaps will do NOTHING in the Integer Domain!",
  "Fun fact: the Integer Domain has 8 planned layers (including Number) and at least 7 more challenges! There's a tech theme to all of these layers, almost like how Algebraic Progression uses some sort of math milestones like quadratics, complex numbers, and integration, and Incremental Mass Rewritten is all physics and astronomy like with Supernovas, Quantum Foam, Big Rip, Atoms, Radiation, so on.",
  "Fun fact: my favorite non-97 number is 727, which is the WYSI number. 3rd favorite has to be 73939133.",
  "Fun fact: this is a fun fact because I said so.",
  "Fun fact: I don't consider the different domains' reset layers collectively. Otherwise there would be more than 20.",
  "Fun fact: magical, very magical world by Camellia is one of my favorite songs.",
  "Fun fact: I love ANTINEUTRINO WITCHCRAFT. It's a song by Camellia at 242 BPM that runs for approximately 6 minutes 23 seconds and goes from D minor to F# minor. There are three beat drops, one at the very beginning, the second I love, and the third F# minor one.",
  "Fun fact: Some tickers are only unlocked through progression. For example, if you're not at the Quintillionth Section, there will be a new specific ticker added to the giant lists.",
  "Why do we have to use base 10? Why not base 16? Or binary, or octal? Or base e? Or base 7+3i?",
  "If you remember that news message where she quinquagintillionth rooted a quinquagintic, yeah, that same one, I wanted to make her mentally implode with the plans of the Integer Domain. REVENGE!",
  "There's three people in a room. One is you, playing Quinquagintic responsibly, one is me, sleeping, and the other one is a girl sitting in the corner doing absolutely nothing.",
  "Why is 0! = 1?",
  "SINCE WHEN DID I HAVE 1.79e308 BROWSER TABS????",
  "WAIT, I just remembered something... never mind, I forgot.",
  "Since the reset layers are only 3 orders of magnitude apart, won't the reset layers be close together? Nah, SOFTCAPS EXIST!",
  "Reginald Gregory Alvenport III - quinquagintillionth rooter",
  "Who knows what BAN is? Not me.",
  "Justcubing97 says: if you know how to program, don't throw that skill away! You can do literally ANYTHING!",
  "seven hundred twenty seven",
  "five squaredth prime = 97",
  "googolPLEX",
  "googolDUplex",
  "googolTRIplex",
  "googolQUARTIplex",
  "googolQUINTIplex",
  "googolHEXIplex",
  "googolHEPTIplex",
  "googolOCTIplex",
  "googolNONAplex",
  "googolDECAplex",
  "googolUNDECAplex",
  "googolDUODECAplex",
  "googolTREDECAplex",
  "Why use subtractive RYB when additive RGB is better?",
  "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, YOU THOUGHT I WAS GONNA KEEP GOING HAHA NO MORE NUMBERS!",
  "WHO MADE ROYGBIV??????",
  "I LOVE incremental games. Check out some of my favorites like Road of Big Number Rewritten, Incremental Mass Rewritten, Algebraic Progression, The Point Tree, Pixelgrab, Shark Incremental, and Calculator Evolution!",
  "[PART 3] They make eye contact. They don't speak. They don't move. They only stare into each others' eyes. Is it forming a silent friendship? Or perhaps the start of a deadly conflict? ... Phi eventually goes back to sleep, first gazing in another direction, perhaps seeing a figure on the wall, before laying back down. (gosh darn it, so anticlimatic!) Ava goes back to reading the textbook. Like 20 minutes later, Phi wakes up again, before heading to the bathroom to get ready for whatever could happen next. He sits in the opposite corner of the room. \"So... what do you think all of this is?\" Phi starts, waving his arms around to dictate the scope of the question: the whole room. \"Eh, I don't really care. As long as we're kept alive I'm fine.\" Ava responds, not bothering to look up from her textbook to see him. \"This textbook is, like, the single most entertaining thing. I could be doing right now. But... maybe a coloring book would be nice...\" Phi doesn't say anything; he's usually quiet or silent. Instead, he just leans back against the wall and starts doing random math in his head. Stay tuned for part 4! (No! You dork, it's not part 24... the exclamation mark is purely for linguistic purposes and is NOT the factorial!)",
  "Spoiler: there are 10 Challenges in the Decimal Domain!",
  "Spoiler: the Integer Domain layers are (in order): Number, Binary, Data, Energy, Glitch, Lines of Code, Array, Recursion!",
  "Spoiler: there's going to be instances of one generator boosting a previous in a sequence, almost like- ANTIMATTER DIMENSIONS??? -IMR's star generators, but with an indefinite amount of generators.",
  "Spoiler: BPM1-6 are not actually going to be reset!",
  "Spoiler: the Recursion section of the Integer Domain is going to be a nightmare. I swear, there are like 2147483647 mini-stages in that one layer alone. AT TIME OF WRITING THIS, I'M ONLY AT THE DATA EXTENSION! AND MY PEN DIED!",
  "News message made by Justcubing97.",
  "Are you a male, female, trans, non-binary, Walmart shopping cart, attack helicopter, 1x2 Lego tile, second derivative of a rational function, an omega ordinal, a cube of paper, a tetrahedron made of metal, a lump of tungsten, a computer with Quinquagintic, a completed Muonic periodic table in IMR, a vermillion-colored fine-tip Sharpie, an AI made to check for mathematical syntax errors, a gaming headset, Camellia (the music artist), a MOVA globe, a water bottle filled EXACTLY 72.70097% with water, a copy of \"Unwind\" with chapter 24 missing, a Yamaha soprano recorder, an infinity cube, the Mandelbrot Set with a complex number exponent, a final star shard (IMR???), a CLP-330 electronic piano, a pitch of Bb6 at A4=452, a couch with torn cushions, or something else?",
  "Aleph wants to say something: this game sucks",
  "Gee, I get why Python is slow. An IDE struggles with the first two lines! And they're literally an input() for a variable!",
  "ChatGPT is hallucinating and repeating again... onto Gemini...",
  "Gemini isn't even responding to the correct message... onto- wait I GUESS I HAVE TO USE MYSELF AHH",
  "If you love long incremental games, I recommend Algebraic Progression, Road of Big Number Rewritten, The Point Tree, and Incremental Mass Rewritten!",
  "Keep going! Your number gain is great!",
  "[PART 4] Phi is currently taking a nap while Ava is learning about the Taiping Rebellion. Not much else happens. That is, until Ava speaks again. \"Hey, how long do you think we're gonna be in here?\" Phi wakes up, almost by coincidence, and responds. \"Eh, no idea. Just as long as we're fed, we'll-\" A slight beat from outside. Then another. They're getting more powerful, and soon their room starts vibrating. A hammer makes it through the wall, cracks forming. No voice, just hammer swings and impacts. Ava gets her textbook and gets away, getting closer to Phi, while he stands in the corner. Eventually, the opening is large enough that someone steps through. \"Come on. Get out. They're gonna trap you here.\" The guy talks, and immediately, Ava obliges. \"Hold on. They may be evil.\" Phi speaks, beckoning her to come back. Ava responds. \"Huh? They're friendly! Are you blind?\" \"No, we don't know these people.\" Phi speaks again, still wary. The guy speaks again. \"If we were evil, we would've left you two.\" Phi considers their thinking and decides that it's good enough for now. \"Fine, we'll go. But I have integrals and derivatives in case things go south.\" Stay tuned for part 5.",
  "\"bbe bib b\" - Remly",
  "Definition of recursion: do you know what recursion is? If so, you're done. If not, refer to the definition of recursion.",
  "Fractals are fun. I personally love the Mandelbrot Set and the corresponding Julia Sets. Koch Snowflake's also pretty cool.",
  "Let k = 0.999... then create a number 10k = 9.999... and then perform the operation 10k - k, which is 9k. With the actual numbers, this will be 9.999... - 0.999..., which is just 9 since all of the decimals cancel. Finally, divide by 9 on both sides to get k = 1. But hold on! k is also 0.999..., meaning by the transitive property, 0.999... = 1. SO I DO HAVE A WHOLE COOKIE!",
  "If I cut a cake into 9 slices, each being 0.111... in area relative to the whole cake. Where did the rest of it go? The remaining 0.0...01 will be on the knife you used to cut the cake.",
  "Let [O]{x} = (x^x)!{(x^x)!}(x^x)!. The only sane natural number input is 1 as 1^1 = 1. With 2, you get... uhh... WHAT THE HELL???",
  "WHEN YOU SEE IT- oh wait wrong game MY BAD-",
  "var infinity = hyperIterate(hyperIterate(10, 10), hyperIterate(10, 10)); function hyperIterate(input, repeat){ if (repeat == 0) return Math.pow(input, input); else return hyperIterate(Math.pow(input, input), repeat - 1); }",
  "1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801, 10000...",
  "1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 550368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000...",
  "1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820, 861, 903, 946, 990, 1035, 1081, 1128, 1176, 1225, 1275, 1326, 1378, 1431, 1485, 1540, 1596, 1653, 1711, 1770, 1830, 1891, 1953, 2016, 2080, 2145, 2211, 2278, 2346, 2415, 2485, 2556, 2628, 2701, 2775, 2850, 2926, 3003, 3081, 3160, 3240, 3321, 3403, 3486, 3570, 3655, 3741, 3828, 3916, 4005, 4095, 4186, 4278, 4371, 4465, 4560, 4656, 4753, 4851, 4950, 5050...",
  "Q: List the songs of Camellia's album \"Tera I/O.\" A: uhh what the hell is that?? A squared: Body F10ating in the Zero Gravity Space, 1nput This 2 Y0ur Spine, Dance with Silence, Compute It With Some Devilish Alcoholic Steampunk Engines, Fly Wit Me, +ERABY+E C0NNEC+10N, Tera I/O, M1LLI0N PP, Flamewall, BAD ACCESS (FROM A MOE MAID). A cubed: camellia nerd bro",
  "Night of Knights (Camellia's \"Once Upon A [K]night\" Remix) [Hyper-Extended Mix] (Justcubing97 Inversion) {REMASTERED} (Reloaded) (2026 Version) (SUPiFiNiTY's Mid(k)night Extratone Remix) [Extended] (Full ver.) (Uncut) {Touhou edition} v2 (3435Phi's Hardstyle Addition) [Extended] [Extended More] [Superextended] (Knightly lengthening) {Quadruple remix} [Justcubing97's Bootleg] {Reloaded} (Uncut ver.)",
  "Hot take: golden Oreos are better than regular Oreos.",
  "Hot take: this game is better than IMR.",
  "Hot take: the previous and next news messages are lying.",
  "Hot take: Python is better than JavaScript.",
  "Hot take: schools shouldn't ban phones.",
  "Hot take: breakcore is better than speedcore.",
  "Hot take: BPM sucks. BPS and BPH are better.",
  "Hot take: the next hot take message that appears is definitely true.",
  "Hot take: girls are unpredictable. Men will always be dudes.",
  "Hot take: the next hot take message that appears is definitely false.",
  "Hot take: base 10 sucks.",
  "Hot take: instead of unicode, just put all the symbols on a keyboard.",
  "Hot take: Burning Ship fractal is better than the Mandelbrot Set.",
  "Hot take: hot takes suck.",
  "Hot take: Camellia sucks. Kobaryo wins!",
  "2026 SUCKS!",
  "Break Over - K-forest",
  "You! Wanna read a newspaper for magicians?",
  "Here's a VR headset with Beat Saber. Good luck on Spin Eternally Expert+!",
  "I started playing Grace. It's fun!",
  "I started playing Muse Dash. It's fun, maybe without all of the anime girls.",
  "NOOOOOOO- THE ANGEL ISN'T THE LONGEST SONG IN MY MUSIC LIBRARY ANYMORE- screw you t+pazolite YOU DID THIS WITH \"Burning Desires (t+pazolite Remix)\" IT WAS A TWO-MINUTE SONG!",
  "Here's a space: ",
  "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 157, 155, 156, 154, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, YOU THOUGHT I WAS GONNA KEEP GOING HAHA NO MORE NUMBERS! (oh wait I forgot 97...)",
  "So I made a thing called Justcubing97's Omeganization System. It's basically a way to create giant numbers in a way that an amateur googologist (that has an understanding of the basic hyperoperators and small systems like Conway's up-arrow notation) could understand. It genuinely gets super unhinged AND IT CAN GET LARGER THAN FAMOUS LARGE NUMBERS LIKE GRAHAM'S NUMBER. I'M NOT KIDDING.",
  "What's the chance of getting this particular news message?",
  "f(x) = 1^x",
  "Redefine the square root function to output real numbers for negative inputs WITHOUT using absolute value.",
  "What would a trigonometic function look like that raised one function to its reciprocal? For example, sin(x)^csc(x) could be something like sinv(x). I don't know why \"v.\" I love that letter.",
  "sin^2(x) + cos^2(x) = 1 is literally just the Pythagorean Theorem.",
  "What if there were trigonometric functions for a 3rd Dimensional sphere? Then we could get cool identities like sin^2(x) + cos^2(x) + trs^2(x) = 1 where trs(x) is the Z-coordinate. Wait, how would you even measure an angle in 3rd Dimensional space?",
  "At what point does it stop being geometric dimensions and turns into antimatter dimensions- WAIT ANTIMATTER DIMENSIONS???",
  "v4.0: Eternity Domain update.",
  "When did I eat 27 orange slices? I only ate at most 15 at a time...",
  "Scrap that we got Cb now in contrast to C#. While I'm here I also found D, E, F, G, A, and B. And C7. Yeah this is a whole music joke.",
  "Finger the chord A minor on guitar. Wait, I'm missing the G string.",
  "Why does a piano have 88 keys in the first place? Go all the way up to C10! WAIT NO- *dies of factorial*",
  "666 - RoughSketch is now playing.",
  "The Angel - Cacola is now playing.",
  "ANTINEUTRINO WITCHCRAFT - Camellia is now playing.",
  "magical, very magical world - Camellia is now playing.",
  "Unlimited Hyperlink - Kobaryo is now playing.",
  "[PART 5] The guy leads Phi and Ava to the outside world, which is perfectly normal. However, two men in lab coats approach them. Without hesitation, the scientists capture Ava with a blindfold her and handcuff her, taking her back to the white room. Phi, petrified by the act, attempts to save her, but the mysterious savior beckons him not to. Still, he saves Ava anyway by unbinding the handcuffs using one of his derivatives. Ava senses this and manages to punch one of the scientists before shoving the other onto the concrete. \"Well... uhh... this is awkward...\" Ava mumbles, still dazed from the whole scientist encounter. \"Not gonna thank me?\" Phi asks, adrenaline still pumping but reduced. \"Oh, right. Thank you, weird math man... I guess...\" she finally responds. The mysterious man has seemingly disappeared during the short exchange. However, another scientist, this one a girl, chases them, and flings an almost ALL-METAL microscope at Phi, wanting to take him out. Well crap, he didn't see it and he gets hit pretty badly. Not dead, but weak in his current condition. With Phi down, it's all up to Ava to defend herself, and apparently Phi's life as well. Stay tuned for part 6.",
  "when izana",
  "when will there be a space dilation",
];

var specialTickers = [
  "It's been 347 days... I just wanna see her again...",
  "I, Justcubing97, am lonely again...",
  "Sometimes I play IMR. Other times I’m not. 50% I’m sleeping, 30% I’m in school, 20% I’m stuck doing DeltaMath, 0% I’m with a girl.",
  "Today I asked out an incremental-game-lover girl, but she said her love gain is softcapped. Is that good?",
  "A girl loved me at one point. Not anymore.",
  "If you're reading this, I'm still alive. Maybe not emotionally, oh, no. I've lost my ability to feel emotions.",
  "If you know me, then you know I’m not like most boys. Instead of recklessness and random meme mentions, I try to grasp what’s happening and stay focused, along with trying to get EVERYONE ELSE to stop saying “67.”",
  "Every time I see a couple, it makes me kinda sad. They have someone that cares about them (which is true most of the time), but I don’t. Maybe… uhh… you could probably indirectly care about me by playing this game?",
  "...I just want a girl to hug me. The next best thing is to hold something soft in bed, but it’s not as good as what I could be getting.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. it just… feels empty....................................................................................I ate 27 orange slices.",
  "and this is why i sit at my computer 12 hours a day. i want to be doing something else, but nothing feels right without a companion. anyway, back to trying to solve the collatz conjecture.",
  "This group chat decided to expose everything I did... I hope my crush doesn't hate me. Or do I? *vsauce music plays*",
  "help me...",
  "atp i dont know if shes ignoring me on purpose, hope not, but hey, being single means i can work on this",
  "Am I getting friendzoned?",
  "touch deprivation is real and its making me crazy",
  "I don't want to be insignificant; I just want to be loved. Is that so much to ask for? I’m not asking for a lot, just someone to care about me and hug me. I don’t even need a relationship, just a friend who cares about me. But no, that’s too much to ask for apparently BECAUSE EVERYONE HATES ME.",
  "I'm trying not to get too intimate. I don't want to risk being exposed again. But apparently everyone knows everything about you and the slightest mistake can lead to everyone absolutely hating you. I mean, I WANT to be someone's boyfriend, but also not at the same time. Apparently, I'm in a limbo state everywhere.",
  "D-DID SHE JUST SAY SHE LIKES ME??? I THINK SHE LIKES ME!!! OH MY GOD I THINK SHE LIKES ME!!! it was a dream I JUST WOKE UP NOOOOOOOOOOOOOOOOOOOOOOOOOO",
  "can't even calm down anymore what is going on in my life delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium delirium",
  "Can I get a girlfriend from playing and/or coding Quinquagintic? I mean, it would be nice. Have someone hug me in years. Just someone that cares about me, even if it's for an hour a day.",
  "I know I can't be the only one in my situation... right?",
  "LOVE < ZERO - Justcubing97- wait why is this in the specialTickers list? Oh, right, the song title.",
  "atp i dont know if im ultra paranoid or if im doing something wrong AND NO ONE IS POINTING IT OUT",
  "It's a stable friendship.",
  "Platonic love for the win!",
  "Disregard all of those depressing tickers, they're old! I'M ALIVE! (thank you quinquagintillionth rooter)",
  "i miss you quinquagintillionth rooter",
  "I WANNA HUG YOU EVERYDAY PLEASE-",
];

//Thousandth: "Take it slow! Love is like the Thousandth Section: start slow, but keep progressing slowly and eventually you win!" "THPM18 now exists: Pentate ALL D.D. currencies to 97! Cost: 1e9.7e200 THP";
//Billionth: "BPM1-6 WILL reset at some point. Not now."

var decimalNumber = new Decimal(1);
var numberGain;

var numberString = "";
var numberStringFinal = "";

var boostsString = "";
var nonBoostsString = "";
var octBoostsString = "";
var chalBoostsString = "";
var sepBoostsString = "";
var atomsBoostsString = "";
var sxpBoostsString = "";
var qpBoostsString = "";

var challengeModifier = 0;

var offlineTime = 0;

//=========================================================================
//DECILLIONTH
var du1boost = new Decimal(0);
var du1amt = new Decimal(0);
var du1cost = new Decimal(10);
var du1scaling = new Decimal(3);

var du2boost = new Decimal(1);
var du2amt = new Decimal(0);
var du2cost = new Decimal(25);
var du2scaling = new Decimal(4);

//=========================================================================
//NONILLIONTH
var npscaling = new Decimal(2);
var npthreshold = new Decimal(1000);
var nppending = new Decimal(0);
var npbase = new Decimal(0);

var nonillionthPoints = new Decimal(0);

var nu1boost = new Decimal(1);
var nu1amt = new Decimal(0);
var nu1cost = new Decimal(1);
var nu1scaling = new Decimal(5);

var nu2amt = new Decimal(0);
var nu2cost = new Decimal(3);

var nu3boost = new Decimal(1);
var nu3amt = new Decimal(0);
var nu3cost = new Decimal(10);
var nu3scaling = new Decimal(10);

var nu4amt = new Decimal(0);
var nu4cost = new Decimal(25);

//=========================================================================
//OCTILLIONTH
var opscaling = new Decimal(3);
var opthreshold = new Decimal.pow(10, 6);
var oppending = new Decimal(0);
var opbase = new Decimal(0);

var octillionthPoints = new Decimal(0);

var chal1completions = new Decimal(0);
var chal1scaling = new Decimal(1.15); //EXPONENT!
var chal1goal = new Decimal(1000);

var chal2completions = new Decimal(0);
var chal2scaling = new Decimal(3);
var chal2goal = new Decimal(5000);

var chal3completions = new Decimal(0);
var chal3scaling = new Decimal(2.8);
var chal3goal = new Decimal(10000);

var chal4completions = new Decimal(0);
var chal4scaling = new Decimal(5);
var chal4goal = new Decimal(10000000);

var challengeCompletions = new Decimal(0);
var ccm1unlocked = false;
var ccm2unlocked = false;
var ccm3unlocked = false;

//=========================================================================
//SEPTILLIONTH
var spscaling = new Decimal(10);
var spthreshold = new Decimal.pow(10, 9);
var sppending = new Decimal(0);
var spbase = new Decimal(0);

var septillionthPoints = new Decimal(0);

var atoms = new Decimal(0);
var atomGain = new Decimal(0);

var atomsBoost = new Decimal(1);

var au123boost = new Decimal(0);
var au456boost = new Decimal(1);
var au789boost = new Decimal(0);

var au1amt = new Decimal(0);
var au1cost = new Decimal(10);
var au1scaling = new Decimal(1.25);

var au2amt = new Decimal(0);
var au2cost = new Decimal(50);
var au2scaling = new Decimal(1.8);

var au3amt = new Decimal(0);
var au3cost = new Decimal(300);
var au3scaling = new Decimal(2.5);

var au4amt = new Decimal(0);
var au4cost = new Decimal(10000);
var au4scaling = new Decimal(4);

var au5amt = new Decimal(0);
var au5cost = new Decimal.pow(10, 6);
var au5scaling = new Decimal(7);

var au6amt = new Decimal(0);
var au6cost = new Decimal.pow(10, 10);
var au6scaling = new Decimal(10);

var au7amt = new Decimal(0);
var au7cost = new Decimal.pow(10, 15);
var au7scaling = new Decimal(1.05); //EXPONENT!

var au8amt = new Decimal(0);
var au8cost = new Decimal.pow(10, 21);
var au8scaling = new Decimal(1.18); //EXPONENT!

//=========================================================================
//SEXTILLIONTH
var sxpscaling = new Decimal(2);
var sxpthreshold = new Decimal.pow(10, 12);
var sxppending = new Decimal(0);
var sxpbase = new Decimal(0);

var sextillionthPoints = new Decimal(0);

var boughtSXUT11 = false;
var boughtSXUT12 = false;
var boughtSXUT13 = false;
var boughtSXUT21 = false;
var boughtSXUT22 = false;
var boughtSXUT23 = false;
var boughtSXUT24 = false;
var boughtSXUT31 = false;
var boughtSXUT32 = false;
var boughtSXUT33 = false;
var boughtSXUT34 = false;
var boughtSXUT41 = false;
var boughtSXUT42 = false;
var boughtSXUT43 = false;
var boughtSXUT44 = false;

var chal5completions = new Decimal(0);
var chal5goal = new Decimal.pow(10, 87);

//=========================================================================
//QUINTILLIONTH
var qpscaling = new Decimal(3);
var qpthreshold = new Decimal.pow(10, 15);
var qppending = new Decimal(0);
var qpbase = new Decimal(0);

var quintillionthPoints = new Decimal(0);
var quintillionthFragments = new Decimal(0);
var qfgain = new Decimal(0);

var qfu1amt = new Decimal(0);
var qfu1cost = new Decimal(25);
var qfu1scaling = new Decimal(1.1);
var qfu1SXPboost = new Decimal(1);
var qfu1QFboost = new Decimal(1);

var qfu2amt = new Decimal(0);
var qfu2cost = new Decimal(250);

var qfu3amt = new Decimal(0);
var qfu3cost = new Decimal(100);
var qfu3scaling = new Decimal(1.25);
var qfu3boost = new Decimal(1);

var qfu4amt = new Decimal(0);
var qfu4cost = new Decimal(10000);

var qfu5amt = new Decimal(0);
var qfu5cost = new Decimal(1000);
var qfu5scaling = new Decimal(1.5);
var qfu5boost = new Decimal(0);

var qfu6amt = new Decimal(0);
var qfu6cost = new Decimal(1000000);

var qfm1unlocked = false;
var qfm2unlocked = false;
var qfm3unlocked = false;
var qfm4unlocked = false;
var qfm5unlocked = false;
var qfm6unlocked = false;

//=========================================================================
//NON MAGIC CONSTS
const numberTickspeedDivisor = new Decimal(20);
const numberRounding = new Decimal(100);
const numberDecimalPlaces = new Decimal(3);
const decillionthDivision = new Decimal.pow(10, 33);

//=========================================================================
//UNLOCK CHECKS (these are for checking if layers are unlocked, once its true its always true)
var nonillionth_unlocked = false;
var octillionth_unlocked = false;
var septillionth_unlocked = false;
var sextillionth_unlocked = false;
var quintillionth_unlocked = false;

//=========================================================================
//RESET BOOSTS (these are for applying boosts)
var non_reset_boost_check = false;
var oct_reset_boost_check = false;
var sep_reset_boost_check = false;
var sxp_reset_boost_check = false;
var qui_reset_boost_check = false;

//=========================================================================
//SOFTCAP EFFECTS
var minicap = new Decimal(1);
var softcap = new Decimal(1);
var supercap = new Decimal(1);

//=========================================================================
//OTHER
const slider = document.getElementById("fontSlider");
var sliderPos = 45;

//=========================================================================

//  ==========  ========     ========
//      ==      ==      ==  ==
//      ==      ==      ==  ==
//      ==      ==      ==   ========
//      ==      ==      ==          ==
//      ==      ==      ==          ==
//  ==========  ========     ========

//=========================================================================

//=========================================================================
//TABS
const reset_button = document.getElementById("reset-button");

const main_tab = document.getElementById("main-tab");
const caps_tab = document.getElementById("caps-tab");
const decillionth_tab = document.getElementById("decillionth-tab");
const nonillionth_tab = document.getElementById("nonillionth-tab");
const octillionth_tab = document.getElementById("octillionth-tab");
const septillionth_tab = document.getElementById("septillionth-tab");
const sextillionth_tab = document.getElementById("sextillionth-tab");
const quintillionth_tab = document.getElementById("quintillionth-tab");

const main_number_tab_button = document.getElementById("main-number-tab-button");
const main_caps_tab_button = document.getElementById("main-caps-tab-button");
const main_decillionth_tab_button = document.getElementById("main-decillionth-tab-button");
const main_nonillionth_tab_button = document.getElementById("main-nonillionth-tab-button");
const main_octillionth_tab_button = document.getElementById("main-octillionth-tab-button");
const main_septillionth_tab_button = document.getElementById("main-septillionth-tab-button");
const main_sextillionth_tab_button = document.getElementById("main-sextillionth-tab-button");
const main_quintillionth_tab_button = document.getElementById("main-quintillionth-tab-button");

const oct_infobox_tab = document.getElementById("oct-infobox-tab");
const oct_challenge_tab = document.getElementById("oct-challenge-tab");
const oct_infobox_tab_button = document.getElementById("oct-infobox-tab-button");
const oct_challenge_tab_button = document.getElementById("oct-challenge-tab-button");

const sep_infobox_tab = document.getElementById("sep-infobox-tab");
const septillionthGrid = document.getElementById("septillionth-grid");
const sep_infobox_tab_button = document.getElementById("sep-infobox-tab-button");
const sep_atom_tab_button = document.getElementById("sep-atom-tab-button");

//=========================================================================
//TOP
const topNumber = document.getElementById("top-number");
const topNP = document.getElementById("top-np");
const topOP = document.getElementById("top-op");
const topSP = document.getElementById("top-sp");
const topAtoms = document.getElementById("top-atoms");
const topSXP = document.getElementById("top-sxp");
const topQP = document.getElementById("top-qp");
const topQF = document.getElementById("top-qf");

//=========================================================================
//BOTTOM
const bottomModifiers = document.getElementById("bottom-modifiers");
const ticker = document.getElementById("news-ticker");
const container = document.getElementById("news-ticker-container");
const ulia = document.getElementById("useless-little-input-area");

//=========================================================================
//CAPS
const minicapDisplay = document.getElementById("minicap-display");
const softcapDisplay = document.getElementById("softcap-display");
const supercapDisplay = document.getElementById("supercap-display");
const hypercapDisplay = document.getElementById("hypercap-display");
const ultracapDisplay = document.getElementById("ultracap-display");
const omegacapDisplay = document.getElementById("omegacap-display");
const absolutecapDisplay = document.getElementById("absolutecap-display");
const forevercapDisplay = document.getElementById("forevercap-display");
const eternalcapDisplay = document.getElementById("eternalcap-display");
const insanitycapDisplay = document.getElementById("insanitycap-display");
const transcendentcapDisplay = document.getElementById("transcendentcap-display");

//=========================================================================
//NUMBER
const numberDisplay = document.getElementById("numberDisplay");
const numberGainDisplay = document.getElementById("numberGainDisplay");
const boostsDisplay = document.getElementById("boostsDisplay");

//=========================================================================
//DECILLIONTH
const du1 = document.getElementById("du1");
const du1_id_amt = document.getElementById("du1-id-amt");
const du1_cost_scale = document.getElementById("du1-cost-scale");
du1.disabled = true;

const du2 = document.getElementById("du2");
const du2_id_amt = document.getElementById("du2-id-amt");
const du2_cost_scale = document.getElementById("du2-cost-scale");
du2.disabled = true;

//=========================================================================
//NONILLIONTH
const nreset = document.getElementById("nreset");
const no_point_pending = document.getElementById("no-point-pending");
const no_next_point = document.getElementById("no-next-point");
const nonBoostsDisplay = document.getElementById("nonBoostsDisplay");
const nonillionth_grid = document.getElementById("nonillionth-grid");
nreset.disabled = true;

const nu1 = document.getElementById("nu1");
nu1.disabled = true;

const nu1_id_amt = document.getElementById("nu1-id-amt");
const nu1_cost_scale = document.getElementById("nu1-cost-scale");

const nu2 = document.getElementById("nu2");
nu2.disabled = true;

const nu2_id_amt = document.getElementById("nu2-id-amt");
const nu2_cost_scale = document.getElementById("nu2-cost-scale");

const nu3 = document.getElementById("nu3");
nu3.disabled = true;

const nu3_id_amt = document.getElementById("nu3-id-amt");
const nu3_cost_scale = document.getElementById("nu3-cost-scale");

const nu4 = document.getElementById("nu4");
nu4.disabled = true;

const nu4_id_amt = document.getElementById("nu4-id-amt");
const nu4_cost_scale = document.getElementById("nu4-cost-scale");

//=========================================================================
//OCTILLIONTH
const oreset = document.getElementById("oreset");
const op_point_pending = document.getElementById("op-point-pending");
const op_next_point = document.getElementById("op-next-point");
const octBoostsDisplay = document.getElementById("octBoostsDisplay");
const octillionth_main_section = document.getElementById("octillionth-main-section");
oreset.disabled = true;

const op_effect = document.getElementById("op-effect");

const chal1 = document.getElementById("chal1");
const chal1_title = document.getElementById("chal1-title");
const chal1_goal_scale = document.getElementById("chal1-goal-scale");
const chal1_reward = document.getElementById("chal1-reward");
const chal1_completions = document.getElementById("chal1-completions");

const chal2 = document.getElementById("chal2");
const chal2_title = document.getElementById("chal2-title");
const chal2_goal_scale = document.getElementById("chal2-goal-scale");
const chal2_reward = document.getElementById("chal2-reward");
const chal2_completions = document.getElementById("chal2-completions");

const chal3 = document.getElementById("chal3");
const chal3_title = document.getElementById("chal3-title");
const chal3_goal_scale = document.getElementById("chal3-goal-scale");
const chal3_reward = document.getElementById("chal3-reward");
const chal3_completions = document.getElementById("chal3-completions");

const chal4 = document.getElementById("chal4");
const chal4_title = document.getElementById("chal4-title");
const chal4_goal_scale = document.getElementById("chal4-goal-scale");
const chal4_reward = document.getElementById("chal4-reward");
const chal4_completions = document.getElementById("chal4-completions");

const cc_display = document.getElementById("cc-display");
const cc_boost_display = document.getElementById("cc-boost-display");

const ccm1 = document.getElementById("ccm-1");
const ccm2 = document.getElementById("ccm-2");
const ccm3 = document.getElementById("ccm-3");

//=========================================================================
//SEPTILLIONTH

const spreset = document.getElementById("spreset");
const sp_point_pending = document.getElementById("sp-point-pending");
const sp_next_point = document.getElementById("sp-next-point");
const sepBoostsDisplay = document.getElementById("sepBoostsDisplay");
const septillionth_main_section = document.getElementById("septillionth-main-section");
spreset.disabled = true;

const sp_effect = document.getElementById("sp-effect");

const atoms_formula = document.getElementById("atoms-formula");

const atoms_display = document.getElementById("atoms-display");
const atoms_boost_display = document.getElementById("atoms-boost-display");
const atoms_boosts = document.getElementById("atoms-boosts");

const au1 = document.getElementById("au1");
const au1_id_amt = document.getElementById("au1-id-amt");
const au1_cost_scale = document.getElementById("au1-cost-scale");
au1.disabled = true;

const au2 = document.getElementById("au2");
const au2_id_amt = document.getElementById("au2-id-amt");
const au2_cost_scale = document.getElementById("au2-cost-scale");
au2.disabled = true;

const au3 = document.getElementById("au3");
const au3_id_amt = document.getElementById("au3-id-amt");
const au3_cost_scale = document.getElementById("au3-cost-scale");
au3.disabled = true;

const au4 = document.getElementById("au4");
const au4_id_amt = document.getElementById("au4-id-amt");
const au4_cost_scale = document.getElementById("au4-cost-scale");
au4.disabled = true;

const au5 = document.getElementById("au5");
const au5_id_amt = document.getElementById("au5-id-amt");
const au5_cost_scale = document.getElementById("au5-cost-scale");
au5.disabled = true;

const au6 = document.getElementById("au6");
const au6_id_amt = document.getElementById("au6-id-amt");
const au6_cost_scale = document.getElementById("au6-cost-scale");
au6.disabled = true;

const au7_sxpgate = document.getElementById("au7-sxpgate");
const au8_sxpgate = document.getElementById("au8-sxpgate");

const au7 = document.getElementById("au7");
const au7_id_amt = document.getElementById("au7-id-amt");
const au7_cost_scale = document.getElementById("au7-cost-scale");
au7.disabled = true;

const au8 = document.getElementById("au8");
const au8_id_amt = document.getElementById("au8-id-amt");
const au8_cost_scale = document.getElementById("au8-cost-scale");
au8.disabled = true;

//=========================================================================
//SEXTILLIONTH

const sxpreset = document.getElementById("sxpreset");
const sxp_point_pending = document.getElementById("sxp-point-pending");
const sxp_next_point = document.getElementById("sxp-next-point");
const sxpBoostsDisplay = document.getElementById("sxpBoostsDisplay");
const sextillionth_main_section = document.getElementById("sextillionth-main-section");
sxpreset.disabled = true;

const sxp_effect = document.getElementById("sxp-effect");

const sxut_respec = document.getElementById("sxut-respec");
const sxut_11 = document.getElementById("sxut-11");
const sxut_12 = document.getElementById("sxut-12");
const sxut_13 = document.getElementById("sxut-13");

const sxut_21 = document.getElementById("sxut-21");
const sxut_22 = document.getElementById("sxut-22");
const sxut_23 = document.getElementById("sxut-23");
const sxut_24 = document.getElementById("sxut-24");

const sxut_31 = document.getElementById("sxut-31");
const sxut_32 = document.getElementById("sxut-32");
const sxut_33 = document.getElementById("sxut-33");
const sxut_34 = document.getElementById("sxut-34");

const sxut_41 = document.getElementById("sxut-41");
const sxut_42 = document.getElementById("sxut-42");
const sxut_43 = document.getElementById("sxut-43");
const sxut_44 = document.getElementById("sxut-44");

const challenge5gate = document.getElementById("challenge5gate");

const chal5 = document.getElementById("chal5");
const chal5_title = document.getElementById("chal5-title");
const chal5_goal_scale = document.getElementById("chal5-goal-scale");
const chal5_reward = document.getElementById("chal5-reward");
const chal5_completions = document.getElementById("chal5-completions");

//=========================================================================
//QUINTILLIONTH

const qpreset = document.getElementById("qpreset");
const qp_point_pending = document.getElementById("qp-point-pending");
const qp_next_point = document.getElementById("qp-next-point");
const qpBoostsDisplay = document.getElementById("qpBoostsDisplay");
const quintillionth_main_section = document.getElementById("quintillionth-main-section");
qpreset.disabled = true;

const qp_effect = document.getElementById("qp-effect");
const qf_display = document.getElementById("qf-display");

const qfu1 = document.getElementById("qfu1");
const qfu1_id_amt = document.getElementById("qfu1-id-amt");
const qfu1_cost_scale = document.getElementById("qfu1-cost-scale");
qfu1.disabled = true;

const qfu2 = document.getElementById("qfu2");
const qfu2_id_amt = document.getElementById("qfu2-id-amt");
const qfu2_cost_scale = document.getElementById("qfu2-cost-scale");
qfu2.disabled = true;

const qfu3 = document.getElementById("qfu3");
const qfu3_id_amt = document.getElementById("qfu3-id-amt");
const qfu3_cost_scale = document.getElementById("qfu3-cost-scale");
qfu3.disabled = true;

const qfu4 = document.getElementById("qfu4");
const qfu4_id_amt = document.getElementById("qfu4-id-amt");
const qfu4_cost_scale = document.getElementById("qfu4-cost-scale");
qfu4.disabled = true;

const qfu5 = document.getElementById("qfu5");
const qfu5_id_amt = document.getElementById("qfu5-id-amt");
const qfu5_cost_scale = document.getElementById("qfu5-cost-scale");
qfu5.disabled = true;

const qfu6 = document.getElementById("qfu6");
const qfu6_id_amt = document.getElementById("qfu6-id-amt");
const qfu6_cost_scale = document.getElementById("qfu6-cost-scale");
qfu6.disabled = true;

const qfm1 = document.getElementById("qfm-1");
const qfm2 = document.getElementById("qfm-2");
const qfm3 = document.getElementById("qfm-3");
const qfm4 = document.getElementById("qfm-4");
const qfm4_effect = document.getElementById("qfm-4-effect");
const qfm5 = document.getElementById("qfm-5");
const qfm6 = document.getElementById("qfm-6");

//=========================================================================

//  ========   ========   ========   ========  ========
//  ==     ==  ==        ==          ==           ==
//  ==     ==  ==        ==          ==           ==
//  ========   ========   ========   ========     ==
//  == ==      ==                ==  ==           ==
//  ==   ==    ==                ==  ==           ==
//  ==     ==  ========   ========   ========     ==

//=========================================================================
function nonillionthResetInitiate(){
  opthreshold = new Decimal.pow(10, 6);
  opbase = new Decimal(0);

  npthreshold = new Decimal(1000);
  nonillionthPoints = nonillionthPoints.add(nppending);
  npbase = new Decimal(0);
  non_reset_boost_check = true;
  
  if (!boughtSXUT31){
    du1boost = new Decimal(0);
    du1amt = new Decimal(0);
    du1cost = new Decimal(10);
    du1scaling = new Decimal(3); 

    du2boost = new Decimal(1);
    du2amt = new Decimal(0);
    du2cost = new Decimal(25);
    du2scaling = new Decimal(4);
  }

  decimalNumber = new Decimal(1);
  
  if (nu2amt.eq(new Decimal(1)) && !boughtSXUT31){
    du1cost = new Decimal(8);
  }
}

function octillionthResetInitiate(){
  opthreshold = new Decimal.pow(10, 6);
  octillionthPoints = octillionthPoints.add(oppending);
  opbase = new Decimal(0);
  oct_reset_boost_check = true;
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  if (!boughtSXUT31){
    nu1boost = new Decimal(1);
    nu1amt = new Decimal(0);
    nu1cost = new Decimal(1);
    nu1scaling = new Decimal(5);

    nu2amt = new Decimal(0);
    nu2cost = new Decimal(3);
    nu2_cost_scale.textContent = "Cost: 3 NP";
    
    nu3boost = new Decimal(1);
    nu3amt = new Decimal(0);
    nu3cost = new Decimal(10);
    nu3scaling = new Decimal(10);
  
    nu4amt = new Decimal(0);
    nu4cost = new Decimal(25);
    nu4_cost_scale.textContent = "Cost: 25 NP";
  
    du1boost = new Decimal(0);
    du1amt = new Decimal(0);
    du1cost = new Decimal(10);
    du1scaling = new Decimal(3); 

    du2boost = new Decimal(1);
    du2amt = new Decimal(0);
    du2cost = new Decimal(25);
    du2scaling = new Decimal(4);
  }

  decimalNumber = new Decimal(1);
}

function everythingFromSRI(){
  oct_reset_boost_check = false;
  opscaling = new Decimal(3);
  opthreshold = new Decimal.pow(10, 6);
  oppending = new Decimal(0);
  opbase = new Decimal(0);
 
  octillionthPoints = new Decimal(0);
 
  if (!sxp_reset_boost_check){
    chal1completions = new Decimal(0);
    chal1scaling = new Decimal(1.15); //EXPONENT!
    chal1goal = new Decimal(1000);
 
    chal2completions = new Decimal(0);
    chal2scaling = new Decimal(3);
    chal2goal = new Decimal(5000);
 
    chal3completions = new Decimal(0);
    chal3scaling = new Decimal(2.8);
    chal3goal = new Decimal(10000);
 
    chal4completions = new Decimal(0);
    chal4scaling = new Decimal(5);
    chal4goal = new Decimal(10000000);
 
    challengeCompletions = new Decimal(0);
    ccm1unlocked = false;
    ccm2unlocked = false;
    ccm3unlocked = false;
  }
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  if (!boughtSXUT31){
    nu1boost = new Decimal(1);
    nu1amt = new Decimal(0);
    nu1cost = new Decimal(1);
    nu1scaling = new Decimal(5);

    nu2amt = new Decimal(0);
    nu2cost = new Decimal(3);
    nu2_cost_scale.textContent = "Cost: 3 NP";
    
    nu3boost = new Decimal(1);
    nu3amt = new Decimal(0);
    nu3cost = new Decimal(10);
    nu3scaling = new Decimal(10);
  
    nu4amt = new Decimal(0);
    nu4cost = new Decimal(25);
    nu4_cost_scale.textContent = "Cost: 25 NP";
  
    du1boost = new Decimal(0);
    du1amt = new Decimal(0);
    du1cost = new Decimal(10);
    du1scaling = new Decimal(3); 

    du2boost = new Decimal(1);
    du2amt = new Decimal(0);
    du2cost = new Decimal(25);
    du2scaling = new Decimal(4);
  }

  decimalNumber = new Decimal(1);
}

function septillionthResetInitiate(){
  spthreshold = new Decimal.pow(10, 9);
  septillionthPoints = septillionthPoints.add(sppending);
  spbase = new Decimal(0);
  sep_reset_boost_check = true;

  oct_reset_boost_check = false;
  opscaling = new Decimal(3);
  opthreshold = new Decimal.pow(10, 6);
  oppending = new Decimal(0);
  opbase = new Decimal(0);
 
  octillionthPoints = new Decimal(0);
 
  if (!sxp_reset_boost_check){
    chal1completions = new Decimal(0);
    chal1scaling = new Decimal(1.15); //EXPONENT!
    chal1goal = new Decimal(1000);
 
    chal2completions = new Decimal(0);
    chal2scaling = new Decimal(3);
    chal2goal = new Decimal(5000);
 
    chal3completions = new Decimal(0);
    chal3scaling = new Decimal(2.8);
    chal3goal = new Decimal(10000);
 
    chal4completions = new Decimal(0);
    chal4scaling = new Decimal(5);
    chal4goal = new Decimal(10000000);
 
    challengeCompletions = new Decimal(0);
    ccm1unlocked = false;
    ccm2unlocked = false;
    ccm3unlocked = false;
  }
  
  npscaling = new Decimal(2);
  npthreshold = new Decimal(1000);
  nppending = new Decimal(0);
  npbase = new Decimal(0);

  nonillionthPoints = new Decimal(0);
  non_reset_boost_check = false;

  if (!boughtSXUT31){
    nu1boost = new Decimal(1);
    nu1amt = new Decimal(0);
    nu1cost = new Decimal(1);
    nu1scaling = new Decimal(5);

    nu2amt = new Decimal(0);
    nu2cost = new Decimal(3);
    nu2_cost_scale.textContent = "Cost: 3 NP";
    
    nu3boost = new Decimal(1);
    nu3amt = new Decimal(0);
    nu3cost = new Decimal(10);
    nu3scaling = new Decimal(10);
  
    nu4amt = new Decimal(0);
    nu4cost = new Decimal(25);
    nu4_cost_scale.textContent = "Cost: 25 NP";
  
    du1boost = new Decimal(0);
    du1amt = new Decimal(0);
    du1cost = new Decimal(10);
    du1scaling = new Decimal(3); 

    du2boost = new Decimal(1);
    du2amt = new Decimal(0);
    du2cost = new Decimal(25);
    du2scaling = new Decimal(4);
  }

  decimalNumber = new Decimal(1);
}

function sextillionthResetInitiate(){
  sxpthreshold = new Decimal.pow(10, 12);
  sextillionthPoints = sextillionthPoints.add(sxppending);
  sxpbase = new Decimal(0);
  sxp_reset_boost_check = true;

  sep_reset_boost_check = false;
  spscaling = new Decimal(10);
  spthreshold = new Decimal.pow(10, 9);
  sppending = new Decimal(0);
  spbase = new Decimal(0);

  septillionthPoints = new Decimal(0);

  atoms = new Decimal(0);
  atomGain = new Decimal(0);

  atomsBoost = new Decimal(1);

  if (!qfu2amt.gte(new Decimal(1))){
    au123boost = new Decimal(0);
  }
  au456boost = new Decimal(1);

  if (!qfu2amt.gte(new Decimal(1))){
    au1amt = new Decimal(0);
    au1cost = new Decimal(10);
    au1scaling = new Decimal(1.25);

    au2amt = new Decimal(0);
    au2cost = new Decimal(50);
    au2scaling = new Decimal(1.8);

    au3amt = new Decimal(0);
    au3cost = new Decimal(300);
    au3scaling = new Decimal(2.5);
  }

  au4amt = new Decimal(0);
  au4cost = new Decimal(10000);
  au4scaling = new Decimal(4);

  au5amt = new Decimal(0);
  au5cost = new Decimal.pow(10, 6);
  au5scaling = new Decimal(7);

  au6amt = new Decimal(0);
  au6cost = new Decimal.pow(10, 10);
  au6scaling = new Decimal(10);

  everythingFromSRI();
}

function everythingFromSXI(){
  sep_reset_boost_check = false;
  spscaling = new Decimal(10);
  spthreshold = new Decimal.pow(10, 9);
  sppending = new Decimal(0);
  spbase = new Decimal(0);

  septillionthPoints = new Decimal(0);

  atoms = new Decimal(0);
  atomGain = new Decimal(0);

  atomsBoost = new Decimal(1);

  if (!qfu2amt.gte(new Decimal(1))){
    au123boost = new Decimal(0);
  }
  au456boost = new Decimal(1);

  if (!qfu2amt.gte(new Decimal(1))){
    au1amt = new Decimal(0);
    au1cost = new Decimal(10);
    au1scaling = new Decimal(1.25);

    au2amt = new Decimal(0);
    au2cost = new Decimal(50);
    au2scaling = new Decimal(1.8);

    au3amt = new Decimal(0);
    au3cost = new Decimal(300);
    au3scaling = new Decimal(2.5);
  }

  au4amt = new Decimal(0);
  au4cost = new Decimal(10000);
  au4scaling = new Decimal(4);

  au5amt = new Decimal(0);
  au5cost = new Decimal.pow(10, 6);
  au5scaling = new Decimal(7);

  au6amt = new Decimal(0);
  au6cost = new Decimal.pow(10, 10);
  au6scaling = new Decimal(10);

  everythingFromSRI();
}

function quintillionthResetInitiate(){
  qpthreshold = new Decimal.pow(10, 15);
  quintillionthPoints = quintillionthPoints.add(qppending);
  qpbase = new Decimal(0);
  qui_reset_boost_check = true;

  sxp_reset_boost_check = false;
  sxpscaling = new Decimal(10);
  sxpthreshold = new Decimal.pow(10, 12);
  sxppending = new Decimal(0);
  sxpbase = new Decimal(0);

  sextillionthPoints = new Decimal(0);

  if (!qfm2unlocked){
    boughtSXUT11 = false;
    boughtSXUT21 = false;
    boughtSXUT22 = false;
    boughtSXUT23 = false;
  }

  console.log(qfu4amt.toString());
  console.log(qfu4amt.gte(new Decimal(1)));

  if (!qfm5unlocked){
    boughtSXUT32 = false;
    boughtSXUT33 = false;
    boughtSXUT41 = false;
    boughtSXUT42 = false;
    if (!qfu4amt.gte(new Decimal(1))){
      boughtSXUT43 = false;
    }
  }

  chal5completions = new Decimal(0);
  chal5goal = new Decimal.pow(10, 87);

  au7amt = new Decimal(0);
  au7cost = new Decimal.pow(10, 15);
  au7scaling = new Decimal(1.12);

  au8amt = new Decimal(0);
  au8cost = new Decimal.pow(10, 21);
  au8scaling = new Decimal(1.25); //EXPONENT!

  everythingFromSXI();
}

//=========================================================================

//  ==         ========    ========   ========
//  ==        ==      ==  ==      ==  ==     ==
//  ==        ==      ==  ==      ==  ==     ==
//  ==        ==      ==  ==      ==  ========
//  ==        ==      ==  ==      ==  ==
//  ==        ==      ==  ==      ==  ==
//  ========   ========    ========   ==

//=========================================================================

setInterval(function(){
  calculateGain();
  updateCurrencies();
  formatNumber();
  calculateBoostsStrings();
  updateScreen();
  updateSoftcaps();
  
  decillionthUpgrades();
  
  checkNonillionthReset();
  checkPendingNonillionth();
  nonillionthUpgrades();

  checkOctillionthReset();
  checkPendingOctillionth();
  chal1GoalChecking();
  chal2GoalChecking();
  chal3GoalChecking();
  chal4GoalChecking();
  checkCCM();

  checkSeptillionthReset();
  checkPendingSeptillionth();
  checkAU();

  checkSextillionthReset();
  checkPendingSextillionth();
  checkSXUT();
  chal5GoalChecking();
  checkSXUTColors();

  checkQuintillionthReset();
  checkPendingQuintillionth();
  quintillionthUpgrades();
  checkQFM();

  automation();
  updateConnections();
  checkUnlocks();
}, 50);

//=========================================================================

//  ========  ==      ==  ==    ==   ========   =========
//  ==        ==      ==  ===   ==  ==         ==
//  ==        ==      ==  ====  ==  ==         ==
//  ========  ==      ==  == == ==  ==          =========
//  ==        ==      ==  ==  ====  ==                  ==
//  ==        ==      ==  ==   ===  ==                  ==
//  ==         ========   ==    ==   ========   =========

//=========================================================================

//=========================================================================
//MAIN TAB CLICK THINGS

main_number_tab_button.addEventListener("click", function(){
  if (main_number_tab_button.classList.contains("mil-dark")){
    main_number_tab_button.classList.remove("mil-dark");
    main_number_tab_button.classList.add("mil-light");
    main_tab.style.display = "block";
  } else {
    main_number_tab_button.classList.add("mil-dark");
    main_number_tab_button.classList.remove("mil-light");
    main_tab.style.display = "none";
  }
});

main_caps_tab_button.addEventListener("click", function(){
  if (main_caps_tab_button.classList.contains("soft-dark")){
    main_caps_tab_button.classList.remove("soft-dark");
    main_caps_tab_button.classList.add("soft-light");
    caps_tab.style.display = "block";
  } else {
    main_caps_tab_button.classList.add("soft-dark");
    main_caps_tab_button.classList.remove("soft-light");
    caps_tab.style.display = "none";
  }
});

main_decillionth_tab_button.addEventListener("click", function(){
  if (main_decillionth_tab_button.classList.contains("decillionth-dark-button")){
    main_decillionth_tab_button.classList.remove("decillionth-dark-button");
    main_decillionth_tab_button.classList.add("decillionth-button");
    decillionth_tab.style.display = "block";
  } else {
    main_decillionth_tab_button.classList.add("decillionth-dark-button");
    main_decillionth_tab_button.classList.remove("decillionth-button");
    decillionth_tab.style.display = "none";
  }
});

main_nonillionth_tab_button.addEventListener("click", function(){
  if (main_nonillionth_tab_button.classList.contains("non-dark")){
    main_nonillionth_tab_button.classList.remove("non-dark");
    main_nonillionth_tab_button.classList.add("non-light");
    nonillionth_tab.style.display = "block";
  } else {
    main_nonillionth_tab_button.classList.add("non-dark");
    main_nonillionth_tab_button.classList.remove("non-light");
    nonillionth_tab.style.display = "none";
  }
});

main_octillionth_tab_button.addEventListener("click", function(){
  if (main_octillionth_tab_button.classList.contains("oct-dark")){
    main_octillionth_tab_button.classList.remove("oct-dark");
    main_octillionth_tab_button.classList.add("oct-light");
    octillionth_tab.style.display = "block";
  } else {
    main_octillionth_tab_button.classList.add("oct-dark");
    main_octillionth_tab_button.classList.remove("oct-light");
    octillionth_tab.style.display = "none";
  }
});

main_septillionth_tab_button.addEventListener("click", function(){
  if (main_septillionth_tab_button.classList.contains("sep-dark")){
    main_septillionth_tab_button.classList.remove("sep-dark");
    main_septillionth_tab_button.classList.add("sep-light");
    septillionth_tab.style.display = "block";
  } else {
    main_septillionth_tab_button.classList.add("sep-dark");
    main_septillionth_tab_button.classList.remove("sep-light");
    septillionth_tab.style.display = "none";
  }
});

main_sextillionth_tab_button.addEventListener("click", function(){
  if (main_sextillionth_tab_button.classList.contains("sx-dark")){
    main_sextillionth_tab_button.classList.remove("sx-dark");
    main_sextillionth_tab_button.classList.add("sx-light");
    sextillionth_tab.style.display = "block";
  } else {
    main_sextillionth_tab_button.classList.add("sx-dark");
    main_sextillionth_tab_button.classList.remove("sx-light");
    sextillionth_tab.style.display = "none";
  }
});

main_quintillionth_tab_button.addEventListener("click", function(){
  if (main_quintillionth_tab_button.classList.contains("qui-dark")){
    main_quintillionth_tab_button.classList.remove("qui-dark");
    main_quintillionth_tab_button.classList.add("qui-light");
    quintillionth_tab.style.display = "block";
  } else {
    main_quintillionth_tab_button.classList.add("qui-dark");
    main_quintillionth_tab_button.classList.remove("qui-light");
    quintillionth_tab.style.display = "none";
  }
});

//================================================================================================================
//================================================================================================================
//================================================================================================================
//================================================================================================================
//================================================================================================================
//ACTUAL FUNCTIONS

function calculateGain(){
  challengeCompletions = chal1completions.add(chal2completions).add(chal3completions).add(chal4completions).add(chal5completions);

  if (qfu5amt.gte(new Decimal(1))){
    challengeCompletions = challengeCompletions.add(qfu5boost);
  }

  if (sxp_reset_boost_check){
    challengeCompletions = challengeCompletions.mul(new Decimal(2));
  }

  numberGain = new Decimal(1);

  //BASE CALCULATIONS
  if (boughtSXUT32){
    numberGain = numberGain.add(chal4completions.div(new Decimal(2)));
  } else {
    numberGain = numberGain.add(chal4completions.div(new Decimal(20)));
  }

  //ADDITIONS
  
  //MULTIPLICATIONS
  if (du1amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(du1boost);
  }
  if (du2amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(du2boost);
  }
  
  if (non_reset_boost_check){
    numberGain = numberGain.mul(new Decimal(5));
  }

  if (nu3amt.gte(new Decimal(1))){
    numberGain = numberGain.mul(nu3boost);
  }
  
  if (octillionthPoints.gte(new Decimal(1)) && challengeModifier != 4){
    if (octillionthPoints.lt(new Decimal(1000000))){
      if (chal1completions.gte(new Decimal(1))){
        numberGain = numberGain.mul(octillionthPoints.add(new Decimal(1))).add(chal1completions.div(new Decimal(2)));
      } else {
        numberGain = numberGain.mul(octillionthPoints.add(new Decimal(1)));
      }
    } else {
      numberGain = numberGain.mul(new Decimal(1000000));
    }
  }

  if (ccm2unlocked){
    numberGain = numberGain.mul(challengeCompletions.div(new Decimal(4)).add(new Decimal(1)));
  }

  if (!atoms.eq(new Decimal(0))){
    numberGain = numberGain.mul(atomsBoost);
  }

  if (boughtSXUT11){
    numberGain = numberGain.mul(new Decimal(5));
  }

  if (chal5completions.gte(new Decimal(1))){
    numberGain = numberGain.mul(new Decimal(5));
  }

  if (quintillionth_unlocked){
    numberGain = numberGain.mul(new Decimal(3));
  }

  //SOFTCAPS
  if (minicap.neq(new Decimal(1))){
    numberGain = numberGain.div(minicap);
  }

  if (softcap.neq(new Decimal(1))){
    numberGain = numberGain.div(softcap);
  }

  if (supercap.neq(new Decimal(1))){
    numberGain = numberGain.div(supercap);
  }

  //CHALLENGE 2
  if (challengeModifier == 2){
    numberGain = numberGain.pow(new Decimal(1).div(decimalNumber.pow(new Decimal(0.06))));
  }

  //=========================================================================
  //ATOMS
  if (septillionth_unlocked){
    atomGain = new Decimal(1);

    if (sxp_reset_boost_check){
      if (septillionthPoints.gte(new Decimal(1))){
        atomGain = atomGain.mul(septillionthPoints.mul(new Decimal(5)));
      }
      atomGain = atomGain.add(au123boost);
      atomGain = atomGain.pow(new Decimal(2.5).add(au789boost));
      atomGain = atomGain.mul(au456boost.pow(new Decimal(1.5).add(au789boost)));
    } else {
      if (septillionthPoints.gte(new Decimal(1))){
        atomGain = atomGain.mul(septillionthPoints.mul(new Decimal(3)));
      }
      atomGain = atomGain.add(au123boost);
      atomGain = atomGain.pow(new Decimal(2));
      atomGain = atomGain.mul(au456boost);
    }

    atomsBoost = new Decimal(1);

    if (sxp_reset_boost_check){
      atomGain = atomGain.mul(new Decimal(5));
    }

    if (boughtSXUT21){
      atomGain = atomGain.mul(new Decimal(100));
    }

    if (boughtSXUT22 && chal3completions.gte(new Decimal(1))){
      atomGain = atomGain.mul(chal3completions.div(new Decimal(2)).add(new Decimal(1)));
    }

    if (boughtSXUT33){
      atomGain = atomGain.mul(sextillionthPoints.add(new Decimal(1)));
    }

    if (boughtSXUT43){
      atomGain = atomGain.mul(new Decimal(10000000000));
    }

    if (qfu6amt.gte(new Decimal(1))){
      atomGain = atomGain.pow(new Decimal(2));
    }

    //=====

    atoms = atoms.add(atomGain.div(new Decimal(20)));
    atomsBoost = atomsBoost.add(atoms.log10());
    if (boughtSXUT23){
      atomsBoost = atomsBoost.mul(new Decimal(2));
    }

    if (atoms.lt(new Decimal(0))){
      atoms = new Decimal(1);
    }
  }

  //=========================================================================
  //ATOMS
  if (quintillionth_unlocked){
    qfgain = quintillionthPoints.div(new Decimal(5));

    if (qfu1amt.gte(new Decimal(1))){
      qfgain = qfgain.mul(qfu1QFboost);
    }

    if (qfm1unlocked){
      qfgain = qfgain.mul(new Decimal(new Decimal(atoms.logarithm(new Decimal(10))).add(new Decimal(1))));
    }

    if (qfm4unlocked){
      qfgain = qfgain.mul(new Decimal(decimalNumber.sqrt()));
    }

    if (qfu6amt.gte(new Decimal(1))){
      qfgain = qfgain.pow(new Decimal(2));
    }

    quintillionthFragments = quintillionthFragments.add(qfgain.div(new Decimal(20)));

    if (quintillionthFragments.lt(new Decimal(0))){
      quintillionthFragments = new Decimal(1);
    }
  }
}

function updateCurrencies(){
  //=========================================================================
  //NUMBER
  decimalNumber = decimalNumber.add(numberGain.div(numberTickspeedDivisor)); //CHANGE THIS BACK TO 20
  decimalNumber = decimalNumber.mul(numberRounding);
  decimalNumber = decimalNumber.round();
  decimalNumber = decimalNumber.div(numberRounding);
  numberString = decimalNumber.toFixed(numberDecimalPlaces);
  numberString = numberString.toString();
}

function formatNumber(){
  //=========================================================================
  //FIXED
  numberStringFinal = "";
  numberStringFinal = numberString[numberString.length - 1] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 2] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 3] + numberStringFinal;
  numberStringFinal = numberString[numberString.length - 5] + "," + numberStringFinal;
  
  //=========================================================================
  //DYNAMIC
  for (var nSFCounter = 5; nSFCounter < 38; nSFCounter++){
    if (numberString.length > nSFCounter){
      if (nSFCounter == 37){
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + "." + numberStringFinal;
      } else if (nSFCounter % 3 == 1){
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + "," + numberStringFinal;
      } else {
        numberStringFinal = numberString[numberString.length - (nSFCounter + 1)] + numberStringFinal;
      }
    } else {
      if (nSFCounter == 37){
        numberStringFinal = "0." + numberStringFinal;
      } else if (nSFCounter % 3 == 1){
        numberStringFinal = "0," + numberStringFinal;
      } else {
        numberStringFinal = "0" + numberStringFinal;
      }
    }
  }
}

function calculateBoostsStrings(){
  //=========================================================================
  //NUMBER
  boostsString = "Boosts: ";
  if (du1amt.gte(1)){
    boostsString += "DU1: x" + du1boost + ", ";
  }
  if (du2amt.gte(1)){
    boostsString += "DU2: x" + du2boost.toExponential(3) + ", ";
  }
  
  if (non_reset_boost_check){
    boostsString += "Nonillionth: x5, ";
  }

  if (nu3amt.gte(1)){
    boostsString += "NU3: x" + nu3boost.toExponential(3) + ", ";
  }
  
  if (challengeModifier == 4 && octillionthPoints.gte(new Decimal(1)) && octillionthPoints.lt(new Decimal(1000000))){
    boostsString += "OP: NULLIFIED IN C4, ";
  } else if (octillionthPoints.gte(new Decimal(1)) && octillionthPoints.lt(new Decimal(1000000))){
    boostsString += "OP: x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + " (+" + chal1completions.div(new Decimal(2)).toExponential(3) + "), ";
  } else if (octillionthPoints.gte(new Decimal(1000000))){
    boostsString += "OP: x1.000e+6 (HARDCAP), ";
  }

  if (chal4completions.gte(new Decimal(1))){
    if (boughtSXUT32){
      boostsString += "C4: +" + chal4completions.div(new Decimal(2)).toExponential(3) + " to base (SXUT32), ";
    } else {
      boostsString += "C4: +" + chal4completions.div(new Decimal(20)).toExponential(3) + " to base, ";
    }
  }

  if (ccm2unlocked){
    boostsString += "CCM2: x" + challengeCompletions.div(new Decimal(4)).add(new Decimal(1)) + ", ";
  }

  if (!atoms.eq(new Decimal(0))){
    boostsString += "Atoms: x" + atomsBoost.toExponential(3) + ", ";
  }

  if (boughtSXUT11){
    boostsString += "SXUT11: x5, ";
  }

  if (chal5completions.gte(new Decimal(1))){
    boostsString += "C5: x5, ";
  }

  if (quintillionth_unlocked){
    boostsString += "Quintillionth: x3, ";
  }

  //=========================================================================
  //NONILLIONTHS
  nonBoostsString = "Boosts: ";
  if (nu1amt.gte(1)){
    nonBoostsString += "NU1: x" + nu1boost.toExponential(3) + ", ";
  }

  if (oct_reset_boost_check){
    nonBoostsString += "Octillionth: x4, ";
  }

  if (chal3completions.gte(1)){
    nonBoostsString += "C3: x" + chal3completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (sep_reset_boost_check){
    nonBoostsString += "Septillionth: x2, ";
  }

  if (sxp_reset_boost_check){
    nonBoostsString += "Sextillionth: x10, ";
  }

  if (qfm3unlocked){
    nonBoostsString += "QFM3: x15, ";
  }

  //=========================================================================
  //OCTILLIONTHS
  octBoostsString = "Boosts: ";

  if (chal2completions.gte(1)){
    octBoostsString += "C2: x" + chal2completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (ccm1unlocked){
    octBoostsString += "CCM1: x" + challengeCompletions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (sep_reset_boost_check){
    octBoostsString += "Septillionth: x2, ";
  }

  if (sxp_reset_boost_check){
    octBoostsString += "Sextillionth: x10, ";
  }

  chalBoostsString = "Boosts: ";

  if (sxp_reset_boost_check){
    chalBoostsString += "Sextillionth: x2, ";
  }

  if (qfu5amt.gte(new Decimal(1))){
    chalBoostsString += "QFU5: +" + qfu5boost.toExponential(3) + " (before multis), ";
  }

  //=========================================================================
  //SEPTILLIONTHS
  sepBoostsString = "Boosts: ";

  if (sxp_reset_boost_check){
    sepBoostsString += "Sextillionth: x10, ";
  }

  if (qfu3amt.gte(new Decimal(1))){
    sepBoostsString += "QFU3: x" + qfu3boost.toExponential(3) + " to SP, ";
  }

  if (qfm3unlocked){
    sepBoostsString += "QFM3: x15, ";
  }

  atomsBoostsString = "Boosts: ";

  if (sxp_reset_boost_check){
    atomsBoostsString += "Sextillionth: x5 + formula change, ";
  }

  if (boughtSXUT21){
    atomsBoostsString += "SXUT21: x100, ";
  }

  if (boughtSXUT22 && chal3completions.gte(1)){
    atomsBoostsString += "C3: x" + chal3completions.div(new Decimal(2)).add(new Decimal(1)) + ", ";
  }

  if (boughtSXUT33){
    atomsBoostsString += "SXUT33: x" + sextillionthPoints.add(new Decimal(1)) + ", ";
  }

  if (boughtSXUT43){
    atomsBoostsString += "SXUT43: x10B, "
  }

  if (qfu6amt.gte(new Decimal(1))){
    atomsBoostsString += "QFU6: ^2, ";
  }

  //=========================================================================
  //SEXTILLIONTHS
  sxpBoostsString = "Boosts: ";

  if (boughtSXUT41){
    sxpBoostsString += "SXUT41: x3, ";
  }

  if (qfu1amt.gte(new Decimal(1))){
    sxpBoostsString += "QFU1: x" + qfu1SXPboost.toExponential(3) + ", ";
  }

  //=========================================================================
  //QUINTILLIONTHS
  qpBoostsString = "Boosts: ";

  if (qfu1amt.gte(new Decimal(1))){
    qpBoostsString += "QFU1: x" + qfu1QFboost.toExponential(3) + " to QF, ";
  }

  if (qfu3amt.gte(new Decimal(1))){
    qpBoostsString += "QFU3: x" + qfu3boost.toExponential(3) + " to QP, ";
  }

  if (qfu6amt.gte(new Decimal(1))){
    qpBoostsString += "QFU6: ^2, ";
  }

  if (qfm1unlocked){
    qpBoostsString += "QFM1: x" + new Decimal(new Decimal(atoms.logarithm(new Decimal(10))).add(new Decimal(1))).toExponential(3) + " to QF, ";
  }

  if (qfm4unlocked){
    qpBoostsString += "QFM4: x" + new Decimal(decimalNumber.sqrt()).toExponential(3) + " to QF, ";
  }
}

//=========================================================================

//   =========     ========  ========   ========  ========  ==    ==
//  ==           ==          ==     ==  ==        ==        ===   ==
//  ==           ==          ==     ==  ==        ==        ====  ==
//   =========   ==          ========   ========  ========  == == ==
//           ==  ==          == ==      ==        ==        ==  ====
//           ==  ==          ==   ==    ==        ==        ==   ===
//   =========     ========  ==     ==  ========  ========  ==    ==

//=========================================================================

function updateScreen(){
  //=========================================================================
  //TOP
  topNumber.textContent = "N: " + decimalNumber.div(decillionthDivision).toExponential(3) + " (+" + numberGain.div(decillionthDivision).toExponential(3) + "/s)";

  if (challengeModifier == 3){
    topNP.textContent = "NP: DISABLED IN C3";
  } else {
    if (challengeModifier == 5){
      topNP.textContent = "NP: DISABLED IN C5";
    } else {
      topNP.textContent = "NP: " + nonillionthPoints.toExponential(3) + " (+" + nppending.toExponential(3) + ")";
    }
  }

  if (nonillionth_unlocked){
    if (challengeModifier == 5){
      topOP.textContent = "OP: DISABLED IN C5";
    } else {
      topOP.textContent = "OP: " + octillionthPoints.toExponential(3) + " (+" + oppending.toExponential(3) + ")";
    }
  } else {
    topOP.textContent = "";
  }

  if (ccm3unlocked || septillionth_unlocked){
    if (challengeModifier == 5){
      topSP.textContent = "SP: DISABLED IN C5";
    } else {
      topSP.textContent = "SP: " + septillionthPoints.toExponential(3) + " (+" + sppending.toExponential(3) + ")";
    }
  } else {
    topSP.textContent = "";
  }

  if (atoms.gt(new Decimal(0)) || septillionth_unlocked){
    topAtoms.textContent = "A: " + atoms.toExponential(3) + " (+" + atomGain.toExponential(3) + "/s)";
  } else {
    topAtoms.textContent = "";
  }

  if (sextillionth_unlocked){
    topSXP.textContent = "SXP: " + sextillionthPoints.toExponential(3) + " (+" + sxppending.toExponential(3) + ")";
  } else {
    topSXP.textContent = "";
  }

  if (chal5completions.gte(new Decimal(1)) || quintillionth_unlocked){
    topQP.textContent = "QP: " + quintillionthPoints.toExponential(3) + " (+" + qppending.toExponential(3) + ")";
  } else {
    topQP.textContent = "";
  }

  if (quintillionth_unlocked){
    topQF.textContent = "QF: " + quintillionthFragments.toExponential(3) + " (+" + qfgain.toExponential(3) + "/s)";
  } else {
    topQF.textContent = "";
  }
  
  //=========================================================================
  //NUMBER
  numberDisplay.textContent = numberStringFinal;
  numberGainDisplay.textContent = "Number gain is +" + numberGain.div(decillionthDivision).toExponential(3) + "/s";
  boostsDisplay.textContent = boostsString;
  
  //=========================================================================
  //DECILLIONTHS
  du1_id_amt.textContent = "ID: DU1 || x" + du1amt;
  if (challengeModifier == 1){
    du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du1scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    du1_cost_scale.textContent = "Require: " + du1cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du1scaling.toString();
  }

  du2_id_amt.textContent = "ID: DU2 || " + du2amt + "/10";
  if (challengeModifier == 1){
    du2_cost_scale.textContent = "Cost: " + du2cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du2scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    du2_cost_scale.textContent = "Cost: " + du2cost.div(decillionthDivision).toExponential(3) + " || Scaling: x" + du2scaling.toString();
  }

  //=========================================================================
  //NONILLIONTHS
  if (challengeModifier == 3){
    no_point_pending.textContent = "DISABLED IN C3";
  } else {
    no_point_pending.textContent = "+" + nppending.toExponential(3) + " NP";
  }
  
  no_next_point.textContent = "(next NP at " + npthreshold.div(decillionthDivision).toExponential(3) + " N)";

  nonBoostsDisplay.textContent = nonBoostsString;
  
  nu1_id_amt.textContent = "ID: NU1 || x" + nu1amt;
  if (challengeModifier == 1){
    nu1_cost_scale.textContent = "Cost: " + nu1cost.toExponential(3) + " NP || Scaling: x" + nu1scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    nu1_cost_scale.textContent = "Cost: " + nu1cost.toExponential(3) + " NP || Scaling: x" + nu1scaling;
  }
  
  nu2_id_amt.textContent = "ID: NU2 || " + nu2amt + "/1";
  if (nu2amt.eq(new Decimal(1))){
    nu2_cost_scale.textContent = "Purchased!";
  }

  nu3_id_amt.textContent = "ID: NU3 || " + nu3amt + "/8";
  if (challengeModifier == 1){
    nu3_cost_scale.textContent = "Cost: " + nu3cost.toExponential(3) + " NP || Scaling: x" + nu3scaling.pow(new Decimal(2)).toString() + " (C1)";
  } else {
    nu3_cost_scale.textContent = "Cost: " + nu3cost.toExponential(3) + " NP || Scaling: x" + nu3scaling;
  }

  nu4_id_amt.textContent = "ID: NU4 || " + nu4amt + "/1";
  if (nu4amt.eq(new Decimal(1))){
    nu4_cost_scale.textContent = "Purchased!";
  }

  //=========================================================================
  //OCTILLIONTHS
  if (challengeModifier == 5){
    op_point_pending.textContent = "DISABLED IN C5";
  } else {
    op_point_pending.textContent = "+" + oppending.toExponential(3) + " OP";
  }
  
  op_next_point.textContent = "(next OP at " + opthreshold.div(decillionthDivision).toExponential(3) + " N)";

  octBoostsDisplay.textContent = octBoostsString;

  if (challengeModifier == 4 && octillionthPoints.lt(new Decimal(1000000))){
    if (octillionthPoints.lt(new Decimal(1000000))){
      op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + " (+" + chal4completions.div(new Decimal(2)) + "), but Challenge 4 is active, so this is nullified.";
    } else {
      op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x1.000e+6 (HARDCAP), but Challenge 4 is active, so this is nullified.";
    }
  } else if (octillionthPoints.lt(new Decimal(1000000))){
    op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x" + octillionthPoints.add(new Decimal(1)).toExponential(3) + " (+" + chal1completions.div(new Decimal(2)) + ")";
  } else {
    op_effect.textContent = "Your " + octillionthPoints.toExponential(3) + " OP is boosting Number gain by x1.000e+6 (HARDCAP)";
  }
  
  bottomModifiers.textContent = "Modifiers: None";

  cc_display.textContent = "You have " + challengeCompletions + " Challenge Completions (CC).";

  cc_boost_display.textContent = chalBoostsString;

  if (challengeModifier == 1){
    bottomModifiers.textContent = "Modifiers: Challenge 1";
  } else if (challengeModifier == 2){
    bottomModifiers.textContent = "Modifiers: Challenge 2";
  } else if (challengeModifier == 3){
    bottomModifiers.textContent = "Modifiers: Challenge 3";
  } else if (challengeModifier == 4){
    bottomModifiers.textContent = "Modifiers: Challenge 4";
  }
  
  chal1_goal_scale.textContent = "Goal: " + chal1goal.div(decillionthDivision).toExponential(3) + "|| Scaling: ^" + chal1scaling;
  chal1_completions.textContent = chal1completions.toString() + "/100";

  chal2_goal_scale.textContent = "Goal: " + chal2goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal2scaling;
  chal2_completions.textContent = chal2completions.toString() + "/100";

  chal3_goal_scale.textContent = "Goal: " + chal3goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal3scaling;
  chal3_completions.textContent = chal3completions.toString() + "/100";

  chal4_goal_scale.textContent = "Goal: " + chal4goal.div(decillionthDivision).toExponential(3) + "|| Scaling: x" + chal4scaling;
  chal4_completions.textContent = chal4completions.toString() + "/100";

  if (challengeModifier == 1){
    chal1_title.textContent = "Challenge I (ACTIVE)";
  } else {
    chal1_title.textContent = "Challenge I";
  }

  if (challengeModifier == 2){
    chal2_title.textContent = "Challenge II (ACTIVE)";
  } else {
    chal2_title.textContent = "Challenge II";
  }

  if (challengeModifier == 3){
    chal3_title.textContent = "Challenge III (ACTIVE)";
  } else {
    chal3_title.textContent = "Challenge III";
  }

  if (challengeModifier == 4){
    chal4_title.textContent = "Challenge IV (ACTIVE)";
  } else {
    chal4_title.textContent = "Challenge IV";
  }

  //=========================================================================
  //SEPTILLIONTHS
  if (challengeModifier == 5){
    sp_point_pending.textContent = "DISABLED IN C5";
  } else {
    sp_point_pending.textContent = "+" + sppending.toExponential(3) + " SP";
  }
  
  sp_next_point.textContent = "(next SP at " + spthreshold.div(decillionthDivision).toExponential(3) + " N)";

  sepBoostsDisplay.textContent = sepBoostsString;

  if (sxp_reset_boost_check){
    if (boughtSXUT31){
      atoms_formula.textContent = "((SPx5)+AU1+AU2+AU3)^(2.5+AU7+AU8) x (AU4+AU5+AU6)^(1.5+AU7+AU8)";
    } else {
      atoms_formula.textContent = "((SPx5)+AU1+AU2+AU3)^2.5 x (AU4+AU5+AU6)^1.5";
    }
  } else {
    atoms_formula.textContent = "((SPx3)+AU1+AU2+AU3)^2) x (AU4+AU5+AU6)";
  }

  atoms_display.textContent = "You have " + atoms.toExponential(3) + " atoms (A). (" + atomGain.toExponential(3) + " A/s)";
  atoms_boost_display.textContent = "Boost to N: " + atomsBoost.toExponential(3);

  atoms_boosts.textContent = atomsBoostsString;

  au1_id_amt.textContent = "ID: AU1 || x" + au1amt;
  au1_cost_scale.textContent = "Cost: " + au1cost.toExponential(3) + " A || Scaling: x" + au1scaling;

  au2_id_amt.textContent = "ID: AU2 || x" + au2amt;
  au2_cost_scale.textContent = "Cost: " + au2cost.toExponential(3) + " A || Scaling: x" + au2scaling;

  au3_id_amt.textContent = "ID: AU3 || x" + au3amt;
  au3_cost_scale.textContent = "Cost: " + au3cost.toExponential(3) + " A || Scaling: x" + au3scaling;

  au4_id_amt.textContent = "ID: AU4 || x" + au4amt;
  au4_cost_scale.textContent = "Cost: " + au4cost.toExponential(3) + " A || Scaling: x" + au4scaling;

  au5_id_amt.textContent = "ID: AU5 || x" + au5amt;
  au5_cost_scale.textContent = "Cost: " + au5cost.toExponential(3) + " A || Scaling: x" + au5scaling;

  au6_id_amt.textContent = "ID: AU6 || x" + au6amt;
  au6_cost_scale.textContent = "Cost: " + au6cost.toExponential(3) + " A || Scaling: x" + au6scaling;

  au7_id_amt.textContent = "ID: AU7 || x" + au7amt;
  au7_cost_scale.textContent = "Cost: " + au7cost.toExponential(3) + " A || Scaling: ^" + au7scaling;

  au8_id_amt.textContent = "ID: AU8 || x" + au8amt;
  au8_cost_scale.textContent = "Cost: " + au8cost.toExponential(3) + " A || Scaling: ^" + au8scaling;

  //=========================================================================
  //SEXTILLIONTHS
  if (challengeModifier == 5){
    sxp_point_pending.textContent = "DISABLED IN C5";
  } else {
    sxp_point_pending.textContent = "+" + sxppending.toExponential(3) + " SXP";
  }
  
  sxp_next_point.textContent = "(next SXP at " + sxpthreshold.div(decillionthDivision).toExponential(3) + " N)";

  sxpBoostsDisplay.textContent = sxpBoostsString;

  if (challengeModifier == 5){
    bottomModifiers.textContent = "Modifiers: Challenge 5";
  }

  if (challengeModifier == 5){
    chal5_title.textContent = "Challenge V (ACTIVE)";
  } else {
    chal5_title.textContent = "Challenge V";
  }

  chal5_goal_scale.textContent = "Goal: " + chal5goal.toExponential(3) + " Atoms";
  chal5_completions.textContent = chal5completions.toString() + "/1";

  //=========================================================================
  //QUINTILLIONTHS
  qp_point_pending.textContent = "+" + qppending.toExponential(3) + " QP";
  
  qp_next_point.textContent = "(next QP at " + qpthreshold.div(decillionthDivision).toExponential(3) + " N)";

  qpBoostsDisplay.textContent = qpBoostsString;

  qf_display.textContent = "You have " + quintillionthFragments.toExponential(3) + " Quintillionth Fragments (QF). (" + qfgain.toExponential(3) + " QF/s)";

  qfu1_id_amt.textContent = "ID: QFU1 || x" + qfu1amt;
  qfu1_cost_scale.textContent = "Cost: " + qfu1cost.toExponential(3) + " QF || Scaling: ^" + qfu1scaling;

  qfu2_id_amt.textContent = "ID: QFU2 || " + qfu2amt + "/1";
  qfu2_cost_scale.textContent = "Cost: " + qfu2cost.toExponential(3) + " QF";

  qfu3_id_amt.textContent = "ID: QFU3 || x" + qfu3amt;
  qfu3_cost_scale.textContent = "Cost: " + qfu3cost.toExponential(3) + " QF || Scaling: ^" + qfu3scaling;

  qfu4_id_amt.textContent = "ID: QFU4 || " + qfu4amt + "/1";
  qfu4_cost_scale.textContent = "Cost: " + qfu4cost.toExponential(3) + " QF";

  qfu5_id_amt.textContent = "ID: QFU5 || x" + qfu5amt;
  qfu5_cost_scale.textContent = "Cost: " + qfu5cost.toExponential(3) + " QF || Scaling: ^" + qfu5scaling;

  qfu6_id_amt.textContent = "ID: QFU6 || " + qfu6amt + "/1";
  qfu6_cost_scale.textContent = "Cost: " + qfu6cost.toExponential(3) + " QF";

  qfm4_effect.textContent = "x" + new Decimal(decimalNumber.sqrt()).toExponential(3);
}

//=========================================================================

//    ========         ==        ========
//  ==                ====       ==     ==
//  ==               ==  ==      ==     ==
//  ==              ==    ==     ========
//  ==             ==========    ==
//  ==            ==        ==   ==
//    =========  ==          ==  ==

//=========================================================================

function updateSoftcaps(){
  if (decimalNumber.gte(new Decimal(1e3))){
    minicap = decimalNumber.sub(new Decimal(1e3).sub(new Decimal(1))).pow(new Decimal(0.08));
  } else {
    minicap = new Decimal(1);
  }

  if (decimalNumber.gte(new Decimal(1e8))){
    softcap = decimalNumber.sub(new Decimal(1e8).sub(new Decimal(1))).pow(new Decimal(0.16));
  } else {
    softcap = new Decimal(1);
  }

  if (decimalNumber.gte(new Decimal(1e13))){
    supercap = decimalNumber.sub(new Decimal(1e13).sub(new Decimal(1))).pow(new Decimal(0.24));
  } else {
    supercap = new Decimal(1);
  }

  minicapDisplay.textContent = "Minicap starts at 1e-30: /" + minicap.toExponential(3);
  softcapDisplay.textContent = "Softcap starts at 1e-25: /" + softcap.toExponential(3);
  supercapDisplay.textContent = "Supercap starts at 1e-20: /" + supercap.toExponential(3);
}

//=========================================================================
//AUTOMATION

function automation(){
  if (octillionth_unlocked){
    if (!du2.disabled){
      du2.click();
    }
    if (!du1.disabled){
      du1.click();
    }

    if (!nu4.disabled && nonillionthPoints.gte(nu4cost)){
      nu4.click();
    }
    if (!nu2.disabled && nonillionthPoints.gte(nu2cost)){
      nu2.click();
    }
    if (!nu3.disabled && nonillionthPoints.gte(nu3cost)){
      nu3.click();
    }
    if (!nu1.disabled && nonillionthPoints.gte(nu1cost)){
      nu1.click();
    }
  }

  if (quintillionth_unlocked){
    if (!au8.disabled && atoms.gte(au8cost)){
      au8.click();
    }
    if (!au7.disabled && atoms.gte(au7cost)){
      au7.click();
    }
    if (!au6.disabled && atoms.gte(au6cost)){
      au6.click();
    }
    if (!au5.disabled && atoms.gte(au5cost)){
      au5.click();
    }
    if (!au4.disabled && atoms.gte(au4cost)){
      au4.click();
    }
    if (!au3.disabled && atoms.gte(au3cost)){
      au3.click();
    }
    if (!au2.disabled && atoms.gte(au2cost)){
      au2.click();
    }
    if (!au1.disabled && atoms.gte(au1cost)){
      au1.click();
    }
  }
}

//=========================================================================
//NEWS TICKER

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var chosenTicker;

function startTicker() {
  const textWidth = ticker.offsetWidth;
  const containerWidth = container.offsetWidth;

  const totalDistance = textWidth + containerWidth;

  const speed = 180;

  const duration = totalDistance / speed;

  ticker.style.transition = "none";
  ticker.style.transform = `translateX(${containerWidth}px)`;

  ticker.offsetHeight;

  ticker.style.transition = `transform ${duration}s linear`;
  ticker.style.transform = `translateX(-${textWidth}px)`;

  ticker.addEventListener("transitionend", () => {
    if (randomNumber(1, 10) == 1){
      chosenTicker = specialTickers[randomNumber(0, specialTickers.length - 1)];
    } else {
      chosenTicker = normalTickers[randomNumber(0, normalTickers.length - 1)];
    }
    ticker.textContent = chosenTicker;
    startTicker();
  }, { once: true });
}

startTicker();

function specificTicker(){
  let sTChosen = ""
  if (octillionth_unlocked){
    sTChosen = "Apparently Challenge Completions are a currency now."
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }

    sTChosen = "Wait... boosts for CC? I THOUGHT THEY WERE GAINED FROM COMPLETING CHALLENGES!"
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }

    sTChosen = "Introducing CCM5: x1 ALL CURRENCIES and +0 CC at the cost of 1e727 CC!";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }
  }

  if (sextillionth_unlocked){
    sTChosen = "Fun fact: if you're not at the Billionth Section, there's gonna be a fifth row of the SXUT! If you're wondering why some of the upgrades say \"???,\" then it's extensions...";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }

    sTChosen = "when the upgrade says \"???\"";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }
  }

  if (quintillionth_unlocked){
    sTChosen = "(not to be confused with IMR's Quantum Foam)";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }

    sTChosen = "I let you keep SXUT31. You're welcome. Next time, though, don't expect me to spoil you.";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }

    sTChosen = "yo what??? free CC???";
    if (!normalTickers.includes(sTChosen)){
      normalTickers.push(sTChosen);
    }
  }
}

//=========================================================================
//LINES

function connectElementsTopBottom(id, fromId, toId, color="white", width=2) {
  const svg = document.getElementById("lines-svg");
  if (!svg) return;

  const old = document.getElementById(id);
  if (old) svg.removeChild(old);

  const from = document.getElementById(fromId).getBoundingClientRect();
  const to = document.getElementById(toId).getBoundingClientRect();

  const x1 = from.left + from.width/2
  const y1 = from.top + from.height
  const x2 = to.left + to.width/2
  const y2 = to.top

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("id", id);
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);

  svg.appendChild(line);
}

function updateConnections() {
  //SXUT
  if (boughtSXUT11){
    connectElementsTopBottom("sxut-11-21", "sxut-11", "sxut-21", "#FF8080", 5);
    connectElementsTopBottom("sxut-11-22", "sxut-11", "sxut-22", "#FF8080", 5);
    connectElementsTopBottom("sxut-11-23", "sxut-11", "sxut-23", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-11-21", "sxut-11", "sxut-21", "#800000", 5);
    connectElementsTopBottom("sxut-11-22", "sxut-11", "sxut-22", "#800000", 5);
    connectElementsTopBottom("sxut-11-23", "sxut-11", "sxut-23", "#800000", 5);
  }

  if (boughtSXUT21){
    connectElementsTopBottom("sxut-21-31", "sxut-21", "sxut-31", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-21-31", "sxut-21", "sxut-31", "#800000", 5);
  }
  if (boughtSXUT22){
    connectElementsTopBottom("sxut-22-32", "sxut-22", "sxut-32", "#FF8080", 5);
    connectElementsTopBottom("sxut-22-33", "sxut-22", "sxut-33", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-22-32", "sxut-22", "sxut-32", "#800000", 5);
    connectElementsTopBottom("sxut-22-33", "sxut-22", "sxut-33", "#800000", 5);
  }

  if (boughtSXUT31){
    connectElementsTopBottom("sxut-31-42", "sxut-31", "sxut-42", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-31-42", "sxut-31", "sxut-42", "#800000", 5);
  }
  if (boughtSXUT32){
    connectElementsTopBottom("sxut-32-41", "sxut-32", "sxut-41", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-32-41", "sxut-32", "sxut-41", "#800000", 5);
  }
  if (boughtSXUT33){
    connectElementsTopBottom("sxut-33-42", "sxut-33", "sxut-42", "#FF8080", 5);
    connectElementsTopBottom("sxut-33-43", "sxut-33", "sxut-43", "#FF8080", 5);
  } else {
    connectElementsTopBottom("sxut-33-42", "sxut-33", "sxut-42", "#800000", 5);
    connectElementsTopBottom("sxut-33-43", "sxut-33", "sxut-43", "#800000", 5);
  }
}

window.addEventListener("scroll", updateConnections);
window.addEventListener("resize", updateConnections);

//
//CHECK UNLOCKS

function checkUnlocks(){
  if (quintillionth_unlocked){
    if (main_quintillionth_tab_button.classList.contains("qui-light")){
      quintillionth_tab.style.display = "block";
      quintillionth_main_section.style.display = "grid";
      main_quintillionth_tab_button.style.display = "inline-block";
    }

    sextillionth_unlocked = true;
    septillionth_unlocked = true;
    octillionth_unlocked = true;
    nonillionth_unlocked = true;
  }
  if (sextillionth_unlocked){
    if (main_sextillionth_tab_button.classList.contains("sx-light")){
      sextillionth_tab.style.display = "block";
      sextillionth_main_section.style.display = "grid";
      main_sextillionth_tab_button.style.display = "inline-block";
    }

    septillionth_unlocked = true;
    octillionth_unlocked = true;
    nonillionth_unlocked = true;
  }
  if (septillionth_unlocked){
    if (main_septillionth_tab_button.classList.contains("sep-light")){
      septillionth_tab.style.display = "block";
      septillionth_main_section.style.display = "grid";
      main_septillionth_tab_button.style.display = "inline-block";
    }

    octillionth_unlocked = true;
    nonillionth_unlocked = true;
  }
  if (octillionth_unlocked){
    if (main_octillionth_tab_button.classList.contains("oct-light")){
      octillionth_tab.style.display = "block";
      octillionth_main_section.style.display = "grid";
      main_octillionth_tab_button.style.display = "inline-block";
    }

    nonillionth_unlocked = true;
  }
  if (nonillionth_unlocked){
    if (main_nonillionth_tab_button.classList.contains("non-light")){
      nonillionth_grid.style.display = "grid";
      main_nonillionth_tab_button.style.display = "inline-block";
      nonillionth_grid.classList.remove("hidden");
    }
  }
}

//=========================================================================

//  ========    ========    ========
//  ==      ==  ==        ==
//  ==      ==  ==        ==
//  ==      ==  ========  ==
//  ==      ==  ==        ==
//  ==      ==  ==        ==
//  ========    ========    ========

//=========================================================================

//=========================================================================
//AFFORD DETECTION
function decillionthUpgrades(){
  if (non_reset_boost_check || boughtSXUT31){
    du1.textContent = "Increase N multi" + "\n by +2.5";
  } else {
    du1.textContent = "Increase N multi" + "\n by +2";
  }
  
  if (decimalNumber.gte(du1cost)) {
    du1.disabled = false;
    du1.classList.add("decillionth-button");
    du1.classList.remove("decillionth-dark-button");
  } else {
    du1.disabled = true;
    du1.classList.add("decillionth-dark-button");
    du1.classList.remove("decillionth-button");
  }

  if (decimalNumber.gte(du2cost) && du2amt.lt(new Decimal(10))) {
    du2.disabled = false;
    du2.classList.add("decillionth-button");
    du2.classList.remove("decillionth-dark-button");
  } else {
    du2.disabled = true;
    du2.classList.add("decillionth-dark-button");
    du2.classList.remove("decillionth-button");
  }
}

//=========================================================================
//CLICK
du1.addEventListener("click", function(){
  if (non_reset_boost_check){
    du1boost = du1boost.add(new Decimal(2.5));
  } else {
    du1boost = du1boost.add(new Decimal(2));
  }
  du1amt = du1amt.add(new Decimal(1));
  
  if (challengeModifier == 1){
    du1cost = du1cost.mul(du1scaling.pow(new Decimal(2)));
  } else {
    du1cost = du1cost.mul(du1scaling);
  }
});

du2.addEventListener("click", function(){
  if (du2amt.lt(new Decimal(10))){
    du2boost = du2boost.mul(new Decimal(1.4));
    du2amt = du2amt.add(new Decimal(1));
    decimalNumber = decimalNumber.sub(du2cost);
  
    if (challengeModifier == 1){
      du2cost = du2cost.mul(du2scaling.pow(new Decimal(2)));
    } else {
      du2cost = du2cost.mul(du2scaling);
    }
  }
});

//=========================================================================

//  ==    ==   ========   ==    ==
//  ===   ==  ==      ==  ===   ==
//  ====  ==  ==      ==  ====  ==
//  == == ==  ==      ==  == == ==
//  ==  ====  ==      ==  ==  ====
//  ==   ===  ==      ==  ==   ===
//  ==    ==   ========   ==    ==

//=========================================================================

//=========================================================================
//RESET DETECTION
function checkNonillionthReset(){
  if (decimalNumber.gte(new Decimal(1000)) && challengeModifier != 3){
    nreset.disabled = false;
  } else {
    nreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingNonillionth(){
  if (decimalNumber.gte(new Decimal(1000)) && challengeModifier != 3){
    if (challengeModifier == 1){
      npbase = new Decimal(decimalNumber.div(new Decimal(1000)).logarithm(4)).add(new Decimal(1)).floor();
      npthreshold = npbase.ceil().pow_base(new Decimal(4)).mul(new Decimal(1000));
    } else {
      npbase = new Decimal(decimalNumber.div(new Decimal(1000)).logarithm(2)).add(new Decimal(1)).floor();
      npthreshold = npbase.ceil().pow_base(npscaling).mul(new Decimal(1000));
    }
  } else if (decimalNumber.lt(new Decimal(1000))){
    npbase = new Decimal(0);
  }
  
  nppending = npbase.mul(nu1boost);
  
  if (oct_reset_boost_check){
    nppending = nppending.mul(new Decimal(4));
  }

  if (chal3completions.gte(new Decimal(1))){
    nppending = nppending.mul(chal3completions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (sep_reset_boost_check){
    nppending = nppending.mul(new Decimal(2));
  }

  if (sxp_reset_boost_check){
    nppending = nppending.mul(new Decimal(10));
  }

  if (qfm3unlocked){
    nppending = nppending.mul(new Decimal(15));
  }
}

//=========================================================================
//RESET CLICK
nreset.addEventListener("click", function(){
  nonillionthResetInitiate();
  nonillionth_grid.style.display = "grid";
  nonillionth_grid.classList.remove("hidden");
  main_octillionth_tab_button.style.display = "inline-block";
  nonillionth_unlocked = true;
  octillionth_tab.style.display = "block";
  checkUnlocks();
});

topNP.addEventListener("click", function(){
  if (nreset.disabled == false){
    nonillionthResetInitiate();
    nonillionth_grid.style.display = "grid";
    nonillionth_grid.classList.remove("hidden");
    main_octillionth_tab_button.style.display = "inline-block";
    nonillionth_unlocked = true;
    octillionth_tab.style.display = "block";
    checkUnlocks();
  }
});

//=========================================================================
//AFFORD DETECTION
function nonillionthUpgrades(){
  if (nonillionthPoints.gte(nu1cost)) {
    nu1.disabled = false;
    nu1.classList.add("non-light");
    nu1.classList.remove("non-dark");
  } else {
    nu1.disabled = true;
    nu1.classList.add("non-dark");
    nu1.classList.remove("non-light");
  }
  
  if (nonillionthPoints.gte(nu2cost) && !nu2amt.eq(new Decimal(1))) {
    nu2.disabled = false;
    nu2.classList.add("non-light");
    nu2.classList.remove("non-dark");
  } else {
    nu2.disabled = true;
    nu2.classList.add("non-dark");
    nu2.classList.remove("non-light");
  }

  if (nonillionthPoints.gte(nu3cost) && !nu3amt.eq(new Decimal(8))) {
    nu3.disabled = false;
    nu3.classList.add("non-light");
    nu3.classList.remove("non-dark");
  } else {
    nu3.disabled = true;
    nu3.classList.add("non-dark");
    nu3.classList.remove("non-light");
  }

  if (nonillionthPoints.gte(nu4cost) && !nu4amt.eq(new Decimal(1))) {
    nu4.disabled = false;
    nu4.classList.add("non-light");
    nu4.classList.remove("non-dark");
  } else {
    nu4.disabled = true;
    nu4.classList.add("non-dark");
    nu4.classList.remove("non-light");
  }
}

//=========================================================================
//CLICK
nu1.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu1cost);
  nu1boost = nu1boost.mul(new Decimal(2));
  nu1amt = nu1amt.add(new Decimal(1));
  if (challengeModifier == 1){
    nu1cost = nu1cost.mul(nu1scaling.pow(new Decimal(2)));
  } else {
    nu1cost = nu1cost.mul(nu1scaling);
  }
  
  checkPendingNonillionth();
});

nu2.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu2cost);
  nu2amt = nu2amt.add(new Decimal(1));
  
  nu2ImpactIteration();
});

nu3.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu3cost);
  nu3boost = nu3boost.mul(new Decimal(3));
  nu3amt = nu3amt.add(new Decimal(1));
  if (challengeModifier == 1){
    nu3cost = nu3cost.mul(nu3scaling.pow(new Decimal(2)));
  } else {
    nu3cost = nu3cost.mul(nu3scaling);
  }
  
  checkPendingNonillionth();
});

nu4.addEventListener("click", function(){
  nonillionthPoints = nonillionthPoints.sub(nu4cost);
  nu4amt = nu4amt.add(new Decimal(1));
  
  nu1scaling = new Decimal(3);
  nu3scaling = new Decimal(6);
  nu4ImpactIteration();
});

//=========================================================================
//NU# SPECIFIC
function nu2ImpactIteration(){
  let savedValue = du1amt;
  du1amt = new Decimal(0);
  du1cost = new Decimal(4);
  for (var nu2IICounter = new Decimal(0); nu2IICounter.lt(savedValue); nu2IICounter = nu2IICounter.add(new Decimal(1))){
    du1cost = du1cost.mul(du1scaling);
    du1amt = du1amt.add(new Decimal(1));
  }
}

function nu4ImpactIteration(){
  let savedNu1Value = nu1amt;
  nu1amt = new Decimal(0);
  nu1cost = new Decimal(1);
  for (var nu4IICounter = new Decimal(0); nu4IICounter.lt(savedNu1Value); nu4IICounter = nu4IICounter.add(new Decimal(1))){
    if (challengeModifier == 1){
      nu1cost = nu1cost.mul(nu1scaling.pow(new Decimal(2)));
    } else {
      nu1cost = nu1cost.mul(nu1scaling);
    }
    nu1amt = nu1amt.add(new Decimal(1));
  }

  let savedNu3Value = nu3amt;
  nu3amt = new Decimal(0);
  nu3cost = new Decimal(10);
  for (var nu4IICounter = new Decimal(0); nu4IICounter.lt(savedNu3Value); nu4IICounter = nu4IICounter.add(new Decimal(1))){
    if (challengeModifier == 1){
      nu3cost = nu3cost.mul(nu3scaling.pow(new Decimal(2)));
    } else {
      nu3cost = nu3cost.mul(nu3scaling);
    }
    nu3amt = nu3amt.add(new Decimal(1));
  }
}

//=========================================================================

//   ========     ========  ==========
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//  ==      ==  ==              ==
//   ========     ========      ==

//=========================================================================

//=========================================================================
//TABS
oct_infobox_tab_button.addEventListener("click", function(){
  oct_challenge_tab.style.display = "none";
  oct_infobox_tab.style.display = "block";
  
  oct_challenge_tab_button.classList.add("oct-dark")
  oct_challenge_tab_button.classList.remove("oct-light");
  
  oct_infobox_tab_button.classList.add("oct-light");
  oct_infobox_tab_button.classList.remove("oct-dark");
});

oct_challenge_tab_button.addEventListener("click", function(){
  oct_infobox_tab.style.display = "none";
  oct_challenge_tab.style.display = "grid";
  
  oct_infobox_tab_button.classList.add("oct-dark")
  oct_infobox_tab_button.classList.remove("oct-light");
  
  oct_challenge_tab_button.classList.add("oct-light");
  oct_challenge_tab_button.classList.remove("oct-dark"); 
});

//=========================================================================
//RESET DETECTION
function checkOctillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 6)) && challengeModifier != 5) {
    oreset.disabled = false;
  } else {
    oreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingOctillionth(){ 
  if (decimalNumber.gte(new Decimal.pow(10, 6))){
    opbase = new Decimal(decimalNumber.div(new Decimal(1000000)).logarithm(3)).add(new Decimal(1)).floor();
    opthreshold = opbase.ceil().pow_base(opscaling).mul(new Decimal.pow(10, 6));
  } else if (decimalNumber.lt(new Decimal.pow(10, 6))){
    opbase = new Decimal(0);
  }

  oppending = new Decimal(opbase);

  if (chal2completions.gte(new Decimal(1))){
    oppending = oppending.mul(chal2completions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (ccm1unlocked){
    oppending = oppending.mul(challengeCompletions.div(new Decimal(2)).add(new Decimal(1)));
  }

  if (sep_reset_boost_check){
    oppending = oppending.mul(new Decimal(2));
  }

  if (sxp_reset_boost_check){
    oppending = oppending.mul(new Decimal(10));
  }
}

//=========================================================================
//RESET CLICK
oreset.addEventListener("click", function(){
  octillionthResetInitiate();
  octillionth_main_section.style.display = "grid";
  octillionth_unlocked = true;
  checkUnlocks();
});

topOP.addEventListener("click", function(){
  if (oreset.disabled == false){
    octillionthResetInitiate();
    octillionth_main_section.style.display = "grid";
    octillionth_unlocked = true;
    checkUnlocks();
  }
});

//=========================================================================
//CHALLENGE ACTIVATION
chal1.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 1){
    challengeModifier = 1;
  } else {
    challengeModifier = 0;
  }
});

chal2.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 2){
    challengeModifier = 2;
  } else {
    challengeModifier = 0;
  }
});

chal3.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 3){
    challengeModifier = 3;
  } else {
    challengeModifier = 0;
  }
});

chal4.addEventListener("click", function(){
  octillionthResetInitiate();
  
  if (challengeModifier != 4){
    challengeModifier = 4;
  } else {
    challengeModifier = 0;
  }
});

//=========================================================================
//CHALLENGE GOAL CHECKING
function chal1GoalChecking(){
  if (decimalNumber.gte(chal1goal) && challengeModifier == 1 && chal1completions.lt(new Decimal(100))){
    chal1goal = chal1goal.pow(chal1scaling);
    chal1completions = chal1completions.add(new Decimal(1));
  }
}

function chal2GoalChecking(){
  if (decimalNumber.gte(chal2goal) && challengeModifier == 2 && chal2completions.lt(new Decimal(100))){
    chal2goal = chal2goal.mul(chal2scaling);
    chal2completions = chal2completions.add(new Decimal(1));
  }
}

function chal3GoalChecking(){
  if (decimalNumber.gte(chal3goal) && challengeModifier == 3 && chal3completions.lt(new Decimal(100))){
    chal3goal = chal3goal.mul(chal3scaling);
    chal3completions = chal3completions.add(new Decimal(1));
  }
}

function chal4GoalChecking(){
  if (decimalNumber.gte(chal4goal) && challengeModifier == 4 && chal4completions.lt(new Decimal(100))){
    chal4goal = chal4goal.mul(chal4scaling);
    chal4completions = chal4completions.add(new Decimal(1));
  }
}

//=========================================================================
//MILESTONES

function checkCCM(){
  if (challengeCompletions.gte(new Decimal(3))){
    ccm1.classList.add("oct-light");
    ccm1.classList.remove("oct-dark");
    ccm1unlocked = true;
  } else {
    ccm1.classList.add("oct-dark");
    ccm1.classList.remove("oct-light");
    ccm1unlocked = false;
  }

  if (challengeCompletions.gte(new Decimal(10))){
    ccm2.classList.add("oct-light");
    ccm2.classList.remove("oct-dark");
    ccm2unlocked = true;
  } else {
    ccm2.classList.add("oct-dark");
    ccm2.classList.remove("oct-light");
    ccm2unlocked = false;
  }

  if (challengeCompletions.gte(new Decimal(20))){
    ccm3.classList.add("oct-light");
    ccm3.classList.remove("oct-dark");
    ccm3unlocked = true;
  } else {
    ccm3.classList.add("oct-dark");
    ccm3.classList.remove("oct-light");
    ccm3unlocked = false;
  }

  if (ccm3unlocked || main_septillionth_tab_button.style.display == "inline-block"){
    if (main_septillionth_tab_button.classList.contains("sep-light")){
      septillionth_tab.style.display = "block";
    }
    main_septillionth_tab_button.style.display = "inline-block";
  }
}

//=========================================================================

//   ========   ========  ========
//  ==          ==        ==     ==
//  ==          ==        ==     ==
//   ========   ========  ========
//          ==  ==        ==
//          ==  ==        ==
//   ========   ========  ==

//=========================================================================

//=========================================================================
//TABS
sep_infobox_tab_button.addEventListener("click", function(){
  septillionthGrid.style.display = "none";
  sep_infobox_tab.style.display = "block";
  
  sep_atom_tab_button.classList.add("sep-dark")
  sep_atom_tab_button.classList.remove("sep-light");
  
  sep_infobox_tab_button.classList.add("sep-light");
  sep_infobox_tab_button.classList.remove("sep-dark");
});

sep_atom_tab_button.addEventListener("click", function(){
  sep_infobox_tab.style.display = "none";
  septillionthGrid.style.display = "grid";
  
  sep_infobox_tab_button.classList.add("sep-dark")
  sep_infobox_tab_button.classList.remove("sep-light");
  
  sep_atom_tab_button.classList.add("sep-light");
  sep_atom_tab_button.classList.remove("sep-dark"); 
});

//=========================================================================
//RESET DETECTION
function checkSeptillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 9)) && challengeModifier != 5) {
    spreset.disabled = false;
  } else {
    spreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingSeptillionth(){ 
  if (decimalNumber.gte(new Decimal.pow(10, 9))){
    if (sxp_reset_boost_check){
      spbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 9)).logarithm(4)).add(new Decimal(1)).floor();
      spthreshold = spbase.ceil().pow_base(new Decimal(4)).mul(new Decimal.pow(10, 9));
    } else {
      spbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 9)).logarithm(10)).add(new Decimal(1)).floor();
      spthreshold = spbase.ceil().pow_base(spscaling).mul(new Decimal.pow(10, 9));
    }
  } else if (decimalNumber.lt(new Decimal.pow(10, 9))){
    spbase = new Decimal(0);
  }

  sppending = new Decimal(spbase);

  if (sxp_reset_boost_check){
    sppending = sppending.mul(new Decimal(10));
  }

  if (qfu3amt.gte(new Decimal(1))){
    sppending = sppending.mul(new Decimal(qfu3boost));
  }

  if (qfm3unlocked){
    sppending = sppending.mul(new Decimal(15));
  }
}

//=========================================================================
//RESET CLICK
spreset.addEventListener("click", function(){
  septillionthResetInitiate();
  septillionth_unlocked = true;
  septillionth_main_section.style.display = "grid";
  sextillionth_tab.style.display = "block";
  main_sextillionth_tab_button.style.display = "inline-block";
  checkUnlocks();
});

topSP.addEventListener("click", function(){
  if (spreset.disabled == false){
    septillionthResetInitiate();
    septillionth_unlocked = true;
    septillionth_main_section.style.display = "grid";
    sextillionth_tab.style.display = "block";
    main_sextillionth_tab_button.style.display = "inline-block";
    checkUnlocks();
  } 
});

//=========================================================================
//IS ATOM UPGRADE AFFORDABLE
function checkAU(){
  if (atoms.gte(new Decimal(au1cost))){
    au1.disabled = false;
    if (au1.classList.contains("sep-dark")){
      au1.classList.remove("sep-dark");
      au1.classList.add("sep-light");
    }
  } else {
    au1.disabled = true;
    if (au1.classList.contains("sep-light")){
      au1.classList.remove("sep-light");
      au1.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au2cost))){
    au2.disabled = false;
    if (au2.classList.contains("sep-dark")){
      au2.classList.remove("sep-dark");
      au2.classList.add("sep-light");
    }
  } else {
    au2.disabled = true;
    if (au2.classList.contains("sep-light")){
      au2.classList.remove("sep-light");
      au2.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au3cost))){
    au3.disabled = false;
    if (au3.classList.contains("sep-dark")){
      au3.classList.remove("sep-dark");
      au3.classList.add("sep-light");
    }
  } else {
    au3.disabled = true;
    if (au3.classList.contains("sep-light")){
      au3.classList.remove("sep-light");
      au3.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au4cost))){
    au4.disabled = false;
    if (au4.classList.contains("sep-dark")){
      au4.classList.remove("sep-dark");
      au4.classList.add("sep-light");
    }
  } else {
    au4.disabled = true;
    if (au4.classList.contains("sep-light")){
      au4.classList.remove("sep-light");
      au4.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au5cost))){
    au5.disabled = false;
    if (au5.classList.contains("sep-dark")){
      au5.classList.remove("sep-dark");
      au5.classList.add("sep-light");
    }
  } else {
    au5.disabled = true;
    if (au5.classList.contains("sep-light")){
      au5.classList.remove("sep-light");
      au5.classList.add("sep-dark");
    }
  }
  
  if (atoms.gte(new Decimal(au6cost))){
    au6.disabled = false;
    if (au6.classList.contains("sep-dark")){
      au6.classList.remove("sep-dark");
      au6.classList.add("sep-light");
    }
  } else {
    au6.disabled = true;
    if (au6.classList.contains("sep-light")){
      au6.classList.remove("sep-light");
      au6.classList.add("sep-dark");
    }
  }

  if (boughtSXUT31){
    au7_sxpgate.style.display = "block";
    au8_sxpgate.style.display = "block";
  }

  if (atoms.gte(new Decimal(au7cost))){
    au7.disabled = false;
    if (au7.classList.contains("sep-dark")){
      au7.classList.remove("sep-dark");
      au7.classList.add("sep-light");
    }
  } else {
    au7.disabled = true;
    if (au7.classList.contains("sep-light")){
      au7.classList.remove("sep-light");
      au7.classList.add("sep-dark");
    }
  }

  if (atoms.gte(new Decimal(au8cost))){
    au8.disabled = false;
    if (au8.classList.contains("sep-dark")){
      au8.classList.remove("sep-dark");
      au8.classList.add("sep-light");
    }
  } else {
    au8.disabled = true;
    if (au8.classList.contains("sep-light")){
      au8.classList.remove("sep-light");
      au8.classList.add("sep-dark");
    }
  }
}

//=========================================================================
//ATOM UPGRADE CLICKS

au1.addEventListener("click", function(){
  atoms = atoms.sub(au1cost);
  au1amt = au1amt.add(new Decimal(1));
  
  au1cost = au1cost.mul(au1scaling);
  au123boost = au123boost.add(new Decimal(0.5));
});

au2.addEventListener("click", function(){
  atoms = atoms.sub(au2cost);
  au2amt = au2amt.add(new Decimal(1));
  
  au2cost = au2cost.mul(au2scaling);
  au123boost = au123boost.add(new Decimal(2));
});

au3.addEventListener("click", function(){
  atoms = atoms.sub(au3cost);
  au3amt = au3amt.add(new Decimal(1));
  
  au3cost = au3cost.mul(au3scaling);
  au123boost = au123boost.add(new Decimal(5));
});

au4.addEventListener("click", function(){
  atoms = atoms.sub(au4cost);
  au4amt = au4amt.add(new Decimal(1));
  
  au4cost = au4cost.mul(au4scaling);
  au456boost = au456boost.add(new Decimal(2));
});

au5.addEventListener("click", function(){
  atoms = atoms.sub(au5cost);
  au5amt = au5amt.add(new Decimal(1));
  
  au5cost = au5cost.mul(au5scaling);
  au456boost = au456boost.add(new Decimal(10));
});

au6.addEventListener("click", function(){
  atoms = atoms.sub(au6cost);
  au6amt = au6amt.add(new Decimal(1));
  
  au6cost = au6cost.mul(au6scaling);
  au456boost = au456boost.add(new Decimal(50));
});

au7.addEventListener("click", function(){
  atoms = atoms.sub(au7cost);
  au7amt = au7amt.add(new Decimal(1));
  
  au7cost = au7cost.pow(au7scaling);
  au789boost = au789boost.add(new Decimal(0.1));
});

au8.addEventListener("click", function(){
  atoms = atoms.sub(au8cost);
  au8amt = au8amt.add(new Decimal(1));
  
  au8cost = au8cost.pow(au8scaling);
  au789boost = au789boost.add(new Decimal(0.5));
});

//=========================================================================

//   ========   ==    ==  ========
//  ==           ==  ==   ==     ==
//  ==            ====    ==     ==
//   ========      ==     ========
//          ==    ====    ==
//          ==   ==  ==   ==
//   ========   ==    ==  ==

//=========================================================================

//=========================================================================
//RESET DETECTION
function checkSextillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 12)) && challengeModifier != 5) {
    sxpreset.disabled = false;
  } else {
    sxpreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingSextillionth(){  //MAKE SURE THE NUMBERS IN POW_BASE IN THRESHOLD AND THE .LOGARITHM IN BASE ARE THE SAME!!!!
  if (decimalNumber.gte(new Decimal.pow(10, 12))){  //I RECOMMEND USING THE RESPECTIVE SCALING VARIABLE FOR POW_BASE!!!!
    sxpbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 12)).logarithm(2)).add(new Decimal(1)).floor();
    sxpthreshold = sxpbase.ceil().pow_base(sxpscaling).mul(new Decimal.pow(10, 12));
  } else if (decimalNumber.lt(new Decimal.pow(10, 12))){
    sxpbase = new Decimal(0);
  }

  sxppending = new Decimal(sxpbase);

  if (boughtSXUT41){
    sxppending = sxppending.mul(new Decimal(3));
  }

  if (qfu1amt.gte(new Decimal(1))){
    sxppending = sxppending.mul(new Decimal(qfu1SXPboost));
  }
}

//=========================================================================
//RESET CLICK
sxpreset.addEventListener("click", function(){
  sextillionthResetInitiate();
  sextillionth_unlocked = true;
  sextillionth_main_section.style.display = "grid";
  checkUnlocks();
});

topSXP.addEventListener("click", function(){
  if (sxpreset.disabled == false){
    sextillionthResetInitiate();
    sextillionth_unlocked = true;
    sextillionth_main_section.style.display = "grid";
    checkUnlocks();
  } 
});

//=========================================================================
//CHECK AFFORD

function checkSXUT(){
  if (sextillionthPoints.gte(new Decimal(1)) && !boughtSXUT11) {
    sxut_11.disabled = false;
    sxut_11.classList.add("sx-light");
    sxut_11.classList.remove("sx-dark");
  } else {
    sxut_11.disabled = true;
    sxut_11.classList.add("sx-dark");
    sxut_11.classList.remove("sx-light");
  }

  if (challengeCompletions.gte(50) && !boughtSXUT21 && boughtSXUT11) {
    sxut_21.disabled = false;
    sxut_21.classList.add("sx-light");
    sxut_21.classList.remove("sx-dark");
  } else {
    sxut_21.disabled = true;
    sxut_21.classList.add("sx-dark");
    sxut_21.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(3)) && !boughtSXUT22 && boughtSXUT11) {
    sxut_22.disabled = false;
    sxut_22.classList.add("sx-light");
    sxut_22.classList.remove("sx-dark");
  } else {
    sxut_22.disabled = true;
    sxut_22.classList.add("sx-dark");
    sxut_22.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(6)) && !boughtSXUT23 && boughtSXUT11) {
    sxut_23.disabled = false;
    sxut_23.classList.add("sx-light");
    sxut_23.classList.remove("sx-dark");
  } else {
    sxut_23.disabled = true;
    sxut_23.classList.add("sx-dark");
    sxut_23.classList.remove("sx-light");
  }

  if (challengeCompletions.gte(100) && !boughtSXUT31 && boughtSXUT21) {
    sxut_31.disabled = false;
    sxut_31.classList.add("sx-light");
    sxut_31.classList.remove("sx-dark");
  } else {
    sxut_31.disabled = true;
    sxut_31.classList.add("sx-dark");
    sxut_31.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(15)) && !boughtSXUT32 && boughtSXUT22) {
    sxut_32.disabled = false;
    sxut_32.classList.add("sx-light");
    sxut_32.classList.remove("sx-dark");
  } else {
    sxut_32.disabled = true;
    sxut_32.classList.add("sx-dark");
    sxut_32.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(25)) && !boughtSXUT33 && boughtSXUT22) {
    sxut_33.disabled = false;
    sxut_33.classList.add("sx-light");
    sxut_33.classList.remove("sx-dark");
  } else {
    sxut_33.disabled = true;
    sxut_33.classList.add("sx-dark");
    sxut_33.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(50)) && !boughtSXUT41 && boughtSXUT32) {
    sxut_41.disabled = false;
    sxut_41.classList.add("sx-light");
    sxut_41.classList.remove("sx-dark");
  } else {
    sxut_41.disabled = true;
    sxut_41.classList.add("sx-dark");
    sxut_41.classList.remove("sx-light");
  }

  if (sextillionthPoints.gte(new Decimal(100)) && !boughtSXUT42 && boughtSXUT31 && boughtSXUT33) {
    sxut_42.disabled = false;
    sxut_42.classList.add("sx-light");
    sxut_42.classList.remove("sx-dark");
  } else {
    sxut_42.disabled = true;
    sxut_42.classList.add("sx-dark");
    sxut_42.classList.remove("sx-light");
  }

  if (atoms.gte(new Decimal.pow(10, 30)) && !boughtSXUT43 && boughtSXUT33) {
    sxut_43.disabled = false;
    sxut_43.classList.add("sx-light");
    sxut_43.classList.remove("sx-dark");
  } else {
    sxut_43.disabled = true;
    sxut_43.classList.add("sx-dark");
    sxut_43.classList.remove("sx-light");
  }

  if (boughtSXUT42 || quintillionth_unlocked){
    challenge5gate.style.display = "block";
  }
}

//=========================================================================
//CLICKY CLICKY

//=========================================================================
//RESPEC

sxut_respec.addEventListener("click", function(){
  if (boughtSXUT11 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(1));
    sxut_11.classList.remove("sx-light");
    sxut_11.classList.add("sx-dark");
    boughtSXUT11 = false;
  }

  if (boughtSXUT21 == true){
    sxut_21.classList.remove("sx-light");
    sxut_21.classList.add("sx-dark");
    boughtSXUT21 = false;
  }

  if (boughtSXUT22 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(3));
    sxut_22.classList.remove("sx-light");
    sxut_22.classList.add("sx-dark");
    boughtSXUT22 = false;
  }

  if (boughtSXUT23 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(6));
    sxut_23.classList.remove("sx-light");
    sxut_23.classList.add("sx-dark");
    boughtSXUT23 = false;
  }

  if (boughtSXUT32 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(15));
    sxut_32.classList.remove("sx-light");
    sxut_32.classList.add("sx-dark");
    boughtSXUT32 = false;
  }

  if (boughtSXUT33 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(25));
    sxut_33.classList.remove("sx-light");
    sxut_33.classList.add("sx-dark");
    boughtSXUT33 = false;
  }

  if (boughtSXUT41 == true){
    sextillionthPoints = sextillionthPoints.add(new Decimal(50));
    sxut_41.classList.remove("sx-light");
    sxut_41.classList.add("sx-dark");
    boughtSXUT41 = false;
  }

  if (boughtSXUT43 == true){
    atoms = atoms.add(new Decimal.pow(10, 30));
    sxut_43.classList.remove("sx-light");
    sxut_43.classList.add("sx-dark");
    boughtSXUT43 = false;
  }
});

//=========================================================================
//UPGS

function checkSXUTColors(){
  if (boughtSXUT11){
    sxut_11.classList.add("sx-light");
    sxut_11.classList.remove("sx-dark");
  }
  
  if (boughtSXUT21){
    sxut_21.classList.add("sx-light");
    sxut_21.classList.remove("sx-dark");
  }
  if (boughtSXUT22){
    sxut_22.classList.add("sx-light");
    sxut_22.classList.remove("sx-dark");
  }
  if (boughtSXUT23){
    sxut_23.classList.add("sx-light");
    sxut_23.classList.remove("sx-dark");
  }

  if (boughtSXUT31){
    sxut_31.classList.add("sx-light");
    sxut_31.classList.remove("sx-dark");
  }
  if (boughtSXUT32){
    sxut_32.classList.add("sx-light");
    sxut_32.classList.remove("sx-dark");
  }
  if (boughtSXUT33){
    sxut_33.classList.add("sx-light");
    sxut_33.classList.remove("sx-dark");
  }

  if (boughtSXUT41){
    sxut_41.classList.add("sx-light");
    sxut_41.classList.remove("sx-dark");
  }
  if (boughtSXUT42){
    sxut_42.classList.add("sx-light");
    sxut_42.classList.remove("sx-dark");
  }
  if (boughtSXUT43){
    sxut_43.classList.add("sx-light");
    sxut_43.classList.remove("sx-dark");
  }
}

sxut_11.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(1));
  boughtSXUT11 = true;
});

sxut_21.addEventListener("click", function(){
  boughtSXUT21 = true;
});

sxut_22.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(3));
  boughtSXUT22 = true;
});

sxut_23.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(6));
  boughtSXUT23 = true;
});

sxut_31.addEventListener("click", function(){
  boughtSXUT31 = true;
});

sxut_32.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(15));
  boughtSXUT32 = true;
});

sxut_33.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(25));
  boughtSXUT33 = true;
});

sxut_41.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(50));
  boughtSXUT41 = true;
});

sxut_42.addEventListener("click", function(){
  sextillionthPoints = sextillionthPoints.sub(new Decimal(100));
  boughtSXUT42 = true;
});

sxut_43.addEventListener("click", function(){
  atoms = atoms.sub(new Decimal.pow(10, 30));
  boughtSXUT43 = true;
});

//=========================================================================
//CHALLENGE 5

chal5.addEventListener("click", function(){
  sextillionthResetInitiate();
  
  if (challengeModifier != 5){
    challengeModifier = 5;
  } else {
    challengeModifier = 0;
  }
});

function chal5GoalChecking(){
  if (atoms.gte(chal5goal) && challengeModifier == 5 && chal5completions.lt(new Decimal(1))){
    chal5completions = chal5completions.add(new Decimal(1));
  }

  if (chal5completions.gte(new Decimal(1)) || main_quintillionth_tab_button.style.display == "inline-block"){
    if (main_quintillionth_tab_button.classList.contains("qui-light")){
      quintillionth_tab.style.display = "block";
    }
    main_quintillionth_tab_button.style.display = "inline-block";
  }
}

//=========================================================================

//   ========   ==      ==  ========
//  ==      ==  ==      ==     ==
//  ==      ==  ==      ==     ==
//  ==      ==  ==      ==     ==
//  ==  ==  ==  ==      ==     ==
//  ==   == ==  ==      ==     ==
//   ===  ===    ========   ========

//=========================================================================

//=========================================================================
//RESET DETECTION
function checkQuintillionthReset(){
  if (decimalNumber.gte(new Decimal.pow(10, 15))) {
    qpreset.disabled = false;
  } else {
    qpreset.disabled = true;
  }
}

//=========================================================================
//PENDING
function checkPendingQuintillionth(){  //MAKE SURE THE NUMBERS IN POW_BASE IN THRESHOLD AND THE .LOGARITHM IN BASE ARE THE SAME!!!!
  if (decimalNumber.gte(new Decimal.pow(10, 15))){  //I RECOMMEND USING THE RESPECTIVE SCALING VARIABLE FOR POW_BASE!!!!
    qpbase = new Decimal(decimalNumber.div(new Decimal.pow(10, 15)).logarithm(3)).add(new Decimal(1)).floor();
    qpthreshold = qpbase.ceil().pow_base(qpscaling).mul(new Decimal.pow(10, 15));
  } else if (decimalNumber.lt(new Decimal.pow(10, 15))){
    qpbase = new Decimal(0);
    qpthreshold = Decimal.pow(10, 15);
  }

  qppending = new Decimal(qpbase);

  if (qfu3amt.gte(new Decimal(1))){
    qppending = qppending.mul(new Decimal(qfu3boost));
  }
}

//=========================================================================
//RESET CLICK
qpreset.addEventListener("click", function(){
  quintillionthResetInitiate();
  quintillionth_unlocked = true;
  quintillionth_main_section.style.display = "grid";
});

topQP.addEventListener("click", function(){
  if (qpreset.disabled == false){
    quintillionthResetInitiate();
    quintillionth_unlocked = true;
    quintillionth_main_section.style.display = "grid";
  } 
});

//=========================================================================
//CHECK AFFORD

function quintillionthUpgrades(){
  if (quintillionthFragments.gte(new Decimal(qfu1cost))){
    qfu1.disabled = false;
    qfu1.classList.add("qui-light");
    qfu1.classList.remove("qui-dark");
  } else {
    qfu1.disabled = true;
    qfu1.classList.add("qui-dark");
    qfu1.classList.remove("qui-light");
  }

  if (quintillionthFragments.gte(new Decimal(qfu3cost))){
    qfu3.disabled = false;
    qfu3.classList.add("qui-light");
    qfu3.classList.remove("qui-dark");
  } else {
    qfu3.disabled = true;
    qfu3.classList.add("qui-dark");
    qfu3.classList.remove("qui-light");
  }

  if (quintillionthFragments.gte(new Decimal(qfu5cost))){
    qfu5.disabled = false;
    qfu5.classList.add("qui-light");
    qfu5.classList.remove("qui-dark");
  } else {
    qfu5.disabled = true;
    qfu5.classList.add("qui-dark");
    qfu5.classList.remove("qui-light");
  }

  if (quintillionthFragments.gte(new Decimal(qfu2cost)) && !qfu2amt.gte(new Decimal(1))){
    qfu2.disabled = false;
    qfu2.classList.add("qui-light");
    qfu2.classList.remove("qui-dark");
  } else {
    qfu2.disabled = true;
    qfu2.classList.add("qui-dark");
    qfu2.classList.remove("qui-light");
  }

  if (quintillionthFragments.gte(new Decimal(qfu4cost)) && !qfu4amt.gte(new Decimal(1))){
    qfu4.disabled = false;
    qfu4.classList.add("qui-light");
    qfu4.classList.remove("qui-dark");
  } else {
    qfu4.disabled = true;
    qfu4.classList.add("qui-dark");
    qfu4.classList.remove("qui-light");
  }

  if (quintillionthFragments.gte(new Decimal(qfu6cost)) && !qfu6amt.gte(new Decimal(1))){
    qfu6.disabled = false;
    qfu6.classList.add("qui-light");
    qfu6.classList.remove("qui-dark");
  } else {
    qfu6.disabled = true;
    qfu6.classList.add("qui-dark");
    qfu6.classList.remove("qui-light");
  }
}

//=========================================================================
//CLICKIFICATION
qfu1.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu1cost));
  qfu1amt = qfu1amt.add(new Decimal(1));
  qfu1SXPboost = qfu1SXPboost.add(new Decimal(1));
  qfu1QFboost = qfu1QFboost.mul(new Decimal(1.2));
  qfu1cost = qfu1cost.pow(new Decimal(qfu1scaling));
});

qfu2.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu2cost));
  qfu2amt = qfu2amt.add(new Decimal(1));
});

qfu3.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu3cost));
  qfu3amt = qfu3amt.add(new Decimal(1));
  qfu3boost = qfu3boost.mul(new Decimal(1.2));
  qfu3cost = qfu3cost.pow(new Decimal(qfu3scaling));
});

qfu4.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu4cost));
  qfu4amt = qfu4amt.add(new Decimal(1));
});

qfu5.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu5cost));
  qfu5amt = qfu5amt.add(new Decimal(1));
  qfu5boost = qfu5boost.add(new Decimal(25));
  qfu5cost = qfu5cost.pow(new Decimal(qfu5scaling));
});

qfu6.addEventListener("click", function(){
  quintillionthFragments = quintillionthFragments.sub(new Decimal(qfu6cost));
  qfu6amt = qfu6amt.add(new Decimal(1));
});

//=========================================================================
//MILLY MILESTONES (OR IS IT QUINTILLY?)
function checkQFM(){
  if (quintillionthFragments.gte(new Decimal(25))){
    qfm1.classList.add("qui-light");
    qfm1.classList.remove("qui-dark");
    qfm1unlocked = true;
  }

  if (quintillionthFragments.gte(new Decimal(1000))){
    qfm2.classList.add("qui-light");
    qfm2.classList.remove("qui-dark");
    qfm2unlocked = true;
  }

  if (quintillionthFragments.gte(new Decimal(25000))){
    qfm3.classList.add("qui-light");
    qfm3.classList.remove("qui-dark");
    qfm3unlocked = true;
  }

  if (quintillionthFragments.gte(new Decimal.pow(10, 10))){
    qfm4.classList.add("qui-light");
    qfm4.classList.remove("qui-dark");
    qfm4unlocked = true;
  }

  if (quintillionthFragments.gte(new Decimal.pow(10, 24))){
    qfm5.classList.add("qui-light");
    qfm5.classList.remove("qui-dark");
    qfm5unlocked = true;
  }

  if (quintillionthFragments.gte(new Decimal.pow(10, 30))){
    qfm6.classList.add("qui-light");
    qfm6.classList.remove("qui-dark");
    qfm6unlocked = true;
  }
}

//=========================================================================
//SXUT EXTENSION

//=========================================================================

//   ========         ==        ==          ==  ========
//  ==               ====        ==        ==   ==
//  ==              ==  ==        ==      ==    ==
//   ========      ==    ==        ==    ==     ========
//          ==    ==========        ==  ==      ==
//          ==   ==        ==        ====       ==
//   ========   ==          ==        ==        ========

//=========================================================================
setInterval(function(){
  saveGame();
  backgroundColorChange();
}, 10000);

window.onload = function(){
  loadGame();
}

function saveGame() {
  const saveData = {
    sliderPos: sliderPos.toString(),
    challengeModifier: challengeModifier.toString(),

    decimalNumber: decimalNumber.toString(),
    numberGain: numberGain.toString(),

    du1boost: du1boost.toString(),
    du1amt: du1amt.toString(),
    du1cost: du1cost.toString(),

    du2boost: du2boost.toString(),
    du2amt: du2amt.toString(),
    du2cost: du2cost.toString(),

    nonillionthPoints: nonillionthPoints.toString(),
    npbase: npbase.toString(),
    npthreshold: npthreshold.toString(),
    non_reset_boost_check: non_reset_boost_check.toString(),
    nonillionth_unlocked: nonillionth_unlocked.toString(),

    nu1boost: nu1boost.toString(),
    nu1amt: nu1amt.toString(),
    nu1cost: nu1cost.toString(),
    nu1scaling: nu1scaling.toString(),
    nu2amt: nu2amt.toString(),
    nu2cost: nu2cost.toString(),
    nu3boost: nu3boost.toString(),
    nu3amt: nu3amt.toString(),
    nu3cost: nu3cost.toString(),
    nu3scaling: nu3scaling.toString(),
    nu4amt: nu4amt.toString(),
    nu4cost: nu4cost.toString(),

    octillionthPoints: octillionthPoints.toString(),
    opbase: opbase.toString(),
    opthreshold: opthreshold.toString(),
    oct_reset_boost_check: oct_reset_boost_check.toString(),
    octillionth_unlocked: octillionth_unlocked.toString(),

    chal1completions: chal1completions.toString(),
    chal1goal: chal1goal.toString(),

    chal2completions: chal2completions.toString(),
    chal2goal: chal2goal.toString(),

    chal3completions: chal3completions.toString(),
    chal3goal: chal3goal.toString(),

    chal4completions: chal4completions.toString(),
    chal4goal: chal4goal.toString(),

    septillionthPoints: septillionthPoints.toString(),
    spbase: spbase.toString(),
    spthreshold: spthreshold.toString(),
    sep_reset_boost_check: sep_reset_boost_check.toString(),
    septillionth_unlocked: septillionth_unlocked.toString(),

    au123boost: au123boost.toString(),
    au456boost: au456boost.toString(),

    au1amt: au1amt.toString(),
    au1cost: au1cost.toString(),

    au2amt: au2amt.toString(),
    au2cost: au2cost.toString(),

    au3amt: au3amt.toString(),
    au3cost: au3cost.toString(),

    au4amt: au4amt.toString(),
    au4cost: au4cost.toString(),

    au5amt: au5amt.toString(),
    au5cost: au5cost.toString(),

    au6amt: au6amt.toString(),
    au6cost: au6cost.toString(),

    atoms: atoms.toString(),
    atomGain: atomGain.toString(),

    sextillionthPoints: sextillionthPoints.toString(),
    sxpbase: sxpbase.toString(),
    sxpthreshold: sxpthreshold.toString(),
    sxp_reset_boost_check: sxp_reset_boost_check.toString(),
    sextillionth_unlocked: sextillionth_unlocked.toString(),

    boughtSXUT11: boughtSXUT11.toString(),
    boughtSXUT12: boughtSXUT12.toString(),
    boughtSXUT13: boughtSXUT13.toString(),
    boughtSXUT21: boughtSXUT21.toString(),
    boughtSXUT22: boughtSXUT22.toString(),
    boughtSXUT23: boughtSXUT23.toString(),
    boughtSXUT24: boughtSXUT24.toString(),
    boughtSXUT31: boughtSXUT31.toString(),
    boughtSXUT32: boughtSXUT32.toString(),
    boughtSXUT33: boughtSXUT33.toString(),
    boughtSXUT34: boughtSXUT34.toString(),
    boughtSXUT41: boughtSXUT41.toString(),
    boughtSXUT42: boughtSXUT42.toString(),
    boughtSXUT43: boughtSXUT43.toString(),
    boughtSXUT44: boughtSXUT44.toString(),

    chal5completions: chal5completions.toString(),
    chal5goal: chal5goal.toString(),

    au7amt: au7amt.toString(),
    au7cost: au7cost.toString(),

    au8amt: au8amt.toString(),
    au8cost: au8cost.toString(),

    quintillionthPoints: quintillionthPoints.toString(),
    quintillionthFragments: quintillionthFragments.toString(),
    qpbase: qpbase.toString(),
    qpthreshold: qpthreshold.toString(),
    qui_reset_boost_check: qui_reset_boost_check.toString(),
    quintillionth_unlocked: quintillionth_unlocked.toString(),

    qfu1amt: qfu1amt.toString(),
    qfu1cost: qfu1cost.toString(),
    qfu1scaling: qfu1scaling.toString(),
    qfu1SXPboost: qfu1SXPboost.toString(),
    qfu1QFboost: qfu1QFboost.toString(),

    qfu2amt: qfu2amt.toString(),
    qfu2cost: qfu2cost.toString(),

    qfu3amt: qfu3amt.toString(),
    qfu3cost: qfu3cost.toString(),
    qfu3scaling: qfu3scaling.toString(),
    qfu3boost: qfu3boost.toString(),

    qfu4amt: qfu4amt.toString(),
    qfu4cost: qfu4cost.toString(),

    qfu5amt: qfu5amt.toString(),
    qfu5cost: qfu5cost.toString(),
    qfu5scaling: qfu5scaling.toString(),
    qfu5boost: qfu5boost.toString(),

    qfu6amt: qfu6amt.toString(),
    qfu6cost: qfu6cost.toString(),

    qfm1unlocked: qfm1unlocked.toString(),
    qfm2unlocked: qfm2unlocked.toString(),
    qfm3unlocked: qfm3unlocked.toString(),
    qfm4unlocked: qfm4unlocked.toString(),
    qfm5unlocked: qfm5unlocked.toString(),
    qfm6unlocked: qfm6unlocked.toString(),
  };
  
  localStorage.setItem("quinquaginticSave", JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem("quinquaginticSave");
  if (!saved) return;

  const data = JSON.parse(saved);

  sliderPos = data.sliderPos;
  slider.value = sliderPos;
  numberDisplay.style.fontSize = sliderPos + "px";
  challengeModifier = Number(data.challengeModifier);

  decimalNumber = new Decimal(data.decimalNumber || "0");
  numberGain = new Decimal(data.numberGain || "1");

  du1boost = new Decimal(data.du1boost || "0");
  du1amt = new Decimal(data.du1amt || "0");
  du1cost = new Decimal(data.du1cost || "10");

  du2boost = new Decimal(data.du2boost || "0");
  du2amt = new Decimal(data.du2amt || "0");
  du2cost = new Decimal(data.du2cost || "25");

  nonillionthPoints = new Decimal(data.nonillionthPoints || "0");
  npbase = new Decimal(data.npbase || "0");
  npthreshold = new Decimal(data.npthreshold || "1000");
  non_reset_boost_check = data.non_reset_boost_check === 'true';
  nonillionth_unlocked = data.nonillionth_unlocked === 'true';

  nu1boost = new Decimal(data.nu1boost || "1");
  nu1amt = new Decimal(data.nu1amt || "0");
  nu1cost = new Decimal(data.nu1cost || "1");
  nu1scaling = new Decimal(data.nu1scaling || "5");
  nu2amt = new Decimal(data.nu2amt || "0");
  nu2cost = new Decimal(data.nu2cost || "3");
  nu3boost = new Decimal(data.nu3boost || "1");
  nu3amt = new Decimal(data.nu3amt || "0");
  nu3cost = new Decimal(data.nu3cost || "10");
  nu3scaling = new Decimal(data.nu3scaling || "10");
  nu4amt = new Decimal(data.nu4amt || "0");
  nu4cost = new Decimal(data.nu4cost || "25");

  octillionthPoints = new Decimal(data.octillionthPoints || "0");
  opbase = new Decimal(data.opbase || "0");
  opthreshold = new Decimal(data.opthreshold || "1000000");
  oct_reset_boost_check = data.oct_reset_boost_check === 'true';
  octillionth_unlocked = data.octillionth_unlocked === 'true';

  chal1completions = new Decimal(data.chal1completions || "0");
  chal1goal = new Decimal(data.chal1goal || "1000");

  chal2completions = new Decimal(data.chal2completions || "0");
  chal2goal = new Decimal(data.chal2goal || "5000");

  chal3completions = new Decimal(data.chal3completions || "0");
  chal3goal = new Decimal(data.chal3goal || "10000");

  chal4completions = new Decimal(data.chal4completions || "0");
  chal4goal = new Decimal(data.chal4goal || "10000000");

  septillionthPoints = new Decimal(data.septillionthPoints || "0");
  spbase = new Decimal(data.spbase || "0");
  spthreshold = new Decimal(data.spthreshold || "1000000000");
  sep_reset_boost_check = data.sep_reset_boost_check === 'true';
  septillionth_unlocked = data.septillionth_unlocked === 'true';

  au123boost = new Decimal(data.au123boost || "0");
  au456boost = new Decimal(data.au456boost || "1");

  au1amt = new Decimal(data.au1amt || "0");
  au1cost = new Decimal(data.au1cost || "10");

  au2amt = new Decimal(data.au2amt || "0");
  au2cost = new Decimal(data.au2cost || "50");

  au3amt = new Decimal(data.au3amt || "0");
  au3cost = new Decimal(data.au3cost || "300");

  au4amt = new Decimal(data.au4amt || "0");
  au4cost = new Decimal(data.au4cost || "10000");

  au5amt = new Decimal(data.au5amt || "0");
  au5cost = new Decimal(data.au5cost || "1000000");

  au6amt = new Decimal(data.au6amt || "0");
  au6cost = new Decimal(data.au6cost || "10000000000");

  atoms = new Decimal(data.atoms || "0");
  atomGain = new Decimal(data.atomGain || "0");

  sextillionthPoints = new Decimal(data.sextillionthPoints || "0");
  sxpbase = new Decimal(data.sxpbase || "0");
  sxpthreshold = new Decimal(data.sxpthreshold || "1000000000000");
  sxp_reset_boost_check = data.sxp_reset_boost_check === 'true';
  sextillionth_unlocked = data.sextillionth_unlocked === 'true';

  boughtSXUT11 = data.boughtSXUT11 === 'true';
  boughtSXUT12 = data.boughtSXUT12 === 'true';
  boughtSXUT13 = data.boughtSXUT13 === 'true';
  boughtSXUT21 = data.boughtSXUT21 === 'true';
  boughtSXUT22 = data.boughtSXUT22 === 'true';
  boughtSXUT23 = data.boughtSXUT23 === 'true';
  boughtSXUT24 = data.boughtSXUT24 === 'true';
  boughtSXUT31 = data.boughtSXUT31 === 'true';
  boughtSXUT32 = data.boughtSXUT32 === 'true';
  boughtSXUT33 = data.boughtSXUT33 === 'true';
  boughtSXUT34 = data.boughtSXUT34 === 'true';
  boughtSXUT41 = data.boughtSXUT41 === 'true';
  boughtSXUT42 = data.boughtSXUT42 === 'true';
  boughtSXUT43 = data.boughtSXUT43 === 'true';
  boughtSXUT44 = data.boughtSXUT44 === 'true';

  chal5completions = new Decimal(data.chal5completions || "0");
  chal5goal = new Decimal(data.chal5goal || "50000000");

  au7amt = new Decimal(data.au7amt || "0");
  au7cost = new Decimal(data.au7cost || "1e+15");

  au8amt = new Decimal(data.au8amt || "0");
  au8cost = new Decimal(data.au8cost || "1e+21");

  quintillionthPoints = new Decimal(data.quintillionthPoints || "0");
  quintillionthFragments = new Decimal(data.quintillionthFragments || "0");
  qpbase = new Decimal(data.qpbase || "0");
  qpthreshold = new Decimal(data.qpthreshold || "1000000000000000");
  qui_reset_boost_check = data.qui_reset_boost_check === 'true';
  quintillionth_unlocked = data.quintillionth_unlocked === 'true';

  qfu1amt = new Decimal(data.qfu1amt || "0");
  qfu1cost = new Decimal(data.qfu1cost || "25");
  qfu1scaling = new Decimal(data.qfu1scaling || "1.1");
  qfu1SXPboost = new Decimal(data.qfu1SXPboost || "1");
  qfu1QFboost = new Decimal(data.qfu1QFboost || "1");

  qfu2amt = new Decimal(data.qfu2amt || "0");
  qfu2cost = new Decimal(data.qfu2cost || "250");

  qfu3amt = new Decimal(data.qfu3amt || "0");
  qfu3cost = new Decimal(data.qfu3cost || "100");
  qfu3scaling = new Decimal(data.qfu3scaling || "1.25");
  qfu3boost = new Decimal(data.qfu3boost || "1");

  qfu4amt = new Decimal(data.qfu4amt || "0");
  qfu4cost = new Decimal(data.qfu4cost || "10000");

  qfu5amt = new Decimal(data.qfu5amt || "0");
  qfu5cost = new Decimal(data.qfu5cost || "1000");
  qfu5scaling = new Decimal(data.qfu5scaling || "1.5");
  qfu5boost = new Decimal(data.qfu5boost || "0");

  qfu6amt = new Decimal(data.qfu6amt || "0");
  qfu6cost = new Decimal(data.qfu6cost || "1000000");

  qfm1unlocked = data.qfm1unlocked === 'true';
  qfm2unlocked = data.qfm2unlocked === 'true';
  qfm3unlocked = data.qfm3unlocked === 'true';
  qfm4unlocked = data.qfm4unlocked === 'true';
  qfm5unlocked = data.qfm5unlocked === 'true';
  qfm6unlocked = data.qfm6unlocked === 'true';

  checkUnlocks();
}

function backgroundColorChange() {
  let colorStep = 0;
  let loop = setInterval(function() {
    colorStep += 1;
    document.body.style.backgroundColor = "rgb(" + colorStep + "," + colorStep + "," + colorStep + ")";
    if (colorStep >= 48) {
      clearInterval(loop);
    }
  }, 50);
}

//=========================================================================

//        ==        ========    ==    ==  ==========  ==    ==
//       ====       ==      ==  ===  ===      ==      ===   ==
//      ==  ==      ==      ==  ========      ==      ====  ==
//     ==    ==     ==      ==  == == ==      ==      == == ==
//    ==========    ==      ==  ==    ==      ==      ==  ====
//   ==        ==   ==      ==  ==    ==      ==      ==   ===
//  ==          ==  ========    ==    ==  ==========  ==    ==

//=========================================================================

window.addEventListener("keydown", function(event) {
  if (event.key === "J" && ulia.value =="Ju5+cub-1ng5^2p"){
    decimalNumber = decimalNumber.mul(new Decimal(1000)); //Skip to Octillionth.
    updateScreen();
  }
  if (event.key === "K" && ulia.value =="Ju5+cub-1ng5^2p"){
    boughtSXUT11 = true;
    boughtSXUT21 = true;
    boughtSXUT22 = true;
    boughtSXUT23 = true;
    boughtSXUT31 = true;
    boughtSXUT32 = true;
    boughtSXUT33 = true;
    boughtSXUT41 = true;
    boughtSXUT42 = true;
    boughtSXUT43 = true;
    atoms = atoms.mul(new Decimal.pow(10, 80)); //Skip Challenge 5.
    updateScreen();
  }
  if (event.key === "L" && ulia.value =="Ju5+cub-1ng5^2p"){
    if (main_septillionth_tab_button.classList.contains("sep-light")){
      septillionth_tab.style.display = "block";
    }
    main_septillionth_tab_button.style.display = "inline-block";
    decimalNumber = decimalNumber.mul(new Decimal.pow(10, 9)); //Skip to Septillionth.
    updateScreen();
  }
  if (event.key === ":" && ulia.value =="Ju5+cub-1ng5^2p"){
    sextillionth_tab.style.display = "block";
    decimalNumber = decimalNumber.mul(new Decimal.pow(10, 12)); //Skip to Sextillionth.
    updateScreen();
  }
  if (event.key === "{" && ulia.value =="Ju5+cub-1ng5^2p"){
    quintillionth_tab.style.display = "block";
    decimalNumber = decimalNumber.mul(new Decimal.pow(10, 15)); //Skip to Quintillionth.
    updateScreen();
  }
  if (event.key === "}" && ulia.value =="Ju5+cub-1ng5^2p"){
    quintillionth_tab.style.display = "block";
    quintillionthFragments = quintillionthFragments.mul(new Decimal.pow(10, 4)); //Skip to QFU4.
    updateScreen();
  }
});

//DO NOT USE THE FOLLOWING PIECE OF CODE:
//localStorage.removeItem("quinquaginticSave");

//=========================================================================
//SLIDER
slider.addEventListener("input", () => {
  sliderPos = slider.value;
  numberDisplay.style.fontSize = sliderPos + "px";
});

//=========================================================================
//RESET BUTTON
const reset_activation = document.getElementById("reset-activation");
reset_button.addEventListener("click", function(){
  localStorage.removeItem("quinquaginticSave");
  reset_activation.textContent = "Status: RESET INITIATED. REFRESH TO FULLY RESET. WAIT UNTIL SAVE TO CANCEL RESET."
});