// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import { backendUrl } from "../App";
// import axios from "axios";
// import { toast } from "react-toastify";
// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(false);
//   const [image2, setImage2] = useState(false);
//   const [image3, setImage3] = useState(false);
//   const [image4, setImage4] = useState(false);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("Topwear");
//   const [bestseller, setBestseller] = useState(false);
//   const [sizes, setSizes] = useState([]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("price", price);
//       formData.append("bestseller", bestseller);
//       formData.append("sizes", JSON.stringify(sizes));
//       image1 && formData.append("image1", image1);
//       image2 && formData.append("image2", image2);
//       image3 && formData.append("image3", image3);
//       image4 && formData.append("image4", image4);

//       const response = await axios.post(
//         backendUrl + "/api/product/add",
//         formData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName("");
//         setCategory("");
//         setDescription("");
//         setImage1("");
//         setImage2("");
//         setImage3("");
//         setImage4("");
//         setPrice("");
//         setSizes("");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {}
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col gap-3 w-full items-start"
//     >
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           <label htmlFor="image1">
//             <img
//               className="w-20 "
//               src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage1(e.target.files[0])}
//               type="file"
//               id="image1"
//               hidden
//             />
//           </label>
//           <label htmlFor="image2">
//             <img
//               className="w-20 "
//               src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage2(e.target.files[0])}
//               type="file"
//               id="image2"
//               hidden
//             />
//           </label>
//           <label htmlFor="image3">
//             <img
//               className="w-20 "
//               src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage3(e.target.files[0])}
//               type="file"
//               id="image3"
//               hidden
//             />
//           </label>
//           <label htmlFor="image4">
//             <img
//               className="w-20 "
//               src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
//               alt=""
//             />
//             <input
//               onChange={(e) => setImage4(e.target.files[0])}
//               type="file"
//               id="image4"
//               hidden
//             />
//           </label>
//         </div>
//       </div>
//       <div className="w-full">
//         <p className="mb-2">Product Name:</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="type here"
//           required
//         />
//       </div>
//       <div className="w-full">
//         <p className="mb-2">Product Description:</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Write Content Here"
//           required
//         />
//       </div>
//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//         <div>
//           <p className="mb-2">Product Category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//           >
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Sub Category</p>
//           <select
//             onChange={(e) => setSubCategory(e.target.value)}
//             className="w-full px-3 py-2"
//           >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="Number"
//             placeholder="25"
//           />
//         </div>
//       </div>

//       <div>
//         <p className="mb-2">Product Sizes</p>
//         <div className="flex gap-3">
//           <div
//             onClick={() =>
//               setSizes((prev) =>
//                 prev.includes("S")
//                   ? prev.filter((item) => item !== "S")
//                   : [...prev, "S"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("S") ? "bg-pink-100" : "bg-slate-200 "
//               } px-3 py-1 cursor-pointer`}
//             >
//               S
//             </p>
//           </div>
//           <div
//             onClick={() =>
//               setSizes((prev) =>
//                 prev.includes("M")
//                   ? prev.filter((item) => item !== "M")
//                   : [...prev, "M"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("M") ? "bg-pink-100" : "bg-slate-200 "
//               } px-3 py-1 cursor-pointer`}
//             >
//               M
//             </p>
//           </div>
//           <div
//             onClick={() =>
//               setSizes((prev) =>
//                 prev.includes("L")
//                   ? prev.filter((item) => item !== "L")
//                   : [...prev, "L"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("L") ? "bg-pink-100" : "bg-slate-200 "
//               } px-3 py-1 cursor-pointer`}
//             >
//               L
//             </p>
//           </div>
//           <div
//             onClick={() =>
//               setSizes((prev) =>
//                 prev.includes("XL")
//                   ? prev.filter((item) => item !== "XL")
//                   : [...prev, "XL"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200 "
//               } px-3 py-1 cursor-pointer`}
//             >
//               XL
//             </p>
//           </div>
//           <div
//             onClick={() =>
//               setSizes((prev) =>
//                 prev.includes("XXL")
//                   ? prev.filter((item) => item !== "XXL")
//                   : [...prev, "XXL"]
//               )
//             }
//           >
//             <p
//               className={`${
//                 sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200 "
//               } px-3 py-1 cursor-pointer`}
//             >
//               XXL
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       <button type="submit" className=" w-28 py-3 mt-4 bg-black text-white">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setCategory("Men");
        setSubCategory("Topwear");
        setDescription("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const renderImageUpload = (image, setImage, id) => (
    <label key={id} htmlFor={id} className="cursor-pointer">
      <div className="border border-gray-300 w-24 h-24 rounded-md flex items-center justify-center overflow-hidden bg-gray-50">
        <img
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <input
        type="file"
        id={id}
        hidden
        onChange={(e) => setImage(e.target.files[0])}
      />
    </label>
  );

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Upload Images</label>
        <div className="flex gap-3 flex-wrap">
          {[
            renderImageUpload(image1, setImage1, "image1"),
            renderImageUpload(image2, setImage2, "image2"),
            renderImageUpload(image3, setImage3, "image3"),
            renderImageUpload(image4, setImage4, "image4"),
          ]}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Product Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter product name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="4"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write product description..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Sub Category
            </option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
            placeholder="Price"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Sizes</label>
        <div className="flex gap-2 flex-wrap">
          {sizeOptions.map((size) => (
            <button
              type="button"
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev, size]
                )
              }
              className={`px-4 py-1 rounded-full border ${
                sizes.includes(size)
                  ? "bg-blue-100 text-blue-700 border-blue-400"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          id="bestseller"
        />
        <label htmlFor="bestseller" className="text-sm cursor-pointer">
          Add to Bestsellers
        </label>
      </div>

      <button
        type="submit"
        className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
