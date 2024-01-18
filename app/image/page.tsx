"use client";
import { useState } from "react";
import axios from "axios";

interface IError {
  message: string;
}

const ImagePage = () => {
  const [textInput, setTextInput] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    try {
      const response = await axios.post("/api/generateImages", {
        textInput,
      });

      if (response.status === 200) {
        const responseData = response.data;
        setGeneratedImage(responseData.url || "Image not found");
        setError(null);
      } else {
        console.error("Image generation failed:", response.data.error);
        setGeneratedImage("Image generation failed");
        setError("Image generation failed");
      }
    } catch (error: any) {
      console.error("Error during image generation:", error.message);
      setGeneratedImage("Error during image generation");
      setError("Error during image generation");
    }
  };

  return (
    <div>
      <h1>Next.js OpenAI API Example</h1>
      <label>
        Enter Text:
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </label>
      <button onClick={handleGenerateImage}>Generate Image</button>

      {/* Display the generated image or error message */}
      {generatedImage && (
        <div>
          <h2>Generated Image</h2>
          <img src={generatedImage} alt="Generated" />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImagePage;
