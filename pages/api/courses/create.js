import { getFirebaseAdmin } from 'next-firebase-auth'

const handler = async (req, res) => {
  const db = getFirebaseAdmin().firestore()
  const { name, owner } = await req.body

  try {
    const course = await db.collection('courses').add({
      name,
      owner
    })

    console.log('Document written with ID: ', course.id)
  } catch (e) {
    console.error('Error adding document: ', e)
    return res.status(500).json({ error: 'Unexpected error.' })
  }

  return res.status(200).json({ success: true })
}

export default handler
