import { useTimer } from "react-use-precision-timer";

export default function useInterval(callback, delay) {
  const timer = useTimer({ delay: delay }, callback);
  timer.start()
}
