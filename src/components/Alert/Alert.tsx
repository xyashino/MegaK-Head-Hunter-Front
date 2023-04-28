import { useWindowSize } from "@hooks/useWindowSize";
import {Toaster, toast} from 'react-hot-toast'

type Props = {
  kind: 'success' | 'error',
  message: string,
  duration?: number,
};

export const Alert = ({kind, message, duration = 3000}: Props) => {
  const {width} = useWindowSize();
  const handle = () => toast[kind](message, {
    duration: duration,
    position: width < 768 ? 'bottom-right' : 'top-right',
  });

  return (
    <div className="Alert">
      <button onClick={handle}>click</button>
      <Toaster />
    </div>
  )
}