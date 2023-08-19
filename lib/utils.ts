import { supabase } from '@/supabase'
import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function deleteWord(word: string | undefined) {
  let { data: _flukx, error } = await supabase
    .from('flukx')
    .delete()
    .eq('word', word)
}

export async function insertIntoRedirects(
  word: string | undefined,
  redirect_link: string
) {
  await supabase
    .from('flukx_redirects')
    .insert({ short_link: word || '', redirect: redirect_link })
}

export async function getWord() {
  let { data: flukx, error } = await supabase.from('flukx').select().limit(1)
  return flukx
}

export async function copyToClipBoard() {
  const redirectLink = document.getElementById('redirectLink')?.textContent
  await navigator.clipboard.writeText(redirectLink || 'Error')
}
