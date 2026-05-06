// Lumen — philosopher data (storytelling rewrite)
var philosophers = [
  {
    id: 'laozi',
    name: 'Laozi',
    title: 'The Old Master Who Walked Away',
    era: 'Ancient East',
    born: -571,
    died: -471,
    birthPlace: 'State of Chu, ancient China',
    emoji: '🌊',
    color: '#0891b2',
    portrait: 'images/laozi.jpg',
    keyWorks: ['Tao Te Ching (The Book of the Way)'],
    hook: `A grumpy old librarian quits his job, climbs onto a water buffalo, and rides toward the mountains — but a border guard refuses to let him pass until he writes down everything he knows about life.`,
    kid: `Picture water flowing down a hill. It never argues with rocks — it just slips around them and keeps going. Laozi said the smartest way to live is exactly like that: stop pushing so hard, and the world starts helping you instead of fighting you.`,
    adult: `Laozi noticed that the more we strain, the more life seems to push back. His big idea, the Tao, isn't a god or a rulebook — it's the natural grain of how things actually work. Stop sanding against the wood; let the grain show you the cut. He called this wu wei, "effortless action," and it became the heartbeat of Daoism.`,
    origin: [
      `Picture China around 500 BCE: kingdoms at war, generals scheming, scholars writing fat books arguing about who deserved to rule. In the middle of all that noise sat Laozi, the keeper of royal records — basically a librarian for the Zhou dynasty. Day after day he watched the smartest people in the country tie themselves in knots trying to fix things, and only make them worse.`,
      `One day he had enough. He packed a bag, climbed onto a water buffalo, and headed west, planning to vanish into the mountains. The story goes that a border guard recognized him at the last pass and begged, "Master, you can't leave without writing down what you know." So Laozi sat down, wrote about five thousand short, strange, beautiful lines, handed them over, and rode off into legend.`,
      `That little book became the Tao Te Ching — "The Book of the Way and Its Power." Today, only the Bible has been translated into more languages. Nobody knows for sure that Laozi was even one person; "Laozi" just means "Old Master." But the voice in those poems is unmistakable: someone who has watched humans try too hard for far too long, and decided to whisper a different idea — less.`
    ],
    coreIdeas: [
      `The Tao is "the Way," but not a path you walk on. It's more like the way a river decides where to go. You don't argue with a river — you learn its shape. Laozi believed every person, every plant, every empire has a natural shape, and the best lives are lived by feeling that shape and following it instead of bulldozing through it.`,
      `His most famous idea is wu wei, often translated "non-action," which sounds lazy but isn't. Wu wei means doing things without straining — the way a great chef slices vegetables along the grain instead of hacking through them, the way a surfer rides a wave instead of fighting it. Effort is fine. Forcing is the problem.`,
      `Laozi loved opposites. Soft beats hard, he said: water carves canyons through stone. Empty beats full: a cup is useful only because of the empty space inside. Bending beats breaking: the willow survives the storm because it bows. He distrusted big rules, too — the more laws you write, he warned, the more criminals you create.`
    ],
    teachings: [
      `The journey of a thousand miles begins with a single step.`,
      `When I let go of what I am, I become what I might be.`,
      `Nature does not hurry, yet everything is accomplished.`,
      `He who knows others is wise; he who knows himself is enlightened.`,
      `Water is soft and yielding, yet it wears away stone.`
    ],
    reaction: [
      `At first, hardly anyone noticed. China was crowded with louder schools — Confucians arguing about manners, Legalists demanding harsh laws, Mohists preaching universal love. The Daoists were the weird quiet ones who said, "Maybe stop arguing." For a few centuries they were a small underground crowd of poets, hermits, and dropouts.`,
      `Then everything changed. After the Qin dynasty's brutal experiment in total control collapsed, exhausted Han emperors turned to Daoism almost as medicine. They actually used wu wei as state policy — light taxes, light laws, leave farmers alone — and the country bloomed. Suddenly the strange old book was being copied in palaces.`,
      `Daoism then split into two streams. Philosophers kept reading the Tao Te Ching as poetry about how to live well. Ordinary people turned Laozi into a god, built temples, brewed elixirs of immortality, and tried to literally fly. Both versions still exist: the quiet philosophy in your meditation app, and the colorful religion in temples across Asia.`
    ],
    modern: [
      `You've already met Laozi without knowing it. Every "go with the flow," every self-help book about "letting go," every Pixar moment where the hero finally stops trying so hard — that's the Tao Te Ching whispering. Tai chi, qigong, acupuncture, and feng shui all grow from Daoist soil.`,
      `Programmers love him. There's a famous saying in software — "the path of least resistance" — that's almost a direct translation of his ideas. Designers talk about getting out of the user's way. Athletes call it "flow." Therapists call it "acceptance." Different vocabulary, same Old Master.`,
      `Maybe his most timely gift is permission. In a world that screams "more, faster, harder," Laozi hands you a permission slip: you are allowed to slow down. You are allowed to not fix everything today. You are allowed to be like water — soft, patient, and, in the long run, unstoppable.`
    ]
  },
  {
    id: 'buddha',
    name: 'Siddhartha Gautama (the Buddha)',
    title: 'The Awakened One',
    era: 'Ancient East',
    born: -563,
    died: -483,
    birthPlace: 'Lumbini (modern Nepal)',
    emoji: '🧘',
    color: '#f59e0b',
    portrait: 'images/buddha.jpg',
    keyWorks: ['Dhammapada', 'Sutta Pitaka', 'Four Noble Truths', 'Eightfold Path'],
    hook: `A pampered prince locked inside a palace of pleasures sneaks out one night, sees an old man, a sick man, and a corpse — and decides he will not rest until he understands why we suffer.`,
    kid: `A young prince had everything: gold, gardens, servants, parties every night. But he saw that people grow old, get sick, and die — and no party can stop that. So he left his palace to find out how to be truly happy. After years of searching he sat under a tree until the answer came: stop chasing, stop running, and look at this moment right here.`,
    adult: `The Buddha didn't claim to be a god. He claimed to be awake — that's all the word "Buddha" means. He taught that suffering doesn't come from the world being broken; it comes from the way we cling to things that always change. Money, fame, even love — grab them too hard and they slip through your fingers. Loosen the grip, he said, and life becomes lighter.`,
    origin: [
      `Siddhartha Gautama was born around 2,500 years ago in what's now Nepal, the son of a small kingdom's king. A prophecy said he'd become either a great ruler or a great teacher — and his father was determined to lock in the first one. So he built walls. Beautiful, golden walls. Inside, Siddhartha had every pleasure imaginable; outside, every sign of pain was carefully hidden.`,
      `The plan worked for almost thirty years. Then the curious prince took four chariot rides outside the gates. He saw a stooped old man, a person burning with fever, a corpse on its way to the river, and a wandering monk with a peaceful face. The first three terrified him. The fourth gave him hope.`,
      `That night he kissed his sleeping wife and baby goodbye and walked into the forest. For six years he tried everything: starving himself until his ribs showed, holding his breath until he passed out. None of it worked. Finally, near collapse, he ate some rice pudding offered by a village girl, sat under a fig tree, and refused to get up until he understood. By dawn, he had.`
    ],
    coreIdeas: [
      `The whole teaching fits on a postcard — the Four Noble Truths. First: life contains suffering, not just earthquakes but the smaller ache of never quite feeling satisfied. Second: that ache comes from craving, from clutching at pleasures and dodging pain. Third: there is a way out. Fourth: the way is a daily practice, not a magic spell.`,
      `That practice is the Eightfold Path: see clearly, mean well, speak kindly, act kindly, earn money you can be proud of, keep showing up, pay attention, and train your mind to settle. Eight habits, that's it. The Buddha called this the "middle way" — neither pure pleasure-seeking nor brutal self-denial, but the sane road in between.`,
      `His strangest, deepest idea is anatta — "no-self." Look closely, he said, and you can't actually find a thing called "you" inside your head. There's a stream of thoughts, feelings, and sensations, all flowing and changing. The "self" is a story we tell about that stream, like calling a river by a name even though the water is never the same twice.`
    ],
    teachings: [
      `We are what we think. All that we are arises with our thoughts.`,
      `Holding onto anger is like drinking poison and expecting the other person to die.`,
      `Three things cannot be long hidden: the sun, the moon, and the truth.`,
      `Peace comes from within. Do not seek it without.`,
      `You yourself, as much as anybody, deserve your love and affection.`
    ],
    reaction: [
      `In his lifetime, the Buddha was wildly popular and wildly controversial. Kings invited him for tea, merchants funded his community, villagers crowded to hear him. But India's Brahmin priests were horrified: he taught that anyone could awaken, regardless of caste. Even women. Especially women.`,
      `After his death around age 80, his followers memorized everything he'd said and chanted it for centuries before writing it down. Buddhism then began an extraordinary, gentle conquest. It traveled with merchants along the Silk Road into China, with monks across the sea to Sri Lanka, eventually reaching Japan, Tibet, Vietnam, and Thailand — usually without an army.`,
      `It also split into many flavors. Theravada kept the original teachings tightly. Mahayana opened the door wider. Vajrayana, in Tibet, layered on color, ritual, and wild imagery. By the year 1000, Buddhism had quietly remade the inner life of half of humanity — though, ironically, it had nearly disappeared from India itself.`
    ],
    modern: [
      `That meditation app on your phone? It's selling Buddhism with the religion sanded off. The breathing exercises your therapist suggests, "noticing your thoughts without judgment," the "observe and let pass" — almost all of it traces back to the Buddha. Mindfulness in hospitals and corporations was rebuilt by a scientist named Jon Kabat-Zinn directly from old Buddhist techniques.`,
      `The idea that your mind can be trained the way a body can be trained has quietly transformed psychology. Most modern therapies share Buddhist DNA: notice the thought, don't fuse with it, let it move on. Brain scans of long-time meditators show measurable changes in attention and compassion. The Buddha's claim that anyone can practice their way to a calmer mind is now backed by neuroscience.`,
      `Maybe the deepest gift is the idea that suffering can be understood. You don't have to white-knuckle through life. You don't have to pretend things are fine. You can sit down, look honestly at what's hurting, and slowly learn to hold it differently. That promise — that even you, on this bus, can taste a little of what the Buddha tasted under that fig tree — keeps his teaching alive.`
    ]
  },
  {
    id: 'confucius',
    name: 'Confucius (Kongzi)',
    title: 'The Teacher of Ten Thousand Generations',
    era: 'Ancient East',
    born: -551,
    died: -479,
    birthPlace: 'State of Lu (modern Shandong, China)',
    emoji: '📜',
    color: '#6366f1',
    portrait: 'images/confucius.jpg',
    keyWorks: ['The Analects', 'Five Classics'],
    hook: `A poor boy from a broken family grows up to insist that the way to fix a kingdom is not new laws or sharper armies — but better dinner-table manners.`,
    kid: `Confucius believed big things start small. If you treat your family with kindness, your school will be kinder. If your school is kind, your town will be kind. If your town is kind, the world will be kind. He was the original "small habits change everything" guy — 2,500 years before TikTok.`,
    adult: `Confucius watched leaders try to fix war and chaos with bigger armies and harsher laws. He thought they had it backwards. Civilizations don't crumble because of policy; they crumble because people stop respecting each other. Re-teach manners, ritual, kindness, and study, he said, and the rest takes care of itself. Strangely, history has kept proving him half right.`,
    origin: [
      `Kong Qiu — known to us by the latinized name Confucius — was born poor in 551 BCE in the small Chinese state of Lu. His father died when he was three. His mother raised him in poverty, but she made sure he could read, and the boy was hooked. As a teenager he reportedly worked as a clerk and as a stable manager, all the while devouring old books on history and ritual.`,
      `He grew up in a violent age. China was splintered into warring states, generals were assassinating each other, and the old codes of honor were collapsing. Confucius came to believe the chaos wasn't really political — it was moral. Society had forgotten how to be decent to itself. So he started teaching, first one student, then dozens, eventually thousands.`,
      `He spent decades trying to convince rulers to actually live by the values they preached. Most ignored him. He wandered from kingdom to kingdom, sometimes hungry, sometimes mocked. He died thinking he was a failure. Within a few hundred years, his Analects — short notes his students wrote down after his death — would shape Chinese civilization more than any emperor ever did.`
    ],
    coreIdeas: [
      `Confucius believed in ren — usually translated as "humaneness" or "kindness." It's the gut-level instinct to care about other people: the feeling that makes you tip a stranger or hold the elevator. He thought ren was the foundation of every good society and that we lose it when we stop practicing the small daily kindnesses.`,
      `He also obsessed over li — "ritual" or "proper conduct." This sounds boring, but think of it as social glue. The way you greet your grandmother, the way a teacher addresses a class, the rhythms of a meal: these small ceremonies remind us we belong to something bigger. Skip the rituals, he said, and trust crumbles.`,
      `His most quoted advice is the original Golden Rule, written 500 years before Jesus: do not do to others what you would not want done to yourself. He believed any of us could become a junzi — a noble person — not by birth, but by lifelong study, self-correction, and treating people, especially those weaker than us, with respect.`
    ],
    teachings: [
      `Do not do to others what you would not want done to yourself.`,
      `It does not matter how slowly you go as long as you do not stop.`,
      `When we see persons of worth, we should think of equaling them.`,
      `The man who moves a mountain begins by carrying away small stones.`,
      `Real knowledge is to know the extent of one's ignorance.`
    ],
    reaction: [
      `During his life, Confucius was a respected nobody. Kings would invite him in, listen for a week, and politely send him on his way. But after his death, his students and his students' students kept teaching, copying, and refining the Analects. Slowly, the strange old teacher became a celebrity from beyond the grave.`,
      `Two centuries later, the Han dynasty made Confucianism the official state philosophy, and his ideas became the spine of Chinese government for the next 2,000 years. To get a job in the imperial bureaucracy, you had to pass exams on Confucian texts — meaning generations of officials, from village clerks to prime ministers, were all reading the same dead teacher.`,
      `He's also faced fierce backlash. The 20th century was hard on him: Chinese reformers blamed Confucian respect for elders for trapping the country in tradition, and Mao's Cultural Revolution actively persecuted his memory. Today the pendulum has swung back; statues are being rebuilt, and the Chinese government openly invokes him again as a symbol of order and harmony.`
    ],
    modern: [
      `If you've ever lived in or worked with East Asia — Korean, Japanese, Vietnamese, Chinese cultures — you've felt Confucius. The deep emphasis on family, respect for teachers, fierce loyalty to study, the bow as a greeting, the unspoken rules about who speaks first at dinner: all of it is downstream from him.`,
      `His ideas shape how huge corporations operate. Companies in Tokyo, Seoul, and Singapore still organize themselves around Confucian rhythms of hierarchy, mentorship, and lifelong learning. When Western business writers gush about "servant leadership" and "treating employees like family," they're often quoting Confucius without knowing it.`,
      `In a global culture obsessed with individualism, Confucius keeps offering an unfashionable correction: you are not just yourself. You are also a son, a friend, a citizen, a neighbor — and your character is forged in those bonds. Whenever someone tells you that habits matter, that small kindnesses ripple, or that being a good family member is itself a moral act, the Old Teacher is whispering through them.`
    ]
  },
  {
    id: 'heraclitus',
    name: 'Heraclitus',
    title: 'The Weeping Philosopher of Fire',
    era: 'Classical Greece',
    born: -535,
    died: -475,
    birthPlace: 'Ephesus, Ionia (modern Turkey)',
    emoji: '🔥',
    color: '#ea580c',
    portrait: 'images/heraclitus.jpg',
    keyWorks: ['On Nature (only fragments survive)'],
    hook: `A grumpy nobleman gives up his crown, walks into the mountains to live off plants, and leaves behind a single book of riddles so confusing that even Aristotle complained he couldn't understand it.`,
    kid: `Heraclitus had a wild idea: nothing ever really stays the same. The river you swim in today is not the same river tomorrow — new water has flowed in. You're not the same either. Change isn't a problem, he said. Change is the whole show.`,
    adult: `Heraclitus looked at the world and saw motion everywhere — fire, rivers, weather, people aging. While other Greeks searched for what stays the same, he insisted the truth was the opposite: reality is process, not stuff. Everything is on its way to becoming something else, and trying to freeze it is the source of most human misery.`,
    origin: [
      `Heraclitus was born around 535 BCE in Ephesus, a wealthy Greek city on the coast of what's now Turkey. He came from a noble family that supposedly held the local kingship, but he hated politics and reportedly handed the crown to his brother. He preferred wandering, watching rivers and fires, and writing scornful notes about how stupid most people were.`,
      `He was famously antisocial. Ancient writers nicknamed him "the Obscure" because his book was so cryptic, and "the Weeping Philosopher" because he always seemed to be in despair over human foolishness. The story goes that he eventually retreated to the mountains to live on plants and herbs, returning to town only to deposit his book in the temple of Artemis.`,
      `Only about 130 fragments of that book survive, mostly because later writers quoted him. They read like a mix of ancient haiku and philosophy: brilliant, jagged, impossible to fully pin down. From those scraps, generations of philosophers have tried to reconstruct what he actually meant — and they're still arguing.`
    ],
    coreIdeas: [
      `His most famous line is "you cannot step into the same river twice." On the surface it sounds obvious. But push on it and it gets dizzy: if everything is constantly flowing, what is a "thing" anyway? You are not the same person you were as a baby — different cells, different memories — and yet somehow it's still you. Heraclitus loved that paradox.`,
      `He believed reality runs on tension between opposites. Day needs night, hot needs cold, war needs peace. Without struggle, he said, there is no life — like a bow that needs the tension between its two ends to fire an arrow. He called this hidden harmony "the logos," a kind of cosmic pattern that holds all the change together.`,
      `Fire was his favorite symbol. A flame is always the same flame, yet always different — constantly consuming and replacing itself. That, he said, is what reality actually is: not solid stuff, but a steady, transforming process, like a candle that looks still but is really a tiny ongoing explosion.`
    ],
    teachings: [
      `No man ever steps in the same river twice.`,
      `The only constant in life is change.`,
      `Big results require big ambitions.`,
      `A man's character is his fate.`,
      `From all things one, and from one all things.`
    ],
    reaction: [
      `His contemporaries mostly didn't get him. Even Aristotle, no slouch, complained that Heraclitus's writing was so dense you couldn't tell where one sentence ended and another began. Some called him a mystic. Some called him a madman. Plato treated him with cautious respect but ultimately disagreed: Plato wanted timeless truths, and Heraclitus's universe wouldn't sit still.`,
      `The Stoics, three centuries later, took him seriously. They borrowed his idea of a rational pattern running through reality — the logos — and built a whole philosophy of self-control around it. Through them, Heraclitus quietly shaped Roman ethics and even early Christian theology, where "the Word" (logos) became a name for the divine.`,
      `In modern times he was rediscovered like a forgotten rock star. Hegel adored him. Nietzsche called him his favorite philosopher. 20th-century physicists pointed at quantum mechanics and joked that Heraclitus had been right all along — particles flicker, fields ripple, and the solid world dissolves under a microscope.`
    ],
    modern: [
      `Every time someone says "the only constant is change," "go with the flow," or "this too shall pass," they're echoing Heraclitus. His vision of life as flowing process now feels obvious — but only because he taught us to see it. Before him, most philosophers assumed reality was made of unchanging stuff.`,
      `Modern science has quietly proven him right in surprising ways. Your body replaces most of its cells every few years. Mountains are slowly flowing rivers of stone. Even particles aren't tiny solid balls; they're vibrating fields. The universe really is more like a flame than a brick.`,
      `Psychologically, his message is freeing. If you're stuck in a hard moment, Heraclitus reminds you it's already changing. If you're in love with something, he warns you to enjoy it — it won't last. He's the philosopher of impermanence in a culture that desperately tries to deny it, and that's why, twenty-five centuries later, he still hits.`
    ]
  },
  {
    id: 'democritus',
    name: 'Democritus',
    title: 'The Laughing Philosopher Who Predicted Atoms',
    era: 'Classical Greece',
    born: -460,
    died: -370,
    birthPlace: 'Abdera, Thrace',
    emoji: '⚛️',
    color: '#14b8a6',
    portrait: 'images/democritus.jpg',
    keyWorks: ['Little World System', 'On the Nature of Man (fragments)'],
    hook: `A cheerful Greek scientist, 2,400 years before microscopes existed, declares that all of reality — your body, the stars, the bread on your table — is made of tiny invisible bits dancing in empty space.`,
    kid: `Imagine if everything you could see and touch was made of tiny invisible LEGO bricks too small to ever spot, even with the best magnifier. That's exactly what Democritus said, way back when most people still thought lightning came from angry gods. He was right.`,
    adult: `Democritus is the philosopher who got it almost shockingly right. Watching dust dance in a sunbeam, he proposed that everything is built from indivisible particles he called "atoms" — moving through empty space, bumping, sticking, and recombining. He wasn't experimenting; he was thinking really, really hard. Twenty-three centuries later, microscopes proved him correct in outline, even if the details took some patching.`,
    origin: [
      `Democritus was born around 460 BCE in Abdera, a Greek port town. He inherited a small fortune and spent it traveling — Egypt, Persia, possibly India — soaking up every scrap of math, astronomy, and medicine he could find. When he came home he settled into a long, weirdly cheerful life of writing, reportedly producing dozens of books on everything from cooking to cosmology.`,
      `He's nicknamed "the Laughing Philosopher" because, while his older contemporary Heraclitus wept at human foolishness, Democritus apparently found it hilarious. Stories say he laughed so much that his neighbors thought he'd lost his mind and called in the famous doctor Hippocrates, who pronounced him the sanest man in town.`,
      `Almost none of his books survived. The 60-plus titles he wrote were mostly burned, ignored, or rotted away. What we know about his ideas comes from later thinkers quoting him — sometimes admiringly, sometimes to mock him. Yet from those scattered scraps, the foundations of modern physics quietly emerged.`
    ],
    coreIdeas: [
      `Democritus's headline insight is the atomic theory. "Atom" comes from the Greek atomos, meaning "uncuttable." He argued that if you kept slicing a piece of bread in half, eventually you'd hit a tiny chunk that couldn't be split further. Combine those chunks in different patterns, and you get every substance in existence — flesh, fire, iron, ideas.`,
      `He insisted the universe is made of two things only: atoms, and the empty void they move through. Most Greeks hated this. They thought "nothing" couldn't exist, like a sentence with a missing word. Democritus shrugged and pointed to what later became one of physics' most important ideas: empty space is real, and it lets matter move.`,
      `He was also a fierce determinist. Everything that happens, he said, happens because atoms collide a certain way — no gods pulling strings, no destiny. This made him one of the first true materialists. Yet he didn't think this was depressing; he taught that the goal of life was cheerfulness, achieved by moderate pleasures and a calm mind.`
    ],
    teachings: [
      `Nothing exists except atoms and empty space; everything else is opinion.`,
      `Happiness resides not in possessions, but in the soul.`,
      `The brave man overcomes not only his enemies but his pleasures.`,
      `It is greed to do all the talking but not to want to listen at all.`,
      `By desiring little, a poor man makes himself rich.`
    ],
    reaction: [
      `Most ancient Greeks found atomism deeply uncomfortable. Plato disliked it so much that he reportedly wanted Democritus's books burned. Aristotle disagreed for technical reasons, and since Aristotle dominated European thought for the next 1,800 years, atomism essentially went into deep freeze for almost two millennia.`,
      `It survived only barely, kept alive by Epicurus and his Roman follower Lucretius, whose long poem On the Nature of Things passed Democritus's idea quietly through the centuries. When Renaissance scholars rediscovered Lucretius in a German monastery in 1417, the atomic idea was reignited like a fuse.`,
      `From there, it caught fire fast. By the 1600s, Galileo and Newton were thinking in atomic terms; by the 1800s, Dalton was weighing atoms in a lab; by the 1900s, Einstein had proven their existence with mathematical precision. The cheerful Greek who never owned a microscope had, after a 2,300-year wait, been vindicated.`
    ],
    modern: [
      `Every chemistry class on the planet still draws Democritus's idea on its first page. The periodic table, the structure of the cell, the mechanism behind smartphones, vaccines, batteries — all of it relies on the picture he painted in his head. He's the philosopher who became a physicist before physics existed.`,
      `His insistence that nature follows laws, not whims of gods, also seeded the entire scientific worldview. The very idea that you can understand reality by carefully thinking through what its smallest parts must be doing — that's Democritus. Every time a scientist says, "let's reason about what's happening at the molecular level," they're walking in his footprints.`,
      `Even his ethics quietly shape modern life. His advice — that happiness is a calm, cheerful mind, not a pile of stuff — gets repeated by every minimalism blog and well-being podcast. The Laughing Philosopher figured out, before microscopes and before therapy, that contentment is built more by what you let go of than by what you grab.`
    ]
  },
  {
    id: 'socrates',
    name: 'Socrates',
    title: 'The Athenian Gadfly',
    era: 'Classical Greece',
    born: -470,
    died: -399,
    birthPlace: 'Athens, Greece',
    emoji: '❓',
    color: '#0ea5e9',
    portrait: 'images/socrates.jpg',
    keyWorks: [`(Wrote nothing — known through Plato's dialogues and Xenophon's memoirs)`],
    hook: `An ugly, barefoot stonecutter wanders the Athens marketplace asking polite questions until the most powerful men in the city decide they want him dead.`,
    kid: `Socrates was the world's most annoying friend — in a good way. Whenever someone said "I know what's right," he'd ask, "Really? Why?" Then "Why?" again. And again. Most people got mad. But by the end, they realized they'd never actually thought about it before. He believed asking the right question was more powerful than knowing the answer.`,
    adult: `Socrates wrote nothing. He just walked around Athens chatting up politicians, generals, and craftsmen, asking innocent-sounding questions about justice, courage, and goodness. Within minutes, his target's confident answers would unravel. He claimed his only wisdom was knowing he didn't know — and that everyone should examine their own beliefs the same brutal way. Athens eventually killed him for it.`,
    origin: [
      `Socrates was born in Athens around 470 BCE, the son of a stonemason and a midwife. He was famously ugly — short, snub-nosed, pop-eyed — and as a young man he served as a heavy infantry soldier, where his calm bravery became legend. By middle age he had given up his father's craft and decided his real calling was to bother people with questions.`,
      `He never charged for teaching. He lived in poverty, walked barefoot in all weather, and wore the same threadbare cloak winter and summer. His wife Xanthippe was famously impatient with his lifestyle, and ancient writers loved telling stories about her dumping water on his head. Socrates said it just made him a more patient husband.`,
      `Athens at the time was the world's first big democracy, buzzing with sophists — paid teachers who promised to make young men brilliant in court. Socrates loathed them. They taught how to win arguments; he wanted to teach people how to think honestly. So he set up shop in the marketplace and started asking questions, free of charge, all day, every day.`
    ],
    coreIdeas: [
      `His method was almost embarrassingly simple. Step one: find someone who claims to know what justice or courage is. Step two: ask them, gently, to explain. Step three: poke holes in their definition with examples. Step four: watch them try again. Step five: poke more holes. By the end, his target usually admitted they'd never really understood the word they'd been confidently using their whole life. We still call this the Socratic method.`,
      `Socrates believed real knowledge starts with admitting you don't have it. "I know that I know nothing" was the closest thing he had to a slogan. He thought most human evil came not from wickedness but from self-deception — people convinced they understood things they didn't, charging ahead and crushing others on the way.`,
      `He also insisted that ethics was the most important subject. Asking "how should I live?" was, to him, the only question worth a serious life. He famously said an unexamined life isn't worth living — meaning that going through life on autopilot, never asking why you do what you do, is barely living at all.`
    ],
    teachings: [
      `The unexamined life is not worth living.`,
      `I know that I know nothing.`,
      `Wonder is the beginning of wisdom.`,
      `There is only one good, knowledge, and one evil, ignorance.`,
      `Be the kind of person you want others to think you are.`
    ],
    reaction: [
      `For most of his life, Athens tolerated Socrates as a charming nuisance. But after the city lost a brutal war with Sparta, the public mood darkened. Several of Socrates's former students had betrayed Athens, and grieving Athenians blamed his constant questioning for poisoning the youth.`,
      `In 399 BCE, when he was 70, three Athenians took him to court on charges of corrupting young people and disrespecting the gods. Socrates defended himself with sarcastic confidence — at one point suggesting his "punishment" should be free meals at city hall. The jury voted, narrowly, to execute him.`,
      `He could have escaped. Friends bribed the guards and arranged a getaway. He refused, saying that fleeing would betray everything he'd taught about respecting the law. He drank a cup of poison hemlock, spent his last hour discussing the soul with his friends, and died — instantly becoming history's most famous philosophical martyr.`
    ],
    modern: [
      `Every law school, medical school, and good high-school classroom uses Socrates's method. When a teacher answers your question with another question, when a coach makes you defend an idea, when a therapist gently asks "but why do you believe that?" — that's Socrates working. He invented the most powerful learning technique humans have.`,
      `He also gave us the model of the public intellectual: the person who annoys power by refusing to stop asking inconvenient questions. Every whistleblower, every investigative journalist, every protester holding a hard sign in a crowd descends, at least spiritually, from the barefoot man in the marketplace.`,
      `Most personally, Socrates left a haunting standard: examine your life. Don't just live it. Look at why you're choosing this job, this relationship, this opinion you've never questioned. The discomfort that follows is, by his measure, the start of being fully alive.`
    ]
  },
  {
    id: 'plato',
    name: 'Plato',
    title: 'Architect of the Ideal World',
    era: 'Classical Greece',
    born: -428,
    died: -348,
    birthPlace: 'Athens, Greece',
    emoji: '🏛️',
    color: '#2563eb',
    portrait: 'images/plato.jpg',
    keyWorks: ['The Republic', 'The Symposium', 'Phaedo', 'Apology', 'Timaeus'],
    hook: `Heartbroken at watching his teacher executed by the city he loved, an Athenian aristocrat spends the rest of his life building, in writing, a world where good people would actually be in charge.`,
    kid: `Plato thought the world we see is a bit like a shadow on a wall — there's a brighter, truer reality just behind it that we usually can't quite see. He wrote stories about caves, magical rings, lost cities, and perfect kingdoms, all to ask one question: what does a good life actually look like?`,
    adult: `Plato is the philosopher who turned a mentor's death into 30 dialogues that shaped everything. He believed our messy physical world is a copy of a perfect realm of "Forms" — pure ideas of justice, beauty, goodness — and that a worthy life is the climb toward seeing them clearly. He invented the world's first university, the Academy, and basically founded Western philosophy in one career.`,
    origin: [
      `Plato was born around 428 BCE into one of Athens's oldest aristocratic families. He grew up assuming he'd be a politician — it was practically the family business. As a young man he wrote tragedies, wrestled at the Isthmian Games, and seemed destined for the public stage. Then he met Socrates, and his life detonated.`,
      `For about a decade he followed the barefoot questioner around the Athenian marketplace. When Socrates was put to death by Athenian democracy in 399 BCE, the trauma reshaped Plato. He left Athens in disgust, traveled the Mediterranean for years, studied with mathematicians in Italy, and eventually came home determined to honor his teacher in writing.`,
      `Around 387 BCE, on the outskirts of Athens, in a grove sacred to a hero named Akademos, Plato founded a school. Students came from across the Greek world to study mathematics, astronomy, ethics, and politics. Over the entrance, legend says, was carved: "Let no one ignorant of geometry enter here." We still use the word "academy" because of him.`
    ],
    coreIdeas: [
      `Plato's biggest move was the Theory of Forms. He noticed that we use words like "beautiful" or "just" or "circle" as if they're stable, even though every example we point to is flawed: every drawing of a circle is wobbly, every just law is imperfect. So where does the ideal version live? In a non-physical realm of pure Forms, he argued, that the soul somehow remembers from before birth.`,
      `His most famous illustration is the Allegory of the Cave. Imagine prisoners chained inside a cave, watching shadows on a wall and mistaking them for reality. One prisoner escapes, sees the sun, returns to tell the others — and they refuse to believe him. That, Plato said, is the philosopher's job: drag people, kicking and grumbling, toward the light.`,
      `In The Republic, he asks what a perfectly just society would look like. His answer is shocking: ditch democracy, train the wisest people from childhood, and hand them total power as "philosopher-kings." Modern readers find this scary. But Plato saw democracy execute his teacher. The book is, in many ways, a grieving man's argument with his city.`
    ],
    teachings: [
      `Wise men speak because they have something to say; fools speak because they have to say something.`,
      `The price good men pay for indifference to public affairs is to be ruled by evil men.`,
      `Be kind, for everyone you meet is fighting a hard battle.`,
      `Good actions give strength to ourselves and inspire good actions in others.`,
      `At the touch of love everyone becomes a poet.`
    ],
    reaction: [
      `Plato's Academy thrived for almost 900 years — until a Roman emperor finally shut it down in 529 CE. In the meantime, his star pupil Aristotle disagreed with him on almost everything and went off to build his own school, giving us the funny image of philosophy's two giants peacefully feuding for decades.`,
      `Christians later loved Plato. His idea of an unchanging realm of perfect Forms slid easily into Christian heaven, and theologians like Augustine essentially bolted Christian theology onto a Platonic frame. For roughly the first 1,000 years of Western Christian thought, Plato was philosophy.`,
      `Modern philosophers, though, have argued with him fiercely. Karl Popper accused him of inventing totalitarianism with The Republic. Feminists noted his weird mix of progressive and patriarchal moments — he supported female philosopher-rulers but distrusted the body. Even today, taking a stance on Plato is one of the fastest ways to start a philosophical fistfight.`
    ],
    modern: [
      `Almost every Western thinker has been quoted as saying philosophy is just "footnotes to Plato." That's because his questions — what is justice? what is love? what is real? — became the questions everyone after him had to answer. Even when we disagree with him, we use his vocabulary.`,
      `His Cave allegory has gone wildly viral in pop culture. The Matrix is essentially the Cave with a cyberpunk paint job: people trapped inside a fake world, one person waking up, returning to free others. Inception, The Truman Show, Black Mirror — all riff on the same Platonic itch about what's behind the wall of appearances.`,
      `His political worry, too, keeps coming back. Every time someone asks whether ordinary voters can really make wise decisions about complicated policies, every time experts and democracy clash, you're inside Plato's Republic. He didn't necessarily get the answer right. But he made sure we couldn't stop asking the question.`
    ]
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    title: 'The Encyclopedist of Reality',
    era: 'Classical Greece',
    born: -384,
    died: -322,
    birthPlace: 'Stagira, Macedon (northern Greece)',
    emoji: '🦉',
    color: '#059669',
    portrait: 'images/aristotle.jpg',
    keyWorks: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics', 'On the Soul'],
    hook: `A doctor's son with too much curiosity grows up, tutors a teenage prince named Alexander, and then writes the world's first encyclopedia covering everything from octopus reproduction to the meaning of happiness.`,
    kid: `If Plato was a dreamer staring at the sky, Aristotle was a kid on his hands and knees with a magnifying glass. He believed the way to understand the world was to look at it carefully — count the legs of beetles, watch how chickens hatch, measure how rocks fall. He invented science by being super patient and incredibly nosy.`,
    adult: `Aristotle was Plato's brightest student and his fiercest critic. He thought Plato had it backwards — truth isn't in some other realm, it's right here, embedded in real things if you bother to look. He spent his life cataloging biology, ethics, politics, drama, and logic, founding entire fields of study. His idea that happiness is "flourishing" — being the best version of you — still shapes how we talk about a good life.`,
    origin: [
      `Aristotle was born in 384 BCE in Stagira, a town in northern Greece. His father was the personal doctor to the king of Macedon, which gave young Aristotle a front-row seat to royal life and an early taste for biology — apparently he loved dissecting things. At 17 he was sent to Athens to study at Plato's Academy.`,
      `He stayed for 20 years, the brightest student in the school, but never quite Plato's heir. When Plato died, the leadership of the Academy passed to someone else, and Aristotle wandered. He spent years on the island of Lesbos, where he wrote some of the world's first careful zoological field studies — observing oysters, sea urchins, and especially octopuses with obvious delight.`,
      `Then a king came calling. Philip II of Macedon hired Aristotle to tutor his teenage son, who would later be known as Alexander the Great. We don't know exactly what they discussed, but legend has it the future world-conqueror loved his teacher. Eventually Aristotle returned to Athens and founded his own school, the Lyceum, where he and his students walked while they thought — earning them the nickname "Peripatetics," the Walkers.`
    ],
    coreIdeas: [
      `Aristotle's biggest disagreement with Plato was about where reality lives. Plato thought truth was hidden in some other realm of perfect Forms. Aristotle disagreed: what makes a tree a tree, he said, isn't somewhere else — it's right inside this tree, in its structure and how it grows. He invented the idea of "form" as the inner pattern of a thing, not its faraway template.`,
      `He's also the inventor of formal logic. He noticed that arguments have skeletons. "All humans are mortal. Socrates is human. Therefore Socrates is mortal." That kind of move — the syllogism — looks tiny, but it's the basis of how computers, courts, and proofs work. For 2,000 years, "logic" basically meant "what Aristotle wrote."`,
      `His most influential idea, though, may be virtue ethics. He argued that being good isn't about following rules — it's about becoming a good kind of person, the way an apple tree becomes a good apple tree. Each virtue is a balance: courage sits between recklessness and cowardice, generosity between waste and stinginess. The goal of life is eudaimonia — usually translated "happiness," but really meaning "flourishing."`
    ],
    teachings: [
      `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`,
      `Knowing yourself is the beginning of all wisdom.`,
      `The whole is greater than the sum of its parts.`,
      `Happiness depends upon ourselves.`,
      `It is the mark of an educated mind to be able to entertain a thought without accepting it.`
    ],
    reaction: [
      `In his lifetime, Aristotle's school competed with Plato's, but politics ended his Athens chapter abruptly. When Alexander the Great died, anti-Macedonian feelings exploded in Athens, and Aristotle — Alexander's old tutor — became unsafe. He fled the city, reportedly saying he refused to let Athens "sin twice against philosophy" by killing him as it had killed Socrates. He died a year later in exile.`,
      `His writings then nearly vanished. Many were lost; what survives are mostly his lecture notes. Yet through Arab scholars in Baghdad and Andalusia — especially Avicenna and Averroes — Aristotle's ideas were preserved and amplified during Europe's Dark Ages, then handed back to medieval Christians.`,
      `Once Christian Europe rediscovered him, it went a little crazy. Thomas Aquinas synthesized Aristotle with Catholic theology so thoroughly that for centuries Aristotle was simply called "the Philosopher" — no name needed. Eventually science had to break free of him to advance. Galileo, Newton, and Darwin all overturned Aristotelian claims, and only then could modern science fully bloom.`
    ],
    modern: [
      `Despite the corrections, Aristotle's framework still runs much of how we think. His ideas about logic underpin computer science. His categories of grammar shape how we describe languages. His "virtue ethics" came roaring back in the 20th century and now anchors fields from leadership coaching to medical ethics.`,
      `Modern psychology has quietly rediscovered eudaimonia. Studies of well-being now distinguish between hedonic happiness (pleasure) and eudaimonic happiness (meaning, growth, doing things well). Researchers like Martin Seligman explicitly cite Aristotle when designing programs to help people flourish — not just feel good.`,
      `Even his political instinct lingers. Aristotle famously called humans "political animals," meaning we only become fully ourselves in community. Every modern argument that we need each other, that loneliness is dangerous, that civic life matters as much as private life — that's Aristotle's voice across 2,400 years, calmly insisting that you are not built to flourish alone.`
    ]
  },
  {
    id: 'epicurus',
    name: 'Epicurus',
    title: 'The Gardener of Quiet Joy',
    era: 'Classical Greece',
    born: -341,
    died: -270,
    birthPlace: 'Samos, Greece',
    emoji: '🍇',
    color: '#84cc16',
    portrait: 'images/epicurus.jpg',
    keyWorks: ['Letter to Menoeceus', 'Principal Doctrines', 'On Nature (lost)'],
    hook: `A teacher buys a small garden on the edge of Athens, throws open the gates to women, slaves, and rich kids alike, and quietly invents the world's first community devoted to figuring out how to be happy.`,
    kid: `Epicurus thought happiness was simple, but most people get it backwards. They think they need a fancy house, a famous job, and tons of stuff. But, he said, real joy is bread, water, friends, and a calm mind. The more stuff you chase, the more anxious you get. Want less, enjoy more — that's the whole trick.`,
    adult: `History has been weirdly unfair to Epicurus. We use "epicurean" to mean fancy food and indulgence, but the real Epicurus lived on bread, water, and the occasional cube of cheese. His point was that pleasure, properly understood, is the absence of pain — and the most reliable pleasures are simple, repeatable, and free. Friendship, he said, was the single greatest good in life.`,
    origin: [
      `Epicurus was born on the Greek island of Samos in 341 BCE, the son of a poor schoolteacher. He read Democritus as a teenager and had what he later described as a kind of awakening — atoms, no gods pulling strings, no afterlife to fear. By his early thirties he had moved to Athens and started teaching.`,
      `Around 306 BCE he bought a small property just outside the city walls and turned it into a school called, simply, "the Garden." It was radically inclusive for its time: women, slaves, and foreigners were all welcome, eating bread and conversing as equals. In a society that ranked everyone obsessively, this was almost subversive.`,
      `He died around 270 BCE after suffering for years from kidney stones. On his last day, he wrote a calm letter to a friend describing his pain in detail and saying that the joy of remembering their conversations more than balanced the agony. It's one of the most moving documents in the history of philosophy.`
    ],
    coreIdeas: [
      `Epicurus believed pleasure is the goal of life — but he meant something very specific. He distinguished between "natural and necessary" pleasures (food, water, sleep, friendship), "natural but unnecessary" ones (gourmet meals, luxury), and "unnatural and unnecessary" ones (fame, power, wealth). The first kind makes you happy and is easy to obtain. The third kind is a treadmill that never satisfies.`,
      `He argued that most human misery comes from two fears: fear of the gods and fear of death. He killed both. The gods, he said, exist but don't bother with us — they're too busy being blissful. And death simply ends experience, so it cannot hurt you. "When death is, I am not; when I am, death is not." He thought living without those two fears was already half the battle.`,
      `Friendship was at the center of his ethics. Most happiness, he said, comes from talking with people you love. He was so serious about this that the Garden was structured around shared meals and conversation. Real wisdom, he insisted, made people kinder, calmer, and easier to be around — not more impressive at dinner parties.`
    ],
    teachings: [
      `Not what we have, but what we enjoy, constitutes our abundance.`,
      `Death does not concern us, because as long as we exist, death is not here.`,
      `He who is not satisfied with a little is satisfied with nothing.`,
      `Of all the means to ensure happiness, the most important is the acquisition of friends.`,
      `Misfortune seldom intrudes upon the wise.`
    ],
    reaction: [
      `Epicurus was simultaneously beloved and despised. His followers adored him so much they reportedly carried his portrait on rings. But conservatives were horrified that he denied divine punishment and welcomed women into his school. Romans later spread nasty rumors that the Garden was a den of hedonism and orgies — none of which was true, but the slander stuck.`,
      `Despite the smear campaign, the Roman poet Lucretius wrote an enormous philosophical poem, On the Nature of Things, devoted entirely to explaining Epicurus. Through that one book, smuggled through the Middle Ages and rediscovered in 1417, Epicurus's atomism and ethics quietly survived to the Renaissance.`,
      `Christianity then crushed him publicly for a thousand years. His denial of a divine afterlife and judgment made him a useful villain. Yet privately, Renaissance thinkers like Montaigne and Erasmus loved him; later, Thomas Jefferson explicitly called himself an Epicurean and quoted him in personal letters.`
    ],
    modern: [
      `Almost every modern conversation about minimalism, decluttering, and "enough" is reheated Epicurus. The idea that buying more does not buy more happiness is now backed by mountains of research — and Epicurus was making the same case while sitting in a vegetable garden 2,300 years ago.`,
      `His ethics also seeded the long tradition of secular morality: the belief that you can live well without invoking gods, hell, or eternal punishment. Modern humanists, atheists, and science-minded ethicists owe a quiet debt to the cheerful man in the Garden who insisted decency and friendship were enough.`,
      `Most personally, Epicurus offers a practical recipe: cut your needs, savor what's free, prize friendships, stop fearing what you can't change. In an age of optimization apps and luxury feeds, that recipe sounds almost rebellious. But it works. He worked it. And his last calm letter, written through agonizing pain, is hard to argue with.`
    ]
  },
  {
    id: 'marcus',
    name: 'Marcus Aurelius',
    title: 'The Philosopher Emperor',
    era: 'Classical Greece',
    born: 121,
    died: 180,
    birthPlace: 'Rome, Italy',
    emoji: '⚔️',
    color: '#b91c1c',
    portrait: 'images/marcus.jpg',
    keyWorks: ['Meditations'],
    hook: `The most powerful man on Earth — emperor of Rome, commander of legions, ruler of millions — sits alone in a war tent each night and writes a private journal reminding himself to be kind tomorrow.`,
    kid: `Marcus Aurelius was an emperor, which means he ran one of the biggest empires ever, with armies and palaces and gold. You'd think he'd be busy bragging. Instead, every night he wrote little notes to himself — things like "Don't be grumpy. People are doing the best they can. Be patient." Then he went out the next day and tried to actually do it.`,
    adult: `Marcus Aurelius wrote the Meditations not for publication but for himself — late-night reminders scribbled in war camps to a man trying not to be ruined by power. They are the most honest journal we have from any ruler, and possibly any human. Their core message is Stoic: focus only on what you control, treat others with patience, and remember every day that you'll die. From that, find calm.`,
    origin: [
      `Marcus was born in 121 CE into a wealthy Roman family. As a teenager he caught the eye of Emperor Hadrian, who arranged for him to be adopted into the imperial succession. He was groomed for the throne for two decades — taught by the best tutors, drilled in law, military strategy, and especially philosophy. He fell in love with Stoicism early.`,
      `In 161 CE, at age 40, he became emperor. His reign was nothing like the philosopher's quiet life he might have preferred. Plagues swept Rome. Germanic tribes pressed across the Danube. He spent years in cold military camps along Europe's frozen frontiers, fighting wars he did not start and could not avoid.`,
      `It was in those camps, in the candlelight after long days of bloody command decisions, that he wrote the journal we now call the Meditations. He never intended for anyone else to read it. Each entry is a private note — sometimes to himself, sometimes to imagined critics — about how to keep his temper, his integrity, and his sanity intact.`
    ],
    coreIdeas: [
      `The heart of Marcus's Stoicism is the "dichotomy of control." Some things are up to you — your effort, your reactions, your choices. Most things are not — other people's behavior, the weather, your reputation, your body's eventual failure. Sanity, he said, is investing your worry only in the first column.`,
      `He returned obsessively to memento mori, "remember you will die." Not as morbidity, but as a focusing tool. When you imagine that today might be your last, petty grievances shrink. The status fight you almost picked feels stupid. The kind word you almost skipped suddenly matters. Death, weirdly, becomes the best clarifier of life.`,
      `He insisted on a kind of muscular kindness. Each morning, he wrote, you'll meet rude, ungrateful, jealous people — and your job is to not become like them. People act badly mostly out of ignorance, he believed, and reacting in kind only doubles the world's pain. The moral path is patience, even with fools, even with enemies.`
    ],
    teachings: [
      `You have power over your mind — not outside events. Realize this, and you will find strength.`,
      `The happiness of your life depends upon the quality of your thoughts.`,
      `Waste no more time arguing what a good man should be. Be one.`,
      `The best revenge is to be unlike him who performed the injury.`,
      `When you arise in the morning, think of what a precious privilege it is to be alive.`
    ],
    reaction: [
      `In his time, Marcus was widely regarded as the closest thing Rome ever got to Plato's philosopher-king. The historian Cassius Dio called his reign the last age of gold. Yet his journals were essentially private; for centuries after his death, almost no one knew he had written them.`,
      `The Meditations only emerged into wider circulation in the medieval period and then truly exploded in popularity in the modern era. Today they are arguably the most-read ancient philosophical text on the planet, especially among people who have never taken a philosophy class — politicians, soldiers, athletes, founders.`,
      `Stoicism itself, after a long quiet period, has had a stunning 21st-century comeback. Bestselling books, popular podcasts, and entire online communities now teach Marcus's ideas. His face — that grave, bearded statue — has become a kind of unlikely meme of strength under pressure.`
    ],
    modern: [
      `Modern cognitive behavioral therapy is essentially Stoicism with clinical packaging. Both teach that what hurts us isn't events but our interpretations of events; both teach exercises to reframe those interpretations. Aaron Beck, who founded CBT, openly credited the Stoics, including Marcus, as direct inspirations.`,
      `Athletes and operators love him for a different reason. Navy SEALs read Meditations. NBA coaches quote him in locker rooms. The reason: his blunt practical advice — focus on what you control, perform regardless of outcome, treat hardship as training — works on the field as well as it worked in a war camp on the Danube.`,
      `Most importantly, Marcus is a model of humility under power. The most powerful man in his world used his journal to bully himself, gently, into being kinder. In an era when leaders broadcast certainty all day, that quiet honesty — "I am still learning to be a decent human" — is its own kind of revolution.`
    ]
  },
  {
    id: 'augustine',
    name: 'Augustine of Hippo',
    title: 'The Restless Saint',
    era: 'Medieval',
    born: 354,
    died: 430,
    birthPlace: 'Tagaste, North Africa (modern Algeria)',
    emoji: '✝️',
    color: '#9333ea',
    portrait: 'images/augustine.jpg',
    keyWorks: ['Confessions', 'The City of God', 'On Christian Doctrine'],
    hook: `A wild young man stealing pears, chasing women, and arguing in cafes one moment — and a sobbing Christian convert in a garden the next, writing the West's first deeply personal autobiography.`,
    kid: `Augustine was the kind of kid who tried everything. He stole fruit just for fun, partied hard in college, fell in love over and over, and joined religion after religion. Then one day in a garden he heard a child's voice say "take and read," opened a Bible, and his whole life changed. He spent the rest of it writing about why we want what we want — and why it never seems to fill us up.`,
    adult: `Augustine is the philosopher who fused Greek thought with Christianity and gave us our modern idea of the inner self. His Confessions — written as a long prayer — is the first true autobiography in Western literature: a relentless self-examination of desire, addiction, memory, and grace. He shaped Catholic, Protestant, and even secular ideas about guilt, forgiveness, free will, and what it means to be a person split inside.`,
    origin: [
      `Augustine was born in 354 CE in a Roman colonial town in North Africa. His father was a pagan civil servant, his mother Monica a fierce Christian. As a teenager he was sent to Carthage to study rhetoric — basically to become a fancy lawyer-orator — and the city, with its theaters and parties, swallowed him whole. He took a long-term partner, had a son, and moved through philosophical schools without ever feeling at home.`,
      `For nine years he was a Manichaean, a follower of a dualist religion that taught the world is split between cosmic light and darkness. Then he became a skeptic. Then a Neoplatonist. He moved from Carthage to Rome to Milan, climbing the imperial career ladder and arguing with himself the entire time. His mother followed him across the Mediterranean, weeping and praying.`,
      `In 386 CE, in a garden in Milan, he had a breakdown. He heard a child's voice in a neighboring house chanting "tolle, lege" — "take and read." He opened a copy of Paul's letters, read a verse about putting on Christ, and felt the storm in him stop. He was baptized the next year. He was later made bishop of Hippo, a small town back in North Africa, where he wrote the rest of his life.`
    ],
    coreIdeas: [
      `Augustine's central insight is that the self is divided. He had spent years trying to do what he knew was right and failing — eating, drinking, lusting, returning to old habits even as part of him hated them. Out of this came his diagnosis: the human will is split. We don't simply want one thing; we want different things at the same time, and we drag ourselves in opposite directions. Modern psychology, two thousand years later, says exactly this.`,
      `He insisted that we are restless until we find rest in something larger than ourselves. "You have made us for yourself, O Lord, and our heart is restless until it rests in you." He thought every craving — for food, for sex, for fame, for fancy chariots — was a confused version of one big underlying craving: meaning. Filling a meaning-shaped hole with stuff just makes the hole louder.`,
      `In The City of God, he distinguished between the City of Man (built on self-love and conquest) and the City of God (built on love of God and neighbor). Empires rise and fall, he said, often spectacularly. The deeper question is which "city" you actually live in inside your own heart. That metaphor has shaped Christian political thought ever since.`
    ],
    teachings: [
      `You have made us for yourself, O Lord, and our heart is restless until it rests in you.`,
      `Love, and do what you will.`,
      `The truth is like a lion. You don't have to defend it. Let it loose. It will defend itself.`,
      `Patience is the companion of wisdom.`,
      `Faith is to believe what you do not see; the reward of this faith is to see what you believe.`
    ],
    reaction: [
      `Augustine wrote in the worst possible decade. In 410 CE, while he was working on The City of God, the Visigoths sacked Rome. The shock to the ancient world is hard to overstate — like watching a global capital burn live on television. Pagans blamed Christians for abandoning the old gods; Augustine wrote partly to defend Christianity in the rubble.`,
      `He died in 430 CE while his city of Hippo was under siege by Vandal armies. Within decades, the Roman Empire of his youth had collapsed in the West. Yet his books survived in monasteries. Through the Dark Ages, when learning nearly went silent, monks copied his Confessions and City of God again and again, by candlelight, on bloody parchment.`,
      `Almost every later Christian thinker takes a stance on Augustine. Aquinas built on him. Luther and Calvin claimed him for the Reformation. Catholics and Protestants ended up arguing about who Augustine "really" belonged to. Even modern atheist philosophers — like Bertrand Russell, who couldn't stand him — admit his shadow stretches across the entire Western mind.`
    ],
    modern: [
      `The Confessions is arguably the first modern memoir. Every honest book about addiction, mental illness, religious crisis, or sexual confusion owes the form to him. He invented the mode of dragging your insides out into the light and writing them down so others might recognize themselves.`,
      `His diagnosis of divided desire reads like a 21st-century essay about screen time. "I want to focus, but I keep opening the app." "I want to be present with my kids, but I check my phone." Augustine would smile sadly and quote Paul: "I do not do the good I want, but the evil I do not want is what I do." He understood compulsion at a level neuroscience is only now confirming.`,
      `Politically, his "two cities" still frames how thoughtful Christians and many secular ethicists think about empire, power, and loyalty. The reminder that no political project — left or right — can be ultimate, that all earthly cities eventually crumble, has been a steady and humbling note for 1,600 years.`
    ]
  },
  {
    id: 'rumi',
    name: 'Rumi',
    title: 'The Whirling Poet of Love',
    era: 'Medieval',
    born: 1207,
    died: 1273,
    birthPlace: 'Balkh (modern Afghanistan)',
    emoji: '🌹',
    color: '#db2777',
    portrait: 'images/rumi.jpg',
    keyWorks: ['Masnavi', 'Divan-e Shams', 'Fihi Ma Fihi (Discourses)'],
    hook: `A respected, well-dressed Muslim scholar meets a wild wandering mystic in the street, falls in spiritual love, and within months is dancing in the marketplace, writing the most ecstatic love poetry the world has ever read.`,
    kid: `Rumi believed everyone has a tiny invisible flame inside them that wants to dance with the big flame of God. He wrote thousands of poems about love, music, longing, and laughter — and his poems are so warm that even today, people in lots of countries read them when they're sad, in love, or just trying to understand life.`,
    adult: `Rumi was a 13th-century Muslim theologian who became, accidentally, the world's most popular love poet. After meeting a strange mystic named Shams of Tabriz, his careful religious life dissolved into spiritual fire. He poured out tens of thousands of verses about union with the divine — and because he wrote about longing rather than dogma, his poetry crosses faiths. He has been a Sufi saint, a New Age icon, and one of America's bestselling poets, all at once.`,
    origin: [
      `Rumi was born around 1207 in Balkh, in what is now northern Afghanistan, into a family of Islamic scholars. When he was a small child, his father moved the family west to escape the Mongol invasions sweeping across Central Asia. They wandered through Baghdad, Damascus, and finally settled in the city of Konya in modern Turkey. His father was a respected jurist and Rumi inherited that role.`,
      `By his late thirties, Rumi was a well-known religious teacher with a packed lecture hall, hundreds of students, and a comfortable life. Then in 1244, in the streets of Konya, he met a wandering dervish named Shams of Tabriz. Stories disagree about exactly what happened. They argued, fell into instant spiritual recognition, and Rumi closed his lecture hall to spend every waking hour with the strange mystic.`,
      `For years they were inseparable. Rumi's students grew jealous, then furious. Shams disappeared mysteriously — possibly murdered by Rumi's own son, though no one knows for certain. Rumi was shattered. Out of that grief came an explosion of poetry: the Divan-e Shams, tens of thousands of verses dedicated to a friend who was no longer there. The pain became music.`
    ],
    coreIdeas: [
      `Rumi's central image is longing. The reed flute, in his poetry, has been cut from the reed bed and now wails in pain — and that wail is music. Humans, he said, are exactly the same. We've been cut off from our origin, the divine source, and the longing we feel for love, beauty, and meaning is really one longing with many disguises. Pain isn't a problem to fix; it's a song calling us home.`,
      `He believed love is the engine of the universe. Not the Hallmark version — the consuming, dissolving love that breaks ego and burns away the false self. To Rumi, falling in love with another person was a small hint of the much bigger love that animates everything. He saw God less as a judge than as a beloved who is always closer to us than we are to ourselves.`,
      `Through his student order, the Mevlevi (later known in the West as the Whirling Dervishes), Rumi developed the practice of sema — meditation through spinning. The dancer turns slowly, one hand toward the sky to receive grace, the other toward the ground to pass it on. The body becomes a verse. He believed music and movement could open the heart in ways argument never could.`
    ],
    teachings: [
      `You are not a drop in the ocean. You are the entire ocean in a drop.`,
      `The wound is the place where the Light enters you.`,
      `Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.`,
      `What you seek is seeking you.`,
      `Try not to resist the changes that come your way. Instead, let life live through you.`
    ],
    reaction: [
      `In his lifetime Rumi was already famous across the Islamic world. When he died in 1273, his funeral procession in Konya included Christians, Jews, and Muslims walking together — each insisting he had really belonged to them. His tomb in Konya is still one of the most-visited pilgrimage sites in Turkey, and the order he founded carried his teachings across the Ottoman Empire.`,
      `For centuries Rumi was beloved within Islamic culture but largely unknown in the West. That changed in the late 20th century, when American poet Coleman Barks began publishing free, lyrical English versions of his work. Sales exploded. By the 2000s, Rumi was the bestselling poet in the United States — outselling Shakespeare in some years.`,
      `Some scholars have criticized the Western reception of Rumi for stripping away his Islamic context, turning him into a generic spiritual guru. The real Rumi was a devout Muslim reader of the Qur'an. But others argue that Rumi himself wrote toward a love that transcends formal religion, and that his explosive global popularity is evidence his message lands across every fence we've built.`
    ],
    modern: [
      `Rumi has become the unofficial poet of modern grief and longing. His verses get tattooed on arms after breakups, read at weddings, posted at funerals, quoted in therapy. His promise that the wound is the entry point of the light comforts millions of people who cannot pray formally but still need to make sense of their pain.`,
      `Mindfulness, modern dance therapy, ecstatic dance communities, and even some trauma-recovery practices borrow directly from his vision of the body as a path to meaning. The simple act of breathing, moving, and listening — without trying to think your way through suffering — has roots that reach back through Sufism to Rumi's whirling courtyard.`,
      `Most importantly, in a fragmented world, Rumi keeps insisting that the deepest things — love, longing, beauty, awe — don't belong to any single tribe. "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there." That single line has been quoted in peace negotiations, grief support groups, and middle-school classrooms. Eight hundred years later, it still works.`
    ]
  },
  {
    id: 'aquinas',
    name: 'Thomas Aquinas',
    title: 'The Cathedral Builder of Reason',
    era: 'Medieval',
    born: 1225,
    died: 1274,
    birthPlace: 'Roccasecca, Italy',
    emoji: '📖',
    color: '#7c3aed',
    portrait: 'images/aquinas.jpg',
    keyWorks: ['Summa Theologica', 'Summa Contra Gentiles'],
    hook: `A massive, quiet Italian friar — nicknamed "the dumb ox" by classmates — sits down to write a single book that will try to explain absolutely everything about God, ethics, law, and the human soul, and very nearly pulls it off.`,
    kid: `Aquinas was a giant of a man — tall, wide, and so quiet his classmates thought he was slow. They were so wrong. He had a brain like a cathedral. He spent his life building one enormous book that tried to fit all of religion and all of reason together like puzzle pieces. He thought faith and science weren't enemies — they were partners, both reaching for the same truth.`,
    adult: `Thomas Aquinas wrote the Summa Theologica, the most ambitious philosophical work of the Middle Ages — a systematic attempt to harmonize Aristotle's philosophy with Christian theology. He argued that reason and faith are not opponents; they're two ways of knowing the same God. His detailed accounts of natural law, just war, the existence of God, and the nature of virtue still anchor Catholic moral theology and influence secular law worldwide.`,
    origin: [
      `Thomas was born around 1225 in a castle near Naples, the youngest son of Italian nobility. His parents had a clear plan: he would become a Benedictine abbot, run an important monastery, and bring honor and revenue to the family. Thomas had other ideas. As a teenager he met the Dominicans — a new, radical order of begging preachers — and decided he wanted to join them.`,
      `His family was furious. They literally kidnapped him, locked him in the family castle for over a year, and at one point sent a sex worker into his room hoping to lure him out of religious life. Thomas reportedly chased her out with a hot iron poker. Eventually his family gave up. He took his vows and moved north to Cologne and Paris to study with Albert the Great.`,
      `In Paris, the universities were exploding with newly translated Aristotle, smuggled in from Arabic translations. The Church was nervous: Aristotle's pagan thinking might corrupt Christian doctrine. Thomas saw an opportunity. He spent the rest of his life — about twenty hyperproductive years — building a synthesis that took the best of Aristotle and wove it into Christian theology, sentence by careful sentence.`
    ],
    coreIdeas: [
      `Aquinas's biggest move was to argue that reason and faith are not enemies. Reason can take you a long way, he said — it can prove the existence of God, the basic shape of morality, the structure of nature. Faith picks up where reason runs out, telling you things reason couldn't have figured out alone (like the Trinity or the resurrection). But the two can never truly contradict each other, because both come from the same source.`,
      `He famously formulated five "ways" or arguments for the existence of God, drawing on Aristotle. The most famous is the argument from motion: things move because something moves them; that mover was moved by something else; you cannot push the chain back forever; therefore there must be a "first mover," which we call God. You can argue with the logic, but the framework still gets debated in modern philosophy classes.`,
      `In ethics, he developed the theory of natural law: the idea that there is a moral order built into the structure of the universe, and that human reason can read it. Don't murder. Care for children. Tell the truth. These aren't just cultural preferences, he said — they're as real as gravity, written into what humans are. This idea later became the basis for ideas like human rights and just war theory.`
    ],
    teachings: [
      `Better to illuminate than merely to shine; to deliver to others contemplated truths than merely to contemplate.`,
      `There is nothing on this earth more to be prized than true friendship.`,
      `Beware the person of one book.`,
      `Wonder is the desire for knowledge.`,
      `If the highest aim of a captain were to preserve his ship, he would keep it in port forever.`
    ],
    reaction: [
      `In his own lifetime Aquinas was controversial. Some bishops formally condemned parts of his work after his death, suspicious of Aristotelian elements. The Dominicans defended him fiercely. Within fifty years he was canonized — declared a saint — and his Summa Theologica was placed on the altar at the Council of Trent alongside the Bible.`,
      `For about seven hundred years his work was the unofficial backbone of Catholic philosophy. Popes named him "Doctor Communis" (the Common Teacher). Every Catholic seminary student studied him. Even Protestant Reformers, while disagreeing with him on key points, learned theology by arguing against him. He set the agenda everyone else had to respond to.`,
      `Modern thinkers have pushed back hard on parts of Aquinas. His confidence that reason alone can prove God is questioned by skeptics. His natural-law ethics is debated by anyone who notices that "nature" doesn't always agree with itself. Yet even his critics often admit the man was a once-in-a-millennium intellect, organized like a software architect a thousand years too early.`
    ],
    modern: [
      `If you've ever heard a politician argue something is "against natural law" — about marriage, war, or human rights — you're hearing Aquinas. His framework still shapes Catholic teaching, conservative legal philosophy, and international human rights theory. You can love or hate the framework, but it's the lens many modern arguments are still passing through.`,
      `His broader insistence that science and faith are compatible underwrites a quiet tradition of religious scientists, from Mendel and Lemaître to many working biologists today. The idea that studying the universe carefully is a way of honoring what made it — rather than fighting religion — has Thomistic roots all the way down.`,
      `Most subtly, Aquinas modeled how to disagree well. The Summa is structured by listing the strongest arguments against his position first, in their fairest form, then answering them. In an age of social-media outrage, that single intellectual habit — really representing your opponent before responding — would, by itself, be a small revolution.`
    ]
  },
  {
    id: 'descartes',
    name: 'René Descartes',
    title: 'The Doubting Dreamer',
    era: 'Early Modern',
    born: 1596,
    died: 1650,
    birthPlace: 'La Haye en Touraine, France',
    emoji: '🧠',
    color: '#3b82f6',
    portrait: 'images/descartes.jpg',
    keyWorks: ['Meditations on First Philosophy', 'Discourse on the Method', 'Principles of Philosophy'],
    hook: `A young soldier on a winter campaign locks himself in an overheated stove-room, decides to doubt every single thing he was ever taught, and emerges with a single sentence that will define modern thought.`,
    kid: `Descartes wanted to know what we can really, truly be sure of. So he played a game: he doubted everything. Maybe his eyes were lying. Maybe he was dreaming. Maybe an evil wizard was tricking him. He doubted and doubted until he hit one thing he couldn't doubt — that he was thinking. If he was thinking, he had to exist. "I think, therefore I am." Game over.`,
    adult: `Descartes is the philosopher most often credited with launching modern thought. He decided to throw out everything he could possibly doubt — sense data, mathematics, even his own body — and rebuild philosophy from one bedrock certainty: that the very act of doubting proves there's a doubter. From this seed grew the modern emphasis on the individual mind, the split between mind and body, and the rationalist project that fed straight into the scientific revolution.`,
    origin: [
      `Descartes was born in 1596 in central France, sickly enough that the Jesuit boarding school he attended let him sleep until late morning — a habit he kept his whole life. He was brilliant at mathematics and bored by traditional philosophy, which struck him as castle-building on sand: nobody seemed to agree on anything, and the foundations were unclear.`,
      `In 1619, while serving as a soldier in Bavaria during the Thirty Years' War, he holed up in a heated room — Germans called it a "stove" — for an entire winter day, alone with his thoughts. He had three vivid dreams that night which he later said launched his life's project. He decided to apply mathematical certainty to philosophy: doubt everything, and rebuild only on what cannot be doubted.`,
      `He spent most of his adult life in the Dutch Republic, which was relatively tolerant of unconventional ideas. He moved often — about twenty times in twenty years — to keep his thinking quiet and his neighbors guessing. In 1649 he reluctantly accepted an invitation from Queen Christina of Sweden to be her philosophy tutor. She made him give lessons at five in the morning in freezing castle rooms. Within months, the late-rising Frenchman caught pneumonia and died.`
    ],
    coreIdeas: [
      `His method was systematic doubt. Step one: doubt everything you can possibly doubt. Could your senses fool you? Yes — they often do. Could mathematics be wrong? Imagine a powerful evil demon constantly deceiving you — couldn't even arithmetic be a trick? Step two: notice the one thing you cannot doubt. Even if a demon is fooling you, there must be a "you" being fooled. The very act of doubting proves a doubter. Cogito, ergo sum: I think, therefore I am.`,
      `From this single foothold, Descartes tried to build the rest. He argued that the mind and the body are made of fundamentally different stuff — mind is thinking, non-physical, immortal; body is physical, mechanical, like an elaborate clock. This split, called dualism, gave us a powerful framework for early science, but also created a problem we are still arguing about: how exactly does an immaterial mind move a physical body?`,
      `He insisted that clear, distinct ideas — the kind you can see with mathematical certainty — are the path to knowledge. If reason can prove a triangle's angles add to 180 degrees, perhaps it can build all of science the same way, by slow chains of certain steps. This is the foundation of rationalism, and it shapes how we still talk about proofs, evidence, and what counts as "really knowing" something.`
    ],
    teachings: [
      `I think, therefore I am.`,
      `Doubt is the origin of wisdom.`,
      `The reading of all good books is like a conversation with the finest minds of past centuries.`,
      `Each problem that I solved became a rule which served afterwards to solve other problems.`,
      `It is not enough to have a good mind; the main thing is to use it well.`
    ],
    reaction: [
      `Descartes's books were controversial almost immediately. His Meditations were placed on the Catholic Index of Forbidden Books for over a century — partly because his reasoning made the Church's authority feel optional, partly because his mechanical view of nature seemed to crowd God out. Theologians attacked him from one side; materialists, who thought he hadn't gone far enough, attacked him from the other.`,
      `Other philosophers built directly on his foundation. Spinoza, Leibniz, and Malebranche took his rationalism in different directions. Empiricists like Locke and Hume rejected his bedrock confidence in pure reason and insisted that all knowledge starts with sense experience. The whole next century of European philosophy can be read as one long conversation about Descartes — agreeing, disagreeing, refining.`,
      `His mind-body dualism became, ironically, the framework most modern philosophers and neuroscientists try to escape. Today many argue that the "Cartesian theater" — a little observer inside your head watching the show — doesn't exist, and that mind is just what brains do. Yet our everyday talk still leaks dualism: we speak of "my body" and "my mind" as if they were two things. Descartes is in our grammar.`
    ],
    modern: [
      `Every time you ask "how do I really know that?" — about a news headline, a memory, a relationship — you are doing a small Descartes move. He gave us the modern habit of treating personal certainty, not tradition or authority, as the starting point of knowledge. This is the philosophical air we breathe.`,
      `His dualism still haunts technology. Engineers building artificial intelligence keep bumping into Cartesian assumptions: is a thinking machine "really" thinking, or just simulating? Are minds something you can upload, or are they tied to the wet, weird body? These are old Descartes questions wearing new lab coats.`,
      `Even his project of doubting everything has become a kind of cultural posture. Modern science, modern journalism, and modern therapy all expect you to question received wisdom — to "do your own research," to verify, to check sources. Descartes could not have predicted the internet, but its best instinct (skepticism toward authority) and its worst (paranoid suspicion of everything) both descend from his stove-room.`
    ]
  },
  {
    id: 'spinoza',
    name: 'Baruch Spinoza',
    title: 'The Lens Grinder of God',
    era: 'Early Modern',
    born: 1632,
    died: 1677,
    birthPlace: 'Amsterdam, Dutch Republic',
    emoji: '💎',
    color: '#0891b2',
    portrait: 'images/spinoza.jpg',
    keyWorks: ['Ethics', 'Theological-Political Treatise', 'Treatise on the Emendation of the Intellect'],
    hook: `A 23-year-old Jewish lens grinder is excommunicated by his synagogue with one of the most savage curses in Jewish history, then quietly spends the rest of his short life writing a book that will redefine God for the modern age.`,
    kid: `Spinoza thought God isn't an old man in the sky — God is everything. The trees, the stars, your dog, you, all part of one giant breathing system. So when you understand the world, you're understanding God a little more. He was so peaceful and kind that even his enemies admitted he seemed almost holy. He died young, polishing tiny lenses to pay rent.`,
    adult: `Spinoza is the most quietly radical philosopher of the early modern era. He argued that there is only one substance in the universe — call it God or call it Nature — and that everything we see is a mode of that single reality. There are no miracles, no separate soul, no chosen people; instead, there is one infinite, lawful whole, which we can understand by reason and respond to with what he called intellectual love. Theologians thought him an atheist. Einstein called him his God.`,
    origin: [
      `Baruch Spinoza was born in 1632 in Amsterdam, into a community of Portuguese Jews who had fled the Inquisition. He was a brilliant student in the Talmud Torah school — fluent in Hebrew, Spanish, Portuguese, and later Latin and Dutch. His father expected him to become a rabbi or take over the family import business. Spinoza had other ideas.`,
      `In 1656, when he was 23, his synagogue issued the harshest cherem (excommunication) in its records: he was cursed by day and by night, told no one could speak with him, read his writings, or come within four cubits of him. The exact reason is lost, but it had to do with unconventional views on God and Scripture. He left Amsterdam and never returned to organized Judaism.`,
      `He spent the rest of his life in modest rented rooms outside the city, grinding optical lenses for microscopes and telescopes for income — the dust eventually contributed to his early death. He turned down a prestigious professorship at Heidelberg because he didn't want to compromise his freedom. He died at 44, leaving his masterpiece, the Ethics, ready for posthumous publication.`
    ],
    coreIdeas: [
      `Spinoza's most radical idea is that there is only one thing — a single, infinite, eternal substance, which he calls "God or Nature" (Deus sive Natura). Everything else, from rivers to ravens to your thoughts about ravens, is just a mode or expression of this one substance. There are no separate souls floating outside nature, no miracles breaking natural law, no chosen group set apart. Everything is inside the one.`,
      `From this it follows that minds and bodies are not separate, as Descartes thought, but two aspects of the same underlying reality. Your mental life and your physical life are not pulling each other around — they are the same event seen from two angles. This dissolves Descartes's mind-body problem rather than solving it.`,
      `In ethics, he believed freedom is not the absence of cause but the deep understanding of cause. We aren't really free when we randomly do whatever we feel; we're freer when we understand why we feel what we feel and act knowingly. The highest human state, he said, is amor intellectualis Dei — the intellectual love of God, which really means a calm, clear-eyed delight in understanding the whole pattern of reality.`
    ],
    teachings: [
      `Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice.`,
      `The highest activity a human being can attain is learning for understanding, because to understand is to be free.`,
      `He alone is free who lives with free consent under the entire guidance of reason.`,
      `I have striven not to laugh at human actions, not to weep at them, nor to hate them, but to understand them.`,
      `If you want the present to be different from the past, study the past.`
    ],
    reaction: [
      `In his lifetime Spinoza was treated as if he were spiritually radioactive. Clergymen called him an atheist, a Jew called him a heretic, a Lutheran called him "an insane and miserable man." After his death, his Ethics was banned across Europe. For over a century, calling someone "a Spinozist" was an insult that could end careers.`,
      `Then in the late 1700s, German thinkers — Lessing, Goethe, Herder, and later the Romantics — quietly rediscovered him. Goethe carried Spinoza's Ethics on his travels for decades. Hegel built much of his system on Spinozistic ground. The poet Heinrich Heine called Spinoza one of the great spirits of humanity. The reputation slowly turned.`,
      `Modern Spinoza enthusiasts include Albert Einstein, who when asked if he believed in God famously answered, "I believe in Spinoza's God, who reveals himself in the harmony of all that exists." The neuroscientist Antonio Damasio wrote a whole book — Looking for Spinoza — arguing that modern neuroscience is, in many ways, catching up to him.`
    ],
    modern: [
      `Anyone who feels spiritual when looking at a starry sky, or a forest, or a microbe under a microscope, but bristles at organized religion, has a good chance of being a Spinozist without knowing it. His "God or Nature" is the unofficial theology of many scientists, artists, and ecologists — a sense that the universe is one enormous lawful unfolding, worthy of love rather than fear.`,
      `His insistence that mind and body are two faces of one event maps onto modern integrated neuroscience. The brain doesn't have a little mental command center on top of a physical machine; it is the same process at different levels of description. When researchers describe emotion as inseparable from bodily states, they're echoing Spinoza three centuries later.`,
      `Politically, Spinoza wrote one of the earliest impassioned defenses of free thought, free speech, and the separation of religion from government. His Theological-Political Treatise quietly seeded the Enlightenment, the U.S. First Amendment, and modern liberal democracy. The lens grinder who was cursed at 23 ended up shaping the kind of society where you can publish almost anything you want.`
    ]
  },
  {
    id: 'locke',
    name: 'John Locke',
    title: 'Father of Liberalism',
    era: 'Early Modern',
    born: 1632,
    died: 1704,
    birthPlace: 'Wrington, England',
    emoji: '📜',
    color: '#0284c7',
    portrait: 'images/locke.jpg',
    keyWorks: ['Two Treatises of Government', 'An Essay Concerning Human Understanding', 'A Letter Concerning Toleration'],
    hook: `An English doctor, hiding in Holland to avoid being executed for plotting against a king, quietly drafts the philosophical blueprint for almost every modern democracy.`,
    kid: `Locke believed every baby is born like a blank notebook — not good, not bad, not knowing anything. Everything you become, you learn. He also believed kings shouldn't get to do whatever they want. Governments, he said, only exist because people agree to let them — and if a government starts being unfair, the people can replace it. This idea changed history.`,
    adult: `John Locke is the philosophical engineer of modern liberal democracy. He argued that humans are born with no innate ideas — minds are blank slates filled in by experience — and that we possess natural rights to life, liberty, and property that no government can legitimately override. His theory of government by consent of the governed directly inspired the American and French Revolutions and continues to shape constitutional democracy worldwide.`,
    origin: [
      `Locke was born in 1632 in rural England, the son of a country lawyer who fought on Parliament's side in the English Civil War. He grew up in a country tearing itself apart — kings beheaded, religious factions slaughtering each other, governments rising and collapsing. He went to Oxford, studied medicine, and ended up as personal physician to Lord Shaftesbury, one of the most powerful and rebellious figures in English politics.`,
      `Working in Shaftesbury's circle plunged Locke into political danger. When Shaftesbury fell out of favor with King Charles II for opposing royal power, Locke was suspected of plotting along with him. In 1683, fearing arrest and possible execution, he fled to Holland and lived there in hiding for nearly six years, writing under fake names.`,
      `In 1688 the "Glorious Revolution" overthrew the English king and replaced him with William and Mary, on terms Locke had been arguing for: limited monarchy, parliamentary power, religious toleration. Locke returned to England a quiet hero. His Two Treatises of Government, published anonymously in 1689, became the philosophical justification for the new political order.`
    ],
    coreIdeas: [
      `Locke's first big claim was about knowledge. Against rationalists like Descartes, who believed we are born with innate ideas, Locke argued that the mind starts as a tabula rasa — a blank slate. All knowledge, every concept, every value, comes from experience: from sensation (the outside world hitting our senses) and reflection (our minds noticing their own activity). This made education, environment, and upbringing matter enormously — a profoundly democratic implication.`,
      `His second big move was political. Imagine, he said, humans before any government — a "state of nature." In that state, every person has natural rights to life, liberty, and property, simply because they are human. We form governments only because life without one is dangerous and inconvenient. Crucially, governments are agents we hire, not masters we obey. If they break the trust, we can fire them.`,
      `On religion, he wrote a Letter Concerning Toleration arguing the state has no business policing what people believe. Forced belief is impossible, and trying to impose it just produces hypocrisy and bloodshed. The state should protect property, life, and order; conscience belongs to the individual. This was radical in 1689 — and still uncomfortable in many places today.`
    ],
    teachings: [
      `No man's knowledge here can go beyond his experience.`,
      `The end of law is not to abolish or restrain, but to preserve and enlarge freedom.`,
      `Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.`,
      `What worries you, masters you.`,
      `New opinions are always suspected, and usually opposed, without any other reason but because they are not already common.`
    ],
    reaction: [
      `Locke's ideas were embraced almost too enthusiastically. Within a few decades his Two Treatises had been translated, reprinted, and pirated across Europe. Voltaire devoured him in France, and the British colonies in America made him their unofficial patron philosopher. Thomas Jefferson essentially paraphrased Locke when he wrote that all men "are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty, and the pursuit of Happiness."`,
      `Yet his record is also painfully mixed. Locke held investments in the Royal African Company, which trafficked enslaved people, and helped draft the constitution of Carolina, which protected slavery. Modern scholars wrestle with how the philosopher of natural liberty also profited from its violent denial. The contradiction has not been smoothed over — it sits at the heart of his legacy.`,
      `By the 19th century Locke had become the unofficial philosopher of liberalism — the political tradition that puts individual rights, limited government, and rule of law at the center. Conservatives and progressives both claim parts of him. Even thinkers who reject him, like Marx, structure their critique against the world Locke helped build.`
    ],
    modern: [
      `If you live in any constitutional democracy — with elections, rule of law, freedom of religion, and rights you can wave at your government — you live downstream of Locke. Almost every modern bill of rights borrows his vocabulary. The U.S. Declaration of Independence is essentially Locke set to American music.`,
      `His blank-slate theory of mind has been seriously challenged by modern cognitive science, which suggests we are born with a great deal of cognitive structure already in place — language instincts, face recognition, basic moral intuitions. Yet his deeper point — that environment and learning shape us profoundly — remains foundational to education, child development, and public policy.`,
      `In a world where authoritarian governments still rise, Locke's quiet sentence echoes: governments exist by the consent of the governed, and when they break that trust, they forfeit their authority. That single idea has powered protests from Boston to Hong Kong to Tehran. Locke wrote it from a hiding place in Holland in the 1680s; people are still living and dying by it.`
    ]
  },
  {
    id: 'hume',
    name: 'David Hume',
    title: 'The Skeptic with a Smile',
    era: 'Early Modern',
    born: 1711,
    died: 1776,
    birthPlace: 'Edinburgh, Scotland',
    emoji: '💭',
    color: '#06b6d4',
    portrait: 'images/hume.jpg',
    keyWorks: ['A Treatise of Human Nature', 'An Enquiry Concerning Human Understanding', 'Dialogues Concerning Natural Religion'],
    hook: `A cheerful, plump Scotsman politely demolishes humanity's confidence in cause and effect, the soul, and miracles — and somehow remains everyone's favorite dinner guest in Edinburgh.`,
    kid: `Hume noticed something funny: when we say "the sun will rise tomorrow," we don't actually know that. We're just guessing because it always has before. We do this all the time! We think we see "cause and effect," but really we just see things following each other and assume there's a hidden link. He was super gentle about it — he basically said, "We're little story-making creatures, and that's okay."`,
    adult: `Hume is the philosopher who took empiricism to its breaking point. If all knowledge comes from experience, he argued, then huge chunks of what we confidently "know" — cause and effect, a continuous self, miracles, even basic moral truths — turn out to rest on habit and feeling, not reason. He didn't say these beliefs are bad; he said they're inevitable, useful, and not nearly as solid as we pretend. He woke Kant from his "dogmatic slumber" and continues to set the agenda for modern philosophy.`,
    origin: [
      `David Hume was born in 1711 in Edinburgh, into a minor noble family that expected him to study law. He hated it. As a teenager he had what he called a "new scene of thought" — a vision so intense it almost broke him mentally. He fled to France, lived cheaply in a small town, and at age 28 published A Treatise of Human Nature, which sank without a ripple. He later joked it "fell dead-born from the press."`,
      `For decades Hume tried to live by his pen. He worked as a tutor, a soldier's secretary, even a librarian. His religious views — quietly skeptical, openly amused — kept him from getting university positions. Yet he became a beloved fixture of Edinburgh's intellectual life, holding court at dinner parties with conservatives, radicals, and visiting Frenchmen alike.`,
      `In his later years he became, of all things, a celebrity. His History of England was a bestseller. He served as embassy secretary in Paris, where he was lionized by French intellectuals — they called him "le bon David," the good David. He died in 1776 with such famously cheerful equanimity that his friend Adam Smith wrote a moving public letter about it, scandalizing pious readers who expected a deathbed conversion.`
    ],
    coreIdeas: [
      `Hume's most famous argument is about causation. We say fire causes heat, billiard balls cause each other to move. But what do we actually see? Just one event followed by another, over and over. We never directly observe a "causing" — only constant conjunction. Our belief in cause and effect, he argued, is a habit of mind, not a logical truth. This single insight keeps haunting science.`,
      `On the self, he was equally radical. When you look inside, he said, you don't find a stable "you" — you find a flickering bundle of perceptions, thoughts, and feelings, none of which lasts. The self is more like a river than a rock, more like a streaming TV channel than a permanent character. Buddhism had said the same thing 2,000 years earlier, but Hume reached it on his own.`,
      `In ethics he made a now-famous move: you cannot derive an "ought" from an "is." No matter how much you describe how the world is, that never logically tells you how it ought to be. Morality, he argued, is grounded not in pure reason but in human feeling — sympathy, approval, disgust. "Reason is, and ought only to be, the slave of the passions." Reason doesn't drive the bus; feelings do, and reason just figures out how to get there.`
    ],
    teachings: [
      `A wise man proportions his belief to the evidence.`,
      `Beauty in things exists in the mind which contemplates them.`,
      `Custom is the great guide of human life.`,
      `Truth springs from argument amongst friends.`,
      `Be a philosopher; but, amidst all your philosophy, be still a man.`
    ],
    reaction: [
      `Hume was either ignored or attacked in his lifetime. Universities refused him professorships. Religious thinkers were horrified by his quiet attacks on miracles and his refusal to provide a deathbed retraction. His most explosive book, Dialogues Concerning Natural Religion, was so corrosive about the design argument for God that he had it published only after his death.`,
      `Then Immanuel Kant, an obscure German professor of unfailing routine, read Hume — and panicked. He later wrote that Hume "interrupted my dogmatic slumber and gave my investigations in the field of speculative philosophy a quite new direction." Kant's entire critical philosophy was, in essence, a 600-page response to Hume. Without Hume, no Kant; without Kant, much of modern philosophy looks unrecognizable.`,
      `Modern science also keeps bumping into him. The "problem of induction" — how can past observations justify confidence in future predictions? — remains unresolved. Statistics, machine learning, and the philosophy of science all wrestle with it. Hume sketched the question in 1748 and we're still working on the answer.`
    ],
    modern: [
      `Hume's "is-ought" gap is everywhere now, even in fights you wouldn't expect. Every time someone argues that a moral conclusion follows from a scientific finding — about evolution, gender, or economics — Hume's gap shows up. You cannot reason directly from "this is how things are" to "this is how they should be" without smuggling in a value somewhere. Half of our cultural arguments founder on this point.`,
      `Behavioral economics is essentially Hume vindicated. Decades of research show that human reasoning is mostly post-hoc storytelling layered on top of intuition and habit. Daniel Kahneman's "fast and slow thinking," Jonathan Haidt's elephant-and-rider metaphor — these are direct descendants of Hume's claim that reason serves the passions, not the other way around.`,
      `Most quietly, Hume modeled a calm, courageous skepticism. He doubted big things — God, the self, causation — without becoming bitter or grandstanding. He stayed kind, funny, and curious to the end. That blend of radical doubt and human warmth is, in our hot-take age, almost extinct, and worth resurrecting.`
    ]
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    title: 'The Clockwork Conscience',
    era: 'Early Modern',
    born: 1724,
    died: 1804,
    birthPlace: 'Königsberg, Prussia (modern Kaliningrad, Russia)',
    emoji: '⏰',
    color: '#1e40af',
    portrait: 'images/kant.jpg',
    keyWorks: ['Critique of Pure Reason', 'Critique of Practical Reason', 'Groundwork of the Metaphysics of Morals'],
    hook: `A small, frail philosopher walks the same streets at the same time every day with such precision that neighbors set their watches by him — and meanwhile, in his head, he is rebuilding the foundations of knowledge, ethics, and beauty from scratch.`,
    kid: `Kant thought our minds aren't like cameras that just record reality. They're more like glasses we can never take off — they shape everything we see. Every person sees the world through "human glasses" of space, time, and cause. So we don't see things exactly as they are, but as our minds organize them. He also had one big rule for being good: only do things you'd be okay with everyone in the world doing. Try lying, cheating, or stealing through that test, and most fall apart.`,
    adult: `Kant is the towering, almost unreadable, transformer of modern philosophy. He argued that human knowledge is limited not because reality is inaccessible, but because the mind itself imposes structure — space, time, causality — on whatever it experiences. In ethics, his "categorical imperative" demands you act only by rules you could will to be universal laws, treating persons as ends in themselves and never merely as means. He grounds the modern idea of human dignity.`,
    origin: [
      `Immanuel Kant was born in 1724 in Königsberg, an East Prussian port city. His parents were strict Pietist Christians of modest means; his father was a saddle-maker. Young Kant was small and frail — barely five feet tall — but academically brilliant. He entered the local university at sixteen, studied everything from physics to theology, and when his father died, supported himself for years as a private tutor.`,
      `He became a university lecturer in his thirties and a full professor at age 46, after years of writing on astronomy, physics, geography, and minor philosophical topics. He almost never left his hometown. He never married. He famously kept a daily routine of such mechanical regularity — wake, study, lecture, lunch with friends, walk down "Philosopher's Way," read, sleep — that his neighbors could check the time by his footsteps.`,
      `Reading Hume in his fifties shattered his confidence in old certainties. He spent over a decade in near-silence, working on a single book: the Critique of Pure Reason, published in 1781. It was 856 dense, technical pages. Almost no one understood it at first. Within twenty years, every serious German philosopher was either defending or attacking it, and Kant was the most important thinker in Europe.`
    ],
    coreIdeas: [
      `Kant's "Copernican revolution" was to flip the question. Earlier philosophers asked how our minds match the world. Kant asked: what if the world we experience is partly shaped by our minds? Space, time, and causality, he said, are not features of reality "out there" but the framework our minds use to make sense of anything at all. So we never know things "in themselves" — only as they appear inside the human framework.`,
      `In ethics, his big idea is the categorical imperative. Before you act, ask: can I will that everyone, in the same situation, do this? Lying fails the test — if everyone lied, the very point of language collapses. He also formulated it as: treat every human being as an end in themselves, never merely as a means to your goals. Most modern human-rights talk is a paraphrase of this single sentence.`,
      `He insisted morality must be grounded in reason, not feeling or self-interest. Doing the right thing because it benefits you isn't really moral — it's just enlightened self-interest. Real morality is doing the right thing because it's right, even when it costs you. He thought every rational being, just by being rational, had access to the moral law and a duty to follow it.`
    ],
    teachings: [
      `Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me.`,
      `Act only according to that maxim by which you can at the same time will that it should become a universal law.`,
      `Science is organized knowledge. Wisdom is organized life.`,
      `Always recognize that human individuals are ends, and do not use them as means to your end.`,
      `Have the courage to use your own understanding.`
    ],
    reaction: [
      `Kant's first Critique was almost too dense to read. Early reviewers admitted defeat. But within a generation, German philosophy reorganized itself around him. Fichte, Schelling, and Hegel all built systems trying to extend or repair his work. The next century of European thought is, in many ways, footnotes to Kant.`,
      `In ethics he was sometimes attacked for being rigid. He famously argued that you should not lie even to a murderer at your door asking where your friend is hiding. Critics from his day to ours have said this rigidity ignores real-world consequences. Defenders respond that any ethics willing to lie under pressure stops being a moral law and becomes mere calculation.`,
      `His political writings — especially the essay Perpetual Peace, written when he was over 70 — sketched a system of republics linked in a peaceful federation. The League of Nations and later the United Nations explicitly drew on his vision. The European Union's founders cited him. His categorical imperative, written in 1785, is still being argued in court.`
    ],
    modern: [
      `The phrase "human dignity" — central to constitutions, hospitals, ethics committees, and human rights treaties — is Kantian to the core. The idea that every person is an end, never merely a means, underwrites bans on slavery, torture, human trafficking, and unethical experimentation. When the Nuremberg Code or the UN Universal Declaration of Human Rights speak, Kant is in the room.`,
      `In epistemology, his core move — that minds shape what they experience — anticipates modern cognitive science. Vision research shows the brain is constantly constructing what we "see," not passively recording it. Linguistic and cultural psychology echo Kant's insight that we never get raw reality; we get reality filtered through human equipment.`,
      `Kant's ethical test — "what if everyone did this?" — is still the most underrated moral move you can make. Try it on small daily decisions: cutting in line, pirating a song, fudging a deadline. Most ethical failures look smaller when seen from a self-interested angle and much uglier when universalized. The little professor's question, asked silently before each choice, is a quiet form of conscience.`
    ]
  },
  {
    id: 'hegel',
    name: 'G.W.F. Hegel',
    title: 'The Architect of History',
    era: 'Early Modern',
    born: 1770,
    died: 1831,
    birthPlace: 'Stuttgart, Germany',
    emoji: '♻️',
    color: '#7e22ce',
    portrait: 'images/hegel.jpg',
    keyWorks: ['Phenomenology of Spirit', 'Science of Logic', 'Philosophy of Right'],
    hook: `A bookish young teacher watches Napoleon ride past on horseback after the Battle of Jena and decides he is witnessing the world-spirit on horseback — and that all of history is a single, magnificent argument working itself out.`,
    kid: `Hegel saw history like a giant conversation that's still going on. Someone says an idea — that's a thesis. Then someone disagrees — that's an antithesis. Out of the fight, a new idea emerges — that's a synthesis. Then the new idea picks a fight with another idea, and around it goes. He thought all of human progress, freedom, and even our personal growth happens this way: through arguing our way to better answers.`,
    adult: `Hegel built one of the most ambitious philosophical systems in history. He argued that reality, history, and consciousness all unfold dialectically — through the clash of opposites generating new, richer wholes. History is not random; it's the gradual self-realization of freedom, with each era surpassing the limits of the one before. His ideas reshaped politics, theology, and especially Marx, whose theory of history is essentially Hegel turned upside down.`,
    origin: [
      `Hegel was born in 1770 in Stuttgart, the son of a minor government official. He went to a famous Lutheran seminary in Tübingen, where his roommates included the future philosopher Schelling and the future poet Hölderlin — they nicknamed him "the old man" because of his slow, methodical way of thinking. He fell in love with Greek tragedy, French Revolutionary politics, and the idea of human freedom realized in history.`,
      `In 1806, Napoleon's army crushed Prussia at Jena while Hegel was finishing his Phenomenology of Spirit in that very town. He saw Napoleon ride past his window on a white horse and wrote to a friend that he had just seen "the world-spirit on horseback." For Hegel, history was speaking, and Napoleon was, for that moment, its mouthpiece.`,
      `He spent years as a struggling lecturer, even briefly as a newspaper editor, before becoming a full professor in Berlin in 1818. There he became the dominant philosopher in Europe. Lecture halls overflowed. Students traveled across the continent to hear him. He died suddenly in 1831, possibly from cholera, at the height of his influence.`
    ],
    coreIdeas: [
      `Hegel's master concept is the dialectic. Reality, he said, develops through a back-and-forth pattern: a position (thesis) generates its opposite (antithesis), and the tension between them produces a richer synthesis that contains and transcends both. Then the synthesis becomes a new thesis, and the dance continues. He saw this pattern everywhere — in logic, in psychology, in politics, in history itself.`,
      `History, for Hegel, is the long story of freedom waking up to itself. In ancient empires, only the king was free. In Greek and Roman worlds, some citizens were free. In the modern world, in principle at least, every human being is recognized as free. He saw this not as accident but as the self-development of "Spirit" (Geist) — a kind of universal mind realizing its own freedom through human history.`,
      `Selfhood, too, is dialectical. He famously analyzed the master-slave relationship: a master who needs a slave to recognize him is actually dependent on the slave; the slave, by working on the world, develops skills and self-respect the master never gains. So the structure of unequal recognition tends to invert itself. Identity, freedom, and respect, Hegel argued, are not solo achievements but social ones — we become ourselves only through others.`
    ],
    teachings: [
      `Nothing great in the world has ever been accomplished without passion.`,
      `We learn from history that we do not learn from history.`,
      `To be independent of public opinion is the first formal condition of achieving anything great.`,
      `The owl of Minerva spreads its wings only with the falling of the dusk.`,
      `What is reasonable is real; that which is real is reasonable.`
    ],
    reaction: [
      `Hegel's lectures were a phenomenon. His writing, however, has long been considered some of the most punishing prose in philosophy. Bertrand Russell once joked that Hegel was the philosopher most likely to be admired without being read. He was hugely influential and almost equally resented for the difficulty of his style.`,
      `His followers split sharply after his death. The "Right Hegelians" emphasized his more conservative side — his apparent endorsement of the Prussian state, his religious conclusions. The "Left Hegelians," including a young Karl Marx, took the dialectic and ran in a radical direction: history is still moving, and the next synthesis will be a classless society. Hegel's ideas armed both wings of European politics for the next century.`,
      `In the 20th century, Hegel was attacked from many directions. Karl Popper accused him of laying the philosophical foundation for totalitarianism by glorifying the state. Analytic philosophers found his metaphysics indefensibly grand. Yet thinkers like Charles Taylor, Robert Brandom, and Slavoj Žižek have led powerful Hegelian revivals, arguing his vision of socially constituted selfhood and historical reason has been wrongly dismissed.`
    ],
    modern: [
      `Every time you hear someone describe an argument as needing "thesis, antithesis, synthesis" — or simply talk about "moving the conversation forward" by integrating opposing views — you are using a watered-down Hegel. The idea that progress happens through productive conflict, not by silencing one side, runs through modern democratic theory, education, and even product design.`,
      `Modern identity politics, on both left and right, are deeply Hegelian whether they know it or not. The conviction that you become yourself only through being recognized by others, and that misrecognition is itself a form of injustice, comes straight from his master-slave analysis. Charles Taylor's influential essay "The Politics of Recognition" makes the lineage explicit.`,
      `Marxism, in turn, is Hegel with the dialectic turned from "ideas pushing history" to "material conditions and class conflict pushing history." Whether you love or hate Marx, his thought structure is Hegelian. Knowing this helps explain how the same intellectual machinery has produced both liberal democratic theory and revolutionary communism — a startling testament to the power of one obscure German lecturer.`
    ]
  },
  {
    id: 'kierkegaard',
    name: 'Søren Kierkegaard',
    title: 'The Lonely Knight of Faith',
    era: '19th Century',
    born: 1813,
    died: 1855,
    birthPlace: 'Copenhagen, Denmark',
    emoji: '🌫️',
    color: '#475569',
    portrait: 'images/kierkegaard.jpg',
    keyWorks: ['Either/Or', 'Fear and Trembling', 'The Sickness Unto Death', 'Concluding Unscientific Postscript'],
    hook: `A small, hunchbacked Dane breaks off his engagement to the woman he loves, locks himself in his Copenhagen apartment, and writes a torrent of strange, brilliant books exploring what it really means to choose to be yourself.`,
    kid: `Kierkegaard thought most people sleepwalk through life — they pick jobs, beliefs, and partners just because everyone else does. He believed real living means making big, scary choices on purpose, knowing they're yours and yours alone. He was sad, dramatic, deeply religious, and weirdly funny. He invented modern existentialism by being painfully honest about how lonely it feels to actually be a person.`,
    adult: `Søren Kierkegaard is the spiritual founder of existentialism. He argued that big philosophical systems — Hegel's, Christianity's, Western Reason itself — miss the most important fact: it is you, the single individual, who must actually live, choose, and stand before whatever you take to be ultimate. He explored anxiety, despair, faith, and irony with a literary intensity unmatched in philosophy. Almost every later existentialist, theologian, and modern psychologist owes him something.`,
    origin: [
      `Kierkegaard was born in 1813 in Copenhagen, the youngest of seven children. His father, a wealthy wool merchant, was haunted by guilt — as a starving boy he had once cursed God on a Danish moor — and convinced his children would all die before he did. Most did. Søren grew up surrounded by death, religion, and an oppressive father whose darkness shaped him forever.`,
      `He was a brilliant, sharp-tongued university student, fond of philosophy, theater, and elaborate clothes. He fell deeply in love with a young woman named Regine Olsen, became engaged, and then — for reasons that tortured him the rest of his life — broke off the engagement. He believed his melancholy and his philosophical mission would make him a terrible husband. He never married. He wrote about her, obliquely, for the rest of his life.`,
      `Living off a substantial inheritance, Kierkegaard became a one-man writing machine. In a single year, 1843, he published Either/Or, Repetition, and Fear and Trembling. Often he wrote under multiple pseudonyms, staging philosophical positions in conflict, almost like a novelist directing characters. He died in 1855, exhausted from a public feud with the official Danish church, his last money spent.`
    ],
    coreIdeas: [
      `Kierkegaard insisted that truth is subjectivity. He didn't mean truth is whatever you feel like; he meant that the truths that matter most — about meaning, love, faith, death — only become real when you actually take them on personally. You can know all the doctrines about love and never love. You can recite theology and never believe. The decisive thing is the inwardness with which you live.`,
      `He sketched three "stages" of life. The aesthetic stage chases pleasure, novelty, distraction; it ends in boredom. The ethical stage commits to duties, family, community; it gives shape but can become rule-bound. The religious stage takes a "leap of faith" toward something that reason cannot fully justify, accepting the risk of being wrong, because only that leap engages the whole self.`,
      `He was the first to take anxiety seriously as philosophy. Anxiety, he said, is the dizziness of freedom — the queasy awareness that you really could choose otherwise, that no one else can choose for you, that you alone are responsible for your life. Most people flee this dizziness into busyness, conformity, or addiction. Authentic life, he thought, means staying with it long enough to actually choose.`
    ],
    teachings: [
      `Anxiety is the dizziness of freedom.`,
      `Life can only be understood backwards; but it must be lived forwards.`,
      `The most common form of despair is not being who you are.`,
      `To dare is to lose one's footing momentarily. Not to dare is to lose oneself.`,
      `Faith sees best in the dark.`
    ],
    reaction: [
      `Kierkegaard was barely read outside Denmark in his lifetime. Local critics mocked his pseudonymous antics; the established church resented his attacks. When he died, he was a Copenhagen oddity — brilliant, disheveled, dead too young. His books sat on dusty shelves for half a century waiting for the world to notice.`,
      `Then in the early 20th century, German theologians and philosophers — especially Karl Barth, Karl Jaspers, and Martin Heidegger — discovered him and began translating him into European thought. By mid-century he was a hero of the existentialist movement. Sartre, Camus, and Tillich all owed him directly, even when their conclusions diverged.`,
      `Today Kierkegaard is canonical in philosophy and theology, but he sits awkwardly in both. Religious thinkers find his attack on institutional Christianity uncomfortable. Secular thinkers find his commitment to faith strange. He is one of those figures who keeps dodging the boxes we'd like to put him in — which, if you read him, is exactly the point.`
    ],
    modern: [
      `Modern psychology has quietly absorbed Kierkegaard. His description of despair as "not being who you are" maps closely onto modern accounts of depression, identity crisis, and burnout. Therapists and existential psychologists like Rollo May and Irvin Yalom built entire practices around his insights into anxiety, choice, and meaning.`,
      `In an age of social media, his diagnosis of "the crowd" — the way mass opinion absorbs the individual and dilutes responsibility — reads like a 21st-century essay. "The crowd is untruth," he wrote. Anonymous mobs, viral pile-ons, and groupthink algorithms all illustrate his point. Becoming an individual, taking responsibility for your own thoughts, is harder than ever — and more urgent.`,
      `Most personally, Kierkegaard offers a haunting question: are you living your life, or just running through it? The grades, the jobs, the relationships, the opinions — did you choose them, or did they choose you? Sitting with that question, even briefly, is uncomfortable. He thought that discomfort was where being a person actually starts.`
    ]
  },
  {
    id: 'marx',
    name: 'Karl Marx',
    title: 'The Hammer of History',
    era: '19th Century',
    born: 1818,
    died: 1883,
    birthPlace: 'Trier, Prussia',
    emoji: '⚒️',
    color: '#dc2626',
    portrait: 'images/marx.jpg',
    keyWorks: ['The Communist Manifesto', 'Das Kapital', 'The German Ideology', 'Economic and Philosophic Manuscripts of 1844'],
    hook: `A bushy-bearded German exile sits in the British Library, broke, mourning a son who died of poverty, writing a book that he believes will explain — and end — the entire system of capitalism.`,
    kid: `Marx looked at factories in the 1800s and saw something disturbing: workers worked all day for pennies, while factory owners got rich off their work. He believed that wasn't an accident — it was how the whole system was built. He thought one day the workers would notice, get organized, and change everything. He was right that they'd notice. He was less right about what would happen next.`,
    adult: `Karl Marx is the most consequential philosopher you can refuse to read in polite company. He combined Hegelian dialectics, British political economy, and French revolutionary politics into a single account of history as the long story of class struggle. He argued that capitalism, however productive, is structurally exploitative and doomed to collapse under its own contradictions, eventually giving way to a classless society. His ideas inspired revolutions, regimes, and reactions for over a century — and remain in furious debate today.`,
    origin: [
      `Karl Marx was born in 1818 in Trier, in western Germany, into a Jewish family that had converted to Lutheranism for legal reasons. He studied law at Bonn, where he reportedly drank, dueled, and racked up debts, before transferring to Berlin to study philosophy under the long shadow of Hegel. He earned a doctorate but his radical politics meant no respectable university would hire him.`,
      `He turned to journalism. As editor of a liberal newspaper in Cologne, he attacked Prussian censorship until the government shut the paper down. He moved to Paris, then Brussels, meeting Friedrich Engels — son of a wealthy industrialist — who became his lifelong collaborator and financial lifeline. In 1848, with revolutions sweeping Europe, they published a pamphlet called The Communist Manifesto. Within months it was banned in most of the continent.`,
      `Expelled from country after country, Marx finally settled in London. He spent decades there in cramped rooms, often unable to afford coal or bread. Three of his children died young, partly from poverty. Yet every weekday morning he sat in the British Library, working through stacks of books, slowly building his masterpiece, Das Kapital. The first volume appeared in 1867. He died in 1883, before finishing the rest.`
    ],
    coreIdeas: [
      `Marx's first big claim is "historical materialism." Don't start with what people think, he said — start with how they make their living. The technology, the labor, the economic structure of a society shape everything else: its politics, its religion, even its art. Change the economic base, and the rest eventually changes too. He inverted Hegel: ideas don't drive history; material conditions and the conflicts they produce do.`,
      `In Das Kapital he diagnosed capitalism with surgical patience. Workers, he argued, produce more value than they're paid for; the difference is "surplus value" that becomes profit for the owners. So capitalism, in his view, is built on a structural exploitation that owners and workers don't even have to notice — it just runs in the machinery. The system is also driven, by competition, to grow forever, swallow everything, and periodically crash.`,
      `He believed history was moving, dialectically, toward a final synthesis. Feudalism gave way to capitalism. Capitalism, by concentrating workers and immiserating them, would eventually produce a working class with the consciousness and organization to overthrow it. The result, he hoped, would be communism — a classless, stateless society where "the free development of each is the condition for the free development of all."`
    ],
    teachings: [
      `The philosophers have only interpreted the world, in various ways; the point is to change it.`,
      `Religion is the sigh of the oppressed creature, the heart of a heartless world, the soul of soulless conditions. It is the opium of the people.`,
      `Workers of the world, unite! You have nothing to lose but your chains.`,
      `The history of all hitherto existing society is the history of class struggles.`,
      `From each according to his ability, to each according to his needs.`
    ],
    reaction: [
      `In Marx's lifetime he was widely read among radicals but ignored by the mainstream. After his death, his ideas exploded. Socialist parties formed across Europe; Russian revolutionaries translated him eagerly. By 1917, Lenin's Bolsheviks seized power in Russia in his name, and over the 20th century, regimes from China to Cuba to Vietnam claimed Marxist inspiration.`,
      `Those regimes, however, mixed his theories with brutal authoritarian practice. Stalin's purges, Mao's Cultural Revolution, the Khmer Rouge's genocide — all carried out under banners citing Marx — killed tens of millions. Defenders argue these were betrayals of his vision; critics argue the seeds were already planted. Either way, "Marxist" became a word soaked in blood as well as hope.`,
      `In academia, Marx never went away. After the Cold War, his economic theories were widely written off. After the 2008 financial crisis, sales of Das Kapital spiked again. Today, some of the sharpest critiques of inequality, climate breakdown, and corporate power borrow heavily from Marx, even when authors avoid his name.`
    ],
    modern: [
      `Almost every modern conversation about inequality, exploitation, and the power of capital traces back, knowingly or not, to Marx. Discussions of "wage theft," "the 1%," "late capitalism," "alienation at work," and "ideology" are using Marxist vocabulary, often without quotation marks. He gave us the language to see economic structures as moral structures.`,
      `His diagnosis of alienation — the feeling of being estranged from your own work, your products, and your own creative powers — speaks loudly to modern workers in call centers, warehouses, and content factories. Whether you accept his solutions or not, his description of why a job can feel soul-crushing even when it pays bills remains uncomfortably accurate.`,
      `Politically, the world is still arguing about the questions Marx forced open. How much inequality is too much? Who should own what? What do workers owe owners and vice versa? Should markets be tamed, replaced, or trusted? Whatever you answer, you are working in territory he charted. Loving him or hating him, you are downstream.`
    ]
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    title: 'The Dynamite of Modern Thought',
    era: '19th Century',
    born: 1844,
    died: 1900,
    birthPlace: 'Röcken, Prussia',
    emoji: '⚡',
    color: '#be123c',
    portrait: 'images/nietzsche.jpg',
    keyWorks: ['Thus Spoke Zarathustra', 'Beyond Good and Evil', 'On the Genealogy of Morals', 'The Gay Science'],
    hook: `A migraine-ridden, half-blind ex-professor wanders the Alps writing fierce, beautiful, dangerous books announcing the death of God, then watches a horse get whipped in a Turin square and never speaks coherently again.`,
    kid: `Nietzsche thought modern people were pretending. They didn't really believe in God anymore, but they kept the rules and habits of religion as if nothing had changed. He yelled at us to wake up. If God is gone, he said, then we have to invent our own meaning, our own values, our own selves — bravely, like artists making a sculpture out of stone. He wanted us to live boldly, not shyly.`,
    adult: `Friedrich Nietzsche is the philosopher who pulled the curtain back on modernity. He announced that the cultural fact of his age — the slow death of religious belief — left a vacuum that science alone could not fill. He attacked traditional morality as a disguised form of resentment, called for a transvaluation of all values, and dared his readers to create themselves rather than inherit their lives. His prose is among the most beautiful in philosophy, his diagnoses among the most uncomfortable, and his afterlife among the most contested.`,
    origin: [
      `Nietzsche was born in 1844 in a small Prussian village, the son of a Lutheran pastor who died young. He was raised by women — his mother, sister, and aunts — in a strict religious household. He was a brilliant student, especially in classics. By his mid-twenties he was a tenured professor of philology at Basel — the youngest in Europe — without even finishing his doctorate.`,
      `He was a ferocious thinker but a fragile body. Migraines, eye problems, and stomach pain hounded him for decades. He resigned from his professorship in his thirties on health grounds and spent the rest of his productive life as a freelance philosopher, wandering between Italy, Switzerland, and France, often living in cheap rooms, writing in notebooks during long mountain walks.`,
      `In January 1889, in Turin, Nietzsche saw a coachman whipping a horse. He ran across the square, threw his arms around the horse's neck, sobbed, and collapsed. He never recovered. For the next eleven years he lived in increasing mental darkness, looked after by his mother and then his sister, who edited and distorted some of his work after his death. He died in 1900.`
    ],
    coreIdeas: [
      `Nietzsche's most famous declaration is "God is dead." He didn't celebrate it; he warned about it. For most of European history, the moral order rested on Christian belief. As that belief quietly evaporated under the weight of science and skepticism, the values built on top of it — meaning, purpose, dignity — were left dangling. We had not yet faced the void. We pretended nothing had changed. He thought this self-deception would haunt the modern world for centuries.`,
      `He attacked traditional morality with a tool he called "genealogy." He argued that what we now call good and evil began as the resentment of the weak against the strong: those who could not get what they wanted relabeled their inability as virtue. He didn't claim master morality was simply right. He wanted us to see how morals are made, by whom, and at what cost — and then choose more honestly.`,
      `In place of inherited values he urged "self-overcoming" and the figure of the Übermensch — the "overhuman," a person who creates their own values rather than copying them. He praised "amor fati," the love of fate: the courage to embrace your life so completely that you would happily live it again, in detail, infinitely. Most modern people, he thought, run from their lives. He wanted them to embrace them.`
    ],
    teachings: [
      `He who has a why to live can bear almost any how.`,
      `Without music, life would be a mistake.`,
      `That which does not kill us makes us stronger.`,
      `One must still have chaos in oneself to be able to give birth to a dancing star.`,
      `Become who you are.`
    ],
    reaction: [
      `In his lifetime Nietzsche was barely read. His books sold poorly; for years he paid for printing himself. After his collapse, his sister Elisabeth, a German nationalist with anti-Semitic sympathies, took control of his estate. She edited his unpublished notes into a book called The Will to Power, distorting his ideas to align with the political movements she favored.`,
      `When the Nazis rose to power in the 1930s, they appropriated Nietzsche aggressively, despite the fact that he had openly mocked anti-Semites and German nationalism. Hitler visited Nietzsche's archive; his sister gave him a tour. After World War II, Nietzsche's reputation was poisoned for decades. Postwar scholars like Walter Kaufmann had to spend careers carefully untangling him from the Nazi misreading.`,
      `Today Nietzsche has been thoroughly rehabilitated as one of the most original thinkers of the modern era. Postmodernists, existentialists, feminists, and even some conservatives all draw on him in different ways. His warnings about nihilism, his suspicion of mass psychology, and his demand for self-creation feel newly urgent in our digital age.`
    ],
    modern: [
      `Modern conversations about meaning, identity, and self-creation are saturated with Nietzsche even when no one mentions him. The idea that you have to "find yourself," "create your own meaning," or "live authentically" — whether spoken by a self-help guru or a therapist — descends from his demand that modern people become artists of their own lives.`,
      `His diagnosis of resentment, what he called ressentiment, has become a key tool for analyzing modern politics. Both populist movements and progressive movements have been read through this lens — the suspicion that some moral postures are powered less by love of justice than by anger at being unable to be the thing one secretly admires. Whether or not you agree, the lens keeps producing painful insight.`,
      `Most personally, Nietzsche keeps asking: are you actually living, or just performing the role someone else wrote? Are your values yours, or did you inherit them without inspection? Could you, in honesty, embrace your life enough to live it again? Few questions are this uncomfortable. Few are this clarifying.`
    ]
  },
  {
    id: 'freud',
    name: 'Sigmund Freud',
    title: 'The Cartographer of the Hidden Mind',
    era: '20th Century',
    born: 1856,
    died: 1939,
    birthPlace: 'Freiberg, Moravia (modern Czech Republic)',
    emoji: '🌙',
    color: '#4338ca',
    portrait: 'images/freud.jpg',
    keyWorks: ['The Interpretation of Dreams', 'Civilization and Its Discontents', 'The Ego and the Id', 'Three Essays on the Theory of Sexuality'],
    hook: `A Viennese doctor with a cigar and a couch listens to anxious patients tell him their dreams and convinces the world that beneath every polite human there is a roaring, wounded animal we barely know.`,
    kid: `Freud believed your mind is like an iceberg. The part you can see — your thoughts and decisions — is just the tip. Underneath is a huge hidden part full of forgotten memories, secret wishes, and feelings you don't even know you have. He thought lots of our weird behavior — slips of the tongue, scary dreams, sudden moods — comes from down there. He invented a way to listen to it: just talk, freely, and see what surfaces.`,
    adult: `Sigmund Freud was not strictly a philosopher, but he reshaped 20th-century thought as deeply as any thinker since Aristotle. He argued that human behavior is largely driven by an unconscious mind we cannot directly access — full of repressed desires, unresolved childhood conflicts, and powerful drives. By treating mental life as something that could be investigated through dreams, jokes, slips, and free association, he founded psychoanalysis and gave the modern world its core vocabulary for the inner life.`,
    origin: [
      `Sigmund Freud was born in 1856 in a small Moravian town, the eldest of his mother's children in a struggling Jewish family. They moved to Vienna when he was four, and Vienna shaped him for the rest of his life. He was a brilliant student — fluent in seven languages by his teens — and originally wanted to become a research scientist studying the nervous system.`,
      `Practical pressures pushed him into medicine. He trained as a neurologist and began treating patients with what was then called "hysteria" — strange physical symptoms with no clear physical cause. Working with cases like the famous "Anna O.," he became convinced that buried emotional traumas, hidden from the patient's own awareness, were producing the symptoms. Letting patients talk freely about whatever came to mind seemed to relieve them.`,
      `From these clinical observations grew his life's project: psychoanalysis. He published The Interpretation of Dreams in 1899, the founding text of the field. For decades he held weekly meetings with a small group of disciples that included Carl Jung, Alfred Adler, and Sándor Ferenczi. When the Nazis annexed Austria in 1938, he was 82 and seriously ill with cancer. He fled to London, where he died the following year.`
    ],
    coreIdeas: [
      `Freud's first big claim is the unconscious. Most of mental life, he argued, takes place outside awareness. Wishes too painful or socially unacceptable to face are pushed below the surface — but they don't disappear. They leak out in dreams, slips of the tongue, neurotic symptoms, and irrational reactions. Talk therapy, in his view, is the slow work of bringing those buried contents into the light.`,
      `He proposed a structural model of the mind: id, ego, and superego. The id is raw appetite and impulse, present from birth. The superego is the internalized voice of parents and society — the moral cop in your head. The ego is the negotiator, juggling between them and reality, often badly. Most psychological suffering, Freud thought, comes from these three pieces tearing each other apart.`,
      `He insisted on the importance of childhood. The first six or seven years, he argued, set patterns of love, fear, and authority that shape the rest of life. We don't outgrow childhood; we keep replaying it in our adult relationships. His specific theories — the Oedipus complex, the stages of development — are heavily contested today, but the larger claim that early experience matters enormously is now mainstream developmental psychology.`
    ],
    teachings: [
      `Sometimes a cigar is just a cigar.`,
      `One day, in retrospect, the years of struggle will strike you as the most beautiful.`,
      `Out of your vulnerabilities will come your strength.`,
      `Being entirely honest with oneself is a good exercise.`,
      `Where id was, there ego shall be.`
    ],
    reaction: [
      `Psychoanalysis spread quickly and became, for much of the 20th century, the dominant framework for understanding the mind in Europe and especially the United States. By the 1950s, having an analyst was a status symbol in some American cities. Hollywood made movies about it. New Yorker cartoons mocked it. It was everywhere.`,
      `Then a backlash came. Empirical psychology and pharmacology challenged the lack of clinical evidence behind many of Freud's specific claims. Feminist critics — many of them sympathetic to him in other ways — challenged his accounts of female sexuality and his patriarchal assumptions. By the 1990s, psychoanalysis had been pushed to the margins of mainstream psychology, although it remained vital in literature, film studies, and continental philosophy.`,
      `Today Freud's standing is mixed. Few researchers accept his specific theories wholesale. But his broader contributions — that early experience shapes adults, that there is mental life outside awareness, that talking helps, that defenses and projections distort our perceptions — are largely confirmed and have become common sense.`
    ],
    modern: [
      `Almost every word we use about minds today owes something to Freud. "Repressed," "in denial," "ego," "unconscious," "Freudian slip," "projection," "sublimation" — these are now basic vocabulary, used by people who have never read a page of him. He didn't just describe the mind; he gave us the language we use to describe it.`,
      `Modern therapy in all its forms — cognitive behavioral therapy, attachment-based therapy, internal family systems, even self-help apps — accepts the basic Freudian insight that what we don't examine controls us, and that putting feelings into words helps. The specific technique varies; the underlying premise is his.`,
      `His most uncomfortable contribution may be his pessimism about civilization. In Civilization and Its Discontents, he argued that human happiness is in chronic tension with the demands of living together. We trade some instinct for safety; the trade is necessary but never quite enough. In an age of polished social media selves and rising anxiety, that diagnosis still cuts.`
    ]
  },
  {
    id: 'sartre',
    name: 'Jean-Paul Sartre',
    title: 'The Apostle of Freedom',
    era: '20th Century',
    born: 1905,
    died: 1980,
    birthPlace: 'Paris, France',
    emoji: '🚬',
    color: '#334155',
    portrait: 'images/sartre.jpg',
    keyWorks: ['Being and Nothingness', 'Existentialism Is a Humanism', 'No Exit', 'Nausea'],
    hook: `A short, walleyed Parisian philosopher chain-smokes through Nazi-occupied cafes, joins the Resistance, and emerges to write that humans are condemned to be free — radically responsible for inventing themselves, with no excuses left.`,
    kid: `Sartre believed humans are different from rocks and chairs because we don't have a "purpose" baked in. A knife is made to cut. A rock is made of stuff. But you? You aren't made for anything in particular. You exist first, and then you decide what to be — over and over, for your whole life. That can be scary, because you can't blame anyone else. But it also means you're free.`,
    adult: `Jean-Paul Sartre is the public face of 20th-century existentialism. He argued that for human beings, "existence precedes essence" — we are not born with a fixed nature; we make ourselves through choices. With that freedom comes total responsibility. His philosophy ran headlong into politics: he engaged with Marxism, supported anti-colonial movements, and lived publicly with Simone de Beauvoir as one of the most famous intellectual couples of the century.`,
    origin: [
      `Sartre was born in 1905 in Paris. His father died of fever when he was a baby. He was raised by his mother and his domineering grandfather, a German-language professor. As a child Sartre buried himself in books — by his own account, words gave him a sense of life that the actual world did not. He was small, walleyed, and acutely aware of being not-handsome, which colored much of his later writing about being seen by others.`,
      `He studied at the elite École Normale Supérieure in Paris, where he met Simone de Beauvoir in 1929. They became lifelong intellectual partners — never married, openly maintaining other relationships, but bound by a "pact" of total honesty that lasted until his death. They read, edited, and challenged each other's work for decades.`,
      `Drafted into the French army in 1939, he was captured by the Germans and spent nine months as a prisoner of war. The experience radicalized him. After his release, he joined the Resistance, edited underground newspapers, and after the war emerged as the most famous philosopher in France. He turned down the Nobel Prize for Literature in 1964, refusing on principle to be officially institutionalized.`
    ],
    coreIdeas: [
      `Sartre's slogan is "existence precedes essence." For a knife, essence comes first — a knife is designed for cutting before it is built. For a human, he argued, there is no designer and no blueprint. We exist first, then we have to choose what to make of our existence. There is no fixed human nature waiting to be discovered, only a long succession of choices that, taken together, become a life.`,
      `From this freedom comes radical responsibility. We cannot blame our genes, our parents, society, or God for who we are — we always could have chosen otherwise, and even refusing to choose is itself a choice. Most people flee this, he said, by living in "bad faith" — pretending to be more determined or constrained than they really are, hiding from the freedom that terrifies them.`,
      `His other haunting analysis is "the look." When you become aware that another person is watching you, you suddenly feel yourself become an object in their world. He explored this in his play No Exit, where three characters trapped in a hotel room realize their hell is each other. "Hell is other people" doesn't mean other people are evil. It means living perpetually under their gaze, becoming what they see, can be its own kind of damnation.`
    ],
    teachings: [
      `Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.`,
      `Hell is other people.`,
      `Life has no meaning the moment you lose the illusion of being eternal.`,
      `Freedom is what you do with what's been done to you.`,
      `Words are loaded pistols.`
    ],
    reaction: [
      `Sartre's existentialism became a postwar cultural sensation. Black turtlenecks, Left Bank cafes, jazz, Gauloises cigarettes — all became the visual shorthand for his philosophy. Lectures filled to overflowing. Editions of Being and Nothingness sold by the thousands to people who, perhaps, never finished it. Existentialism briefly became a vibe as much as a doctrine.`,
      `Politically Sartre was prolific and controversial. He flirted with Marxism, broke with the French Communist Party over Soviet repression, supported Algerian independence at great personal cost, opposed American involvement in Vietnam, and visited revolutionary leaders from Cuba to Egypt. Conservatives loathed him. Many on the left criticized him for being soft on Soviet abuses. He kept writing, smoking, and arguing through it all.`,
      `Later 20th-century thinkers — structuralists, postmodernists, analytic philosophers — pushed back against him. Some thought his focus on individual choice ignored the deep structures of language and power. Others thought his prose was too theatrical for serious philosophy. Yet his core insistence — that we are responsible for what we make of ourselves — has refused to die.`
    ],
    modern: [
      `Modern self-help, career coaching, and therapy are saturated with watered-down Sartre. "You are responsible for your life." "No one else can choose for you." "Stop making excuses." "Own your story." All of these would have made Sartre roll his eyes at the packaging — but the underlying conviction is his.`,
      `In a world of identity politics, his analysis cuts both ways. Sartre would insist that being marked by class, race, gender, or sexuality is real and shaping — but also that no label is the final word on who you are. The freedom to take responsibility for what you make of your situation, rather than being only what others see, is for him the essence of being human.`,
      `Most personally, Sartre's challenge is unflinching: stop hiding. Stop pretending you had no choice. Stop blaming. Look at the actual decisions you make, day after day, that add up to your life. The freedom is uncomfortable. It is also, he believed, the only ground from which a real human life can stand.`
    ]
  },
  {
    id: 'beauvoir',
    name: 'Simone de Beauvoir',
    title: 'The Liberator of the Second Sex',
    era: '20th Century',
    born: 1908,
    died: 1986,
    birthPlace: 'Paris, France',
    emoji: '🔥',
    color: '#be185d',
    portrait: 'images/beauvoir.jpg',
    keyWorks: ['The Second Sex', 'The Ethics of Ambiguity', 'The Mandarins', 'Memoirs of a Dutiful Daughter'],
    hook: `A brilliant Parisian intellectual decides to write a small essay on what it means to be a woman, sits in the National Library for two years, and produces an 800-page book that detonates feminism for the rest of the century.`,
    kid: `Beauvoir noticed something strange: when people described "humans," they usually meant men. Women were treated as a kind of side option — defined by what they weren't. She wrote a famous line: "One is not born, but rather becomes, a woman." Meaning, what we call "feminine" isn't built into nature — it's built by societies. And what is built can be rebuilt. That insight changed millions of lives.`,
    adult: `Simone de Beauvoir is one of the most important philosophers of the 20th century, frequently underrated because she lived in the shadow of her partner Sartre. She extended existentialism into ethics and feminism. Her masterpiece, The Second Sex, dissects how women have been historically constructed as "the Other" — defined relative to men — and argues that liberation requires women claiming the freedom and ambiguity that existentialism grants every human being. She is, in many ways, the founder of modern feminist philosophy.`,
    origin: [
      `Simone de Beauvoir was born in 1908 in Paris into a Catholic family that fell into financial difficulty. She lost her religious faith as a teenager and turned, with intense seriousness, to philosophy and literature. She passed the brutal aggregation exam in philosophy in 1929 — placing second only to Sartre. They met during the exam preparation. She was 21, he was 24.`,
      `For most of her life Beauvoir was a writer, teacher, and editor. She and Sartre never married, lived in separate apartments, and maintained an unconventional partnership of "essential" and "contingent" loves. She taught philosophy at high schools across France until she lost her teaching job in 1943, after which she lived entirely off her writing.`,
      `In 1949 she published The Second Sex. The book was condemned by the Vatican, ridiculed by some male intellectuals, and devoured by women across France and, soon, the world. It became one of the foundational texts of second-wave feminism. She continued writing — novels, memoirs, philosophical essays — until her death in 1986. She is buried with Sartre in Montparnasse Cemetery.`
    ],
    coreIdeas: [
      `Beauvoir's most famous sentence is "one is not born, but rather becomes, a woman." She didn't deny biological differences. She argued that the social meaning of being a woman — passive, dependent, defined by relation to men — is not a fact of nature but a long historical construction. Strip away the construction, and a woman is, like every human, a free being condemned to choose what to make of her life.`,
      `She extended existentialism into a working ethics. Sartre had emphasized radical individual freedom; Beauvoir asked what to do once you realize others have that same freedom. In The Ethics of Ambiguity, she argued that authentic life means willing your own freedom and the freedom of others at the same time. Treating other people as mere objects in your project — even unconsciously — is, in her vocabulary, the opposite of being free.`,
      `She was a sharp analyst of how oppression works. The oppressed are not just hurt physically and economically — they are taught, slowly and steadily, to see themselves through the oppressor's eyes. Real liberation, then, is not just political; it requires women, and any group treated as "the Other," to refuse the inner role assigned to them and reclaim their own subjectivity.`
    ],
    teachings: [
      `One is not born, but rather becomes, a woman.`,
      `Change your life today. Don't gamble on the future, act now, without delay.`,
      `To will oneself free is also to will others free.`,
      `I tore myself away from the safe comfort of certainties through my love for truth — and truth rewarded me.`,
      `Self-knowledge is no guarantee of happiness, but it is on the side of happiness and can supply the courage to fight for it.`
    ],
    reaction: [
      `The Second Sex was an immediate scandal. The Vatican placed it on the Index of Forbidden Books. Many male intellectuals — including some who were her friends — dismissed it as too personal, too long, or simply wrong. Working-class and middle-class women, however, often described reading it as a private earthquake. Letters poured in for years from readers who had recognized themselves in its pages for the first time.`,
      `By the 1960s and 70s, second-wave feminism took up Beauvoir's analysis in earnest. Betty Friedan's The Feminine Mystique, Kate Millett's Sexual Politics, and many other works built on her foundation. Her formulation that gender is "made" rather than "born" prepared the ground for later thinkers like Judith Butler and the entire field of gender studies.`,
      `Critics within feminism have, of course, pushed back. Some have argued that Beauvoir's framework remains too tied to a Western, white, heterosexual experience, and that it underestimates how deeply gender intersects with race, class, and colonialism. Yet most of those critiques are still inside the field she helped found — they sharpen rather than discard her insights.`
    ],
    modern: [
      `Almost every modern conversation about gender — equal pay, reproductive rights, sexual harassment, the social construction of femininity and masculinity — uses tools she sharpened. Women in workplaces noticing the unspoken expectations placed on them; men reflecting on how masculinity was taught to them; activists arguing that "biology is not destiny" — all are working in Beauvoir's wake.`,
      `Her ethical insistence that authentic freedom requires willing the freedom of others is a powerful corrective to a culture of pure self-optimization. You cannot, on her view, be fully free while standing on the necks of others. This idea anchors many modern arguments about social justice, allyship, and ethical leadership.`,
      `Most personally, Beauvoir offers women — and anyone treated by society as "the Other" — a stubborn message: you are not the role you were assigned. Your life is yours to make. The work of unlearning the smaller self you were trained into is hard, lifelong, and absolutely worth doing. Her own life, lived loudly and on her own terms, is its own argument that it can be done.`
    ]
  }
];
