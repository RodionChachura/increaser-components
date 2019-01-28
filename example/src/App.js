import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { RoundButton, RerenderWithTime, THEME } from 'increaser-components'

const Page = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: ${p => p.theme.color.pageBackground};
`

const Section = styled.section`
  border-radius: 5px;
  padding: 20px;
  border: 1px solid ${p => p.theme.color.primary};
  display: flex;
  flex-direction: column;
`

const SectionName = styled.h3`
  margin: 10px 0;
  color: ${p => p.theme.color.mainFont};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-around;
`

const Text = styled.h3`
  color: ${p => p.theme.color.mainFont};
`

export default () => {
  const now = Date.now()

  return (
    <ThemeProvider theme={THEME}>
      <Page>
        <Section>
          <SectionName>RoundButton</SectionName>
          <Row>
            <RoundButton size='s' type='default'>D</RoundButton>
            <RoundButton size='s' type='primary'>P</RoundButton>
            <RoundButton size='s' type='action'>A</RoundButton>
          </Row>
          <Row>
            <RoundButton size='m' type='default'>D</RoundButton>
            <RoundButton size='m' type='primary'>P</RoundButton>
            <RoundButton size='m' type='action'>A</RoundButton>
          </Row>
          <Row>
            <RoundButton size='l' type='default'>D</RoundButton>
            <RoundButton size='l' type='primary'>P</RoundButton>
            <RoundButton size='l' type='action'>A</RoundButton>
          </Row>
          <Row>
            <RoundButton calling size='l' type='default'>D</RoundButton>
            <RoundButton calling size='l' type='primary'>P</RoundButton>
            <RoundButton calling size='l' type='action'>A</RoundButton>
          </Row>
        </Section>
        <Section>
          <SectionName>RerenderWithTime</SectionName>
          <Row>
            <RerenderWithTime milliseconds={1000} renderComponent={() => <Text>{Math.round((Date.now() - now) / 1000)}</Text>} />
          </Row>
        </Section>
      </Page>
    </ThemeProvider>
  )
}
