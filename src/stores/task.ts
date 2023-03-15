import { defineStore } from 'pinia'
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

export const useTask = defineStore('task', {
  state: () => ({
    tasks: [] as ITask[],
    nextId: 0,
    loading: false,
    error: null
  }),
  actions: {
    addTask(title: string, description: string, estimateTime: string, status: string, labels = []) {
      this.tasks.push({
        id: this.nextId++,
        title,
        description,
        estimateTime,
        status,
        labels,
        comments: [],
        attachments: []
      })
    },

    removeTask(taskId: number) {
      this.tasks.splice(taskId)
    }
  }
})
