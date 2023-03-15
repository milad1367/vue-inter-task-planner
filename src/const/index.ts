import dayjs from 'dayjs'

interface ITask {
  id: number
  title: string
  description: string
  estimateTime: string
  labels: string[]
  status: string
  comments: string[]
  attachments: string[]
}
export const initialState: ITask[] = [
  {
    id: 1,
    title: 'test',
    description: 'test',
    estimateTime: dayjs().add(2, 'day').format(),
    labels: ['redux', 'test2'],
    status: 'Pending',
    comments: ['lorm epsom'],
    attachments: []
  },
  {
    id: 2,
    title: 'test2',
    description: 'test2',
    estimateTime: dayjs().add(3, 'day').format(),
    labels: ['saga', 'test2'],
    status: 'Processing',
    comments: ['lorm epsom'],
    attachments: []
  },
  {
    id: 3,
    title: 'test3',
    description: 'test3',
    estimateTime: dayjs().subtract(2, 'day').format(),
    labels: ['test1', 'test2', 'test3'],
    status: 'Done',
    comments: ['lorm epsom'],
    attachments: []
  },
  {
    id: 4,
    title: 'test4',
    description: 'test4',
    estimateTime: dayjs().subtract(4, 'day').format(),
    labels: ['test1', 'test2', 'test3'],
    status: 'Done',
    comments: ['lorm epsom'],
    attachments: []
  }
]
