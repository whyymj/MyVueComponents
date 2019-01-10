import {
  CacheState,
  CacheMutations,
  CacheActions,
  CacheGetters
} from './UIDemos/UIDemosCache.js'

import {
  TipsState,
  TipsMutations,
  TipsActions,
  TipsGetters
} from './UIDemos/UIDemosComponentsTips.js'

import {
  MenuState,
  MenuMutations,
  MenuActions,
  MenuGetters
} from './UIDemos/UIDemosContextMenu.js'

import {
  FrameState,
  FrameMutations,
  FrameActions,
  FrameGetters
} from './UIDemos/UIDemosFrameRecords.js'
import {
  BubbleState,
  BubbleMutations,
  BubbleActions,
  BubbleGetters
} from './UIDemos/UIDemosEventBubble.js'
export const state = () => ({
  ...CacheState(),
  ...TipsState(),
  ...MenuState(),
  ...FrameState(),
  ...BubbleState(),
})
export const mutations = {
  ...CacheMutations,
  ...TipsMutations,
  ...MenuMutations,
  ...FrameMutations,
  ...BubbleMutations
}
export const actions = {
  ...CacheActions,
  ...TipsActions,
  ...MenuActions,
  ...FrameActions,
  ...BubbleActions
}

export const getters = {
  ...CacheGetters,
  ...TipsGetters,
  ...MenuGetters,
  ...FrameGetters,
  ...BubbleGetters
}
