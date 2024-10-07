import React from "react";

const FileUploader = ({ onFieldChange, imageUrl, setFiles }) => {
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles); // Store selected files in state
    onFieldChange(selectedFiles.length > 0 ? selectedFiles[0].name : ""); // Update form field
  };

  return (
    <div className="flex flex-col">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      {imageUrl && <img src={imageUrl} alt="Preview" className="w-full h-auto" />}
    </div>
  );
};

export default FileUploader;
