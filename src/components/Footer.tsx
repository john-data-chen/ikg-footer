import { Button } from './ui/button'
import { Input } from './ui/input'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center space-x-4 bg-gray-100 p-4">
      <Input type="email" placeholder="Enter your email" className="max-w-sm" />
      <Button>Subscribe</Button>
    </footer>
  )
}

export default Footer
