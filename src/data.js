/**
 * @file data.js
 * Core user configuration and pre-cached catalog for Distraction-Free Static YouTube Alternative.
 * Strictly adheres to vanilla ES6 JavaScript (No .ts/.tsx).
 */

// ============================================================================
// USER CONFIGURATION: PINNED & SUBSCRIBED CHANNELS
// Users or developers can write/edit channel links directly here in the main codebase.
// ============================================================================
export const CODEBASE_SUBSCRIBED_CHANNELS = [
  {
    id: "UC8SDY8Wr6s6DIofumkZGfxg",
    url: "https://www.youtube.com/channel/UC8SDY8Wr6s6DIofumkZGfxg",
    name: "আলকেমি (Alchemy)",
    handle: "@alchemy149",
    avatarColor: "bg-emerald-600",
    initials: "AL",
    subscriberCount: "340K",
    description: "Science, Philosophy & Thought-provoking Bengali video essays and documentaries."
  },
  {
    id: "UCBA6OI6vEDK13jfoiuX694A",
    url: "https://www.youtube.com/channel/UCBA6OI6vEDK13jfoiuX694A",
    name: "OnnoRokom Pathshala",
    handle: "@OnnoRokomPathshala",
    avatarColor: "bg-amber-600",
    initials: "OP",
    subscriberCount: "1M",
    description: `Why are we doing these videos?

We dream of a different Bangladesh. We want to build a different Bangladesh, different people who will have the habit of thinking first. In ancient times, when people could not meet even the basic needs like food and clothing, but the rotation of the moon and the sun made a group of people think. Despite the obstacles of hundreds of thousands of reforms, civilization has progressed in the hands of these 'thinking' people.
Why are we human? Because we think, and that thought must be free thought. Whatever else is memorized, science cannot be education. And part of that effort is our video lectures. The purpose of these videos is to try to teach each topic in such a way that you can think 'out of the box'. And when you are a thoughtful person, you will understand for yourself what we have to do to make this country different, how far we have to go.`
  }
];

// List of reliable public Invidious API instances for privacy-preserving fetching
export const INVIDIOUS_INSTANCES = [
  "https://inv.tux.pizza",
  "https://vid.puffyan.us",
  "https://invidious.nerdvpn.de",
  "https://iv.ggtyler.dev",
  "https://invidious.lunar.icu"
];

// ============================================================================
// PRE-CACHED 1080P CATALOG & PLAYLISTS (BUILT-IN FALLBACK / INSTANT LOAD)
// Guarantees zero-downtime viewing even if external APIs or proxies rate-limit.
// ============================================================================
export const BUILTIN_CATALOG = {
  "UC8SDY8Wr6s6DIofumkZGfxg": {
    videos: [

      {
        id: "Zz_fOmRFN88",
        title: "গুণগত রসায়ন (Qualitative Chemistry)। All in One",
        duration: "11:26:49",
        thumbnail: "https://i.ytimg.com/vi/Zz_fOmRFN88/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।
class note: https://drive.google.com/file/d/16wY0SoSXwaKSVtGFUIbJW5G56KaR0O3A/view`
      }, 

      {
        id: "H83W_HTlzlc",
        title: "রাসায়নিক পরিবর্তন (Chemical Change)। All in One",
        duration: "7:25:49",
        thumbnail: "https://i.ytimg.com/vi/H83W_HTlzlc/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।
class note: https://drive.google.com/drive/folders/16V382ng4SguwD9JqwAxmxGBTIEDcl4Jy`
      }, 

        {
        id: "zLC6TKypyjU",
        title: "পরিমাণগত রসায়ন (Quantitative Chemistry)। All in One",
        duration: "8:03:16",
        thumbnail: "https://i.ytimg.com/vi/zLC6TKypyjU/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।
class note: https://drive.google.com/drive/folders/1MYuC1EMSIGTWpa74nSDaDh4lXttNSg9I`
      }, 

         {
        id: "lJoeZDLsU64",
        title: "তড়িৎ রসায়ন (Electro Chemistry)। All in One",
        duration: "8:19:38",
        thumbnail: "https://i.ytimg.com/vi/lJoeZDLsU64/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।
class note: https://drive.google.com/drive/folders/1ujmqkJaBXMsNReYcWWDSBjLzbR8PS9WW`
      }, 
      
      {
        id: "kokKBsLZOk8",
        title: "HSC 27: গুণগত রসায়ন। Mission Year Final. Qualitative Chemistry",
        duration: "4:34:19",
        thumbnail: "https://i.ytimg.com/vi/kokKBsLZOk8/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `Class note 01: https://drive.google.com/file/d/1_EMrnoa46wFEpFE6wbWfDbsnXrkisQ4c/view?usp=sharing
Class note 02:
https://drive.google.com/file/d/1kYVa6g8dsuf-PcvzH_ZyzH6cQpMsA3TB/view
Genetic Engineering, DU.
fb group:
  / 521646403299817  
fb page
  / shaownreza12`
      },
      {
        id: "CCkzzRQuTao",
        title: "HSC 27: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন । Mission Year Final: Periodic Properties and Bonds",
        duration: "4:02:47",
        thumbnail: "https://i.ytimg.com/vi/CCkzzRQuTao/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `Class note 01: https://drive.google.com/file/d/11-d3bGsKYPLwc-H_fstb-e8s2lUDVRwg/view
Class note 02: https://drive.google.com/file/d/11-d3bGsKYPLwc-H_fstb-e8s2lUDVRwg/view
Genetic Engineering, DU.
fb group:
  / 521646403299817  
fb page
  / shaownreza12`
      },
      {
        id: "jRT3nJSi2XA",
        title: "কর্মমূখী রসায়ন (Vocational Chemistry)। All in One",
        duration: "1:37:01",
        thumbnail: "https://i.ytimg.com/vi/jRT3nJSi2XA/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।
class notes: https://drive.google.com/file/d/1ppu2-vVejXpF1QNzFHR4OamuHwe1iiPq/view`
      },
      {
        id: "I9qN6pCzqeU",
        title: "HSC Foundation: একক রূপান্তর (Unit Conversion)",
        duration: "33:56",
        thumbnail: "https://i.ytimg.com/vi/I9qN6pCzqeU/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      },
      {
        id: "RQycfd6ADlQ",
        title: "HSC Foundation: SI, CGS, FPS, MKS System (একক পদ্ধতি)",
        duration: "15:53",
        thumbnail: "https://i.ytimg.com/vi/RQycfd6ADlQ/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      },
            {
        id: "fVYWwJNtxrY",
        title: "HSC Foundation: Application of Units in Equation (সমীকরণে একক বসানোর নিয়ম)",
        duration: "10:49",
        thumbnail: "https://i.ytimg.com/vi/fVYWwJNtxrY/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      },

            {
        id: "iwA47iju5n8",
        title: "HSC Foundation: Molar Mass vs Atomic Mass vs Molecular Mass(মোলার ভর vs পারমাণবিক ভর vs আণবিক ভর)",
        duration: "13:45",
        thumbnail: "https://i.ytimg.com/vi/iwA47iju5n8/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      },
         {
        id: "7AlCvxOKoSE",
        title: "HSC Foundation: Molar Volume (মোলার আয়তন)",
        duration: "9:38",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
// Organic Chemistry Playlist

  {
    id: "Gne3WZkeoPo",
    title: "12. Organic Chemistry ABC (কিছু প্রাথমিক ধারণা) । জৈব রসায়ন | Basic to Admission",
    duration: "1:23:18",
    thumbnail: "https://i.ytimg.com/vi/Gne3WZkeoPo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Organic Chemistry ABC (কিছু প্রাথমিক ধারণা)
Subject: Chemistry
Topic: Organic Chemistry ABC
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "x-PK5b1-eNc",
    title: "13. Organic Chemistry ABC (কিছু প্রাথমিক ধারণা) - Part - 02। জৈব রসায়ন | Basic to Admission",
    duration: "1:49:51",
    thumbnail: "https://i.ytimg.com/vi/x-PK5b1-eNc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Organic Chemistry ABC (কিছু প্রাথমিক ধারণা) - Part - 02
Subject: Chemistry
Topic: Organic Chemistry ABC Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "OiCEr7JO1VU",
    title: "14. Aromatic Hydrocarbon (হাকেল তত্ত্ব) । জৈব রসায়ন | Basic to Admission",
    duration: "1:00:18",
    thumbnail: "https://i.ytimg.com/vi/OiCEr7JO1VU/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Aromatic Hydrocarbon (হাকেল তত্ত্ব)
Subject: Chemistry
Topic: Aromatic Hydrocarbon
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "aV9VCHUi4Xg",
    title: "15. Benzene-01 (বেনজিন-01) । জৈব রসায়ন | Basic to Admission",
    duration: "1:16:45",
    thumbnail: "https://i.ytimg.com/vi/aV9VCHUi4Xg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Benzene-01 (বেনজিন-01)
Subject: Chemistry
Topic: Benzene-01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "uX3W-xs15fk",
    title: "16. Benzene-02 (বেনজিন-02) । জৈব রসায়ন | Basic to Admission",
    duration: "1:56:41",
    thumbnail: "https://i.ytimg.com/vi/uX3W-xs15fk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Benzene-02 (বেনজিন-02)
Subject: Chemistry
Topic: Benzene-02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "MEf78sXAMPI",
    title: "17. Toluene (টলুইন) । জৈব রসায়ন | Basic to Admission",
    duration: "1:46:55",
    thumbnail: "https://i.ytimg.com/vi/MEf78sXAMPI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Toluene (টলুইন)
Subject: Chemistry
Topic: Toluene
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "hn9telypmRA",
    title: "18. Alkene (অ্যালকিন) । জৈব রসায়ন | Basic to Admission",
    duration: "1:56:07",
    thumbnail: "https://i.ytimg.com/vi/hn9telypmRA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Alkene (অ্যালকিন)
Subject: Chemistry
Topic: Alkene
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "kafwtZwRsjY",
    title: "19. Alkyne (অ্যালকাইন) । জৈব রসায়ন | Basic to Admission",
    duration: "1:19:22",
    thumbnail: "https://i.ytimg.com/vi/kafwtZwRsjY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Alkyne (অ্যালকাইন)
Subject: Chemistry
Topic: Alkyne
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "A2KKAcJA0yg",
    title: "20. Alkyl Halide (অ্যালকাইল হ্যালাইড) । জৈব রসায়ন | Basic to Admission",
    duration: "1:23:16",
    thumbnail: "https://i.ytimg.com/vi/A2KKAcJA0yg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Alkyl Halide (অ্যালকাইল হ্যালাইড)
Subject: Chemistry
Topic: Alkyl Halide
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "qORiNZRDdKA",
    title: "21. Alkyl Halide-02 (অ্যালকাইল হ্যালাইড-02) । জৈব রসায়ন | Basic to Admission",
    duration: "1:27:36",
    thumbnail: "https://i.ytimg.com/vi/qORiNZRDdKA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Alkyl Halide-02 (অ্যালকাইল হ্যালাইড-02)
Subject: Chemistry
Topic: Alkyl Halide-02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "NnfLXUGmbuI",
    title: "22. Alcohol (অ্যালকোহল) । জৈব রসায়ন | Basic to Admission",
    duration: "1:32:42",
    thumbnail: "https://i.ytimg.com/vi/NnfLXUGmbuI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Alcohol (অ্যালকোহল)
Subject: Chemistry
Topic: Alcohol
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "h7r5AdQfk4g",
    title: "23. Phenol (ফেনল) । জৈব রসায়ন | Basic to Admission",
    duration: "1:15:38",
    thumbnail: "https://i.ytimg.com/vi/h7r5AdQfk4g/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Phenol (ফেনল)
Subject: Chemistry
Topic: Phenol
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "jM9xBJrYNaA",
    title: "24. Carbonyl Carbon-01 (কার্বনিল কার্বন-০১) । জৈব রসায়ন | Basic to Admission",
    duration: "2:08:20",
    thumbnail: "https://i.ytimg.com/vi/jM9xBJrYNaA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Carbonyl Carbon-01 (কার্বনিল কার্বন-০১)
Subject: Chemistry
Topic: Carbonyl Carbon-01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "VElosPpBFbM",
    title: "25. Carbonyl Carbon-00 (Carbonyl Carbon-02) . Organic Chemistry | Basic to Admission",
    duration: "33:16",
    thumbnail: "https://i.ytimg.com/vi/VElosPpBFbM/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Carbonyl Carbon-00 (Carbonyl Carbon-02)
Subject: Chemistry
Topic: Carbonyl Carbon-02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "VitdAG_o7g8",
    title: "26. Acid (জৈব এসিড) । জৈব রসায়ন | Basic to Admission",
    duration: "1:39:29",
    thumbnail: "https://i.ytimg.com/vi/VitdAG_o7g8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: Organic Chemistry
Lecture: Acid (জৈব এসিড)
Subject: Chemistry
Topic: Acid
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  }


      
    ],
  playlists: [
      {
        id: "Chemistry_All_In_One_01",
        title: "All in One",
        videoCount: 7,
        thumbnail: "https://i.ytimg.com/vi/Zz_fOmRFN88/hqdefault.jpg",
        updatedText: "Updated 4 days ago",
        videos: ["Zz_fOmRFN88", "H83W_HTlzlc", "zLC6TKypyjU", "lJoeZDLsU64", "jRT3nJSi2XA", "kokKBsLZOk8", "CCkzzRQuTao"]
      },
      {
        id: "HSC_Foundation_02",
        title: "HSC Foundation",
        videoCount: 5,
        thumbnail: "https://i.ytimg.com/vi/I9qN6pCzqeU/hqdefault.jpg",
        updatedText: "Updated 2 weeks ago",
        videos: ["I9qN6pCzqeU", "RQycfd6ADlQ", "fVYWwJNtxrY", "iwA47iju5n8", "7AlCvxOKoSE"]
      },
      {
        id: "Organic_Chemistry_03",
        title: "Organic Chemistry (জৈব রসায়ন) । Basic to Admission",
        videoCount: 5,
        thumbnail: "https://i.ytimg.com/vi/kRnXF7BP-_8/hqdefault.jpg",
        updatedText: "Updated 1 month ago",
        videos: ["kRnXF7BP-_8", "RAKLOaEjfrY",  "5UZ60arP1qo", "ULkubqXJo02", "cS2kG4S7r2M"]
      },
      {
        id: "Organic_Chemistry",
        title: "Organic Chemistry Combo",
        videoCount: 29,
        thumbnail: "https://i.ytimg.com/vi/Gne3WZkeoPo/hqdefault.jpg",
        updatedText: "Updated 4 days ago",
        videos: ["Gne3WZkeoPo", "x-PK5b1-eNc", "OiCEr7JO1VU", "aV9VCHUi4Xg", "uX3W-xs15fk", "MEf78sXAMPI", "hn9telypmRA", "kafwtZwRsjY", "A2KKAcJA0yg", "qORiNZRDdKA", "NnfLXUGmbuI", "h7r5AdQfk4g", "jM9xBJrYNaA", "VElosPpBFbM", "VitdAG_o7g8"]
      },
    ]
  },
"UCBA6OI6vEDK13jfoiuX694A": {
    videos: [
//Mathematics Portion
//Differentiation
      {
        id: "DWCUCsXoMQc",
        title: "01. Continuous & Discontinuous Function | Continuous and Discontinuous Function",
        duration: "6:11",
        thumbnail: "https://i.ytimg.com/vi/DWCUCsXoMQc/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "VIdLvHC407c",
        title: "02. Existence of Limit | লিমিটের অস্তিত্ব | OnnoRokom Pathshala",
        duration: "8:11",
        thumbnail: "https://i.ytimg.com/vi/VIdLvHC407c/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "xThVr1W1Pnw",
        title: "03. Infinite Limit | Infinite Limit | OnnoRokom Pathshala",
        duration: "13:12",
        thumbnail: "https://i.ytimg.com/vi/xThVr1W1Pnw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "P6ON5damQFE",
        title: "04. Series Type | Series Type | OnnoRokom Pathshala",
        duration: "5:39",
        thumbnail: "https://i.ytimg.com/vi/P6ON5damQFE/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "WNzrs9L1qFA",
        title: "05. Exponential | Exponential | OnnoRokom Pathshala",
        duration: "6:30",
        thumbnail: "https://i.ytimg.com/vi/WNzrs9L1qFA/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "0TqfjNhZHiI",
        title: "06. Trigonometric Function Part 01 | ত্রিকোণমিতিক ফাংশন পর্ব ০১ | OnnoRokom Pathshala",
        duration: "13:53",
        thumbnail: "https://i.ytimg.com/vi/0TqfjNhZHiI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Yearnp
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "WlikLWCJBVE",
        title: "06. Trigonometric Function Part 02 | ত্রিকোণমিতিক ফাংশন পর্ব ০২ | OnnoRokom Pathshala",
        duration: "12:34",
        thumbnail: "https://i.ytimg.com/vi/WlikLWCJBVE/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "mD_VcAXrUZw",
        title: "06. Trigonometric Function Part 03 | ত্রিকোণমিতিক ফাংশন পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "10:02",
        thumbnail: "https://i.ytimg.com/vi/mD_VcAXrUZw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "9GCpKsdzumk",
        title: "07. L'Hospital Rule Part 01 | লা-হসপিটাল রুল পর্ব ০১ | OnnoRokom Pathshala",
        duration: "14:25",
        thumbnail: "https://i.ytimg.com/vi/9GCpKsdzumk/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "NfRBFiaeySY",
        title: "07. L'Hospital Rule Part 02 | La-Hospital Rule Part 02 | OnnoRokom Pathshala",
        duration: "9:24",
        thumbnail: "https://i.ytimg.com/vi/NfRBFiaeySY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "-kotvsCL-Cw",
        title: "08. Continuity | Inseparability | OnnoRokom Pathshala",
        duration: "18:10",
        thumbnail: "https://i.ytimg.com/vi/-kotvsCL-Cw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "V1bJaBd5X6Y",
        title: "01. Differentiation Coefficient | অন্তরক সহগ | OnnoRokom Pathshala",
        duration: "8:13",
        thumbnail: "https://i.ytimg.com/vi/V1bJaBd5X6Y/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "0RJBWAXjf_4",
        title: "02. Proving the Formula for Integrating in the Basic Rule Part 01 | OnnoRokom Pathshala",
        duration: "13:51",
        thumbnail: "https://i.ytimg.com/vi/0RJBWAXjf_4/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "jU8HtTQr4OU",
        title: "02. মূল নিয়মে অন্তরীকরণের সূত্র প্রতিপাদন পর্ব ০২ | OnnoRokom Pathshala",
        duration: "17:46",
        thumbnail: "https://i.ytimg.com/vi/jU8HtTQr4OU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "YkuAwBpzXDs",
        title: "03. Determination of Differentiation Coefficient | Determination of Differentiation Coefficient |...",
        duration: "7:20",
        thumbnail: "https://i.ytimg.com/vi/YkuAwBpzXDs/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
            {
        id: "wMMi4dqAw7c",
        title: "04. Differentiation of (uv) | Proving U.V. | OnnoRokom Pathshala",
        duration: "9:38",
        thumbnail: "https://i.ytimg.com/vi/wMMi4dqAw7c/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },
      {
        id: "nH5zbORU1RI",
        title: "05. Differentiation of u by v | ইউ/ভি এর অন্তরীকরণ | OnnoRokom Pathshala",
        duration: "9:25",
        thumbnail: "https://i.ytimg.com/vi/nH5zbORU1RI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "U0AzIZr8xdU",
        title: "06. Chain Rule Part 01 | চেইন রূল পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:35",
        thumbnail: "https://i.ytimg.com/vi/U0AzIZr8xdU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "c6z46owVRxY",
        title: "06. Chain Rule Part 02 | চেইন রূল পর্ব ০২ | OnnoRokom Pathshala",
        duration: "9:29",
        thumbnail: "https://i.ytimg.com/vi/c6z46owVRxY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "rYSLtUh5_FA",
        title: "07. Inverse Circular Function | Inverse Circular Function | OnnoRokom Pathshala",
        duration: "7:20",
        thumbnail: "https://i.ytimg.com/vi/rYSLtUh5_FA/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "Wxnv4q2ndMQ",
        title: "08. Differentiation after Substitution | OnnoRokom Pathshala",
        duration: "7:41",
        thumbnail: "https://i.ytimg.com/vi/Wxnv4q2ndMQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "QmK5n2AF61I",
        title: "09. Particular Type Differentiation Part 01 | Particular Type Differentiation Part 01",
        duration: "11:17",
        thumbnail: "https://i.ytimg.com/vi/QmK5n2AF61I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "3vBzgjhzDU4",
        title: "09. Particular Type Differentiation Part 02 | পার্টিকুলার টাইপ অনতরীকরণ পর্ব ০২",
        duration: "9:39",
        thumbnail: "https://i.ytimg.com/vi/3vBzgjhzDU4/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "QAs-4QDgpHE",
        title: "10. প্যারামেত্রিক ফাংশন এবং ফাংশনের সাপেক্ষে ফাংশনের অন্তরীকরণ | OnnoRokom Pathshala",
        duration: "8:18",
        thumbnail: "https://i.ytimg.com/vi/QAs-4QDgpHE/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "7LZh5Uhtz3o",
        title: "01. n-th derivative Part 01 | এন তম অন্তরক পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:10",
        thumbnail: "https://i.ytimg.com/vi/7LZh5Uhtz3o/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "FTOsKAQXtjc",
        title: "01. n-th derivative Part 02 | এন তম অন্তরক পর্ব ০২ | OnnoRokom Pathshala",
        duration: "16:26",
        thumbnail: "https://i.ytimg.com/vi/FTOsKAQXtjc/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "5btc3KvVJN0",
        title: "01. n-th derivative Part 03 | এন তম অন্তরক পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "17:01",
        thumbnail: "https://i.ytimg.com/vi/5btc3KvVJN0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "eMs3AYc9VNQ",
        title: "02. Tangent & Perpendicular Part 01 | স্পর্শক ও অভিলম্ব পর্ব ০১ | OnnoRokom Pathshala",
        duration: "13:56",
        thumbnail: "https://i.ytimg.com/vi/eMs3AYc9VNQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "zsOzfTdSQrQ",
        title: "02. Tangent & Perpendicular Part 02 | স্পর্শক ও অভিলম্ব পর্ব ০২ | OnnoRokom Pathshala",
        duration: "10:32",
        thumbnail: "https://i.ytimg.com/vi/zsOzfTdSQrQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "kHxkKshgzGA",
        title: "02. Tangent & Perpendicular Part 03 | Tangent & Perpendicular Part 03 | OnnoRokom Pathshala",
        duration: "15:25",
        thumbnail: "https://i.ytimg.com/vi/kHxkKshgzGA/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "9wAclB37rcU",
        title: "03. Maxima & Minima Part 01 | Guruman Laguman Part 01 | OnnoRokom Pathshala",
        duration: "12:05",
        thumbnail: "https://i.ytimg.com/vi/9wAclB37rcU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "CWeubWxS0Yk",
        title: "03. Maxima & Minima Part 02 | গুরুমান লগুমান পর্ব ০২ | OnnoRokom Pathshala",
        duration: "11:38",
        thumbnail: "https://i.ytimg.com/vi/CWeubWxS0Yk/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      },

      {
        id: "jImlqKEIBaI",
        title: "03. Maxima & Minima Part 03 | গুরুমান লগুমান পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "11:49",
        thumbnail: "https://i.ytimg.com/vi/jImlqKEIBaI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
      }, 

     {
        id: "LZv7jqAmVC8",
        title: "03. Maxima & Minima Part 04 | গুরুমান লগুমান পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "5:21",
        thumbnail: "https://i.ytimg.com/vi/LZv7jqAmVC8/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Math
Lecture: Differentiation (Limit)
Subject: Math
Topic: Continuous & Discontinuous Function
Class: HSC 1st Year
Lectured by: Ashikuzzaman Rasel`
     },
// Physics
// Newtonian Mechanics
// Physics
// Newtonian Mechanics
{
        id: "jgsnZoZ-hVg",
        title: "01. Newton's 1st law Part 01 | নিউটনের প্রথম সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "8:18",
        thumbnail: "https://i.ytimg.com/vi/jgsnZoZ-hVg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "idxuC5TzCgU",
        title: "01. Newton's 1st law Part 02 | নিউটনের প্রথম সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "15:16",
        thumbnail: "https://i.ytimg.com/vi/idxuC5TzCgU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Fl822BDrcN0",
        title: "01. Newton's 1st law Part 03 | নিউটনের প্রথম সূত্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "12:10",
        thumbnail: "https://i.ytimg.com/vi/Fl822BDrcN0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "tsEpmGRwwFw",
        title: "01. Newton's 1st law Part 04 | নিউটনের প্রথম সূত্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "14:07",
        thumbnail: "https://i.ytimg.com/vi/tsEpmGRwwFw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "wCc3e1LE9-s",
        title: "01. Newton's 1st law Part 05 | নিউটনের প্রথম সূত্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "8:52",
        thumbnail: "https://i.ytimg.com/vi/wCc3e1LE9-s/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "GVoQGv5V-8w",
        title: "02. Newton's 2nd law Part 01 | নিউটনের দ্বিতীয় সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:56",
        thumbnail: "https://i.ytimg.com/vi/GVoQGv5V-8w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "VlSByMqhQGM",
        title: "02. Newton's 2nd law Part 02 | নিউটনের দ্বিতীয় সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "14:53",
        thumbnail: "https://i.ytimg.com/vi/VlSByMqhQGM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "oJogS-Kv-4w",
        title: "02. Newton's 2nd law Part 03 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "12:49",
        thumbnail: "https://i.ytimg.com/vi/oJogS-Kv-4w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "DkT9szIPS-w", 
        title: "02. Newton's 2nd law Part 04 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "11:03",
        thumbnail: "https://i.ytimg.com/vi/DkT9szIPS-w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "vrfc3GebITQ",
        title: "02. Newton's 2nd law Part 05 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "10:44",
        thumbnail: "https://i.ytimg.com/vi/vrfc3GebITQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "PlpNd6zcSeU",
        title: "03. Newton's 3rd law Part 01 | নিউটনের তৃতীয় সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "15:51",
        thumbnail: "https://i.ytimg.com/vi/PlpNd6zcSeU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "U9QRfxy22yM",
        title: "03. Newton's 3rd law Part 02 | নিউটনের তৃতীয় সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "5:59",
        thumbnail: "https://i.ytimg.com/vi/U9QRfxy22yM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "j1x4niLVbYQ",
        title: "01. Center of Gravity Part 01 | ভরকেন্দ্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "13:07",
        thumbnail: "https://i.ytimg.com/vi/j1x4niLVbYQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "PfSONKumv2A",
        title: "01. Center of Gravity Part 02 | ভরকেন্দ্র পর্ব ০২ | OnnoRokom Pathshala ",
        duration: "15:59",
        thumbnail: "https://i.ytimg.com/vi/PfSONKumv2A/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Vu1y7BuOIh0",
        title: "01. Center of Gravity Part 03 | ভরকেন্দ্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "13:56",
        thumbnail: "https://i.ytimg.com/vi/Vu1y7BuOIh0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Op6xiICaoOo",
        title: "01. Center of Gravity Part 04 | ভরকেন্দ্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "13:56",
        thumbnail: "https://i.ytimg.com/vi/Op6xiICaoOo/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "RrstMhs1oPg",
        title: "01. Center of Gravity Part 05 | ভরকেন্দ্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "12 :18", 
        thumbnail: "https://i.ytimg.com/vi/RrstMhs1oPg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "JF_BD5zSxPw",
        title: "02. Conservation of Momentum Basic Part 01 | ভরবেগের সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:45",
        thumbnail: "https://i.ytimg.com/vi/JF_BD5zSxPw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "qOtMqwZpTrM",
        title: "02. Conservation of Momentum Basic Part 02 | ভরবেগের সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "17:03",
        thumbnail: "https://i.ytimg.com/vi/qOtMqwZpTrM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "dlEh1U1ei5I",
        title: "02. Conservation of Momentum Basic Part 03 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "18:02",
        thumbnail: "https://i.ytimg.com/vi/dlEh1U1ei5I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "dlEh1U1ei5I",
        title: "02. Conservation of Momentum Basic Part 04 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "11:52",
        thumbnail: "https://i.ytimg.com/vi/dlEh1U1ei5I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "ZbvpldoW8w",
        title: "02. Conservation of Momentum Basic Part 05 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "17:16",
        thumbnail: "https://i.ytimg.com/vi/ZbvpldoW8w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "SE5bmqIBjZY",
        title: "02. Conservation of Momentum Basic Part 06 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৬ | OnnoRokom Pathshala",
        duration: "10:57",
        thumbnail: "https://i.ytimg.com/vi/SE5bmqIBjZY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "hsO2bC-GQXk",
        title: "02. Conservation of Momentum Basic Part 07 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৭ | OnnoRokom Pathshala",
        duration: "9:08",
        thumbnail: "https://i.ytimg.com/vi/hsO2bC-GQXk/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "j8H4WyxAKxI",
        title: "01. Conservation of Momentum Part 01 | ভরবেগের সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "15:51",
        thumbnail: "https://i.ytimg.com/vi/j8H4WyxAKxI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "LHZ1WA34bgg",
        title: "01. Conservation of Momentum Part 02 | ভরবেগের সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "15:35",
        thumbnail: "https://i.ytimg.com/vi/LHZ1WA34bgg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "sPjboJPiV7Y",
        title: "02. Conservation of Kinetic Energy Part 01 | গতিশক্তির সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "17:36",
        thumbnail: "https://i.ytimg.com/vi/sPjboJPiV7Y/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "ES1C2hmceNY",
        title: "02. Conservation of Kinetic Energy Part 02 | গতিশক্তির সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "8:18",
        thumbnail: "https://i.ytimg.com/vi/ES1C2hmceNY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "fEz2ifplYhs",
        title: "03. External and Internal Force | অন্তর্গত ও বহিরাগত বল | OnnoRokom Pathshala",
        duration: "16:50",
        thumbnail: "https://i.ytimg.com/vi/fEz2ifplYhs/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      },
//HSC Combo
//HSC Combo
{
        id: "KphXn1GYcG0",
        title: "HSC Physics Part-01",
        duration: "1:57:58",
        thumbnail: "https://i.ytimg.com/vi/KphXn1GYcG0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Vector-Dynamics Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "yEScNi9si7c",
        title: "HSC Physics Part-01",
        duration: "54:19",
        thumbnail: "https://i.ytimg.com/vi/yEScNi9si7c/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Vector-Dynamics Part 02
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "0A6g4Z30E7Q",
        title: "HSC Physics Part-02",
        duration: "2:02:20",
        thumbnail: "https://i.ytimg.com/vi/0A6g4Z30E7Q/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Newtonian Mechanics-Work, Power and Energy Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "hp_qTlguG_I",
        title: "HSC Physics Part-02",
        duration: "1:05:42",
        thumbnail: "https://i.ytimg.com/vi/hp_qTlguG_I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Newtonian Mechanics-Work, Power and Energy Part 02
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "9AeM-QnwF4k",
        title: "HSC Physics Part-03",
        duration: "1:38:47",
        thumbnail: "https://i.ytimg.com/vi/9AeM-QnwF4k/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Gravitation and Gravity-Structural Properties of Matter Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      },  
{
        id: "0v8Prmi6xYg",
        title: "HSC Physics Part-03",
        duration: "58:45",
        thumbnail: "https://i.ytimg.com/vi/0v8Prmi6xYg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Gravitation and Gravity-Structural Properties of Matter Part 02
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "quSUCOrsbeU",
        title: "HSC Physics Part-04",
        duration: "1:48:54",
        thumbnail: "https://i.ytimg.com/vi/quSUCOrsbeU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Periodic Motion-Waves
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      },  
{
        id: "lP8277QSPTU",
        title: "HSC Physics Part-05",
        duration: "1:48:54",
        thumbnail: "https://i.ytimg.com/vi/lP8277QSPTU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Thermodynamics-Ideal Gas and Its motion Part
Class: HSC 2nd Year
Lectured by: Maksudul Hossain Jewel`
      },
{
        id: "8txuXBijYUw",
        title: "HSC Physics Part-06",
        duration: "1:58:36",
        thumbnail: "https://i.ytimg.com/vi/8txuXBijYUw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Static Electricty-Current Electricity Part 01
Class: HSC 2nd Year
Lectured by: Maksudul Hossain Jewel`
      },
{
        id: "8txuXBijYUw",
        title: "HSC Physics Part-06",
        duration: "1:07:05",
        thumbnail: "https://i.ytimg.com/vi/8txuXBijYUw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Static Electricty-Current Electricity Part 02
Class: HSC 2nd Year
Lectured by: Tusher Chakroborty`
      },
{
        id: "UI7fgWG6doU",
        title: "HSC Physics Part-07",
        duration: "1:48:13",
        thumbnail: "https://i.ytimg.com/vi/UI7fgWG6doU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Electro-Magentism Part 01
Class: HSC 2nd Year
Lectured by: Tusher Chakroborty`
      },
{
        id: "yA8OAvJlp90",
        title: "HSC Physics Part-07",
        duration: "1:04:41",
        thumbnail: "https://i.ytimg.com/vi/yA8OAvJlp90/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Electro-Magentism Part 02
Class: HSC 2nd Year
Lectured by: Tusher Chakroborty`
      },
{
        id: "Y2_DZTOmu4o",
        title: "HSC Physics Part-08",
        duration: "1:48:13",
        thumbnail: "https://i.ytimg.com/vi/Y2_DZTOmu4o/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Geometrical Optics-Wave Theory Part 01
Class: HSC 2nd Year
Lectured by: Tusher Chakroborty`
      },
{
        id: "Jara5dO9dyg",
        title: "HSC Physics Part-08",
        duration: "1:04:41",
        thumbnail: "https://i.ytimg.com/vi/Jara5dO9dyg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: Udvash
Subject: Physics
Topic: Geometrical Optics-Wave Theroy Part 02
Class: HSC 2nd Year
Lectured by: Tusher Chakroborty`
      },
// Physics
// Newtonian Mechanics
{
        id: "jgsnZoZ-hVg",
        title: "01. Newton's 1st law Part 01 | নিউটনের প্রথম সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "8:18",
        thumbnail: "https://i.ytimg.com/vi/jgsnZoZ-hVg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "idxuC5TzCgU",
        title: "01. Newton's 1st law Part 02 | নিউটনের প্রথম সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "15:16",
        thumbnail: "https://i.ytimg.com/vi/idxuC5TzCgU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Fl822BDrcN0",
        title: "01. Newton's 1st law Part 03 | নিউটনের প্রথম সূত্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "12:10",
        thumbnail: "https://i.ytimg.com/vi/Fl822BDrcN0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "tsEpmGRwwFw",
        title: "01. Newton's 1st law Part 04 | নিউটনের প্রথম সূত্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "14:07",
        thumbnail: "https://i.ytimg.com/vi/tsEpmGRwwFw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "wCc3e1LE9-s",
        title: "01. Newton's 1st law Part 05 | নিউটনের প্রথম সূত্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "8:52",
        thumbnail: "https://i.ytimg.com/vi/wCc3e1LE9-s/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "GVoQGv5V-8w",
        title: "02. Newton's 2nd law Part 01 | নিউটনের দ্বিতীয় সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:56",
        thumbnail: "https://i.ytimg.com/vi/GVoQGv5V-8w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "VlSByMqhQGM",
        title: "02. Newton's 2nd law Part 02 | নিউটনের দ্বিতীয় সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "14:53",
        thumbnail: "https://i.ytimg.com/vi/VlSByMqhQGM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "oJogS-Kv-4w",
        title: "02. Newton's 2nd law Part 03 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "12:49",
        thumbnail: "https://i.ytimg.com/vi/oJogS-Kv-4w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "DkT9szIPS-w", 
        title: "02. Newton's 2nd law Part 04 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "11:03",
        thumbnail: "https://i.ytimg.com/vi/DkT9szIPS-w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "vrfc3GebITQ",
        title: "02. Newton's 2nd law Part 05 | নিউটনের দ্বিতীয় সূত্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "10:44",
        thumbnail: "https://i.ytimg.com/vi/vrfc3GebITQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "PlpNd6zcSeU",
        title: "03. Newton's 3rd law Part 01 | নিউটনের তৃতীয় সূত্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "15:51",
        thumbnail: "https://i.ytimg.com/vi/PlpNd6zcSeU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "U9QRfxy22yM",
        title: "03. Newton's 3rd law Part 02 | নিউটনের তৃতীয় সূত্র পর্ব ০২ | OnnoRokom Pathshala",
        duration: "5:59",
        thumbnail: "https://i.ytimg.com/vi/U9QRfxy22yM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "j1x4niLVbYQ",
        title: "01. Center of Gravity Part 01 | ভরকেন্দ্র পর্ব ০১ | OnnoRokom Pathshala",
        duration: "13:07",
        thumbnail: "https://i.ytimg.com/vi/j1x4niLVbYQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "PfSONKumv2A",
        title: "01. Center of Gravity Part 02 | ভরকেন্দ্র পর্ব ০২ | OnnoRokom Pathshala ",
        duration: "15:59",
        thumbnail: "https://i.ytimg.com/vi/PfSONKumv2A/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Vu1y7BuOIh0",
        title: "01. Center of Gravity Part 03 | ভরকেন্দ্র পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "13:56",
        thumbnail: "https://i.ytimg.com/vi/Vu1y7BuOIh0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "Op6xiICaoOo",
        title: "01. Center of Gravity Part 04 | ভরকেন্দ্র পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "13:56",
        thumbnail: "https://i.ytimg.com/vi/Op6xiICaoOo/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "RrstMhs1oPg",
        title: "01. Center of Gravity Part 05 | ভরকেন্দ্র পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "12 :18", 
        thumbnail: "https://i.ytimg.com/vi/RrstMhs1oPg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "JF_BD5zSxPw",
        title: "02. Conservation of Momentum Basic Part 01 | ভরবেগের সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "12:45",
        thumbnail: "https://i.ytimg.com/vi/JF_BD5zSxPw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "qOtMqwZpTrM",
        title: "02. Conservation of Momentum Basic Part 02 | ভরবেগের সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "17:03",
        thumbnail: "https://i.ytimg.com/vi/qOtMqwZpTrM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "dlEh1U1ei5I",
        title: "02. Conservation of Momentum Basic Part 03 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "18:02",
        thumbnail: "https://i.ytimg.com/vi/dlEh1U1ei5I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "dlEh1U1ei5I",
        title: "02. Conservation of Momentum Basic Part 04 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "11:52",
        thumbnail: "https://i.ytimg.com/vi/dlEh1U1ei5I/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "-ZbvpldoW8w",
        title: "02. Conservation of Momentum Basic Part 05 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৫ | OnnoRokom Pathshala",
        duration: "17:16",
        thumbnail: "https://i.ytimg.com/vi/-ZbvpldoW8w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "SE5bmqIBjZY",
        title: "02. Conservation of Momentum Basic Part 06 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৬ | OnnoRokom Pathshala",
        duration: "10:57",
        thumbnail: "https://i.ytimg.com/vi/SE5bmqIBjZY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "hsO2bC-GQXk",
        title: "02. Conservation of Momentum Basic Part 07 | ভরবেগের সংরক্ষণশীলতা পর্ব ০৭ | OnnoRokom Pathshala",
        duration: "9:08",
        thumbnail: "https://i.ytimg.com/vi/hsO2bC-GQXk/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "j8H4WyxAKxI",
        title: "01. Conservation of Momentum Part 01 | ভরবেগের সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "15:51",
        thumbnail: "https://i.ytimg.com/vi/j8H4WyxAKxI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "LHZ1WA34bgg",
        title: "01. Conservation of Momentum Part 02 | ভরবেগের সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "15:35",
        thumbnail: "https://i.ytimg.com/vi/LHZ1WA34bgg/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "sPjboJPiV7Y",
        title: "02. Conservation of Kinetic Energy Part 01 | গতিশক্তির সংরক্ষণশীলতা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "17:36",
        thumbnail: "https://i.ytimg.com/vi/sPjboJPiV7Y/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "ES1C2hmceNY",
        title: "02. Conservation of Kinetic Energy Part 02 | গতিশক্তির সংরক্ষণশীলতা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "8:18",
        thumbnail: "https://i.ytimg.com/vi/ES1C2hmceNY/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      }, 
{
        id: "fEz2ifplYhs",
        title: "03. External and Internal Force | অন্তর্গত ও বহিরাগত বল | OnnoRokom Pathshala",
        duration: "16:50",
        thumbnail: "https://i.ytimg.com/vi/fEz2ifplYhs/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `
Video Title: OnnoRokom Pathshala_Newtonian Mechanics (Newton's law)
Subject: Physics
Topic: Newton's 1st law Part 01
Class: HSC 1st Year
Lectured by: Maksudul Hossain Jewel`
      },
// Wave


      {
        id: "Y2-6OInzV44",
        title: "01. General Discussion about Wave | তরঙ্গ সম্পর্কীয় সাধারণ আলোচনা",
        duration: "21:37",
        thumbnail: "https://i.ytimg.com/vi/Y2-6OInzV44/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },  
      {
        id: "ZhCQu47G2m4",
        title: "02. Intensity of Wave | তরঙ্গের তীব্রতা | OnnoRokom Pathshala",
        duration: "14:50",
        thumbnail: "https://i.ytimg.com/vi/ZhCQu47G2m4/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },  

      {
        id: "hO0vRj4i8RE",
        title: "03. Wave Superposition | Wave Superposition | OnnoRokom Pathshala",
        duration: "5:50",
        thumbnail: "https://i.ytimg.com/vi/hO0vRj4i8RE/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },  

      {
        id: "zN5ONZFUFgQ",
        title: "04. Static Wave | স্থির তরঙ্গ | OnnoRokom Pathshala",
        duration: "29:30",
        thumbnail: "https://i.ytimg.com/vi/zN5ONZFUFgQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },

      {
        id: "Z7cZLp0ZFzU",
        title: "05. Wire in Tension | Tensioned Wire | OnnoRokom Pathshala",
        duration: "14:32",
        thumbnail: "https://i.ytimg.com/vi/Z7cZLp0ZFzU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },

      {
        id: "9OUNZ6MQmhQ",
        title: "06. Beat Related Math | বীট সংক্রান্ত অংক | OnnoRokom Pathshala",
        duration: "10:20",
        thumbnail: "https://i.ytimg.com/vi/9OUNZ6MQmhQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },

      {
        id: "aRn13XFKuj0",
        title: "Beat - Mathematical Problem Part 01 | বীট – এর গাণিতিক সমস্যা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "10:20",
        thumbnail: "https://i.ytimg.com/vi/aRn13XFKuj0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: Bit - Mathematical Problem Part 01
Class: HSC 1st Year
Lectured by: Mahmudul Hasan Sohag`
      },

      {
        id: "GRI173t9t28",
        title: "Beat - Mathematical Problem Part 02 | বীট – এর গাণিতিক সমস্যা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "15:49",
        thumbnail: "https://i.ytimg.com/vi/GRI173t9t28/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: Bit - Mathematical Problem Part 01
Class: HSC 1st Year
Lectured by: Mahmudul Hasan Sohag`
      },

      {
        id: "izmEeudNgU4",
        title: "Beat - Mathematical Problem Part 03 | বীট – এর গাণিতিক সমস্যা পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "13:20",
        thumbnail: "https://i.ytimg.com/vi/izmEeudNgU4/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: Bit - Mathematical Problem Part 01
Class: HSC 1st Year
Lectured by: Mahmudul Hasan Sohag`
      },

      {
        id: "yfIiE2csYIc",
        title: "Beat - Mathematical Problem Part 04 | বীট – এর গাণিতিক সমস্যা পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "6:42",
        thumbnail: "https://i.ytimg.com/vi/yfIiE2csYIc/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: Bit - Mathematical Problem Part 01
Class: HSC 1st Year
Lectured by: Mahmudul Hasan Sohag`
      },

      {
        id: "J_hYeNvs4EI",
        title: "07. Relative Intensity and Intensity Level | প্রমাণ তীব্রতা ও তীব্রতা লেভেল",
        duration: "12:52",
        thumbnail: "https://i.ytimg.com/vi/J_hYeNvs4EI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },

      {
        id: "pmCub0w_4OM",
        title: "08. প্রমাণ তীব্রতা ও তীব্রতা লেভেল এর গাণিতিক সমস্যাবলি | OnnoRokom Pathshala",
        duration: "15:06",
        thumbnail: "https://i.ytimg.com/vi/pmCub0w_4OM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },

// Periodic Motion
      {
        id: "LVE9SjOd0Hw",
        title: "01. Periodic Motion | পর্যায়বৃত্ত গতি | OnnoRokom Pathshala",
        duration: "8:44",
        thumbnail: "https://i.ytimg.com/vi/LVE9SjOd0Hw/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "3u_UKd8iTTE",
        title: "02. SHM Part 01 | সরল ছন্দিত স্পন্দন পর্ব ০১ | OnnoRokom Pathshala",
        duration: "15:19",
        thumbnail: "https://i.ytimg.com/vi/3u_UKd8iTTE/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "Hi6Uo6NQ8Zc",
        title: "02. SHM Part 02 | সরল ছন্দিত স্পন্দন পর্ব ০২ | OnnoRokom Pathshala",
        duration: "11:13",
        thumbnail: "https://i.ytimg.com/vi/Hi6Uo6NQ8Zc/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "_uqioK_AnbM",
        title: "02. SHM Part 03 | সরল ছন্দিত স্পন্দন পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "11:25",
        thumbnail: "https://i.ytimg.com/vi/_uqioK_AnbM/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "29RYUx1KUu0",
        title: "02. SHM Part 04 | সরল ছন্দিত স্পন্দন পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "10:14",
        thumbnail: "https://i.ytimg.com/vi/29RYUx1KUu0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "-o7X58xkiXo",
        title: "03. Phase Part 01 | দশা পর্ব ০১ | OnnoRokom Pathshala",
        duration: "8:37",
        thumbnail: "https://i.ytimg.com/vi/-o7X58xkiXo/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "9iWqKmnK3_0",
        title: "03. Phase Part 02 | দশা পর্ব ০২ | OnnoRokom Pathshala",
        duration: "9:30",
        thumbnail: "https://i.ytimg.com/vi/9iWqKmnK3_0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "UhJCLSLHi5M",
        title: "03. Phase Part 03 | দশা পর্ব ০৩ | OnnoRokom Pathshala",
        duration: "13:47",
        thumbnail: "https://i.ytimg.com/vi/UhJCLSLHi5M/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "bS7SoiY8Gzc",
        title: "03. Phase Part 04 | দশা পর্ব ০৪ | OnnoRokom Pathshala",
        duration: "10:17",
        thumbnail: "https://i.ytimg.com/vi/bS7SoiY8Gzc/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "7B3GW6siIVI",
        title: "04. SHM Differential Equation Part 01 | সরল ছন্দিত স্পন্দনের অন্তরক সমীকরণ পর্ব ০১",
        duration: "8:30",
        thumbnail: "https://i.ytimg.com/vi/7B3GW6siIVI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "kB2OYCRCHRA",
        title: "04. SHM Differential Equation Part 02 | সরল ছন্দিত স্পন্দনের অন্তরক সমীকরণ পর্ব ০২",
        duration: "15:07",
        thumbnail: "https://i.ytimg.com/vi/kB2OYCRCHRA/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "9HVn0cLmf3o",
        title: "05. SHM Practical Application | সরল ছন্দিত স্পন্দনের বাস্তব প্রয়োগ | OnnoRokom Pathshala",
        duration: "10:17",
        thumbnail: "https://i.ytimg.com/vi/9HVn0cLmf3o/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala_Periodic Motion [Simple Harmonic Motion (SHM)]
Subject: Physics
Topic: SHM Part 01
Class: HSC 1st Yea
Lectured by: Maksudul Hossain Jewel`
      },
      {
        id: "wIgWv1KexOU",
        title: "IBDP Physics. Simple Harmonic Motion- Visually explained . Part 1.",
        duration: "9:08",
        thumbnail: "https://i.ytimg.com/vi/wIgWv1KexOU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        description: `Welcome to the first video of our IB Physics video series! In this video, we explore Simple Harmonic Motion (SHM)—a fundamental topic in IB DP Physics. Discover the key concepts behind oscillatory motion, including the restoring force  F=−kx, equilibrium, and energy conservation in oscillating systems. Whether you're studying for your IB exams or simply passionate about physics, this video provides clear, step-by-step explanations and real-world examples of SHM in action.

In This Video, You Will Learn:

What Simple Harmonic Motion is and why it's important in IB Physics
The physics behind oscillations: pendulums, spring-mass systems, and more
How to derive and use the key formula 
F=−kx
Tips and problem-solving strategies for mastering SHM concepts
For additional resources and detailed notes: yasirsphysics@gmail.com

Don't forget to like, share, and subscribe for more IB Physics tutorials. Click the bell icon to get notified when Part 2 is released!

#IBPhysics #SimpleHarmonicMotion #IBDP #Oscillations #PhysicsTutorial

00:00 - Simple Harmonic Motion,  Nature Loves it
00:43 - Two Important conditions, F= -Kx
04:06 - Checkpoint!
04:47 - Acceleration and Angular frequency
06:16- Summary
06:42- Amplitude, Time Period, Frequency
08:24 - Homework
08:58 - Next week, energy and pendulums`
      },
      {
        id: "s5q3Ozq8Yg0",
        title: "8.01x - Module 15.08 - SHO Angular Frequency vs Angular Velocity.",
        duration: "4:05",
        thumbnail: "https://i.ytimg.com/vi/s5q3Ozq8Yg0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        description: `8.01x - MIT Help Sessions
SHO - Angular Frequency vs  Angular Velocity.`
      },
      {
        id: "MZ5eKUlO2fU",
        title: "My Million$ Video - Angular Velocity vs Angular Frequency - it's a MUST",
        duration: "12:01",
        thumbnail: "https://i.ytimg.com/vi/MZ5eKUlO2fU/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        description: `My Million$ Video - Angular Velocity vs Angular Frequency - it's a MUST`
      },
// Thermodynamics
  {
    id: "63P4qKc3V8w",
    title: "01. General Discussion about Thermodynamics | তাপ গতিবিদ্যার সাধারণ আলোচনা",
    duration: "Unknown",
    thumbnail: "https://i.ytimg.com/vi/63P4qKc3V8w/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: General Discussion about Thermodynamics
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "pJUHbfe-t74",
    title: "02. Temperature Scale | তাপমাত্রার স্কেল | OnnoRokom Pathshala",
    duration: "8:03",
    thumbnail: "https://i.ytimg.com/vi/pJUHbfe-t74/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Temperature Scale
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Jfcff-LpDcI",
    title: "03. Relation Between Different Temperature Scales | বিভিন্ন তাপমাত্রার স্কেলের মধ্যে সম্পর্ক",
    duration: "8:39",
    thumbnail: "https://i.ytimg.com/vi/Jfcff-LpDcI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Relation Between Different Temperature Scales
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "KTn5x5-nfBk",
    title: "04. 1st Law of Thermodynamics | তাপগতিবিদ্যার প্রথম সূত্র | OnnoRokom Pathshala",
    duration: "5:12",
    thumbnail: "https://i.ytimg.com/vi/KTn5x5-nfBk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: 1st Law of Thermodynamics
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "D6-f57zKW2I",
    title: "05. Uses of 1st law of thermodynamics | তাপগতিবিদ্যার প্রথম সূত্রের ব্যবহার",
    duration: "12:21",
    thumbnail: "https://i.ytimg.com/vi/D6-f57zKW2I/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Uses of 1st Law of Thermodynamics
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "uX7cj9dzZeQ",
    title: "06. Equation for work done | কৃতকাজের সমীকরণ | OnnoRokom Pathshala",
    duration: "18:55",
    thumbnail: "https://i.ytimg.com/vi/uX7cj9dzZeQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Equation for Work Done
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "QCcCUImjKLA",
    title: "07. Adiabatic process | রুদ্ধতাপীয় প্রক্রিয়া | OnnoRokom Pathshala",
    duration: "16:23",
    thumbnail: "https://i.ytimg.com/vi/QCcCUImjKLA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Adiabatic Process
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "iIemQlMJLxI",
    title: "08. 2nd Law of Thermodynamics | তাপগতিবিদ্যার ২য় সূত্র | OnnoRokom Pathshala",
    duration: "3:34",
    thumbnail: "https://i.ytimg.com/vi/iIemQlMJLxI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: 2nd Law of Thermodynamics
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "e3RBNBfq_yY",
    title: "09. Entropy | এনট্রপি | OnnoRokom Pathshala",
    duration: "5:58",
    thumbnail: "https://i.ytimg.com/vi/e3RBNBfq_yY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Entropy
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "LUacLjVUsx4",
    title: "10. Reversible and Non-reversible process | প্রত্যাবর্তী এবং অপ্রত্যাবর্তী প্রক্রিয়া",
    duration: "8:21",
    thumbnail: "https://i.ytimg.com/vi/LUacLjVUsx4/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Reversible and Non-reversible Process
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "R6xA5OUAe_g",
    title: "11. Carnot Engine and Refrigerator | কার্নোর ইঞ্জিন এবং কার্নোর রেফ্রিজারেটর",
    duration: "20:58",
    thumbnail: "https://i.ytimg.com/vi/R6xA5OUAe_g/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Thermodynamics
Subject: Physics
Topic: Carnot Engine and Refrigerator
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
// Static Electricity
  {
    id: "xrQEx2MoTMQ",
    title: "01. Coulomb's Law (Introduction) | কুলম্বের সূত্র | OnnoRokom Pathshala",
    duration: "16:23",
    thumbnail: "https://i.ytimg.com/vi/xrQEx2MoTMQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics (Coulomb's Law)
Subject: Physics
Topic: Coulomb's Law (Introduction)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "EQEMhTtgPQ0",
    title: "02. Coulomb's Law (Vector Form) | কুলম্বের সূত্র ভেক্টর Form | OnnoRokom Pathshala",
    duration: "3:36",
    thumbnail: "https://i.ytimg.com/vi/EQEMhTtgPQ0/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics (Coulomb's Law)
Subject: Physics
Topic: Coulomb's Law (Vector Form)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "EdaW3hHmEUw",
    title: "03. Electric Field Strength due to Point Charge | বিন্দু আধানের দ্বারা সৃষ্ট তড়িৎ ক্ষেত্র প্রাবল্য",
    duration: "12:59",
    thumbnail: "https://i.ytimg.com/vi/EdaW3hHmEUw/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Electric Field Strength due to Point Charge
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "3bVFmivyOFo",
    title: "04.00. Apply of the Formula | সূত্রের ব্যবহার | OnnoRokom Pathshala",
    duration: "4:23",
    thumbnail: "https://i.ytimg.com/vi/3bVFmivyOFo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Apply of the Formula
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "5OZKRhBEu5A",
    title: "04.01. Mathematical Problem (Electric Field Strength) Part 1",
    duration: "20:16",
    thumbnail: "https://i.ytimg.com/vi/5OZKRhBEu5A/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Mathematical Problem (Electric Field Strength) Part 1
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "yPAeKKvCqpI",
    title: "04.01. Mathematical Problem (Electric Field Strength) Part 2 | গাণিতিক সমস্যা (তড়িৎ প্রাবল্য) পর্ব ২",
    duration: "20:07",
    thumbnail: "https://i.ytimg.com/vi/yPAeKKvCqpI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Mathematical Problem (Electric Field Strength) Part 2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Wd6PVZSO7Wg",
    title: "04.01. Mathematical Problem (Electric Field Strength) Part 3 | গাণিতিক সমস্যা (তড়িৎ প্রাবল্য) পর্ব ৩",
    duration: "21:27",
    thumbnail: "https://i.ytimg.com/vi/Wd6PVZSO7Wg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Mathematical Problem (Electric Field Strength) Part 3
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "QxFNmsjXDcY",
    title: "05. Electric Potential due to Point Charge | বিন্দু আধানের দ্বারা সৃষ্ট তড়িৎ বিভব",
    duration: "26:16",
    thumbnail: "https://i.ytimg.com/vi/QxFNmsjXDcY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Electric Potential due to Point Charge
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "w8gHVx93XCo",
    title: "06. Electric Potential (Review) | তড়িৎ বিভব (Review) | OnnoRokom Pathshala",
    duration: "14:23",
    thumbnail: "https://i.ytimg.com/vi/w8gHVx93XCo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Electric Potential (Review)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "gL33vAOh8Pc",
    title: "07. Potential Difference and Field Strength V=-∫Edr - Part 01 | বিভব পার্থক্য ও ক্ষেত্র প্রাবল্য",
    duration: "18:14",
    thumbnail: "https://i.ytimg.com/vi/gL33vAOh8Pc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Difference and Field Strength
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "idn05E0Zh8k",
    title: "07. Potential Difference and Field Strength V=-∫Edr Part 02 | বিভব পার্থক্য ও ক্ষেত্র প্রাবল্য",
    duration: "17:40",
    thumbnail: "https://i.ytimg.com/vi/idn05E0Zh8k/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Difference and Field Strength Part 2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "K_m47hUzloY",
    title: "08. Potential Difference and Field Strength E=-dv/dr | বিভব পার্থক্য ও ক্ষেত্র প্রাবল্য E=-dv/dr",
    duration: "11:21",
    thumbnail: "https://i.ytimg.com/vi/K_m47hUzloY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Difference and Field Strength E=-dv/dr
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "n3HAuDLH5zs",
    title: "09. Equipotential Surface | সমবিভব তল | OnnoRokom Pathshala",
    duration: "11:36",
    thumbnail: "https://i.ytimg.com/vi/n3HAuDLH5zs/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Equipotential Surface
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "UvIBl58aSU0",
    title: "10. Dipole | ডাইপোল | OnnoRokom Pathshala",
    duration: "19:50",
    thumbnail: "https://i.ytimg.com/vi/UvIBl58aSU0/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Dipole
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "vgQVB4Q2sns",
    title: "11. Vector Direction of Dipole | ডাইপোল এর Direction | OnnoRokom Pathshala",
    duration: "8:03",
    thumbnail: "https://i.ytimg.com/vi/vgQVB4Q2sns/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Vector Direction of Dipole
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "cPf1WSuKg1w",
    title: "12. Potential Energy of a Dipole in Electric Field | ডাইপোলে সঞ্চিত বিভব শক্তি",
    duration: "20:22",
    thumbnail: "https://i.ytimg.com/vi/cPf1WSuKg1w/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Energy of a Dipole in Electric Field
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "x4fGNy9inho",
    title: "13. ডাইপোলে সঞ্চিত বিভব শক্তি এর Physical Significance | OnnoRokom Pathshala",
    duration: "20:54",
    thumbnail: "https://i.ytimg.com/vi/x4fGNy9inho/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Physical Significance of Dipole Potential Energy
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "O-Ly_MpqoQE",
    title: "14. Potential Energy of Dipole | ডাইপোল এর বিভব | OnnoRokom Pathshala",
    duration: "23:55",
    thumbnail: "https://i.ytimg.com/vi/O-Ly_MpqoQE/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Energy of Dipole
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "LETlg93BR3o",
    title: "15. Potential Energy of a Point due to Electric Field of Dipole",
    duration: "15:44",
    thumbnail: "https://i.ytimg.com/vi/LETlg93BR3o/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Potential Energy of a Point due to Electric Field of Dipole
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "nSQExLSkG2I",
    title: "16. ডাইপোল ক্ষেত্রে উপস্থিত বিন্দুর ক্ষেত্রপাবল্য পর্ব ১ | OnnoRokom Pathshala",
    duration: "16:29",
    thumbnail: "https://i.ytimg.com/vi/nSQExLSkG2I/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Electric Field Strength at a Point in Dipole Field Part 1
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "CjSYqig_tgM",
    title: "16. ডাইপোল ক্ষেত্রে উপস্থিত বিন্দুর ক্ষেত্রপাবল্য পর্ব ২ | OnnoRokom Pathshala",
    duration: "19:55",
    thumbnail: "https://i.ytimg.com/vi/CjSYqig_tgM/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Electric Field Strength at a Point in Dipole Field Part 2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "CK20Le4uNLQ",
    title: "17. Direction of Electric Field Strength due to Electric Field of Dipole",
    duration: "11:07",
    thumbnail: "https://i.ytimg.com/vi/CK20Le4uNLQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Direction of Electric Field Strength due to Dipole
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "vblMF4QJdEE",
    title: "18. Capacitor | ধারক | OnnoRokom Pathshala",
    duration: "14:13",
    thumbnail: "https://i.ytimg.com/vi/vblMF4QJdEE/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Capacitor
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "SAzkZCc9dos",
    title: "19. Capacitance of a Spherical Conductor Part 01 | গোলাকার পরিবাহকের ধারকত্ব",
    duration: "10:56",
    thumbnail: "https://i.ytimg.com/vi/SAzkZCc9dos/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Capacitance of a Spherical Conductor Part 1
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Q2xtCzRh6ho",
    title: "19. Capacitance of a Spherical Conductor Part 02 | গোলাকার পরিবাহকের ধারকত্ব",
    duration: "11:29",
    thumbnail: "https://i.ytimg.com/vi/Q2xtCzRh6ho/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Capacitance of a Spherical Conductor Part 2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "EcJ7vv9bkC8",
    title: "20. Parallel Plate Capacitor | সমান্তরাল পাত ধারক | OnnoRokom Pathshala",
    duration: "8:03",
    thumbnail: "https://i.ytimg.com/vi/EcJ7vv9bkC8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Parallel Plate Capacitor
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "4RN-nDGhXK8",
    title: "21. Parallel Plate Capacitor (Capacitance) | সমান্তরাল পাত ধারক (ধারকত্ব)",
    duration: "9:11",
    thumbnail: "https://i.ytimg.com/vi/4RN-nDGhXK8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Parallel Plate Capacitor Capacitance
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "1lVrGHcsGVo",
    title: "22. Permittivity (Capacitance) | ভেদনযোগ্যতা - ধারকত্ব | OnnoRokom Pathshala",
    duration: "9:46",
    thumbnail: "https://i.ytimg.com/vi/1lVrGHcsGVo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Electrostatics
Subject: Physics
Topic: Permittivity (Capacitance)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "0gBD0GyuOeQ",
    title: "01. Gauss's law Part 01_Coulomb's law | গাউসের সূত্র পর্ব ০১_কুলম্বের সূত্র | OnnoRokom Pathshala",
    duration: "9:11",
    thumbnail: "https://i.ytimg.com/vi/0gBD0GyuOeQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's law Part 1 (Coulomb's law)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "gXqQ2K_or1s",
    title: "01. Gauss's law Part 02_Perpendicular Component of Vector | গাউসের সূত্র পর্ব ০২_ভেক্টরের লম্ব উপাংশ",
    duration: "13:51",
    thumbnail: "https://i.ytimg.com/vi/gXqQ2K_or1s/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's law Part 2 (Perpendicular Component of Vector)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "HJj99FjuPjk",
    title: "02. Gauss's law Part 03_Vector Components | গাউসের সূত্র পর্ব ০৩_ভেক্টর উপাংশ",
    duration: "8:33",
    thumbnail: "https://i.ytimg.com/vi/HJj99FjuPjk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's law Part 3 (Vector Components)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "E8wXS25PNNw",
    title: "03. Electric Flux Part 01_Field Line 1 | তড়িৎ ফ্লাক্স পর্ব ০১_ফিল্ড লাইন ১ | OnnoRokom Pathshala",
    duration: "8:02",
    thumbnail: "https://i.ytimg.com/vi/E8wXS25PNNw/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Electric Flux Part 1 (Field Line 1)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "zlMUs5EqGZg",
    title: "03. Electric Flux Part 02_Field Line 2 | তড়িৎ ফ্লাক্স পর্ব ০২_ফিল্ড লাইন ২ | OnnoRokom Pathshala",
    duration: "13:41",
    thumbnail: "https://i.ytimg.com/vi/zlMUs5EqGZg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Electric Flux Part 2 (Field Line 2)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "AARFPwO_4Yg",
    title: "04. Electric Flux Part 03_Area Vector | তড়িৎ ফ্লাক্স পর্ব ০৩_এরিয়া ভেক্টর | OnnoRokom Pathshala",
    duration: "23:00",
    thumbnail: "https://i.ytimg.com/vi/AARFPwO_4Yg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Electric Flux Part 3 (Area Vector)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "d5h5DTA4yqc",
    title: "05. Electric Flux Part 04_Flux | তড়িৎ ফ্লাক্স পর্ব ০৪_ফ্লাক্স | OnnoRokom Pathshala",
    duration: "10:57",
    thumbnail: "https://i.ytimg.com/vi/d5h5DTA4yqc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Electric Flux Part 4 (Flux)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "r4ADSD6NS_g",
    title: "06. Electric Flux Part 05_Dot Product | তড়িৎ ফ্লাক্স পর্ব ০৫_ডট গুণফল | OnnoRokom Pathshala",
    duration: "7:56",
    thumbnail: "https://i.ytimg.com/vi/r4ADSD6NS_g/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Electric Flux Part 5 (Dot Product)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Mt-8-hZOpfU",
    title: "07. Gauss's Law Part 01 | গাউসের সূত্র পর্ব ০১ | OnnoRokom Pathshala",
    duration: "26:56",
    thumbnail: "https://i.ytimg.com/vi/Mt-8-hZOpfU/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 1
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "dgyRX5Hojgo",
    title: "07. Gauss's Law Part 02 | গাউসের সূত্র পর্ব ০২ | OnnoRokom Pathshala",
    duration: "12:20",
    thumbnail: "https://i.ytimg.com/vi/dgyRX5Hojgo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "xMA1sjlGVs4",
    title: "08. Gauss's Law Part 03_Hollow Sphere 1 | গাউসের সূত্র পর্ব ০৩ _ফাঁপা গোলকের ক্ষেত্রপ্রাবল্য ১",
    duration: "11:56",
    thumbnail: "https://i.ytimg.com/vi/xMA1sjlGVs4/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 3 (Hollow Sphere Field Strength 1)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "T4MuYVlVmuI",
    title: "08. Gauss's Law Part 03_Hollow Sphere 2 | গাউসের সূত্র পর্ব ০৩ _ফাঁপা গোলকের ক্ষেত্রপ্রাবল্য ২",
    duration: "17:29",
    thumbnail: "https://i.ytimg.com/vi/T4MuYVlVmuI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 3 (Hollow Sphere Field Strength 2)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "w4Lho9cvw_8",
    title: "08. Gauss's Law Part 03_Hollow Sphere 3 | গাউসের সূত্র পর্ব ০৩ _ফাঁপা গোলকের ক্ষেত্রপ্রাবল্য ৩",
    duration: "15:01",
    thumbnail: "https://i.ytimg.com/vi/w4Lho9cvw_8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 3 (Hollow Sphere Field Strength 3)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "AF2hl9Yu0bI",
    title: "09. Gauss's Law Part 06_Solid Sphere 1 | গাউসের সূত্র পর্ব ০৬_নিরেট গোলকের ক্ষেত্রপ্রাবল্য ১",
    duration: "14:42",
    thumbnail: "https://i.ytimg.com/vi/AF2hl9Yu0bI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 6 (Solid Sphere Field Strength 1)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Q8m8doabVB0",
    title: "09. Gauss's Law Part 06_Solid Sphere 2 | গাউসের সূত্র পর্ব ০৬_নিরেট গোলকের ক্ষেত্রপ্রাবল্য ২",
    duration: "17:33",
    thumbnail: "https://i.ytimg.com/vi/Q8m8doabVB0/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 6 (Solid Sphere Field Strength 2)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "sRX3M2H5b8s",
    title: "10. Gauss's Law Part 08_Infinite Wire | গাউসের সূত্র পর্ব ০৮_অসীম তারের ক্ষেত্রপ্রাবল্য",
    duration: "21:44",
    thumbnail: "https://i.ytimg.com/vi/sRX3M2H5b8s/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Gauss's Law
Subject: Physics
Topic: Gauss's Law Part 8 (Infinite Wire Field Strength)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
// Ideal Gas
  {
    id: "dXpY7BlBPuQ",
    title: "01. সম্পৃক্ত এবং অসম্পৃক্ত (আপেক্ষিক আর্দ্রতা) পর্ব ০১ | OnnoRokom Pathshala",
    duration: "12:57",
    thumbnail: "https://i.ytimg.com/vi/dXpY7BlBPuQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Saturated and Unsaturated (Relative Humidity) Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "dqmZ-Ex8W4Y",
    title: "01. Saturated and Unsaturated (Relative Humidity) Part 02 | OnnoRokom Pathshala",
    duration: "14:59",
    thumbnail: "https://i.ytimg.com/vi/dqmZ-Ex8W4Y/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Saturated and Unsaturated (Relative Humidity) Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "zKu9i_P4PSI",
    title: "02. Saturated and Unsaturated (Dew Point) | সম্পৃক্ত এবং অসম্পৃক্ত (শিশিরাঙ্ক)",
    duration: "10:32",
    thumbnail: "https://i.ytimg.com/vi/zKu9i_P4PSI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Saturated and Unsaturated (Dew Point)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "bXV8mqvxnaU",
    title: "03. Saturated and Unsaturated (Vapor Pressure) | সম্পৃক্ত এবং অসম্পৃক্ত (জলীয় বাস্পচাপ)",
    duration: "16:21",
    thumbnail: "https://i.ytimg.com/vi/bXV8mqvxnaU/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Saturated and Unsaturated (Vapor Pressure)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "oKVKlLSpYhY",
    title: "04. Mathematical Problem (Relative Humidity) | Mathematical Problem (Relative Humidity)",
    duration: "9:16",
    thumbnail: "https://i.ytimg.com/vi/oKVKlLSpYhY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Mathematical Problem (Relative Humidity)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "DCLopZ85Yqo",
    title: "05. Relative Humidity (Extra) Part 01 | আপেক্ষিক আর্দ্রতা (অতিরিক্ত) পর্ব ০১",
    duration: "17:39",
    thumbnail: "https://i.ytimg.com/vi/DCLopZ85Yqo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Relative Humidity (Extra) Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "xLeinKZ9dDc",
    title: "05. Relative Humidity (Extra) Part 02 | আপেক্ষিক আর্দ্রতা (অতিরিক্ত) পর্ব ০২",
    duration: "12:18",
    thumbnail: "https://i.ytimg.com/vi/xLeinKZ9dDc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Relative Humidity (Extra) Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "o8XkQrh61WM",
    title: "06. গাণিতিক সমস্যা (গ্লেমিয়ার ধ্রুবক+শিশিরাঙ্ক) | OnnoRokom Pathshala",
    duration: "35:25",
    thumbnail: "https://i.ytimg.com/vi/o8XkQrh61WM/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Mathematical Problem (Glaisher's Constant + Dew Point)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Ba6s8ATJCa8",
    title: "07. Proof PV=1/3 mNc^2 || Part 01 | OnnoRokom Pathshala",
    duration: "13:21",
    thumbnail: "https://i.ytimg.com/vi/Ba6s8ATJCa8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Proof PV=1/3 mNc^2 Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "wHeBdhMvwQw",
    title: "07. Proof PV=1/3 mNc^2 || Part 02 | OnnoRokom Pathshala",
    duration: "19:45",
    thumbnail: "https://i.ytimg.com/vi/wHeBdhMvwQw/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Proof PV=1/3 mNc^2 Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "GwL8NI2tq6c",
    title: "08. Root Mean Sequence Velocity | বর্গমূল গড় বর্গবেগ | OnnoRokom Pathshala",
    duration: "14:33",
    thumbnail: "https://i.ytimg.com/vi/GwL8NI2tq6c/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Root Mean Square Velocity
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "lbKOaPV52mw",
    title: "09. Final Result PV=1/3 mNc^2 | OnnoRokom Pathshala",
    duration: "6:18",
    thumbnail: "https://i.ytimg.com/vi/lbKOaPV52mw/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Final Result PV=1/3 mNc^2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "mO85Tn8dUUY",
    title: "10. Review of PV=1/3 mNc^2 | OnnoRokom Pathshala",
    duration: "2:41",
    thumbnail: "https://i.ytimg.com/vi/mO85Tn8dUUY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Review of PV=1/3 mNc^2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "2oxnrmIk05E",
    title: "11. By Product of PV=1/3 mNc^2 | OnnoRokom Pathshala",
    duration: "21:18",
    thumbnail: "https://i.ytimg.com/vi/2oxnrmIk05E/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: By Product of PV=1/3 mNc^2
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "nq4K-oej0nE",
    title: "12. Mathematical Problem (RMS velocity) | Mathematical Problem (RMS velocity)",
    duration: "6:42",
    thumbnail: "https://i.ytimg.com/vi/nq4K-oej0nE/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Mathematical Problem (RMS velocity)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "UvVt-YowPqc",
    title: "13. Degrees of Freedom Part 01 | স্বাধীনতার মাত্রা পর্ব ০১ | OnnoRokom Pathshala",
    duration: "15:34",
    thumbnail: "https://i.ytimg.com/vi/UvVt-YowPqc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Degrees of Freedom Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "WW3N-8BqvYw",
    title: "13. Degrees of Freedom Part 02 | স্বাধীনতার মাত্রা পর্ব ০২ | OnnoRokom Pathshala",
    duration: "16:03",
    thumbnail: "https://i.ytimg.com/vi/WW3N-8BqvYw/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Degrees of Freedom Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "F0mKJDyXdfA",
    title: "13. Degrees of Freedom Part 03 | Degrees of Freedom Part 03 | OnnoRokom Pathshala",
    duration: "20:16",
    thumbnail: "https://i.ytimg.com/vi/F0mKJDyXdfA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Degrees of Freedom Part 03
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "T69PVHNW8ek",
    title: "14. Mathematical Problem (Degrees of Freedom) | গাণিতিক সমস্যা (স্বাধীনতার মাত্রা)",
    duration: "15:20",
    thumbnail: "https://i.ytimg.com/vi/T69PVHNW8ek/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Mathematical Problem (Degrees of Freedom)
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "swobTXi6xo8",
    title: "15. Mean Free Path | গড় মুক্ত পথ | OnnoRokom Pathshala",
    duration: "18:05",
    thumbnail: "https://i.ytimg.com/vi/swobTXi6xo8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Ideal Gas & Kinetic Theory
Subject: Physics
Topic: Mean Free Path
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
// Dynamics 
  {
    id: "JTb6Rs4ZIcI",
    title: "01. Introduction of Dynamics | গতিবিদ্যা এর সূচনা | OnnoRokom Pathshala",
    duration: "2:12",
    thumbnail: "https://i.ytimg.com/vi/JTb6Rs4ZIcI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Introduction of Dynamics
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "p0Rc3GcSz2o",
    title: "02. Introduction of Linear Motion | একমাত্রিক গতির সূচনা | OnnoRokom Pathshala",
    duration: "7:25",
    thumbnail: "https://i.ytimg.com/vi/p0Rc3GcSz2o/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Introduction of Linear Motion
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "NaqK4OMUGRU",
    title: "03. Mathematics of Linear Motion | Some problems and solutions of one-dimensional motion",
    duration: "19:35",
    thumbnail: "https://i.ytimg.com/vi/NaqK4OMUGRU/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Mathematics of Linear Motion
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "qTaoeE-3Le4",
    title: "04. Graphs of Linear Motion | একমাত্রিক গতির লেখচিত্র | OnnoRokom Pathshala",
    duration: "13:21",
    thumbnail: "https://i.ytimg.com/vi/qTaoeE-3Le4/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Graphs of Linear Motion
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Wj8CLwi6iAo",
    title: "05. Relative Velocity | আপেক্ষিক বেগ | OnnoRokom Pathshala",
    duration: "25:58",
    thumbnail: "https://i.ytimg.com/vi/Wj8CLwi6iAo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Relative Velocity
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "1jS4sowQf9g",
    title: "06. Introduction of Projectile Motion | Introduction of Projectile Motion | OnnoRokom Pathshala",
    duration: "14:05",
    thumbnail: "https://i.ytimg.com/vi/1jS4sowQf9g/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Introduction of Projectile Motion
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "pFGBJqojF44",
    title: "07. Formula of Projectile | প্রাসের সূত্র সমূহ | OnnoRokom Pathshala",
    duration: "20:56",
    thumbnail: "https://i.ytimg.com/vi/pFGBJqojF44/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Formula of Projectile
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "sXc4HLZvDUs",
    title: "08. Mathematics of projectile | প্রাসের গাণিতিক সমস্যা ও সমাধান",
    duration: "5:54",
    thumbnail: "https://i.ytimg.com/vi/sXc4HLZvDUs/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Mathematics of Projectile
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "u53miendGNY",
    title: "09. Various Types of Projectile | বিভিন্ন প্রকারের প্রাসের গতি | OnnoRokom Pathshala",
    duration: "15:13",
    thumbnail: "https://i.ytimg.com/vi/u53miendGNY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Physics
Lecture: Dynamics
Subject: Physics
Topic: Various Types of Projectile
Class: HSC 1st Year
Lectured by: OnnoRokom Pathshala`
  },
// Polynomial & Quadratic Equation 

  {
    id: "rbe5LKMfGlk",
    title: "01. Polynomial & Quadratic Equation | বহুপদী ও দ্বিঘাত সমীকরণ | OnnoRokom Pathshala",
    duration: "7:57",
    thumbnail: "https://i.ytimg.com/vi/rbe5LKMfGlk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Polynomial & Quadratic Equation
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "PeG9rzjDnW4",
    title: "02. Discriminant | Confirmatory | OnnoRokom Pathshala",
    duration: "7:54",
    thumbnail: "https://i.ytimg.com/vi/PeG9rzjDnW4/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Discriminant
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "S_TgsOWk5EA",
    title: "03. Some Maths of Discriminant | নিশ্চায়কের কিছু অংক | OnnoRokom Pathshala",
    duration: "8:05",
    thumbnail: "https://i.ytimg.com/vi/S_TgsOWk5EA/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Some Maths of Discriminant
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "clz5IQ4pd2o",
    title: "04. Root-Coefficient Relation | মূল-সহগ সম্পর্ক | OnnoRokom Pathshala",
    duration: "15:41",
    thumbnail: "https://i.ytimg.com/vi/clz5IQ4pd2o/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Root-Coefficient Relation
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "6ba5OeV5Sig",
    title: "05. Root-Coefficient Related Some Math Part 01 | মূল-সহগ সম্পর্ক কিছু অংক পর্ব ০১",
    duration: "10:44",
    thumbnail: "https://i.ytimg.com/vi/6ba5OeV5Sig/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Root-Coefficient Related Some Math Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "RcKoxh98DTo",
    title: "05. Root-Coefficient Related Some Math Part 02 | মূল-সহগ সম্পর্ক কিছু অংক পর্ব ০২",
    duration: "10:59",
    thumbnail: "https://i.ytimg.com/vi/RcKoxh98DTo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Root-Coefficient Related Some Math Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "12Caei0Blco",
    title: "05. Root-Coefficient Related Some Math Part 03 | মূল-সহগ সম্পর্ক কিছু অংক পর্ব ০৩",
    duration: "7:06",
    thumbnail: "https://i.ytimg.com/vi/12Caei0Blco/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Root-Coefficient Related Some Math Part 03
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "McCYkjAb2nI",
    title: "06. Math of Common Root | সাধারণ মূলের অংক | OnnoRokom Pathshala",
    duration: "9:40",
    thumbnail: "https://i.ytimg.com/vi/McCYkjAb2nI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Math of Common Root
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "WoVipraloZc",
    title: "07. Determination of Lowest Value & Highest Value | সর্বোচ্চ এবং সর্বনিম্ন মান নির্ণয়",
    duration: "5:09",
    thumbnail: "https://i.ytimg.com/vi/WoVipraloZc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Determination of Lowest Value & Highest Value
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "j8Now079Xt8",
    title: "08. Some Math of Quadratic Polynomial | দ্বিঘাত বহুপদীর কিছু অংক | OnnoRokom Pathshala",
    duration: "8:39",
    thumbnail: "https://i.ytimg.com/vi/j8Now079Xt8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Some Math of Quadratic Polynomial
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "sfVVoNYlVuc",
    title: "09. Cubic Polynomial Part 01 | ত্রিঘাত বহুপদী পর্ব ০১ | OnnoRokom Pathshala",
    duration: "12:51",
    thumbnail: "https://i.ytimg.com/vi/sfVVoNYlVuc/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Cubic Polynomial Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "MLEtns8jA-k",
    title: "09. Cubic Polynomial Part 02 | ত্রিঘাত বহুপদী পর্ব ০২ | OnnoRokom Pathshala",
    duration: "12:51",
    thumbnail: "https://i.ytimg.com/vi/MLEtns8jA-k/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Cubic Polynomial Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "RCL2ezS-SPk",
    title: "09. Cubic Polynomial Part 03 | ত্রিঘাত বহুপদী পর্ব ০৩ | OnnoRokom Pathshala",
    duration: "10:04",
    thumbnail: "https://i.ytimg.com/vi/RCL2ezS-SPk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Polynomial & Quadratic Equation
Subject: Higher Mathematics
Topic: Cubic Polynomial Part 03
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  }, 
// Complex Number 
  {
    id: "nWesJDuTAFg",
    title: "01. Basic Discussion of Complex Number | জটিল সংখ্যার মৌলিক আলোচনা | OnnoRokom Pathshala",
    duration: "8:13",
    thumbnail: "https://i.ytimg.com/vi/nWesJDuTAFg/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Basic Discussion of Complex Number
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "5fBW888RGlk",
    title: "02. Power of I | আই এর পাওয়ার | OnnoRokom Pathshala",
    duration: "19:25",
    thumbnail: "https://i.ytimg.com/vi/5fBW888RGlk/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Power of I
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "E6XrVsflKYM",
    title: "03. Series of I | আই এর সিরিজ | OnnoRokom Pathshala",
    duration: "5:53",
    thumbnail: "https://i.ytimg.com/vi/E6XrVsflKYM/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Series of I
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "Exzdvu3isWQ",
    title: "04. Complex Number | জটিল সংখ্যা | OnnoRokom Pathshala",
    duration: "11:02",
    thumbnail: "https://i.ytimg.com/vi/Exzdvu3isWQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Complex Number
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "yNTzCdNLBkM",
    title: "05. Geometric Presentation of Complex Number Part 01 | জটিল সংখ্যার জ্যামিতিক উপস্থাপন পর্ব ০১",
    duration: "13:53",
    thumbnail: "https://i.ytimg.com/vi/yNTzCdNLBkM/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Geometric Presentation of Complex Number Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "9-9nGCsfueE",
    title: "05. Geometric Presentation of Complex Number Part 02 | জটিল সংখ্যার জ্যামিতিক উপস্থাপন পর্ব ০২",
    duration: "6:54",
    thumbnail: "https://i.ytimg.com/vi/9-9nGCsfueE/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Geometric Presentation of Complex Number Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "ObeK1QO2p6Q",
    title: "01. Modulus | মডুলাস | OnnoRokom Pathshala",
    duration: "5:39",
    thumbnail: "https://i.ytimg.com/vi/ObeK1QO2p6Q/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Modulus
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "z6LdCFmVu2M",
    title: "02. Argument Part 01 | আরগুমেন্ট পর্ব ০১| OnnoRokom Pathshala",
    duration: "14:38",
    thumbnail: "https://i.ytimg.com/vi/z6LdCFmVu2M/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Argument Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "zP0z8E5U7AU",
    title: "02. Argument Part 02 | আরগুমেন্ট পর্ব ০২ | OnnoRokom Pathshala",
    duration: "9:41",
    thumbnail: "https://i.ytimg.com/vi/zP0z8E5U7AU/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Argument Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "qlp_zjZB9IE",
    title: "02. Argument Part 03 | আরগুমেন্ট পর্ব ০৩ | OnnoRokom Pathshala",
    duration: "5:33",
    thumbnail: "https://i.ytimg.com/vi/qlp_zjZB9IE/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Argument Part 03
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "nJFZ7yDxxs0",
    title: "03. Square Root Part 01 | OnnoRokom Pathshala",
    duration: "11:11",
    thumbnail: "https://i.ytimg.com/vi/nJFZ7yDxxs0/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Square Root Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "EvgvPfCKLE4",
    title: "03. Square Root Part 02 | বোর্গ মূল প্রভার দেখ | OnnoRokom Pathshala",
    duration: "7:08",
    thumbnail: "https://i.ytimg.com/vi/EvgvPfCKLE4/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Square Root Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "ObkvmC3D7k8",
    title: "04. Fourth Root | চতুর্থ মূল | OnnoRokom Pathshala",
    duration: "4:13",
    thumbnail: "https://i.ytimg.com/vi/ObkvmC3D7k8/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Fourth Root
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "_b1GYxBKbAI",
    title: "01. Cubic & Sixth Root | ঘনমূল ও ষষ্ঠমূল | OnnoRokom Pathshala",
    duration: "7:24",
    thumbnail: "https://i.ytimg.com/vi/_b1GYxBKbAI/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Cubic & Sixth Root
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "HUpgEi7mzek",
    title: "02. Cubic of Unit | এককের ঘনমূল | OnnoRokom Pathshala",
    duration: "9:34",
    thumbnail: "https://i.ytimg.com/vi/HUpgEi7mzek/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: Cubic of Unit
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "o-B_-MAUcLQ",
    title: "03. General Conception of Root Part 01 | মূলের সাধারণ ধারণা পর্ব ০১ | OnnoRokom Pathshala",
    duration: "10:40",
    thumbnail: "https://i.ytimg.com/vi/o-B_-MAUcLQ/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: General Conception of Root Part 01
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "6yC_oa-mrpY",
    title: "03. General Conception of Root Part 02 | মূলের সাধারণ ধারণা পর্ব ০২ | OnnoRokom Pathshala",
    duration: "14:30",
    thumbnail: "https://i.ytimg.com/vi/6yC_oa-mrpY/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: General Conception of Root Part 02
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },
  {
    id: "0rYbJdKrilo",
    title: "03. General Conception of Root Part 03 | মূলের সাধারণ ধারণা পর্ব ০৩ | OnnoRokom Pathshala",
    duration: "6:34",
    thumbnail: "https://i.ytimg.com/vi/0rYbJdKrilo/hqdefault.jpg",
    channelId: "UCBA6OI6vEDK13jfoiuX694A",
    channelName: "OnnoRokom Pathshala",
    description: `Video Title: OnnoRokom Pathshala_Higher Mathematics
Lecture: Complex Number
Subject: Higher Mathematics
Topic: General Conception of Root Part 03
Class: HSC 2nd Year
Lectured by: OnnoRokom Pathshala`
  },



    ],
    playlists: [
      {
        id: "Dynamics",
        title: "Dynamics (গতিবিদ্যা)",
        videoCount: 9,
        thumbnail: "https://i.ytimg.com/vi/JTb6Rs4ZIcI/hqdefault.jpg",
        updatedText: "Updated yesterday",
        videos: ["JTb6Rs4ZIcI", "p0Rc3GcSz2o", "NaqK4OMUGRU", "qTaoeE-3Le4", "Wj8CLwi6iAo", "1jS4sowQf9g", "pFGBJqojF44", "sXc4HLZvDUs", "u53miendGNY"]
      },

      {
        id: "Differentiation_01",
        title: "HSC Higher Mathematics 1st Paper: Differentiation (অন্তরীকরণ)",
        videoCount: 34,
        thumbnail: "https://i.ytimg.com/vi/DWCUCsXoMQc/hqdefault.jpg",
        updatedText: "Updated yesterday",
        videos: ["DWCUCsXoMQc", "VIdLvHC407c", "xThVr1W1Pnw", "P6ON5damQFE", "WNzrs9L1qFA", "0TqfjNhZHiI", "WlikLWCJBVE", "mD_VcAXrUZw", "9GCpKsdzumk", "NfRBFiaeySY", "-kotvsCL-Cw", "V1bJaBd5X6Y", "0RJBWAXjf_4", "jU8HtTQr4OU", "YkuAwBpzXDs", "wMMi4dqAw7c","nH5zbORU1RI", "U0AzIZr8xdU", "c6z46owVRxY", "rYSLtUh5_FA", "Wxnv4q2ndMQ", "QmK5n2AF61I", "3vBzgjhzDU4", "QAs-4QDgpHE", "7LZh5Uhtz3o", "FTOsKAQXtjc", "5btc3KvVJN0", "eMs3AYc9VNQ", "zsOzfTdSQrQ", "kHxkKshgzGA", "9wAclB37rcU", "CWeubWxS0Yk", "jImlqKEIBaI", "LZv7jqAmVC8"]

      },
{
        id: "Polynomials",
        title: "HSC Higher Mathematics 2nd paper: Polynomials (বহুপদী)",
        videoCount: 14,
        thumbnail: "https://i.ytimg.com/vi/rbe5LKMfGlk/hqdefault.jpg",
        updatedText: "Updated 2 week ago",
        videos: ["rbe5LKMfGlk", "PeG9rzjDnW4", "S_TgsOWk5EA", "clz5IQ4pd2o", "6ba5OeV5Sig", "RcKoxh98DTo", "12Caei0Blco", "McCYkjAb2nI", "WoVipraloZc", "j8Now079Xt8", "sfVVoNYlVuc", "MLEtns8jA-k", "RCL2ezS-SPk"]
      },
{
        id: "Complex_Numbers",
        title: "HSC Higher Mathematics 2nd paper: Complex Numbers (জটিল সংখ্যা)",
        videoCount: 19,
        thumbnail: "https://i.ytimg.com/vi/rbe5LKMfGlk/hqdefault.jpg",
        updatedText: "Updated 2 week ago",
        videos: ["nWesJDuTAFg", "5fBW888RGlk", "E6XrVsflKYM", "Exzdvu3isWQ", "yNTzCdNLBkM", "9-9nGCsfueE", "ObeK1QO2p6Q", "z6LdCFmVu2M", "zP0z8E5U7AU", "qlp_zjZB9IE", "nJFZ7yDxxs0", "EvgvPfCKLE4", "ObkvmC3D7k8", "_b1GYxBKbAI", "HUpgEi7mzek", "o-B_-MAUcLQ", "6yC_oa-mrpY", "0rYbJdKrilo"]
      },
      {
        id: "Physics_Wave_01",
        title: "Physics Wave (তরঙ্গ)",
        videoCount: 12,
        thumbnail: "https://i.ytimg.com/vi/Y2-6OInzV44/hqdefault.jpg",
        updatedText: "Updated 3 days ago",
        videos:  ["Y2-6OInzV44", "ZhCQu47G2m4", "hO0vRj4i8RE", "zN5ONZFUFgQ", "Z7cZLp0ZFzU", "9OUNZ6MQmhQ", "aRn13XFKuj0", "GRI173t9t28", "izmEeudNgU4", "yfIiE2csYIc", "J_hYeNvs4EI", "pmCub0w_4OM"] 
      },
      {
        id: "Physics_Periodic_Motion_01",
        title: "Physics Periodic Motion (পর্যায়বৃত্ত গতি)",
        videoCount: 12,
        thumbnail: "https://i.ytimg.com/vi/LVE9SjOd0Hw/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["LVE9SjOd0Hw", "3u_UKd8iTTE", "Hi6Uo6NQ8Zc", "_uqioK_AnbM", "29RYUx1KUu0", "-o7X58xkiXo", "9iWqKmnK3_0", "UhJCLSLHi5M", "bS7SoiY8Gzc", "7B3GW6siIVI", "kB2OYCRCHRA", "9HVn0cLmf3o", "wIgWv1KexOU", "s5q3Ozq8Yg0", "MZ5eKUlO2fU"]
      },
{
        id: "Physics_Ideal_Gas_02",
        title: "Physics Ideal Gas (আদর্শ গ্যাস)",
        videoCount: 11,
        thumbnail: "https://i.ytimg.com/vi/dXpY7BlBPuQ/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["dXpY7BlBPuQ", "dqmZ-Ex8W4Y", "zKu9i_P4PSI", "bXV8mqvxnaU", "oKVKlLSpYhY", "DCLopZ85Yqo", "xLeinKZ9dDc", "o8XkQrh61WM", "Ba6s8ATJCa8", "wHeBdhMvwQw", "GwL8NI2tq6c", "lbKOaPV52mw", "mO85Tn8dUUY", "2oxnrmIk05E", "nq4K-oej0nE", "UvVt-YowPqc", "WW3N-8BqvYw", "F0mKJDyXdfA", "T69PVHNW8ek", "swobTXi6xo8"]

      },
{
        id: "Physics_Thermodynamics_02",
        title: "Physics Thermodynamics (তাপগতিবিদ্যা)",
        videoCount: 11,
        thumbnail: "https://i.ytimg.com/vi/63P4qKc3V8w/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["63P4qKc3V8w", "pJUHbfe-t74", "Jfcff-LpDcI", "KTn5x5-nfBk", "D6-f57zKW2I", "uX7cj9dzZeQ", "QCcCUImjKLA", "iIemQlMJLxI", "e3RBNBfq_yY", "LUacLjVUsx4", "R6xA5OUAe_g"]
      },
{
        id: "Physics_Combo_by_Udvash",
        title: "Physics Combo by Udvash",
        videoCount: 16,
        thumbnail: "https://i.ytimg.com/vi/KphXn1GYcG0/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["KphXn1GYcG0", "yEScNi9si7c", "0A6g4Z30E7Q", "hp_qTlguG_I", "9AeM-QnwF4k", "0v8Prmi6xYg", "quSUCOrsbeU", "lP8277QSPTU", "8txuXBijYUw", "8txuXBijYUw", "UI7fgWG6doU", "yA8OAvJlp90", "Y2_DZTOmu4o", "Jara5dO9dyg"]
      },
{
        id: "Physics_Newtonian_Mechanics_04",
        title: "Physics Newtonian Mechanics (নিউটনিয়ান বলবিদ্যা)",
        videoCount: 30,
        thumbnail: "https://i.ytimg.com/vi/jgsnZoZ-hVg/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["jgsnZoZ-hVg", "idxuC5TzCgU", "Fl822BDrcN0", "tsEpmGRwwFw", "wCc3e1LE9-s", "GVoQGv5V-8w", "VlSByMqhQGM", "oJogS-Kv-4w", "DkT9szIPS-w", "vrfc3GebITQ", "PlpNd6zcSeU", "U9QRfxy22yM", "j1x4niLVbYQ", "PfSONKumv2A", "Vu1y7BuOIh0", "Op6xiICaoOo", "RrstMhs1oPg", "JF_BD5zSxPw", "qOtMqwZpTrM", "dlEh1U1ei5I", "dlEh1U1ei5I", "-ZbvpldoW8wxc", "SE5bmqIBjZY", "hsO2bC-GQXk", "j8H4WyxAKxI", "LHZ1WA34bgg", "sPjboJPiV7Y", "ES1C2hmceNY", "fEz2ifplYhs"]      
      },
{
        id: "Physics_Static_Electricity_05",
        title: "Physics Static Electricity (স্থির তড়িৎ)",
        videoCount: 44,
        thumbnail: "https://i.ytimg.com/vi/xrQEx2MoTMQ/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["xrQEx2MoTMQ", "EQEMhTtgPQ0", "EdaW3hHmEUw", "3bVFmivyOFo", "5OZKRhBEu5A", "yPAeKKvCqpI", "Wd6PVZSO7Wg", "QxFNmsjXDcY", "w8gHVx93XCo", "gL33vAOh8Pc", "idn05E0Zh8k", "K_m47hUzloY", "n3HAuDLH5zs", "UvIBl58aSU0", "vgQVB4Q2sns", "cPf1WSuKg1w", "x4fGNy9inho", "O-Ly_MpqoQE", "LETlg93BR3o", "nSQExLSkG2I", "CjSYqig_tgM", "CK20Le4uNLQ", "vblMF4QJdEE", "SAzkZCc9dos", "Q2xtCzRh6ho", "EcJ7vv9bkC8", "4RN-nDGhXK8", "1lVrGHcsGVo", "0gBD0GyuOeQ", "gXqQ2K_or1s", "HJj99FjuPjk", "E8wXS25PNNw", "zlMUs5EqGZg", "AARFPwO_4Yg", "d5h5DTA4yqc", "r4ADSD6NS_g", "Mt-8-hZOpfU", "dgyRX5Hojgo", "xMA1sjlGVs4", "T4MuYVlVmuI", "w4Lho9cvw_8", "AF2hl9Yu0bI", "Q8m8doabVB0", "sRX3M2H5b8s"],
      },
    ] 
  } 
};

// Helper SVG icons as reusable strings for vanilla DOM insertion
export const ICONS = {
  play: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
  playlist: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/></svg>`,
  shield: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  pin: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  user: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  search: `<svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  code: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  download: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
  external: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  close: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  volume: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>`,
  check: `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
  plus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>`,
  speaker: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07"/></svg>`,
  graph: `<svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  database: `<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
  trash: `<svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
  back: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`,
  edit: `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`
};
