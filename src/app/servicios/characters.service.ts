import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {

    private characters:Character[] = 
    [
        {
          nombre: "Cloud Strife",
          bio: "An arrogant and proud swordsman at first, Cloud introduces himself to Avalanche as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. He later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame, developing compassion for the planet and people he fights to protect. He fights to protect the planet against his nemesis, Sephiroth.",
          img: "assets/img/cloud.png",
          aparicion: "1997-01-31",
          juego:"Final Fantasy VII"
        },
        {
          nombre: "Tifa Lockhart",
          bio: "Tifa grew up with Cloud in Nibelheim, but lost contact with him years ago. When she meets him again, she convinces him to join Avalanche to fight the Shinra Electric Power Company, whom she bears hatred for due to the destruction of their hometown. She supports Cloud as his comrade and helps him and his allies fight Sephiroth. Tifa is reserved and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support. She also serves as the voice of reason grounding them to think things through and do the right thing.",
          img: "assets/img/tifa.png",
          aparicion: "1997-01-31",
          juego:"Final Fantasy VII"
        },
        {
          nombre: "Barret Wallace",
          bio: "Barret fights passionately for his cause to protect the planet. He cares greatly for his allies, motivating them with powerful speeches, while also himself fighting on the front lines of his cell's operations. His seemingly benevolent cause of fighting for the planet is a cover for his personal vendetta and anger, which he later must come to terms with. Despite his brash and sometimes violent attitude, Barret has a good heart, and is torn between fighting and caring for his daughter, Marlene.",
          img: "assets/img/barret.jpg",
          aparicion: "1997-01-31",
          juego:"Final Fantasy VII"
        },
        {
          nombre: "Corvo Attano",
          bio: "The protagonist of Dishonored and one of the two playable protagonists of Dishonored 2. Previously the Royal Protector and secret paramour to Empress Jessamine Kaldwin, Corvo is framed for the Empress's assassination, stripped of his title and imprisoned by the usurper to the throne of the Empire, Lord Regent Hiram Burrows. Corvo escapes and becomes a vigilante assassin for the Loyalist Conspiracy, using the powers granted to him by the Outsider to eliminate Burrows' confederates, clear his name, avenge the Empress' death and restore their abducted daughter Emily to the throne.",
          img: "assets/img/corvo.jpg",
          aparicion: "2012-10-09",
          juego:"Dishonored"
        },
        {
          nombre: "Booker Dewitt",
          bio: "The protagonist of BioShock Infinite. He is a private investigator and, prior to his reluctant arrival in Columbia, a former soldier and Pinkerton agent. Booker is offered a deal to wipe away his debts if he goes to Columbia and retrieves a girl imprisoned there. Over the course of the story, Booker reveals his past experiences and shows his ability to make decisions independent of the player. Unlike Jack and Subject Delta, Booker has his own personality rather than being a silent and faceless avatar for the player.",
          img: "assets/img/booker.jpg",
          aparicion: "2013-03-26",
          juego:"Bioshock Infinite"
        },
        {
          nombre: "Leon S. Kennedy",
          bio: "An American Federal Agent currently employed with the Division of Security Operations (D.S.O.), a counterterrorism agency with direct Presidential oversight. Kennedy is a known survivor of the 1998 Raccoon City Destruction Incident, then as a police officer. Following his escape, he was offered a job in a US-STRATCOM team devoted to anti-B.O.W. combat, and served it until 2011 in repeated operations around the world.",
          img: "assets/img/leon.png",
          aparicion: "1998-01-21",
          juego:"Resident Evil 2"
        },
        {
          nombre: "Lucifer",
          bio: "The eighth demon encountered in Helltaker. She takes the role as the queen of Hell, and has the same title- CEO of Hell.",
          img: "assets/img/lucifer.jpg",
          aparicion: "2020-05-11",
          juego:"Helltaker"
        },
        {
          nombre: "Wander",
          bio: "The protagonist of Shadow of the Colossus. A young man with a clouded past, he travels to the Forbidden Lands on horseback in order to resurrect a girl named Mono. Dormin, a mysterious voice presiding over the Lands' central shrine, gives Wander a deal: if he can slay the sixteen colossi that reside in the Lands, Mono will be resurrected.",
          img: "assets/img/wander.jpg",
          aparicion: "2005-10-18",
          juego:"Shadow of the Colossus"
        },
        {
          nombre: "Sekiro",
          bio: "A shinobi who serves Kuro, the Divine Heir. He is highly skilled, with many combat arts and abilities at his disposal, and mastery of blocking, deflecting and attacking. Along with excellent vision and hearing, he is able to sneak around and perform effective Deathblows on Enemies. At the start of this story, he is defeated by Ashina's commander, Genichiro, losing both the Divine Heir and  his left arm, which is later replaced by the Shinobi Prosthetic. “The Lord is absolute, protect with your life” is the principle by which shinobi live. The law demands rescue, and vengeance.",
          img: "assets/img/sekiro.png",
          aparicion: "2019-03-22",
          juego:"Sekiro: Shadows Die Twice"
        },
        {
          nombre: "Ezio Auditore",
          bio: "Ezio was a Florentine nobleman during the Renaissance, and, unbeknownst to most historians and philosophers, a Master Assassin and the Mentor of the Italian Brotherhood of Assassins, a title which he held from 1503 to 1513. He is also an ancestor of William and Desmond Miles, as well as Clay Kaczmarek.",
          img: "assets/img/ezio.png",
          aparicion: "2009-11-17",
          juego:"Assassin's Creed II"
        },
        {
          nombre: "Lara Croft",
          bio: "Lara Croft is an English archaeologist, treasure hunter and tomb raider. Born to an aristocratic family, Lara is generally disinterested in upper class society, finding it stifling and boring. She takes far more interest in delving into the secrets of the past and finding what is believed to not even exist.",
          img: "assets/img/lara.jpg",
          aparicion: "1996-10-25",
          juego:"Tomb Raider"
        },
        {
          nombre: "2B",
          bio: "YoRHa No.2 Type B (Battle) or 2B serves as the protagonist of Route A in NieR:Automata. She is a YoRHa android created to battle the machine lifeforms that have invaded the planet on behalf of the surviving humans. She served during the 14th Machine War. 2B is an all-purpose battle android, deployed as a member of the automated YoRHa infantry. She is equipped with a multitude of weapons for close quarters combat and can attack from range using the Pod support system. Her eyes are obscured beneath her standard-issue military visor, which she rarely removes.",
          img: "assets/img/2b.jpg",
          aparicion: "2017-02-23",
          juego:"NieR: Automata"
        },
        {
          nombre: "Arthur Morgan",
          bio: "Arthur Morgan is a main character and is the protagonist of Red Dead Redemption 2 until his death at the end of the sixth chapter. He was part of Dutch van der Linde's gang until the falling out due to each other's trust decreasing.",
          img: "assets/img/arthurmorgan.jpg",
          aparicion: "2018-10-26",
          juego:"Red Dead Redemption 2"
        },
        {
          nombre: "Artorias",
          bio: "Knight Artorias was one of the four Knights of Gwyn, the commanding knights of Lord Gwyn's army. Artorias had an unbendable will of steel, which both helped and fed his hatred for servants of the Dark, particularly the Darkwraiths of Kaathe.",
          img: "assets/img/artorias.jpg",
          aparicion: "2011-09-22",
          juego:"Dark Souls"
        },
        {
          nombre: "Marcus Fenix",
          bio: "Sergeant Marcus Michael Fenix ES is a former Gear soldier in the Coalition of Ordered Governments army. A legendary war hero, Marcus served with distinction in the Pendulum Wars, which earned him the Embry Star, the COG's highest military award, for his actions during the Battle of Aspho Fields. He is also a convicted coward for his actions at the Battle of Ephyra. Like the rest of humankind, he saw everything change on Emergence Day. Marcus bravely fought against the Locust for ten years until the Battle of Ephyra, where he abandoned his post to rescue his father, Professor Adam Fenix, but could not reach him in time. With his father presumed dead, Marcus was tried for dereliction of duty and sentenced to 40 years in Jacinto Maximum Security Prison. He was incarcerated for four years before being released by his longtime friend, Dominic Santiago. Marcus was later promoted to replace Lt. Minh Young Kim after the squad leader's death. Along with the rest of Delta Squad, he successfully detonated the Lightmass Bomb and destroyed much of the Locust Hollow. With his reputation restored, Marcus continued fighting against the Locust, culminating in the Sinking of Jacinto. After the COG moved to Vectes, Marcus fought against Stranded insurgents and the rising threat of the Lambent. After the COG collapsed under the constant struggle to survive, Marcus and the rest of Delta banded together with other Gears and civilians aboard the CNV Sovereign, seeking a way to survive in the new world. Eighteen months later, Chairman Prescott returned with the startling news that his father was alive. Marcus led humanity to victory over the Locust and the Lambent, but was at a loss of what to do next after losing both his father and Dom along the way. He was in a relationship with Anya Stroud, and was the father of James Fenix.",
          img: "assets/img/marcus.jpg",
          aparicion: "2006-11-07",
          juego:"Gears of War"
        },
        {
          nombre: "Miranda Keyes",
          bio: "Miranda Keyes, born Miranda Halsey, was a Commander in the UNSC Navy. Keyes served as the commanding officer of both the UNSC In Amber Clad as well as the UNSC Forward Unto Dawn and was the commander of the Human expedition force to Installation 00 in late 2552. She was the daughter of the late Captain Jacob Keyes and Doctor Catherine Halsey.",
          img: "assets/img/mirandakeyes.jpg",
          aparicion: "2004-11-09",
          juego:"Halo 2"
        },
        {
          nombre: "Avery Johnson",
          bio: "A senior non-commissioned officer of the UNSC Marine Corps who served during in the fight against the Insurrection and the Human-Covenant War. Johnson was a highly trained marine, who also served with various units of the Naval Special Warfare Command, most notably the highly classified ORION Project, the UNSC's first super-soldier program.",
          img: "assets/img/sgtjohnson.png",
          aparicion: "2001-11-15",
          juego:"Halo: Combat Evolved"
        },
        {
          nombre: "Raphael Ambrosius Costeau",
          bio: "Detective Raphaël Ambrosius Costeau -- when you say it, it feels like you're taking a bite of lemon meringue while sitting on the terrace of a seaside cafe. On a cool summer day. In Sur-La-Clef. It's everything you're *not*. You haven't created many things during your stay in Martinaise, but you've created this. A fancy, sophisticated name that makes you sound intelligent. And that no one seems to *acknowledge*. Don't you feel like you deserve a reward for coming up with something so special? And what would that reward *be*?",
          img: "assets/img/raphael.jpg",
          aparicion: "2019-10-15",
          juego:"Disco Elysium"
        },
        {
          nombre: "Sam Porter Bridges",
          bio: "Sam was born on November 9, to Clifford Unger and Lisa Bridges. In an effort to save his unborn son after Lisa was rendered brain dead in an accident, Cliff willingly placed Sam under the care of Bridges scientists conducting bridge baby experiments, but did so unaware of their true intentions: to use Sam as a sacrificial foundation for a new communications network as the first proper bridge baby. Upon learning of such from an old comrade and friend, Cliff attempted to abduct Sam from a Bridges facility, but was gunned down in the process, resulting in his and Sam's deaths. On the Beach, Sam was healed and brought back to life by Amelie, who bestowed to him the ability of repatriation. No longer viable as a bridge baby by virtue of being a repatriate, he was taken into Bridget's care and raised as her son, Sam Strand. However, his revival upset the balance of life and death, triggering the Death Stranding.",
          img: "assets/img/sam.jpg",
          aparicion: "2019-11-08",
          juego:"Death Stranding"
        },
        {
          nombre: "Captain John Price",
          bio: "Captain John Price, callsign Bravo Six, is a British special forces sniper and the main protagonist of the Modern Warfare franchise (Call of Duty 4: Modern Warfare/Modern Warfare Remastered, Call of Duty: Modern Warfare 2/Modern Warfare 2 Campaign Remastered and Call of Duty: Modern Warfare 3). He is also a main character appearing in Call of Duty Online and Call of Duty: Heroes. He is a member of the British SAS and often wears a boonie hat during field operations.",
          img: "assets/img/price.jpg",
          aparicion: "2007-11-06",
          juego:"Call of Duty 4: Modern Warfare"
        },
        {
          nombre: "Simon 'Ghost' Riley",
          bio: "Lieutenant Simon 'Ghost' Riley is a British special forces operator, and a prominent member of Task Force 141, known for his iconic skull-patterned balaclava, headset, and dark red sunglasses. Ghost appears as a main character in Call of Duty: Modern Warfare 2, Modern Warfare 2: Ghost, Call of Duty: Online, Find Makarov: Operation Kingfish, Call of Duty: Heroes, and Call of Duty: Modern Warfare 2 Campaign Remastered. He also appears as a customization option in Call of Duty: Ghosts. Ghost was also an unlockable character in Call of Duty: Mobile available after reaching Tier 1 of the Season 1 Premium Battle Pass.",
          img: "assets/img/ghost.jpg",
          aparicion: "2009-11-10",
          juego:"Call of Duty: Modern Warfare 2"
        },
        {
          nombre: "Niko Bellic",
          bio: "The protagonist of Grand Theft Auto IV and a supporting character in The Lost and Damned and The Ballad of Gay Tony. He is also mentioned by Lester Crest and Patrick McReary in Grand Theft Auto V. The player can choose Niko Bellic as their parent model in Grand Theft Auto Online. Niko grew up in SFR Yugoslavia, where he fought in the Yugoslav Wars. He later worked for organized crime syndicates as a hired-gun in Liberty City. Ever since the Yugoslav Wars ended, Niko's main goal in life was to find and kill one of two men: Florian Cravic or Darko Brevic, for one of them betrayed and nearly killed him during the Wars. Niko is the younger cousin of Roman Bellic and the son of Milica Bellic.",
          img: "assets/img/niko.jpg",
          aparicion: "2008-04-29",
          juego:"Grand Theft Auto IV"
        },
        {
          nombre: "Norman Jayden",
          bio: "A dedicated and thorough member of the FBI, sent to aid the police force with the investigation of the Origami Killer. He uses an experimental device called the ARI (Added Reality Interface), which allows him to investigate crime scenes and analyze evidence in an efficient way. He also struggles against his addiction to a fictional drug called Triptocaine and withdrawal.",
          img: "assets/img/norman.jpg",
          aparicion: "2010-02-23",
          juego:"Heavy Rain"
        },
        {
          nombre: "Max Caulfield",
          bio: "The playable protagonist of Life is Strange. She is an 18-year-old aspiring photographer and senior at Blackwell Academy. She left her mom and dad in Seattle for the seaside town of Arcadia Bay, Oregon, where she grew up. After saving her childhood friend Chloe Price from being killed by Nathan Prescott in one of Blackwell Academy's bathrooms, she discovers she has the ability to rewind time and even stop it in its tracks. On the search for clues to solve the mysterious disappearance of Rachel Amber, Max must also discover how to use her powers to save the town of Arcadia Bay from a tornado.",
          img: "assets/img/max.jpg",
          aparicion: "2015-01-30",
          juego:"Life is Strange"
        },
        {
          nombre: "John Marston",
          bio: "John Marston is a recurring character in the Red Dead series, appearing as a central character and the main protagonist of Red Dead Redemption, and as a central character and the secondary protagonist of Red Dead Redemption 2. He is also the main protagonist of the non-canon Undead Nightmare expansion pack.",
          img: "assets/img/john.jpg",
          aparicion: "2010-05-18",
          juego:"Red Dead Redemption"
        },
        {
          nombre: "Dutch van der Linde",
          bio: "Dutch van der Linde is a recurring character in the Red Dead series, appearing as a central character and one of the primary antagonists of Red Dead Redemption, as well as a central character in Red Dead Redemption 2.",
          img: "assets/img/dutch.jpg",
          aparicion: "2010-05-18",
          juego:"Red Dead Redemption"
        },
        {
          nombre: "Jill Valentine",
          bio: "An American Special Operations Agent (SOA) of the Bioterrorism Security Assessment Alliance, of which she is a co-founder and one of the original members in the counter-terrorism organisation, making her a respected high-ranking operator for her commitment in eradicating bioterrorism due to her survival amid to the Biohazardous outbreaks in Arklay County in 1998.",
          img: "assets/img/jill.jpg",
          aparicion: "1996-03-22",
          juego:"Resident Evil"
        },
        {
          nombre: "Chris Redfield",
          bio: "An American operator in the Bioterrorism Security Assessment Alliance, which he has served since its foundation in 2003. Redfield has built up and dedicated his career in destroying Bio Organic Weapons and fighting against producers and sellers of bioweapons after his experiencies with bioterrorism in 1998. He is the older brother of TerraSave member Claire Redfield.",
          img: "assets/img/chris.jpg",
          aparicion: "1996-03-22",
          juego:"Resident Evil"
        },
        {
          nombre: "Claire Redfield",
          bio: "A current member of the human rights organization, TerraSave. She is the younger sister of BSAA operative and former S.T.A.R.S. member Chris Redfield. Since her survival in the Raccoon City incident in 1998, Claire would become involved or end up in the midst of several Biohazard outbreaks around the world, prompting her, as well as Chris, to devote her career to combating the threat of Bio Organic Weapons.",
          img: "assets/img/claire.jpg",
          aparicion: "1998-01-21",
          juego:"Resident Evil 2"
        },
        {
          nombre: "Ada Wong",
          bio: "Ada Wong is the pseudonym of an enigmatic unnamed spy of Asian-American descent who has gained notoriety in the corporate world for being able to handle serious situations and handle the most difficult requests without guilt. She acted secretly in the background of many biohazard incidents and collected information which became useful to several organisations, while at the same time operating to undermine them. However, Ada follows only her own true purpose and has often betrayed the organisations and customers she is affiliated with to achieve it.",
          img: "assets/img/ada.jpg",
          aparicion: "1998-01-21",
          juego:"Resident Evil 2"
        },
        {
          nombre: "Geralt of Rivia",
          bio: "Geralt of Rivia was a legendary witcher of the School of the Wolf active throughout the 13th century. He loved the sorceress Yennefer, considered the love of his life despite their tumultuous relationship, and became Ciri's adoptive father. During the Trial of the Grasses, Geralt exhibited unusual tolerance for the mutagens that grant witchers their abilities. Accordingly, Geralt was subjected to further experimental mutagens which rendered his hair white and may have given him greater speed, strength, and stamina than his fellow witchers. Despite his title, Geralt did not hail from the city of Rivia. After being left with the witchers by his mother, Visenna, he grew up in their keep of Kaer Morhen in the realm of Kaedwen. In the interest of appearing more trustworthy to potential clients, young witchers were encouraged to make up surnames for themselves by master Vesemir. As his first choice, Geralt chose 'Geralt Roger Eric du Haute-Bellegarde', but this choice was dismissed by Vesemir as silly and pretentious, so 'Geralt' was all that remained of his chosen name. 'Of Rivia' was a more practical alternative and Geralt even went so far as to adopt a Rivian accent to appear more authentic. Later, Queen Meve of Lyria knighted him for his valor in the Battle for the Bridge on the Yaruga conferring on him the formal title 'of Rivia', which amused him. He, therefore, became a true knight.",
          img: "assets/img/geralt.jpg",
          aparicion: "2007-10-26",
          juego:"The Witcher"
        },
        {
          nombre: "Liu Kang",
          bio: "He is one of the few original characters, debuting in the first Mortal Kombat arcade game. He serves as the protagonist of Mortal Kombat, Mortal Kombat II, Mortal Kombat 3, Mortal Kombat 4, Mortal Kombat (2011) (co-protagonist), Mortal Kombat 11, the live-action films and the original comic book series. He became the Grand Champion of Mortal Kombat throughout the first four tournaments, a title that remained undisputed in the original timeline.",
          img: "assets/img/liu.jpg",
          aparicion: "1992-06-06",
          juego:"Mortal Kombat"
        },
        {
          nombre: "Kung Lao",
          bio: "A former Shaolin monk and a member of the White Lotus Society. He stands in the shadow of his great ancestor, the Great Kung Lao, but unlike his great ancestor, he has no desire to be champion and would rather live a life of peace. However, this was retconned in MK 2011, wherein Lao is now eager to prove himself equal to Liu Kang. He is also shown to be highly conceited and immature, although these traits mask a deep-seated insecurity and inferiority complex vis a vis Liu Kang. Much like Liu Kang, he has trained under master Bo' Rai Cho. Of the Earthrealm warriors, Lao is the most outspoken pacifist, although he will not hesitate to severely punish those who attack him, Earthrealm, or his friends. His trademark weapon is his Razor-Rimmed Hat, which he can employ quite powerfully and effectively in combat. Many of his fatalities involve the use of his hat to some extent.",
          img: "assets/img/kung.jpg",
          aparicion: "1993-06-25",
          juego:"Mortal Kombat II"
        },
        {
          nombre: "Raiden",
          bio: "A character in the Mortal Kombat fighting game series. Being the eternal God of Thunder, Raiden has been the one the most significant characters in the series along with being one of the most memorable characters in the fighting game genre. Raiden made his debut as one of the few original characters in the first Mortal Kombat game and is the one of the few characters to have appeared in every generation of Mortal Kombat games as a playable character. He has been a major, central character throughout the series.",
          img: "assets/img/raiden.jpg",
          aparicion: "1992-06-06",
          juego:"Mortal Kombat"
        },
        {
          nombre: "Baraka",
          bio: "A general of the Tarkatan Horde, he has served as an antagonist throughout the series, serving Outworld and its Empire while being loyal to the half-Tarkatan Mileena and her father Shao Kahn.",
          img: "assets/img/baraka.jpg",
          aparicion: "1993-06-25",
          juego:"Mortal Kombat II"
        },
        {
          nombre: "Kitana",
          bio: "Princess Kitana is 10,000 years old, but is considered young in her realm of Edenia and has the appearance of a young woman. Throughout the years, she rose to great importance; first as the loyal stepdaughter of Shao Kahn, then as his enemy, tearing herself away from his grasp and freeing her home realm of Edenia. She also led an army into Outworld to combat any chance of Shao Kahn rising to power again.",
          img: "assets/img/kitana.jpg",
          aparicion: "1993-06-25",
          juego:"Mortal Kombat II"
        }
      ];

    constructor() {
        console.log("Service ready to use!");
    }

    getCharacters():Character[]{
        return this.characters;
    }

    getCharacter( idx:string ){
      return this.characters[idx];
    }

    searchCharacters( text:string ):Character[]{

      let charactersArr:Character[] = [];
      text = text.toLowerCase();

      for (let i = 0; i < this.characters.length; i++){

        let character = this.characters[i];

        let charName = character.nombre.toLowerCase();

        if (charName.indexOf( text ) >= 0 ){
          character.id = i;
          charactersArr.push( character );
        }
      }

      return charactersArr;

    }
}

export interface Character{
    nombre: string;
    bio: string;
    img: string; 
    aparicion: string; 
    juego: string;
    id?: number;
};