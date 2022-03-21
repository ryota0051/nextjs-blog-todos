import { getData } from "./fetchUtil"

export async function getAllTasksData() {
  const tasks = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )
  const filteredTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
  return filteredTasks
}

export async function getAllTaskIds() {
  const tasks = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
  )
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    }
  })
}

export async function getTaskData(id) {
  const task = await getData(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
  )
  return task
}
