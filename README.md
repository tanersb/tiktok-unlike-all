# TikTok Unlike on Profile 🎵

![Version](https://img.shields.io/badge/version-1.3-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=flat-square)

A handy Userscript designed to automate the process of **unliking videos** on TikTok. It adds a floating control button to the interface, allowing you to bulk-remove likes while automatically navigating through the video feed.

---

## ⚠️ Disclaimer

**This tool is for educational purposes only.**
Automating actions on TikTok carries a risk. While this script includes safety delays to mimic human interaction, please use it responsibly to avoid temporary account restrictions.

---

## 🚀 Features

* **Simple UI:** Adds a clean, floating **"START UNLIKE"** button to the right side of the screen.
* **Automated Navigation:** Automatically clicks the "Next Video" button after unliking.
* **Smart Detection:** Only attempts to click the like button if the video is currently liked (`aria-pressed="true"`).
* **Manual Control:** You can pause/stop the process at any time by clicking the button again.
* **Safety Delays:** Includes programmed pauses (Sleep) between actions to prevent API spamming.

---

## 📥 Installation

1.  **Install a Userscript Manager:**
    * [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    * Violentmonkey
2.  **Install the Script:**
    * [**Click Here to Install**](https://raw.githubusercontent.com/tanersb/tiktok-unlike-all/main/tiktok-unlike-all.user.js)
    * *Or manually copy the script content into a new script file.*

---

## 🎮 How to Use

1.  Go to your (or any) **TikTok Profile** page (e.g., `tiktok.com/@username`).
2.  **Important:** Open the first video you want to unlike (enter the video viewer mode).
3.  You will see a red **"START UNLIKE"** button on the right side of the screen.
4.  Click it to begin. The script will:
    * Unlike the current video.
    * Wait a moment.
    * Move to the next video.
5.  Click **"STOP UNLIKE"** to pause the process.

---

## 📝 License

Distributed under the MIT License.

---
*Developed by **tanersb***
