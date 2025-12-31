import React, { useState, useRef } from 'react';
import { X, Upload, Video } from 'lucide-react';
import { getVideoUrl } from '../utils/imageUtils';

const API_BASE_URL = 'https://biomed-phamacy-backend.vercel.app/api';

const VideoUpload = ({ videoUrl, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(videoUrl || '');
  const fileInputRef = useRef(null);

  React.useEffect(() => {
    setPreviewUrl(videoUrl || '');
  }, [videoUrl]);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    // Check if it's a video file
    if (!file.type.startsWith('video/')) {
      alert('Please select a video file');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('video', file);

      const response = await fetch(`${API_BASE_URL}/upload/video`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload video');
      }

      const data = await response.json();
      const newVideoUrl = data.videoUrl;
      
      setPreviewUrl(newVideoUrl);
      if (onChange) {
        onChange(newVideoUrl);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video. Please try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeVideo = () => {
    setPreviewUrl('');
    if (onChange) {
      onChange('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = Array.from(e.dataTransfer.files).find(file => 
      file.type.startsWith('video/')
    );
    
    if (file) {
      const fakeEvent = {
        target: {
          files: [file]
        }
      };
      handleFileSelect(fakeEvent);
    }
  };

  return (
    <div className="space-y-4">
      {/* Video Preview */}
      {previewUrl && (
        <div className="relative">
          <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
            <video
              src={getVideoUrl(previewUrl)}
              controls
              className="w-full h-auto max-h-64"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            type="button"
            onClick={removeVideo}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            title="Remove video"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Upload Area */}
      {!previewUrl && (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50 hover:bg-gray-100"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={uploading}
          />
          
          {uploading ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
              <p className="text-gray-600">Uploading video...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Video size={32} className="text-gray-400 mb-2" />
              <p className="text-gray-600 font-medium">
                Click to upload or drag and drop video
              </p>
              <p className="text-xs text-gray-400 mt-1">
                MP4, AVI, MOV up to 50MB (Optional)
              </p>
            </div>
          )}
        </div>
      )}

      {previewUrl && (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          Change Video
        </button>
      )}
    </div>
  );
};

export default VideoUpload;

