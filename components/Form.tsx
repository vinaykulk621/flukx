'use client'

import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { supabase } from '@/supabase'
import { useState } from 'react'
import * as z from 'zod'

const formSchema = z.object({
  link: z
    .string()
    .min(2, { message: 'The link should be a little Loooonger' })
    .regex(
      new RegExp(
        /^(?:(?:https?|http):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i
      ),
      `Hmmm.. Try including https:// or it's an Invalid link`
    ),
})

export function ProfileForm() {
  const [link, setLink] = useState('')
  const [hasCopied, setHasCopied] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: '',
    },
  })

  async function deleteWord(word: string | undefined) {
    let { data: _flukx, error } = await supabase
      .from('flukx')
      .delete()
      .eq('word', word)
  }

  async function insertIntoRedirects(
    word: string | undefined,
    redirect_link: string
  ) {
    const { data, error } = await supabase
      .from('flukx_redirects')
      .insert({ short_link: word || '', redirect: redirect_link })
      .select()
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Getting that random word
    // Around 97,563 words in database
    let { data: flukx, error } = await supabase.from('flukx').select().limit(1)

    // Deleting that word from the flukx table
    deleteWord(flukx?.[0]?.word)

    // Inserting that word into flukx_redirects table
    insertIntoRedirects(flukx?.[0]?.word, values.link)

    // Updating The div
    setLink(`${process.env.NEXT_PUBLIC_VERCEL_URL}/${flukx?.[0]?.word}`)
  }

  async function copyToClipBoard() {
    const redirectLink = document.getElementById('redirectLink')?.textContent
    await navigator.clipboard.writeText(redirectLink || 'Error')
    setHasCopied(true)
    toast({
      description: 'Copied',
    })
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>A very Looooong link</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a Loooooong link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {link === '' ? (
            <Button type="submit" className="mt-2 w-fit">
              Shorten
            </Button>
          ) : (
            <div
              className={`texg-4xl m-4 rounded-xl p-2 text-center text-white transition-all duration-100 hover:cursor-copy ${
                hasCopied ? 'bg-zinc-700' : 'bg-zinc-900'
              }`}
              onClick={copyToClipBoard}
              id="redirectLink"
            >
              {link}
            </div>
          )}
        </form>
      </Form>
    </>
  )
}
