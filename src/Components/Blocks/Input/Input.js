import clsx from "clsx";
import Text from "../Text/Text";
import s from './Input.module.scss'


export default function Input({ type, label, className, ...props }) {

  return (
    <div className={s.container}>
      <Text className={s.name}>{label}</Text>
      <input className={clsx(s.input, className)} type="text" {...props} />
    </div>
  );
}

