'use client'

import { SignUp } from '@clerk/nextjs'
import { useTheme } from 'next-themes'

export default function Page() {
  const { theme } = useTheme()

  

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <SignUp
        appearance={{
          variables: {
            colorBackground: theme === "light" ? "rgba(0, 0, 0, 0.0)" : "rgba(0, 0, 0, 0.5)", // Transparência para o fundo
            colorText: theme === "light" ? "#000" : "#fff", // Cor do texto
            colorTextSecondary: theme === "light" ? "#4b4b4b" : "#a5a5a5", // Cor do texto secundário
            colorInputBackground: theme === "light" ? "#fff" : "#2c2c2c", // Fundo dos inputs
            colorInputText: theme === "light" ? "#000" : "#fff", // Cor do texto nos inputs
            borderRadius: "0.5rem", // Personalizar bordas arredondadas
          },
          elements: {
            formButtonPrimary: "bg-orange-500 hover:bg-orange-600 text-white", // Personalização do botão principal
            alternativeMethodsBlockButton: theme === "light" ? "text-black hover:text-black/50" : "text-white hover:white/50", // Personalização do botão de alternativas
            socialButtonsBlockButton: theme === "light" ? "text-black hover:text-black/50" : "text-white hover:white/50", // Personalização do botão de redes sociais
          },
        }}
      />
    </div>
  )
}