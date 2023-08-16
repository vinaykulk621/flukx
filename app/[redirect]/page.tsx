import { supabase } from '@/supabase'
import { redirect } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: { redirect: string }
}) {
  let { data: flukx_redirects, error } = await supabase
    .from('flukx_redirects')
    .select('redirect')
    .eq('short_link', params.redirect)

  if (flukx_redirects?.length === 0 || error) {
    redirect('/')
  }

  redirect(`${flukx_redirects?.[0]?.redirect}`)
}
