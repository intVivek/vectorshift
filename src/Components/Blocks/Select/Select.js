import Text from "../Text/Text";

export default function Select({ name, options = [], ...props }) {
  return (
    <label>
      <Text>{name}</Text>
      <select {...props}>
        {options &&
          options.map((item) => (
            <option key={item?.value} value={item?.value}>
              {item?.text}
            </option>
          ))}
      </select>
    </label>
  );
}
