'use server'
import { kv } from '@vercel/kv';
import { revalidateTag } from 'next/cache'

export async function editUser() {
  try {
    console.log('started editing the user')
    await kv.hset('user:me', { id: 123, email: 'test3@me.com' });
    revalidateTag('user')
    console.log('edited the user')
  } catch (error) {
    console.log('error while editing user')
  }
}