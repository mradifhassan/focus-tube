<div align="center">
<img width="1200" height="475" alt="GHBanner" src="/assets/image.png" />
</div>

# Introduction

As students, we all know how easy it is to lose focus. We log onto YouTube with the best intentions—to attend an online class or finish a course—only to find ourselves caught in an endless loop of distracting recommendations and algorithms.

To bridge this gap, I created this static platform: a dedicated, clutter-free space designed entirely for focused learning.

This is my small initiative to streamline your preparation for the HSC curriculum. By removing the noise of traditional social media, you can fully immerse yourself in your studies. To start, I have curated and integrated resources from two of the finest channels available, delivering top-tier educational content across Physics, Chemistry, Mathematics, and Biology (PCMB).
## Your education deserves your undivided attention. Welcome, and happy learning!

## Table of Contents
1. [Environment Setup](#1-environment-setup)
2. [Contribution Guidelines](#2-contribution-guidelines)

## 1. Environment Setup

### 1.1: For Debian based Linux distros
I used the `.AppImage` of helium browser, this will also workd for `.deb` software. Now open the terminal and go to the `Desktop` directory and type
```bash
cd ~/Desktop
vim FocusTube.desktop
```
Paste the following instruction set-
```bash
[Desktop Entry]
Version=1.0
Type=Application
Name=Focus Tube
Exec=/home/<username>/Downloads/Software/helium/helium-0.13.2.1-x86_64.AppImage --app=https://mradifhassan.github.io/focus-tube/
Icon=/home/<username>/Downloads/Software/helium/youtube.png
Terminal=false
Categories=Education;
```
Now give the permission
```bash
chmod +x FocusTube.desktop
```
### 1.2: For Windows
You can install FocusTube as a Web App (PWA) or create a dedicated desktop shortcut using Google Chrome or Microsoft Edge.

**Method A:** Install as a PWA (Recommended)
1. Open Google Chrome or Microsoft Edge and navigate to the FocusTube site.
2. Click the Install icon in the address bar (or go to `Menu (⋮) > Save and share > Install page as app)`.
3. Click Install. FocusTube will now launch in its own standalone window and appear in your Start Menu and Desktop.

**Method B:** Custom Application Shortcut
1. Right-click on your Desktop and select `New > Shortcut`.
2. Set the location of the item to launch in application mode (replace with your browser path and hosted URL):
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --app=[https://mradifhassan.github.io/focus-tube](https://mradifhassan.github.io/focus-tube)
```
3. Name the shortcut FocusTube and click Finish.
4. (Optional) Right-click the newly created shortcut, select `Properties > Change Icon`, and select a custom icon.

### 1.3: For Android
You can install FocusTube directly to your home screen to use it full-screen without address bar clutter.
1. Open Google Chrome or Brave on your Android device.
2. Navigate to the FocusTube web application.
3. Tap the three dots menu (`⋮`) in the top right corner.
4. Select `Add to Home screen` (or `Install app`).
5. Confirm by tapping `Add`. FocusTube will now appear in your app drawer and home screen as a standalone application.

## 2. Contribution Guidelines

1. If you want to add a playlist, then, you need to add those videos after the existing video playlists, it is separated by `// Topic Name`. Just take a look at one portion of the codebase where data are stored, i.e.
```bash
// Thermodynamics
      {
        id: "63P4qKc3V8w",
        title: "01. General Discussion about Thermodynamics | তাপ গতিবিদ্যার সাধারণ আলোচনা",
        duration: "4:03",
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
        thumbnail: "https://i.ytimg.com/vi/Jfcff-LpDcI/hqdefault.jpg",
        channelId: "UCBA6OI6vEDK13jfoiuX694A",
        channelName: "OnnoRokom Pathshala",
        description: `Video Title: OnnoRokom Pathshala
Lecture: Thermodynamics
Subject: Physics
Class: HSC 2nd Year
Lectured by: Sourov Bijoy`
      },
```
2. Let's say it has ended here. Now you want to add a playlist, if you are in Linux, follow the instruction sets below-
```bash
python3 -m venv base 
source base/bin/activate
pip install yt-dlp
python3
```
Now paste the code
```bash
import subprocess

playlist_url = "https://youtube.com/playlist?list=PL0dr4HGr8HPhCx3DT950lsFvJVi0Hi91Q"

# Print just the video IDs using --flat-playlist
command = ["yt-dlp", "--flat-playlist", "--print", "id", playlist_url]

result = subprocess.run(command, capture_output=True, text=True)

if result.returncode == 0 and result.stdout.strip():
    video_ids = result.stdout.strip().split("\n")
    print(f"Successfully fetched {len(video_ids)} video links:\n")
    
    for idx, vid_id in enumerate(video_ids, start=1):
        print(f"{idx}. https://www.youtube.com/watch?v={vid_id}")
else:
    print("Error occurred or no videos found:")
    print(result.stderr)
```
Or open an editor (i.e. `vim`), paste the code, `esc`, then `:wq` and run the code
```bash 
vim script.py
python3 script.py
```
This will fetch the playlist videos as below-
```bash
Successfully fetched 44 video links:

1. https://www.youtube.com/watch?v=xrQEx2MoTMQ
2. https://www.youtube.com/watch?v=EQEMhTtgPQ0
3. https://www.youtube.com/watch?v=EdaW3hHmEUw
4. https://www.youtube.com/watch?v=3bVFmivyOFo
5. https://www.youtube.com/watch?v=5OZKRhBEu5A
6. https://www.youtube.com/watch?v=yPAeKKvCqpI
7. https://www.youtube.com/watch?v=Wd6PVZSO7Wg
8. https://www.youtube.com/watch?v=QxFNmsjXDcY
9. https://www.youtube.com/watch?v=w8gHVx93XCo
10. https://www.youtube.com/watch?v=gL33vAOh8Pc
11. https://www.youtube.com/watch?v=idn05E0Zh8k
12. https://www.youtube.com/watch?v=K_m47hUzloY
13. https://www.youtube.com/watch?v=n3HAuDLH5zs
14. https://www.youtube.com/watch?v=UvIBl58aSU0
15. https://www.youtube.com/watch?v=vgQVB4Q2sns
16. https://www.youtube.com/watch?v=cPf1WSuKg1w
17. https://www.youtube.com/watch?v=x4fGNy9inho
18. https://www.youtube.com/watch?v=O-Ly_MpqoQE
19. https://www.youtube.com/watch?v=LETlg93BR3o
20. https://www.youtube.com/watch?v=nSQExLSkG2I
21. https://www.youtube.com/watch?v=CjSYqig_tgM
22. https://www.youtube.com/watch?v=CK20Le4uNLQ
23. https://www.youtube.com/watch?v=vblMF4QJdEE
24. https://www.youtube.com/watch?v=SAzkZCc9dos
25. https://www.youtube.com/watch?v=Q2xtCzRh6ho
26. https://www.youtube.com/watch?v=EcJ7vv9bkC8
27. https://www.youtube.com/watch?v=4RN-nDGhXK8
28. https://www.youtube.com/watch?v=1lVrGHcsGVo
29. https://www.youtube.com/watch?v=0gBD0GyuOeQ
30. https://www.youtube.com/watch?v=gXqQ2K_or1s
31. https://www.youtube.com/watch?v=HJj99FjuPjk
32. https://www.youtube.com/watch?v=E8wXS25PNNw
33. https://www.youtube.com/watch?v=zlMUs5EqGZg
34. https://www.youtube.com/watch?v=AARFPwO_4Yg
35. https://www.youtube.com/watch?v=d5h5DTA4yqc
36. https://www.youtube.com/watch?v=r4ADSD6NS_g
37. https://www.youtube.com/watch?v=Mt-8-hZOpfU
38. https://www.youtube.com/watch?v=dgyRX5Hojgo
39. https://www.youtube.com/watch?v=xMA1sjlGVs4
40. https://www.youtube.com/watch?v=T4MuYVlVmuI
41. https://www.youtube.com/watch?v=w4Lho9cvw_8
42. https://www.youtube.com/watch?v=AF2hl9Yu0bI
43. https://www.youtube.com/watch?v=Q8m8doabVB0
44. https://www.youtube.com/watch?v=sRX3M2H5b8s
```
3. Now copy the video id (i.e. `xrQEx2MoTMQ` for first case) and edit by providing the necessary information.


