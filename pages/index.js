import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Motion, spring } from 'react-motion'
import Drawer from 'react-drag-drawer'

import { SocialModal, TiltedBack, Head } from '../components'

const name = (
  <span style={{fontWeight: 600}}>Jack Hanford</span>
)

export default class Landing extends PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  toggle = () => {
    this.setState((state) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <div>
        <Head />

        <TiltedBack />

        <div className='body'>

          <section className='container'>
            <div className='card'>
              <div className='content'>
                <div className='waver'>👋</div>
                <div className='intro'>
                  <div>Hi I'm {name}</div>
                  <div>I'm a senior software engineer at <a href='https://eaze.com' target='_blank'>Eaze</a>.</div>
                </div>

                <div className='button-row'>
                  <Link prefetch href='/projects'>
                    <a className='beauty-button'>Open source</a>
                  </Link>
                  <Link href='/writing'>
                    <a className='beauty-button'>Writing</a>
                  </Link>
                  <button className='beauty-button' onClick={this.toggle}>Contact me</button>
                </div>

                <div>
                  <Link href='/chirp'>
                    <a target='_blank'>Chirp 🐦</a>
                  </Link>

                  <br />
                  <Link href='/instachrome'>
                    <a target='_blank'>Instachrome</a>
                  </Link>

                  <br />

                  <Link href='/youtube-darkmode'>
                    <a target='_blank'>Youtube Darkmode</a>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </div>

        <Drawer
          open={expanded}
          onRequestClose={this.toggle}
          contentLabel='social modal'
          negativeScroll={-1}
        >
          <SocialModal toggle={this.toggle} />
        </Drawer>

        <style jsx>{`
          .body {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            background-color: white;
            justify-content: center;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: underline;
          }

          .container {
            width: 100%;
            color: #32325d;
          }

          .intro {
            font-size: 2rem;
            line-height: 2rem;
            letter-spacing: 0.03em;
            opacity: 0.9;
            margin: 1rem 0 2rem;
          }

          .intro > div:first-child {
            margin-bottom: 2rem;
          }

          .intro > div:last-child {
            font-size: 1.6rem;
            line-height: 2rem
          }

          .card {
            width: 50rem;
            max-width: 100%;
            color: #32325d;
            padding: 2rem 4rem;
            padding-top: 16rem;
            position: relative;
            margin: 0 auto
          }

          @media(max-width: 767px) {
            .card {
              padding-top: 1rem;
            }
          }

          .content {
            animation: fadeIn 0.6s linear;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .button-row {
            display: flex;
            margin: 1rem auto;

            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          @media(max-width: 767px) {
            .button-row {
              flex-direction: column;
            }
          }

          .button-row a,
          .button-row button {
            text-align: center;
            width: 100%;
            margin-right: 1rem;
          }

          @media(max-width: 767px) {
            .button-row a,
            .button-row button {
              margin-right: 0;
              margin-top: 1.5rem;
            }
          }

          .beauty-button {
            display: block;
            line-height: 4rem;
            padding: 0 1.4rem;
            box-shadow: 0 0.4rem 0.6rem rgba(50,50,93,.11), 0 0.1rem 0.3rem rgba(0,0,0,.08);
            background: #fff;
            border-radius: 0.4rem;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: .025em;
            color: #32325d;
            text-decoration: none;
            border: 0px;
            cursor: pointer;
            outline: none;
            transition: all 0.25s ease-out;
            border: 2px solid #db594b;
            color: #db594b;
            font-weight: bold;
            font-family: Brandon;
          }

          .beauty-button:hover {
            transform: scale(1.05);
          }

          .waver {
            font-size: 4rem;
          }
        `}</style>
      </div>
    )
  }
}
