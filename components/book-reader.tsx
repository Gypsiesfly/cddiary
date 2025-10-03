"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { toast, Toaster } from "sonner"

interface BookReaderProps {
  onBackToHome: () => void
}

const pages = [
  {
    title: "Just so you know",
    content: `Writing this book, this diary, I keep asking myself, why am I writing this?why am I writing a book about the NYSC camp, I figured out the answer. It's because of her.

This book is about her, Sophie. It's been like two months since camp finished but I still think of her, is it love? Is it infatuation? I don't know.

All I know is I think about her sometimes even now that she hasn't picked my calls or returned my texts.

I once told her our relationship is a breakfast club situation, she'd reply with, "don't say that, we'd still talk."

It's like I know the future lols

So yeah, as pathetic as it seems , this book is about a girl, a lady, that brightened my world in camp and maybe would have been nice if she brightened my world after, but it is what it is.

My hands are shaking as I type this but yeah, College diary (a breakfast club situation) is about her and I hope she's doing okay.

written by ~ IKAN`,
  },
  {
    chapter: "Chapter 1",
    title: '"Happy Valentines day sir"',
    content: `My message to my father on February 14 is, "Happy Valentines day" was still unread on Whatsapp but it was beginning to have that typing text, meaning my father was reading it and replying.

I had sent him a text stating like Items I needed for my NYSC camp because I figured out my name (and come out the day before), my name wasn't supposed to come out and certainly not for Imo state.

See here are the rules and how these NYSC postings work, they send People from the north to the south, people from the south to the north, people from the east to the west and people from the west to the east. But right there on my allocation letter it boldly said Imo state. That means they moved me from portharcourt which was a south, to Imo state which still was a south, ain't no way Son, ain't no way.

Few weeks ago people had advised me to pay so I'd arrange the state I wanted, and I wanted to go to Lagos, I wanted to meet music people and maybe someone that would push my music career further but I didn't want to pay for it, my best friend's mother had paid for him but we (my mother and I) didn't leave it for God to decide where I go and right here, right here on my allocation letter it boldly said Imo state. That means they moved me from portharcourt which was a south, to Imo state which still was a south, ain't no way Son, ain't no way.

Few weeks ago people had advised me to pay so I'd arrange the state I wanted, and I wanted to go to Lagos, I wanted to meet music people and maybe someone that would push my music career further but I didn't want to pay for it, my best friend's mother said she had a person but we later found out the person had retired so I told her not to worry, that I'd leave it for God to decide where I go and right here, its saying Imo state lol, isn't God good?

My father replies with "Use an excel sheet and give me details" and I'm shocked, he needs an excel sheet to send me money for NYSC?? damn. Damn, damn, damn.

We spent an hour going through the list and deleting things

"Items needed for NYSC camp and other expenses"
1. White t-shirts #6000
2. White shorts #4000
3. Rubber canvas #3500
4. White socks 3 pairs #2000
5. Medical fitness certificate #3500
6. Photocopies #1500
7. Passport #1000
8. White Sweater #2500
9. Provision and toiletries #2500
10. Contingency #3000
11. NYSC registration #6000
Total - #29,500

"I'm yet to know the cost to travel to imo state, I'll inform you as soon as possible" I typed

He sent me the money for it after removing a few things from the list, he's really careful with money, but sometimes I think he's too careful.

He sent me the money and I began to make plans on how to purchase the items, all is well.`,
  },
  {
    chapter: "Day 1",
    title: '"Hey, I have arrived"',
    content: `It was finally the 16th of February and this is the day I am to report to the NYSC camp.

Lying Close to me was one of the most beautiful women in my life, Dee, I had invited Dee over to spend the night the day before for a few reasons
1. I was going to miss her
2. I liked her
3. I wanted to have sex one last time so I wouldn't want to sleep with anyone in camp.
4. Having her by me made me feel calm, like everything was okay

She had a class this morning so I had to cook up something for her and bolt her to school.

In no time she was in the bolt and I had to start packing my box, yes, I had not packed at all.
I had been unable to get my white shorts but I was ready. If this was any other family maybe I would've left home already and started my journey, but this is my family, and my parents were returning back home from their travels today.

If my dad sees anything wrong with the house when he returns, he was going to call me back from wherever I am to come home and fix it doesn't matter if I'm in mars, he'll tell me to start coming home, wouldn't tell you the reason why and you'd be journeying home in confusion trying to guess what you did wrong.

I went and got 3 white shirts for the NYSC white and it was way more expensive than what I had written but, I didn't want to dwell on that.

Spent hours printing documents, had to make 6 copies of each to avoid stories.

Just as I was about to leave the cybercafe, I received a message from my mother asking if I've left yet that THEY ARE CLOSE, close? Close??? ain't no way my parents arrive in Portharcourt and see me at home, that means I won't be travelling anymore.

As soon as I got that message I packed my documents into my bag and started running home to quickly travel, while running I replied with "I'm on my way out" ran home, arranged my box and my bag, crosschecked through my to-do's and the list of things I was to carry to travel and as they were complete, boarded a cab and was on my way to the bus park.

Luckily the bus was almost full and I was the last passenger, I joined up and we were on our way.

The ride was not anything special, I had no idea where I was going, what was going to happen or whatever, but I was excited, excited for something new, a new experience, new friends maybe, I'm not a really friendly person but I would like to make some friends, I also wanted to have a smooth NYSC, no too much drama, just quietly go in and come out.

In like an hour and thirty minutes we had arrived, I passed through a nice road, with faces of people painted on the walls, the roads seemed busy but not busy at the same time, I had no idea where I was going to so I had to ask the driver.

He said he was going to drop me at the park with his colleague so he would take me straight to the NYSC place, after a few minutes he dropped me with this fat looking man who started welcoming me to the state, seems like I was the first one on the bus and had to wait for it to be full, I was super scared but excited while in the bus, I saw a lady in full NYSC uniform and had to ask her if she knew the location of the camp, she seemed offended I asked and I apologized

"I'm headed to camp, so I don't really know where I'm going" I added

"i relocated here, so I don't really know much too" she responded

"but just remember, try to relax a little and be on the lookout, if you're stranded, find a police station and spend the night, its safer" she added

I nodded at her as the bus went into full throttle.

The ride took about 30 minutes and I was dropped at a road where I had to take a keke, a keke man quickly runs to carry my load saying "one chance" and it was already dark, so I was scared so I quickly joined him in the front seat after confirming that my load was safely in the back.

The back seat was filled with 3 old women, they were all really nice, I also have noticed, Imo state elders are nice people, that's crazy.

As the journey continued I couldn't fail to notice the foul smell coming from the driver, It was so strong that even the wind from the keke storming on couldn't quench it. The roads on this journey was like climbing a mountain and going down from it, and this nigga was speeding through it all, I was scared he was going to get us in an accident.

We finally arrived at the destination that would take me to the Imo state NYSC camp, I boarded a bike(okada) and was about to leave when kids about my younger sisters age ran towards the bike holding buckets and bailers, saying I was going to need them at camp, and I knew I needed them so I bought them and continued the journey, it took another 10 minutes and finally.

I first laid eyes on this long fence with forests surrounding it, the smell of green grass mixed with dust and we approached the gates, I paid off the bike man and rolled my suitcase in one hand, my bucket in the other, my bag on my back. Reminded me of my boarding school days, the feeling of nostalgia, don't worry, i'll write about them in College diary #Blue #Red and #Green respectfully.

As I passed through the gates it was already 8pm, by my left a few officers were seated

"ace, come here" my heart skipped

"open your box" he said

I dropped my suitcase on the chair and proceeded to find my keys to open the locks, I was shaking because, army and military people have done very bad things to youths outside and they have a reputation of hostility and I wasn't ready to let my first night be such.

Luckily, he was a nice guy, asked if I had drugs and I told him all I had was my malaria drugs, he took a look at them and let me proceed to a particular line where I noticed they were giving out papers

"Call up letter and SchOOL ID please?" an elderly man who frowned like he wasn't getting paid for his job asked, it wasn't my turn yet but I was scared, because to collect your certificate in PIROT(my University), you had to submit your school ID, all I had was a shabby white and black printout of it, while I was panicking I heard

"Oga, where is your documents" I froze, it was my turn! This man shoved me to the right

"go and sort your documents and come back"

I brought out my shabby printed school ID and my call up letter and proceeded to get back into the line, and right there, a miracle happened, the man didn't even look at my papers, just gave me the entry pass and let me in.

In no time I had gotten a room (room 3) I proceeded and got a nice bed and as I'm writing this, I'm about to go to bed, I was one of the first people to get in so…yeah, goodnight. Wait! I've got to text my dad

"Hey, I have arrived"`,
  },
  {
    chapter: "Day 2",
    title: '"Hey 1229"',
    content: `So I picked a bed opposite the entrance door in case something was happening, it'd happen to the person at the entrance first and I'd notice it, roll from my top bunk bed unto the floor then under my bed to avoid it (courtesy of my boarding school experience).

I checked my watch and it was 4:30am and I picked up my bucket and soap and went to have a bath.

It was early so not a lot of people had come outside. The bathroom doors were made of zinc and right inside was a pit latrine toilet, to my surprise it actually looked neat.

As soon as I was done with my bath and started heading inside a heard a trumpet blaring in the hostel, I knew something was up and started running to my bed to quickly dress up.

I was told by my bed mate not to wear my white and white if I had not registered or done clearance, so I put on my normal clothes and started heading to the parade ground.

Soldiers could be seen everywhere saying, "double up", "if you are still here you are wrong"

I found this fascinating because it reminded me of boarding school.

The parade ground was a large space of land with brown sand, behind it were a few buildings and a market called Mami market where I had bought my white crocs from the night before( I didn't talk about that, my bad).

People formed lines on the parade ground and I joined the line closest to me, A man came out and thanked us for coming to Imo camp, then proceeded to call someone to read a paper for us, which was called "Meditations" One of those aspire to inspire write ups.

I took my time to survey the people around me, as the day was getting brighter. After the morning meditation, was the Praise and worship, the Muslims were also asked to go to the mosque for their own prayers.

"its time for your morning exercise" said a man-o-war official.

Now by now I had understood the hierarchy of the officials on the Camp
1. The camp director
2. The camp commandant
3. The Soldiers
4. The NYSC official
5. Man-o-war

If you asked me the work of the man-o-war, I truly can not explain but I know they were friendly and they took our morning Exercises.

They proceeded to divide the camp to two parts, the ones that had done clearance and taken their white and white official uniforms and the ones that had not.

We were told that if we had not done clearance we should not put on white and white as a lot of us had bought white and white from home.

The one's on white and white were taken towards the building on the parade round to start marching,

Those of us on Normal clothes were told to do our exercises in front of the Official pavilion where officers and officials watched the parade directly from the front.

While I was thinking of what to do, a dark skinned girl with really white teeth approached me, smiling like those people from Jehovah's witness church when they are about to preach to you, I stood there confused but still kept my mean look, and yeah my mean look is really mean, it should tell you not to come close to me but this lady was right in front of me smiling

"Hey" she said

".….Hey…" I replied wondering what she wanted

"Can I keep my files in your bag" she replied

I fell into confusion

Some random girl just asked me to keep her file in my bag, a stranger, someone she doesn't even know, wtf.

"are you sure? You don't even know me"

She changed her stance to the cute anime girl stance

"then let me have your number" she said

"so I can easily reach you after the morning exercise to return my files" she added

"sure…" I said

So she put her and another girl that came with her's files in my bag and we all went for the exercise, we were told to drop our bags under the pavilion.

The exercises began, we were told to stand in rows while the man-o-war that showed us the exercises stood in front of us, there was a very loud girl at my left that kept shouting a lot and there was another girl in all white standing by my right, she carried a wide smile and did the exercises with excitement, the kind of excitement you'd see from a rich mans child that finally finds a way to do things poor people's children do but most importantly, our legs kept bumping into each other

"my bad" id say

"sorry" she'd reply with a bright and excited face

She weirded me out but I just really wanted to be done with the exercises

After about 30 minutes we were done, I found the girl that gave me her files and turns out her name is Fave. She was weird, behaved like those folks who found happiness in every situation, and as a pessimist myself I don't like those kinds of people.

Breakfast was bread and egg but I only took the bread and went to save it in my box.

Now there are a few things I want to tell you about me.
1. I am a millionaire: How that happened: I won some competition and won quite a lot of money, I can't say more than that.
2. I can't get food poisoned because id then have to use the pit latrine toilet more than I'm supposed to, then probably leave with some bacteria and get sick
3. Yes and I almost forgot, sometimes there's no water, imagine wanting to take a shit and there's no water, like bruh, I just want to quietly go through this camp and go home.

I was told to register my name in the "Book of life" a supposedly large book where the names of Corpers are, so if your name is not there, it means you were never a corper.

The registration process was really long
1. Put your name in the Book of life
2. Register for your Meal card (a card used for collecting food)
3. Register your banking details for NYSC allowance
4. Know your platoon
5. Register in your platoon
6. Collect your Uniform from your platoon
7. Collect your platoon/NYSC ID
8. YOU ARE OFFICIALLY A CORPER, CONGRATS LOL

By the time I was done, it was pretty late, my corp shoes were smaller so I just exchanged them with a girl with bigger shoes.

And yes my platoon officer was a woman, she gave this vibe of I-don't-really-care-much-but-I-like-competing-so-lets-fucking-do-this.

She was a light skinned lady that looked like she could scream at me any second now, but she also looked very strong, not in the muscles but in her head, you'd know she knew how to pull strings and how to make things happen for her, she was always chewing something either its food or a toothpick.

I was about to leave when I saw the girl from the exercise this morning, remember? The one that looked like she was just happy to be doing what normal people do, I just decided to go say hi

"hey" I said after getting within one feet away from her, she turned

"you" she replied with her wide smile on her face

"you" I responded

"you seem to like to kick people" I said with a smile

"you're the one who wouldn't stop kicking me" she said while trying to hold all the NYSC clothes in her hands

"I'm Ikan" I said with my hands outstretched for a handshake

"I'm Sophie" she said (smiling) as she shook my hand

She had her NYSC ID on her neck and it read "1229"

And here's a small tip about the ID'S and platoons

Platoons are from number 1-10, that's about 100 to 150 people per platoon, the last number on your ID signifies your platoon, I had 1066 and bruh, I kid you not, my nickname in secondary school was 626 and 6 is my lucky number so, I keep thinking someone above is fucking with me.

We talked for a bit and something about her was different, I was coming from a grim dark place and these few minutes we spoke felt like she shined a light into a dark large hall in the depths of my soul. She smiled a lot and for a person like me that didn't smile it was different.

I proceeded to leave and had already walked a few steps away from her when it hit me, there are about a million people in this camp, the probability of me seeing her again was really small, and I liked how bright she was and how every experience she was having was some fun thing, should I turn back? Get her number?

The funny thing is, I know when someone is going to be so important to me, I know it in my guts and something told me, if I took her number she'd be very important to me in this camp and it always ends in tears.

I told myself "fuck it" I just came from home where I had to separate my parents from killing each other, where I had to wake up early and run outside if I heard their yells so at least they wouldn't get violent in front of me, where I had to lock my mom in the room with me and convince my dad to drop the bottle and go to his room and dress up for the job he has. My life has been so dark so far and this woman's smiles make me feel just a little better and I'd do anything to just be a little happier.

So I went back, we exchanged numbers. But even after just leaving her presence, my body was itching me to text her, what will she think of me, what if she gets irritated that I just took her number and now I'm trying to text her just minutes after, I SAID FUCK IT, I'm going to text her and if the vibe is wrong, I wont do it again

And my first whatsapp text was
"Hey, 1229"

The double check marks appeared

….…..(she was about to reply)

"Hey 1066" she replied

"the temptation to call you by your number" I replied

"you already did" she texts back

"i like it tho" she adds

"sounds like we're in a sci fi movie" she adds again

"What are you doing by 3:30" I texted

"i'll be going to the parade ground, you?" she replies

"same, I'll be there too"

"Hopefully your legs work well this time" she adds

"you test me" I replied

"Lets meet up if you want" I added

"sure" she replied.`,
  },


{
  chapter: "Day 3",
  title: "Platoon leader",
  content: `Now here’s the thing, after collecting your NYSC
uniform and registering, you are officially a corper so
you have to go to the parade….but, you can also not
go by hiding your NYSC ID and pretending that
you’ve not done registration, the parade is a practice
for the swearing in of Corpers, I wouldn’t have gone
but, something told me to go and most importantly, I
was going to see Sophie, so I decided to go.

And please, I see Sophie as a friend that makes me
happy, don’t misunderstand it.

So we met up in the parade ground and talked for a
while and took photo’s together before we were told
to form up according to platoons, she was in platoon
9 and I was in platoon 6 so we had to go our separate
ways

So the platoon gathering had begun, see here’s how it
works, you shout the number of your platoon while
walking around till you meet another person that’s
shouting the same platoon number and then both of
you meet another set of folks shouting the platoonnumber and then you form up; that’s how you gather
your platoon in a crowd of 1 million people.

My platoon had a lot of interesting people, we were a
lot, id say like 150 people but there were a few people
of note
1. A really tall huge dude that looked scary
2. A really huge dude that had a potbelly and looked
scary still
3. A light skinned tall guy that just smiled a lot
4. A big woman that had a lot of energy and talked
too much
5. And a really slender tall girl that stood out, I don’t
know if it was because of her hair, how they fell from
her head down to her waist or how they just fit her
entire frame, in summary, she looked good, even from
afar

These people stood out to me.

I forgot to add, before the gathering, while I was with
Sophie, we practised marching with the officials, the
people who could stand for long periods of time would
stay in the front, but those who couldn’t had to stay
in the back,, I and Sophie stayed in the back.

There was this really tall army man, that kept saying
“if you play with me, I will murder you!”
“i will eat your heart!” stuff like that, it was really
funny to me.So back to the crowd, while we were formed up the
assistant head of the NYSC for Imo state/ assistant
state coordinator addressed us and told us that it
was time to select officials, each platoon was to have
one army official, one man-o-war and a platoon
officer (I’ve already met her, remember the lady from
registration) and all platoon officers should begin
selection.

“form a circle” said my platoon officer
she was a short woman but like I said , you could
sense she could pull strings

I ended up at the front line of the circle and the
army lady started the election

The posts available were
1. Director of sports
2. Director of debate
3. Director of socials
4. Director of Kitchen
5. Assistant Platoon Leader
6. Platoon leader

I’ll explain all their posts soon enough when I have
time, I’m a little sleepy rn, so I can’t write for long
and its 10pm and these niggas are calling for lights
out so I’ll make this as short as possible.

The Director of sports went to a bearded guy that
looked like he cared about nothing in the world.
Debate director went to some small guy that had 1 st
class, my platoon officer legit asked all thecontestants for Director of debate their CGPA and
turns out only the short guy had a 1 st class so he got
it.
Director of socials went to (the big woman that had
energy)
Director of kitchen went to some dark-skinned lady
And now…Platoon leader

The platoon leader post election was more serious
than the rest, the army lady asked all the
contestants to step out and remember, I was in the
front-line so she asked
“are you contesting?”
“no” I replied and proceeded to push back into the
line

She looked around and when she saw it was only
women that came to contest for platoon leader she
made one disgusted look at all the men
“so you are telling me there is no male that wants to
contest” she said while looking and searching for fit
men with her eyes

The big dudes at the back started hiding and when
she pointed any guy he’d either duck or shake his
head to say no

While all this was going on, I was just thinking.
I know I came to camp to heal, to just pass time and
go back home refreshed… but that’s not who I want
to be, back in primary school I was a tyrant, in
secondary school a terrorist, in college I was a nerd,only books and anime, didn't have any real friends
till my 2 nd or 3 rd year BUT THEN IT HIT ME.
NO ONE HERE KNOWS ME, I looked around and
nobody here had ever seen my face before, I had
never seen any of these niggas before, for all they
know I can be some prophet if I pretend to be one, I
can be some cool guy if I pretend to be one and I can
be anything, before I could even arrange my thoughts,
MY LEGS MOVED, MOVED STRAIGHT INTO THE INNER
CIRCLE, WHERE THE PLATOON LEADER VOTES WERE
HAPPENING.

The army woman looked at me and said
“i thought you say you no dey contest” hissed and
continued
“una dey confused eh” she added

So it was me VS 5 girls

The voting started by signaling of hands
If the army lady raises your hand up and asks
“do you want to vote for “So so and so”
The amount of hands raised counts as the votes.

The truth is, now that I’m settled, when I think about
why I went out, it was just to make the competition
more competitive, to sweeten the pot, try my luck
maybe. but lo and behold when this army woman
raised my hands up
“If you know you want--”

She turns looks at me and asks “wetin be your name
again”
“Isaac” I replied

“if you know you want to vote Isaaczacky for platoon
leader” why she mispronounced my name, idk
“raise your hand” she added

Bruh, all hands in the circle were raised!
I kept a straight face but bruh, no way.

I was officially a platoon leader
The platoon officer took our names and phone
numbers
The I ”I will murder you” soldier came and asked for
the platoon leader and the crowd pointed at me,
when he saw me he said
“Lekpa” he called the big guy that I told said stood
out to me
And walked away.

I was scared that maybe that big dude would be
forced to be platoon leader, because the guy
definitely did not want the position.

After a while the assistant state coordinator, I’m
going to call him ASC from now on. told everyone to
Form up and after we did he started calling names

And I heard my name and I had to walk out to the
front of the pavilion and faced the crowd, I was a
little scared about why my name was called until I
realized that there were 9 other guys with me and my
guess…THEY WERE ALL PLATOON LEADERS LIKE ME.

The man gave us blue arm bands apparently there are
3 types of arm bands
1. Blue arm bands for Platoon Leaders
2. Yellow arm bands for Police (I’ll talk about these
dudes real soon)
3. Green arm bands for…I don’t even know who those
niggas are, I’ll find out tomorrow

So we were made to line up Platoon 1 leader to
Platoon 10.

The man took pictures while handing out the blue
bands but as soon as he got to me, I zoned out
because he said a single word
“congratulations”

This isn’t a word I’ve heard a lot, I may have heard it
a couple of times with concept of some intent:
Maybe from my father when I finished ss3
Or him calling me “graduate” after my last college
exams but its not a word I’m used to

I haven’t been told this a lot, the last person that did
was the girl I had a situation-ship with, she bought
wine when I had my first 1k streams on a song and I
was shocked because a woman had never done that
for me before and before that it was the head of the
competition I won, Farza telling me “congratulations
Ikannnnn” on stream.

But this one had me speechless, I didn’t know what to
say, I’m not used to congratulations.

“you don’t know how to say thank you??” the ASC
said
“Thank you sir” I said while bowing as a sign of both
respect and sorritude…is this even a word? Sorritude?
Just me apologizing goddammit.

All the “camp leaders” as they called us stood out
there and took a group photo afterwards we were sent
back.

Sophie saw me after the parade with the blue platoon
leader band and called me “Platoon leader” she was
cute when she smiled and it made me smile back.

“I’m hungry” she said
“Lets got to Mami market” she added
“do you want to come?”
“Yeah” I said

And we walked side by side talking about our
respective platoons.

But in my mind, I knew the games were starting, the
platoon was my army and I’d have to prepare them
for what was coming.

My platoon officer told me that they’d be
competitions, some with real prize money involved,
real consequences for failure and would need real
strategies.

“Lets get it” I soliloquized under my breath
“what did you say?” said Sophie as she turned
towards me, her eyes sparkling and on her face a
wide smile

“nothing” I replied, because even if Sophie is my
friend, I’m still going to be competing against her
platoon so I can’t talk about my plans to her (she’s in
platoon 9, I’m the leader of platoon 6)

We kept talking as we walked deeper into the market
in search of what to eat.`
}
]
export function BookReader({ onBackToHome }: BookReaderProps) {
  const [currentPage, setCurrentPage] = useState(0)

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const page = pages[currentPage]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header with back button */}
      <div className="p-4 flex items-center gap-4">
        <Button onClick={onBackToHome} variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <span className="text-white/60 text-sm font-mono">
          Page {currentPage + 1} of {pages.length}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="max-w-md mx-auto space-y-6">
          {page.chapter && (
            <p className="text-[#9acd32] text-xl text-center font-mono" style={{ fontFamily: 'Consola, monospace' }}>
              {page.chapter}
            </p>
          )}

          <h1 
            className="text-white text-4xl text-center leading-tight" 
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {page.title}
          </h1>

          <div 
            className="text-white text-base leading-relaxed whitespace-pre-line"
            style={{ fontFamily: '"Biro Script", cursive' }}
          >
            {page.content}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent">
        <div className="max-w-md mx-auto flex gap-4">
          <Button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="flex-1 bg-white hover:bg-gray-100 text-black py-6 rounded-xl font-mono disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Consola, monospace' }}
          >
            Previous chapter
          </Button>
          <Button
            onClick={() => {
              if (currentPage < pages.length - 1) {
                goToNextPage();
              } else {
                toast("There is no next chapter. Maybe this nigga will upload later.", {
                  duration: 3000,
                  style: {
                    background: '#1a1a1a',
                    color: '#fff',
                    border: '1px solid #333',
                    borderRadius: '0.5rem',
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                  },
                });
              }
            }}
            className="flex-1 bg-white hover:bg-gray-100 text-black py-6 rounded-xl font-mono disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              fontFamily: 'Consola, monospace',
              opacity: currentPage === pages.length - 1 ? 0.5 : 1,
              cursor: currentPage === pages.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Next chapter
          </Button>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}
