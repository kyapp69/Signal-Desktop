// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { Long } from '../window.d';

export function getSafeLongFromTimestamp(timestamp = 0): Long {
  if (timestamp >= Number.MAX_SAFE_INTEGER) {
    return window.dcodeIO.Long.MAX_VALUE;
  }

  return window.dcodeIO.Long.fromNumber(timestamp);
}

export function getTimestampFromLong(value: Long | null): number {
  if (!value) {
    return 0;
  }

  const num = value.toNumber();

  if (num >= Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }

  return num;
}
