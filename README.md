# Sekiro Route (Android)

A tiny offline checklist for Sekiro: Shadows Die Twice. It's a single WebView showing `app/src/main/assets/index.html`. Progress is saved on the phone. There are no libraries, so the APK is small.

## Get the APK

**Option A: GitHub, no install needed**
1. Create a new GitHub repository and upload the contents of this folder.
2. Open the **Actions** tab. The "Build APK" workflow runs on every push.
3. When it finishes, download `sekiro-route-apk` from the run page, unzip it and copy the `.apk` to your phone.

**Option B: Android Studio**
1. Open this folder in Android Studio and let it sync.
2. Run **Build → Build App Bundle(s) / APK(s) → Build APK(s)**, or press Run with your phone plugged in.

To install on the phone, open the `.apk` and allow "Install unknown apps" for your file manager when Android asks.

## Editing the route

All steps live in the `ROUTE` list at the bottom of `app/src/main/assets/index.html`. Each step has an `id`, a kind `k` (`boss`, `mini`, `key`, `go`), a title `t`, a note `n`, an optional `opt:1` and a warning `w`. Keep existing `id`s unchanged so saved progress still matches.
