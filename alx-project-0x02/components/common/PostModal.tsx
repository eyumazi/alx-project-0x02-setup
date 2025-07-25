import { Modal } from "./Modal";
import { CardProps } from "@/interfaces";
import { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (card: CardProps) => void;
}

export const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  onAddPost,
}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState<string[]>([]);
  const [contentInput, setContentInput] = useState("");
  const [rating, setRating] = useState(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [iconsUrl] = useState<string[]>([
    "/assets/Icons/bed 1.svg",
    "/assets/Icons/bathtub 1.svg",
    "/assets/Icons/people 1.svg",
  ]);

  const handleAddContent = () => {
    if (contentInput.trim()) {
      setContent((prev) => [...prev, contentInput.trim()]);
      setContentInput("");
    }
  };

  const handleRemoveContent = (idx: number) => {
    setContent((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && location && price && content && rating && imagePreview) {
      const newCard: CardProps = {
        title,
        location,
        price,
        content,
        rating,
        imageUrl: imagePreview,
        iconsUrl,
      };
      onAddPost(newCard);
      setTitle("");
      setLocation("");
      setPrice("");
      setContent([]);
      setRating(0);
      setImagePreview(null);
      onClose();
    }
  };

  return (
    <Modal isopen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Create New Listing
          </h2>
          <p className="text-sm text-gray-500">
            Fill in the details of your property
          </p>
        </div>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title*
            </label>
            <input
              id="title"
              type="text"
              placeholder="Beautiful Apartment in Downtown"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Features/Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features/Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="e.g. Swimming Pool, WiFi, Parking"
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={handleAddContent}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Add</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveContent(idx)}
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location*
            </label>
            <input
              id="location"
              type="text"
              placeholder="123 Main St, City, Country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price*
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                id="price"
                type="text"
                placeholder="1500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rating (0-5)*
            </label>
            <div className="flex items-center gap-2">
              <input
                id="rating"
                name="rating"
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                min={0}
                max={5}
                step="0.1"
                required
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Image*
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-semibold text-blue-600">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !title ||
              !location ||
              !price ||
              !content.length ||
              !rating ||
              !imagePreview
            }
          >
            Create Listing
          </button>
        </div>
      </form>
    </Modal>
  );
};
