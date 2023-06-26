
export const metadata = {
  title: 'Crear una cuenta - InboxNinja',
  description: 'Crea una cuenta en InboxNinja para empezar a usarlo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full justify-center h-screen">
      <div className="bg-zinc-800 w-2/3 h-full hidden lg:block bg-[url('/images/email-bg.jpg')] bg-center bg-no-repeat bg-cover brightness-50">
      </div>
      <div className="w-full lg:w-1/3 lg:min-w-[475px] max-w-[625px] flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
