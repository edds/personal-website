import Link from 'next/link'
import styled from 'react-emotion'

import Observer from 'react-intersection-observer'

if (typeof window !== 'undefined') {
  require('intersection-observer')
}

export const Article = ({path, name, about, stars = '', language = ''}) => (
  <Observer triggerOnce>
    {inView => (
      <Link href={path}>
        <Container href={path} target='_blank' opacity={inView ? 1 : 0}>

          <Title>{name}</Title>
          <About>{about}</About>

          <Content style={{display: language ? 'flex' : 'none'}}>
            <Other>⭐️ {stars}</Other>
            <div style={{marginLeft: '1rem'}}>·</div>
            <Other style={{marginLeft: '1rem'}}>{language}</Other>
          </Content>
        </Container>
      </Link>
    )}
  </Observer>
)

const Container = styled.a`
  display: block;
  transition: all 0.2s linear;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  text-decoration: none;
  color: black;
  opacity: ${({ opacity}) => opacity};

  &:hover {
    border: 1px solid #d40052;
  }
`

const Title = styled.h4`
  color: #d40052;
  margin: 0;
  font-size: 1.8rem;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Other = styled.div`
  font-size: 1.2rem;
  opacity: 0.75;
  font-weight: bold;
`

const About = styled.p`
  margin: 0;
`

export default Article
