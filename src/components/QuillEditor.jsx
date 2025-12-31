import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const QuillEditor = ({ value, onChange, placeholder = 'Enter text...' }) => {
  const quillRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || quillRef.current) return;

    // Clear wrapper content to prevent duplicates
    wrapperRef.current.innerHTML = '';

    // Create Quill instance
    const quill = new Quill(wrapperRef.current, {
      theme: 'snow',
      placeholder: placeholder,
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ]
      },
      formats: [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'color', 'background',
        'align',
        'link', 'image'
      ]
    });

    quillRef.current = quill;

    // Set initial value
    if (value) {
      quill.root.innerHTML = value;
    }

    // Handle text changes
    const handleTextChange = () => {
      if (onChange && quillRef.current) {
        const html = quillRef.current.root.innerHTML;
        onChange(html);
      }
    };

    quill.on('text-change', handleTextChange);

    return () => {
      if (quillRef.current) {
        quillRef.current.off('text-change', handleTextChange);
        // Clean up Quill instance
        if (wrapperRef.current) {
          wrapperRef.current.innerHTML = '';
        }
        quillRef.current = null;
      }
    };
  }, []);

  // Update Quill content when value prop changes (but not from internal changes)
  useEffect(() => {
    if (quillRef.current && value !== undefined) {
      const currentContent = quillRef.current.root.innerHTML;
      // Only update if the value is different (avoid infinite loops)
      if (currentContent !== value) {
        quillRef.current.root.innerHTML = value || '';
      }
    }
  }, [value]);

  return (
    <div className="bg-white rounded-lg" style={{ minHeight: '200px' }}>
      <div ref={wrapperRef} style={{ minHeight: '200px' }} />
    </div>
  );
};

export default QuillEditor;

