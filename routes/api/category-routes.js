const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//Get all cards
router.get("/", async (req, res) => {
  try {
    const CategoryData = await Category.findAll({
      //include: [{ model: Product }],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories and associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Product }],
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Category Not Found!' });
      return;
    }
});
// find one category by its `id` value and its associated Products
router.post("/", async (req, res) => {
  try {
    const newCategoryData = await Category.create({
      //category_id: req.body.category_name,
    });
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put("/:id", (req, res) => {
  try {
    const CategoryData = await Category.save({
      where: {
        //id: req.params.id,
      },
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Category Not Found!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});
  

router.delete("/:id", (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'Category Not Found!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
