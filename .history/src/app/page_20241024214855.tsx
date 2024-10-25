"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, Star, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
//import { toast } from "@/components/ui/use-toast"

const bracelets = [
  { id: 1, name: 'Charmed Ocean', price: 8, image: 'bracelets/bracelet_1.jpg', rating: 4.5 },
  { id: 2, name: 'Garden of Joy', price: 8, image: 'bracelets /bracelet_2.jpg', rating: 4.6 },
  { id: 3, name: 'Midnight Melody', price: 8, image: 'bracelets/bracelet_3.jpg', rating: 4.4 },
  { id: 4, name: 'Woodland Wonder', price: 8, image: 'bracelets/bracelet_4.jpg', rating: 4.7 },
  { id: 5, name: 'Royal Adventure', price: 8, image: 'bracelets/bracelet_5.jpg', rating: 4.8 },
  { id: 6, name: 'Celestial Night', price: 8, image: 'bracelets/bracelet_6.jpg', rating: 4.9 },
  { id: 7, name: 'Festive Spark', price: 8, image: 'bracelets/bracelet_7.jpg', rating: 4.5 },
  { id: 8, name: 'Cosmic Butterfly', price: 8, image: '/bracelet_8.jpg', rating: 4.6 },
  { id: 9, name: 'Starry Dreams', price: 8, image: '/bracelet_9.jpg', rating: 4.7 },
  { id: 10, name: 'Strawberry Bliss', price: 8, image: '/bracelet_10.jpg', rating: 4.3 },
  { id: 11, name: 'Mystic Meadow', price: 8, image: '/bracelet_11.jpg', rating: 4.5 },
  { id: 12, name: 'Tropical Escape', price: 8, image: '/bracelet_12.jpg', rating: 4.6 },
  { id: 13, name: 'Stellar Dreams', price: 8, image: '/bracelet_13.jpg', rating: 4.7 },
  { id: 14, name: 'Wings of Wonder', price: 8, image: '/bracelet_14.jpg', rating: 4.8 },
  { id: 15, name: 'Ocean Charm', price: 8, image: '/bracelet_15.jpg', rating: 4.9 },
  { id: 16, name: 'Heart & Sea', price: 8, image: '/bracelet_16.jpg', rating: 4.4 },
  { id: 17, name: 'Joyful Cloud', price: 8, image: '/bracelet_17.jpg', rating: 4.7 },
  { id: 18, name: 'Nature’s Treasure', price: 8, image: '/bracelet_18.jpg', rating: 4.5 },
  { id: 19, name: 'Royal Butterfly', price: 8, image: '/bracelet_19.jpg', rating: 4.9 }
]

export default function Component() {
  const [currentPage, setCurrentPage] = useState('about')
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const Header = () => (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#81D8D0] text-white sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">The Charming Bracelet Boutique</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-gray-200 transition-colors">About</button></li>
            <li><button onClick={() => setCurrentPage('bracelets')} className="hover:text-gray-200 transition-colors">Bracelets</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-200 transition-colors">Contact</button></li>
            <li>
              <button onClick={() => setIsCartOpen(true)} className="hover:text-gray-200 transition-colors">
                <ShoppingBag className="inline-block w-5 h-5" />
                <span className="sr-only">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through our boutique
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <Button variant="ghost" onClick={() => setCurrentPage('about')} className="w-full justify-start">About</Button>
              <Button variant="ghost" onClick={() => setCurrentPage('bracelets')} className="w-full justify-start">Bracelets</Button>
              <Button variant="ghost" onClick={() => setCurrentPage('contact')} className="w-full justify-start">Contact</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )

  const Footer = () => (
    <footer className="bg-[#81D8D0] text-white">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-gray-200 transition-colors">About</button></li>
            <li><button onClick={() => setCurrentPage('bracelets')} className="hover:text-gray-200 transition-colors">Bracelets</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-gray-200 transition-colors">Contact</button></li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 The Charming Bracelet Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  const AboutPage = () => (
    <div className="bg-gray-50">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-gray-100 to-gray-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#81D8D0] mb-4">Welcome to The Charming Bracelet Boutique</h2>
              <p className="text-xl text-gray-700 mb-6">Discover exquisite bracelets that capture the essence of elegance and charm.</p>
              <Button onClick={() => setCurrentPage('bracelets')} className="bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">Shop Now</Button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:w-1/2"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Elegant bracelet display"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#81D8D0] mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The Charming Bracelet Boutique was born from a passion for creating timeless pieces that celebrate the beauty of life's moments. Our founder, inspired by the elegance of classic jewelry design, set out to create a collection of bracelets that would captivate and delight.
              </p>
              <p className="text-lg text-gray-700">
                Each bracelet in our collection is carefully crafted using the finest materials, ensuring that every piece is not just an accessory, but a work of art. We believe that a bracelet is more than just jewelry - it's a personal statement, a cherished memory, and a symbol of style.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Artisan crafting a bracelet"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-gradient-to-r from-[#81D8D0] to-[#6BC2BA] py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Experience the Charm</h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Discover our collection of exquisite bracelets, each designed to add a touch of elegance to your everyday style.
          </p>
          <Button onClick={() => setCurrentPage('bracelets')} variant="secondary" className="bg-white text-[#81D8D0] hover:bg-gray-100">View Collection</Button>
        </div>
      </motion.section>
    </div>
  )

  const BraceletsPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#81D8D0] mb-12">Our Bracelet Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bracelets.map((bracelet, index) => (
            <motion.div
              key={bracelet.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={bracelet.image}
                  alt={bracelet.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-[#81D8D0] hover:bg-gray-100">Quick View</Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#81D8D0] mb-2">{bracelet.name}</h3>
                <p className="text-gray-700 mb-2">${bracelet.price.toFixed(2)}</p>
                <div className="flex mb-4">
                  {renderStars(bracelet.rating)}
                  <span className="ml-2 text-gray-600">({bracelet.rating.toFixed(1)})</span>
                </div>
                <Button onClick={() => addToCart(bracelet)} className="w-full bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">Add to Cart</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const ContactPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#81D8D0] mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
          <form action="mailto:nafisa2796@gmail.com" method="post" encType="text/plain">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <Input type="text" id="name" name="name" required className="border-[#81D8D0] focus:ring-[#6BC2BA]" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" id="email" name="email" required className="border-[#81D8D0] focus:ring-[#6BC2BA]" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <Textarea id="message" name="message" rows={5} required className="border-[#81D8D0] focus:ring-[#6BC2BA]" />
            </div>
            <Button type="submit" className="w-full bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">Send Message</Button>
          </form>
        </div>
      </div>
    </motion.div>
  )

  const addToCart = (bracelet: { id: number; name: string; price: number }) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === bracelet.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === bracelet.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...bracelet, quantity: 1 }]
    })
  }

  const CartPage = () => {
    const [step, setStep] = useState('cart')
    const [shippingInfo, setShippingInfo] = useState({
      name: '',
      address: '',
      city: '',
      country: '',
      postalCode: ''
    })
    const [paymentInfo, setPaymentInfo] = useState({
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    })

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const handleShippingSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setStep('payment')
    }

    const handlePaymentSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setTimeout(() => {
        setCart([])
        setIsCartOpen(false)
        setStep('cart')
        // Replace the toast with an alert
        alert("Order Placed Successfully! Thank you for your purchase. Your order will be shipped soon.")
      }, 2000)
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-white p-8 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <button onClick={() => setIsCartOpen(false)} className="float-right text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total:</span>
                      <span>${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button onClick={() => setStep('shipping')} className="w-full mt-4 bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </>
          )}
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(value) => setShippingInfo({...shippingInfo, country: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">
                Proceed to Payment
              </Button>
            </form>
          )}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={paymentInfo.expiryDate}
                    onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={paymentInfo.cvv}
                    onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <Label>Shipping Method</Label>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">Standard Shipping ($5.99)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express">Express Shipping ($14.99)</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full bg-[#81D8D0] hover:bg-[#6BC2BA] text-white">
                Place Order
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'bracelets' && <BraceletsPage />}
          {currentPage === 'contact' && <ContactPage />}
        </motion.main>
      </AnimatePresence>
      <Footer />
      {isCartOpen && <CartPage />}
    </div>
  )
}
