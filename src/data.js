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
        views: "577K views",
        publishedText: "Dec 16, 2024",
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
        views: "373K views",
        publishedText: "Aug 16, 2024",
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
        views: "349K views",
        publishedText: "Aug 30, 2024",
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
        views: "291K views",
        publishedText: "Oct 3, 2024",
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
        views: "19K views",
        publishedText: "May 24, 2026",
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
        views: "17K views",
        publishedText: "May 26, 2026",
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
        views: "211K views",
        publishedText: "Aug 12, 2024",
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
        views: "46K views",
        publishedText: "May 29, 2023",
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
        views: "33K views",
        publishedText: "May 30, 2023",
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
        views: "8K views",
        publishedText: "May 31, 2023",
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
        views: "12K views",
        publishedText: "May 30, 2023",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
               {
        id: "kRnXF7BP-_8",
        title: "Organic Conversion (Aliphatic)। অর্গানিক কনভার্সন (অ্যালিফ্যাটিক)",
        duration: "41:40",
        views: "43K views",
        publishedText: "Apr 17, 2023",
        thumbnail: "https://i.ytimg.com/vi/kRnXF7BP-_8/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `
        class notes: https://drive.google.com/file/d/1WRtEnDuAdT0UuX0ltYvWlebEv1SSagJH/view
        শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
               {
        id: "RAKLOaEjfrY",
        title: "Organic Conversion (Aromatic)। অর্গানিক কনভার্সন (অ্যারোমেটিক)",
        duration: "1:02:57",
        views: "16K views",
        publishedText: "May 1, 2023",
        thumbnail: "https://i.ytimg.com/vi/RAKLOaEjfrY/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `
        class notes: https://drive.google.com/file/d/1Fu6aMz4WxtMvk3UsVt-6CBC1gDvbVGq_/view
        শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
               {
        id: "5UZ60arP1qo",
        title: "01. Introduction to Organic Chemistry (জৈব রসায়নের সূচনা ও ইতিহাস) । জৈব রসায়ন | Basic to Admission",
        duration: "1:23:37",
        views: "52K views",
        publishedText: "Mar 10, 2023",
        thumbnail: "https://i.ytimg.com/vi/5UZ60arP1qo/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
               {
        id: "ULkubqXJo02",
        title: "02. Homologous Series (সমগোত্রীয় শ্রেণি) । জৈব রসায়ন | Basic to Admission",
        duration: "1:40:33",
        views: "25K views",
        publishedText: "Mar 18, 2025",
        thumbnail: "https://i.ytimg.com/vi/ULkubqXJoFE/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
               {
        id: "cS2kG4S7r2M",
        title: "03. Nomenclature 01 (জৈব যৌগের নামকরণ-01) । জৈব রসায়ন | Basic to Admission",
        duration: "1:56:21",
        views: "26K views",
        publishedText: "Mar 25, 2023",
        thumbnail: "https://i.ytimg.com/vi/cS2kG4S7r2M/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, 
       /*        {
        id: "7AlCvxOKoSE",
        title: "HSC Foundation: Molar Volume (মোলার আয়তন)",
        duration: "9:38",
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
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
        views: "5.8K views",
        publishedText: "Jun 2, 2023",
        thumbnail: "https://i.ytimg.com/vi/7AlCvxOKoSE/hqdefault.jpg",
        channelId: "UC8SDY8Wr6s6DIofumkZGfxg",
        channelName: "আলকেমি (Alchemy)",
        description: `শাওন রেজা
নটরডেম কলেজ
জেনেটিক ইঞ্জিনিয়ারিং, ঢাবি।`
      }, */
      
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
      }
    ]
  },
  /* "UCBA6OI6vEDK13jfoiuX694A": {
    videos: [
      {
        id: "fJ9rUzIMcZQ",
        title: "পদার্থবিজ্ঞান ১ম পত্র: ভেক্টর - মাস্টার লেকচার ১ (Physics 1st Paper: Vector)",
        duration: "45:12",
        views: "520K views",
        publishedText: "2 days ago",
        thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "ভেক্টর রাশির যোগ, বিয়োগ, ডট গুণন ও ক্রস গুণনের একদম গোড়া থেকে কনসেপচুয়াল আলোচনা।"
      },
      {
        id: "3JZ_D3ELwOQ",
        title: "ক্যালকুলাস সহজে বোঝার জাদুকরী উপায় (Intuitive Calculus & Limits)",
        duration: "32:18",
        views: "410K views",
        publishedText: "5 days ago",
        thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "ডিফারেন্সিয়েশন ও ইন্টিগ্রেশনের বাস্তব জীবনের প্রয়োগ এবং লিমিটের মূল ধারণা।"
      },
      {
        id: "V-_O7nl0Ii0",
        title: "রসায়ন জাদুকরী ট্রিকস: পর্যায় সারণি ও রাসায়নিক বন্ধন (Chemistry Out of Box)",
        duration: "28:50",
        views: "380K views",
        publishedText: "2 weeks ago",
        thumbnail: "https://i.ytimg.com/vi/V-_O7nl0Ii0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "মুখস্থ না করে পর্যায় সারণির মৌলগুলোর ধর্ম এবং অরবিটাল সংকরায়ণ বোঝার সহজ টেকনিক।"
      },
      {
        id: "l482T0yNkeo",
        title: "গতিবিদ্যা ও নিউটনের বলবিদ্যা: গাণিতিক সমস্যা সমাধান (Newtonian Mechanics)",
        duration: "38:25",
        views: "445K views",
        publishedText: "3 weeks ago",
        thumbnail: "https://i.ytimg.com/vi/l482T0yNkeo/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "ঘর্ষণ বল, কৌণিক ভরবেগ এবং ব্যাংকিং কোণ সম্পর্কিত বুয়েট ও ঢাকা বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রশ্ন সমাধান।"
      },
      {
        id: "RgKAFK5djSk",
        title: "গণিতের ভয় দূর করার ৫টি সাইকোলজিক্যাল নিয়ম (Overcome Math Anxiety)",
        duration: "16:40",
        views: "290K views",
        publishedText: "1 month ago",
        thumbnail: "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "কীভাবে কঠিন গাণিতিক সমীকরণকে ছবির মতো কল্পনা করে মস্তিষ্কে গেঁথে রাখা যায়।"
      },
      {
        id: "CevxZvSJLk8",
        title: "জৈব রসায়ন (Organic Chemistry): নামকরণের সহজ সূত্রাবলী",
        duration: "52:10",
        views: "610K views",
        publishedText: "2 months ago",
        thumbnail: "https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: "অ্যালকেন, অ্যালকিন, অ্যালকাইন ও কার্যকরী মূলকের আইইউপিএসি (IUPAC) নামকরণ পদ্ধতি।"
      }
    ],
    playlists: [
      {
        id: "PL_orp_phys_1st",
        title: "HSC Physics 1st Paper Complete Course (পদার্থবিজ্ঞান)",
        videoCount: 42,
        thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
        updatedText: "Updated yesterday",
        videos: ["fJ9rUzIMcZQ", "l482T0yNkeo"]
      },
      {
        id: "PL_orp_math_calc",
        title: "Out of the Box Math & Calculus Tricks (উচ্চতর গণিত)",
        videoCount: 25,
        thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        updatedText: "Updated 3 days ago",
        videos: ["3JZ_D3ELwOQ", "RgKAFK5djSk"]
      },
      {
        id: "PL_orp_chem_fun",
        title: "Fun Chemistry Conceptual Lectures (রসায়ন ১ম ও ২য় পত্র)",
        videoCount: 30,
        thumbnail: "https://i.ytimg.com/vi/V-_O7nl0Ii0/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["V-_O7nl0Ii0", "CevxZvSJLk8"]
      }
    ] 
  } */
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
