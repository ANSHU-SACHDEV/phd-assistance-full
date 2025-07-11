// seed/data.js

const countryData = [
  {
    name: "france",
    description: "France stands as a beacon of European intellectual heritage, fusing centuries of philosophy, art, and scientific achievement with modern innovation. Its public universities and grandes écoles emphasize affordability, critical thought, and global influence, making it a premier destination for scholars of all disciplines.",
    reason: "Low tuition at public universities, strong scholarship support (Eiffel, Erasmus+), and Paris’s world-class cultural scene make France ideal for comprehensive academic and personal growth.",
    image: "/images_countries/FRANCE.jpg",
    visa: "Through Campus France, submit acceptance letter, blocked bank account (~€6150/year), health insurance, housing proof, and motivation letter.",
    universities: [
      {
        uniName: "École Polytechnique",
        uniInfo: "École Polytechnique, known affectionately as “l’X,” is France’s top-tier engineering institute. With a foundation rooted in mathematics and physics, it offers an elite Computer Engineering curriculum emphasizing high-performance computing, cybersecurity, and algorithmic theory. Classes are conducted by nationally acclaimed researchers, and students engage in long-term industrial and governmental collaborations—many matriculants receive multidisciplinary training including leadership, ethics, and policy studies. The institute’s rigorous environment fosters resilience, problem-solving, and networking at the forefront of Europe’s tech community.",
        uniImg: "/images_countries/echopoly.jpg"
      },
      {
        uniName: "INSA Lyon",
        uniInfo: "INSA Lyon is one of Europe’s leading engineering universities with an emphasis on Data Science and Artificial Intelligence. The structured curriculum integrates statistics, machine learning, big data architecture, and data ethics. Students spend significant time in the IATE (Institut des Applications de la Technologie à l’Entreprise) research labs, working with startups and multinational corporates. The co-op rotations offer hands-on exposure to predictive analytics, computer vision, and natural language processing — adding real-world experience to theoretical grounding.",
        uniImg: "/images_countries/insa.jpg"
      },
      {
        uniName: "Sorbonne University",
        uniInfo: "Sorbonne University is a historic academic powerhouse in humanities. It houses esteemed faculties of Philosophy, Literature, History, and Languages, with an emphasis on critical analysis, archival research, and cultural theory. Students often collaborate with institutions like Musée du Louvre and Fondation Maison des Sciences de l’Homme for internships and projects. The university nurtures deep scholarship in medieval studies, French existentialism, comparative literature, and global cultural dynamics through a combination of lectures, seminars, and fieldwork in Paris’s cultural institutions.",
        uniImg: "/images_countries/sorbone.jpg"
      }
    ]
  },
  {
    name: "germany",
    description: "Germany is celebrated for its dual education model, research excellence in engineering and sciences, and cultural legacy. Its tuition-free public universities, vibrant R&D ecosystem, and growing tech landscape draw students seeking immersive scientific and cultural experiences.",
    reason: "German institutions offer zero or low tuition, strong industry-academic links, and excellence in research fields — making it attractive for those seeking professional and intellectual rigor.",
    image: "images_countries/germanyjpg.jpg",
    visa: "Submit admission letter, blocked account (~€11 208/year), health insurance, and proof of residence to a German consulate for the National Visa (Study).",
    universities: [
      {
        uniName: "RWTH Aachen University",
        uniInfo: "RWTH Aachen is the epitome of German engineering prowess. Its Computer Engineering faculty merges embedded systems, hardware-software integration, and robotics through facilities like the JARA High Performance Computing center. Students launch interdisciplinary projects with industry giants like Audi, Microsoft, and Bosch. The university’s international collaborations (e.g., Sino-German Connection, EuroTech) also offer exchange opportunities across Europe and Asia, deepening both technical and intercultural competence.",
        uniImg: "/images_countries/rwth.jpg"
      },
      {
        uniName: "University of Mannheim",
        uniInfo: "University of Mannheim is renowned for quantitative social sciences and data analytics. The Data Science Institute integrates machine learning, econometrics, and business intelligence—empowering students to conduct real-world projects on consumer behavior, financial risk, and digital transformation. The globally-recognized Mannheim Business School collaborates with corporates like SAP and Deloitte for innovation challenges, analytics bootcamps, and global case labs.",
        uniImg: "/images_countries/university_mannheim.jpg"
      },
      {
        uniName: "Humboldt University of Berlin",
        uniInfo: "Humboldt University is a cradle of intellectual legacy — birthplace of modern academic research with figures like Hegel and Einstein. Its humanities programs in Philosophy, History, and Literature emphasize interdisciplinary critical scholarship, archival research, and cultural historiography. Located in Berlin’s cultural hub, students benefit from multilingual seminars, major international conferences, and partnerships with institutions like the Berlin State Library and Academy of Arts.",
        uniImg: "/images_countries/humboldt.jpg"
      }
    ]
  },
  {
    name: "usa",
    description: "The United States stands as a global powerhouse in higher education, combining research innovation, diverse academic ecosystems, and flexibility in curricular design. Its institutions set the benchmark for scientific breakthroughs, leadership cultivation, and cultural diversity.",
    reason: "With top-tier universities, cutting-edge facilities, entrepreneurial networks, and financial aid options, the U.S. remains an unparalleled academic landscape.",
    image: "/images_countries/usa.jpg",
    visa: "File the DS‑160 form for an F‑1 visa, pay SEVIS fees, attend consulate interview, and present proof of funds, admission, and intent to return.",
    universities: [
      {
        uniName: "Massachusetts Institute of Technology (MIT)",
        uniInfo: "MIT’s Computer Engineering program is second-to-none, emphasizing digital systems, AI, robotics, and cybersecurity. The legendary Media Lab and CSAIL provide hands-on labs, startup incubators, and global research initiatives. Capstone projects often result in patents and tech startups, supported by MIT’s Venture Mentoring Service and Legatum Center for Development and Entrepreneurship — integrating advanced technical learning with ethical leadership and global problem-solving.",
        uniImg: "/images_countries/mit.jpg"
      },
      {
        uniName: "Stanford University",
        uniInfo: "Stanford is the epicenter of AI and Data Science innovation, nestled in Silicon Valley. Its programs equip students with comprehensive analytical frameworks using statistics, deep learning, NLP, and data ethics. Initiatives like the AI Lab, Human‑Centered AI Institute, and the Stanford Data Science Initiative allow students to engage in transformative research. The tight-knit entrepreneurial ecosystem facilitates innovation and startup development in collaboration with industry leaders.",
        uniImg: "/images_countries/stanford.jpg"
      },
      {
        uniName: "Harvard University",
        uniInfo: "Harvard’s Faculty of Arts and Sciences is the bedrock of its humanities prestige, offering programs in philosophy, theology, literature, art history, and social & cultural studies. With access to world-class museums, archival resources, and interdisciplinary seminars via the Mahindra Humanities Center, students engage deeply with critical scholarship, global cultural discourse, and public humanities through fellowships and research grants.",
        uniImg: "/images_countries/hardvard.jpg"
      }
    ]
  },
  {
    name: "uk",
    description: "The UK’s academic landscape blends centuries-old traditions with global research excellence. Home to some of the world’s oldest universities, it offers a compact yet richly diverse higher-ed ecosystem.",
    reason: "Intensive 1-year master's programs, internationally acclaimed degrees, and a post-study work visa make the UK a preferred destination for focused, outcomes-driven academic pursuits.",
    image: "/images_countries/uni.jpg",
    visa: "Apply for UK Student Visa (Tier 4) with CAS, English proficiency, and proof of funds (£1,023/month in London, £820/month elsewhere).",
    universities: [
      {
        uniName: "University of Cambridge",
        uniInfo: "Cambridge combines tradition with cutting-edge computer engineering research. Students work in labs like the Cambridge Centre for Advanced Photonics and Systems Lab, focusing on computing hardware, microelectronics, and secure systems. The academic rigor is complemented by the collegiate system, ensuring close mentorship and access to interdisciplinary study across engineering and natural sciences.",
        uniImg: "/images_countries/cambridge.jpg"
      },
      {
        uniName: "University of Edinburgh",
        uniInfo: "Edinburgh is a leader in data science and informatics, integrating AI with cognitive science, medicine, and social computing. The Bayes Centre offers cross-disciplinary research in machine learning, robotics, and biomedical data. Students collaborate with NHS Scotland and tech firms, gaining experience through internships and research fellowships.",
        uniImg: "/images_countries/edinburgh.jpg"
      },
      {
        uniName: "University of Oxford",
        uniInfo: "Oxford’s humanities department is distinguished by its tutorial-based approach and global research impact. Programs in history, literature, ancient languages, and intellectual history are deeply enriched by access to the Bodleian Libraries, Oxford research initiatives, and residential college communities that foster dialogue and academic mentorship.",
        uniImg: "/images_countries/oxford.jpg"
      }
    ]
  },
  {
    name: "canada",
    description: "Canada offers a blend of high academic standards, cultural inclusivity, and practical education paths. Its universities emphasize hands-on learning, research impact, and pathways to permanent residency.",
    reason: "The combination of globally-ranked programs, strong research funding, vibrant campuses, and PR opportunities post-study make Canada an attractive destination.",
    image: "/images_countries/canada.jpg",
    visa: "Apply for Study Permit via IRCC using admission letter, confirmed GIC (~CAD $10,000), medical exam, and biometrics.",
    universities: [
      {
        uniName: "University of Waterloo",
        uniInfo: "Waterloo is globally ranked for Computer Engineering, offering a unique blend of co-op education and research focus. Students alternate between academic terms and paid industry work — gaining experience in embedded systems, AI engineering applications, and software development. Waterloo’s Velocity incubator supports student startups in AI, robotics, and computing innovations.",
        uniImg: "/images_countries/waterloo.jpg"
      },
      {
        uniName: "University of Toronto",
        uniInfo: "UofT’s Data Science Institute leads in developing next-gen analytics, AI, and ethical machine learning. Its expansive research network spans neurosciences, business analytics, and public policy. Students can join collaborative labs such as the Vector Institute and the Fields Institute for Mathematical Science, applying data theory to societal challenges.",
        uniImg: "/images_countries/toronto.jpg"
      },
      {
        uniName: "McGill University",
        uniInfo: "McGill’s Faculty of Arts garners acclaim in literature, philosophy, and history studies. With campuses in Montréal, students enjoy bilingual cultural immersion. Programs encourage interdisciplinary theses in gender studies, postcolonial criticism, and media theory, supported by access to archival collections and global exchange networks.",
        uniImg: "/images_countries/mcgill.jpg"
      }
    ]
  },
  {
    name: "ireland",
    description: "Ireland has emerged as a technological and cultural hub, bridging North America and Europe. Its universities focus on research-driven curricula, industry links, and an open-door approach to international students.",
    reason: "With a booming tech sector (Google, Facebook, Amazon), English-language instruction, and flexible graduate immigration routes, Ireland offers a dynamic environment for students.",
    image: "/images_countries/ireland.jpg",
    visa: "Apply through Irish Immigration (INIS) with acceptance letter, financial proof (~€7,000/year), health insurance, and background check.",
    universities: [
      {
        uniName: "Dublin City University",
        uniInfo: "DCU is a forefront institution in Computer Engineering and Smart Systems. Its School of Electronic Engineering promotes IoT, embedded systems, and wireless communication research. The DCU Alpha Innovation Campus incubator and partnerships with Huawei, Dell, and Ericsson offer students real-world project experience and R&D exposure.",
        uniImg: "/images_countries/dcu.jpg"
      },
      {
        uniName: "University College Dublin",
        uniInfo: "UCD's School of Computer Science is a center for advanced Data Science and AI education. It hosts the Insight Centre, Ireland’s largest research center for data analytics, AI ethics, and healthcare informatics. Industrial placements and funded research opportunities bridge theory with data-driven solutions.",
        uniImg: "/images_countries/ucd.jpg"
      },
      {
        uniName: "Trinity College Dublin",
        uniInfo: "Trinity, founded in 1592, is Ireland’s premier humanities institution. Its schools of literature, philosophy, and linguistics are globally recognized. Students benefit from tutorial-style seminars, research fellowships, access to Trinity Library (one of Europe’s largest), and international cultural engagement through curated programs.",
        uniImg: "/images_countries/trinity.jpg"
      }
    ]
  },
  {
    name: "australia",
    description: "Australia offers a dynamic blend of academic quality, sunshine, and career pathways. With high research funding and strong ties to Asia-Pacific economies, its universities emphasize employability and innovation.",
    reason: "Multicultural campuses, state-backed post-study work visas (2–4 years), and strong STEM and humanities programs drive Australia’s appeal to international students.",
    image: "/images_countries/australia.jpg",
    visa: "Lodge your application through ImmiAccount with CoE, financial proof (~AUD $21,041/year), and OSHC.",
    universities: [
      {
        uniName: "University of New South Wales (UNSW)",
        uniInfo: "UNSW is a global leader in Computer Engineering with research strengths in cybersecurity, photonics, and AI systems. Its student-run ideation labs and MakerSpace facilities foster innovation, bridging hardware prototyping with startup incubation. Research collaboration with NICTA and CSIRO ensures global-level project engagement.",
        uniImg: "/images_countries/unsw.jpg"
      },
      {
        uniName: "University of Melbourne",
        uniInfo: "The Melbourne School of Engineering features a cutting-edge Data Science and AI faculty. It integrates big data analysis, machine learning, and computational modeling, preparing students for roles in finance, healthcare, and government. The e5 incubator and commercialisation platforms support student-led tech startups.",
        uniImg: "/images_countries/melbourne.jpg"
      },
      {
        uniName: "Australian National University (ANU)",
        uniInfo: "ANU’s Humanities research is world-class, covering areas like Indigenous studies, history, international relations, and classical humanities. ANU Press, in-house research journals, and embedded fellowships encourage global scholarship, while its Canberra location offers proximity to think tanks, diplomatic missions, and policy-making hubs.",
        uniImg: "/images_countries/anu.jpg"
      }
    ]
  },
  {
    name: "newzealand",
    description: "New Zealand’s universities offer hands-on education in safe, environmentally stunning settings. They emphasize research, sustainability, and practical competence — appealing to students seeking balanced lifestyles and global citizenship.",
    reason: "Easy entry, long post-study work visas, affordable living, and interdisciplinary academic programs provide a relaxed yet enriching study experience.",
    image: "/images_countries/newzealandjpg.jpg",
    visa: "Apply through Immigration NZ: supply letter of offer, NZD $15,000+ savings, health records, and English proficiency.",
    universities: [
      {
        uniName: "University of Canterbury",
        uniInfo: "UC’s Department of Electrical, Software and Computer Engineering offers specialisations in robotics, embedded systems, and intelligent systems. Research themes include smart agriculture, autonomous vehicles, and low-power computing. Students work in the Engineering Precinct and collaborate with global research partners such as NASA and insights labs.",
        uniImg: "/images_countries/canterbury.jpg"
      },
      {
        uniName: "University of Auckland",
        uniInfo: "As NZ's flagship university, its School of Computer Science and Engineering delivers leading-edge programs in AI, data mining, and computational biology. The Centre for Artificial Intelligence and Data Solutions engages students in projects tying AI to healthcare, environmental tech, and social innovation.",
        uniImg: "/images_countries/auckland.jpg"
      },
      {
        uniName: "Victoria University of Wellington",
        uniInfo: "VUW focuses on critical humanities and social research, spanning indigenous rights, political science, and media studies. Located near government institutions, it offers internship opportunities in policy, journalism, and international cooperation, enhancing its global humanities curriculum.",
        uniImg: "/images_countries/wellington.jpg"
      }
    ]
  }
];
module.exports={data:countryData}