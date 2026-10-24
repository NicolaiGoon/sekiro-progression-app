# Sekiro Route (Android)

A tiny offline checklist for Sekiro: Shadows Die Twice. It's a single WebView showing `app/src/main/assets/index.html`. Progress is saved on the phone. There are no libraries, so the APK is small.

## Get the APK

With JDK 17+ and the Android SDK installed, run `.\gradlew.bat installDebug` with your phone plugged in (USB debugging on), or open the folder in Android Studio and press Run.

To install on the phone, open the `.apk` and allow "Install unknown apps" for your file manager when Android asks.

## Editing the route

All steps live in the `ROUTE` list at the bottom of `app/src/main/assets/index.html`. Each step has an `id`, a kind `k` (`boss`, `mini`, `key`, `go`), a title `t`, a note `n`, an optional `opt:1` and a warning `w`. Keep existing `id`s unchanged so saved progress still matches.
