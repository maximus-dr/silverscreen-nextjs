
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { renderComponents } from '../core/functions/render';
import { API_ALL_EVENTS } from '../core/rest/paths';
const path = require('path');
// const fs = require('fs');


// export async function getStaticProps() {
//   const dbPath = path.join(process.cwd(), 'db/db.json');
//   const components = fs.readFileSync(dbPath, 'utf8');

//   const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
//     .then(res => res.data)
//     .catch(err => console.log(err));
  
//   return {
//     props: {
//       components: JSON.parse(components),
//       events
//     },
//     revalidate: 1
//   }
// }

const useClock = () => {
  return useSelector(
    (state) => ({
      lastUpdate: state.clock.lastUpdate,
      light: state.clock.light,
    }),
    shallowEqual
  )
}

const formatTime = (time) => {
  // cut off except hh:mm:ss
  return new Date(time).toJSON().slice(11, 19)
}

const Clock = () => {
  const { lastUpdate, light } = useClock()
  return (
    <div className={light ? 'light' : ''}>
      {formatTime(lastUpdate)}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  )
}

const useCounter = () => {
  const count = useSelector((state) => state.clock.count)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })
  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    })
  const reset = () =>
    dispatch({
      type: 'RESET',
    })
  return { count, increment, decrement, reset }
}

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args)

    if (delay !== null) {
      const id = setInterval(handler, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}






export default function Home(props) {

  // const Components = renderComponents(props.components);

  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <>
      <Clock />
      <Counter />   
    </>
  )
}
