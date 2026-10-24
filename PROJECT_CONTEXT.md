# Sekiro Route App: Project Context

Background for continuing this work in a Claude project. Upload this file to the project's knowledge.

## Goal
A very lightweight Android app that tracks progress through *Sekiro: Shadows Die Twice*. It's a checklist split into sections (areas), with each section showing what needs doing: bosses, mini-bosses, key items, story steps, and missable warnings.

## Where things live
- **Project folder (Windows PC "nicolaig-pc"):** `D:\PROGRAMS\dev\sekiro-app`
- **Web version (claude.ai artifact):** "Sekiro Route". It's the same checklist and syncs progress to the Claude account.
- **App source of truth:** `app\src\main\assets\index.html`. The whole app is this one HTML file, shown inside an Android WebView.

## Decisions made so far
1. **Fextralife was not scraped.** The original idea was to scrape https://sekiroshadowsdietwice.wiki.fextralife.com/Game_Progress_Route, but Fextralife's robots.txt blocks automated access and its text is copyrighted. The page is roughly a 10-minute read (about 1,500–2,500 words) built around a flowchart.
2. **Used the Fandom Sekiro wiki's MediaWiki API instead.** Its content is CC BY-SA, so it can be reused with credit, and the API returns clean data. The route text in the app is written in our own words, using facts pulled from the API plus cross-checks against PowerPyx, GameWith, Gameranx and GosuNoob guides.
3. **Android approach:** a plain WebView wrapper written in Java, with no libraries, so the APK stays tiny. Progress is saved in the WebView's `localStorage`.
4. **Builds happen locally** on the PC. GitHub Actions was dropped as the main route.

## Fandom API notes
- Base: `https://sekiro-shadows-die-twice.fandom.com/api.php`
- It worked from a real browser. Server-side requests from Claude's cloud workspace failed, so it may block datacenter traffic. Run fetch scripts from a browser or from the PC.
- There is no `Walkthrough` page on this wiki (`missingtitle`).
- Useful categories: `Category:Bosses` (18 pages), `Category:Mini-Bosses` (~33), `Category:Locations` (~58), `Category:Key Items`, `Category:Endings`.
- Boss pages use `{{Infobox Boss}}` and `{{Infobox_Mini-Boss}}` templates with no location field. Location lives in a `==Location==` section or in the intro text. The intro usually states "optional" and the number of Deathblow counters.
- Example calls:
  ```
  ?action=query&list=categorymembers&cmtitle=Category:Mini-Bosses&cmlimit=200&format=json
  ?action=query&prop=revisions&rvprop=content&rvslots=main&titles=Guardian Ape|Lady Butterfly&format=json&formatversion=2
  ?action=parse&page=Ending 3: Purification&prop=text&format=json
  ```
- Licence obligation: credit the Fandom Sekiro wiki and keep any copied text under CC BY-SA.

## App structure (`index.html`)
- The `ROUTE` array holds the data. It has 11 sections in this order: Prologue, Ashina Outskirts, Hirata Estate, Ashina Castle, Senpou Temple (Mortal Blade), Sunken Valley (Lotus of the Palace), Ashina Depths & Mibu Village (Shelter Stone), Ashina Castle first invasion (Owl), Fountainhead Palace, Final invasion, Endings.
- Step fields:
  - `id`: stable, never rename, because saved progress depends on it
  - `k`: `boss` | `mini` | `key` | `go`
  - `t`: title
  - `n`: note
  - `opt:1`: optional
  - `w`: 危 warning for missables and points of no return
- UI:
  - Sticky header with a posture-bar progress meter showing required steps done (38 required in total)
  - "Next up" card with a Mark done button
  - Filters: All / Required / Bosses, plus Hide done
  - Collapsible sections, each with its own progress
  - Reset with a confirmation step
  - Light and dark themes
- Storage: `localStorage` key `sekiro-route-v1`. On claude.ai it also syncs through the artifact `db` capability (`data/users/<id>/progress`). Inside the Android app that part is skipped automatically.
- Look: Ashina mist greys, posture amber for done/progress, peril red for bosses. Fonts are Shippori Mincho B1 (display) and Zen Kaku Gothic New (body), loaded from Google Fonts with system fallbacks, so the app works offline.

## Key missables / branch points already flagged in the app
- **Young Lord's Bell Charm** (Timid Maid, Outskirts): lost if not taken before the final invasion, along with Hirata Estate items.
- **Getting Mortal Blade + Lotus + Shelter Stone** triggers the first invasion. After that, only the Abandoned Dungeon Entrance idol works in the castle.
- **Owl's choice:** obeying the Iron Code locks you into the Shura ending.
- **Purification and Return quest lines** must be finished before the Divine Dragon.
- **Final invasion:** some NPCs die and side quests end.

## Android project files
```
sekiro-app/
  settings.gradle, build.gradle (AGP 8.7.3), gradle.properties
  gradlew, gradlew.bat, gradle/wrapper/ (Gradle 8.14.3)
  app/build.gradle            namespace/applicationId com.sekiroroute.app, minSdk 24, target/compileSdk 35, Java 17
  app/src/main/AndroidManifest.xml   INTERNET permission (fonts only)
  app/src/main/java/com/sekiroroute/app/MainActivity.java   WebView, DOM storage on, external links open in browser
  app/src/main/assets/index.html     the app
  app/src/main/res/drawable/ic_launcher.xml   amber diamond (sculptor's idol) icon
  README.md
```
`.github/workflows/build-apk.yml` exists as a separate file but couldn't be written to the PC remotely. It's optional.

## Build and install (PowerShell, in `D:\PROGRAMS\dev\sekiro-app`, phone plugged in with USB debugging)
```powershell
if (!(Test-Path local.properties)) { "sdk.dir=$($env:LOCALAPPDATA -replace '\\','/')/Android/Sdk" | Set-Content local.properties -Encoding ascii }; .\gradlew.bat installDebug; if ($?) { & "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" shell am start -n com.sekiroroute.app/.MainActivity }
```
Needs JDK 17 or newer. If needed, set `$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"` first.

## Status
- [x] Route data written: 11 sections, bosses, mini-bosses, key items, endings
- [x] Checklist page tested in headless Chromium at phone width: checking steps, persistence after reload, filters, no horizontal scroll, no JS errors
- [x] Android project created in `D:\PROGRAMS\dev\sekiro-app`
- [ ] First local build: not yet confirmed. The project has never been compiled, so the first `installDebug` run is the real test.

## Ideas for next steps
- Add collectibles per area (Prayer Beads, Gourd Seeds, Memories, Treasure Carp Scales) pulled from the Fandom API
- Per-ending checklists for the Purification and Return quest steps
- An NG+ toggle that clears progress but keeps a run counter
- Export and import progress as JSON
