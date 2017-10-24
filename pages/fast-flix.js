import React from 'react'
import Link from 'next/link'
import GithubBadge from 'react-github-badge'

import { Head, Title, CtaButton, HeroImage, Frame, Content } from '../components'

export default function FastFlix () {
  return (
    <div className='container'>
      <Head
        title='Fast Flix | Jack Hanford'
        description='Modify playback speed of any video on netflix'
      />

      <GithubBadge
        url='https://github.com/hanford/fast-flix'
        title='Star on Github'
      />

      <Content>
        <Title>Fast Flix 🍿</Title>
        <p style={{marginTop: '0.5rem', marginBottom: '3rem'}}>Modify playback speed of any video on netflix</p>

        <HeroImage src='../static/fast-flix.jpg' />

        <CtaButton link='https://chrome.google.com/webstore/detail/ldcailklfommolipjecojcgodjdoaedi'>Add to Google chrome</CtaButton>

        <h2 style={{marginTop: '8rem'}}>How to video</h2>
        <p style={{maxWidth: '60rem', margin: '0 auto'}}>After installing the chrome extension, click the icon and you should be good to go!</p>

        <Frame src='https://www.youtube.com/embed/D2ry16dNEIY' />
      </Content>

      <style jsx>{`
        .container {
          display: flex;
          max-width: 100%;
          height: 100%;
          justify-content: center;
          text-align: center;
          overflow: hidden !important;
        }
      `}</style>
    </div>
  )
}
