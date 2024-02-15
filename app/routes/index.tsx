import { css } from 'hono/css'
import { Suspense, ErrorBoundary } from 'hono/jsx'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

const ChildContent3 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  throw new Error('Error in child content 3')
}

const ChildContent2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <p>Counter children 2</p>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback="<p>Loading...</p>">
          <ChildContent3 />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

const ChildContent1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <p>Counter children 1</p>
      <Suspense fallback="<p>Loading...</p>">
        <ChildContent2 />
      </Suspense>
    </>
  )
}

const Children = async () => {
  return (
    <Suspense fallback="<p>Loading...</p>">
      <ChildContent1 />
    </Suspense>
  )
}

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'no name'
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <Counter>
        <Children />
      </Counter>
    </div>,
    { title: name }
  )
})
