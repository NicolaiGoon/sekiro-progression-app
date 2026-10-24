/* Route data for Sekiro Route. Loaded by index.html before the app script.
   Area: id, name, sub (subtitle), wiki (Fandom search term for the area).
   Step: id (stable: saved progress depends on it, never rename)
         k: boss | mini | key | go (story step)
         t: title   n: note (shown when the step is expanded)
         opt:1 optional   w: 危 warning (always visible)
         sub: [{id,t}] sub-steps; the step counts as done when every sub-step is done
         wiki: Fandom search term; boss/mini steps default to their title, others to the area's term. */
const ROUTE = [
 {id:"pro", name:"Prologue", wiki:"Ashina Reservoir", sub:"Ashina Reservoir → Dilapidated Temple", steps:[
  {id:"pro1",k:"go",wiki:"Kusabimaru",t:"Climb out of the pit and find Kuro in the Moon-view Tower",n:"Kuro hands you Kusabimaru, your sword."},
  {id:"pro2",k:"mini",opt:1,t:"Leader Shigenori Yamauchi",n:"Samurai general in the reservoir during the escape. Skippable."},
  {id:"pro3",k:"boss",t:"Genichiro Ashina (first fight)",n:"You are meant to lose. The story continues either way."},
  {id:"pro4",k:"key",wiki:"Shinobi Prosthetic",t:"Wake in the Dilapidated Temple and get the Shinobi Prosthetic",n:"The Sculptor fits the arm. Rest at his idol."},
  {id:"pro5",k:"go",wiki:"Hanbei the Undying",opt:1,t:"Practice deflecting on Hanbei the Undying",n:"He never dies, so he is a free sparring partner."}
 ]},
 {id:"out", name:"Ashina Outskirts", wiki:"Ashina Outskirts", sub:"Gate Path → Stairway → Castle Gate", steps:[
  {id:"out1",k:"mini",t:"General Naomori Kawarada",n:"Just past the Outskirts Wall – Gate Path idol. Drops a Prayer Bead."},
  {id:"out2",k:"key",wiki:"Young Lord's Bell Charm",t:"Young Lord's Bell Charm from the Timid Maid",n:"In a house after the Naomori area. Unlocks Hirata Estate.",w:"Grab it now. If the maid dies in the final invasion, Hirata Estate and its items are lost."},
  {id:"out3",k:"mini",t:"Chained Ogre",n:"Outskirts Wall – Stairway. Grapple behind him for free hits."},
  {id:"out4",k:"mini",opt:1,t:"General Tenzen Yamauchi",n:"Past the Chained Ogre, guarding the way to Underbridge Valley."},
  {id:"out5",k:"boss",t:"Gyoubu Masataka Oniwa",n:"Ashina Castle Gate Fortress, on horseback. Two deathblows. Opens the way to the castle."},
  {id:"out6",k:"mini",t:"Blazing Bull",n:"At the doors of Ashina Castle, just past Gyoubu."}
 ]},
 {id:"hir", name:"Hirata Estate", wiki:"Hirata Estate", sub:"Optional memory via the Buddha statue", steps:[
  {id:"hir1",k:"go",wiki:"Young Lord's Bell Charm",t:"Offer the Bell Charm at the temple's Buddha statue",n:"Can be done any time; most players come here before the castle."},
  {id:"hir2",k:"mini",opt:1,t:"Shinobi Hunter Enshin of Misen",n:"Estate Path / Main Hall area."},
  {id:"hir3",k:"key",wiki:"Hidden Temple Key",t:"Hidden Temple Key from Owl",n:"In the burning courtyard past the Bamboo Thicket Slope idol."},
  {id:"hir4",k:"mini",t:"Juzou the Drunkard",n:"Blocks the way to the Audience Chamber. Clear his bandits first."},
  {id:"hir5",k:"boss",t:"Lady Butterfly",n:"Inside the Hidden Temple. Needed later for the Purification ending."}
 ]},
 {id:"cas", name:"Ashina Castle", wiki:"Ashina Castle", sub:"Castle → Reservoir → Upper Tower", steps:[
  {id:"cas1",k:"mini",t:"General Kuranosuke Matsumoto",n:"Top of the stairs past the castle's first idol."},
  {id:"cas2",k:"mini",opt:1,t:"Lone Shadow Masanaga the Spear-Bearer",n:"Great Serpent Shrine, mourning a fallen comrade."},
  {id:"cas3",k:"mini",opt:1,t:"Seven Ashina Spears – Shikibu Toshikatsu Yamauchi",n:"Ashina Reservoir, in front of the Moon-view Tower."},
  {id:"cas4",k:"mini",opt:1,t:"Lone Shadow Longswordsman",n:"Ashina Reservoir, near the well from the prologue."},
  {id:"cas5",k:"mini",opt:1,t:"Ashina Elite – Jinsuke Saze",n:"Upper Tower – Ashina Dojo."},
  {id:"cas6",k:"boss",t:"Genichiro Ashina, Way of Tomoe",n:"Castle Tower Lookout, on the roof. Three phases."},
  {id:"cas7",k:"go",wiki:"Isshin Ashina",t:"Talk to Kuro, then to Isshin about the Mortal Blade",sub:[{id:"cas7a",t:"Talk to Kuro"},{id:"cas7b",t:"Talk to Isshin about the Mortal Blade"},{id:"cas7c",t:"Report back to Kuro"},{id:"cas7d",t:"Exhaust Kuro's dialogue (for Purification)"}]},
  {id:"cas8",k:"key",wiki:"Gun Fort Shrine Key",t:"Gun Fort Shrine Key",n:"In Kuro's library room, which opens after talking to Isshin."}
 ]},
 {id:"sen", name:"Senpou Temple, Mt. Kongo", wiki:"Senpou Temple, Mt. Kongo", sub:"Quest item 1: Mortal Blade", steps:[
  {id:"sen0",k:"go",wiki:"Abandoned Dungeon",t:"Reach Senpou via the Abandoned Dungeon and Bottomless Hole",n:"Tip: visiting before beating Genichiro gets you Holy Chapter: Infested from a monk (Return ending).",sub:[{id:"sen0a",t:"Enter the Abandoned Dungeon"},{id:"sen0b",t:"Go through the Bottomless Hole to Senpou Temple"}]},
  {id:"sen1",k:"mini",opt:1,t:"Shichimen Warrior (Bottomless Hole)",n:"Needs Divine Confetti to hurt it. Fine to skip."},
  {id:"sen2",k:"mini",t:"Armored Warrior",n:"Shugendo bridge. Knock him off the edge."},
  {id:"sen3",k:"mini",opt:1,t:"Long-arm Centipede Sen'un",n:"Temple Grounds, inside the abandoned temple."},
  {id:"sen4",k:"boss",t:"Folding Screen Monkeys",sub:[{id:"sen4a",t:"Ring the bell in the Main Hall"},{id:"sen4b",t:"Enter the Halls of Illusion"},{id:"sen4c",t:"Catch all the monkeys"}]},
  {id:"sen5",k:"key",wiki:"Mortal Blade",t:"Mortal Blade",n:"From the Divine Child in the Inner Sanctum."}
 ]},
 {id:"sun", name:"Sunken Valley", wiki:"Sunken Valley", sub:"Quest item 2: Lotus of the Palace", steps:[
  {id:"sun1",k:"mini",t:"Snake Eyes Shirafuji",n:"Gun Fort. Her gunfire hurts; close the gap fast."},
  {id:"sun2",k:"mini",t:"Long-arm Centipede Giraffe",n:"Inside the Gun Fort shrine (opened by the shrine key)."},
  {id:"sun3",k:"go",wiki:"Great Serpent",t:"Sneak past the Great Serpent",n:"Wait for it to look away, then grapple across."},
  {id:"sun4",k:"boss",t:"Guardian Ape",n:"Bodhisattva Valley. Has a second, headless phase in the same fight."},
  {id:"sun5",k:"key",wiki:"Lotus of the Palace",t:"Lotus of the Palace",n:"In the alcove behind the idol that appears after the Ape."}
 ]},
 {id:"dep", name:"Ashina Depths & Mibu Village", wiki:"Ashina Depths", sub:"Quest item 3: Shelter Stone", steps:[
  {id:"dep1",k:"mini",t:"Snake Eyes Shirahagi",n:"Poison Pool."},
  {id:"dep2",k:"mini",opt:1,t:"Shichimen Warrior (Poison Pool)",n:"Divine Confetti required."},
  {id:"dep3",k:"boss",opt:1,t:"Headless Ape",n:"Ashina Depths, after the Guardian Ape moves there. Needs the Mortal Blade."},
  {id:"dep4",k:"mini",opt:1,t:"Tokujiro the Glutton",n:"Hidden Forest, on the slope behind the Mist Noble's temple."},
  {id:"dep5",k:"mini",t:"Mist Noble",n:"Hidden Forest temple. Killing him lifts the fog to Mibu Village."},
  {id:"dep6",k:"mini",opt:1,t:"O'Rin of the Water",n:"Water Mill, before the Head Priest's house. Divine Confetti required."},
  {id:"dep7",k:"boss",t:"Corrupted Monk",n:"On the bridge near the Wedding Cave Door. Divine Confetti helps."},
  {id:"dep8",k:"key",wiki:"Shelter Stone",t:"Shelter Stone",n:"Inside the Wedding Cave."}
 ]},
 {id:"owl", name:"Ashina Castle, first invasion", wiki:"Ashina Castle", sub:"Owl and the incense", steps:[
  {id:"owl0",k:"go",t:"Return with all three items; the castle is invaded",w:"Only the Abandoned Dungeon Entrance idol works now. Start the Purification and Return quest lines before the Divine Dragon."},
  {id:"owl1",k:"mini",opt:1,t:"Lone Shadow Vilehand",n:"Ashina Dojo, with an Interior Ministry agent."},
  {id:"owl2",k:"go",wiki:"Great Shinobi Owl",t:"Meet Owl on the roof and choose",w:"Obeying the Iron Code locks you into the Shura ending. Break it to continue the full route."},
  {id:"owl3",k:"boss",wiki:"Great Shinobi Owl",t:"Great Shinobi – Owl",n:"Drops the Aromatic Branch."},
  {id:"owl4",k:"key",wiki:"Aromatic Branch",t:"Talk to Kuro and Emma until Kuro makes the incense",n:"Back and forth a few times.",sub:[{id:"owl4a",t:"Talk to Emma right after Owl"},{id:"owl4b",t:"Talk to Kuro and Emma until Kuro makes the incense"},{id:"owl4c",t:"Meet Emma at the Old Grave (Purification)"}]}
 ]},
 {id:"fnt", name:"Fountainhead Palace", wiki:"Fountainhead Palace", sub:"Mibu Village palanquin → Sanctuary", steps:[
  {id:"fnt1",k:"go",wiki:"Fountainhead Palace",t:"Enter the palanquin at the Wedding Cave Door",n:"A creature carries you up to the palace."},
  {id:"fnt2",k:"boss",t:"True Corrupted Monk",n:"Vermilion Bridge. Three phases."},
  {id:"fnt3",k:"mini",opt:1,t:"Sakura Bull of the Palace",n:"Flower Viewing Stage."},
  {id:"fnt4",k:"mini",opt:1,t:"Shichimen Warrior (Fountainhead)",n:"Flower Viewing Stage."},
  {id:"fnt5",k:"mini",opt:1,t:"Okami Leader Shizu",n:"On the Great Sakura; attacks if you dive in the lake."},
  {id:"fnt6",k:"boss",t:"Divine Dragon",n:"Sanctuary. Drops the Divine Dragon's Tears.",w:"Purification and Return steps must be done before this fight."}
 ]},
 {id:"fin", name:"Final invasion", wiki:"Ashina Castle", sub:"Ashina under the Interior Ministry", steps:[
  {id:"fin1",k:"go",wiki:"Kuro",t:"Return to Ashina and find Kuro",w:"Some NPCs die and side quests end here."},
  {id:"fin2",k:"mini",opt:1,t:"Seven Ashina Spears – Shume Masaji Oniwa",n:"Ashina Reservoir, just past the idol."},
  {id:"fin3",k:"mini",opt:1,t:"Ashina Elite – Ujinari Mizuo",n:"Dojo under Isshin's room."},
  {id:"fin4",k:"mini",opt:1,t:"Shigekichi of the Red Guard",n:"Outskirts Wall – Stairway."},
  {id:"fin5",k:"boss",opt:1,t:"Demon of Hatred",n:"Ashina Castle Gate. Three deathblows; toughest optional boss."},
  {id:"fin6",k:"boss",t:"Isshin, the Sword Saint",n:"Ashina Reservoir field. Starts with Genichiro. Four phases."}
 ]},
 {id:"end", name:"Endings", wiki:"Endings", sub:"Pick one; check off what you've done", steps:[
  {id:"end1",k:"go",wiki:"Shura ending",opt:1,t:"Shura",n:"Ends the game early.",sub:[{id:"end1a",t:"Obey the Iron Code at Owl"},{id:"end1b",t:"Defeat Emma and Isshin Ashina"}]},
  {id:"end2",k:"go",wiki:"Immortal Severance",opt:1,t:"Immortal Severance",n:"The default ending.",sub:[{id:"end2a",t:"Beat Isshin, the Sword Saint"},{id:"end2b",t:"Give Kuro the Divine Dragon's Tears"}]},
  {id:"end3",k:"go",wiki:"Ending 3: Purification",opt:1,t:"Purification",sub:[{id:"end3a",t:"Agree with Emma that Kuro must not die"},{id:"end3b",t:"Eavesdrop on Emma and the Sculptor"},{id:"end3c",t:"Get the Father's Bell Charm"},{id:"end3d",t:"Beat Owl (Father) in Hirata Estate"}]},
  {id:"end4",k:"go",wiki:"Return ending",opt:1,t:"Return",sub:[{id:"end4a",t:"Get Holy Chapter: Infested"},{id:"end4b",t:"Cure the Divine Child's illness"},{id:"end4c",t:"Get Holy Chapter: Dragon's Return"},{id:"end4d",t:"Collect both Serpent Viscera"},{id:"end4e",t:"Get the Frozen Tears"}]}
 ]}
];
