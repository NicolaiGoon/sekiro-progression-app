# Sekiro Route (Android)

A tiny offline checklist for Sekiro: Shadows Die Twice. It's a single WebView showing `app/src/main/assets/index.html`. Progress is saved on the phone. There are no libraries, so the APK is small.

## Get the APK

With JDK 17+ and the Android SDK installed, run `.\gradlew.bat installDebug` with your phone plugged in (USB debugging on), or open the folder in Android Studio and press Run.

To install on the phone, open the `.apk` and allow "Install unknown apps" for your file manager when Android asks.

## Editing the route

All steps live in the `ROUTE` list in `app/src/main/assets/route.js`. The field reference is at the top of that file. In short, each step has an `id`, a kind `k` (`boss`, `mini`, `key`, `go`), a title `t`, and optionally a note `n`, `opt:1`, a warning `w`, a Fandom search term `wiki`, and sub-steps `sub: [{id, t}]`. Keep existing `id`s unchanged so saved progress still matches.

In the app, tap a step's diamond to check it off, and tap its title to open the details: the note, sub-steps and a link to the Fandom wiki. Android's back button closes the details.
