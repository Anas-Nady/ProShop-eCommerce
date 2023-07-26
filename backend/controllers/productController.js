import asyncHandler from "express-async-handler"; // Instead of using try and catch for handler errors
import Products from "./../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Products.count({ ...keyword });
  const products = await Products.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

export const createProduct = asyncHandler(async (req, res) => {
  const productIsExist = await Products.findOne({ name: req.body.name });

  if (productIsExist) {
    res.status(400);
    throw new Error("Product already exists");
  } else {
    const product = await Products.create(req.body);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Products.findByIdAndUpdate(req.params.id, req.body);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findByIdAndRemove(req.params.id);

  if (product) {
    res.json({ message: "Product is deleted." });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Products.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed.");
    }

    const review = {
      name: req.user.name,
      rating: +rating,
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  }
});

export const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});
