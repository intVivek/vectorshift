import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Text from "../Text/Text";
import s from "./Input.module.scss";
import { Handle, Position } from "reactflow";

export default function Input({
  label,
  id,
  className,
  value,
  onChange,
  ...props
}) {
  const [inputValue, setInputValue] = useState(value);
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    let value = e.target.value;
  
    const lines = value.split('\n');
    const foundVariables = [];
    const seenVariableNames = new Set(); 
  
    lines.map((line, lineIndex) => {
      const startIndex = line.indexOf('{{');
      const endIndex = line.indexOf('}}');
  
      if (startIndex !== -1 && endIndex !== -1) {
        const variableName = line.slice(startIndex + 2, endIndex).trim();
  
        if (variableName && !seenVariableNames.has(variableName)) {
          seenVariableNames.add(variableName); 
          foundVariables.push({
            name: variableName,
            id: `${variableName}-${id}`,
            line: lineIndex + 1,
          });
        }
      }
    });

    if(foundVariables.length>handles.length){
      value=value+'\n';
    }
    setHandles(foundVariables);
    setInputValue(value);
    onChange && onChange(e);
  };
  
  
  
  

  useEffect(() => {
    console.log(handles);
  }, [handles]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue, handles]);

  return (
    <div className={s.container}>
      <Text className={s.name}>{label}</Text>
      <textarea
        ref={textareaRef}
        className={clsx(s.input, className)}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
        rows={1}
      />
      {handles &&
        handles.map((handle, i) => (
          <Handle
            key={`${handle.id}-${i}`}
            type="target"
            className={s.handle}
            position={Position.Left}
            style={{
              top: `${(handle.line - 1) * 16 + 25}px`,
            }}
            id={`${handle.id}`}
          />
        ))}
    </div>
  );
}
