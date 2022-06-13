import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export interface Icourse {
  name: string
  owner: string
  id: string
}

interface IuserPermission {
  uid?: string
}

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

export const getCourses = async (permission: IuserPermission) => {
  const { uid } = permission
  const q = query(collection(db, 'courses'), where('owner', '==', uid))
  const querySnapshot = await getDocs(q)
  const arr: Icourse[] = []
  querySnapshot.forEach(doc => {
    const objetos: Icourse = JSON.parse(JSON.stringify(doc.data()))

    const prev = {
      id: doc.id,
      name: objetos.name,
      owner: objetos.owner
    }

    arr.push(prev)
  })
  return arr
}
