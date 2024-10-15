export default function Text({value, children, ...props}) {
    return <span {...props} >{value || children}</span>;
  }
  