import { useMutation } from '@tanstack/react-query';

const submitData = async (pipelineData) => {
  const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pipelineData),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const usePipelineSubmission = () => {
  return useMutation({
    mutationFn: submitData,
  });
};

export default usePipelineSubmission;
