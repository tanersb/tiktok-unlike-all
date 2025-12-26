// ==UserScript==
// @name         TikTok Unlike on Profile
// @namespace    https://github.com/tanersb/tiktok-unlike-all
// @version      1.3
// @description  Removes likes on videos while browsing any TikTok profile. Manual Start/Stop.
// @match        https://www.tiktok.com/@*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/tanersb/tiktok-unlike-all/main/tiktok-unlike-all.user.js
// @updateURL    https://raw.githubusercontent.com/tanersb/tiktok-unlike-all/main/tiktok-unlike-all.user.js
// ==/UserScript==

(function () {
  'use strict';

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  let running = false;

  const btn = document.createElement("div");
  btn.textContent = "START UNLIKE";
  btn.style.cssText = `
    position: fixed;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99999;
    background: #fe2c55;
    color: white;
    font-weight: 700;
    padding: 12px 18px;
    border-radius: 999px;
    cursor: pointer;
    font-family: system-ui;
    box-shadow: 0 4px 14px rgba(0,0,0,.25);
    user-select: none;
  `;
  document.body.appendChild(btn);

  btn.onclick = () => {
    running = !running;
    btn.textContent = running ? "STOP UNLIKE" : "START UNLIKE";
    if (running) process();
  };

  async function process() {
    while (running) {
      const likeBtn = document.querySelector('button[aria-pressed="true"]');
      if (likeBtn) {
        likeBtn.click();
        await sleep(120);
      }

      const nextBtn =
        document.querySelector('[data-e2e="arrow-right"]') ||
        document.querySelector('[data-e2e="browse-right"]') ||
        document.querySelector('button[aria-label="Next video"]');

      if (!nextBtn) {
        running = false;
        btn.textContent = "START UNLIKE";
        break;
      }

      nextBtn.click();
      await sleep(250);
    }
  }
})();
