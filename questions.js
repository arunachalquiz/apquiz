const myQuestions = [
  {
    q: "When did the Constituent Assembly enact and adopt the Constitution of India?",
    options: ["13th December, 1946", "15th August, 1947", "26th November, 1949", "26th January, 1950"],
    correct: 2,
    category: "Polity",
    info: "Adopted in 1949; came into effect in 1950."
  },
  {
    q: "Which Article of the Constitution prevents 'Double Jeopardy'?",
    options: ["Article 20(2)", "Article 21", "Article 22", "Article 19"],
    correct: 0,
    category: "Polity",
    info: "No person shall be prosecuted and punished for the same offence more than once."
  },
  {
    q: "Sikkim became an Associate State of India through which Amendment?",
    options: ["7th Amendment", "35th Amendment", "36th Amendment", "42nd Amendment"],
    correct: 1,
    category: "Polity",
    info: "The 35th Amendment made it an Associate State in 1974."
  },
  {
    q: "Who was the first Indian woman to be the President of the INC?",
    options: ["Annie Besant", "Sarojini Naidu", "Indira Gandhi", "Nellie Sengupta"],
    correct: 1,
    category: "History",
    info: "Sarojini Naidu was the first Indian woman; Annie Besant was the first woman overall."
  },
  {
    q: "The famous physician during Buddha's time was:",
    options: ["Charaka", "Jivaka", "Sushruta", "Dhanvantari"],
    correct: 1,
    category: "History",
    info: "Jivaka was the personal physician of Lord Buddha."
  },
  {
    q: "Who introduced the 'Iqta' system?",
    options: ["Iltutmish", "Balban", "Alauddin Khalji", "Akbar"],
    correct: 0,
    category: "History",
    info: "Shamsuddin Iltutmish introduced this land grant system."
  },
  {
    q: "Which of the following is used in pencils?",
    options: ["Graphite", "Silicon", "Charcoal", "Phosphorus"],
    correct: 0,
    category: "Science",
    info: "Graphite is a stable form of carbon."
  },
  {
    q: "Quartz crystals used in clocks are chemically:",
    options: ["Silicon dioxide", "Germanium oxide", "Sodium silicate", "Lead oxide"],
    correct: 0,
    category: "Science",
    info: "Quartz is composed of silicon and oxygen atoms ($SiO_2$)."
  },
  {
    q: "What is the pH value of pure water?",
    options: ["0", "7", "14", "1"],
    correct: 1,
    category: "Science",
    info: "Pure water is neutral on the pH scale."
  },
  {
    q: "The ozone layer is observed on:",
    options: ["16th September", "14th September", "26th September", "10th September"],
    correct: 0,
    category: "Geography",
    info: "World Ozone Day commemorates the Montreal Protocol."
  },{
    q: "Which state in India has the longest coastline?",
    options: ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh"],
    correct: 2,
    category: "Geography",
    info: "Gujarat has a coastline of about 1,600 km."
  },
  {
    q: "The 'Pakke Paga Hornbill Festival' is celebrated in which state?",
    options: ["Nagaland", "Arunachal Pradesh", "Manipur", "Mizoram"],
    correct: 1,
    category: "Arunachal GK",
    info: "It is a state festival of Arunachal Pradesh focused on wildlife conservation."
  },
  {
    q: "Which river enters India as the 'Siang' in Arunachal Pradesh?",
    options: ["Lohit", "Subansiri", "Brahmaputra", "Kameng"],
    correct: 2,
    category: "Arunachal GK",
    info: "The Brahmaputra is known as the Siang or Dihang in Arunachal."
  },
  {
    q: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 2,
    category: "Science",
    info: "Nitrogen makes up about 78% of the Earth's atmosphere."
  },
  {
    q: "The 'Fundamental Duties' were added to the Constitution by which Amendment?",
    options: ["24th Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    correct: 1,
    category: "Polity",
    info: "Added in 1976 based on the Swaran Singh Committee recommendations."
  },
  {
    q: "Who was the founder of the Slave Dynasty in India?",
    options: ["Iltutmish", "Razia Sultan", "Qutub-ud-din Aibak", "Balban"],
    correct: 2,
    category: "History",
    info: "Aibak founded the dynasty in 1206 AD."
  },
  {
    q: "The 'Dachigam National Park' is famous for which animal?",
    options: ["Hangul (Kashmiri Stag)", "Tiger", "One-horned Rhino", "Asiatic Lion"],
    correct: 0,
    category: "Geography",
    info: "It is located in Jammu and Kashmir."
  },
  {
    q: "The 'Right to Property' is currently a:",
    options: ["Fundamental Right", "Legal Right", "Moral Right", "Natural Right"],
    correct: 1,
    category: "Polity",
    info: "It was moved from Fundamental Rights to Article 300A as a Legal Right."
  },
  {
    q: "Which Vitamin is also known as Ascorbic Acid?",
    options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    correct: 2,
    category: "Science",
    info: "Vitamin C is essential for skin health and immunity."
  },
  {
    q: "Who wrote the book 'Discovery of India'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    correct: 1,
    category: "History",
    info: "Written by Nehru while he was imprisoned in Ahmednagar Fort."
  },{
    q: "The Battle of Plassey was fought in the year:",
    options: ["1757", "1764", "1857", "1526"],
    correct: 0,
    category: "History",
    info: "This battle established British East India Company rule in Bengal."
  },
  {
    q: "Which layer of the atmosphere contains the Ozone Layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
    correct: 1,
    category: "Geography",
    info: "The stratosphere extends from about 10 to 50 km above Earth."
  },
  {
    q: "The Governor of an Indian State is appointed by:",
    options: ["The Prime Minister", "The President of India", "Chief Justice of India", "Chief Minister"],
    correct: 1,
    category: "Polity",
    info: "Under Article 155, the Governor is appointed by the President."
  },
  {
    q: "Which element is the best conductor of electricity?",
    options: ["Copper", "Aluminum", "Silver", "Iron"],
    correct: 2,
    category: "Science",
    info: "Silver has the highest electrical conductivity, followed by copper."
  },
  {
    q: "The 'Kyoto Protocol' is related to:",
    options: ["Ozone Depletion", "Climate Change", "Biodiversity", "Wetlands"],
    correct: 1,
    category: "Geography",
    info: "It is an international treaty to reduce greenhouse gas emissions."
  },
  {
    q: "Who was the first Chief Minister of Arunachal Pradesh?",
    options: ["Prem Khandu Thungan", "Gegong Apang", "Mukut Mithi", "Nabam Tuki"],
    correct: 0,
    category: "Arunachal GK",
    info: "He served as the first CM after Arunachal became a Union Territory."
  },
  {
    q: "The power to decide an Election Petition is vested in the:",
    options: ["Parliament", "Supreme Court", "High Courts", "Election Commission"],
    correct: 2,
    category: "Polity",
    info: "High Courts have the jurisdiction to hear election petitions."
  },
  {
    q: "Which Mughal Emperor is known as 'Zinda Pir'?",
    options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    correct: 3,
    category: "History",
    info: "Aurangzeb was called 'Zinda Pir' or Living Saint due to his simple lifestyle."
  },
  {
    q: "What is the chemical name of common salt?",
    options: ["Sodium Chloride", "Sodium Bicarbonate", "Calcium Chloride", "Potassium Chloride"],
    correct: 0,
    category: "Science",
    info: "Common salt is $NaCl$."
  },
  {
    q: "In which year did Arunachal Pradesh become a full-fledged State?",
    options: ["1972", "1975", "1987", "1990"],
    correct: 2,
    category: "Arunachal GK",
    info: "Arunachal Pradesh became the 24th state of India on Feb 20, 1987."
  },{
    q: "The 'Panchayati Raj' was first inaugurated in which state?",
    options: ["Rajasthan", "Andhra Pradesh", "Uttar Pradesh", "Bihar"],
    correct: 0,
    category: "Polity",
    info: "It was first started in Nagaur district, Rajasthan, in 1959."
  },
  {
    q: "Who was the Viceroy of India during the Partition of Bengal in 1905?",
    options: ["Lord Canning", "Lord Curzon", "Lord Hardinge", "Lord Dalhousie"],
    correct: 1,
    category: "History",
    info: "Lord Curzon's decision to partition Bengal sparked the Swadeshi Movement."
  },
  {
    q: "Which instrument is used to measure Atmospheric Pressure?",
    options: ["Thermometer", "Hygrometer", "Barometer", "Anemometer"],
    correct: 2,
    category: "Science",
    info: "The barometer was invented by Evangelista Torricelli."
  },
  {
    q: "The 'Silent Valley National Park' is located in which state?",
    options: ["Karnataka", "Kerala", "Tamil Nadu", "Odisha"],
    correct: 1,
    category: "Geography",
    info: "It is located in the Nilgiri Hills of Kerala."
  },
  {
    q: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 1,
    category: "Polity",
    info: "Dr. Ambedkar was the Chairman of the Drafting Committee."
  },
  {
    q: "The First Battle of Panipat was fought between Babur and:",
    options: ["Humayun", "Ibrahim Lodi", "Hemu", "Sher Shah Suri"],
    correct: 1,
    category: "History",
    info: "Fought in 1526, it marked the beginning of the Mughal Empire."
  },
  {
    q: "Which blood group is known as the 'Universal Donor'?",
    options: ["A+", "B+", "AB+", "O-"],
    correct: 3,
    category: "Science",
    info: "O-negative blood can be given to patients with any blood type."
  },
  {
    q: "The 'McMahon Line' forms the boundary between India and:",
    options: ["Pakistan", "China", "Bangladesh", "Myanmar"],
    correct: 1,
    category: "Geography",
    info: "It is the effective boundary between China and the Northeast region of India."
  },
  {
    q: "Which city is known as the 'Orchid State of India'?",
    options: ["Sikkim", "Meghalaya", "Arunachal Pradesh", "Assam"],
    correct: 2,
    category: "Arunachal GK",
    info: "Arunachal Pradesh has over 600 species of orchids."
  },
  {
    q: "The 'Bibi Ka Maqbara' is located in which city?",
    options: ["Agra", "Aurangabad", "Hyderabad", "Lucknow"],
    correct: 1,
    category: "History",
    info: "It was built by Azam Shah, the son of Aurangzeb, in memory of his mother."
  },{
    q: "The 'Minimum Needs Programme' was introduced in which Five Year Plan?",
    options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"],
    correct: 2,
    category: "Polity",
    info: "The Fifth Five Year Plan (1974–78) introduced this to provide basic social consumption."
  },
  {
    q: "Which scientist discovered the law of gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Marie Curie"],
    correct: 1,
    category: "Science",
    info: "Sir Isaac Newton published his laws of motion and universal gravitation in 1687."
  },
  {
    q: "The 'Namdapha National Park' is located in which district of Arunachal Pradesh?",
    options: ["Changlang", "Lohit", "Tirap", "Papum Pare"],
    correct: 0,
    category: "Arunachal GK",
    info: "It is the largest protected area in the Eastern Himalaya biodiversity hotspot."
  },
  {
    q: "Who was the first Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Lord Canning"],
    correct: 0,
    category: "History",
    info: "Lord Mountbatten served as the first Governor-General; C. Rajagopalachari was the first Indian one."
  },
  {
    q: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    correct: 3,
    category: "Science",
    info: "Mercury is the smallest and innermost planet in the Solar System."
  },
  {
    q: "The 'Mundari' dance is associated with which state?",
    options: ["Jharkhand", "Odisha", "West Bengal", "Chhattisgarh"],
    correct: 0,
    category: "Geography",
    info: "It is a popular folk dance of the Munda tribe."
  },
  {
    q: "The 'Finance Commission' is constituted under which Article?",
    options: ["Article 270", "Article 280", "Article 226", "Article 360"],
    correct: 1,
    category: "Polity",
    info: "It is established by the President of India every five years."
  },
  {
    q: "Who was the first Indian to win a Nobel Prize?",
    options: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
    correct: 1,
    category: "History",
    info: "Tagore won the Nobel Prize in Literature in 1913 for 'Gitanjali'."
  },
  {
    q: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Graphite"],
    correct: 2,
    category: "Science",
    info: "Diamond is an allotrope of carbon where atoms are arranged in a crystal structure."
  },
  {
    q: "Which pass connects Arunachal Pradesh with Lhasa (Tibet)?",
    options: ["Bomdi-La Pass", "Shipki-La Pass", "Niti Pass", "Jelep-La Pass"],
    correct: 0,
    category: "Arunachal GK",
    info: "Bomdi-La is a strategically important mountain pass in the West Kameng district."
  },{
    q: "The 'Joint Sitting' of the two houses of Parliament is presided over by:",
    options: ["The President", "The Vice-President", "The Speaker of Lok Sabha", "The Prime Minister"],
    correct: 2,
    category: "Polity",
    info: "While the President calls the joint sitting, the Speaker always presides over it."
  },
  {
    q: "Who was the first female ruler of the Delhi Sultanate?",
    options: ["Chand Bibi", "Razia Sultan", "Nur Jahan", "Mumtaz Mahal"],
    correct: 1,
    category: "History",
    info: "Razia Sultan was the daughter of Iltutmish and ruled from 1236 to 1240."
  },
  {
    q: "Which metal is liquid at room temperature?",
    options: ["Sodium", "Mercury", "Gallium", "Silver"],
    correct: 1,
    category: "Science",
    info: "Mercury (Hg) is the only metal that is liquid at standard temperature and pressure."
  },
  {
    q: "The 'Kaziranga National Park' is famous for:",
    options: ["Tigers", "One-horned Rhinoceros", "Elephants", "Lions"],
    correct: 1,
    category: "Geography",
    info: "Kaziranga hosts two-thirds of the world's great one-horned rhinoceroses."
  },
  {
    q: "Under which Article can the President declare a Financial Emergency?",
    options: ["Article 352", "Article 356", "Article 360", "Article 370"],
    correct: 2,
    category: "Polity",
    info: "Article 360 has never been invoked in India to date."
  },
  {
    q: "The 'Quit India Movement' was launched in which year?",
    options: ["1920", "1930", "1942", "1947"],
    correct: 2,
    category: "History",
    info: "Launched by Mahatma Gandhi during World War II, demanding an end to British rule."
  },
  {
    q: "Which gas is used in fire extinguishers?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2,
    category: "Science",
    info: "$CO_2$ works by smothering the fire and cutting off the oxygen supply."
  },
  {
    q: "The 'Duncan Passage' is located between:",
    options: ["South Andaman and Little Andaman", "Little Andaman and Car Nicobar", "Minicoy and Amindivi", "India and Sri Lanka"],
    correct: 0,
    category: "Geography",
    info: "It is a strait in the Indian Ocean."
  },
  {
    q: "The 'Itanagar Wildlife Sanctuary' is located in which state?",
    options: ["Assam", "Arunachal Pradesh", "Meghalaya", "Manipur"],
    correct: 1,
    category: "Arunachal GK",
    info: "It surrounds the capital city of Itanagar."
  },
  {
    q: "Which Vitamin is produced in the human body by exposure to Sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
    category: "Science",
    info: "Vitamin D helps the body absorb calcium for bone health."
  },{
    q: "The 'Joint Sitting' of the two houses of Parliament is presided over by:",
    options: ["The President", "The Vice-President", "The Speaker of Lok Sabha", "The Prime Minister"],
    correct: 2,
    category: "Polity",
    info: "While the President calls the joint sitting, the Speaker always presides over it."
  },
  {
    q: "Who was the first female ruler of the Delhi Sultanate?",
    options: ["Chand Bibi", "Razia Sultan", "Nur Jahan", "Mumtaz Mahal"],
    correct: 1,
    category: "History",
    info: "Razia Sultan was the daughter of Iltutmish and ruled from 1236 to 1240."
  },
  {
    q: "Which metal is liquid at room temperature?",
    options: ["Sodium", "Mercury", "Gallium", "Silver"],
    correct: 1,
    category: "Science",
    info: "Mercury (Hg) is the only metal that is liquid at standard temperature and pressure."
  },
  {
    q: "The 'Kaziranga National Park' is famous for:",
    options: ["Tigers", "One-horned Rhinoceros", "Elephants", "Lions"],
    correct: 1,
    category: "Geography",
    info: "Kaziranga hosts two-thirds of the world's great one-horned rhinoceroses."
  },
  {
    q: "Under which Article can the President declare a Financial Emergency?",
    options: ["Article 352", "Article 356", "Article 360", "Article 370"],
    correct: 2,
    category: "Polity",
    info: "Article 360 has never been invoked in India to date."
  },
  {
    q: "The 'Quit India Movement' was launched in which year?",
    options: ["1920", "1930", "1942", "1947"],
    correct: 2,
    category: "History",
    info: "Launched by Mahatma Gandhi during World War II, demanding an end to British rule."
  },
  {
    q: "Which gas is used in fire extinguishers?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2,
    category: "Science",
    info: "$CO_2$ works by smothering the fire and cutting off the oxygen supply."
  },
  {
    q: "The 'Duncan Passage' is located between:",
    options: ["South Andaman and Little Andaman", "Little Andaman and Car Nicobar", "Minicoy and Amindivi", "India and Sri Lanka"],
    correct: 0,
    category: "Geography",
    info: "It is a strait in the Indian Ocean."
  },
  {
    q: "The 'Itanagar Wildlife Sanctuary' is located in which state?",
    options: ["Assam", "Arunachal Pradesh", "Meghalaya", "Manipur"],
    correct: 1,
    category: "Arunachal GK",
    info: "It surrounds the capital city of Itanagar."
  },
  {
    q: "Which Vitamin is produced in the human body by exposure to Sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
    category: "Science",
    info: "Vitamin D helps the body absorb calcium for bone health."
  },{
    q: "Who was the first Indian to join the Indian Civil Service (ICS)?",
    options: ["Satyendranath Tagore", "Sarojini Naidu", "Lala Lajpat Rai", "C.R. Das"],
    correct: 0,
    category: "History",
    info: "Satyendranath Tagore, the elder brother of Rabindranath Tagore, joined in 1863."
  },
  {
    q: "The 'Preamble' of the Indian Constitution was amended by which act?",
    options: ["24th Amendment", "42nd Amendment", "44th Amendment", "None"],
    correct: 1,
    category: "Polity",
    info: "The words 'Socialist', 'Secular', and 'Integrity' were added in 1976."
  },
  {
    q: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    category: "Science",
    info: "Mars appears red due to iron oxide (rust) on its surface."
  },
  {
    q: "Which state is known as the 'Molasses Basin'?",
    options: ["Mizoram", "Assam", "Bihar", "Uttar Pradesh"],
    correct: 0,
    category: "Geography",
    info: "Mizoram is often referred to this due to its soft, unconsolidated deposits."
  },
  {
    q: "Who founded the 'Prarthana Samaj'?",
    options: ["Atmaram Pandurang", "Raja Ram Mohan Roy", "Swami Dayanand", "Vivekananda"],
    correct: 0,
    category: "History",
    info: "It was a movement for religious and social reform in Bombay."
  },
  {
    q: "The 'Sanchi Stupa' was originally built by which Mauryan Emperor?",
    options: ["Chandragupta", "Bindusara", "Ashoka", "Dasaratha"],
    correct: 2,
    category: "History",
    info: "It is one of the oldest stone structures in India, located in Madhya Pradesh."
  },
  {
    q: "What is the unit of power of a lens?",
    options: ["Watt", "Dioptre", "Candela", "Lumen"],
    correct: 1,
    category: "Science",
    info: "Power of a lens is the reciprocal of its focal length."
  },
  {
    q: "Which river is known as the 'Dakshina Ganga'?",
    options: ["Krishna", "Godavari", "Cauvery", "Mahanadi"],
    correct: 1,
    category: "Geography",
    info: "Godavari is the second longest river in India after the Ganga."
  },
  {
    q: "The 'Tawang Monastery' is located in which state?",
    options: ["Sikkim", "Arunachal Pradesh", "Himachal Pradesh", "Uttarakhand"],
    correct: 1,
    category: "Arunachal GK",
    info: "It is the largest monastery in India and second largest in the world."
  },
  {
    q: "Who was the last Governor-General of India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Lord Canning", "W. Bentinck"],
    correct: 1,
    category: "History",
    info: "C. Rajagopalachari was the first and last Indian Governor-General."
  },{
    q: "The 'Right to Education' was added as a Fundamental Right by which Amendment?",
    options: ["86th Amendment", "91st Amendment", "73rd Amendment", "42nd Amendment"],
    correct: 0,
    category: "Polity",
    info: "The 86th Amendment (2002) inserted Article 21A."
  },
  {
    q: "Which scientist is known as the 'Father of Indian Space Program'?",
    options: ["Homi J. Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
    correct: 1,
    category: "Science",
    info: "He was instrumental in establishing ISRO."
  },
  {
    q: "Which state in India is the largest producer of Coffee?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    correct: 2,
    category: "Geography",
    info: "Karnataka accounts for nearly 70% of India's coffee production."
  },
  {
    q: "Who was the founder of the Brahmo Samaj?",
    options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Ishwar Chandra Vidyasagar", "Keshab Chandra Sen"],
    correct: 1,
    category: "History",
    info: "Founded in 1828 to promote monotheism and social reform."
  },
  {
    q: "Which gas is released by plants during Photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
    correct: 1,
    category: "Science",
    info: "Plants take in $CO_2$ and release Oxygen ($O_2$)."
  },
  {
    q: "The 'Siang River Festival' is mainly celebrated in which city?",
    options: ["Pasighat", "Tawang", "Itanagar", "Ziro"],
    correct: 0,
    category: "Arunachal GK",
    info: "It promotes eco-tourism and cultural heritage in East Siang."
  },
  {
    q: "Which Article of the Constitution deals with the 'Amendment Procedure'?",
    options: ["Article 352", "Article 360", "Article 368", "Article 370"],
    correct: 2,
    category: "Polity",
    info: "Article 368 gives Parliament the power to amend the Constitution."
  },
  {
    q: "In which year did the First World War begin?",
    options: ["1912", "1914", "1918", "1939"],
    correct: 1,
    category: "History",
    info: "The war lasted from July 1914 to November 1918."
  },
  {
    q: "What is the common name of Sodium Bicarbonate?",
    options: ["Baking Soda", "Washing Soda", "Bleaching Powder", "Plaster of Paris"],
    correct: 0,
    category: "Science",
    info: "Its chemical formula is $NaHCO_3$."
  },
  {
    q: "The 'Roing' is the headquarters of which district in Arunachal Pradesh?",
    options: ["Lower Dibang Valley", "Upper Dibang Valley", "Lohit", "Anjaw"],
    correct: 0,
    category: "Arunachal GK",
    info: "Roing is the main town of the Lower Dibang Valley district."
  },{
    q: "The 'Taluva' dynasty was founded by:",
    options: ["Harihara I", "Vira Narasimha Raya", "Krishna Deva Raya", "Saluva Narasimha"],
    correct: 1,
    category: "History",
    info: "The Taluva dynasty was the third dynasty to rule the Vijayanagara Empire."
  },
  {
    q: "Which schedule of the Indian Constitution deals with 'Anti-Defection'?",
    options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
    correct: 2,
    category: "Polity",
    info: "Added by the 52nd Amendment Act in 1985."
  },
  {
    q: "Which organ in the human body produces Insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Gallbladder"],
    correct: 1,
    category: "Science",
    info: "The pancreas regulates blood sugar levels via insulin."
  },
  {
    q: "The 'Blue Mountain' (Phawngpui) is the highest peak in which state?",
    options: ["Mizoram", "Nagaland", "Manipur", "Tripura"],
    correct: 0,
    category: "Geography",
    info: "It is located near the Myanmar border in Mizoram."
  },
  {
    q: "Who was the founder of the 'Haryanka' dynasty?",
    options: ["Ajatashatru", "Bimbisara", "Udayin", "Shishunaga"],
    correct: 1,
    category: "History",
    info: "Bimbisara was a contemporary of Gautama Buddha."
  },
  {
    q: "Which planet has the most number of moons?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    correct: 1,
    category: "Science",
    info: "As of recent discoveries, Saturn holds the record with over 140 moons."
  },
  {
    q: "The 'Pampa' river flows through which Indian state?",
    options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
    correct: 2,
    category: "Geography",
    info: "It is the third longest river in Kerala."
  },
  {
    q: "The 'Nyokum' festival is celebrated by which tribe of Arunachal Pradesh?",
    options: ["Nyishi", "Adi", "Apatani", "Galo"],
    correct: 0,
    category: "Arunachal GK",
    info: "It is celebrated to invoke the blessings of the spirits for a good harvest."
  },
  {
    q: "What is the maximum strength of the Lok Sabha as per the Constitution?",
    options: ["500", "525", "550", "552"],
    correct: 3,
    category: "Polity",
    info: "The maximum limit is 552 members."
  },
  {
    q: "Who was the first Indian to travel in space?",
    options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Ravish Malhotra"],
    correct: 1,
    category: "Science",
    info: "Rakesh Sharma flew aboard the Soviet Soyuz T-11 in 1984."
  },{
    q: "The 'Dree' festival is a famous agricultural festival of which tribe?",
    options: ["Apatani", "Monpa", "Mishmi", "Tangsa"],
    correct: 0,
    category: "Arunachal GK",
    info: "The Apatani tribe celebrates Dree to ensure a bountiful harvest."
  },
  {
    q: "Which Constitutional Amendment is known as the 'Mini Constitution'?",
    options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
    correct: 0,
    category: "Polity",
    info: "The 42nd Amendment of 1976 brought massive changes to the Constitution."
  },
  {
    q: "Who was the founder of the Kushan Empire in India?",
    options: ["Kanishka", "Kujula Kadphises", "Vima Kadphises", "Huvishka"],
    correct: 1,
    category: "History",
    info: "Kujula Kadphises was the first Kushan king to establish power in the region."
  },
  {
    q: "The 'Yarlung Tsangpo' river is known in India as:",
    options: ["Ganga", "Indus", "Brahmaputra", "Yamuna"],
    correct: 2,
    category: "Geography",
    info: "It flows through Tibet before entering India as the Siang/Brahmaputra."
  },
  {
    q: "Which gas is responsible for the 'rotten egg' smell?",
    options: ["Carbon Monoxide", "Hydrogen Sulfide", "Sulfur Dioxide", "Ammonia"],
    correct: 1,
    category: "Science",
    info: "Hydrogen Sulfide ($H_2S$) is a colorless gas with a characteristic foul odor."
  },
  {
    q: "The 'Gayatri Mantra' is found in which Veda?",
    options: ["Rig Veda", "Sama Veda", "Yajur Veda", "Atharva Veda"],
    correct: 0,
    category: "History",
    info: "It is dedicated to Savitr, a solar deity, and found in the 3rd Mandala of Rig Veda."
  },
  {
    q: "What is the minimum age required to become the President of India?",
    options: ["25 years", "30 years", "35 years", "18 years"],
    correct: 2,
    category: "Polity",
    info: "The same age requirement (35) applies to the Vice-President and Governors."
  },
  {
    q: "Which layer of the Earth is the thinnest?",
    options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
    correct: 0,
    category: "Geography",
    info: "The crust varies from about 5 km (oceanic) to 70 km (continental) in thickness."
  },
  {
    q: "The 'Golden Triangle' in Southeast Asia is famous for the production of:",
    options: ["Gold", "Opium", "Electronics", "Coffee"],
    correct: 1,
    category: "Geography",
    info: "It refers to the area where the borders of Thailand, Laos, and Myanmar meet."
  },
  {
    q: "Who was the first person to reach the North Pole?",
    options: ["Robert Peary", "Roald Amundsen", "Vasco da Gama", "Magellan"],
    correct: 0,
    category: "History",
    info: "Robert Peary reached the North Pole in 1909; Amundsen was the first to the South Pole."
  }
];