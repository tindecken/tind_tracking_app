# Taste
- Develops and tests mobile apps on a physical Android device connected via adb (rather than an emulator). Confidence: 0.55
- Wants loading/progress indicators (e.g. React Native ActivityIndicator) shown to users while async operations are in flight, so there is visible feedback during processing. Confidence: 0.7
- Builds Expo / React Native apps (Expo Router routes under `src/app`, TypeScript `.tsx`). Confidence: 0.7
- Prefers third-party/upstream agent skills to be installed into the project repo (`.commandcode/skills/<name>/`) rather than globally, preserving the source's original folder layout (SKILL.md plus its `references/` and `scripts/`). Confidence: 0.7
- Reaches for official/vendor-provided resources (e.g. Expo's published skills) instead of hand-writing equivalent guidance. Confidence: 0.6
- Installs skills incrementally by handing over the upstream GitHub URL and expecting the agent to fetch the manifest plus everything it references; treats skill installation as an ongoing accumulation within one project. Confidence: 0.6
- Prefers idiomatic framework navigation structure over hand-rolled UI: for Expo Router bottom tabs, wants the standard file-based route group (`dashboard/` folder with `_layout.tsx` `<Tabs>` and one route file per tab) rather than in-screen state-driven tab bars. Confidence: 0.5
