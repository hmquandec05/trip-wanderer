import React, { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  const handleUpload = () => {
    images.forEach((image) => {
      // Implement upload logic here, e.g., upload to server and get URL
      console.log("Uploading", image);
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFilesChange} />

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {previews.map((preview, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={preview}
              alt="Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <button
              onClick={() => removeImage(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <button onClick={handleUpload} style={{ marginTop: "20px" }}>
          Upload Images
        </button>
      )}
    </div>
  );
}

export default ImageUpload;
