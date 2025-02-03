import { ExtendedRecordMap } from 'notion-types'
import {
  //getCanonicalPageId as getCanonicalPageIdImpl,
  parsePageId
} from 'notion-utils'

import { inversePageUrlOverrides } from './config'

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false })
  if (!cleanPageId) {
    return null
  }

  const override = inversePageUrlOverrides[cleanPageId]
  if (override) {
    return override
  } else {
    if(uuid){return pageId.replaceAll('-', '')}
    else{
          return pageId.replaceAll('-', '')
    }
    //return getCanonicalPageIdImpl(pageId, recordMap, {uuid})
  }
}
