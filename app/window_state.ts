// Copyright 2017-2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

let shouldQuitFlag = false;

export function markShouldQuit(): void {
  shouldQuitFlag = true;
}

export function shouldQuit(): boolean {
  return shouldQuitFlag;
}
