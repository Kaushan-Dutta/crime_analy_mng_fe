import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-28'>
      <h2>Not Found</h2>
      <p>No event Found as such</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}