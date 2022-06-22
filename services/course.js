export const createCourse = async (course, successCallback) => {
  try {
    const promise = await fetch('/api/courses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })

    const response = await promise.json()

    if (response) successCallback()
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const readCourse = () => {}
export const updateCourse = () => {}
export const deleteCourse = () => {}
