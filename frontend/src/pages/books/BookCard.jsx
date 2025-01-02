import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getimgUrl';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
const BookCard = ({ book }) => {
  const dispatch=useDispatch();

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div className="rounded-lg shadow-lg transition-shadow duration-300 p-4 bg-white flex flex-col sm:flex-row gap-6 min-h-[300px]">
      {/* Image Section */}
      <div className="sm:w-1/3 aspect-square flex items-center justify-center">
        <Link to={`/books/${book._id}`}>
          <img
            src={getImgUrl(book?.coverImage)}
            alt={`${book?.title} Cover`}
            className="w-full h-full object-contain rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </Link>
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-center">
        <Link to={`/books/${book._id}`}>
          <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
            {book?.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-5">
          {book?.description?.length > 80
            ? `${book.description.slice(0, 80)}...`
            : book?.description}
        </p>
        <p className="font-medium mb-5">
          ${book?.newPrice}{' '}
          <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
        </p>
        <div className="flex">
          <button 
          onClick={()=>handleAddToCart(book)}
          className="btn-primary px-6 py-2 flex items-center gap-2">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
