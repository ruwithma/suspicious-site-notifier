# 🛡️ Suspicious Site Notifier

A lightweight, open-source browser extension that helps protect users from phishing and malicious websites in real-time — designed to work across **Chrome, Brave, Edge, Opera, and Firefox**.

![Screenshot](./assets/preview.png) <!-- Replace with your own preview image -->

---

## 🚀 Features

- ⚠️ **Real-time URL checking**  
  Warns users before visiting suspicious or lookalike domains.

- 🔍 **Works on Chromium & Firefox**  
  One codebase for Chrome, Edge, Brave, Opera, and Firefox.

- 🧠 **Smart Detection**  
  Uses Google Safe Browsing, PhishTank, and custom heuristics.

- 🔒 **100% Privacy-Focused**  
  No data is collected or sent anywhere. All checks are done locally.

---

## 🧪 Browser Support

| Browser         | Status     |
|----------------|------------|
| Google Chrome   | ✅ Supported |
| Brave           | ✅ Supported |
| Microsoft Edge  | ✅ Supported |
| Opera           | ✅ Supported |
| Mozilla Firefox | 🔧 In Progress (Manifest v2 compatibility) |

> **Note**: Firefox still uses Manifest V2 (for now), while Chromium-based browsers use Manifest V3. We're actively maintaining support for both.

---

## 📦 Installation

> 🔧 Chrome / Brave / Edge / Opera

1. Download or clone this repository
2. Open `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load Unpacked** and select the project folder

> 🦊 Firefox (Manual Install)

1. Open `about:debugging#/runtime/this-firefox`
2. Click **"Load Temporary Add-on"**
3. Select any file in the project directory (like `manifest.json`)

> ⚠️ This will only load the extension temporarily (until browser restart). For permanent installation, use the [Firefox Add-ons Developer Hub](https://addons.mozilla.org/en-US/developers/).

---

## 🔧 Tech Stack

- Manifest V3 (Chromium)
- Manifest V2 (Firefox)
- JavaScript (Vanilla)
- Public API integrations: Google Safe Browsing, PhishTank
- Optional: Heuristic matching (e.g., Levenshtein distance)

---

## 🧱 Folder Structure

```bash
suspicious-site-notifier/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── icons/
├── assets/
└── README.md

