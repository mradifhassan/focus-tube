/**
 * @file data.js
 * Core user configuration and pre-cached catalog for Distraction-Free Static YouTube Alternative.
 * Strictly adheres to vanilla ES6 JavaScript (No .ts/.tsx).
 */

import { publicDecrypt } from "crypto";
import { channel } from "diagnostics_channel";
import { view } from "motion/react-client";
import { title } from "process";

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
"UCBA6OI6vEDK13jfoiuX694A": {
    videos: [
//Mathematics Portion
//Differentiation
      {
        id: "DWCUCsXoMQc",
        title: "01. Continuous & Discontinuous Function | Continuous and Discontinuous Function",
        duration: "6:11",
        views: "520K views",
        publishedText: "May 1, 2016",
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
        views: "181K views",
        publishedText: "May 1, 2016",
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
        views: "520K views",
        publishedText: "May 1, 2016",
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
        views: "124K views",
        publishedText: "May 1, 2016",
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
        views: "116K views",
        publishedText: "May 1, 2016",
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
        views: "105K views",
        publishedText: "May 2, 2016",
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
        views: "98K views",
        publishedText: "May 2, 2016",
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
        views: "81K views",
        publishedText: "May 2, 2016",
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
        views: "168K views",
        publishedText: "May 2, 2016",
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
        views: "520K views",
        publishedText: "May 1, 2016",
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
        views: "281K views",
        publishedText: "May 2, 2016",
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
        views: "368K views",
        publishedText: "May 4, 2016",
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
        views: "285K views",
        publishedText: "May 5, 2016",
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
        views: "151K views",
        publishedText: "May 5, 2016",
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
        views: "139K views",
        publishedText: "May 5, 2016",
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
        views: "115K views",
        publishedText: "May 5, 2016",
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
        views: "90K views",
        publishedText: "May 7, 2016",
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
        views: "145K views",
        publishedText: "May 7, 2016",
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
        views: "99K views",
        publishedText: "May 7, 2016",
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
        views: "100K views",
        publishedText: "May 7, 2016",
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
        views: "99K views",
        publishedText: "May 7, 2016",
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
        views: "107K views",
        publishedText: "May 7, 2016",
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
        views: "96K views",
        publishedText: "May 7, 2016",
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
        views: "99K views",
        publishedText: "May 7, 2016",
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
        views: "144K views",
        publishedText: "May 8, 2016",
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
        views: "76K views",
        publishedText: "May 8, 2016",
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
        views: "63K views",
        publishedText: "May 8, 2016",
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
        views: "95K views",
        publishedText: "May 9, 2016",
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
        views: "64K views",
        publishedText: "May 9, 2016",
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
        views: "55K views",
        publishedText: "May 9, 2016",
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
        views: "140K views",
        publishedText: "May 9, 2016",
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
        views: "95K views",
        publishedText: "May 9, 2016",
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
        views: "66K views",
        publishedText: "May 9, 2016",
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
        views: "51K views",
        publishedText: "May 9, 2016",
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
// Wave
      {
        id: "Y2-6OInzV44",
        title: "01. General Discussion about Wave | তরঙ্গ সম্পর্কীয় সাধারণ আলোচনা",
        duration: "21:37",
        views: "217K views",
        publishedText: "Jan 1, 2019",
        thumbnail: "https://i.ytimg.com/vi/Y2-6OInzV44/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Wave
Subject: Physics
Topic: General Discussion about Wave
      {
        id: "Y2-6OInzV44",
        title: "01. General Discussion about Wave | তরঙ্গ সম্পর্কীয় সাধারণ আলোচনা",
        duration: "21:37",
        views: "217K views",
        publishedText: "Jan 1, 2019",
        thumbnail: "https://i.ytimg.com/vi/Y2-6OInzV44/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        
Class: HSC 1st Year
Lectured by: Sourov Bijoy`
      },  
      {
        id: "ZhCQu47G2m4",
        title: "02. Intensity of Wave | তরঙ্গের তীব্রতা | OnnoRokom Pathshala",
        duration: "14:50",
        views: "114K views",
        publishedText: "Jan 2, 2019",
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
        views: "93K views",
        publishedText: "Jan 3, 2019",
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
        views: "217K views",
        publishedText: "Jan 4, 2019",
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
        views: "217K views",
        publishedText: "Jan 18, 2019",
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
        views: "85K views",
        publishedText: "Jan 19, 2019",
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
        views: "269K views",
        publishedText: "Jan 14, 2017",
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
        views: "122K views",
        publishedText: "Jan 15, 2017",
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
        views: "84K views",
        publishedText: "Jan 16, 2017",
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
        views: "66K views",
        publishedText: "Jan 16, 2017",
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
        views: "85K views",
        publishedText: "Jan 20, 2019",
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
        views: "46K views",
        publishedText: "Jan 22, 2019",
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
        views: "370K views",
        publishedText: "Mar 17, 2015",
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
        views: "298K views",
        publishedText: "Mar 17, 2015",
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
        views: "195K views",
        publishedText: "Mar 17, 2015",
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
        views: "163K views",
        publishedText: "Mar 17, 2015",
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
        views: "128K views",
        publishedText: "Mar 17, 2015",
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
        views: "136K views",
        publishedText: "Mar 22, 2015",
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
        views: "92K views",
        publishedText: "Mar 22, 2015",
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
        views: "89K views",
        publishedText: "Mar 22, 2015",
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
        views: "80K views",
        publishedText: "Mar 22, 2015",
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
        views: "94K views",
        publishedText: "Mar 25, 2015",
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
        views: "111K views",
        publishedText: "Mar 25, 2015",
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
        views: "87K views",
        publishedText: "Mar 25, 2015",
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
        views: "13K",
        publishedText: "Mar 27, 2025",
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
        views: "5.1K",
        publishedText: "Feb 16, 2015",
        thumbnail: "https://i.ytimg.com/vi/s5q3Ozq8Yg0/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        description: `8.01x - MIT Help Sessions
SHO - Angular Frequency vs  Angular Velocity.`
      },
// Thermodynamics
      {
        id: "63P4qKc3V8w",
        title: "01. General Discussion about Thermodynamics | তাপ গতিবিদ্যার সাধারণ আলোচনা",
        duration: "4:03",
        views: "302K views",
        publishedText: "Jul 15, 2017 ",
        thumbnail: "https://i.ytimg.com/vi/63P4qKc3V8w/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Thermodynamics
Subject: Physics
Class: HSC 2nd Year
Lectured by: Sourov Bijoy`
      },
      {
        id: "pJUHbfe-t74",
        title: "02. Temperature Scale | তাপমাত্রার স্কেল | OnnoRokom Pathshala",
        duration: "8:02",
        views: "199K views",
        publishedText: "Jul 22, 2017 ",
        thumbnail: "https://i.ytimg.com/vi/pJUHbfe-t74/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Thermodynamics
Subject: Physics
Class: HSC 2nd Year
Lectured by: Sourov Bijoy`
      },
      {
        id: "Jfcff-LpDcI",
        title: "03. Relation Between Different Temperature Scales | বিভিন্ন তাপমাত্রার স্কেলের মধ্যে সম্পর্ক",
        duration: "4:03",
        views: "178K views",
        publishedText: "Jul 30, 2017 ",
        thumbnail: "https://i.ytimg.com/vi/Jfcff-LpDcI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Thermodynamics
Subject: Physics
Class: HSC 2nd Year
Lectured by: Sourov Bijoy`
      }

    ],
    playlists: [
      {
        id: "Differentiation_01",
        title: "HSC Higher Mathematics 1st Paper: Differentiation (অন্তরীকরণ)",
        videoCount: 34,
        thumbnail: "https://i.ytimg.com/vi/DWCUCsXoMQc/hqdefault.jpg",
        updatedText: "Updated yesterday",
        videos: ["DWCUCsXoMQc", "VIdLvHC407c", "xThVr1W1Pnw", "P6ON5damQFE", "WNzrs9L1qFA", "0TqfjNhZHiI", "WlikLWCJBVE", "mD_VcAXrUZw", "9GCpKsdzumk", "NfRBFiaeySY", "-kotvsCL-Cw", "V1bJaBd5X6Y", "0RJBWAXjf_4", "jU8HtTQr4OU", "YkuAwBpzXDs", "wMMi4dqAw7c","nH5zbORU1RI", "U0AzIZr8xdU", "c6z46owVRxY", "rYSLtUh5_FA", "Wxnv4q2ndMQ", "QmK5n2AF61I", "3vBzgjhzDU4", "QAs-4QDgpHE", "7LZh5Uhtz3o", "FTOsKAQXtjc", "5btc3KvVJN0", "eMs3AYc9VNQ", "zsOzfTdSQrQ", "kHxkKshgzGA", "9wAclB37rcU", "CWeubWxS0Yk", "jImlqKEIBaI", "LZv7jqAmVC8"]

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
        id: "Physics_Periodic_Motion_02",
        title: "Physics Periodic Motion (পর্যায়বৃত্ত গতি)",
        videoCount: 12,
        thumbnail: "https://i.ytimg.com/vi/LVE9SjOd0Hw/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["LVE9SjOd0Hw", "3u_UKd8iTTE", "Hi6Uo6NQ8Zc", "_uqioK_AnbM", "29RYUx1KUu0", "-o7X58xkiXo", "9iWqKmnK3_0", "UhJCLSLHi5M", "bS7SoiY8Gzc", "7B3GW6siIVI", "kB2OYCRCHRA", "9HVn0cLmf3o"]
      },
{
        id: "Physics_Thermodynamics_03",
        title: "Physics Thermodynamics (তাপগতিবিদ্যা)",
        videoCount: 3,
        thumbnail: "https://i.ytimg.com/vi/63P4qKc3V8w/hqdefault.jpg",
        updatedText: "Updated 1 week ago",
        videos: ["63P4qKc3V8w", "pJUHbfe-t74", "Jfcff-LpDcI"]
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
