import '@/styles/globals.scss'
import { Layout } from '@/components'
import React,{useEffect,useState} from 'react'


export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />

  </Layout>
  )
}
