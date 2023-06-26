import { Icons } from '@/components/ui/Icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <Card className='w-full max-w-[575px] border-[0] sm:border-[1px] lg:border-[0] xl-border[1px]'>
      <CardHeader>
        <CardTitle>
          Iniciar Sesión
        </CardTitle>
        <CardDescription className='text-neutral-500'>
          Accede a tu cuenta de Ninjabox
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-2'>
          <Button color='#F8F' variant="outline" className='w-full'>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button color='#F8F' variant="outline" className='w-full'>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
          
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              O CONTINUA CON
            </span>
          </div>
        </div>

        <form className='w-full space-y-4'>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Email</Label>
            <Input id="name" placeholder="Tu correo electrónico" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Contraseña</Label>
            <Input id="name" placeholder="Contraseña segura" />
          </div>
          <Button className='w-full'>CREAR CUENTA</Button>
        </form>
      </CardContent>
      <CardFooter className='justify-center'>
        <h1 className='text-center text-neutral-400'>
          ¿No estás registrado?{" "}
          <Link href="/register" className='hover:text-primary underline'>
            Crea una cuenta
          </Link>
        </h1>
      </CardFooter>
    </Card>
  )
}
