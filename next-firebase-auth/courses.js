import { getFirebaseAdmin } from 'next-firebase-auth'

export const createCourse = async (course, callback) => {
  const db = getFirebaseAdmin().firestore()

  const { name, owner } = course

  try {
    const res = await db.collection('courses').add({
      name,
      owner
    })

    console.log('Document written with ID: ', res.id)
    callback()
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
