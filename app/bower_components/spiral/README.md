# Spiral

__NOTE: THIS PROJECT IS WORK-IN-PROGRESS. USE AT YOUR OWN RISK.__

__Spiral__ is a JavaScript library for Web Audio API. It is a light-weight version of [WAAX](https://hoch.github.io/WAAX) core library. Its goal is to extend Web Audio API while minimizing the abstraction and the layer.

## Why Spiral?

1. **You already know**: Spiral is not a bloated framework or does not create a new world based on the deprecated ScriptProcessor (or formerly known JavaScriptNode). So if you are familiar with Web Audio API, you can directly apply your knowledge to Spiral. It does not introduce any drastically different concept or interface.

2. **Spiral-UI**: It has a growing section of UI Widgets based on Polymer 1.0. They are fully compatible not only with Web Audio API, but any elements or script on your HTML page. Check them out [here](https://github.com/search?q=user%3Ahoch+spiral).

3. **Boilerplate** : If you want to jump into the development with Spiral, there is a boilerplate will get you up and running in few minutes. All you need is Git, Node, Bower and Gulp. Get it [here](https://github.com/hoch/motw-2015).

4. **Testing framework** (WIP): Spiral adopts the client [test framework from Chromium project](https://code.google.com/p/chromium/codesearch#chromium/src/third_party/WebKit/LayoutTests/webaudio/) - it uses `OfflineAudioContext` to verify the output of the code by investigating the result in a sample-accurate fashion.


5. **Documentation** (WIP): Coming soon as well.