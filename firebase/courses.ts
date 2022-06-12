import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export interface Icourse {
  name: string
  owner: string
  id: string
}

interface IuserPermission {
  uid: string
}

export const createCourse = async (course: Icourse, callback: () => void) => {
  const { name, owner } = course
  console.log(name)
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
    const prev = {
      id: doc.id,
      ...doc.data()
    }
    arr.push(prev)
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data())
  })
  return arr
}
