import { useEffect, useRef } from 'react';
import { useTimer } from "react-use-precision-timer";

export default function useInterval(callback, delay) {
  const callbackRef = useRef();

  const timer = useTimer({ delay: delay }, callback);
  timer.start()
}
