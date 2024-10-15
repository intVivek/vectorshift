import s from './Select.module.scss';
import Text from "../Text/Text";

export default function Select({ type, label, options = [], ...props }) {
  return (
    <div className={s.container}>
      <Text className={s.name}>{label}</Text>
      <select className={s.select} {...props}>
        {options &&
          options.map((item) => (
            <option key={item?.value} value={item?.value} className={s.option}>
              {item?.text}
            </option>
          ))}
      </select>
    </div>
  );
}
