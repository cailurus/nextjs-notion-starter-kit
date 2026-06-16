import { ExtendedRecordMap } from 'notion-types'

export function normalizeRecordMap(
  recordMap: ExtendedRecordMap
): ExtendedRecordMap {
  if (!recordMap?.block) {
    return recordMap
  }

  for (const [blockId, record] of Object.entries(recordMap.block)) {
    const nestedRecord = (record as any)?.value

    if (nestedRecord?.value?.id && !nestedRecord.id) {
      ;(recordMap.block as any)[blockId] = {
        ...record,
        ...nestedRecord
      }
    }
  }

  return recordMap
}
