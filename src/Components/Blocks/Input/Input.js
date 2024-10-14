export default function Input({ name, ...props }) {
  return (
    <label>
      <Text>{name}</Text>
      <input type="text" {...props} />
    </label>
  );
}
[];
