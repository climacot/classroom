import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Icourse } from 'models/user'

export const createCourse = async (course: Icourse, callback: () => void) => {
  const { name, owner } = course

  try {
    const docRef = await addDoc(collection(db, 'courses'), {
      name,
      owner,
      timestamp: Date.now()
    })
    console.log('Document written with ID: ', docRef.id)
    callback()
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getCourses = async (id: unknown) => {
  const q = query(collection(db, 'courses'), where('owner', '==', id))
  const querySnapshot = await getDocs(q)
  const arr: Icourse[] = []

  querySnapshot.forEach(doc => {
    const objetos: Icourse = JSON.parse(JSON.stringify(doc.data()))

    const prev = {
      id: doc.id,
      name: objetos.name,
      owner: objetos.owner,
      timestamp: objetos.timestamp
    }

    arr.push(prev)
  })

  return arr
}
