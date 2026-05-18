/**
 * @amlplugins/replicate-collections
 *
 * Thin namespaced re-export of the native replicate SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Replicate Collections — list curated model collections (text-to-image, audio, video, language, multimodal).
 */

import * as _sdk from "replicate";
export * from "replicate";
export { _sdk as sdk };
export default _sdk;
