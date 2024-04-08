'use client'
import { editUser } from '../actions.js';

export default function Tasks() {
  return (
    <div>
      <button onClick={async () => {
        await editUser()
      }}>Edit User</button>
    </div>
  )
}