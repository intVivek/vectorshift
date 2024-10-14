export default function Select({ name, ...props }) {
  return (
    <label>
      <Text>{name}</Text>
      <select {...props}>
        {options &&
          options.map(
            (option = <option value={option?.value}>{option?.text}</option>)
          )}
      </select>
    </label>
  );
}
