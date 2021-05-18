import Head from 'next/head'
import { css } from '@emotion/react'
import { SolarSystem } from '../components/SolarSystem'
import { DatePicker } from '../components/DatePicker'
import React, { useState } from 'react'
import { CustomHead } from '../components/Head'

const initDate = new Date()

// TODO: figure out why css props throw typescript errors
// TOOD: Get deployments working

export default function Home() {
  const [date, setDate] = useState(initDate)
  return (
    <React.Fragment>
      <Head>
        <CustomHead />
      </Head>

      <main
        //@ts-ignore
        css={wrapperStyles}
      >
        <div
          //@ts-ignore
          css={solarSystemWrapper}
        >
          <SolarSystem date={date} />
        </div>
        <div
          //@ts-ignore
          css={dateSelectorStyles}
        >
          <DatePicker date={date} setDate={setDate} />
        </div>
      </main>
    </React.Fragment>
  )
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* align-items: center; */
`

const solarSystemWrapper = css`
  flex: 1 1 0px;
  overflow: hidden;
`

const dateSelectorStyles = css`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px;
`
