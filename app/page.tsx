import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ProfileForm } from '@/components/Form'

export default async function Home() {
  return (
    <>
      <main className="bg-zinc-900 px-10 md:px-0 flex justify-center items-center flex-col h-screen">
        <Card className="max-w-[400px]">
          <CardHeader>
            <CardTitle>Shorten Your Link with Flukx</CardTitle>
            <CardDescription>
              Flukx provides various words you can use to shorten your looooong
              links.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
        </Card>
      </main>
    </>
  )
}
