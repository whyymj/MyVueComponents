
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
export const state = () => ({
  ...CacheState(),
  ...TipsState(),
  ...MenuState(),
  ...FrameState(),
})
export const mutations = {
  ...CacheMutations,
  ...TipsMutations,
  ...MenuMutations,
  ...FrameMutations
}
export const actions = {
  ...CacheActions,
  ...TipsActions,
  ...MenuActions,
  ...FrameActions
}

export const getters = {
  ...CacheGetters,
  ...TipsGetters,
  ...MenuGetters,
  ...FrameActions
}
