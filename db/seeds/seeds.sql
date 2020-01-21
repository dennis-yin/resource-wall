-- Users table seeds here (Example)
INSERT INTO
  users (name, email, password, profile_picture)
VALUES
  (
    'Sanjeet',
    'kang.sanjeet1401@gmail.com',
    '$2b$12$aLApJPB5Nmg5y2ZOmn/W3ue3AVyS1UivBOefUblOvZyZa98Y4LaVK',
    'https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg'
  );

INSERT INTO
  users (name, email, password, profile_picture)
VALUES
  (
    'Dennis',
    'dennis.y95@gmail.com',
    '$2b$12$aLApJPB5Nmg5y2ZOmn/W3ue3AVyS1UivBOefUblOvZyZa98Y4LaVK',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcdbk1Fs7EWlDHH4qsWbyTJJcNIdhRRH_-RV41tAyTpMyL0YE&s'
  );

INSERT INTO
  categories (name)
VALUES
  ('Health');

INSERT INTO
  categories (name)
VALUES
  ('Computing');

INSERT INTO
  categories (name)
VALUES
  ('Biology');

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/blogs/cache/file/354E60B5-D493-4B2D-9B94E7519F03C2E5_source.jpg?w=590&h=800&2A48510A-5A13-4FFE-8EE2A0C31FBA428B',
    'The War on Childhood Obesity Needs a War on Blame',
    'According to a new report recently released by the World Obesity Federation, obesity will affect more than 250 million kids by 2030. While media outlets and newsfeeds continuously remind us of the rising rates of childhood obesity—which have tripled in the past 20 years—far less attention has been paid to the complex solutions needed to address this problem.',
    'https://blogs.scientificamerican.com/observations/the-war-on-childhood-obesity-needs-a-war-on-blame/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/143F582E-D560-4873-8CFE00C1AC097104_source.jpg?w=590&h=800&F5D85CFE-066E-4E49-A34C5F7C026E6C88',
    'Air Pollution: An Unclear and Present Danger',
    'Journalist and author Beth Gardiner talks about her new book Choked: Life and Breath in the Age of Air Pollution. And CRISPR pioneer Jennifer Doudna talks about gene editing.',
    'https://www.scientificamerican.com/podcast/episode/air-pollution-an-unclear-and-present-danger/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/DB21DC7E-B7FE-4046-BFAB5EB46A1FE578_source.jpg?w=590&h=800&D6541ADD-A599-4A8F-814B9ACC22D1509F',
    'Office Workers May Be Breathing Potentially Harmful Compounds in Cosmetics',
    'We often think of pollution as an outdoor problem. But many office workers are constantly breathing a complex soup of invisible airborne substances including ozone, carbon dioxide, particulate matter and volatile organic compounds (VOCs). The latter are gases that can be released from molds, building materials, human metabolism—and personal care products such as lotions, deodorants, hair spray and cosmetics. Some VOCs have been linked to health effects including fatigue, difficulty concentrating, eye, nose and throat irritation, and even cancer. Whether exposure to these substances in offices poses a significant risk to human health remains an open question, however.',
    'https://www.scientificamerican.com/article/office-workers-may-be-breathing-potentially-harmful-compounds-in-cosmetics/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/blogs/cache/file/3E7817EF-5009-43BB-AC5A8AEEFE1812FB_source.jpg?w=590&h=800&E62C8D37-7DB4-4D1E-AB8C932C8CE47E22',
    'Behind the Scenes of a Radical New Cancer Cure',
    'An unexpected early morning phone call from the hospital is never good news. When Joy Johnson answered, her first thought was that Sharon Birzer, her partner of 15 years, was dead. Her fears were amplified by the voice on the other end refusing to confirm or deny it. Just “come in and talk to one of the doctors,” she remembers the voice saying.',
    'https://blogs.scientificamerican.com/observations/behind-the-scenes-of-a-radical-new-cancer-cure/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/2BB6E25B-0739-4A4E-A256583898D64FB6_source.jpg?w=590&h=800&4327FB94-1D6C-4B8F-8ED498A76F24A3D5',
    'Targeting Gut Microbes May Help Stroke Recovery',
    'When a clot blocks off circulation to the brain during an ischemic stroke, the loss of oxygen and nutrients can cause tissue to become damaged and die. Physicians have effective methods of clearing these occlusions: clot-busting proteins called tissue plasminogen activators and thrombectomy, a surgical technique. Removing the blockage is critical, but even after blood flow is restored, complications brought on by inflammation can lead to more cell death. Despite a decades-long search, scientists have yet to pinpoint effective ways of protecting the brain from poststroke damage. In recent years, a new potential player in stroke outcome has emerged: the microorganisms in our guts.',
    'https://www.scientificamerican.com/article/targeting-gut-microbes-may-help-stroke-recovery/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/blogs/cache/file/43A0057B-5F22-46CD-98C13346DFC3415E_source.jpg?w=590&h=800&5B3C3B10-BE9C-4E1C-8458784A122B7099',
    'Blindness in Kashmir',
    'Last August, shortly after India revoked the autonomous status of the disputed Kashmir valley, the British medical journal The Lancet published an editorial expressing concern about the physical and mental health of Kashmiris. Pointing to “gross human rights violations by state security forces and armed groups,” in the region—often described as the world’s most militarized zone—it lamented the suffering of civilians caught between militants and tens of thousands of Indian troops. Human Rights Watch estimates that more than 50,000 people have been killed there since 1989. The “people of Kashmir need healing from the deep wounds of this decades-old conflict, not subjugation to further violence and alienation,” the editors concluded.',
    'https://blogs.scientificamerican.com/observations/blindness-in-kashmir/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/4CD245C9-4A3C-4B9C-8E6A4C8439A6FBBE_source.jpg?w=590&h=800&2054B6BE-6676-4B48-95CCC30CB9674ACF',
    'Americans Die of Antibiotic-Resistant Infections Each Year',
    'An estimated 35,000 Americans die of antibiotic-resistant infections each year—one every 15 minutes—according to a stark new report from the Centers of Disease Control and Prevention that reveals that the problem is substantially greater than previously estimated.

',
    'https://www.scientificamerican.com/article/cdc-report-finds-35-000-americans-die-of-antibiotic-resistant-infections-each-year/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/84FD4554-6A30-4601-91AA4CC97682E2FE_source.jpg?w=590&h=800&C1CC84E1-ED9A-452F-9B04D4DEB312EDDD',
    'First New HIV Strain in 19 Years Identified',
    'A research group at the medical-device and health care giant Abbott has discovered a new strain of human immunodeficiency virus, or HIV—the first to be identified in 19 years. Abbott continues to look for potential new HIV strains to ensure that diagnostic tests for blood screening and detecting infectious diseases remain up to date, says Mary Rodgers, senior author of the paper announcing the finding and head of the company’s Global Viral Surveillance Program.',
    'https://www.scientificamerican.com/article/first-new-hiv-strain-in-19-years-identified/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/D21FB84E-AB52-4E77-BC389EDBBFF36A39_source.jpg?w=590&h=800&E59732C2-1F05-4CAA-B7D893E3232D5CCA',
    'The Straight Dope on CBD',
    'In June 2018 the FDA approved the drug Epidiolex, the first pharmaceutical drug made from cannabidiol (CBD) and intended to treat two very severe forms of epilepsy. The announcement seemed to add to the growing prominence of CBD—although it remains a Schedule I controlled substance in the U.S. In many health food stores and head shops, you can find CBD in everything from body lotion and bath bombs to chocolate and pet treats. A friend recently reported that she spotted CBD-infused condoms while traveling in Amsterdam. CBD is certainly having its moment. It is purported to calm inflammation, anxiety and pain. But the science on the efficacy of CBD is scant. As Amber Dance reports in “CBD: Hype or Promise?” the number of peer-reviewed studies on the compound barely numbers in the dozens. Which is sobering for an industry expected to grow to nearly $15 billion, by some estimates, in the next five years.',
    'https://www.scientificamerican.com/article/the-straight-dope-on-cbd/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/38C9537B-9E04-4E4C-A98FCA3B1B76F89F_source.jpg?w=590&h=800&209D2C01-17DC-472D-9EE2186224928B3D',
    'Literacy Might Shield the Brain from Dementia',
    'Socrates famously railed against the evils of writing. The sage warned that it would “introduce forgetfulness into the soul of those who learn it: they will not practice using their memory because they will put their trust in writing.”

He got a few things wrong. For one, people nurture Socrates’ memory because of all of the books written about him. But he also was off the mark in his musings about a forgetfulness of the soul. If anything, it appears that just the opposite holds: a study of hundreds of illiterate people living at the northern end of an island considered to be a world media capital roundly contradicts the father of Western philosophy.

',
    'https://www.scientificamerican.com/article/literacy-might-shield-the-brain-from-dementia1/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/F72BA9F3-54FA-484D-9F1F66AFF6334DD0_source.jpg?w=590&h=800&9FB7A01F-6071-4E1C-9896BBFF475FE8B6',
    'Alzheimer’s Meeting: Lifestyle Factors Are the Best—and Only—Bet Now for Reducing Dementia Risk',
    'Samuel Gandy became an Alzheimer’s disease researcher in part to help his own family. He watched his mother spiral downward as she lost her memory and then her ability to care for herself.

After that, Gandy, now director of the Center for Cognitive Health at the Icahn School of Medicine at Mount Sinai in New York, thought his research might help prevent a similar fate for himself. Now in his 60s and having watched every single promising drug trial for Alzheimer’s fail, he’s had to give up on that idea, too.

',
    'https://www.scientificamerican.com/article/alzheimers-meeting-lifestyle-factors-are-the-best-and-only-bet-now-for-reducing-dementia-risk/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/blogs/cache/file/18EFB8D8-E579-4DED-8DC5D4F238C77F08_source.jpg?w=590&h=800&D18A4F00-FEDE-48AD-B0C8CC77D7851735',
    'A New Way to Think about Mental Illness',
    'Have you ever heard of a condition known as “general paresis of the insane”? Probably not. In the 19th century general paresis was one of the most commonly diagnosed mental disorders. Its symptoms included odd social behaviors, impaired judgment, depressed mood and difficulty concentrating. Around the turn of the 20th century, though, we figured what it really was—a form of late-stage syphilis infecting the brain and disrupting its function. A few decades later we discovered a highly effective treatment: penicillin.',
    'https://blogs.scientificamerican.com/observations/a-new-way-to-think-about-mental-illness/',
    1
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/03E7136B-00FB-4458-ADD5476908D81644_source.jpg?w=590&h=800&371AD03D-5682-420F-A738640CAD3B6F85',
    'Quantum Computer Made from Photons Achieves a New Record',
    'In the race to create a quantum computer that can outperform a classical one, a method using particles of light (photons) has taken a promising step forward. Jian-Wei Pan and Chao-Yang Lu, both at the University of Science and Technology of China, and their colleagues improved a quantum computing technique called boson sampling to achieve a record 14 detected photons in its final results. Previous experiments were capped at only five detected photons. The increase in the number of the particles is small, but it amounts to a 6.5-billion-fold gain in “state space,” or the number of ways in which a computer system can be configured. The larger the state space, the less likely a classical computer can perform the same calculation.',
    'https://www.scientificamerican.com/article/quantum-computer-made-from-photons-achieves-a-new-record/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/8F141BCE-FDA3-41D6-96ACBDA089860B45_source.jpg?w=590&h=800&C1BCDCCC-3DEC-44A7-85257995B2C9AD08',
    'Bots Outperform Humans If They Impersonate Us',
    'Bots masquerading as humans in a game outperformed their human opponents—but the their superiority vanished when their machine identity was revealed. Christopher Intagliata reports.',
    'https://www.scientificamerican.com/podcast/episode/bots-outperform-humans-if-they-impersonate-us/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/C41D0DF2-603E-4104-BD1AC474A5745052_source.jpg?w=590&h=800&9965641C-71F0-4727-AB89535148D48C3A',
    'Supercomputer Scours Fossil Record for Earth’s Hidden Extinctions',
    'Palaeontologists have a fuzzy view of Earth’s history. An incomplete fossil record and imprecise dating techniques make it hard to pinpoint events that happened within geological eras spanning millions of years. Now, a period that saw a boom in animal complexity and one of Earth’s greatest mass extinctions is coming into sharp focus.',
    'https://www.scientificamerican.com/article/supercomputer-scours-fossil-record-for-earths-hidden-extinctions/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/F80D1C6E-35F7-426F-98D6E40C9CD062A3_source.jpg?w=590&h=800&508AAA9B-66CE-41F0-98EEC8DE090D890A',
    'New Particle Accelerator Fits on a Silicon Chip',
    'In a full-scale particle accelerator, electrons fly along a kilometers-long path as microwaves bombard them, boosting the particles to near light speed. Such a high-energy electron beam, produced at facilities such as California’s SLAC National Accelerator Laboratory, enables a variety of experiments, including capturing extremely detailed images and probing the structures of molecules. But particle accelerators are expensive, require scientists to travel from locations all over the world and cannot accommodate all the researchers who submit requests to book time. To make these devices more accessible, a team at Stanford University developed a laser-driven particle accelerator that fits on a tiny silicon chip—and that could eventually be scaled up to produce a beam with as much energy as SLAC’s.',
    'https://www.scientificamerican.com/article/new-particle-accelerator-fits-on-a-silicon-chip1/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/090EA729-03AC-4E44-BE907EBD927DAD1B_source.jpg?w=2000&h=1123&C2F155F4-29BD-4B3B-8C56640077F23F53',
    'Will Machines Ever Become Conscious?',
    'A future where the thinking capabilities of computers approach our own is quickly coming into view. We feel ever more powerful machine-learning (ML) algorithms breathing down our necks. Rapid progress in coming decades will bring about machines with human-level intelligence capable of speech and reasoning, with a myriad of contributions to economics, politics and, inevitably, warcraft. The birth of true artificial intelligence will profoundly affect humankind’s future, including whether it has one.',
    'https://www.scientificamerican.com/article/will-machines-ever-become-conscious/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/F80D1C6E-35F7-426F-98D6E40C9CD062A3_source.jpg?w=590&h=800&508AAA9B-66CE-41F0-98EEC8DE090D890A',
    'How NIST Tested Facial Recognition Algorithms for Racial Bias',
    'Facial-recognition technology is already being used for applications ranging from unlocking phones to identifying potential criminals. Despite advances, it has still come under fire for racial bias: many algorithms that successfully identify white faces still fail to properly do so for people of color. Last week the National Institute of Standards and Technology (NIST) published a report showing how 189 face-recognition algorithms, submitted by 99 developers across the globe, fared at identifying people from different demographics.',
    'https://www.scientificamerican.com/article/how-nist-tested-facial-recognition-algorithms-for-racial-bias/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/blogs/cache/file/249F2138-33C3-4802-BB1095AFFB2E0390_source.jpg?w=590&h=800&26E7EDF7-6A27-4F13-8D542CA526F70FD0',
    'Don’t Panic about AI',
    'According to legend, the medieval philosopher and Franciscan friar Roger Bacon created an all-knowing artificial brain, which he encased in a bronze, human-like head. Bacon, so the story goes, wanted to use the insights gleaned from this “brazen head” to make sure Britain could never be conquered.',
    'https://blogs.scientificamerican.com/observations/dont-panic-about-ai/',
    2
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/B6877E81-A835-4EB8-BC7D3858E7C5B3BC_source.jpg?w=590&h=800&C6B256DD-6F75-4D0E-A853A9437F650D46',
    'Bacteria-Filled Bricks Build Themselves',
    'Infusing building materials with living microorganisms has already lent inanimate objects new powers. Self-healing concrete, for example, uses bacteria or fungi to fix its own cracks. Now researchers have developed a living substance that can transform from a gooey sand mixture into a solid brick—and then help build more copies of itself. Proponents say it could be used to make a building material that requires relatively few resources and absorbs greenhouse gases instead of releasing them.',
    'https://www.scientificamerican.com/article/bacteria-filled-bricks-build-themselves/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/06F40D33-2164-42B0-90DFB1788A407CC7_source.jpg?w=590&h=800&889282C9-DE50-4610-85FDDB35D55F632C',
    'Diving Beetles Dramatically Take Down Tadpoles',
    'When ecologist Jose Valdez and his team released 10,000 tadpoles to populate a new conservation site in Newcastle, Australia, they surrounded the area with a mesh fence to keep out hungry snakes, birds and mammals. But they hadn''t considered much smaller predators: diving beetles. The researchers soon began to witness the insects'' violent attacks, and three years later only a handful of frogs remained. In two recent papers, Valdez, a researcher at Denmark''s Aarhus University, and his colleagues documented the beetles'' devastating predation tactics and possible implications for conservation efforts.',
    'https://blogs.scientificamerican.com/observations/dont-panic-about-ai/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/BFD26C36-A25B-4131-95634324A5E02F99_source.jpg?w=590&h=800&DC3A7F4F-D330-417E-9B8CBDB28CD5BD8A',
    'How Warm Is Sweet Enough?',
    'Have you ever tasted a piece of warm apple pie or a cup of hot chocolate milk—and then had them after they cooled? Maybe you even prefer to have these treats at room temperature. Why is this? Can flavor change even when you are not adding ingredients? Try this activity, and discover how temperature influences flavor!',
    'https://www.scientificamerican.com/article/how-warm-is-sweet-enough/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/35E396E3-28CF-4210-A74025FC79094B02_source.jpg?w=590&h=800&313069F6-0CAE-4C3D-99103341A2455D34',
    'Nocturnal Moth Species Has a Flashy Secret',
    'The nocturnal dot-underwing moth may use shape-shifting patterns on its wings as a stealthy way to attract mates in the dark. In a study published last September in Current Biology, scientists report the discovery on males'' forewings of three patches that change darkness
    and size when viewed from particular angles. In females, the entire forewing darkens.',
    'https://www.scientificamerican.com/article/nocturnal-moth-species-has-a-flashy-secret/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/53A80327-8BB8-448B-93ECDE5C490EBB56_source.jpg?w=590&h=800&950FBA2E-5C00-4BA9-81E69237EE88D160',
    'Brittle Stars Can "See" without Eyes',
    'The starfish relatives can recognize patterns using photoreceptors on their arms - and their color - changing abilities could have something to do with it. Christopher Intagliata reports.',
    'https://www.scientificamerican.com/podcast/episode/brittle-stars-can-see-without-eyes/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/312E43C4-4CB1-4445-8445DD675B53F15E_source.jpg?w=590&h=800&F9A955FD-B526-43A4-BD13EA5771D77A69',
    'Make a Potato Shrink - with Saltwater',
    'Have you ever wondered how plants ''drink'' water from the soil? Water uptake in plants is quite complicated. A process called osmosis helps the water move from the soil into the plant roots—and then into the plant''s cells. In this activity you will see for yourself how you can make water move with osmosis!',
    'https://www.scientificamerican.com/article/make-a-potato-shrink-with-saltwater/',
    3
  );

INSERT INTO
  pins (
    owner_id,
    image,
    title,
    description,
    url,
    category_id
  )
VALUES
  (
    1,
    'https://static.scientificamerican.com/sciam/cache/file/7DB96FEC-8742-4BE8-9C97F6FBAB5D5252_source.jpg?w=590&h=800&6B1FC70B-AA9D-45EC-AD4EAF2745F7D9D1',
    'E. coli Could Produce a Popular Psychedelic for Therapeutic Use',
    'Studying psychedelics was taboo for decades, but in recent years drugs such as psilocybin—the active ingredient in “magic mushrooms”—have shown promise in clinical trials for treating conditions from depression to nicotine addiction. Growing the mushrooms can take months and is not practical for pharmaceutical production, however, and chemically synthesizing psilocybin is a costly and intensive process. Now scientists have successfully engineered Escherichia coli bacteria to produce the mind-bending drug.',
    'https://www.scientificamerican.com/article/e-coli-could-produce-a-popular-psychedelic-for-therapeutic-use/',
    3
  );