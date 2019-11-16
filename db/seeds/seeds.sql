-- Users table seeds here (Example)
INSERT INTO users (name,email,password,profile_picture) VALUES ('Sanjeet','kang.sanjeet1401@gmail.com','password','businessman-profile-cartoon_18591-58479.jpg');
INSERT INTO users (name,email,password,profile_picture) VALUES ('Dennis','dennis.y95@gmail.com','password','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcdbk1Fs7EWlDHH4qsWbyTJJcNIdhRRH_-RV41tAyTpMyL0YE&s');

INSERT INTO categories (name) VALUES ('Science');
INSERT INTO categories (name) VALUES ('Biology');
INSERT INTO categories (name) VALUES ('Coding');


INSERT INTO pins (owner_id,image,title,description,url) VALUES (1,'https://static.scientificamerican.com/sciam/cache/file/03E7136B-00FB-4458-ADD5476908D81644_source.jpg?w=590&h=800&371AD03D-5682-420F-A738640CAD3B6F85','Quantum Computer Made from Photons Achieves a New Record','In the race to create a quantum computer that can outperform a classical one, a method using particles of light (photons) has taken a promising step forward. Jian-Wei Pan and Chao-Yang Lu, both at the University of Science and Technology of China, and their colleagues improved a quantum computing technique called boson sampling to achieve a record 14 detected photons in its final results. Previous experiments were capped at only five detected photons. The increase in the number of the particles is small, but it amounts to a 6.5-billion-fold gain in “state space,” or the number of ways in which a computer system can be configured. The larger the state space, the less likely a classical computer can perform the same calculation.','https://www.scientificamerican.com/article/quantum-computer-made-from-photons-achieves-a-new-record/');
INSERT INTO pins (owner_id,image,title,description,url) VALUES (2,'https://static.scientificamerican.com/sciam/cache/file/2912F8F7-FD40-4772-BD26479D951FEEAD_source.jpg?w=590&h=800&9A1B761E-C5DE-47B5-BF74DCFB0433C41C','Are Probiotics Safe for Your Immune System?','One of the immune system’s jobs is to protect us from harmful bacterial. And the beneficial organisms that we refer to as probiotics contribute to this effort in a number of ways. In the gut, a robust population of beneficial bacteria can help crowd out harmful bacteria, making it harder for them to thrive. In addition, probiotic bacteria can influence the activity of our own immune cells, regulating inflammation, barrier function, and cell-to-cell signaling. ','https://www.scientificamerican.com/article/are-probiotics-safe-for-your-immune-system/');

INSERT INTO categories_pins(category_id,pin_id) VALUES (1,1)
INSERT INTO categories_pins(category_id,pin_id) VALUES (1,2)

INSERT INTO boards (owner_id) VALUES (1)
INSERT INTO boards (owner_id) VALUES (2)

INSERT TABLE boards_pins (board_id,pin_id) VALUES (1,1)
INSERT TABLE boards_pins (board_id,pin_id) VALUES (1,2)

INSERT INTO comments (user_id,pin_id,text) VALUES (2,1,'BRUH')
INSERT INTO comments (user_id,pin_id,text) VALUES (2,2,'BRUHHHHHHHHHHHHHHH')

INSERT INTO ratings (pin_id,user_id,value) VALUES (1,1,4)
INSERT INTO ratings (pin_id,user_id,value) VALUES (2,1,3)
