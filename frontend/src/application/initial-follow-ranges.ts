/** 首次采集的历史范围；值为提交给设置接口的天数，0 表示不限时间。 */
export const FOLLOW_INITIAL_RANGE_OPTIONS = [
  ['0', 'Any time'],
  ['7', 'Last 7 days'],
  ['30', 'Last 30 days'],
  ['90', 'Last 90 days'],
] as const satisfies readonly (readonly [value: string, label: string])[];

export type InitialFollowRange = typeof FOLLOW_INITIAL_RANGE_OPTIONS[number][0];
