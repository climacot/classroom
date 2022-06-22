import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Icourse } from 'models/user'
import { getFirebaseAdmin } from 'next-firebase-auth'

export const createCourse = async (course, callback) => {
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

export const getCourses = async id => {
  const db = getFirebaseAdmin().firestore()
  const querySnapshot = await db.collection('courses').where('owner', '==', id).get()
  const arr = []

  querySnapshot.forEach(doc => {
    const objetos = JSON.parse(JSON.stringify(doc.data()))

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
